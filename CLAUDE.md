# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Alan Apire Management Consultancies** — trilingual (EN / AR-RTL / RU) static marketing site.
Lean MVP: 13 pages × 3 languages, 10 project case studies, WhatsApp button, contact form (Formspree), Google Maps, analytics (Plausible/GA4/Customer.io), full SEO (hreflang, sitemap, robots, Open Graph, JSON-LD).

## Stack & Commands

- **Astro 4** static output (no server runtime) + **Tailwind CSS 3** + Markdown Content Collections
- Hosted on **Cloudflare Pages** (`wrangler.toml`, `public/_redirects`, `_headers`)

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run pages:preview   # preview via wrangler (Cloudflare Pages simulation)
npm run pages:deploy    # deploy to Cloudflare Pages
```

No test framework is configured; validate changes with `npm run build`.

## Architecture

```
src/
  i18n/
    config.ts          # LOCALES, BRAND contact details, ANALYTICS config, SITE_URL, CUSTOMERIO
    pages.ts           # per-locale page labels/titles/descriptions for 13 pages
    site.ts            # 2000+ lines of structured site copy (pillars, sectors, stages, home, about, etc.)
  content/
    config.ts          # Zod collection schemas (projects, pages)
    projects/*.md      # case studies: <locale>-<slug>.md (30 files = 10 × 3 locales)
  layouts/
    Base.astro         # <html lang/dir>, hreflang, OG, canonical, analytics, JSON-LD Organization
    Home.astro         # animated hero, 4 pillars, 5 sectors, 3 featured projects, 5 stages, why us, CTA
    Page.astro         # generic inner page (about/services/industries/team/careers/privacy/terms/compare)
    ProjectsIndex.astro  # all 10 case studies grid
    Contact.astro      # contact form + Google Maps embed
  components/
    Header.astro       # nav + language switcher + mobile menu
    Footer.astro       # links grouped by pillars/sectors/contact
    ContactForm.astro  # Formspree POST, honeypot, Customer.io identify/track
    WhatsAppButton.astro  # fixed FAB, locale-aware prefill message
    PageHero.astro     # simple hero for inner pages
    AnimatedHero.astro # homepage hero with background + staggered animations
  pages/
    index.astro        # redirects to default locale (/en/)
    [locale]/projects/[slug].astro   # dynamic case study route with hreflang siblings
    en|ar|ru/…         # 13 route folders per locale
  lib/
    customerio.ts      # lazy-init Customer.io Data In, cioIdentify/cioTrack helpers
  styles/
    global.css         # base styles, .container-page, .btn, .card, .section, .eyebrow
public/
  brand/               # logo, favicon, og image, hero image
  downloads/           # Alanpire_Gulf_Capability_Portfolio.pdf (served via /downloads/)
  _redirects           # root → /en/, language homes → trailing slash
  robots.txt
```

## Conventions

- **Locales**: `en`, `ar`, `ru`. Arabic uses `dir="rtl"` set by `Base.astro`; keep styling RTL-safe (use logical Tailwind utilities like `ps-*`/`pe-*` where direction matters).
- **Page copy** lives in `src/i18n/pages.ts`, not hardcoded in templates. Edit there to change titles/labels/descriptions per locale.
- **Structured site copy** (pillars, sectors, stages, home sections, about page) lives in `src/i18n/site.ts` — single source of truth. Layouts import from here.
- **Case studies**: one Markdown file per locale in `src/content/projects/`, filename pattern `<locale>-<slug>.md`, linked across locales by matching `translationKey`. Frontmatter schema:
  `title, summary, sector?, service?, year?, location?, cover?, order, locale, translationKey, datePublished?, dateModified?`
  (see `src/content/config.ts`).
- **Brand design tokens**: `tailwind.config.mjs` — `brand.*` grays/navy, `accent` gold (#B08D57), fonts Inter + Noto Sans Arabic (sans) and Playfair Display + Amiri (display/serif). Use these tokens, don't hardcode colors.
- Tailwind integration runs with `applyBaseStyles: false`; base styles come from `src/styles/global.css`.
- **Component utilities**: `.container-page`, `.btn/.btn-primary/.btn-outline`, `.section`, `.eyebrow`, `.card`, `.prose-tight`.

## Environment / Configuration

- `.env` from `.env.example`:
  - `FORMSPREE_ENDPOINT` — create form at formspree.io
  - `ANALYTICS_PROVIDER` — `plausible` | `ga4` | `none`
  - `PLAUSIBLE_DOMAIN` — e.g. `alanapire.ae`
  - `GA4_MEASUREMENT_ID` — e.g. `G-XXXXXXXX`
  - `ASTRO_SITE` — `https://alanapire.ae` (Cloudflare Pages build env)
  - `CIO_WRITE_KEY` — optional Customer.io sandbox key (defaults to production key in config)
- Production domain set in `astro.config.mjs` (`site`) and `src/i18n/config.ts` (`SITE_URL`) — update both together.
- Pre-launch checklist items tracked in README.md.

## Key Implementation Details

### Routing & i18n
- `src/pages/index.astro` redirects `/` → `/en/`
- `public/_redirects` handles trailing slash enforcement on locale roots
- `src/i18n/config.ts` exports `LOCALES`, `LOCALE_META` (dir, htmlLang, label), `localizedPath()`, `isLocale()`
- All 13 page keys defined in `src/i18n/pages.ts` as `PageKey` type

### SEO (comprehensive)
- **Base.astro**: canonical, hreflang alternates + x-default, Open Graph, Twitter card, JSON-LD Organization+ProfessionalService
- **Sitemap** (`src/pages/sitemap.xml.ts`): all 39 locale pages + 30 case studies with hreflang; priority/changefreq per page type
- **Robots**: allows all, references sitemap.xml
- **Case study pages** (`[locale]/projects/[slug].astro`): build sibling alternates via `translationKey`

### Analytics & Tracking
- **Plausible**: script loaded when `ANALYTICS_PROVIDER=plausible` + `PLAUSIBLE_DOMAIN`
- **GA4**: gtag loaded when `ANALYTICS_PROVIDER=ga4` + `GA4_MEASUREMENT_ID`
- **Customer.io Data In**: lazy-initialized from `CIO_WRITE_KEY` (meta tag in Base.astro). Components call `cioIdentify(email, {name})` and `cioTrack(event, props)` — safe no-ops if not initialized.
- Tracked events: `whatsapp_click`, `contact_form_submitted` (with locale/industry/service)

### Contact Form
- `ContactForm.astro` posts to `FORMSPREE_ENDPOINT` (hidden `_subject`, honeypot `_gotcha`)
- RTL-safe with `dir="ltr"` on phone/email links
- Customer.io identify on submit (email + name), track `contact_form_submitted`

### WhatsApp Button
- Fixed bottom-right FAB, `wa.me` link with locale-aware prefill message
- Tracks `whatsapp_click` via Customer.io

### Capability Portfolio Download
- `Page.astro` (about page) includes a download card linking to `/downloads/Alanpire_Gulf_Capability_Portfolio.pdf`
- File served from `public/downloads/` → copied to `dist/downloads/` on build

## Adding/Editing Content

### Page copy (labels, titles, descriptions)
Edit `src/i18n/pages.ts` — the `PAGES` record keyed by `PageKey` and `Locale`.

### Structured copy (pillars, sectors, stages, home, about)
Edit `src/i18n/site.ts` — exports `PILLARS`, `SECTORS`, `STAGES`, `HOME`, `ABOUT`, `SECTOR_LABELS`, `PROJECTS_COPY`, `CONTACT_COPY`, etc.

### Project case studies
Add 3 files to `src/content/projects/`:
```
en-<slug>.md
ar-<slug>.md
ru-<slug>.md
```
All share the same `translationKey`. Required frontmatter: `title, summary, locale, translationKey, order` (0–9 for published, 99 = draft). Optional: `sector, service, year, location, cover, datePublished, dateModified`.

Place cover images next to the `.md` files and reference with `cover: ./filename.jpg`.

### Brand/contact details
Edit `src/i18n/config.ts` → `BRAND` object (phone, whatsapp without `+`, email, address per locale, mapsQuery).

### Analytics provider
Set `ANALYTICS_PROVIDER` + corresponding domain/measurement ID in Cloudflare Pages build env vars.

## Deployment

### Git-connected (recommended)
1. Push repo to GitHub
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect repo
3. Build settings:
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20` (from `.nvmrc`)
4. Build environment variables (Settings → Environment variables → Production):
   | Variable | Example |
   | --- | --- |
   | `ASTRO_SITE` | `https://alanapire.ae` |
   | `FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxxxxx` |
   | `ANALYTICS_PROVIDER` | `plausible` or `ga4` or omit |
   | `PLAUSIBLE_DOMAIN` | `alanapire.ae` |
   | `GA4_MEASUREMENT_ID` | `G-XXXXXXXX` |
5. Deploy → Custom domains → add `alanapire.ae` and `www.alanapire.ae`, redirect www ↔ apex

### Direct upload
```bash
npm ci
npm run build
npx wrangler pages deploy dist --project-name=alan-apire-site
```

### Preview production build locally
```bash
npm run build
npm run pages:preview
```

## Current State (as of 2026-11-20)

- **13 pages × 3 locales** = 39 static HTML pages: home, about, services, industries, projects, team, careers, contact, privacy, terms, compare, compare-vs-rpm-ahpmc, compare-alternatives
- **10 case studies** with trilingual content (order 0–9): thermal-distribution-network, autonomous-boiler-plant, wastewater-treatment-plant, water-supply-network, oil-refinery-modernisation, pump-station-rehabilitation, manufacturing-process-flow, logistics-warehouse, infrastructure-utility-network, mep-coordination
- **2 additional project MD files added**: `en/ar/ru-boiler-plant.md` and `en/ar/ru-thermal-network.md` (new entries, need order values assigned)
- **Contact info updated**: phone `+971558286328`, whatsapp `971558286328`
- **Capability portfolio PDF** in `public/downloads/` linked from About page
- **Customer.io Data In** integrated (write key in config, lazy init, events tracked)
- Build passes cleanly (`npm run build` → 56 pages in ~1.7s)