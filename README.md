# TrePDF website

An English/Vietnamese/Thai/French product website for TrePDF, built with Astro and published as static HTML on GitHub Pages. The English homepage targets “PDF editor”; dedicated feature pages and guides explain actual editing, font, OCR and annotation workflows.

The download page has one Apple Silicon (M1/M2/M3/M4/M5/M6) section with a macOS selector: 12 Monterey, 13 Ventura, 14 Sonoma, 15 Sequoia, 26 Tahoe and 27 Golden Gate. A matching download link appears only after selection. Apple Silicon installers are available through Google Drive; Intel Mac, Windows and Linux have separate entries awaiting links. No pricing, rating or download count is invented.

## Local development

Use Node.js 24 LTS and npm. Dependencies are pinned by `package-lock.json`.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro at `/`. Local development uses the same root paths as the production website at `https://trepdf.io.vn/`.

```sh
npm run check
npm run build
npm run test:seo
npm run preview
```

`dist/` contains the publishable static website. Each page has its own HTML file, so deep links can be opened and refreshed without client-side routing.

The SEO check parses the generated HTML and verifies titles, descriptions, one H1, unique self-referencing canonicals, reciprocal English/Vietnamese/Thai/French alternates, sitemap membership, JSON-LD, image dimensions, local asset paths, links and fragment targets. It also checks that the build uses the domain root, that `CNAME` matches the configured hostname, and that downloads remain disabled until their URLs are supplied. It does not submit pages to Google or promise indexing or rankings.

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
- `src/data/macos-downloads.json`: Apple Silicon installer links and optional release versions, grouped by macOS version.
- `src/data/downloads.json`: Intel Mac, Windows and Linux installer availability and release information.
- `src/data/contact.json`: public contact email and announced TrePDF version.
- `src/pages/` and `src/components/`: page templates and reusable UI.
- `public/`: static images and icons.
- `site.config.mjs`: the canonical site origin and deployment prefix.

Use the shared route and asset helpers for links rather than hard-coding `/` paths. English, Vietnamese, Thai and French pages have separate URLs, self-canonicals and reciprocal `hreflang`; a language switch goes to the equivalent page. Keep link text descriptive and keep headings focused on the page's subject.

When adding a new article, add all four language versions, give each an original title and description, and link to it from a relevant guide or feature page. Run the checks after building. Do not change established slugs casually: GitHub Pages does not provide arbitrary server-side redirect rules, and changing a public URL needs a migration plan.

Product claims must match the tested application. In particular, OCR recognizes English/Vietnamese and exports a separate searchable PDF; supported text editing has PDF/font constraints; visible signatures are not certificate-based digital signatures. Font downloads require the applicable provider and available font faces. Do not label an untested platform release as available.

## Language routes and navigation

English stays at the site root, Vietnamese at `vi/`, Thai at `th/` and French at `fr/`. Existing English/Vietnamese slugs remain unchanged. Thai routes use descriptive ASCII English segments for easy sharing; French routes use French words without accents (for example `fr/fonctionnalites/modifier-pdf/`). All 13 page types exist in each language, for 52 indexable pages.

The native language disclosure links to the equivalent page in all four languages and works without JavaScript. Escape restores focus to its summary; outside clicks close it. Every canonical page includes four reciprocal HTML `hreflang` tags and English `x-default`. The sitemap contains the same canonical URLs. Noto Sans Thai supplies bundled glyphs; Thai headings use normal tracking and room for stacked marks. These website languages do not add OCR recognition languages: OCR still supports English and Vietnamese. Application screenshots retain the actual captured English UI; their surrounding captions and alternative text are translated.

## Contact page and version information

The Contact link appears in desktop navigation, the collapsed menu and the footer. Routes are `contact/`, `vi/lien-he/`, `th/contact/` and `fr/contact/`; switching languages keeps the Contact page. It uses the same canonical, alternate-language and sitemap pipeline as other pages.

Edit `src/data/contact.json` to update the public email or announced application version for all four languages. The email opens the visitor’s mail application through a normal `mailto:` link and works without JavaScript. The website does not submit email or collect messages itself.

`version` is deliberately empty until a public release number is confirmed. The page displays a translated “Not announced yet” instead of treating the website package version, a local app build or a UAT build as a public release. When announcing a release, set this value and update the matching download entries and release notes together. Download availability remains controlled by `src/data/macos-downloads.json` and `src/data/downloads.json`.

## Manage installer links

For Apple Silicon, edit the matching OS entry in `src/data/macos-downloads.json`:

```json
{
  "id": "13",
  "name": "Ventura",
  "url": "",
  "version": ""
}
```

The six entries are `12` / Monterey, `13` / Ventura, `14` / Sonoma, `15` / Sequoia, `26` / Tahoe and `27` / Golden Gate. The current Google Drive links use one installer for macOS 12, one shared by 13 and 14, and one shared by 15, 26 and 27. Set `url` to the full HTTPS URL when replacing an installer; clear it to disable a download that is unavailable. `version` is optional; fill it only with the matching TrePDF release number. All four website languages share this configuration. Rebuild the website after editing it.

The Apple Silicon control starts with no selected OS and no visible download button. Selecting an OS reveals only its matching control: a disabled pending button when `url` is empty, or a download link when configured. Qt build versions are not displayed in this user flow.

Each URL must point to a tested Apple Silicon installer compatible with the whole selected OS release. In particular, the `14` / Sonoma option includes macOS 14.0–14.3: do not assign a package that requires macOS 14.4 or later to it. Multiple OS entries may share a URL only if that installer is verified for each of them. Changing the website label alone does not add OS support.

For Intel Mac, Windows and Linux, edit the existing entry in `src/data/downloads.json`. Set `url`, `version` and `requirements` to the matching package details; leave unavailable packages empty. These platforms keep their separate cards.

If using Google Drive, the URL opens the shared file page, not a guaranteed one-click download. Keep each file shared with anyone who has the link, with downloading enabled, and check it in a signed-out browser. Public link access does not verify the binary signature, checksum or installation compatibility.

When changing availability, also update homepage/FAQ and changelog copy in `src/data/home.ts`, `src/data/articles.ts`, `src/data/locales/th.ts` and `src/data/locales/fr.ts`. Keep the download page URL stable when changing assets. The automated link check validates local pages and URL format, not the contents of external binaries. The global announced version in `src/data/contact.json` remains independent from these per-package beta versions.

## GitHub Pages deployment

The production URL is `https://trepdf.io.vn/`. The website is served at the domain root, without the old `/trepdf.github.io/` path prefix.

1. In the GitHub repository, choose **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. In **Settings → Pages**, keep **Custom domain** set to `trepdf.io.vn`, configure the domain's DNS for GitHub Pages, and enable **Enforce HTTPS** once the certificate is ready. The `public/CNAME` file records the hostname in the build; it does not configure the custom domain or DNS for an Actions deployment.
3. Push the reviewed website to `main`, or run **Check and deploy TrePDF website** manually from `main`.
4. The workflow installs from the lockfile, checks the source, builds static pages, checks generated SEO/links and browser behavior, uploads `dist/` and deploys through the `github-pages` environment.
5. Pull requests run the same build, SEO and browser checks but never deploy. The deploy job is restricted to `main`, including manual runs.
6. Open the deployed homepage, a nested guide URL and the Vietnamese equivalent. Check images, navigation, 404 behavior and any enabled download links.

This repository contains deployment configuration; local build success does not mean the website has already been published. Pages must be enabled in the repository and a deployment must complete.

The workflow follows GitHub's [custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) and uses [setup-node](https://github.com/actions/setup-node) to select Node.js.

### Changing the production domain

`site.config.mjs` is the shared source for local and CI build settings. Its production defaults are `https://trepdf.io.vn` for the origin and `/` for the base path. These values feed page links, assets, canonical URLs, social metadata, sitemap and robots output. The workflow no longer reads repository variables named `SITE_ORIGIN` or `SITE_BASE`, so old variables cannot restore the project prefix.

To move to another custom domain, update the origin in `site.config.mjs` and the hostname in `public/CNAME` together, keep the base path at `/`, then update the GitHub Pages custom-domain setting and DNS. Rebuild, run the checks and deploy from `main`.

Local `SITE_ORIGIN` and `SITE_BASE` environment overrides remain available. Use the same values for the build and its checks; deployment validation requires the hostname to match `public/CNAME` and the base to remain `/`. Do not deploy canonical URLs pointing at localhost or a preview environment.

## Search discovery after publication

The site emits `sitemap.xml`, canonical links, alternate-language links, Open Graph metadata and truthful structured data. There are no invented ratings, reviews or prices.

After the production site is reachable:

1. Add the production URL prefix `https://trepdf.io.vn/` to [Google Search Console](https://search.google.com/search-console/). Verify ownership using a method available to your account. An HTML verification file can go in `public/` with the exact filename/content Google provides; rebuild and deploy it before verifying.
2. Submit the production sitemap URL: `https://trepdf.io.vn/sitemap.xml`.
3. Use URL Inspection on the homepage, PDF editor feature page and their Vietnamese versions. Check Google's selected canonical and indexing status after crawling.
4. Track impressions, queries and clicks, including `pdf editor` and specific editing/OCR/font queries. Improve pages based on observed needs instead of repeatedly inserting keywords.

The generated crawl rules are served at `https://trepdf.io.vn/robots.txt` and reference the production sitemap at the domain root.

Search Console ownership, sitemap submission and live indexing have not been performed by generating this repository. Search ranking is not guaranteed by technical checks. See Google's [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) for the distinction between crawlability, indexing and ranking.

## Asset licenses

Manrope and Noto Sans Thai are self-hosted under the SIL Open Font License; Tabler SVG icons use the MIT license. Their license texts ship in `public/licenses/`. The TrePDF logo and screenshots come from the application; screenshot provenance is recorded in `public/images/README.md`.

## Homepage feature demos

The homepage pairs text editing, Form design, OCR and tables/Excel export with four selectable GIF demos. The tables guide covers editable table cells, grid adjustments and the supported Excel export workflow. Source: `src/components/FeatureDemos.astro`; assets and capture details: `public/demos/README.md`. Only the selected demo plays while visible. Stop restores its WebP poster, and reduced-motion/data-saving preferences use posters by default. All feature descriptions and links are rendered without JavaScript. `test:ui` checks selection, keyboard use, playback, reduced motion, offscreen stopping and failed-GIF fallback; `test:seo` checks both GIF and poster paths.
