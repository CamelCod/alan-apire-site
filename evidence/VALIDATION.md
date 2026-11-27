# Verification record

26 November 2026. No production deployment or test enquiry was performed.

| Check | Result | Meaning |
|---|---|---|
| Public crawl | PASS: 48 unique content pages, all HTTP 200 | Source/HTML reachability, not rendered usability |
| Complete URL enumeration | 100 requested variants; 99 HTTP 200, 1 exploratory 404 | Root/slash aliases and robots/sitemap included; `/sitemap-index.xml` is not a reported broken page |
| Canonical-host review | FAIL: 48/48 use the alternate spelling | Alternate host also failed DNS resolution in this sandbox; ownership/authoritative DNS not established |
| Independent Astro component transforms | PASS, 3 changed templates | `@astrojs/compiler` compilation; not a dependency-resolved full production build |
| Case frontmatter/image checks | PASS, all 9 published translations | YAML parses; correct localized cover, nonempty alt and caption; PNG signature and 1280×800 dimensions |
| Skill checks | PASS, both files | Valid name/description frontmatter and required Purpose, Rules, Examples, Checklist, Sources sections; not an independent usability evaluation |
| `git diff --check` | PASS | No whitespace patch errors |
| `node scripts/check-i18n.mjs` | FAIL, pre-existing | 181 keys in each dictionary, zero missing/extra keys; one Gosexpertiza-code constant mismatch. No credential/marketing translation edits made |
| Exact legacy production build | BLOCKED | Installation encountered a package firewall block on vulnerable Vite 5.4.21. No bypass. Later latest-toolchain trial hit Astro/Tailwind peer conflict; package manifests/locks not changed |
| Browser/mobile/reflow/axe/Lighthouse | BLOCKED | Missing shared library with downloaded Chromium; installed Nix Chromium launch timed out. No screenshots or pass scores fabricated |
| EN/AR/RU editorial review | Draft | Newly authored translations, not native/legal/technical sign-off |
| Actual lead delivery | NOT TESTED | Live form uses placeholder action; never submitted |

Machine-readable component/content assertions: [validation.json](validation.json).

## How to complete release verification

1. In approved CI/development infrastructure, resolve the legacy dependency/security issue through a separately reviewed upgrade; install the approved lock and run the production build.
2. Preview this branch. Check home, project index and all three cases in EN/AR/RU at 320/390/768/1440px, including 21:9 detail-image crops and long captions.
3. Confirm the five reusable rendering paths: localized home/index/detail, image-link accessible names and below-the-fold responsive loading.
4. Run axe, then manual keyboard, focus, reduced-motion, zoom/reflow, screen-reader and mixed-direction identifier checks. Automated checks alone do not establish WCAG AA.
5. Verify form provider configuration and approved delivery with an explicit test, separately from this audit's scope.

No existing production settings, DNS, credentials, licence assertions or enquiry-provider accounts were modified.
