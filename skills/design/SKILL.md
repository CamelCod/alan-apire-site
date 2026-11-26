---
name: design
description: Audit and improve Alanpire website layouts, project imagery, credibility and trilingual usability. Use for Alanpire page, project-card or component design changes; pair with the writing skill for copy.
---

# Alanpire design

Repository-scoped skill. Read [AUDIT.md](../../AUDIT.md) for the observed baseline and [REFERENCES.md](../../REFERENCES.md) for reference provenance. Recheck live behaviour before repeating an audit finding as current.

## Purpose

Help a UAE industrial buyer answer four questions: Does this team understand my package? What did its practitioners actually deliver? Under whose authority? How do I enquire?

The visual identity should communicate technical competence, not imply local engineering-signature authority, government ownership or an invented UAE portfolio.

## Workflow

1. Identify the buyer, deliverable, page purpose and primary action. Default audience: industrial owner, project director or client-appointed UAE consultant evaluating technical support.
2. Read the relevant case Markdown and structured content, not only old repository notes. `CLAUDE.md` contains stale counts; inspect `order < 99` and live output.
3. Write an evidence map: claim → supporting record → attribution → owner approval still needed. Place unsupported facts outside production copy.
4. Sketch the content order using the actual text. For home: clear scope → short relevant evidence → services → responsible people/credentials → delivery process → enquiry.
5. Specify responsive and RTL behaviour before implementation, including long RU headings, Arabic numerals/units and fixed-header navigation.
6. Implement using shared templates. Review all three locales and one realistic long case title. Compile, build if dependencies permit, then inspect rendered states. Record blocked checks honestly.

## Rules

### Identity and hierarchy

- Provisional editorial brand: **Alanpire**, matching the observed header; Arabic **ألانباير**. Use the exact registered entity name only where registration/legal context requires it. A new brand spelling needs owner approval.
- Keep service groupings separate from licensed activities. Do not label four cards as four licensed activities without documentary confirmation.
- Lead with specific industrial scope. Do not borrow Arup's global-scale positioning or a creative agency's abstract slogan.
- One primary action: “Discuss your project”. Secondary: “View case studies”. A booking/WhatsApp option is secondary and requires a monitored, approved destination.
- Existing leadership is at `/en/team/`, `/ar/team/`, `/ru/team/`. Link those profiles before commissioning new ones.

### Visual system

- Follow inspected current source tokens: navy `#0b1930`, warm background `#faf9f6`, white, divider `#e2e5eb`, body `#475569`, secondary `#64748b`, action blue `#0b4ea2`, hover `#083c7d`.
- `#94a3b8` is not body/caption text on warm white: observed contrast is only 2.44:1. The darker replacement `#475569` on white is 7.58:1; verify the actual final background.
- Inter supports EN/RU; IBM Plex Sans Arabic is the existing Arabic face. Verify glyph coverage and weights. Do not substitute fonts based on stale notes.
- Keep body around 17–18px, working captions at least 14px as a house preference, and avoid tiny essential qualifications. Limit long text to a comfortable reading measure.
- Use restrained borders and spacing to separate decisions, not a card around every paragraph. Number stages only when order matters; service labels do not need ordinal numbering.
- Preserve visible focus. Choose hierarchy through type size, spacing and structure, not colour alone.

### Project card and case contract

Every card must expose project title, **actual country**, sector, performing entity/prior-team attribution, one line of contribution and a descriptive case link. A known Russian reference must not become a Dubai project through image choice.

Every case should answer:

- Context: client type, location and project stage.
- Responsibility: practitioner role, contracting entity and UAE-entity distinction.
- Work: challenge, constraints, calculations and deliverables.
- Evidence: approved drawing extract/report reference or documented approval; separate self-published assertions from independently checked records.
- Outcome: only a documented result. Pipe diameter, length and pressure are scope parameters, not savings.
- Next step: a similar-package enquiry, without promising approval, schedule or savings.

Do not `line-clamp-1` a project name or `truncate` technical values. Let the card grow. If a summary must be shortened, edit it with the writing skill.

### Images and thumbnails

- Prefer approved real project images. Record rights owner, permission, project/country, safe crop and whether confidential material has been redacted.
- Never use a stock Dubai skyline, unrelated plant or synthetic photo as evidence of this firm's work.
- When no approved photo exists, use an original technical **editorial illustration** and a visible translated caption: not a project photograph or engineering drawing.
- Current illustrations: `src/content/projects/{thermal-network,boiler-plant,water-supply}-illustration.svg`, with PNG derivatives. Do not treat their geometry as measured design.
- Case frontmatter supports `cover`, `coverAlt`, `coverCaption`. Cover paths resolve relative to the Markdown file. Preserve the same visual across EN/AR/RU while translating alt/caption.
- Home and index use 16:10 frames; case hero also crops to 21:9 on larger screens. Check the important subject survives both. Do not mirror technical diagrams for RTL.
- Use responsive `widths`/`sizes`, intrinsic dimensions, WebP output and lazy loading below the fold. Prioritize only the actual LCP image; avoid marking every image eager/high.
- Meaningful image alt describes depicted content. Decorative backgrounds get empty alt. If an image link overrides the accessible name, include the specific project title.
- No public “Asset required”, placeholder filenames or fabricated route drawings.

### Enquiry pattern

Show the primary action in the mobile menu, not just a desktop-only header button. Keep email/telephone available. The deployed Formspree placeholder is a release blocker until configuration and actual delivery are verified.

For a short initial enquiry, require name, work email and project summary; make other data optional unless qualification truly needs it. Label optional fields. Add a neutral prompt instead of preselecting a sector/service.

Specify empty, focused, invalid, sending, confirmed and delivery-failure states. Show success only after a trustworthy provider/server response; an analytics submit event is not delivery confirmation. Link an actual reviewed privacy policy.

### Trilingual voice and layout guide

| Locale | Visual language | UI voice example | Layout rule |
|---|---|---|---|
| EN | Short sentence-case labels; precise plain-English lead | “Discuss your project” / “View case studies” | LTR, flexible text blocks; explain a technical acronym on first meaningful use |
| AR | Professional Modern Standard Arabic; retain the approved brand/legal wording | “ناقش مشروعك” / “اطّلع على دراسات المشاريع” | `lang="ar" dir="rtl"`; logical margins/padding; comfortable Arabic line-height; no artificial letter-spacing |
| RU | Direct professional Russian, not bureaucratic noun chains | “Обсудить проект” / “Посмотреть проекты” | LTR; allow longer labels and natural wraps; no forced all-caps body text |

Keep phone/email, standard identifiers and engineering codes isolated with `<bdi>` or appropriate LTR spans. Localize navigation **and accessible names**, not just visible text. Mirror directional navigation arrows where appropriate, never photos, drawings or numeric plots. Preserve the same scope limitations in every language. Draft translations need technical/native-language review before publication.

## Examples

### 1. Honest project imagery

Before: water card displays the real line “Asset required: Route alignment drawing”.

After: original water-main illustration + “Editorial illustration, not a project photograph or engineering drawing.” + unchanged case title and attribution. Do not remove the disclaimer to make the illustration look like project evidence.

### 2. Fix a claim through hierarchy and wording

Before: real home heading “Four Licensed Service Areas” above text referring to three licensed categories.

After: “Technical support for industrial projects” above commercial service cards; a distinct registration block lists only the approved licence activities. This is a drafting recommendation, not independent licence verification.

### 3. Put action where it is available

Before: real form button “Send”; desktop contact CTA hidden on small screens with no equivalent mobile-menu contact item.

After: persistent mobile-menu “Discuss your project”; form action “Send project enquiry”, with provider-confirmed success and an email fallback on failure. Do not call the flow fixed until an approved delivery test succeeds.

Three fully contextualized before/after rewrites and localized microcopy are also in [Writing](../writing/SKILL.md#examples).

## Checklist

- [ ] Country, entity and role are visible and correct for every case.
- [ ] No unsupported licence, government-affiliation, client-logo or outcome claim.
- [ ] Existing Team page is reachable from a meaningful path.
- [ ] Images have recorded rights/provenance and a clear distinction between photo, drawing and illustration.
- [ ] All nine published case translations have meaningful alt and visible illustration captions.
- [ ] Cards, figures and AR/RU titles wrap rather than conceal content.
- [ ] Contact remains reachable at 320px, 390px, tablet and desktop sizes.
- [ ] All interactive controls work with keyboard, have visible focus and are not obscured by the fixed header.
- [ ] Contrast meets AA in actual states; 200–400% zoom, reflow and screen-reader reading order checked.
- [ ] House touch target 44px where practical; WCAG 2.2 AA 24px minimum/exceptions understood.
- [ ] Reduced-motion preferences respected; decorative motion has a still alternative.
- [ ] Real form delivery, privacy link and recovery tested without treating submit analytics as success.
- [ ] Metadata hosts resolve; untranslated shells are not presented as complete equivalents.
- [ ] Build, visual and accessibility verification results recorded separately, including blockers.

## Sources

- [Audit evidence and current limitations](../../AUDIT.md), [reference/adoption/licence ledger](../../REFERENCES.md).
- Mobbin M4/M5 inform relevant industrial imagery; M7 the contribution-led case; M10/M12 enquiry and accountable contact. These are design interpretations, not copied layouts.
- [Anthropic frontend-design source](https://github.com/anthropics/skills/blob/e4bb5d960d87126ff3b3a8af1a104b7db67560ba/skills/frontend-design/SKILL.md): subject-specific design and critique, not its branding.
- [Vercel review skill](https://github.com/vercel-labs/agent-skills/blob/5a37a6329fbad3666c3207392a6a7c0110e92efb/skills/web-design-guidelines/SKILL.md): useful inspection categories; no wholesale import of conflicting rules.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/), [Core Web Vitals](https://web.dev/articles/vitals).
- Repository source of truth: `src/content/i18n/{en,ar,ru}.json`, `src/i18n/site.ts`, `src/content/projects/`, `src/layouts/`, `src/styles/global.css`, `tailwind.config.mjs`. Do not duplicate structured page copy into layout markup.
