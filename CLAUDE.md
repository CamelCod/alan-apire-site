# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Alan And Apire Management Consultancies – FZCO** — trilingual (EN / AR-RTL / RU) static marketing site for engineering consultancy services, deployed on Cloudflare.

Astro 4 static output (no server runtime) + Tailwind CSS 3 + Markdown Content Collections. 13 page types per locale, 15 project case-study translation keys (45 Markdown files), contact form (Formspree), WhatsApp FAB, Google Maps embed, analytics (Plausible/GA4) and Customer.io event tracking, and full SEO (hreflang, sitemap, robots, Open Graph, JSON-LD).

## Commands

```bash
npm install
npm run dev              # dev server at http://localhost:4321
npm run build            # production build to dist/ — the only validation gate (no tests/lint configured)
npm run preview          # preview the production build
npm run pages:preview    # wrangler pages dev dist (Cloudflare simulation)
npm run pages:deploy     # wrangler pages deploy dist --project-name=alan-apire-site
```

There is no test framework or linter. Validate every change with `npm run build`; it type-checks content frontmatter against the Zod schemas and will fail on a broken collection entry.

## Architecture

### i18n is data-driven, not folder-duplicated
- `src/i18n/pages.ts` defines `PageKey` (13 keys), `PAGES` (per-locale label/title/description) and `PAGE_SEGMENTS` (key → URL segment, e.g. `compare-vs-rpm-ahpmc` → `compare/alan-apire-vs-rpm-consultants-vs-ahpmc`). `localizedPath(locale, key)` builds routes from these; Header, Footer and sitemap consume it.
- The "simple" pages live in duplicated route folders (`src/pages/en|ar|ru/<page>/index.astro`); each just renders a shared layout with locale-specific copy. **Editing a template means editing all three** (en/ar/ru) of those thin route files.
- Pages with path parameters live under `src/pages/[locale]/`: project detail (`projects/[slug].astro`) and the compare cluster (`compare/index.astro`, `compare/alternatives.astro`, `compare/alan-apire-vs-rpm-consultants-vs-ahpmc.astro`). Adding a compare page means a new file there *and* a new `PageKey`/`PAGES`/`PAGE_SEGMENTS` entry.
- `src/pages/index.astro` redirects `/` → `/en/`; `public/_redirects` enforces trailing slashes (Astro config has `trailingSlash: 'always'`, `build.format: 'directory'`).

### Content lives in two places, not in templates
- **Structured site copy** (`src/i18n/site.ts`, the largest file): `PILLARS`, `SECTORS`, `SECTOR_LABELS`, `STAGES`, `HOME`, `ABOUT`, `CONTACT_COPY`, `INDUSTRIES_COPY`, `PROJECTS_COPY`, `FOOTER_COPY` — all `Record<Locale, …>`. Layouts import from here; never hardcode copy in a layout.
- **Case studies** (`src/content/projects/*.md`): filename `<locale>-<slug>.md`, three files per `translationKey`. `translationKey` links locales for hreflang siblings regardless of filename slug.

### The `order` field is the publish switch
- `order < 99` → published: shown on the homepage featured grid and included in the sitemap.
- `order: 99` → draft placeholder: renders at its URL but is excluded from the homepage and `sitemap.xml` (`getCollection('projects', e => e.data.order < 99)` in both `Home.astro` and `sitemap.xml.ts`).
- Current state: 6 published keys of 15 (`thermal-network` 0, `boiler-plant` 1, `pump-station` 1, `water-supply` 2, `oil-gas-coordination` 3, `uae-vendor-prequalification` 4 — note two share order 1); 9 placeholder keys with `order: 99` and "Case Study N — slug" titles awaiting client data (`infrastructure-utility`, `layout-space-planning`, `logistics-warehouse`, `manufacturing-process-flow`, `mep-coordination`, `operational-kpi`, `process-improvement`, `project-governance`, `technical-advisory`). Publishing a placeholder = lower its order to a free slot and replace the placeholder body.

### SEO is centralized
- `src/layouts/Base.astro`: `<html lang/dir>`, canonical, hreflang alternates + x-default, OG/Twitter, JSON-LD Organization + ProfessionalService, analytics script loading.
- `src/pages/sitemap.xml.ts`: iterates `PAGES` and published projects, emits hreflang groups; per-page `PAGE_META` sets priority/changefreq. New `PageKey`s fall back to 0.5/monthly.
- `public/robots.txt` references `/sitemap.xml`.
- `SITE_URL` in `src/i18n/config.ts` derives from Astro's `import.meta.env.SITE` (set by `ASTRO_SITE`), so `astro.config.mjs` is the single place to change the domain fallback.

### Analytics / tracking
- `src/i18n/config.ts` → `ANALYTICS`: explicit `ANALYTICS_PROVIDER` wins; otherwise a set `GA4_MEASUREMENT_ID` implies ga4, then `PLAUSIBLE_DOMAIN` implies plausible, else `none`.
- `src/lib/customerio.ts` lazy-inits Customer.io Data In from the write key exposed via a `<meta>` tag in Base.astro; `cioIdentify` / `cioTrack` are safe no-ops when unloaded. Events: `whatsapp_click`, `contact_form_submitted`. The write key in config is a public key; `CIO_WRITE_KEY` overrides it at build time.
- `public/_headers` ships a CSP allowlisting only plausible.io, googletagmanager.com, google-analytics.com, google fonts, Formspree and Google Maps. **Any new third-party script needs a CSP edit** or it will be silently blocked.
- Customer.io load is tied to analytics config — check `Base.astro` before assuming tracking fires when `ANALYTICS_PROVIDER=none`.

### Styling
- Tokens in `tailwind.config.mjs`: `brand.*` grays/navy, `accent` gold (#B08D57), Inter + Noto Sans Arabic (sans), Playfair Display + Amiri (display). Use tokens, not raw colors.
- `applyBaseStyles: false` — base styles come from `src/styles/global.css` (`.container-page`, `.btn*`, `.section`, `.eyebrow`, `.card`, `.prose-tight`).
- RTL: use logical utilities (`ps-*`/`pe-*`/`start-*`/`end-*`); inline phone/email values get `dir="ltr"` to prevent punctuation scrambling.

## Environment & Deployment

`.env.example` → `.env` locally; same names as Cloudflare Pages **build** env vars:

| Variable | Purpose |
| --- | --- |
| `ASTRO_SITE` | Canonical URL, e.g. `https://alanpire.ae` |
| `FORMSPREE_ENDPOINT` | Contact form POST target |
| `ANALYTICS_PROVIDER` | `plausible` \| `ga4` \| `none` |
| `PLAUSIBLE_DOMAIN` | e.g. `alanpire.ae` |
| `GA4_MEASUREMENT_ID` | e.g. `G-XXXXXXXX` |
| `CIO_WRITE_KEY` | Optional Customer.io sandbox override |

- `wrangler.toml` supports both deploy paths: `pages_build_output_dir = "dist"` for `wrangler pages deploy`, and an `[assets]` block so Workers Builds (`npx wrangler deploy`) publishes `dist/` as an assets-only Worker. Do not add an SSR adapter.
- Node 20 (`.nvmrc`).
- `public/_redirects` and `public/_headers` are copied into `dist/` and applied by Cloudflare.

## Repo layout notes

- `public/brand/` — logos, favicon, OG image, hero photo.
- `public/downloads/` — capability PDFs linked from the About page (several versions exist; confirm which one the layout references before replacing).
- `public/brochure.html` — print-styled source for the capability brochure PDF, not linked from the site.
- `public/assets/projects/` — large image dumps from project docs; mostly unused by the build (project covers live next to the Markdown files in `src/content/projects/` and are referenced as `cover: ./file.jpg`).
- Root `en/`, `ar/`, `ru/` and `INDEX.md` — client-review sitemap drafts; **not** part of the Astro build, do not edit expecting site changes.

## Adding content

**Case study:** add `en-<slug>.md`, `ar-<slug>.md`, `ru-<slug>.md` sharing a `translationKey`; required frontmatter `title, summary, locale, translationKey` (`order` defaults to 99, i.e. draft). Place any cover image next to the files. Add the entry to `ABOUT`/`site.ts` listings only if it needs a curated mention — index and sitemap pick it up automatically.

**Page copy:** edit `src/i18n/pages.ts` for labels/titles/descriptions; `src/i18n/site.ts` for structured sections.

**Brand/contact:** `BRAND` in `src/i18n/config.ts` (phone, WhatsApp without `+`, email, per-locale address, maps query).
