# Next Steps — Compare Expat Plans

Operational queue. Check off as items complete. New items added at the bottom of their section, so the top of each list is the oldest work still open.

## Blocking — Do Before Any Further Scaling

- [ ] Sign Cigna Global affiliate deal (target: this week)
- [ ] Sign IMG Global affiliate deal (target: this week)
- [ ] Implement sub-id parameter passthrough on `/go/` redirect logic. Format: `/go/{provider}/?subid={source-page-slug}`. Required for commission attribution back to originating page.
- [ ] Verify GA4 `outbound_click` event is tracked consistently across all `/go/` links and set it as a key event (conversion) in GA4 property settings.

## Priority Investigations

- [ ] Investigate February–March 2026 traffic crash. Check Google's published algorithm update history for late February / early March 2026. Determine whether patterns are recoverable via quality improvements or require wholesale retargeting.
- [ ] Audit top 20 highest-impression pages for intent match. For each: identify the ranking query, evaluate whether a comparison page satisfies intent. Categorize as (a) rewrite content to match intent, (b) retarget the page at a different query, or (c) noindex.
- [ ] Filter bot traffic in GA4. Add known data-center IP ranges to the exclusion list, or add user-agent filters for common bot signatures. Re-run conversion analysis once filtered data is available.

## Content Production (After Blocking Items Complete)

### Tier 1 — Scale Aggressively

- [ ] Expand senior/retiree demographic page coverage. Target: 50–80 new pages.
  - Pattern: `/insurance-for/retirees/in/{country}/`, `/countries/{country}/insurance/for-seniors/`, `/insurance-for/over-70/in/{country}/`
  - Priority countries: Portugal, Mexico, Panama, Costa Rica, Spain, Thailand, Malaysia, Philippines, Ecuador, Belize, Uruguay, Italy, Greece, Colombia
- [ ] Expand `/best/` editorial roundup coverage. Target: 30–50 new roundups.
  - Candidates: "best for digital nomads over 40," "best for US expats with pre-existing conditions," "best for European families abroad," "best for Americans retiring in Latin America," "best for expat entrepreneurs," "best for single expats under 35," "best with strongest evacuation coverage," "best with global hospital networks"

### Tier 2 — Scale with Monitoring

- [ ] Expand visa-country pages for top-demand combinations. Target: 50–100 new pages.
  - Priority: retirement visas, digital nomad visas, student visas, freelancer visas for countries with large programs (Portugal D7/D8, Spain NLV, Mexico temporary resident, Costa Rica rentista, Estonia DNV, etc.)
- [ ] Deepen provider reviews for top 6 providers. Each needs sub-pages:
  - Coverage details
  - Pricing indicators
  - Best-for segments
  - Who-should-look-elsewhere
  - Alternatives / comparison context
  - Start with Cigna Global and IMG Global; expand to Aetna International, SafetyWing, Bupa Global, Allianz Care.

### Tier 3 — Paused

- Base `/countries/{country}/insurance/` pages — paused pending intent audit
- Provider-country combinations — paused pending intent audit
- Head-to-head comparisons (`/compare/{A}-vs-{B}/`) — paused pending intent audit

Do not produce new pages in these patterns without explicit human override after the intent audit is complete.

## Infrastructure

- [ ] Build `/data/plans.json` as the structured source for comparison table data across all pages. Prevents fabricated pricing or coverage details and keeps tables consistent when facts change.
- [ ] Set up Claude Code scheduled routine for editorial roundup production. Cadence: daily, 3 pages per run, output to PR.
- [ ] Set up separate routine for senior demographic pages. Cadence: daily, 3 pages per run, output to PR.
- [ ] Set up weekly monitoring routine. Pulls outbound click rate by URL pattern, flags any pattern dropping below 5% for investigation.

## Tracking Cadence

Weekly reporting should pull:

- Organic impressions and clicks by URL pattern (from GSC)
- Outbound clicks by pattern (from GA4)
- Outbound clicks by destination provider (from GA4)
- Commission attribution by source page (from affiliate networks, once sub-id tracking is live)

Any pattern showing flat or declining metrics for 4+ weeks triggers reassessment of that pattern's strategy.

## Review Triggers

Revisit CLAUDE.md and CONTENT-STRATEGY.md when:

- A new affiliate deal changes the partner priority order
- Weekly monitoring shows a pattern's conversion rate shifting significantly (up or down)
- A Google algorithm update appears to affect the site's performance
- Sample sizes grow enough to resolve currently-uncertain signals (e.g., whether the senior conversion rate holds at larger volumes)
- The business model shifts (adding non-affiliate revenue, changing target audience, etc.)
