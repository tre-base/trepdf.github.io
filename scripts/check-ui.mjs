import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { siteBase } from '../site.config.mjs';

// Exercise built HTML through a local server: no development-only scripts or
// external service is needed. Missing paths use the real Pages 404 document.
const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const downloads = JSON.parse(await readFile(path.join(root, 'src/data/downloads.json'), 'utf8'));
const reports = path.join(root, 'reports');
await mkdir(reports, { recursive: true });
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.webp': 'image/webp', '.gif': 'image/gif', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    assert(pathname.startsWith(`${siteBase}/`));
    let file = path.resolve(dist, pathname.slice(siteBase.length + 1));
    assert(file === dist || file.startsWith(`${dist}${path.sep}`));
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(await readFile(path.join(dist, '404.html')));
  }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}${siteBase}/`;
let browser;
const errors = [];
try {
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ colorScheme: 'light', reducedMotion: 'reduce' });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400 && !response.url().includes('missing-test-page')) errors.push(`${response.status()} ${response.url()}`); });
  const xml = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  const routes = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname.slice(siteBase.length + 1));
  // Every route is checked at a narrow phone width and desktop width, including
  // Vietnamese strings, long headings and the article table of contents.
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(new URL(route, base).href);
      await page.evaluate(() => document.fonts.ready);
      const measurements = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }));
      assert(measurements.content <= measurements.width + 1, `${route || '/'} overflows at ${width}px: ${JSON.stringify(measurements)}`);
      // Lazy images are intentionally below the fold; scroll them into view
      // before checking their network and decode results.
      for (const img of await page.locator('img').all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate(el => el.decode());
      }
    }
  }
  await page.goto(base);
  await page.screenshot({ path: path.join(reports, 'home-desktop.png'), fullPage: true });
  const auditRoutes = ['', 'vi/', 'download/', 'vi/tai-xuong/', 'features/pdf-editor/', 'vi/huong-dan/tu-dong-tai-font/', 'features/pdf-form-designer/', 'vi/tinh-nang/thiet-ke-form-pdf/', 'features/pdf-ocr/', 'vi/tinh-nang/ocr-pdf/'];
  for (const theme of ['light', 'dark']) {
    await page.evaluate(theme => localStorage.setItem('trepdf-theme', theme), theme);
    for (const route of auditRoutes) {
      await page.setViewportSize({ width: route.startsWith('vi') ? 390 : 1440, height: 900 });
      await page.goto(new URL(route, base).href);
      const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
      assert.equal(result.violations.length, 0, `${theme} ${route}: ${JSON.stringify(result.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), null, 2)}`);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base);
  await page.locator('[data-theme-toggle]').click();
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light');
  await page.reload();
  assert.equal(await page.locator('[data-theme-toggle]').getAttribute('aria-pressed'), 'false');
  await page.screenshot({ path: path.join(reports, 'home-desktop.png'), fullPage: true });
  await page.screenshot({ path: path.join(reports, 'home-hero.png') });
  await page.locator('[data-theme-toggle]').click();
  await page.screenshot({ path: path.join(reports, 'home-dark.png'), fullPage: true });
  const faq = page.locator('.faq-list details').first();
  await faq.locator('summary').click();
  assert(await faq.evaluate(el => el.open), 'FAQ must expand');
  await page.goto(new URL('features/pdf-editor/', base).href);
  await page.locator('.language-link').click();
  assert(page.url().endsWith('/vi/tinh-nang/chinh-sua-pdf/'), 'Language switch must preserve current article');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(new URL('vi/', base).href);
  await page.locator('[data-theme-toggle]').click();
  await page.screenshot({ path: path.join(reports, 'home-mobile-vi.png'), fullPage: true });
  await page.screenshot({ path: path.join(reports, 'home-mobile-hero.png') });
  const menu = page.locator('.mobile-menu');
  await menu.locator('summary').click();
  assert(await menu.evaluate(el => el.open), 'Mobile menu must open');
  await page.keyboard.press('Escape');
  assert.equal(await menu.evaluate(el => el.open), false, 'Escape must close menu');
  await menu.locator('summary').click();
  await menu.locator('a').last().click();
  assert(page.url().endsWith('/vi/tai-xuong/'), 'Mobile download link must work');
  assert.equal(await menu.evaluate(el => el.open), false);
  assert.equal(await page.locator('[data-download-id] button:disabled').count(), downloads.filter(d => !d.url).length);
  for (const download of downloads.filter(d => d.url)) {
    assert.equal(await page.locator(`[data-download-id="${download.id}"] a`).getAttribute('href'), download.url);
  }
  const missing = await page.goto(new URL('missing-test-page/', base).href);
  assert.equal(missing.status(), 404);
  assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex, follow');
  // Demo selection must work with keyboard input and respect reduced motion.
  // The GIF is only requested on explicit Play in this reduced-motion context.
  const gifRequests = [];
  page.on('request', request => { if (request.url().endsWith('.gif')) gifRequests.push(request.url()); });
  await page.goto(new URL('vi/', base).href);
  const demo = page.locator('[data-feature-demos]');
  const demoImage = demo.locator('[data-demo-image]');
  const motion = demo.locator('[data-demo-motion]');
  await demoImage.scrollIntoViewIfNeeded();
  for (const [id, file] of [['editor', 'edit-text'], ['forms', 'form-design'], ['ocr', 'ocr']]) {
    const button = demo.locator(`[data-demo-select="${id}"]`);
    await button.focus();
    await page.keyboard.press('Enter');
    assert.equal(await button.getAttribute('aria-pressed'), 'true');
    assert.equal(await demo.locator('[data-demo-select][aria-pressed="true"]').count(), 1);
    assert((await demoImage.getAttribute('src')).endsWith(`${file}.webp`));
    await demoImage.evaluate(img => img.decode());
  }
  assert.equal(gifRequests.length, 0, 'Reduced motion must not automatically fetch GIFs');
  await motion.click();
  await page.waitForFunction(() => document.querySelector('[data-demo-image]').getAttribute('src').endsWith('ocr.gif'));
  await demoImage.evaluate(img => img.decode());
  await motion.click();
  assert((await demoImage.getAttribute('src')).endsWith('ocr.webp'));
  await demo.locator('[data-demo-select="forms"]').click();
  assert((await demoImage.getAttribute('src')).endsWith('form-design.webp'), 'Switching demos preserves Stop');
  // With normal motion, scroll into view to start, switch all sources and
  // scroll away to stop. A later system preference change must stop immediately.
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  for (const [id, file] of [['editor', 'edit-text'], ['forms', 'form-design'], ['ocr', 'ocr']]) {
    await demo.locator(`[data-demo-select="${id}"]`).click();
    await page.waitForFunction(file => document.querySelector('[data-demo-image]').getAttribute('src').endsWith(`${file}.gif`), file);
    await demoImage.evaluate(img => img.decode());
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForFunction(() => document.querySelector('[data-feature-demos]').dataset.playing === 'false');
  assert((await demoImage.getAttribute('src')).endsWith('ocr.webp'));
  await demoImage.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('[data-feature-demos]').dataset.playing === 'true');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => document.querySelector('[data-feature-demos]').dataset.playing === 'false');
  // Broken animation assets fall back to the real poster and can be retried.
  await page.route('**/demos/ocr.gif', route => route.abort());
  await motion.click();
  await page.waitForFunction(() => document.querySelector('[data-demo-status]').textContent.includes('Không tải được'));
  assert((await demoImage.getAttribute('src')).endsWith('ocr.webp'));
  await page.unroute('**/demos/ocr.gif');
  await page.locator('html').evaluate(el => el.setAttribute('data-theme', 'light'));
  await page.locator('#features').screenshot({ path: path.join(reports, 'feature-demos-mobile.png') });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await demo.locator('[data-demo-select="editor"]').click();
  await demoImage.evaluate(img => img.decode());
  await page.locator('#features').screenshot({ path: path.join(reports, 'feature-demos-desktop.png') });
  await page.locator('html').evaluate(el => el.setAttribute('data-theme', 'dark'));
  await page.locator('#features').screenshot({ path: path.join(reports, 'feature-demos-dark.png') });
  assert.deepEqual(errors, [], 'Unexpected page errors or missing resources');
  // Navigation, copy and native disclosure widgets remain usable without JS.
  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const staticPage = await noJs.newPage();
  await staticPage.goto(base);
  assert.equal(await staticPage.locator('[data-demo-controls]').isVisible(), false);
  assert.equal(await staticPage.locator('[data-demo-motion]').isVisible(), false);
  assert.equal(await staticPage.locator('[data-demo-feature] a').count(), 3, 'Feature links remain available without JS');
  await staticPage.locator('.mobile-menu summary').click();
  await staticPage.locator('.mobile-menu a').last().click();
  assert(staticPage.url().endsWith('/download/'));
  await noJs.close();
  console.log(`UI checks passed: ${routes.length} pages at 320/768/1440px, ${auditRoutes.length * 2} WCAG audits, demo selection/play/stop/reduced-motion/fallback, theme persistence, translated routes, menu, FAQ, downloads, 404 and no-JS navigation. Screenshots: reports/`);
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
