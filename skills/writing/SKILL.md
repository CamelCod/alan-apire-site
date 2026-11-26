---
name: writing
description: Write and review Alanpire English, Arabic and Russian website copy, enquiry messages, case studies and metadata. Use for Alanpire copy changes and translation QA; pair with the design skill for layout and imagery.
---

# Alanpire writing

Repository-scoped skill, not automatically installed in other projects or chats. Read [AUDIT.md](../../AUDIT.md) before editing claims and [REFERENCES.md](../../REFERENCES.md) for original-source/licence context.

## Purpose

Make a technical procurement decision easier: explain the assignment, practitioner contribution, operating boundary, evidence and next step. Sound like a competent engineering partner, not a speculative full-service mega-consultancy.

## Workflow

1. Identify whether this is a point edit, page rewrite or new page. Preserve useful technical detail; do not replace a specific brief with generic marketing language.
2. Inspect source text and live output. Page copy lives in `src/content/i18n/{en,ar,ru}.json` and `src/i18n/site.ts`; cases in `src/content/projects/<locale>-<slug>.md`. Page metadata is in `src/i18n/pages.ts`. Existing form-label dictionaries are in `ContactForm.astro`.
3. Make a claim ledger: proposed wording, source record, exact entity, country, relevant date and approval status. “On our website” is evidence that a claim is published, not that it is substantiated.
4. Draft EN first around the buyer's decision, then adapt AR/RU from the same fact ledger. Do not translate English ambiguity into three languages.
5. Review terminology and constants across all three variants; technical reviewer checks meaning, native editor checks naturalness. Do not invent a reviewer's approval.
6. Deliver changed copy, factual/translation questions and acceptance checks. Keep placeholders such as `[VERIFY: licence wording]` in editorial notes, never in published content.

## Rules

### Brand and licence language

- Until the owner confirms a different public identity, use **Alanpire** in EN/RU and **ألانباير** in AR, following the current header/localized metadata.
- Preserve the registered name **ALAN AND APIRE MANAGEMENT CONSULTANCIES – FZCO** in legal/registration contexts. Do not “correct” it into the marketing brand or invent an Arabic registered name.
- “Alan Apire” appears in older comparison copy. Normalize editorial references consistently; legal wording remains separate.
- Four commercial service groupings are **not proof** of four licensed activities. Do not write “Four Licensed Service Areas”. Use neutral scope headings until approved licence wording is available.
- Do not equate DIEZ/IFZA registration with engineering-signature authority, government ownership, endorsement, guaranteed statutory approval or unrestricted UAE site-supervision rights.
- Preserve the operational boundary: technical calculations/drawings are delivered through/under client-appointed, locally licensed UAE consultants where required. Use exact legal wording only after qualified review.

### Clear technical B2B copy

- Lead with a recognisable assignment and output: baseline schedule, hydraulic calculation package, equipment arrangement, tender evaluation.
- Connect an output to its practical use without inventing a quantified result: “A baseline schedule for coordinating contractor interfaces”, not “Cuts delays by 30%”.
- Use one main idea per paragraph. English sentences around 12–22 words are a useful editorial target, not a rule that overrides accuracy.
- Define an acronym when a buyer may not know it; keep Primavera P6, DN, PE and engineering standards precise. Do not expand an identifier into a different specification.
- Replace “world-class”, “best”, “seamless” and “innovative” with the concrete work or omit them. Avoid unmeasured superlatives, fear tactics and guaranteed approvals.
- Use active verbs for actions; do not remove necessary conditions just to sound confident.
- Remove repeated tagline/paragraph/bullet descriptions from service cards. Keep detail on the relevant service page.
- “Send”, “Submit”, “Learn more” and “Get started” are poor defaults where the actual next action is known.

### Claims and proof

- Prior work through OOO Energodiagnostika in Russia must not become a contract delivered by the UAE entity.
- Prefer specific country labels over “Eurasia” where the case itself identifies Russia. Never fill the UAE-portfolio gap with a stock image or invented reference.
- Team names and biographies already exist on `/en/team/`; surface approved profiles rather than inventing people. Professional credentials remain verification items until supporting records are checked.
- Numbers such as `2 × DN500`, `1,704 m`, `20.0 bar`, `10.5 MWth` and `107 files` are published scope parameters. Do not turn them into measured savings, uptime or customer satisfaction.
- Treat licence number, expiry, accreditation, NOPRIZ status and expertise approvals as time-sensitive. Use a verified record/date; the website alone cannot authenticate them.
- Testimonials need approved exact wording, named attribution/role and permission. Logos need a real relationship and usage permission. Do not invent anonymized “client feedback”.
- Competitor comparisons require a dated source per material claim and a transparent method. Missing competitor evidence means “not verified”, not a red cross implying absence.
- Privacy and terms text require actual processing details and qualified review. Do not write a generic policy and present it as compliant.

### Case-study structure

Use: context → challenge/constraints → performing entity and team role → actual work/deliverables → documented result/evidence → scope limits → relevant enquiry.

Minimum fact strip: country; project stage; practitioner role; performing entity; parameters with units. The prose should distinguish a design approval, completed documentation and a delivered operational outcome.

Where results are unavailable, say what was produced and what evidence can be shared after permission. Do not publish a supposed “on request” record unless the company actually holds it.

### Trilingual voice guide

**Constant voice:** technically exact, calm, direct, helpful. Adjust tone by moment: clear and specific in services; documentary in cases; respectful in enquiries; factual with recovery steps in errors.

| Dimension | EN | AR | RU |
|---|---|---|---|
| Register | Professional plain English; restrained British spelling consistent with “modelling”/“licence” | Modern Standard Arabic; avoid ornate promotional phrasing and literal English noun chains | Direct professional Russian; avoid inflated officialese and unnecessary English |
| Public brand | Alanpire | ألانباير | Alanpire |
| Project management | Project management | إدارة المشاريع | Управление проектами |
| Technical support | Technical support | الدعم الفني | Техническая поддержка |
| Engineering analysis | Engineering analysis | التحليل الهندسي | Инженерный анализ |
| Service qualifier | Prospective architectural drawings | الرسومات المعمارية التصوّرية | Предварительные архитектурные чертежи |
| Headline approach | State audience + assignment | State scope naturally; do not force English word order | Use concrete work and sector; avoid abstract promises |
| Primary CTA | Discuss your project | ناقش مشروعك | Обсудить проект |
| Form action | Send project enquiry | أرسل استفسارك عن المشروع | Отправить запрос по проекту |
| Case action | View case study | اطّلع على دراسة المشروع | Посмотреть проект |
| No-fabrication rule | Never invent UAE work, clients or outcomes | لا تنسب أعمالاً أو نتائج غير موثقة إلى الشركة | Не приписывать компании неподтверждённые проекты и результаты |

The Arabic/Russian service qualifier above is a **draft editorial equivalent**, not a certified translation of licensed activity wording. Retain the official wording exactly once supplied.

### Localization mechanics and factual parity

- AR uses `lang="ar" dir="rtl"`; EN/RU LTR. Isolate phone/email, codes and mixed-direction identifiers. UI direction is not a reason to reverse an engineering diagram.
- Translate accessible names, optional-field hints, map titles, privacy links and recovery text too. Current English “Menu”/“View in English” leakage is not a complete localization.
- Preserve numerical **values** and standards exactly; localize display deliberately. For example `10.5 MWth` may become `10,5 МВт(т)` in RU only after technical approval; do not silently change its physical meaning.
- Use “107 documents” only if the evidence means documents; if it means volumes, translate that consistently. The current EN “107 files” and RU “107 томов” deserve verification, not blind substitution.
- Keep metre, bar, diameter, year and licence-expiry values consistent. Do not localize digits inside registration codes. Record a glossary for issuer acronyms rather than leave `Gosexpertiza` unexplained.
- A placeholder AR/RU comparison is not a translated equivalent of the English page. Finish it or explicitly manage noindex/hreflang/sitemap until it is ready.
- Run `node scripts/check-i18n.mjs`, but do not confuse key parity with linguistic equivalence. Baseline has 181 keys per locale and a credential-code mismatch despite complete keys.

## Examples

These three **before** strings are real observed lines, not invented bad examples. **After** is proposed copy, not evidence of a live copy change or a verified legal claim.

### 1. Service-heading inconsistency

Source: [EN home](https://alanpire.ae/en/), service section.

**Before:** “Four Licensed Service Areas”

**After EN:** “Technical support for industrial projects”

**After AR:** “دعم فني للمشاريع الصناعية”

**After RU:** “Техническая поддержка промышленных проектов”

**Why:** removes the unsupported implication that four marketing cards equal four licence activities. Keep the separate, approved registration list; do not erase the licence-count contradiction without resolving it.

### 2. Tighten the actual hero while retaining the operating boundary

Source: [EN home](https://alanpire.ae/en/), hero paragraph.

**Before:** “Alanpire provides project management, technical consultancy, and architectural drawings. Our engineers deliver planning, modelling, and technical coordination under the supervision of your licensed UAE consultant.”

**After EN:** “Project management, technical analysis and prospective architectural drawings for industrial projects. Our team works under your appointed, licensed UAE consultant.”

**After AR:** “إدارة مشاريع وتحليلات فنية ورسومات معمارية تصوّرية للمشاريع الصناعية. يعمل فريقنا تحت إشراف الاستشاري المرخّص في الإمارات الذي تعيّنونه.”

**After RU:** “Управление проектами, технический анализ и предварительные архитектурные чертежи для промышленных объектов. Наша команда работает под руководством назначенного вами консультанта, лицензированного в ОАЭ.”

**Why:** leads with the offered work and preserves consultant supervision. “Prospective” is supported by the site's About/licensed-activity wording; its official translated scope still needs approval.

### 3. Name the enquiry action

Source: [EN contact](https://alanpire.ae/en/contact/), submit button.

**Before:** “Send”

**After EN:** “Send project enquiry”

**After AR:** “أرسل استفسارك عن المشروع”

**After RU:** “Отправить запрос по проекту”

**Why:** makes the action specific. Do not promise receipt from this label: the deployed `your-id` endpoint still needs configuration and delivery testing.

### Draft state copy for implementation

| State | EN | AR | RU |
|---|---|---|---|
| Summary hint | Include the location, project stage and support you need. | اذكر موقع المشروع ومرحلته والدعم المطلوب. | Укажите местоположение, стадию проекта и необходимую поддержку. |
| Email error | Enter a valid work email address. | أدخل عنوان بريد إلكتروني صالحاً للعمل. | Укажите корректный рабочий адрес электронной почты. |
| Sending | Sending your enquiry… | جارٍ إرسال استفسارك… | Отправляем запрос… |
| Confirmed receipt only | Your enquiry has been received. | تم استلام استفسارك. | Ваш запрос получен. |
| Failure | We couldn’t send your enquiry. Try again or email our team. | تعذّر إرسال استفسارك. حاول مجدداً أو تواصل مع فريقنا عبر البريد الإلكتروني. | Не удалось отправить запрос. Повторите попытку или напишите нашей команде. |

Only show confirmed receipt after trusted confirmation. Add a response-time commitment only after the responsible team approves and can meet it. A provider redirect may require configuring its own localized confirmation/error pages.

## Checklist

- [ ] Assignment and primary action clear in the first screen's copy.
- [ ] Public brand consistent; legal entity name preserved exactly where required.
- [ ] Commercial service headings do not overstate licence scope.
- [ ] Practitioner work, performing entity, country and UAE consultant boundary remain explicit.
- [ ] Each fact has a source and current approval status; no invented savings, clients or testimonials.
- [ ] Technical identifiers, values, units, document counts and dates agree across locales.
- [ ] No repeated card prose, opaque superlatives or generic action labels.
- [ ] Every error names a practical recovery; success matches actual system state.
- [ ] Privacy text is reviewed and linked; no unsupported compliance assurance.
- [ ] AR/RU are natural adaptations with equal factual scope, not shells or mixed-language badges.
- [ ] Native/technical review status is recorded accurately.
- [ ] `check-i18n` outcome and any baseline failure recorded; key parity not called translation quality.
- [ ] Metadata, alt, captions, accessible names and visible copy use the same terminology.

## Sources

- Real before-lines, scope findings and test limits: [AUDIT.md](../../AUDIT.md); all pages: [evidence/pages.json](../../evidence/pages.json).
- [Source/licence/maintenance comparison](../../REFERENCES.md), particularly GitHub sources 3–6 and Mobbin M6/M7/M10/M12.
- [Corey Haines copywriting skill](https://github.com/coreyhaines31/marketingskills/blob/8fd2fcade2fd6629026e9dfe6d133b55b36968b9/skills/copywriting/SKILL.md): evidence discipline and scope-appropriate rewriting, not its numerical marketing examples.
- [GOV.UK button guidance](https://github.com/alphagov/govuk-design-system/blob/0c6de5736a4e755a3808fb31d3a7723a33b7c705/src/components/button/index.md): action-specific labels; error-summary guidance also inspected.
- [KRDS writing project](https://github.com/thenisaid/krds-ux-writing/blob/ba286e065f7cb1f27019db3e1518466ac60fe2b0/README.md): plain user language and explicit recovery; not a trilingual validator.
- [UX microcopy skill](https://github.com/teejayfamo/ux-copywriting-skill/blob/e66c262049e855e9119cfb9b9988093efa88240a/SKILL.md): consistent controls and state-sensitive tone.
- [Design counterpart](../design/SKILL.md) for evidence placement, illustration disclosure and RTL layout. All examples here are newly authored from site-specific facts; no source skill is reproduced.
