import type { APIRoute } from 'astro';
import { LOCALES, SITE_URL } from '../i18n/config';
import { PAGES, localizedPath, type PageKey } from '../i18n/pages';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? SITE_URL).replace(/\/$/, '');
  const pages: { loc: string; alternates: { lang: string; href: string }[] }[] = [];

  const pageKeys = Object.keys(PAGES) as PageKey[];
  for (const page of pageKeys) {
    const alternates = LOCALES.map((l) => ({
      lang: l,
      href: `${base}${localizedPath(l, page)}/`,
    }));
    const xdefault = `${base}${localizedPath('en', page)}/`;
    for (const l of LOCALES) {
      const altLinks = alternates
        .map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
        .join('\n    ');
      pages.push({
        loc: `${base}${localizedPath(l, page)}/`,
        alternates: [{ lang: 'x-default', href: xdefault }, ...alternates],
      });
      void altLinks;
    }
  }

  const urls = pages
    .map((p) => {
      const alt = p.alternates
        .map((a) => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`)
        .join('\n    ');
      return `  <url>
    <loc>${p.loc}</loc>
    ${alt}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
