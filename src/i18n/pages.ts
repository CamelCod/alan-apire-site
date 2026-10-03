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
  home: {
    en: { label: 'Home', title: 'Engineering & Project Management Consultancy Dubai | Alan Apire', description: 'Project management, engineering consultancy, and architectural drawing services for industrial and infrastructure projects — delivered from Dubai (DIEZ), UAE to clients across the GCC.' },
    ar: { label: 'الرئيسية', title: 'استشارات هندسية وإدارة مشاريع في دبي | آلان أپاير', description: 'خدمات إدارة المشاريع والاستشارات الهندسية والرسومات المعمارية للمشاريع الصناعية والبنية التحتية — من دبي (دايز) لعملاء في الإمارات ودول مجلس التعاون الخليجي.' },
    ru: { label: 'Главная', title: 'Инжиниринговый и проектный консалтинг в Дубае | Alan Apire', description: 'Управление проектами, инженерный консалтинг и архитектурные чертежи для промышленных и инфраструктурных проектов — из Дубая (DIEZ) для клиентов в ОАЭ и ССАГПЗ.' },
  },
  about: {
    en: { label: 'About', title: 'About Alan Apire | Management Consultants Dubai, UAE', description: 'Engineering knowledge. Project discipline. Practical delivery. Alan Apire is a Dubai-based management consultancy (DIEZ FZCO) bridging high-level advisory and on-the-ground technical execution for industrial projects across the UAE and GCC.' },
    ar: { label: 'من نحن', title: 'من نحن | مستشارو الإدارة في دبي — آلان أپاير', description: 'معرفة هندسية. انضباط في المشاريع. تنفيذ عملي. آلان أپاير شركة استشارات إدارية مرخصة في دبي (دايز) تربط الاستشارات عالية المستوى بالتنفيذ الفني الميداني للمشاريع الصناعية.' },
    ru: { label: 'О нас', title: 'О компании Alan Apire | Управленческий консалтинг Дубай', description: 'Инженерные знания. Проектная дисциплина. Практическая реализация. Alan Apire — консалтинговая компания из Дубая (DIEZ FZCO), соединяющая стратегическое консультирование и техническое исполнение на объектах в ОАЭ и ССАГПЗ.' },
  },
  services: {
    en: { label: 'Services', title: 'Project Management & Engineering Consultancy Services Dubai | Alan Apire', description: 'Project management, engineering & technical consultancy, architectural drawings, and management consultancy for industrial and infrastructure projects in Dubai, UAE, and the GCC.' },
    ar: { label: 'الخدمات', title: 'خدمات إدارة المشاريع والاستشارات الهندسية في دبي | آلان أپاير', description: 'إدارة المشاريع والاستشارات الهندسية والفنية والرسومات المعمارية والاستشارات الإدارية للمشاريع الصناعية والبنية التحتية في دبي والإمارات ودول الخليج.' },
    ru: { label: 'Услуги', title: 'Услуги управления проектами и инжинирингового консалтинга Дубай', description: 'Управление проектами, инженерно-технический консалтинг, архитектурные чертежи и управленческий консалтинг для промышленных и инфраструктурных проектов в Дубае, ОАЭ и странах ССАГПЗ.' },
  },
  industries: {
    en: { label: 'Industries', title: 'Industrial & Infrastructure Sectors Served | Dubai Consultancy — Alan Apire', description: 'Sector experience in energy & power generation, district heating, water infrastructure, oil refining, and heavy industrial facilities — delivered from Dubai to clients across the UAE and GCC.' },
    ar: { label: 'القطاعات', title: 'القطاعات الصناعية والبنية التحتية | استشارات دبي — آلان أپاير', description: 'خبرة قطاعية في الطاقة وتوليد الكهرباء والتدفئة المركزية والبنية التحتية للمياه وتكرير النفط والمنشآت الصناعية الثقيلة — من دبي للعملاء في الإمارات ودول الخليج.' },
    ru: { label: 'Отрасли', title: 'Промышленные отрасли | Консалтинг в Дубае — Alan Apire', description: 'Отраслевой опыт: энергетика и генерация, теплоснабжение, водная инфраструктура, нефтепереработка и тяжёлая промышленность — из Дубая для клиентов в ОАЭ и ССАГПЗ.' },
  },
  projects: {
    en: { label: 'Projects', title: 'Industrial & Infrastructure Project Experience Dubai | Alan Apire', description: 'Verified delivery track record of our advisory team across heavy infrastructure, power generation, district heating, water supply, and oil refining — now serving clients in Dubai, UAE, and the GCC.' },
    ar: { label: 'المشاريع', title: 'مشاريع صناعية وبنية تحتية — آلان أپاير دبي', description: 'سجل تنفيذ دولي موثق لفريقنا الاستشاري في البنية التحتية الثقيلة وتوليد الطاقة والتدفئة والمياه والتكرير — نخدم عملاء في دبي والإمارات ودول الخليج.' },
    ru: { label: 'Проекты', title: 'Опыт промышленных и инфраструктурных проектов Дубай', description: 'Подтверждённый опыт нашей команды в тяжёлой инфраструктуре, энергетике, теплоснабжении, водоснабжении и нефтепереработке — сейчас для клиентов в Дубае, ОАЭ и ССАГПЗ.' },
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
    en: { label: 'Contact', title: 'Contact Alan Apire | Engineering Consultancy Dubai, UAE', description: 'Start a project with Alan Apire — engineering and project management consultancy based in Dubai (DIEZ). Tell us your requirements, location, and timeline.' },
    ar: { label: 'اتصل بنا', title: 'تواصل مع آلان أپاير | استشارات هندسية في دبي', description: 'ابدأ مشروعك مع آلان أپاير — شركة استشارات هندسية وإدارة مشاريع مقرها دبي (دايز). أخبرنا بمتطلباتك وموقعك وجدولك الزمني.' },
    ru: { label: 'Контакты', title: 'Контакты Alan Apire | Инжинерный консалтинг Дубай', description: 'Начните проект с Alan Apire — консалтинговая компания в области инженеринга и управления проектами, базирующаяся в Дубае (DIEZ). Расскажите о требованиях, локации и сроках.' },
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
  compare: {
    en: { label: 'Compare', title: 'Compare Engineering & Project Management Consultancies Dubai | Alan Apire', description: 'Compare Alan Apire with leading project management and engineering consultancy firms in Dubai and the UAE. Feature matrices, sector fit, and honest analysis.' },
    ar: { label: 'مقارنة', title: 'مقارنة شركات الاستشارات الهندسية وإدارة المشاريع في دبي | آلان أپاير', description: 'قارن بين آلان أپاير وشركات استشارات إدارة المشاريع في دبي والإمارات.' },
    ru: { label: 'Сравнение', title: 'Сравнение консалтинговых компаний Дубай | Alan Apire', description: 'Сравните Alan Apire с ведущими консалтинговыми компаниями в Дубае и ОАЭ.' },
  },
  'compare-vs-rpm-ahpmc': {
    en: { label: 'Alan Apire vs RPM vs AHPMC', title: 'Alan Apire vs RPM Consultants vs AHPMC: Engineering Consultancy Dubai (2026)', description: 'Detailed comparison of Alan Apire, RPM Consultants, and AHPMC for project management and engineering consultancy in Dubai. Feature matrix, sector fit, and recommendation.' },
    ar: { label: 'آلان أپاير مقابل RPM وAHPMC', title: 'آلان أپاير مقابل RPM Consultants مقابل AHPMC: استشارات هندسية دبي 2026', description: 'مقارنة تفصيلية بين آلان أپاير وRPM Consultants وAHPMC لإدارة المشاريع والاستشارات الهندسية في دبي.' },
    ru: { label: 'Alan Apire vs RPM vs AHPMC', title: 'Alan Apire vs RPM Consultants vs AHPMC: инжениринговый консалтинг Дубай 2026', description: 'Детальное сравнение Alan Apire, RPM Consultants и AHPMC по управлению проектами и инжиниринговому консалтингу в Дубае.' },
  },
  'compare-alternatives': {
    en: { label: 'Alternatives', title: '10 Best Project Management Consultancy Alternatives in Dubai 2026 | Alan Apire', description: 'Looking for project management and engineering consultancy alternatives in Dubai? Compare the top 10 firms by sector focus, service scope, and best-fit use case.' },
    ar: { label: 'بدائل', title: 'أفضل 10 بدائل لشركات استشارات إدارة المشاريع في دبي 2026', description: 'مقارنة أفضل 10 شركات استشارات إدارة المشاريع والاستشارات الهندسية في دبي حسب التخصص ونطاق الخدمات.' },
    ru: { label: 'Альтернативы', title: '10 лучших альтернатив консалтинга по управлению проектами в Дубае 2026', description: 'Ищете альтернативы для консалтинга по управлению проектами в Дубае? Сравните 10 ведущих компаний по секторной специализации и набору услуг.' },
  },
};

export function t(locale: Locale, page: PageKey) {
  return PAGES[page][locale];
}

const PAGE_SEGMENTS: Record<PageKey, string | null> = {
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
  if (!segment) return `/${locale}`;
  return `/${locale}/${segment}`;
}
