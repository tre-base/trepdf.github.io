import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOMParser, parseHTML } from 'linkedom';
import { siteOrigin, siteBase, siteUrl } from '../site.config.mjs';

// Check the published HTML, rather than just the source templates. This catches
// broken project-site prefixes, generated route omissions and translation drift.
const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const downloads = JSON.parse(await readFile(path.join(root, 'src/data/downloads.json'), 'utf8'));
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const lists = await Promise.all(entries.map(entry => entry.isDirectory()
    ? listFiles(path.join(directory, entry.name))
    : [path.join(directory, entry.name)]));
  return lists.flat();
}

function urlForFile(filename) {
  const relative = path.relative(output, filename).split(path.sep).join('/');
  const route = relative === 'index.html' ? '' : relative.replace(/index\.html$/, '');
  return new URL(route, siteUrl).href;
}

function fileForUrl(url) {
  const prefix = `${siteBase}/`;
  if (url.origin !== siteOrigin || !url.pathname.startsWith(prefix)) return undefined;
  const relative = decodeURIComponent(url.pathname.slice(prefix.length));
  const filename = path.resolve(output, relative || '.', url.pathname.endsWith('/') ? 'index.html' : '');
  if (!filename.startsWith(`${output}${path.sep}`)) return undefined;
  return filename;
}

async function checkTarget(raw, source, { anchor = false } = {}) {
  check(Boolean(raw?.trim()), `${source}: empty URL`);
  if (!raw?.trim()) return;
  check(raw !== '#', `${source}: placeholder # link`);
  let target;
  try { target = new URL(raw, source); }
  catch { errors.push(`${source}: invalid URL ${raw}`); return; }
  if (['mailto:', 'tel:', 'data:'].includes(target.protocol)) return;
  check(['https:', 'http:'].includes(target.protocol), `${source}: unsupported URL scheme ${raw}`);
  if (target.origin !== siteOrigin) return;
  const filename = fileForUrl(target);
  check(Boolean(filename), `${source}: URL escapes the site base: ${raw}`);
  if (!filename) return;
  const exists = await stat(filename).then(s => s.isFile()).catch(() => false);
  check(exists, `${source}: missing target ${raw}`);
  if (!exists || !anchor || !target.hash || !filename.endsWith('.html')) return;
  const targetPage = pagesByFile.get(filename);
  let id;
  try { id = decodeURIComponent(target.hash.slice(1)); }
  catch { errors.push(`${source}: invalid fragment ${raw}`); return; }
  check(Boolean(targetPage?.document.getElementById(id))
    || [...(targetPage?.document.querySelectorAll('a[name]') || [])].some(a => a.getAttribute('name') === id),
  `${source}: missing fragment ${raw}`);
}

const files = await listFiles(output);
const pages = await Promise.all(files.filter(f => f.endsWith('.html')).map(async filename => {
  const { document } = parseHTML(await readFile(filename, 'utf8'));
  return { filename, document, url: urlForFile(filename), noindex: /\bnoindex\b/i.test(document.querySelector('meta[name="robots"]')?.getAttribute('content') || '') };
}));
const pagesByFile = new Map(pages.map(page => [page.filename, page]));
const pagesByUrl = new Map(pages.map(page => [page.url, page]));
const indexable = pages.filter(page => !page.noindex);
const titles = new Set();
const descriptions = new Set();
const canonicals = new Set();

check(indexable.length >= 20, `Expected at least 20 English/Vietnamese pages; found ${indexable.length}`);
check(pages.some(p => p.filename === path.join(output, '404.html') && p.noindex), '404.html must exist and have noindex');
const homepage = pagesByUrl.get(siteUrl);
check(/pdf editor/i.test(homepage?.document.querySelector('title')?.textContent || ''), 'English homepage title should describe TrePDF as a PDF editor');

for (const page of pages) {
  const { document, url, noindex } = page;
  const title = document.querySelector('title')?.textContent.trim();
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
  const lang = document.documentElement.getAttribute('lang');
  check(['en', 'vi'].includes(lang), `${url}: html lang must be en or vi`);
  check(document.querySelectorAll('h1').length === 1, `${url}: expected exactly one h1`);
  check(Boolean(document.querySelector('main')), `${url}: missing main landmark`);
  check(Boolean(title), `${url}: empty title`);
  check(Boolean(description), `${url}: empty description`);
  check(!titles.has(title), `${url}: duplicate title`);
  check(!descriptions.has(description), `${url}: duplicate description`);
  titles.add(title);
  descriptions.add(description);

  const canonicalNodes = [...document.querySelectorAll('link[rel="canonical"]')];
  if (!noindex) {
    check(canonicalNodes.length === 1, `${url}: expected one canonical`);
    const canonical = canonicalNodes[0]?.getAttribute('href');
    check(canonical === url, `${url}: canonical must be its absolute, base-aware URL (got ${canonical})`);
    check(!canonicals.has(canonical), `${url}: duplicate canonical`);
    check(url.endsWith('/'), `${url}: indexable route needs a trailing slash`);
    canonicals.add(canonical);

    const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
    const alternateMap = new Map(alternates.map(a => [a.getAttribute('hreflang'), a.getAttribute('href')]));
    check(alternates.length === 3 && ['en', 'vi', 'x-default'].every(l => alternateMap.has(l)), `${url}: expected en, vi and x-default alternates`);
    check(alternateMap.get(lang) === url, `${url}: hreflang must include itself`);
    check(alternateMap.get('x-default') === alternateMap.get('en'), `${url}: x-default must point to English`);
    for (const [language, alternateUrl] of alternateMap) {
      const other = pagesByUrl.get(alternateUrl);
      check(Boolean(other) && !other.noindex, `${url}: alternate is not a built indexable URL: ${alternateUrl}`);
      if (!other) continue;
      if (language !== 'x-default') check(other.document.documentElement.getAttribute('lang') === language, `${url}: alternate language mismatch ${alternateUrl}`);
      const reciprocal = [...other.document.querySelectorAll('link[rel="alternate"][hreflang]')]
        .find(a => a.getAttribute('hreflang') === lang)?.getAttribute('href');
      check(reciprocal === url, `${url}: missing reciprocal alternate from ${alternateUrl}`);
    }
    check(document.querySelector('meta[property="og:url"]')?.getAttribute('content') === url, `${url}: Open Graph URL must match canonical`);
  }

  const ids = new Set();
  for (const element of document.querySelectorAll('[id]')) {
    const id = element.getAttribute('id');
    check(!ids.has(id), `${url}: duplicate element id ${id}`);
    ids.add(id);
  }
  for (const a of document.querySelectorAll('a')) {
    check(a.hasAttribute('href'), `${url}: anchor without href`);
    await checkTarget(a.getAttribute('href'), url, { anchor: true });
    check(Boolean(a.textContent.trim() || a.getAttribute('aria-label') || a.querySelector('img[alt]')?.getAttribute('alt')), `${url}: unnamed anchor`);
  }
  for (const resource of document.querySelectorAll('[src], link[rel="stylesheet"], link[rel="icon"], link[rel="preload"]')) {
    await checkTarget(resource.getAttribute('src') || resource.getAttribute('href'), url);
  }
  for (const resource of document.querySelectorAll('[srcset]')) {
    for (const candidate of resource.getAttribute('srcset').split(',')) {
      await checkTarget(candidate.trim().split(/\s+/)[0], url);
    }
  }
  for (const demo of document.querySelectorAll('[data-demo-select]')) {
    await checkTarget(demo.getAttribute('data-demo-src'), url);
    await checkTarget(demo.getAttribute('data-demo-poster'), url);
    check(Boolean(demo.getAttribute('data-demo-alt')?.trim()), `${url}: demo missing alt text`);
  }
  for (const img of document.querySelectorAll('img')) {
    check(img.hasAttribute('alt'), `${url}: image missing alt text`);
    check(Number(img.getAttribute('width')) > 0 && Number(img.getAttribute('height')) > 0, `${url}: image missing intrinsic width/height`);
  }
  const socialImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
  check(Boolean(socialImage?.startsWith(`${siteOrigin}${siteBase}/`)), `${url}: missing absolute Open Graph image`);
  if (socialImage) await checkTarget(socialImage, url);

  const structuredData = [...document.querySelectorAll('script[type="application/ld+json"]')];
  if (!noindex) check(structuredData.length > 0, `${url}: missing structured data`);
  for (const script of structuredData) {
    try {
      const parsed = JSON.parse(script.textContent);
      const visit = value => {
        if (!value || typeof value !== 'object') return;
        for (const [key, child] of Object.entries(value)) {
          check(!['aggregateRating', 'review', 'offers'].includes(key), `${url}: do not publish unverified ratings, reviews or pricing`);
          if (key === 'downloadUrl') check(typeof child === 'string' && child.length > 0 && downloads.some(d => d.url === child), `${url}: unconfigured downloadUrl in structured data`);
          visit(child);
        }
      };
      visit(parsed);
    } catch (error) { errors.push(`${url}: invalid JSON-LD: ${error.message}`); }
  }
}

// A valid sitemap alone does not make a page discoverable through navigation.
const reachable = new Set();
const pending = [siteUrl];
while (pending.length) {
  const current = pending.pop();
  if (reachable.has(current)) continue;
  reachable.add(current);
  const page = pagesByUrl.get(current);
  if (!page) continue;
  for (const a of page.document.querySelectorAll('a[href]')) {
    try {
      const destination = new URL(a.getAttribute('href'), current);
      destination.hash = '';
      destination.search = '';
      if (pagesByUrl.has(destination.href) && !reachable.has(destination.href)) pending.push(destination.href);
    } catch { /* The URL validator above reports malformed links. */ }
  }
}
for (const page of indexable) check(reachable.has(page.url), `${page.url}: orphaned page is not reachable from the homepage`);

for (const relative of ['download/', 'vi/tai-xuong/']) {
  const url = new URL(relative, siteUrl).href;
  const page = pagesByUrl.get(url);
  check(Boolean(page), `Missing download page ${url}`);
  if (!page) continue;
  for (const download of downloads) {
    const card = [...page.document.querySelectorAll('[data-download-id]')].find(node => node.getAttribute('data-download-id') === download.id);
    check(Boolean(card), `${url}: missing platform ${download.id}`);
    if (!card) continue;
    if (download.url) {
      check(/^https:\/\//.test(download.url), `${download.id}: installer URL must use HTTPS`);
      check([...card.querySelectorAll('a[href]')].some(a => a.getAttribute('href') === download.url), `${url}: configured download is not linked`);
    } else {
      check(Boolean(card.querySelector('button[disabled]')), `${url}: unavailable download ${download.id} must have a disabled button`);
      check(card.querySelectorAll('a[href]').length === 0, `${url}: unavailable download ${download.id} must not expose a fake link`);
    }
  }
}

// A sitemap is a set of canonical pages, not every generated file or the 404.
const sitemap = new DOMParser().parseFromString(await readFile(path.join(output, 'sitemap.xml'), 'utf8'), 'application/xml');
const sitemapUrls = [...sitemap.querySelectorAll('url > loc')].map(node => node.textContent.trim());
check(sitemap.documentElement.localName === 'urlset', 'sitemap.xml must be a sitemap urlset');
check(new Set(sitemapUrls).size === sitemapUrls.length, 'sitemap.xml contains duplicate URLs');
try { assert.deepEqual([...sitemapUrls].sort(), [...indexable.map(page => page.url)].sort()); }
catch { errors.push('sitemap.xml must contain exactly all indexable canonical pages'); }
const robots = await readFile(path.join(output, 'robots.txt'), 'utf8');
check(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), 'robots.txt sitemap URL does not match deployment configuration');
check(!/^Disallow:\s*\/\s*$/mi.test(robots), 'robots.txt must not disallow the whole site');

if (errors.length) {
  console.error(`SEO/link checks failed (${errors.length}):\n${errors.map(e => `  - ${e}`).join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`SEO/link checks passed: ${indexable.length} indexable pages, ${pages.length - indexable.length} noindex page, bilingual alternates, sitemap, resources and download states.`);
}
