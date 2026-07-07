# Alan Apire — Management Consultancies Website

Lean MVP trilingual (EN / AR-RTL / RU) static site built with **Astro + Tailwind + Markdown**,
deployed to **Cloudflare Pages**. Implements the scope of the Alan Apire Lean MVP Quote:
10 pages × 3 languages, 10 project case studies, WhatsApp button, contact form, Google Maps,
analytics, full SEO (hreflang, sitemap, robots, Open Graph).

## Stack

- **Astro 4** (static output, no server runtime)
- **Tailwind CSS** (RTL-aware via `dir="rtl"`)
- **Content Collections** for project case studies (`src/content/projects/*.md`)
- **Cloudflare Pages** for hosting (free tier, global CDN)

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  i18n/
    config.ts          # locales, brand contact details, analytics config
    pages.ts           # per-locale page labels/titles/descriptions for the 10 pages
  content/
    config.ts          # collection schemas (projects)
    projects/*.md      # 10 case studies × 3 locales
  layouts/
    Base.astro         # <html lang/dir>, hreflang, OG, canonical, analytics
    Home.astro         # home with category landing zones
    Page.astro         # generic inner page
    ProjectsIndex.astro
    Contact.astro
  components/
    Header.astro       # nav + language switcher
    Footer.astro
    ContactForm.astro  # Formspree target via env var
    WhatsAppButton.astro
    PageHero.astro
  pages/
    index.astro        # redirects to default locale
    [locale]/projects/[slug].astro   # dynamic case study route
    en/ ar/ ru/        # 10 route folders per locale
public/
  brand/               # logo, favicon, og image (replace with Phase 1 deliverables)
  robots.txt
  _redirects           # Cloudflare Pages root → /en/
```

## Editing content (Markdown — no CMS)

The 10 page templates read copy from `src/i18n/pages.ts`. To update page labels, titles, or
descriptions per locale, edit that file. For privacy/terms boilerplate copy, edit the strings
in `src/i18n/pages.ts` (or extend the `pages` content collection).

**Project case studies** live in `src/content/projects/`. Each file's filename is the slug.
A case study exists in 3 locales linked by the same `translationKey`:

```
src/content/projects/
  en-manufacturing-process-flow.md      (locale: en,  translationKey: manufacturing-process-flow)
  ar-manufacturing-process-flow.md      (locale: ar,  translationKey: manufacturing-process-flow)
  ru-manufacturing-process-flow.md      (locale: ru,  translationKey: manufacturing-process-flow)
```

Frontmatter: `title, summary, sector, service, year, location, order, locale, translationKey`.
Body is Markdown. Add a `cover` image by placing it next to the file and using `cover: ./my.jpg`.

## Configuration checklist (before launch)

1. `src/i18n/config.ts` → `BRAND` phone, whatsapp, email, address, mapsQuery
2. `src/i18n/config.ts` → `ANALYTICS` provider + `SITE_URL`
3. `.env` → `FORMSPREE_ENDPOINT` (create at formspree.io)
4. `astro.config.mjs` → `site` (production domain)
5. `public/brand/` → final logo, favicon, og image from Phase 1
6. `tailwind.config.mjs` → brand colors and fonts once Phase 1 palette is approved

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare dashboard → Pages → Create project → connect the GitHub repo.
3. Build command: `npm run build`. Output directory: `dist`.
4. Add environment variables from `.env.example`.
5. Deploy. Custom domain + SSL under Custom domains.

## License / ownership

Source code owned by Alan Apire Management Consultancies. Built by AgentCraft.
