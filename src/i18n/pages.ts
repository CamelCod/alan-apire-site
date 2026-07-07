import type { Locale } from './config';

// Navigation and page metadata per locale. The 10 canonical pages from the Lean MVP quote:
// home, about, services, industries, projects, team, careers, contact, privacy, terms
export type PageKey =
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'projects'
  | 'team'
  | 'careers'
  | 'contact'
  | 'privacy'
  | 'terms';

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
  home: {
    en: { label: 'Home', title: 'Alan Apire Management Consultancies', description: 'Management consulting, industrial engineering advisory, and project management services across the UAE and wider region.' },
    ar: { label: 'الرئيسية', title: 'آلان أپاير للاستشارات الإدارية', description: 'استشارات إدارية وهندسة صناعية وإدارة مشاريع في الإمارات والمنطقة.' },
    ru: { label: 'Главная', title: 'Alan Apire — управленческий консалтинг', description: 'Управленческий консалтинг, промышленный инжиниринг и управление проектами в ОАЭ и регионе.' },
  },
  about: {
    en: { label: 'About', title: 'About Us — Alan Apire', description: 'A consultancy focused on operational excellence, project delivery, and industrial engineering advisory.' },
    ar: { label: 'من نحن', title: 'من نحن — آلان أپاير', description: 'استشارات تركز على التميز التشغيلي وتنفيذ المشاريع والهندسة الصناعية.' },
    ru: { label: 'О нас', title: 'О компании — Alan Apire', description: 'Консалтинг с фокусом на операционное совершенство, реализацию проектов и промышленный инжиниринг.' },
  },
  services: {
    en: { label: 'Services', title: 'Services — Alan Apire', description: 'Management consulting, project management, industrial engineering advisory, design support, and operational excellence.' },
    ar: { label: 'الخدمات', title: 'الخدمات — آلان أپاير', description: 'استشارات إدارية وإدارة مشاريع وهندسة صناعية ودعم تصميمي والتميز التشغيلي.' },
    ru: { label: 'Услуги', title: 'Услуги — Alan Apire', description: 'Управленческий консалтинг, управление проектами, промышленный инжиниринг, операционное совершенство.' },
  },
  industries: {
    en: { label: 'Industries', title: 'Industries — Alan Apire', description: 'Sector experience: manufacturing, oil & gas, logistics, infrastructure, MEP and fire fighting.' },
    ar: { label: 'القطاعات', title: 'القطاعات — آلان أپاير', description: 'خبرة قطاعية: التصنيع والنفط والغاز والخدمات اللوجستية والبنية التحتية والميكانيكا والكهرباء ومكافحة الحرائق.' },
    ru: { label: 'Отрасли', title: 'Отрасли — Alan Apire', description: 'Отраслевой опыт: производство, нефтегазовый сектор, логистика, инфраструктура, инженерные системы.' },
  },
  projects: {
    en: { label: 'Projects', title: 'Project Experience — Alan Apire', description: 'Selected assignments and case studies delivered for clients across industrial and technical sectors.' },
    ar: { label: 'المشاريع', title: 'خبرة المشاريع — آلان أپاير', description: 'مهمات مختارة ودراسات حالة مقدمة للعملاء في القطاعات الصناعية والتقنية.' },
    ru: { label: 'Проекты', title: 'Опыт проектов — Alan Apire', description: 'Избранные проекты и кейсы, реализованные для клиентов в промышленных и технических секторах.' },
  },
  team: {
    en: { label: 'Team', title: 'Our Team — Alan Apire', description: 'Meet the consultants and engineers behind Alan Apire.' },
    ar: { label: 'الفريق', title: 'فريقنا — آلان أپاير', description: 'تعرّف على المستشارين والمهندسين في آلان أپاير.' },
    ru: { label: 'Команда', title: 'Наша команда — Alan Apire', description: 'Консультанты и инженеры компании Alan Apire.' },
  },
  careers: {
    en: { label: 'Careers', title: 'Careers — Alan Apire', description: 'Open roles and opportunities to join Alan Apire.' },
    ar: { label: 'الوظائف', title: 'الوظائف — آلان أپاير', description: 'وظائف شاغرة وفرص للانضمام إلى آلان أپاير.' },
    ru: { label: 'Карьера', title: 'Карьера — Alan Apire', description: 'Открытые вакансии и возможности присоединиться к Alan Apire.' },
  },
  contact: {
    en: { label: 'Contact', title: 'Contact — Alan Apire', description: 'Request a consultation or send a general inquiry.' },
    ar: { label: 'اتصل بنا', title: 'اتصل بنا — آلان أپاير', description: 'اطلب استشارة أو أرسل استفسارًا عامًا.' },
    ru: { label: 'Контакты', title: 'Контакты — Alan Apire', description: 'Запросите консультацию или отправьте общий запрос.' },
  },
  privacy: {
    en: { label: 'Privacy', title: 'Privacy Policy — Alan Apire', description: 'Privacy policy for the Alan Apire website.' },
    ar: { label: 'الخصوصية', title: 'سياسة الخصوصية — آلان أپاير', description: 'سياسة الخصوصية لموقع آلان أپاير.' },
    ru: { label: 'Конфиденциальность', title: 'Политика конфиденциальности — Alan Apire', description: 'Политика конфиденциальности сайта Alan Apire.' },
  },
  terms: {
    en: { label: 'Terms', title: 'Terms & Conditions — Alan Apire', description: 'Terms and conditions for the Alan Apire website.' },
    ar: { label: 'الشروط', title: 'الشروط والأحكام — آلان أپاير', description: 'الشروط والأحكام لموقع آلان أپاير.' },
    ru: { label: 'Условия', title: 'Условия и положения — Alan Apire', description: 'Условия и положения сайта Alan Apire.' },
  },
};

export function t(locale: Locale, page: PageKey) {
  return PAGES[page][locale];
}

export function localizedPath(locale: Locale, page: PageKey): string {
  if (page === 'home') return `/${locale}`;
  return `/${locale}/${page}`;
}
