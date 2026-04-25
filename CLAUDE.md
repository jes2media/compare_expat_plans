# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
```

### Image Generation (Ideogram API)

```bash
# Single image
node scripts/ideogram/ideogram-generate.mjs --prompt "..." --out "public/images/path.png" --ratio "16:9"

# Batch from JSON config
npm run img:batch -- --in scripts/ideogram/prompts.cards.json

# Dry run (preview without API call)
npm run img:dry -- --in scripts/ideogram/prompts.cards.json

# Force regenerate existing image
node scripts/ideogram/ideogram-generate.mjs --prompt "..." --out "..." --force
```

Aspect ratios: `1:1` (cards), `16:9` (hero backgrounds), `4:3`, `3:2`, `9:16`

Requires `IDEOGRAM_API_KEY` in `.env` or `Ideogram.env`.

## Architecture

**Stack**: Astro 5 + Tailwind CSS v4 + TypeScript

**Key directories**:
- `src/pages/` - File-based routing (each `.astro` file = URL path)
- `src/components/` - Reusable Astro components
- `src/layouts/Layout.astro` - Main layout wrapper with SEO metadata
- `scripts/ideogram/` - AI image generation tooling
- `templates/` - Reusable page templates for content creation
- `docs/` - Project documentation and progress tracking

**Page types**:
- `/countries/[country]/insurance` - Country-specific guides (Spain, Portugal, Mexico, Thailand, Costa Rica, France)
- `/visas/[visa-type]/in/[country]` - Visa-specific insurance guides (Digital Nomad, Retirement, Student, etc.)
- `/providers/[provider]` - Insurance provider reviews
- `/best/[category]` - Comparison/ranking pages
- `/insurance-for/[audience]` - Audience-specific guides
- `/guides/[topic]` - Educational content

## Key Components

- **PageShell** - Standard content page layout with hero, TOC sidebar, and related links. Accepts `heroBackgroundImage` prop for country-themed backgrounds.
- **CTABox / CTAButton** - Call-to-action components with `variant="highlight"` option
- **ComparisonTable** - Renders tabular data from `columns` and `rows` props
- **ContentCards** - Grid of cards with optional images
- **Layout** - Root wrapper handling meta tags, header, footer

## Styling

Tailwind v4 with custom theme in `src/styles/global.css`:
- Primary colors: `primary-50` through `primary-900` (blue)
- Neutral colors: `neutral-50` through `neutral-900`
- `.prose` class for content typography

## Content Patterns

Country guides follow this structure:
1. Overview
2. Healthcare system explanation
3. Visa/residency requirements
4. Recommended insurance plans (with ComparisonTable)
5. Expected costs
6. FAQs

Each country page has a hero background image using flag colors at 50% opacity.

## Editorial Guidelines

**All content must follow `EDITORIAL.md`** — our writing style guide.

Key principles:
- Be direct, honest, and practical
- Use "you" to address readers
- Show trade-offs, not just benefits
- Use specific numbers and examples
- Avoid superlatives and hype
- Include disclaimers where appropriate

Read `EDITORIAL.md` before writing or editing any content.

## Content Strategy

**All content production must follow `CONTENT-STRATEGY.md`** — our data-driven content priorities.

**Content Tiers (by conversion performance):**

| Tier | Patterns | Status |
|------|----------|--------|
| **Tier 1** | `/best/` roundups, Senior/retiree pages | Produce aggressively |
| **Tier 2** | Visa + country, Provider reviews | Scale with monitoring |
| **Tier 3** | Base country, Provider-country, `/compare/{A}-vs-{B}/` | **PAUSED** |

**Affiliate Partner Priority:**
1. Cigna Global (~55% of clicks)
2. IMG Global (~17%)
3. Aetna International, SafetyWing (~10% each)
4. Allianz Care, Bupa Global — feature only when clearly superior fit

**Key rule:** Before producing any page, verify intent match. If users searching the target query want a specific provider directly (not a comparison), do not produce the page.

See `CONTENT-STRATEGY.md` for full rationale and `docs/NEXT-STEPS.md` for operational queue.

## Templates

**`templates/longform-comparison.astro`** - CRO-optimized template for provider comparison articles (~4,000 words). Includes:
- Quick decision guide at top
- Trust signal badges
- 6 strategically placed CTAs
- Split provider CTAs in decision section
- Urgency messaging on pricing CTA
- 12-section structure with comparison tables

Usage: Copy template, replace `{{PLACEHOLDER}}` values.

**Provider Page Pattern** - All 8 provider review pages follow a consistent 12-section structure (~550-685 lines):
1. Overview with Quick Facts box
2. Quick Assessment (good fit / consider alternatives boxes)
3. Plans and Coverage (with ComparisonTable)
4. Network and Access (regional breakdown table)
5. Pricing (deductible impact table)
6. Real-World Scenarios (6 scenarios, color-coded outcomes)
7. Pros and Cons (side-by-side grid)
8. Claims and Service
9. Who It's For (ideal / not ideal lists)
10. Alternatives to Consider
11. FAQs (6 questions in card format)
12. Final Verdict

Key CRO elements: trust signals, split CTAs with `style="color: white !important;"`, scenario outcome colors (text-green-700, text-amber-700, text-red-700).

**Visa × Country Page Pattern** - Digital Nomad Visa and other visa type pages at `/visas/[visa-type]/in/[country]`:
- Route: `src/pages/visas/[visa-type]/in/[country].astro`
- Data: `src/data/visaCountryMatrix.ts` (visa availability and requirements)
- 12-section structure (~500-600 lines):
  1. Overview with Quick Facts box
  2. Quick Decision Guide (good fit / consider alternatives)
  3. Official Requirements (eligibility, income, documents)
  4. Insurance Requirements (mandatory vs optional, minimums)
  5. Recommended Insurance Providers (ComparisonTable)
  6. Costs Breakdown (visa fees, insurance, living costs)
  7. Application Timeline (step-by-step)
  8. Real-World Scenarios (6 scenarios, color-coded)
  9. Common Mistakes (5 warnings)
  10. Healthcare System Access
  11. FAQs (6 questions)
  12. Final Verdict
- Uses PageShell with `heroImage="/images/countries/[country]-hero-bg.png"`
- Note: Czech Republic requires PVZP/Maxima insurance (SafetyWing NOT accepted)

**Problem/Solution Guide Pattern** - Educational guides at `/guides/[topic]`:
- 9-section structure with TOC navigation
- Uses PageShell with tocItems array
- CTABox component with props (NOT slots): `title`, `description`, `buttonText`, `buttonHref`
- ComparisonTable for data comparisons
- Content guideline: Multiple paragraphs per section, max 5 lines per paragraph
- 81 guides covering: insurance transitions, medications abroad, emergencies, family coverage, chronic conditions, visa transitions, mental health, brokers, home leave, and more

## Environment Variables

Create `.env` file (not committed to git) with:
```
IDEOGRAM_API_KEY=your_key_here
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- `IDEOGRAM_API_KEY` - For AI image generation
- `PUBLIC_GA_MEASUREMENT_ID` - Google Analytics 4 tracking (required for outbound click tracking)

Note: GA tracking uses `window.gtag` for cross-script accessibility in Astro's inline script isolation.

## Progress Tracking

See `docs/PROGRESS.md` for:
- Current project status and page counts
- Completed milestones by date
- Google Analytics insights

See `docs/NEXT-STEPS.md` for:
- Blocking items before scaling
- Priority investigations
- Content production queue (by tier)
- Infrastructure tasks

**Current Stats (April 24, 2026):**
- Static .astro files: ~1,125
- Problem/Solution guides: 652 (588 profession + 64 topic)
- Visa × Country pages: 181 (33 DNV + 17 Retirement + 34 Student + 38 Freelancer + 40 Investor + 18 Work Permit)
- "Best" comparison pages: 51+
- Provider pages: 9 (long-form reviews)
- Country pages: 22 (core landing pages)
- Compare pages: 29 (country vs country) + 183 provider comparisons (Tier 3 — paused)
- Dynamic routes generate additional pages from data files

## GA Insights (Jan 1 - Apr 15, 2026)

**Top Converting Provider (affiliate clicks):**
- Cigna Global: 268 clicks (64% of all affiliate clicks)
- Allianz Care: 47 clicks (11%)
- IMG Global: 43 clicks (10%)

**Highest Engagement Content:**
- Seniors/retirees pages: 100-214s average engagement (highly motivated buyers)
- Pre-existing conditions guides: 140-170s engagement
- Work permit visa pages: 240s engagement (Switzerland)
- Student visa pages: 130-160s engagement (France, Denmark)

**Content Priorities (based on GA data):**
1. `/best/` editorial roundups - 10.6% outbound click rate (Tier 1)
2. Senior/retiree demographic pages - 50-67% conversion on small samples (Tier 1)
3. Visa + country pages - 16.2% outbound click rate (Tier 2)
4. Provider reviews and sub-pages - 7.4% conversion (Tier 2)
5. Pre-existing conditions guides - Clear user pain point

**Next Priority:** Tier 1 content — `/best/` roundups (30-50 new) and senior demographic pages (50-80 new). See `docs/NEXT-STEPS.md` for full queue.
