# Alanpire site audit

**Draft 0.1 — 26 November 2026.** Live public website inspected independently of repository claims. Findings below are a first shipment; browser accessibility, visual review and performance measurements are being refined.

## Executive diagnosis

The site has technical substance but presents contradictory licensing language and an unconfigured enquiry form. Those are more serious than its visual polish. Do not spend the first sprint adding decorative photography.

## Verified first-pass findings

| Finding | Evidence | Consequence |
|---|---|---|
| Four service areas are described as directly licensed, but the text says three categories | [EN homepage](https://alanpire.ae/en/): “Four Licensed Service Areas” and “under three directly licensed categories”; [About](https://alanpire.ae/en/about/) lists three activities | Separate commercial service groupings from exact licensed activities; obtain licence evidence before expanding claims |
| Contact form exists, but is unconfigured | [Contact](https://alanpire.ae/en/contact/): form action is `https://formspree.io/f/your-id` | Release blocker; do not call it a working lead channel. No form was submitted |
| Three featured case studies already have links and numbers | [Homepage](https://alanpire.ae/en/): three “View case” links; `2 × DN500`, `1,704 m`, `20.0 bar` | The supplied “only one link” and “no numbers” issues are outdated |
| One public thumbnail is an internal production note | [Projects](https://alanpire.ae/en/projects/): “Asset required: Route alignment drawing” | Replace with an explicitly labelled editorial illustration, not an invented UAE project photograph |
| Canonicals point to another spelling of the domain | [EN homepage](https://alanpire.ae/en/): canonical points to `https://alanapire.ae/en/` | Verify both hosts and redirects before deciding whether this is intentional |
| Schema implies government ownership | Rendered `Organization` JSON-LD declares DIEZ as `parentOrganization` | A licensing authority is not necessarily a parent organisation. Confirm or remove the relationship |
| About identifies no named practitioners | [About](https://alanpire.ae/en/about/): “Our engineers bring technical experience…” | Name accountable people using approved profiles; no invented credentials |
| Privacy and terms pages are placeholder-level | [Privacy](https://alanpire.ae/en/privacy/): “Privacy policy for the Alanpire corporate website.” | Inadequate guidance beside a lead collection form; obtain reviewed policy text |

## Scope so far

70 first-party URL variants requested, including root, EN/AR/RU navigation, sitemap and trailing-slash variants. These resolve to 33 distinct locale-specific content pages plus the root alias. `/sitemap-index.xml` was an exploratory probe returning 404, not a broken navigation link. No hidden-page completeness claim.

## Planned refinement

- Add design and writing scores, ranked fixes and page-by-page evidence.
- Complete mobile, accessibility and lab-performance checks without claiming WCAG conformance from automation.
- Compare inspected Mobbin patterns and six GitHub sources with licence and maintenance evidence.
- Replace project covers with original, labelled technical illustrations across all three languages.
