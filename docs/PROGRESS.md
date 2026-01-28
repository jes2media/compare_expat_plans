# Project Progress Log

Last updated: January 27, 2026

---

## Current Status

**Phase:** 2 - Country × Provider Expansion
**Total programmatic country pages:** 183
**Tier 1 countries refined:** 8
**Tier 2 countries refined:** 0 (in progress)

---

## Completed Milestones

### January 27, 2026 - Bulk Generation System & Tier 1 Refinement

#### Infrastructure Built
- [x] Created reusable `CountryInsuranceHub` template component
- [x] Built data layer with proper TypeScript types (`src/data/types.ts`)
- [x] Created providers database with 12 providers (`src/data/providers.ts`)
- [x] Built bulk generation script (`scripts/bulk-generate/generate.ts`)
- [x] Generated 183 country entries in `src/data/countries.ts`
- [x] Generated 183 provider matrix entries in `src/data/countryProviderMatrix.ts`
- [x] Created skip list for 21 existing handcrafted country pages
- [x] Created universal hero image for programmatic pages

#### Tier 1 Countries Refined (Detailed, Researched Content)
1. **South Korea** - NHIS mandatory enrollment, ₩130,000-180,000/month costs, E-2/E-7 visa specifics
2. **Brazil** - SUS universal access, local planos de saúde (Bradesco, SulAmérica), Digital Nomad Visa VITEM XIV
3. **New Zealand** - ACC accident coverage, Southern Cross insurance, student visa requirements
4. **Ireland** - HSE wait times, Lifetime Community Rating, VHI/Laya insurers, 20% tax relief
5. **Greece** - Digital Nomad Visa €30,000 minimum, island evacuation, EOPYY system
6. **Malaysia** - MM2H insurance requirement for 35+, Prince Court/Gleneagles hospitals, DE Rantau visa
7. **Philippines** - Metro Manila vs provinces gap, local HMOs (Maxicare), Singapore evacuation
8. **Switzerland** - Mandatory LAMal within 3 months, franchise system, canton price variations

#### Provider Matrix Updates
- All 8 Tier 1 countries have country-specific provider recommendations
- Each provider entry includes localized "bestFor" and "notIdealFor" text

---

## In Progress

### Tier 2 Country Refinement
Countries to refine with detailed content (priority order):
- [ ] India
- [ ] China
- [ ] UAE (if not already handcrafted)
- [ ] Turkey
- [ ] Poland
- [ ] Czech Republic
- [ ] Hungary
- [ ] Taiwan
- [ ] Hong Kong
- [ ] Chile
- [ ] Peru
- [ ] Morocco

---

## Existing Handcrafted Pages (Skip List)

These 21 countries have manually created pages with custom hero images:
1. Spain
2. Portugal
3. Mexico
4. Thailand
5. Costa Rica
6. France
7. Italy
8. Germany
9. UK
10. UAE
11. Singapore
12. Indonesia
13. Vietnam
14. Australia
15. Canada
16. Netherlands
17. Panama
18. Colombia
19. Argentina
20. Japan
21. Ecuador

---

## Page Counts

| Page Type | Count | Status |
|-----------|-------|--------|
| Handcrafted country pages | 21 | Complete |
| Programmatic country pages | 162 | Generated (183 - 21 skip list) |
| Provider pages | 12 | Existing |
| Comparison pages | ~45 | Existing |
| Country-provider pages | 0 | Not yet built |

**Total pages ready:** ~240+

---

## Next Steps

1. **Tier 2 Countries** - Refine 12+ more countries with detailed content
2. **Country-Provider Pages** - Generate /countries/[country]/insurance/[provider] pages
3. **Regional Hub Pages** - Create pages for Southeast Asia, Latin America, Europe, etc.
4. **Constraint Pages** - Pre-existing conditions, US coverage, maternity, age 65+

---

## Technical Notes

### Running the Bulk Generator
```bash
npx tsx scripts/bulk-generate/generate.ts
```

### Adding New Countries
1. Add country metadata to `scripts/bulk-generate/countryMetadata.ts`
2. Run the generator
3. Optionally refine with detailed content in `src/data/countries.ts`

### Skip List Location
`src/data/existingCountries.ts` - Add slugs here to prevent overwriting handcrafted pages

---

## Document History

- **January 27, 2026:** Initial progress log created after Tier 1 refinement complete
