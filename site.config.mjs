// Change both settings when moving from the GitHub project URL to a custom domain.
// Examples: SITE_ORIGIN=https://trepdf.example SITE_BASE=/ npm run build
export const siteOrigin = (process.env.SITE_ORIGIN || 'https://tre-base.github.io').replace(/\/$/, '');
const rawBase = process.env.SITE_BASE ?? '/trepdf.github.io';
export const siteBase = rawBase === '/' ? '' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
export const siteUrl = `${siteOrigin}${siteBase}/`;
