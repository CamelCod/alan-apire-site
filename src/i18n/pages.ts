import { LOCALES, type Locale } from './config';
import en from '../content/i18n/en.json';
import ar from '../content/i18n/ar.json';
import ru from '../content/i18n/ru.json';
import { PARTNER_COPY } from './partner';
const LEGAL = {en,ar,ru};
export type PageKey = 'home'|'about'|'services'|'projects'|'partner'|'contact'|'outreach'|'privacy'|'terms'|'industries'|'team'|'careers';
type Metadata = {label:string;title:string;description:string};
type Localized = Record<Locale,Metadata>;
export const PAGE_ORDER: PageKey[] = ['home','about','services','projects','partner','contact'];
export const PUBLISHED_PAGES: PageKey[] = [...PAGE_ORDER,'outreach','privacy','terms'];
function pageMeta(key:'home'|'about'|'services'|'projects'|'partner'|'contact'): Localized {
  return Object.fromEntries(LOCALES.map(locale => {
    const c=PARTNER_COPY[locale];
    return [locale,{label:c.nav[key],title:`${c.pages[key].title} | Alanpire`,description:c.pages[key].summary}];
  })) as Localized;
}
function legalMeta(key:'privacy'|'terms'): Localized {
  return Object.fromEntries(LOCALES.map(locale => {
    const m=LEGAL[locale].meta[key];
    const label=key==='privacy' ? PARTNER_COPY[locale].form.privacy : PARTNER_COPY[locale].terms;
    return [locale,{label,title:m.title,description:m.description}];
  })) as Localized;
}
export const PAGES: Record<PageKey,Localized> = {
  home:pageMeta('home'),about:pageMeta('about'),services:pageMeta('services'),
  projects:pageMeta('projects'),partner:pageMeta('partner'),contact:pageMeta('contact'),
  privacy:legalMeta('privacy'),terms:legalMeta('terms'),
  outreach:Object.fromEntries(LOCALES.map(locale => [locale,{
    label:PARTNER_COPY[locale].brief,title:`${PARTNER_COPY[locale].brief} | Alanpire`,
    description:PARTNER_COPY[locale].pages.home.summary,
  }])) as Localized,
  // Metadata retained only for compatibility redirects, not navigation or sitemap.
  industries:pageMeta('services'),team:pageMeta('about'),careers:pageMeta('about'),
};
export function localizedPath(locale:Locale,page:PageKey) { return `/${locale}${page==='home' ? '' : `/${page}`}`; }
export function switchLocalePath(currentPath:string,to:Locale) {
  const parts=currentPath.split('/').filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0])) parts[0]=to;
  else parts.unshift(to);
  return `/${parts.join('/')}/`;
}
