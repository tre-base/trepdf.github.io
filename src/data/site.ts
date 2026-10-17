import { articles } from './articles';
import { siteOrigin, siteBase } from '../../site.config.mjs';
export type Lang = 'en' | 'vi';
export type PageId = 'home' | 'download' | 'guides' | string;
export const languages: Lang[] = ['en', 'vi'];
export function route(id: PageId, lang: Lang): string {
  const fixed: Record<string, Record<Lang, string>> = {
    home: { en: '', vi: 'vi' },
    download: { en: 'download', vi: 'vi/tai-xuong' },
    guides: { en: 'guides', vi: 'vi/huong-dan' },
  };
  if (fixed[id]) return fixed[id][lang];
  const article = articles.find(a => a.id === id && a.lang === lang);
  if (!article) throw new Error(`Missing route: ${id}/${lang}`);
  return article.slug;
}
export function path(slug = ''): string { return `${siteBase}/${slug ? slug.replace(/^\/+|\/+$/g, '') + '/' : ''}`; }
export function href(id: PageId, lang: Lang): string { return path(route(id, lang)); }
export function asset(name: string): string { return `${siteBase}/${name.replace(/^\//, '')}`; }
export function absolute(slug = ''): string { return `${siteOrigin}${path(slug)}`; }
export const navigation = {
  en: { features: 'Features', guides: 'Guides', updates: 'What’s new', download: 'Get TrePDF', language: 'Tiếng Việt', theme: 'Change color theme', menu: 'Menu', close: 'Close menu', skip: 'Skip to content', privacy: 'Privacy', tagline: 'A little less friction. A lot more done.', copyright: 'TrePDF. Made for your documents.', source: 'Source code', related: 'Keep exploring', home: 'Home' },
  vi: { features: 'Tính năng', guides: 'Hướng dẫn', updates: 'Cập nhật', download: 'Tải TrePDF', language: 'English', theme: 'Đổi giao diện sáng tối', menu: 'Menu', close: 'Đóng menu', skip: 'Đến nội dung chính', privacy: 'Quyền riêng tư', tagline: 'Bớt thao tác. Thêm thời gian cho công việc.', copyright: 'TrePDF. Dành cho tài liệu của bạn.', source: 'Mã nguồn', related: 'Khám phá thêm', home: 'Trang chủ' },
};
