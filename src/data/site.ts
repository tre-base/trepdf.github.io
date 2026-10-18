import { articles } from './articles';
import { siteOrigin, siteBase } from '../../site.config.mjs';
import type { Lang } from './languages';
export { languages, languageNames, openGraphLocales, type Lang } from './languages';
export type PageId = 'home' | 'download' | 'guides' | string;
export function route(id: PageId, lang: Lang): string {
  const fixed: Record<string, Record<Lang, string>> = {
    home: { en: '', vi: 'vi', th: 'th', fr: 'fr' },
    download: { en: 'download', vi: 'vi/tai-xuong', th: 'th/download', fr: 'fr/telecharger' },
    guides: { en: 'guides', vi: 'vi/huong-dan', th: 'th/guides', fr: 'fr/guides' },
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
  th: { features: 'ฟีเจอร์', guides: 'คู่มือ', updates: 'มีอะไรใหม่', download: 'ดาวน์โหลด TrePDF', language: 'ภาษา', theme: 'เปลี่ยนธีมสี', menu: 'เมนู', close: 'ปิดเมนู', skip: 'ข้ามไปยังเนื้อหา', privacy: 'ความเป็นส่วนตัว', tagline: 'ลดขั้นตอน เพิ่มเวลาให้งานของคุณ', copyright: 'TrePDF สร้างมาเพื่อเอกสารของคุณ', source: 'ซอร์สโค้ด', related: 'ดูเพิ่มเติม', home: 'หน้าแรก' },
  fr: { features: 'Fonctionnalités', guides: 'Guides', updates: 'Nouveautés', download: 'Télécharger TrePDF', language: 'Langue', theme: 'Changer de thème', menu: 'Menu', close: 'Fermer le menu', skip: 'Aller au contenu', privacy: 'Confidentialité', tagline: 'Moins de manipulations. Plus de travail accompli.', copyright: 'TrePDF. Conçu pour vos documents.', source: 'Code source', related: 'À découvrir aussi', home: 'Accueil' },
};

export const pageLabels = {
  en: { language: 'Choose language', mainNav: 'Main navigation', mobileNav: 'Mobile navigation', footerNav: 'Footer navigation', footerNote: 'Read. Edit. Make it yours.', socialAlt: 'TrePDF desktop PDF editor with a sample document', breadcrumb: 'Guides & features', toc: 'On this page', githubPrivacy: 'GitHub’s privacy statement' },
  vi: { language: 'Chọn ngôn ngữ', mainNav: 'Điều hướng chính', mobileNav: 'Điều hướng di động', footerNav: 'Điều hướng cuối trang', footerNote: 'Đọc. Chỉnh sửa. Hoàn thiện.', socialAlt: 'Trình chỉnh sửa PDF TrePDF với tài liệu mẫu', breadcrumb: 'Hướng dẫn & tính năng', toc: 'Trong trang này', githubPrivacy: 'Chính sách quyền riêng tư của GitHub' },
  th: { language: 'เลือกภาษา', mainNav: 'เมนูหลัก', mobileNav: 'เมนูบนมือถือ', footerNav: 'เมนูส่วนท้าย', footerNote: 'อ่าน แก้ไข ให้เป็นแบบคุณ', socialAlt: 'โปรแกรมแก้ไข PDF บนเดสก์ท็อป TrePDF พร้อมเอกสารตัวอย่าง', breadcrumb: 'คู่มือและฟีเจอร์', toc: 'ในหน้านี้', githubPrivacy: 'นโยบายความเป็นส่วนตัวของ GitHub' },
  fr: { language: 'Choisir la langue', mainNav: 'Navigation principale', mobileNav: 'Navigation mobile', footerNav: 'Navigation de pied de page', footerNote: 'Lisez. Modifiez. Appropriez-vous vos documents.', socialAlt: 'Éditeur PDF de bureau TrePDF avec un document exemple', breadcrumb: 'Guides et fonctionnalités', toc: 'Sur cette page', githubPrivacy: 'Déclaration de confidentialité de GitHub' },
};
