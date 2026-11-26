import type { Locale } from './config';
import en from '../content/i18n/en.json';
import ar from '../content/i18n/ar.json';
import ru from '../content/i18n/ru.json';
import { PARTNER_COPY } from './partner';

const I18N = { en, ar, ru } as const;

// Navigation and page metadata per locale. The 10 canonical pages from the Lean MVP quote:
// home, about, services, industries, projects, team, careers, contact, privacy, terms
export type PageKey =
  | 'home'
  | 'partner'
  | 'outreach'
  | 'about'
  | 'services'
  | 'industries'
  | 'projects'
  | 'team'
  | 'careers'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'compare'
  | 'compare-vs-rpm-ahpmc'
  | 'compare-alternatives';

export const PAGE_ORDER: PageKey[] = [
  'home',
  'about',
  'services',
  'industries',
  'projects',
  'team',
  'careers',
  'contact',
];

type Localized = Record<Locale, { label: string; title: string; description: string }>;

export const PAGES: Record<PageKey, Localized> = {
  outreach: {
    en: { label: PARTNER_COPY.en.brief, title: 'Partner capability brief | Alanpire', description: PARTNER_COPY.en.pages.home.summary },
    ar: { label: PARTNER_COPY.ar.brief, title: 'ملف القدرات للشركاء | ألانباير', description: PARTNER_COPY.ar.pages.home.summary },
    ru: { label: PARTNER_COPY.ru.brief, title: 'Возможности для партнёров | Alanpire', description: PARTNER_COPY.ru.pages.home.summary },
  },
  partner: {
    en: { label: PARTNER_COPY.en.nav.partner, title: `${PARTNER_COPY.en.pages.partner.title} | Alanpire`, description: PARTNER_COPY.en.pages.partner.summary },
    ar: { label: PARTNER_COPY.ar.nav.partner, title: `${PARTNER_COPY.ar.pages.partner.title} | ألانباير`, description: PARTNER_COPY.ar.pages.partner.summary },
    ru: { label: PARTNER_COPY.ru.nav.partner, title: `${PARTNER_COPY.ru.pages.partner.title} | Alanpire`, description: PARTNER_COPY.ru.pages.partner.summary },
  },
  home: {
    en: { label: I18N.en.nav.home, title: I18N.en.meta.home.title, description: I18N.en.meta.home.description },
    ar: { label: I18N.ar.nav.home, title: I18N.ar.meta.home.title, description: I18N.ar.meta.home.description },
    ru: { label: I18N.ru.nav.home, title: I18N.ru.meta.home.title, description: I18N.ru.meta.home.description },
  },
  about: {
    en: { label: I18N.en.nav.about, title: I18N.en.meta.about.title, description: I18N.en.meta.about.description },
    ar: { label: I18N.ar.nav.about, title: I18N.ar.meta.about.title, description: I18N.ar.meta.about.description },
    ru: { label: I18N.ru.nav.about, title: I18N.ru.meta.about.title, description: I18N.ru.meta.about.description },
  },
  services: {
    en: { label: I18N.en.nav.services, title: I18N.en.meta.services.title, description: I18N.en.meta.services.description },
    ar: { label: I18N.ar.nav.services, title: I18N.ar.meta.services.title, description: I18N.ar.meta.services.description },
    ru: { label: I18N.ru.nav.services, title: I18N.ru.meta.services.title, description: I18N.ru.meta.services.description },
  },
  industries: {
    en: { label: I18N.en.nav.industries, title: I18N.en.meta.industries.title, description: I18N.en.meta.industries.description },
    ar: { label: I18N.ar.nav.industries, title: I18N.ar.meta.industries.title, description: I18N.ar.meta.industries.description },
    ru: { label: I18N.ru.nav.industries, title: I18N.ru.meta.industries.title, description: I18N.ru.meta.industries.description },
  },
  projects: {
    en: { label: I18N.en.nav.projects, title: I18N.en.meta.projects.title, description: I18N.en.meta.projects.description },
    ar: { label: I18N.ar.nav.projects, title: I18N.ar.meta.projects.title, description: I18N.ar.meta.projects.description },
    ru: { label: I18N.ru.nav.projects, title: I18N.ru.meta.projects.title, description: I18N.ru.meta.projects.description },
  },
  team: {
    en: { label: I18N.en.team.heading, title: I18N.en.meta.team.title, description: I18N.en.meta.team.description },
    ar: { label: I18N.ar.team.heading, title: I18N.ar.meta.team.title, description: I18N.ar.meta.team.description },
    ru: { label: I18N.ru.team.heading, title: I18N.ru.meta.team.title, description: I18N.ru.meta.team.description },
  },
  careers: {
    en: { label: 'Careers', title: I18N.en.meta.careers.title, description: I18N.en.meta.careers.description },
    ar: { label: 'الوظائف', title: I18N.ar.meta.careers.title, description: I18N.ar.meta.careers.description },
    ru: { label: 'Карьера', title: I18N.ru.meta.careers.title, description: I18N.ru.meta.careers.description },
  },
  contact: {
    en: { label: I18N.en.nav.contact, title: I18N.en.meta.contact.title, description: I18N.en.meta.contact.description },
    ar: { label: I18N.ar.nav.contact, title: I18N.ar.meta.contact.title, description: I18N.ar.meta.contact.description },
    ru: { label: I18N.ru.nav.contact, title: I18N.ru.meta.contact.title, description: I18N.ru.meta.contact.description },
  },
  privacy: {
    en: { label: 'Privacy', title: I18N.en.meta.privacy.title, description: I18N.en.meta.privacy.description },
    ar: { label: 'الخصوصية', title: I18N.ar.meta.privacy.title, description: I18N.ar.meta.privacy.description },
    ru: { label: 'Конфиденциальность', title: I18N.ru.meta.privacy.title, description: I18N.ru.meta.privacy.description },
  },
  terms: {
    en: { label: 'Terms', title: I18N.en.meta.terms.title, description: I18N.en.meta.terms.description },
    ar: { label: 'الشروط', title: I18N.ar.meta.terms.title, description: I18N.ar.meta.terms.description },
    ru: { label: 'Условия', title: I18N.ru.meta.terms.title, description: I18N.ru.meta.terms.description },
  },
  compare: {
    en: { label: 'Compare', title: 'Compare Technical Consultancies Dubai | Alanpire', description: 'Compare technical capabilities, licensing, and delivery methodologies for industrial infrastructure in Dubai.' },
    ar: { label: 'مقارنة', title: 'مقارنة الاستشارات الفنية في دبي | ألانباير', description: 'مقارنة القدرات الفنية والتراخيص ومنهجيات التسليم للبنية التحتية الصناعية في دبي.' },
    ru: { label: 'Сравнение', title: 'Сравнение технических консультантов в Дубае | Alanpire', description: 'Сравнение технических компетенций, лицензий и методологий реализации для промышленной инфраструктуры в Дубае.' },
  },
  'compare-vs-rpm-ahpmc': {
    en: { label: 'Alanpire vs RPM vs AHPMC', title: 'Alanpire vs RPM Consultants vs AHPMC (2026)', description: 'Technical comparison of service scope, engineering credentials, and industrial focus.' },
    ar: { label: 'ألانباير مقابل RPM وAHPMC', title: 'ألانباير مقابل RPM وAHPMC (2026)', description: 'مقارنة فنية لنطاق الخدمات والمؤهلات الهندسية والتخصص الصناعي.' },
    ru: { label: 'Alanpire vs RPM vs AHPMC', title: 'Alanpire против RPM и AHPMC (2026)', description: 'Техническое сравнение объема услуг, инженерной квалификации и промышленной специализации.' },
  },
  'compare-alternatives': {
    en: { label: 'Alternatives', title: 'Project Management & Engineering Support Alternatives in Dubai', description: 'Overview of engineering consultancy alternatives by sector specialization and technical capabilities.' },
    ar: { label: 'بدائل', title: 'بدائل إدارة المشاريع والدعم الهندسي في دبي', description: 'نظرة عامة على بدائل الاستشارات الهندسية حسب التخصص القطاعي والقدرات الفنية.' },
    ru: { label: 'Альтернативы', title: 'Альтернативы в области управления проектами и инженерной поддержки', description: 'Обзор альтернатив инженерного консалтинга по отраслевой специализации и техническим возможностям.' },
  },
};

export function t(locale: Locale, page: PageKey) {
  return PAGES[page][locale];
}

const PAGE_SEGMENTS: Record<PageKey, string | null> = {
  outreach: 'outreach',
  partner: 'partner',
  home: null,
  about: 'about',
  services: 'services',
  industries: 'industries',
  projects: 'projects',
  team: 'team',
  careers: 'careers',
  contact: 'contact',
  privacy: 'privacy',
  terms: 'terms',
  compare: 'compare',
  'compare-vs-rpm-ahpmc': 'compare/alan-apire-vs-rpm-consultants-vs-ahpmc',
  'compare-alternatives': 'compare/alternatives',
};

export function localizedPath(locale: Locale, page: PageKey): string {
  const segment = PAGE_SEGMENTS[page];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function switchLocalePath(currentPath: string, newLocale: Locale): string {
  const parts = currentPath.split('/').filter(Boolean);
  if (parts.length === 0) return `/${newLocale}`;
  parts[0] = newLocale;
  return '/' + parts.join('/');
}
