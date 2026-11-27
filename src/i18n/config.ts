export const LOCALES = ['en', 'ar', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_META: Record<Locale,{dir:'ltr'|'rtl';htmlLang:string;label:string}> = {
  en:{dir:'ltr',htmlLang:'en',label:'English'},
  ar:{dir:'rtl',htmlLang:'ar',label:'العربية'},
  ru:{dir:'ltr',htmlLang:'ru',label:'Русский'},
};
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
// Domain intentionally unchanged pending the owner's decision.
export const SITE_URL = (import.meta.env.SITE as string | undefined)?.replace(/\/$/, '') || 'https://alanpire.ae';
export const BRAND = {
  name:'Alan and Apire Management Consultancies – FZCO',
  shortName:'Alanpire',
  phone:'+971558286328',
  whatsapp:'971558286328',
  email:'info@alanpire.ae',
  address:{en:'IFZA, Dubai Silicon Oasis, Dubai, UAE',ar:'IFZA، واحة دبي للسيليكون، دبي، الإمارات',ru:'IFZA, Dubai Silicon Oasis, Дубай, ОАЭ'},
  mapsQuery:'IFZA Dubai Silicon Oasis UAE',
};
const plausibleDomain = String(import.meta.env.PLAUSIBLE_DOMAIN ?? '').trim();
const gaMeasurementId = String(import.meta.env.GA4_MEASUREMENT_ID ?? '').trim();
const analyticsProvider = String(import.meta.env.ANALYTICS_PROVIDER ?? '').trim().toLowerCase();
export const ANALYTICS = {
  provider:(analyticsProvider === 'ga4' || analyticsProvider === 'plausible' || analyticsProvider === 'none'
    ? analyticsProvider : gaMeasurementId ? 'ga4' : plausibleDomain ? 'plausible' : 'none') as 'plausible'|'ga4'|'none',
  domain:plausibleDomain || 'alanpire.ae',measurementId:gaMeasurementId,
};
// No hardcoded analytics credentials. Retained only for compatibility with unused legacy imports.
export const CUSTOMERIO = { writeKey: String(import.meta.env.CIO_WRITE_KEY ?? '').trim() };
