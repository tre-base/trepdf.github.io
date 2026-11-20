// Production is served at the custom-domain root, without a repository prefix.
// Keep public/CNAME and GitHub Pages domain settings in sync when moving domains.
export const siteOrigin = (process.env.SITE_ORIGIN || 'https://trepdf.io.vn').replace(/\/$/, '');
const rawBase = process.env.SITE_BASE ?? '/';
export const siteBase = rawBase === '/' ? '' : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;
export const siteUrl = `${siteOrigin}${siteBase}/`;
