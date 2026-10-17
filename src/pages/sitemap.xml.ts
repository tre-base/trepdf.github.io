import { articles } from '../data/articles';
import { absolute, route, languages } from '../data/site';
export function GET() {
  const slugs = [...languages.flatMap(lang=>['home','download','guides'].map(id=>route(id,lang))), ...articles.map(a=>a.slug)];
  const escape = (s:string) => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${slugs.map(slug=>`  <url><loc>${escape(absolute(slug))}</loc></url>`).join('\n')}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
