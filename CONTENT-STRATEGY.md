# Compare Expat Plans — Content Strategy

This document defines what content to produce and why. Read it before any content task. Last updated: April 24, 2026.

## Site Purpose

Help expats select international health insurance through comparison content that converts to affiliate partner clicks. Revenue model: affiliate commissions from insurance providers. The site earns when users click through `/go/{provider}/` redirects and complete applications.

## Target Reader

Someone planning a move abroad or already living abroad, comparing 3–6 plans with a 2–8 week decision horizon. Budget-aware but willing to pay for quality coverage. Observed data shows strongest commercial signal from retirees and seniors — write with that audience in mind where the topic allows.

---

## Data Sources

Strategy derived from:

- Google Search Console performance data (6-month window ending April 24, 2026)
- Google Analytics 4 pageview data (January 1 – April 15, 2026)
- GA4 outbound click events (February 23 – April 24, 2026, 302 total clicks)

All findings are directional given small sample sizes. Re-run this analysis quarterly or when any major pattern shift appears in monitoring reports.

---

## The Core Finding: Traffic ≠ Commercial Value

The site produces pages in three broad patterns:

1. **Programmatic** — country + provider, country + demographic, visa + country, etc.
2. **Editorial** — roundups, provider reviews, research reports, guides
3. **Comparison** — head-to-head provider or country comparisons

Initial assumption was that programmatic patterns would scale both traffic and revenue. The data shows these decouple: some programmatic patterns generate impressions without clicks, others generate clicks without much search traffic. Editorial outperforms programmatic on conversion per visit.

### Search Performance by Pattern (from GSC)

| Pattern | Pages | Impressions (6mo) | Clicks | CTR |
|---|---|---|---|---|
| `/countries/*/insurance/*` | 1,000 | 21,597 | 58 | 0.27% |
| `/compare/*` | 98 | 7,516 | 22 | 0.29% |

Both patterns average position ~13, with 670+ pages ranking top 10. Google is indexing and ranking the pages. Users are not clicking.

### Why: Intent Mismatch

These pages rank for queries where comparison content does not satisfy user intent:

- "img global chile" — user wants IMG Global directly
- "cigna vs aetna international" — user wants news about Cigna's acquisition of Aetna, not a product comparison
- "cost of living spain vs portugal" — user wants relocation content, not insurance

Pages can rank well technically while failing to satisfy the query's underlying need. This creates a negative feedback loop: Google serves the page, users skip it, Google's engagement signals conclude the page doesn't satisfy intent, ranking drops.

### The February-March Traffic Pattern

Combined impressions across both weak patterns:

- January 2026: 1,782
- February 2026: 21,499 (peak)
- March 2026: 3,615 (-83% from peak)
- April 2026: 2,217

Both patterns crashed in lockstep in March. Indexing remained stable (confirmed via GSC Indexing report), which rules out technical causes. Most likely explanations are either a core algorithm update in late February 2026 or the expiration of Google's initial-content-boost period for new pages.

---

## Outbound Click Performance by Pattern (from GA4)

Outbound clicks are the best available proxy for commercial intent (affiliate deals not yet signed as of this writing, so no commission data exists).

| Pattern | Sample Quality | Conversion Rate |
|---|---|---|
| Editorial roundups (`/best/`) | Solid | 10.6% |
| Visa + country | Solid | 16.2% |
| Senior/retiree demographic | Small | 50-67% |
| Research reports | One page | 9.2% |
| Provider reviews | Solid | 7.4% |
| Head-to-head comparisons | Small | 11.3% |
| Base country pages | Moderate | 8.0% |

The senior demographic signal is the strongest in the dataset, even accounting for small sample size. Retirees searching for insurance in specific countries have immediate need, defined budget, and narrow decision criteria — the conditions that drive high conversion.

---

## Content Priorities (Tiers)

Tiers below are ordered by observed commercial performance (outbound click rate).

### Tier 1 — Produce Aggressively

**Editorial roundups** (`/best/...` pattern). 10.6% outbound click rate. Every distinct buyer segment deserves a roundup. Pattern examples: "Best expat health insurance for couples," "Best insurance for expats in Asia," "Best budget insurance for digital nomads under 40."

**Senior/retiree demographic pages**. Highest observed conversion (50%+ on small samples). URL patterns: `/insurance-for/over-70/`, `/insurance-for/retirees/in/{country}/`, `/countries/{country}/insurance/for-seniors/`. Priority countries: Portugal, Mexico, Panama, Costa Rica, Spain, Thailand, Malaysia, Philippines, Ecuador, Belize, Uruguay.

### Tier 2 — Scale with Monitoring

**Visa + country pages** (`/visas/{visa-type}/in/{country}/`). 16.2% outbound click rate on adjacent-intent traffic. Retirement, digital nomad, student, and freelancer visas across high-demand countries.

**Provider reviews** (`/providers/{provider}/`) and sub-pages. 7.4% conversion rate. Deepen the top 6 providers with coverage, pricing, best-for, and alternatives sub-pages.

**Non-senior demographic pages**. Families, freelancers, students. Following the senior pattern, test broader demographics.

### Tier 3 — Do Not Produce Until Retargeted

Existing pages in these patterns need intent audit before new ones are created:

- Base country pages: `/countries/{country}/insurance/`
- Provider-country combinations: `/providers/{provider}/in/{country}/` and `/countries/{country}/insurance/{provider}/`
- Head-to-head comparisons: `/compare/{A}-vs-{B}/`

These rank for queries users don't click on. Producing more will compound the problem, not solve it.

**Do not produce new pages in these patterns without explicit human override after the intent audit is complete.**

---

## Intent Match — Non-Negotiable

Before producing any new page, verify: if a user searches the target query, does a comparison/aggregator page satisfy their intent, or do they want a specific provider directly?

- "Best expat health insurance Portugal" → comparison satisfies ✓
- "Cigna Global Chile" → user wants Cigna, comparison does not satisfy ✗
- "Allianz vs Cigna for expats" → comparison satisfies ✓
- "Aetna International Cigna acquisition" → user wants news, comparison does not satisfy ✗

If the target query fails this test, do not produce the page. Flag it and propose an alternative query instead.

---

## Affiliate Partner Priorities

Based on observed outbound click distribution:

| Provider | Clicks | Share |
|---|---|---|
| Cigna Global | 16 | ~55% |
| IMG Global | 5 | ~17% |
| Aetna International | 3 | ~10% |
| SafetyWing | 3 | ~10% |
| Bupa Global | 2 | ~7% |
| Allianz Care, AXA, GeoBlue | 1 each | ~3% each |

**Priority order for recommendations:**

1. **Cigna Global** — primary recommended partner (~55% of provider clicks)
2. **IMG Global** — secondary (~17%)
3. **Aetna International, SafetyWing** — tertiary (~10% each)
4. **Allianz Care, Bupa Global** — do not default-recommend; feature only where match is clearly superior (e.g., family coverage, UK nationals)

When a page recommends a specific provider, default to the best-fit from this priority order unless there's an editorial reason to feature another (document the reason in the commit).

---

## Structure Requirements

### Roundups (`/best/...`)
- H1 with target keyword
- TL;DR box at top: top pick, runner-up, budget pick
- Comparison table: 4–6 plans with standardized columns (sourced from `/data/plans.json` when available)
- 800–1200 words of analysis
- FAQ section: 4–6 questions
- Minimum 3 internal links to related guides, 1 to each plan reviewed
- Affiliate disclosure at top

### Demographic Pages
- Lead with why this segment has distinct insurance needs
- Specific considerations (seniors: age limits, pre-existing conditions, medical evacuation)
- 2–3 recommended providers with reasoning for this segment
- Segment-specific FAQ

### Visa Pages
- Brief overview of the visa and its insurance requirements
- Recommended insurance options that meet visa requirements
- FAQ
- Link to related country insurance guide

### Provider Reviews
- At-a-glance box: best for, countries covered, commission model
- Coverage details
- Pricing indicators
- Who it's best for, who should look elsewhere
- Alternatives section

---

## SEO Conventions

- Title tag: 50–60 chars, keyword-first
- Meta description: 140–155 chars, benefit + CTA
- Every new page must link to 3+ related existing pages
- Schema: FAQ and Review where applicable

---

## Hard Rules (Never Violate)

- Never publish pages targeting branded provider queries
- Never invent statistics, pricing, or policy features — if you can't cite it, don't write it
- Never claim commissions affect ranking
- Always include affiliate disclosure at top of any page with `/go/` links
- Never recommend a plan that hasn't been reviewed
- No medical claims ("cures," "treats") — insurance coverage claims only

---

## Success Criteria for a Run

A draft passes if:
- Intent match verified against the rule above
- Target word count hit
- All internal links resolve
- Comparison table populated from `/data/plans.json` where applicable
- FAQ section present with 4+ questions
- Affiliate disclosure present at top
- No placeholder text remains
- Primary recommended provider aligns with partner priority order

---

## Anti-Patterns — What Not to Do

- Do not optimize for impression volume. Optimize for outbound click rate.
- Do not produce Tier 3 patterns without explicit human override
- Do not soften recommendations to feature underperforming partners
- Do not default to producing more when quality-per-page is the actual constraint
- If a batch of pages doesn't generate at least 5 outbound clicks per 100 views within 6 weeks of indexing, pause the pattern and flag for human review before producing more

---

## Known Limitations

- **Sample size.** 302 outbound clicks over 2 months is directional, not definitive. Individual-page conversion rates beyond the top ~10 pages are statistical noise.
- **Bot traffic.** City-level GA data showed heavy presence of data center locations (Council Bluffs, Boardman, Ashburn, Singapore). Some portion of pageviews likely represents bots, which would artificially suppress observed conversion rates.
- **Date window mismatch.** GA pageview data and outbound click data cover overlapping but non-identical windows. Conversion rates are approximate.
- **Provider recommendation bias.** Cigna's outbound click dominance may partly reflect the site's existing bias toward featuring Cigna prominently, not purely audience preference.

---

## Review Triggers

Revisit this document when:

- A new affiliate deal changes the partner priority order
- Weekly monitoring shows a pattern's conversion rate shifting significantly (up or down)
- A Google algorithm update appears to affect the site's performance
- Sample sizes grow enough to resolve currently-uncertain signals (e.g., whether the senior conversion rate holds at larger volumes)
- The business model shifts (adding non-affiliate revenue, changing target audience, etc.)
