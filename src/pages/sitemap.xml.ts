import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { LOCALES, LOCALE_META, SITE_URL } from '../i18n/config';
import { PAGES, localizedPath, type PageKey } from '../i18n/pages';

// Per-page priority and changefreq signals for crawl budget guidance.
// lastmod is set to the build date so Bing/Yandex can detect updates.
const PAGE_META: Partial<Record<PageKey, { priority: string; changefreq: string }>> = {
  home:                      { priority: '1.0', changefreq: 'weekly' },
  about:                     { priority: '0.9', changefreq: 'monthly' },
  services:                  { priority: '0.9', changefreq: 'monthly' },
  industries:                { priority: '0.8', changefreq: 'monthly' },
  projects:                  { priority: '0.8', changefreq: 'weekly' },
  contact:                   { priority: '0.7', changefreq: 'yearly' },
  compare:                   { priority: '0.7', changefreq: 'monthly' },
  'compare-vs-rpm-ahpmc':    { priority: '0.7', changefreq: 'monthly' },
  'compare-alternatives':    { priority: '0.7', changefreq: 'monthly' },
  team:                      { priority: '0.6', changefreq: 'monthly' },
  careers:                   { priority: '0.5', changefreq: 'monthly' },
  privacy:                   { priority: '0.2', changefreq: 'yearly' },
  terms:                     { priority: '0.2', changefreq: 'yearly' },
};

type SitemapRow = {
  loc: string;
  alternates: { lang: string; href: string }[];
  meta: { priority: string; changefreq: string };
};

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.toString() ?? SITE_URL).replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];
  const pages: SitemapRow[] = [];

  const pageKeys = Object.keys(PAGES) as PageKey[];
  for (const page of pageKeys) {
    const meta = PAGE_META[page] ?? { priority: '0.5', changefreq: 'monthly' };
    const alternates = LOCALES.map((l) => ({
      lang: LOCALE_META[l].htmlLang,
      href: `${base}${localizedPath(l, page)}/`,
    }));
    const xdefault = `${base}${localizedPath('en', page)}/`;
    for (const l of LOCALES) {
      pages.push({
        loc: `${base}${localizedPath(l, page)}/`,
        alternates: [{ lang: 'x-default', href: xdefault }, ...alternates],
        meta,
      });
    }
  }

  const projects = await getCollection('projects', (e) => e.data.order < 99);
  const byKey = new Map<string, typeof projects>();
  for (const project of projects) {
    const list = byKey.get(project.data.translationKey) ?? [];
    list.push(project);
    byKey.set(project.data.translationKey, list);
  }

  for (const siblings of byKey.values()) {
    const alternates = siblings.map((s) => ({
      lang: LOCALE_META[s.data.locale].htmlLang,
      href: `${base}/${s.data.locale}/projects/${s.slug}/`,
    }));
    const english = siblings.find((s) => s.data.locale === 'en') ?? siblings[0];
    const xdefault = `${base}/${english.data.locale}/projects/${english.slug}/`;
    for (const project of siblings) {
      pages.push({
        loc: `${base}/${project.data.locale}/projects/${project.slug}/`,
        alternates: [{ lang: 'x-default', href: xdefault }, ...alternates],
        meta: { priority: '0.6', changefreq: 'monthly' },
      });
    }
  }

  const urls = pages
    .map((p) => {
      const alt = p.alternates
        .map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
        .join('\n    ');
      return `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.meta.changefreq}</changefreq>
    <priority>${p.meta.priority}</priority>
    ${alt}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
