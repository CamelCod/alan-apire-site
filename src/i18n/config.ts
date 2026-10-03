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

// Canonical site URL — follows astro.config.mjs `site` (ASTRO_SITE on Cloudflare).
export const SITE_URL = (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') || 'https://alanapire.ae';

// Public-facing brand contact details — aligned with the DIEZ trade license.
export const BRAND = {
  name: 'ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO',
  shortName: 'Alan Apire',
  phone: '+971000000000',
  whatsapp: '971000000000', // international format, no +
  email: 'info@alanapire.ae',
  address: {
    en: 'Dubai Integrated Economic Zones Authority (DIEZ), Dubai, United Arab Emirates',
    ar: 'سلطة دبي للمناطق الاقتصادية المتكاملة (دايز)، دبي، الإمارات العربية المتحدة',
    ru: 'Dubai Integrated Economic Zones Authority (DIEZ), Дубай, Объединенные Арабские Эмираты',
  },
  mapsQuery: 'Dubai Integrated Economic Zones Authority Dubai UAE',
};

// Analytics — enabled only when the matching build env var is set in Cloudflare Pages.
const plausibleDomain = String(import.meta.env.PLAUSIBLE_DOMAIN ?? '').trim();
const gaMeasurementId = String(import.meta.env.GA4_MEASUREMENT_ID ?? '').trim();
const analyticsProvider = String(import.meta.env.ANALYTICS_PROVIDER ?? '').trim().toLowerCase();

export const ANALYTICS = {
  provider: (analyticsProvider === 'ga4' || analyticsProvider === 'plausible' || analyticsProvider === 'none'
    ? analyticsProvider
    : gaMeasurementId
      ? 'ga4'
      : plausibleDomain
        ? 'plausible'
        : 'none') as 'plausible' | 'ga4' | 'none',
  domain: plausibleDomain || 'alanapire.ae',
  measurementId: gaMeasurementId,
};
