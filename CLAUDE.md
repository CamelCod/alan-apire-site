# CLAUDE.md

Guidance for AI coding agents working in this repository.

## Project Overview

Alan Apire Management Consultancies — trilingual (EN / AR-RTL / RU) static marketing site.
Lean MVP: 10 pages × 3 languages, 10 project case studies, WhatsApp button, contact form
(Formspree), Google Maps, analytics, full SEO (hreflang, sitemap, robots, Open Graph).

## Stack & Commands

- **Astro 4** static output (no server runtime) + **Tailwind CSS 3** + Markdown Content Collections
- Hosted on **Cloudflare Pages** (`wrangler.toml`, `public/_redirects`, `_headers`)

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
```

No test framework is configured; validate changes with `npm run build`.

## Architecture

```
src/
  i18n/
    config.ts          # LOCALES, BRAND contact details, ANALYTICS config, SITE_URL
    pages.ts           # per-locale page labels/titles/descriptions for the 10 pages
  content/
    config.ts          # Zod collection schemas (projects, pages)
    projects/*.md      # case studies: <locale>-<slug>.md (30 files = 10 × 3 locales)
  layouts/             # Base.astro (html lang/dir, hreflang, OG, canonical, analytics),
                       # Home, Page, ProjectsIndex, Contact
  components/          # Header (nav + language switcher), Footer, ContactForm,
                       # WhatsAppButton, PageHero, AnimatedHero
  pages/
    index.astro        # redirects to default locale (/en/)
    [locale]/projects/[slug].astro   # dynamic case study route
    en|ar|ru/…         # 10 route folders per locale
public/
  brand/               # logo, favicon, og image, hero image
  _redirects           # root → /en/
  robots.txt
```

## Conventions

- **Locales**: `en`, `ar`, `ru`. Arabic uses `dir="rtl"` set by `Base.astro`; keep styling RTL-safe
  (use logical Tailwind utilities like `ps-*`/`pe-*` where direction matters).
- **Page copy** lives in `src/i18n/pages.ts`, not hardcoded in templates. Edit there to change
  titles/labels/descriptions per locale.
- **Case studies**: one Markdown file per locale in `src/content/projects/`, filename pattern
  `<locale>-<slug>.md`, linked across locales by matching `translationKey`. Frontmatter schema:
  `title, summary, sector?, service?, year?, location?, cover?, order, locale, translationKey`
  (see `src/content/config.ts`).
- **Brand design tokens**: `tailwind.config.mjs` — `brand.*` grays/navy, `accent` gold (#B08D57),
  fonts Inter + Noto Sans Arabic (sans) and Playfair Display + Amiri (display). Use these tokens,
  don't hardcode colors.
- Tailwind integration runs with `applyBaseStyles: false`; base styles come from `src/styles/global.css`.

## Environment / Configuration

- `.env` from `.env.example`: `FORMSPREE_ENDPOINT`, `PLAUSIBLE_DOMAIN`, `GA4_MEASUREMENT_ID`, `ASTRO_SITE`
- Production domain set in `astro.config.mjs` (`site`) and `src/i18n/config.ts` (`SITE_URL`) —
  currently `https://alanapire.ae`; update both together.
- Pre-launch checklist items (brand contact info, analytics provider, brand assets in
  `public/brand/`) are tracked in README.md.