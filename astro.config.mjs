import { defineConfig } from 'astro/config';
import { siteOrigin, siteBase } from './site.config.mjs';
export default defineConfig({
  site: siteOrigin,
  base: siteBase || '/',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
