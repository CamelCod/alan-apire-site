export const LOCALES = ['en', 'ar', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<Locale, { dir: 'ltr' | 'rtl'; htmlLang: string; label: string }> = {
  en: { dir: 'ltr', htmlLang: 'en', label: 'English' },
  ar: { dir: 'rtl', htmlLang: 'ar', label: 'العربية' },
  ru: { dir: 'ltr', htmlLang: 'ru', label: 'Русский' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

// Canonical site URL (keep in sync with astro.config.mjs).
export const SITE_URL = 'https://alanapire.ae';

// Public-facing brand contact details — fill from client brief (Week 1 deliverable).
export const BRAND = {
  name: 'Alan Apire Management Consultancies',
  shortName: 'Alan Apire',
  phone: '+971000000000',
  whatsapp: '971000000000', // international format, no +
  email: 'info@alanapire.ae',
  address: {
    en: 'Sharjah, United Arab Emirates',
    ar: 'الشارقة، الإمارات العربية المتحدة',
    ru: 'Шарджа, Объединенные Арабские Эмираты',
  },
  mapsQuery: 'Sharjah UAE',
};

// Plausible / GA4 — set in .env at launch.
export const ANALYTICS = {
  provider: 'plausible' as 'plausible' | 'ga4' | 'none',
  domain: 'alanapire.ae',
  measurementId: '',
};
