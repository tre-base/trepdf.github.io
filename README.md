# TrePDF website

An English/Vietnamese/Thai/French product website for TrePDF, built with Astro and published as static HTML on GitHub Pages. The English homepage targets “PDF editor”; dedicated feature pages and guides explain actual editing, font, OCR and annotation workflows.

The initial installer URLs, version numbers and platform requirements are deliberately empty. An unavailable installer is shown as a disabled control rather than an empty or misleading link. No public release, pricing, rating or download count is invented.

## Local development

Use Node.js 24 LTS and npm. Dependencies are pinned by `package-lock.json`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, including `/trepdf.github.io/`. The project-site prefix is used locally too, so broken absolute paths are visible before deployment.

```sh
npm run check
npm run build
npm run test:seo
npm run preview
```

`dist/` contains the publishable static website. Each page has its own HTML file, so deep links can be opened and refreshed without client-side routing.

The SEO check parses the generated HTML and verifies titles, descriptions, one H1, unique self-referencing canonicals, reciprocal English/Vietnamese/Thai/French alternates, sitemap membership, JSON-LD, image dimensions, local asset paths, links and fragment targets. It also verifies that downloads remain disabled until their URLs are supplied. It does not submit pages to Google or promise indexing or rankings.

For browser/layout/accessibility checks, install Playwright's browser once and run the separate UI check:

```sh
npm run build
npx playwright install chromium
npm run test:ui
```

The UI check starts and closes its own local server. It checks every page at phone and desktop widths, audits key pages in both themes, exercises navigation and downloads, and writes screenshots to the ignored `reports/` directory.

## Edit content

- `src/data/home.ts`: English/Vietnamese homepage copy and the combined four-language homepage catalog.
- `src/data/articles.ts`: English/Vietnamese feature pages, guides, updates and privacy content plus the combined four-language catalog. Keep each `id` consistent across all languages and each section in the same order; specialized feature templates use those sections. Each translation has its own stable `slug`.
- `src/data/locales/th.ts` and `src/data/locales/fr.ts`: Thai and French homepage and article translations.
- `src/data/languages.ts`: supported language codes, native names and Open Graph locales.
- `src/data/site.ts`: navigation labels, shared route lookup and URL helpers.
- `src/data/downloads.json`: installer availability and release information.
- `src/pages/` and `src/components/`: page templates and reusable UI.
- `public/`: static images and icons.
- `site.config.mjs`: the canonical site origin and deployment prefix.

Use the shared route and asset helpers for links rather than hard-coding `/` paths. English, Vietnamese, Thai and French pages have separate URLs, self-canonicals and reciprocal `hreflang`; a language switch goes to the equivalent page. Keep link text descriptive and keep headings focused on the page's subject.

When adding a new article, add all four language versions, give each an original title and description, and link to it from a relevant guide or feature page. Run the checks after building. Do not change established slugs casually: GitHub Pages does not provide arbitrary server-side redirect rules, and changing a public URL needs a migration plan.

Product claims must match the tested application. In particular, OCR recognizes English/Vietnamese and exports a separate searchable PDF; supported text editing has PDF/font constraints; visible signatures are not certificate-based digital signatures. Font downloads require the applicable provider and available font faces. Do not label an untested platform release as available.

## Language routes and navigation

English stays at the site root, Vietnamese at `vi/`, Thai at `th/` and French at `fr/`. Existing English/Vietnamese slugs remain unchanged. Thai routes use descriptive ASCII English segments for easy sharing; French routes use French words without accents (for example `fr/fonctionnalites/modifier-pdf/`). All 11 page types exist in each language, for 44 indexable pages.

The native language disclosure links to the equivalent page in all four languages and works without JavaScript. Escape restores focus to its summary; outside clicks close it. Every canonical page includes four reciprocal HTML `hreflang` tags and English `x-default`. The sitemap contains the same canonical URLs. Noto Sans Thai supplies bundled glyphs; Thai headings use normal tracking and room for stacked marks. These website languages do not add OCR recognition languages: OCR still supports English and Vietnamese. Application screenshots retain the actual captured English UI; their surrounding captions and alternative text are translated.

## Add installer links later

Edit the matching entry in `src/data/downloads.json`:

```json
{
  "id": "mac-arm",
  "os": "macOS",
  "architecture": "Apple Silicon",
  "url": "",
  "version": "",
  "requirements": ""
}
```

Replace `url` with the full HTTPS URL of a real, tested installer. Fill `version` and `requirements` with the matching release information. Keep other platforms empty until their packages are ready. The download pages in all four languages use this one file; adding a valid URL enables the corresponding link. When publishing the first package, also update the coming-soon copy in `src/data/home.ts` and `src/components/Downloads.astro`, and add accurate release notes in `src/data/articles.ts`. Keep the download page URL stable when changing release assets. Check the external installer URL yourself: the automated link check validates local pages and URL format, not the contents of external binaries.

## GitHub Pages deployment

The default deployment URL is `https://tre-base.github.io/trepdf.github.io/`. The repository name alone does not create a `trepdf.github.io` hostname.

1. In the GitHub repository, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Push the reviewed website to `main`, or run **Check and deploy TrePDF website** manually from `main`.
3. The workflow installs from the lockfile, checks the source, builds static pages, checks generated SEO/links and browser behavior, uploads `dist/` and deploys through the `github-pages` environment.
4. Pull requests run the same build, SEO and browser checks but never deploy. The deploy job is restricted to `main`, including manual runs.
5. Open the deployed homepage, a nested guide URL and the Vietnamese equivalent. Check images, navigation, 404 behavior and any enabled download links.

This repository contains deployment configuration; local build success does not mean the website has already been published. Pages must be enabled in the repository and a deployment must complete.

The workflow follows GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and uses [setup-node](https://github.com/actions/setup-node) to select Node.js.

### Custom domain or a different repository

`SITE_ORIGIN` is the HTTPS origin without a trailing slash; `SITE_BASE` is the path prefix. Use `/` for a domain-root website. Both settings feed the page links, assets, canonical URLs, social metadata, sitemap and robots output.

```sh
SITE_ORIGIN=https://your-domain.example SITE_BASE=/ npm run build
SITE_ORIGIN=https://your-domain.example SITE_BASE=/ npm run test:seo
```

Use your actual domain, not the example above. In GitHub **Settings → Secrets and variables → Actions → Variables**, set both `SITE_ORIGIN` and `SITE_BASE` to the corresponding production values. For a root site, set `SITE_BASE` explicitly to `/`; leaving the variable empty uses the default project prefix. Configure the custom domain and DNS through GitHub Pages, then enable HTTPS. Rebuild with the same settings used by the deployed site. Do not deploy canonical URLs pointing at localhost or a preview environment.

## Search discovery after publication

The site emits `sitemap.xml`, canonical links, alternate-language links, Open Graph metadata and truthful structured data. There are no invented ratings, reviews or prices.

After the production site is reachable:

1. Add the exact production URL prefix to [Google Search Console](https://search.google.com/search-console/). For the default project deployment, use `https://tre-base.github.io/trepdf.github.io/`. Verify ownership using a method available to your account. An HTML verification file can go in `public/` with the exact filename/content Google provides; rebuild and deploy it before verifying.
2. Submit the full production sitemap URL, initially `https://tre-base.github.io/trepdf.github.io/sitemap.xml`.
3. Use URL Inspection on the homepage, PDF editor feature page and their Vietnamese versions. Check Google's selected canonical and indexing status after crawling.
4. Track impressions, queries and clicks, including `pdf editor` and specific editing/OCR/font queries. Improve pages based on observed needs instead of repeatedly inserting keywords.

At a GitHub **project** path, `/trepdf.github.io/robots.txt` is a useful generated artifact but does not govern the host's crawl rules: crawlers read `https://tre-base.github.io/robots.txt`. If you control the separate host-root site, add the project's absolute sitemap URL to that root robots file without overwriting rules needed by other projects. Submitting the sitemap directly in Search Console is another discovery path. On a custom root domain, the generated robots file is served at the correct root URL.

Search Console ownership, sitemap submission and live indexing have not been performed by generating this repository. Search ranking is not guaranteed by technical checks. See Google's [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) for the distinction between crawlability, indexing and ranking.

## Asset licenses

Manrope and Noto Sans Thai are self-hosted under the SIL Open Font License; Tabler SVG icons use the MIT license. Their license texts ship in `public/licenses/`. The TrePDF logo and screenshots come from the application; screenshot provenance is recorded in `public/images/README.md`.

## Homepage feature demos

The homepage pairs text editing, Form design and OCR with three selectable GIF demos. Source: `src/components/FeatureDemos.astro`; assets and capture details: `public/demos/README.md`. Only the selected demo plays while visible. Stop restores its WebP poster, and reduced-motion/data-saving preferences use posters by default. All feature descriptions and links are rendered without JavaScript. `test:ui` checks selection, keyboard use, playback, reduced motion, offscreen stopping and failed-GIF fallback; `test:seo` checks both GIF and poster paths.
