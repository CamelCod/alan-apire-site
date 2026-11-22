import type { Locale } from './config';
import { TECHNICAL_CONSTANTS } from './constants';
import en from '../content/i18n/en.json';
import ar from '../content/i18n/ar.json';
import ru from '../content/i18n/ru.json';

const I18N = { en, ar, ru } as const;

export interface Pillar {
  title: string;
  tagline: string;
  desc: string;
  scope: string[];
}

export interface Sector {
  title: string;
  desc: string;
}

export interface Stage {
  num: string;
  title: string;
  desc: string;
}

// ─── SERVICE PILLARS (Cleaned, deliverable-driven, <=22 words/sentence) ─────
export const PILLARS: Record<Locale, Pillar[]> = {
  en: I18N.en.pillars.items.map((item) => ({
    title: item.title,
    tagline: item.tagline,
    desc: item.desc,
    scope: item.deliverables,
  })),
  ar: I18N.ar.pillars.items.map((item) => ({
    title: item.title,
    tagline: item.tagline,
    desc: item.desc,
    scope: item.deliverables,
  })),
  ru: I18N.ru.pillars.items.map((item) => ({
    title: item.title,
    tagline: item.tagline,
    desc: item.desc,
    scope: item.deliverables,
  })),
};

// ─── SECTORS ────────────────────────────────────────────────────────────────
export const SECTORS: Record<Locale, Sector[]> = {
  en: I18N.en.sectors.items,
  ar: I18N.ar.sectors.items,
  ru: I18N.ru.sectors.items,
};

export const SECTOR_LABELS: Record<Locale, string[]> = {
  en: I18N.en.sectors.items.map((s) => s.title),
  ar: I18N.ar.sectors.items.map((s) => s.title),
  ru: I18N.ru.sectors.items.map((s) => s.title),
};

// ─── DELIVERY STAGES ────────────────────────────────────────────────────────
export const STAGES: Record<Locale, Stage[]> = {
  en: I18N.en.process.items,
  ar: I18N.ar.process.items,
  ru: I18N.ru.process.items,
};

// ─── HOME PAGE COPY ─────────────────────────────────────────────────────────
export const HOME = {
  hero: {
    eyebrow: { en: I18N.en.hero.eyebrow, ar: I18N.ar.hero.eyebrow, ru: I18N.ru.hero.eyebrow },
    headline: { en: I18N.en.hero.headline, ar: I18N.ar.hero.headline, ru: I18N.ru.hero.headline },
    sub: { en: I18N.en.hero.sub, ar: I18N.ar.hero.sub, ru: I18N.ru.hero.sub },
    primaryCta: { en: I18N.en.hero.primaryCta, ar: I18N.ar.hero.primaryCta, ru: I18N.ru.hero.primaryCta },
    secondaryCta: { en: I18N.en.hero.secondaryCta, ar: I18N.ar.hero.secondaryCta, ru: I18N.ru.hero.secondaryCta },
  },
  pillarsHeading: { en: I18N.en.pillars.heading, ar: I18N.ar.pillars.heading, ru: I18N.ru.pillars.heading },
  pillarsIntro: { en: I18N.en.pillars.intro, ar: I18N.ar.pillars.intro, ru: I18N.ru.pillars.intro },
  sectorsHeading: { en: I18N.en.sectors.heading, ar: I18N.ar.sectors.heading, ru: I18N.ru.sectors.heading },
  sectorsIntro: { en: I18N.en.sectors.intro, ar: I18N.ar.sectors.intro, ru: I18N.ru.sectors.intro },
  featuredHeading: { en: I18N.en.featuredProjects.heading, ar: I18N.ar.featuredProjects.heading, ru: I18N.ru.featuredProjects.heading },
  featuredIntro: { en: I18N.en.featuredProjects.intro, ar: I18N.ar.featuredProjects.intro, ru: I18N.ru.featuredProjects.intro },
  approachHeading: { en: I18N.en.process.heading, ar: I18N.ar.process.heading, ru: I18N.ru.process.heading },
  approachIntro: { en: I18N.en.process.intro, ar: I18N.ar.process.intro, ru: I18N.ru.process.intro },
  whyHeading: {
    en: 'Technical Qualifications',
    ar: 'المؤهلات الفنية والتراخيص',
    ru: 'Технические квалификации и лицензии',
  },
  why: {
    en: I18N.en.trust.items.slice(0, 3).map((item) => ({ title: item.label, desc: item.detail })),
    ar: I18N.ar.trust.items.slice(0, 3).map((item) => ({ title: item.label, desc: item.detail })),
    ru: I18N.ru.trust.items.slice(0, 3).map((item) => ({ title: item.label, desc: item.detail })),
  },
  cta: {
    headline: { en: I18N.en.cta.heading, ar: I18N.ar.cta.heading, ru: I18N.ru.cta.heading },
    sub: { en: I18N.en.cta.sub, ar: I18N.ar.cta.sub, ru: I18N.ru.cta.sub },
    button: { en: I18N.en.cta.button, ar: I18N.ar.cta.button, ru: I18N.ru.cta.button },
  },
  trust: {
    heading: { en: I18N.en.trust.heading, ar: I18N.ar.trust.heading, ru: I18N.ru.trust.heading },
    intro: { en: I18N.en.trust.intro, ar: I18N.ar.trust.intro, ru: I18N.ru.trust.intro },
    credentials: {
      en: I18N.en.trust.items,
      ar: I18N.ar.trust.items,
      ru: I18N.ru.trust.items,
    },
  },
};

// ─── GLOBAL CTA ─────────────────────────────────────────────────────────────
export const CTA_LABEL: Record<Locale, string> = {
  en: I18N.en.nav.cta,
  ar: I18N.ar.nav.cta,
  ru: I18N.ru.nav.cta,
};

// ─── FOOTER ─────────────────────────────────────────────────────────────────
export const FOOTER_COPY = {
  pillarsHeading: {
    en: 'Licensed Services',
    ar: 'الخدمات المرخصة',
    ru: 'Лицензированные услуги',
  },
  sectorsHeading: {
    en: 'Industrial Sectors',
    ar: 'القطاعات الصناعية',
    ru: 'Промышленные отрасли',
  },
  entityName: TECHNICAL_CONSTANTS.companyLegalName,
  licenceText: {
    en: I18N.en.footer.licenceText,
    ar: I18N.ar.footer.licenceText,
    ru: I18N.ru.footer.licenceText,
  },
  rights: {
    en: I18N.en.footer.rights,
    ar: I18N.ar.footer.rights,
    ru: I18N.ru.footer.rights,
  },
  email: TECHNICAL_CONSTANTS.email,
  phone: TECHNICAL_CONSTANTS.phone,
  address: TECHNICAL_CONSTANTS.address,
};

// ─── CONTACT PAGE ───────────────────────────────────────────────────────────
export const CONTACT_COPY = {
  heading: { en: I18N.en.contact.heading, ar: I18N.ar.contact.heading, ru: I18N.ru.contact.heading },
  intro: { en: I18N.en.contact.sub, ar: I18N.ar.contact.sub, ru: I18N.ru.contact.sub },
  sub: { en: I18N.en.contact.sub, ar: I18N.ar.contact.sub, ru: I18N.ru.contact.sub },
  detailsHeading: {
    en: 'Office & Registration Details',
    ar: 'تفاصيل المكتب والتسجيل',
    ru: 'Офис и регистрационные данные',
  },
  nameLabel: { en: I18N.en.contact.nameLabel, ar: I18N.ar.contact.nameLabel, ru: I18N.ru.contact.nameLabel },
  companyLabel: { en: I18N.en.contact.companyLabel, ar: I18N.ar.contact.companyLabel, ru: I18N.ru.contact.companyLabel },
  emailLabel: { en: I18N.en.contact.emailLabel, ar: I18N.ar.contact.emailLabel, ru: I18N.ru.contact.emailLabel },
  phoneLabel: { en: I18N.en.contact.phoneLabel, ar: I18N.ar.contact.phoneLabel, ru: I18N.ru.contact.phoneLabel },
  locationLabel: { en: I18N.en.contact.locationLabel, ar: I18N.ar.contact.locationLabel, ru: I18N.ru.contact.locationLabel },
  scopeLabel: { en: I18N.en.contact.scopeLabel, ar: I18N.ar.contact.scopeLabel, ru: I18N.ru.contact.scopeLabel },
  sendButton: { en: I18N.en.contact.sendButton, ar: I18N.ar.contact.sendButton, ru: I18N.ru.contact.sendButton },
};

// ─── INDUSTRIES PAGE ────────────────────────────────────────────────────────
export const INDUSTRIES_COPY = {
  intro: { en: I18N.en.sectors.intro, ar: I18N.ar.sectors.intro, ru: I18N.ru.sectors.intro },
};

// ─── PROJECTS & REFERENCES ──────────────────────────────────────────────────
export const PROJECTS_COPY = {
  notice: {
    en: I18N.en.projectsIndex.notice,
    ar: I18N.ar.projectsIndex.notice,
    ru: I18N.ru.projectsIndex.notice,
  },
  disclosure: {
    en: I18N.en.attribution.statement,
    ar: I18N.ar.attribution.statement,
    ru: I18N.ru.attribution.statement,
  },
  caseStudy: {
    en: I18N.en.caseStudy,
    ar: I18N.ar.caseStudy,
    ru: I18N.ru.caseStudy,
  },
};

// ─── ABOUT PAGE ─────────────────────────────────────────────────────────────
export const ABOUT = {
  positioning: { en: I18N.en.about.positioning, ar: I18N.ar.about.positioning, ru: I18N.ru.about.positioning },
  profile: { en: I18N.en.about.profile, ar: I18N.ar.about.profile, ru: I18N.ru.about.profile },
  corpHeading: { en: I18N.en.about.corpHeading, ar: I18N.ar.about.corpHeading, ru: I18N.ru.about.corpHeading },
  legalEntityLabel: { en: I18N.en.about.legalEntityLabel, ar: I18N.ar.about.legalEntityLabel, ru: I18N.ru.about.legalEntityLabel },
  legalEntity: TECHNICAL_CONSTANTS.companyLegalName,
  jurisdictionLabel: { en: I18N.en.about.jurisdictionLabel, ar: I18N.ar.about.jurisdictionLabel, ru: I18N.ru.about.jurisdictionLabel },
  jurisdiction: { en: I18N.en.about.jurisdiction, ar: I18N.ar.about.jurisdiction, ru: I18N.ru.about.jurisdiction },
  licensedLabel: { en: I18N.en.about.licensedLabel, ar: I18N.ar.about.licensedLabel, ru: I18N.ru.about.licensedLabel },
  licensed: { en: I18N.en.about.licensed, ar: I18N.ar.about.licensed, ru: I18N.ru.about.licensed },
  operatingHeading: { en: I18N.en.about.operatingHeading, ar: I18N.ar.about.operatingHeading, ru: I18N.ru.about.operatingHeading },
  operating: { en: I18N.en.about.operating, ar: I18N.ar.about.operating, ru: I18N.ru.about.operating },
};
