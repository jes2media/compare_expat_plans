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
