# SEO Plan

Last updated: January 26, 2026

## Completed

### Internal Linking Audit (Jan 2026)
- Added cross-section links across 50 pages
- Country guides now link to insurance-for pages
- Provider reviews link to country-specific guides
- Best-of pages cross-link to siblings
- Compare pages link to relevant country guides
- Guide pages cross-link to related guides

### Technical SEO (Previously Completed)
- [x] Structured data (JSON-LD: Organization, BreadcrumbList, FAQPage)
- [x] Sitemap.xml (auto-generated via @astrojs/sitemap)
- [x] robots.txt
- [x] Meta tags and Open Graph
- [x] Canonical URLs
- [x] Mobile responsiveness
- [x] Accessibility (Lighthouse: 100)

---

## Future Opportunities

### 1. Blog / Content Hub (High Priority)

**Why:** Fresh content signals to Google, targets long-tail keywords, builds topical authority.

**Technical Setup Required:**
- Astro Content Collections for markdown/MDX posts
- `/blog` listing page with pagination
- Individual post template (reuse PageShell styling)
- Category/tag taxonomy
- RSS feed
- Recent posts widget for homepage/sidebar

**Content Types:**
| Type | Example | Frequency |
|------|---------|-----------|
| Country Updates | "Spain Digital Nomad Visa 2026 Changes" | As news breaks |
| Provider News | "Cigna Global Announces New Plan Tier" | As news breaks |
| Seasonal Guides | "Choosing Insurance Before Your Summer Move" | Quarterly |
| Deep-Dive Comparisons | "Why Retirees Are Choosing Portugal Over Spain" | Monthly |
| How-To Supplements | Expand on existing guide topics | Monthly |

**Suggested Cadence:** 2-4 posts/month

**URL Structure Options:**
- `/blog/post-slug` (simpler)
- `/blog/category/post-slug` (better for large volume)

**Integration Points:**
- Add "Blog" to main navigation
- Show 3 recent posts on homepage
- Related posts in sidebar of existing pages
- Cross-link blog posts to existing guides/country pages

---

### 2. Page Speed Optimization (High Priority)

**Current State:** Lighthouse Performance score: 77

**Opportunities:**
- [ ] Convert images to WebP format
- [ ] Implement responsive image sizing
- [ ] Optimize font loading (font-display: swap)
- [ ] Review and reduce JavaScript bundle
- [ ] Enable image lazy loading (partially done)
- [ ] Consider CDN for static assets

---

### 3. FAQ Schema Expansion (Medium Priority)

**Current State:** FAQ schema on some pages

**Expand To:**
- [ ] All 9 country guide pages
- [ ] All 8 provider review pages
- [ ] All 11 compare pages
- [ ] All insurance-for pages

---

### 4. Interactive Tools (Medium Priority)

**Ideas:**
- Quote comparison calculator
- "Which plan is right for me?" quiz
- Cost-of-healthcare-by-country comparison tool
- Insurance requirements checker by visa type

**Benefits:** Higher engagement, longer time on site, link-worthy content

---

### 5. More Content Pages (Ongoing)

**Countries to Add:**
- [ ] Netherlands - Mandatory insurance, EU base
- [ ] UAE/Dubai - Tax-free, employer-based
- [ ] Singapore - Expat hub, high costs
- [ ] Japan - Aging population visa options
- [ ] Panama - Pensionado visa, popular with retirees
- [ ] Ecuador - Budget-friendly
- [ ] Vietnam - Digital nomad growth
- [ ] Indonesia/Bali - Remote worker visas

**More Comparisons:**
- Additional provider vs provider combinations
- Country vs country comparisons (e.g., "Portugal vs Spain for Retirees")

---

### 6. External Link Building (Lower Priority)

**Strategies:**
- Guest posting on expat blogs
- Digital nomad community engagement (Reddit, Facebook groups)
- HARO responses for insurance/expat topics
- Partnerships with relocation services
- Resource page outreach

---

## Metrics to Track

- Organic traffic (Google Search Console)
- Keyword rankings for target terms
- Page indexing status
- Core Web Vitals scores
- Backlink growth
- Time on page / engagement

---

## Notes

- All content should follow EDITORIAL.md guidelines
- Prioritize quality over quantity for blog posts
- Each new page should include internal links to 3-5 related pages
