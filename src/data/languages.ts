export const languages = ['en', 'vi', 'th', 'fr'] as const;
export type Lang = typeof languages[number];

export const languageNames: Record<Lang, string> = {
  en: 'English', vi: 'Tiếng Việt', th: 'ไทย', fr: 'Français',
};
export const openGraphLocales: Record<Lang, string> = {
  en: 'en_US', vi: 'vi_VN', th: 'th_TH', fr: 'fr_FR',
};
