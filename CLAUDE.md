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

## Progress Tracking

See `docs/PROGRESS.md` for:
- Current project status and page counts
- Completed milestones by date
- Country refinement progress
- Next steps and priorities
