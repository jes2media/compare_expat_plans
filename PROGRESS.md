# Progress Log & Next Steps

Last updated: January 26, 2026

## Completed

### Infrastructure & Setup
- [x] Astro 5 + Tailwind CSS v4 project scaffold
- [x] TypeScript configuration (strict mode)
- [x] Ideogram image generation pipeline (`scripts/ideogram/`)
- [x] VS Code configuration (launch.json, extensions)
- [x] CLAUDE.md documentation

### Core Components
- [x] Layout.astro - Main layout with SEO (Open Graph, Twitter cards, canonical URLs)
- [x] PageShell.astro - Content page template with TOC, hero backgrounds
- [x] HeaderNav.astro - Navigation with mobile menu
- [x] Footer.astro - Branding, affiliate disclosure, links
- [x] CTAButton.astro / CTABox.astro - Call-to-action components
- [x] ComparisonTable.astro - Data tables
- [x] ContentCards.astro - Card grids with images
- [x] AuthorBox.astro - Author bio section (John Spencer)
- [x] TableOfContents.astro - Sticky sidebar TOC
- [x] StickySidebar.astro - Sidebar wrapper

### Site Polish
- [x] Favicon (shield with checkmark)
- [x] 404 error page
- [x] Mobile responsiveness review
- [x] Accessibility pass (skip link, ARIA, focus states)
- [x] Page speed (lazy loading, font optimization)
- [x] CTA button underline fix in prose content

### Pages - Complete with Full Content

#### Homepage
- [x] `/` - Homepage with hero, card images, how it works section

#### Country Guides (6 total)
- [x] `/countries` - Browse countries index with scenic card images
- [x] `/countries/spain/insurance` - Full guide + hero background
- [x] `/countries/portugal/insurance` - Full guide (D7/D8 visa, SNS, Multicare)
- [x] `/countries/mexico/insurance` - Full guide (IMSS, no visa insurance req)
- [x] `/countries/thailand/insurance` - Full guide (O-A/O-X/LTR visas, TGIA)
- [x] `/countries/costa-rica/insurance` - Full guide (mandatory CAJA)
- [x] `/countries/france/insurance` - Full guide (PUMA, VLS-TS, CSM tax)

#### Provider Reviews (8 total)
- [x] `/providers` - Provider index with card images
- [x] `/providers/cigna-global` - Full review
- [x] `/providers/allianz-care` - Full review
- [x] `/providers/bupa-global` - Full review
- [x] `/providers/img-global` - Full review
- [x] `/providers/aetna-international` - Full review (US expat focus)
- [x] `/providers/geoblue` - Full review (Blue Cross network)
- [x] `/providers/axa-global` - Full review (EU regulatory benefits)
- [x] `/providers/safetywing` - Full review (Nomad Insurance vs Remote Health)

#### Best/Comparison Pages (6 total)
- [x] `/best` - Category index
- [x] `/best/expat-health-insurance` - Top picks for 2026
- [x] `/best/family-health-insurance` - Family-focused plans
- [x] `/best/budget-expat-insurance` - Budget options
- [x] `/best/digital-nomad-insurance` - Digital nomad guide with hero background
- [x] `/best/retiree-health-insurance` - Retiree/50+ guide, Medicare alternatives
- [x] `/best/us-expat-insurance` - US citizens abroad, integrated US coverage

#### Comparison Pages (11 total)
- [x] `/compare` - Comparison index
- [x] `/compare/cigna-global-vs-allianz-care`
- [x] `/compare/bupa-global-vs-cigna-global`
- [x] `/compare/allianz-care-vs-bupa-global`
- [x] `/compare/allianz-care-vs-img-global`
- [x] `/compare/img-global-vs-cigna-global`
- [x] `/compare/bupa-global-vs-img-global`
- [x] `/compare/safetywing-vs-img-global` - Budget nomad comparison
- [x] `/compare/aetna-international-vs-geoblue` - US expat comparison
- [x] `/compare/cigna-global-vs-aetna-international` - Global vs US focus
- [x] `/compare/axa-global-vs-allianz-care` - European insurers
- [x] `/compare/safetywing-vs-cigna-global` - Nomad vs traditional

#### Insurance-For Pages (6 total)
- [x] `/insurance-for` - Audience index
- [x] `/insurance-for/digital-nomads`
- [x] `/insurance-for/retirees`
- [x] `/insurance-for/remote-workers`
- [x] `/insurance-for/families`
- [x] `/insurance-for/students`
- [x] `/insurance-for/freelancers`

#### Guides (10 total)
- [x] `/guides` - Guide index
- [x] `/guides/international-health-insurance-vs-travel`
- [x] `/guides/choosing-deductibles`
- [x] `/guides/pre-existing-conditions`
- [x] `/guides/filing-claims`
- [x] `/guides/coverage-limits`
- [x] `/guides/medical-evacuation`
- [x] `/guides/maternity-coverage-abroad`
- [x] `/guides/mental-health-coverage`
- [x] `/guides/waiting-periods`
- [x] `/guides/dental-vision-coverage`

#### Country × Provider Pages (48 total)
- [x] Spain: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- [x] Portugal: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- [x] Mexico: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- [x] Thailand: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- [x] Costa Rica: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- [x] France: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing

### Images Generated
- [x] Homepage hero background
- [x] Homepage card images (3 cards)
- [x] Country card images (6 scenic illustrations)
- [x] Country hero backgrounds (Spain, Costa Rica, France - others may need)
- [x] Provider card images (8 total - all providers)
- [x] Best category card images (4 total)
- [x] Digital nomad hero background

---

## In Progress

Nothing currently in progress.

---

## Next Steps (Suggested Priority)

### High Priority - Content Expansion

#### New Provider Comparison Pages ✓ COMPLETED
The existing comparisons only cover Cigna/Allianz/Bupa/IMG. Add comparisons with newer providers:
- [x] SafetyWing vs IMG Global (budget nomad comparison)
- [x] Aetna vs GeoBlue (US expat comparison)
- [x] Cigna vs Aetna International
- [x] AXA Global vs Allianz Care (European focus)
- [x] SafetyWing vs Cigna Global (nomad vs traditional)

#### Country × Provider Pages for New Providers ✓ COMPLETED
Each country now has 8 provider subpages (24 new pages added):
- [x] Spain: Aetna, GeoBlue, AXA, SafetyWing
- [x] Portugal: Aetna, GeoBlue, AXA, SafetyWing
- [x] Mexico: Aetna, GeoBlue, AXA, SafetyWing
- [x] Thailand: Aetna, GeoBlue, AXA, SafetyWing
- [x] Costa Rica: Aetna, GeoBlue, AXA, SafetyWing
- [x] France: Aetna, GeoBlue, AXA, SafetyWing

#### More Best-Of Pages ✓ COMPLETED
- [x] `/best/retiree-health-insurance` - Retiree-focused plans
- [x] `/best/us-expat-insurance` - US citizens abroad

### Medium Priority - New Countries

#### Popular Expat Destinations
- [ ] Italy - Golden visa, healthcare quality
- [ ] Germany - EU hub, strong public system
- [ ] UK - Post-Brexit requirements
- [ ] Netherlands - Mandatory insurance, EU base
- [ ] UAE/Dubai - Tax-free, employer-based
- [ ] Singapore - Expat hub, high costs
- [ ] Japan - Aging population visa options
- [ ] Panama - Pensionado visa, popular with retirees
- [ ] Ecuador - Budget-friendly, coastal/mountain options
- [ ] Vietnam - Digital nomad growth
- [ ] Indonesia/Bali - Remote worker visas

### Lower Priority - Additional Features

#### Site Features
- [ ] Search functionality
- [ ] Newsletter signup integration
- [x] Contact page (Netlify Forms)
- [ ] About page
- [x] Privacy policy / Terms of service

#### More Guides
- [x] Maternity coverage abroad
- [x] Mental health coverage guide
- [x] Understanding waiting periods
- [ ] Emergency evacuation deep dive
- [x] Dental and vision coverage options

### Technical/Polish
- [x] Generate hero backgrounds for Portugal, Mexico, Thailand
- [x] Sitemap.xml generation (auto via @astrojs/sitemap)
- [x] robots.txt
- [x] Analytics integration (GA4 via Netlify env var)
- [ ] Performance audit (Lighthouse)
- [ ] Deployment setup (Netlify/Vercel/Cloudflare Pages)
- [x] Structured data / JSON-LD for SEO (Organization, BreadcrumbList, FAQPage)

---

## Notes

### Content Patterns
- Country guides follow consistent structure: Overview → Healthcare System → Visa Requirements → Recommended Plans → Costs → FAQs
- Provider reviews follow: Overview → Plans and Coverage → Pricing → Pros and Cons → Claims and Service → Who It's For → Alternatives
- Best-of pages follow: Top Picks → Explanation → How We Evaluated → Comparison Table → Detailed Reviews → Choosing Guide → FAQs

### Image Standards
- Hero backgrounds: 16:9 ratio, abstract gradients with themed colors, suitable for text overlay
- Card images: 4:3 ratio, minimal flat illustrations, white background, soft neutral colors with blue accents
- All images generated via Ideogram API with sidecar JSON for reproducibility

### Provider Coverage
- 8 providers now reviewed: Cigna, Allianz, Bupa, IMG, Aetna, GeoBlue, AXA, SafetyWing
- Providers span: traditional insurers, US-focused, EU-regulated, and nomad/startup options
- Travel medical vs health insurance distinction emphasized (especially for SafetyWing)

### Editorial
- All content should be researched for accuracy (visa requirements, costs change frequently)
- CTAs link to `/best/expat-health-insurance` as primary conversion page
- Follow EDITORIAL.md for writing style and tone
