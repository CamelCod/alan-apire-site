# Alanpire: evidence-backed design and writing audit

**Refined draft 1.0 · 26 November 2026 · Public site: https://alanpire.ae/en/**

**Blunt verdict:** this site has more technical substance than the original issue list suggests. Its biggest problems are unreliable conversion infrastructure, misleading relationships in structured data, contradictory licensing language and poorly surfaced evidence. New photos alone will not fix those.

This is an audit and an imagery change, **not** a production redesign or a licensing/legal opinion. “Verified” below means observed in the public response or inspected source, not independently authenticated against contracts, licence documents or government registers.

## 1. Scope, method and confidence

- Crawled **100 first-party URL variants**: **48 distinct locale-specific HTML content pages**, root/locale/trailing-slash aliases, robots and sitemap. All 48 content pages returned HTTP 200. The sole 404 was the deliberately probed `/sitemap-index.xml`, which is not a broken navigation link.
- The 48 pages are **16 per locale**: home; about; services; projects; industries; contact; team; careers; privacy; terms; comparison index; two comparison articles; three project cases.
- Used navigation, the live sitemap and repository-defined routes. The sitemap also lists 48 pages, but with the wrong host spelling. No claim to discover unlinked routes absent from both the sitemap and source.
- Read all 48 HTML documents and their EN/AR/RU copy. Inventory and exact page text: [evidence/pages.json](evidence/pages.json). Per-page ratings and excerpts: [evidence/PAGE-INVENTORY.md](evidence/PAGE-INVENTORY.md).
- Compared the public response against repository main at `f68d1c4e396cac3496bbf7e24669cbe64be639d0`. Source is not proof of deployed environment variables.
- Mobbin previews were visually inspected; 12 selected patterns and 3 direct-sector references are documented in [REFERENCES.md](REFERENCES.md). Mobbin did **not** provide a verified engineering-consultancy reference set; adjacent examples are labelled.
- No form, WhatsApp message or booking was submitted. No production deployment.

### Explicit verification limits

Chromium could not be launched reliably in this environment. The downloaded browser initially lacked shared libraries; the installed system browser then timed out, including an isolated launch attempt. **No rendered mobile screenshots, automated axe results, Lighthouse scores, LCP, CLS or INP results are claimed.** Responsive/accessibility scores below are provisional source-and-HTML assessments, not observed device usability or WCAG certification.

HTTP requests initially using Python's default user agent received 403; using the same declared `AlanpireSiteAudit/1.0` agent as the successful crawl returned 200. Do not interpret those transient 403s as missing pages. DNS observations are from this environment, not an authoritative worldwide DNS audit.

The exact legacy build dependency installation was blocked by the package firewall on Vite 5.4.21, cited as a critical vulnerability. A latest-version tooling attempt encountered an Astro/Tailwind peer-version conflict. No firewall bypass or dependency migration was made. Independent Astro compiler and content validation are recorded separately; **a production build is not claimed**.

## 2. Verify the supplied issues

| Supplied issue | Verdict | Exact evidence and interpretation |
|---|---|---|
| Four pillars vs three licences | **Confirmed, wording is materially confusing** | [Home](https://alanpire.ae/en/) says “Four Licensed Service Areas”, then “under three directly licensed categories”. [About](https://alanpire.ae/en/about/) lists Management Consultancies, Project Management Services and Architectural Prospective Drawings. Four commercial service groupings need not mean four licensed activities. Do not infer licence scope from a marketing heading. |
| Dense copy | **Partly confirmed** | EN homepage has 824 whitespace-delimited tokens including navigation/footer; four service cards repeat tagline, description and three deliverables. Example: “We build critical-path schedules in Primavera P6 and administer live risk registers.” Useful detail, but too much of it before evidence. Word count is descriptive, not proof that a page is too long. |
| No named people | **False site-wide; discoverability problem** | [Team](https://alanpire.ae/en/team/) names Alan Marvanovich Biri, Andrei Stepanov and Aiham Alhawar, with roles and biographies. Header and footer omit a team link. Surface this existing page rather than inventing profiles. Credentials remain self-published claims pending documentary verification. |
| No logos, numbers or testimonials | **Mixed** | Brand logos exist. No client-logo strip or attributed client testimonial was identified in the 48 inspected pages. Numbers are already prominent: “2 × DN500”, “1,704 m”, “20.0 bar”, “10.5 MWth”, “107 files”. These are project parameters, not demonstrated customer outcomes. |
| All case studies are in Russia, none UAE | **Confirmed for the 3 published cases, based on their own attribution** | [Thermal](https://alanpire.ae/en/projects/en-thermal-network/), [boiler](https://alanpire.ae/en/projects/en-boiler-plant/) and [water](https://alanpire.ae/en/projects/en-water-supply/) say prior work was through OOO Energodiagnostika in Russia, not contracts awarded to the UAE entity. Cards say “EURASIA”, obscuring the more precise country attribution in the body. No published UAE case was found; that does not prove the company has never worked in the UAE. |
| Only one case link | **Outdated** | All three featured cases have a linked title and a “View case” action; the two existing images are also linked. |
| Email-only CTA; no form, WhatsApp, booking | **Partly outdated; worse configuration issue** | [Contact](https://alanpire.ae/en/contact/) has form, email and telephone. Form action is `https://formspree.io/f/your-id` in all three locales. No `wa.me` link or booking action was found in the crawl. A WhatsApp component exists in source but is not evidence that it renders publicly. |
| Alan Apire vs Alan and Apire | **Needs explicit brand/legal-name rules** | Header: “Alanpire”. Comparison articles: “Alan Apire”. Legal footer: “ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO”. The legal name can legitimately differ; unexplained editorial variations cannot. Do not silently rename the legal entity. |

## 3. Design scorecard

Scale: **1 obstructive/incomplete; 2 substantial weaknesses; 3 usable foundation; 4 strong with small gaps; 5 evidenced, coherent and thoroughly validated.** Ratings are expert judgments anchored to observations, not measured conversion effects. P = provisional because no rendered-browser verification succeeded.

| Category | /5 | Evidence | Judgment |
|---|---:|---|---|
| Information hierarchy | 3 | [Home](https://alanpire.ae/en/): clear H1, two hero actions, then four long service cards before selected cases | Reasonable hierarchy; lead with evidence sooner and move specialist detail to service pages |
| Project imagery | 2 | [Projects](https://alanpire.ae/en/projects/): water card says “Asset required: Route alignment drawing” | An internal production note is exposed to buyers; inconsistent with the other cards |
| Credibility architecture | 2 | [Team](https://alanpire.ae/en/team/) exists, but header lists only About, Services, Projects, Industries | Existing human proof is needlessly hard to discover; licence records have no document-level verification path |
| Conversion path | 1 | [Contact](https://alanpire.ae/en/contact/): `form[action="https://formspree.io/f/your-id"]` | A visible form is not a functioning enquiry channel; delivery was not tested |
| Mobile/responsive structure | 2 P | `Header.astro`: primary contact uses `hidden sm:inline-flex`; mobile menu contains four nav pages and language links, no contact item. Cards use `line-clamp-1` for titles | Clear source-level risks: buried mobile contact and truncated long AR/RU titles. Actual overflow/tap behaviour remains untested |
| Accessibility foundation | 2 P | Skip link, `lang`/`dir`, labels and focus styles exist. Missing-asset note uses `#94a3b8` on `#faf9f6`, computed **2.44:1** at 0.7rem | That small-text combination fails WCAG AA 1.4.3's 4.5:1 minimum. Other contrast, keyboard, zoom and screen-reader checks remain open |
| Performance discipline | 3 P | EN home HTML 31,088 bytes; hero source uses WebP/fallback, high fetch priority; project images lazy-load | Lightweight HTML and sensible primitives, but no basis to declare the rendered site fast or passing Core Web Vitals |
| Search/metadata architecture | 1 | All **48/48** canonicals point to `alanapire.ae`; sitemap URLs use that host too; it failed DNS resolution here | Resolve the intended hostname and redirects before expanding SEO content |

## 4. Writing scorecard

| Category | /5 | Exact evidence | Judgment |
|---|---:|---|---|
| Positioning | 3 | [Home](https://alanpire.ae/en/): “Specialist industrial engineering support for UAE projects” | Clear audience and scope; “support” is appropriately more restrained than claiming statutory design authority |
| Scannability | 3 | “Baseline scheduling and contractor interface coordination.” followed by a paragraph and three bullets | Strong specificity, redundant presentation. Keep one lead and three outputs; remove repeated explanations |
| Proof quality | 2 | [Boiler case](https://alanpire.ae/en/projects/en-boiler-plant/): “107 files”; homepage references “Positive Conclusion of State Expertise” | Parameters and approval assertions are not verified commercial impact. Link redacted records before making stronger proof claims |
| Brand/licensing consistency | 2 | “Four Licensed Service Areas” vs “three directly licensed categories”; comparison pages use “Alan Apire” | Establish one public brand and a separate exact legal name. Licence claims need a documentary source |
| Case-study clarity | 3 | [Water case](https://alanpire.ae/en/projects/en-water-supply/): “They were not contracts awarded to Alanpire's UAE entity.” | Valuable attribution; repeat country/entity context near the first case impression, not only deep in the body |
| Action and recovery copy | 2 | Contact button “Send”; no in-page success/error state in `ContactForm.astro` | Replace with “Send project enquiry”; design honest provider-confirmed success and recoverable failure messages |
| EN/AR/RU parity | 2 | [AR comparison](https://alanpire.ae/ar/compare/alan-apire-vs-rpm-consultants-vs-ahpmc/) says “محتوى المقارنة قيد التحرير.”; [RU](https://alanpire.ae/ru/compare/alan-apire-vs-rpm-consultants-vs-ahpmc/) says “Содержание страницы сравнения готовится.”; both link “View in English” | Two published shells are not translated equivalents. Shared badges also retain `107 files`, `Gosexpertiza`, and English licence labels |
| Legal and policy content | 1 | [Privacy](https://alanpire.ae/en/privacy/): “Privacy policy for the Alanpire corporate website.” [Terms](https://alanpire.ae/en/terms/) is similarly skeletal | Not enough to explain collection, recipients, retention or user rights. Obtain qualified review; do not manufacture legal assurances |

## 5. Top ten fixes, ranked by impact versus effort

Impact and effort are planning judgments, **not** estimated conversion uplift. Impact 5 = lead loss, material credibility or broad discoverability risk; 1 = polish. Effort S = roughly ≤1 day, M = 2–5 days, L = more than a week or externally dependent. Estimates assume access to the relevant deployment/account and approved content.

| Rank | Fix | Impact | Effort | Evidence / acceptance criterion |
|---:|---|---:|---|---|
| 1 | Configure and verify real enquiry delivery | 5 | S–M | Replace `your-id` securely; approved test reaches intended inbox; honest success/error feedback; record outcome, not just submit clicks |
| 2 | Correct canonical, sitemap, hreflang and schema host | 5 | S–M | Confirm preferred domain ownership/DNS and redirects; every canonical URL resolves and is indexable; crawl all 48 again |
| 3 | Separate service groupings from licence activities; remove the unsupported government-parent relationship | 5 | S + owner verification | Use the approved licence wording; IFZA is not represented as a parent organization |
| 4 | Replace the privacy/terms shells and link privacy from the form | 5 | M / legal dependent | Reviewed text describes actual processing and providers; inline privacy text is a real link. Do not invent retention periods or legal basis |
| 5 | Surface existing leadership and verifiable credentials | 4 | S–M | Link Team from About/nav; approved biographies, roles, licence evidence and redacted reference extracts. Client logos/testimonials only with permission |
| 6 | Make mobile contact reachable from the menu | 4 | S | Visible “Discuss your project” item below 640px; keyboard-operable menu with localized label, Escape close and clear focus |
| 7 | Replace inconsistent project thumbnails and remove clipping | 4 | S–M | **Imagery implemented in this PR:** 3 original illustrations in 9 translations, captioned as editorial illustrations. Remove title/figure truncation in a subsequent layout pass; validate AR/RU at 320–390px |
| 8 | Tighten home/service copy around deliverables | 4 | M | Use the three real-line rewrites in the writing skill; preserve scope caveats; keep specialised detail on services/cases |
| 9 | Repair localization, comparison claims and public placeholders | 3 | M | Translate or explicitly noindex incomplete comparison pages; do not put unfinished variants in hreflang as equivalents. Date/source each competitor claim or say “not verified” |
| 10 | Complete AA and performance QA with measured budgets | 3 | M | Fix 2.44:1 text; run keyboard/screen-reader/reflow tests plus axe; test cold mobile/desktop loads; collect field CWV before claiming a pass |

WhatsApp is a useful secondary option if a monitored business number and privacy handling are approved. Booking should be added only if someone can fulfil it. Neither channel compensates for the current broken form configuration.

## 6. SEO and schema specifics

**Present:** HTML `lang` and Arabic `dir="rtl"`, page-specific titles/descriptions, canonical, four hreflang alternates, robots, sitemap and parseable JSON-LD. This is not a site with “no SEO”.

**Incorrect or risky:**

- Live root is `alanpire.ae`; canonical/hreflang/sitemap/JSON-LD identity uses `alanapire.ae`. [DNS observation](evidence/dns.json) shows only the former resolved here. Check authoritative DNS and Search Console before deploying the hostname correction. Do not assume both domains belong to the same owner.
- The inspected earlier schema added an unverified government authority as `parentOrganization`. A licensing authority is not a parent company; the rewritten schema omits that unsupported relationship.
- The earlier schema included precise geo coordinates alongside a non-specific authority address. Coordinates were **not** verified against a real office; the rewritten schema omits them.
- AR/RU comparison-detail shells have **no H1** and are nonetheless in the sitemap. English has substantial comparison text; these are not equivalent translations.
- [Alternatives](https://alanpire.ae/en/compare/alternatives/) uses “10 Best…” and numbered recommendations without a published scoring method. Sources are listed broadly, not attached to individual competitor claims. Do not republish rankings as independent research.
- Legal names can differ from public branding. Use `legalName` for the registered name and a verified public `name`/`alternateName` policy. Do not change registration spelling on editorial grounds.

## 7. Mobile, accessibility and performance findings

### Source/HTML findings, not a rendered-device pass

Keep: skip link; semantic navigation; form labels; `type=email/tel`; autocomplete; button `aria-expanded`; explicit image dimensions; WebP hero; lazy images; global visible focus styling.

Fix/retest:

- Header/mobile-menu contact gap; case heading `line-clamp-1` and metric `truncate` can conceal important identifiers.
- Generic image-link `aria-label="View case"` masks more descriptive image alt. The imagery change gives those links project-specific names.
- Source and live HTML use English “Menu”, “Primary”, “Mobile”, map title and footer labels on localized pages. Localize accessible names as well as visible copy.
- Missing-asset small text is 2.44:1; `#64748b` on white is 4.76:1, `#475569` on white 7.58:1, and white on `#0b4ea2` 8.00:1 by the WCAG sRGB formula. Those pairs do not validate overlays, disabled states or the whole palette.
- Menu script toggles visibility/expanded state only; no Escape handling. Check keyboard order, close behaviour, 200–400% zoom, 320px reflow and fixed-header focus obstruction.
- `scroll-behavior:smooth` has no reduced-motion override in global CSS. Add one and verify user-triggered transitions. Do not describe the static hero as an autoplay-video problem.
- Contact form has nine visible controls, three required; no visible required/optional explanation. Shorten the initial enquiry and avoid silently defaulting the industry/service.
- Footer claim, licence expiry and technical approvals are not authenticated by this audit.

### Measured transport samples

[Nine requests](evidence/http-timings.json), same sandbox, no simulated mobile connection, fresh urllib requests. “Headers” includes connection/TLS/network time; it is **not** browser navigation TTFB or perceived load time.

| Locale | HTML bytes | Headers range | Median headers |
|---|---:|---:|---:|
| EN | 31,088 | 69–220 ms | 79 ms |
| AR | 34,334 | 54–213 ms | 187 ms |
| RU | 37,289 | 55–313 ms | 266 ms |

These samples cannot establish a speed defect, mobile responsiveness or Core Web Vitals compliance. Proposed acceptance targets, not observed results: p75 field LCP ≤2.5s, INP ≤200ms, CLS ≤0.1; measure over an appropriate field window. Use repeatable throttled lab tests for diagnosis, not as substitutes for field evidence.

## 8. What changed in this PR

- Shipped draft 0.1 first, then refined it after the full crawl. The draft's “no named practitioners on About” observation must not be read as “no named people on the site”; the team page was subsequently verified.
- Added repository-scoped [Design](skills/design/SKILL.md) and [Writing](skills/writing/SKILL.md) skills with workflows, examples, checklists, sources and EN/AR/RU voice guidance.
- Replaced thermal-network and boiler-plant covers and the water-card placeholder with **three original technical editorial illustrations**. Applied to nine case translations and reused on home, project index and case detail.
- Added translated visual descriptions and visible “not a project photograph or engineering drawing” captions, project-specific link names and responsive image widths/sizes.
- Kept existing country/entity attribution, values, legal names, licence claims and historical photos intact. No fake UAE projects, client logos, testimonials, engineering drawings or people.
- Left conversion/SEO/legal fixes as findings because configuration, ownership and documentary approval are still required; this PR does not silently make them true.

### Validation status

See [evidence/validation.json](evidence/validation.json) and [evidence/VALIDATION.md](evidence/VALIDATION.md). Independent component compilation and content checks are distinct from the blocked legacy production build. Baseline i18n validation reports matching 181-key dictionaries but fails one pre-existing Gosexpertiza-code parity check; the image edits do not change credential copy. Browser verification remains outstanding.

## 9. Sources

- Live pages linked beside findings; complete page-level quotations and route inventory in [evidence/pages.json](evidence/pages.json).
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), particularly 1.4.3, 1.4.10, 2.4.7, 2.4.11 and 2.5.8. Aim for 44px controls as a house rule; WCAG 2.2 AA target-size minimum is 24px with exceptions, not a universal 44px rule.
- [Core Web Vitals thresholds](https://web.dev/articles/vitals).
- [Google localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).
- [Schema.org parentOrganization](https://schema.org/parentOrganization).
- Inspected Mobbin/GitHub reference provenance, licence details and deliberate non-adoptions: [REFERENCES.md](REFERENCES.md).
