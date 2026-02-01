# Project Progress Log

Last updated: February 1, 2026

---

## Current Status

**Phase:** 6 - Programmatic Page Expansion
**Total pages:** ~2,280
**Countries refined with detailed content:** 63 (8 Tier 1 + 12 Tier 2 + 43 Tier 3 across 11 batches)
**Country-persona pages:** 728 (91 countries × 8 personas)
**Country-provider pages:** 171 (enhanced template)
**Condition × Country pages:** 270 (10 conditions × 27 countries)
**Country comparison pages:** 29 (country vs country)
**Problem/solution guides:** 6 (with hero images)
**Constraint pages:** 12 (condition-specific guides)

---

## Completed Milestones

### February 1, 2026 - Long-Form Comparison Articles + CRO Template

#### Long-Form Comparison Articles (7 total, ~4,000 words each)
Expanded provider comparison pages to comprehensive long-form articles for SEO:

**Completed articles:**
1. `bupa-global-vs-cigna-global` - Premium vs network size comparison
2. `cigna-global-vs-allianz-care` - Global network vs European value
3. `safetywing-vs-img-global` - Budget/nomad-focused comparison
4. `axa-global-vs-allianz-care` - European insurer comparison
5. `cigna-global-vs-aetna-international` - US-focused providers, US coverage integration
6. `axa-global-vs-bupa-global` - Value vs premium service, mental health focus
7. `geoblue-vs-cigna-global` - US network access (BCBS) vs global network

**Article structure (12 sections):**
- Overview with Quick Decision Guide
- Company Backgrounds
- Coverage Comparison (with table)
- Key Differentiator sections (2, customized per matchup)
- Pricing Comparison (with table)
- Plan Tiers Explained
- Real-World Scenarios (5 personas)
- Customer Experience
- Who Should Choose Which
- Our Verdict
- FAQs (6 questions)

#### CRO Optimizations Applied to GeoBlue vs Cigna
Implemented conversion rate optimization based on analysis:

**CRO elements added:**
1. Quick Decision Guide box at top (reduces bounce for decisive readers)
2. Trust signal badges (A+ BBB, 4.2★ Trustpilot) in "At a Glance" boxes
3. 6 CTAs strategically placed throughout (was 3):
   - After overview (highlighted)
   - Mid-article after key sections
   - After pricing with urgency messaging ("rates increase 5-8% annually")
   - After real-world scenarios
   - After verdict (highlighted)
   - After FAQ (highlighted)
4. Split provider CTAs in "Who Should Choose" section (direct links to each provider)
5. Inline CTA in high-intent FAQ answer (pre-existing conditions)

#### Longform Comparison Template Created
Created reusable template at `templates/longform-comparison.astro`:
- Configuration section at top for easy provider/page setup
- All 12 TOC sections pre-structured
- Comparison tables with placeholder data
- All CRO elements built-in
- Placeholder syntax: `{{PLACEHOLDER}}` for easy find-replace
- Comments documenting CRO purpose of each section

**Usage:** Copy template, replace `{{PLACEHOLDER}}` values, customize content.

---

### January 30, 2026 - Programmatic Page Expansion

#### Country vs Country Comparison Pages (29 pages)
Created comprehensive comparison pages for expats deciding between destinations:
- Template: `CountryComparisonPage.astro`
- Route: `/compare/countries/[slug].astro`
- URL pattern: `/compare/countries/spain-vs-portugal`

**Rich data for 25 countries including:**
- Cost of living breakdown (rent, food, utilities, total)
- Visa options with requirements (3 per country)
- Climate and weather data
- Healthcare ratings and notes
- Expat hub cities
- Language notes

**Sections per page:**
- Quick comparison table
- Cost of living (color-coded by tier)
- Healthcare systems with ratings
- Visa options (3 per country)
- Insurance requirements
- Climate & weather
- Expat life & community
- Who should choose which (scenarios for digital nomads, retirees, families, budget-conscious)
- 5 dynamic FAQs
- Verdict with recommendations

**Country pairs covered:**
- Europe: Spain vs Portugal, Spain vs Italy, Spain vs France, Portugal vs Greece, Italy vs Greece, France vs Italy, Germany vs Netherlands, UK vs Ireland, Germany vs France
- Southeast Asia: Thailand vs Vietnam, Thailand vs Indonesia, Thailand vs Malaysia, Vietnam vs Indonesia, Malaysia vs Singapore
- Latin America: Mexico vs Costa Rica, Mexico vs Panama, Costa Rica vs Panama, Colombia vs Ecuador, Colombia vs Mexico, Argentina vs Colombia
- Cross-region: Spain vs Mexico, Portugal vs Thailand, Spain vs Thailand, Mexico vs Thailand, Costa Rica vs Portugal
- Business hubs: UAE vs Singapore, Singapore vs Thailand
- Americas vs Europe: Canada vs UK, Australia vs UK

#### Condition × Country Pages (270 pages)
Created pages for expats managing health conditions abroad:
- Template: `ConditionCountryPage.astro`
- Data: `conditions.ts` (10 conditions)
- Route: `/conditions/[condition]/in/[country].astro`
- URL pattern: `/conditions/diabetes/in/thailand`

**10 medical conditions:**
- Diabetes, Hypertension, Asthma, Depression & Anxiety, Heart Disease
- Thyroid Disorders, Arthritis, Cancer (In Remission), Severe Allergies, Kidney Disease

**27 target countries across:**
- Europe: Spain, Portugal, France, Italy, Germany, UK, Netherlands, Greece, Croatia, Poland, Czech Republic, Ireland
- Asia: Thailand, Vietnam, Indonesia, Malaysia, Philippines, Japan, Singapore
- Americas: Mexico, Costa Rica, Panama, Colombia, Ecuador, Argentina
- Other: UAE, Australia, Canada

**Sections per page:**
- Healthcare quality assessment (excellent/good/adequate/limited)
- Medication access information
- Insurance recommendations
- Practical tips (5 per page)
- Finding doctors section
- 5 dynamic FAQs
- 3 related cards

#### Enhanced CountryProviderPage Template
Significantly enhanced programmatic country-provider pages (171 pages):
- Added helper functions for generating rich content
- New sections: Quick Stats, Visa & Requirements, Network & Hospitals, Pricing Guide, vs Local Options, Common Scenarios, Using Your Coverage
- Dynamic FAQs based on country/provider combination

#### Problem/Solution Guides (6 pages with hero images)
Created editorial guides for common expat insurance problems:
1. `/guides/switching-insurance-abroad` - How to switch insurance while living overseas
2. `/guides/pre-existing-conditions-abroad` - Getting coverage with pre-existing conditions
3. `/guides/insurance-claim-denied` - What to do when claims are denied
4. `/guides/find-english-speaking-doctors-abroad` - Finding language-accessible care
5. `/guides/emergency-medical-evacuation` - Understanding evacuation coverage
6. `/guides/kids-health-insurance-abroad` - Family coverage considerations

**Each guide includes:**
- Custom hero image (generated via Ideogram API)
- Comprehensive problem/solution format
- Practical steps and recommendations
- Provider recommendations where relevant
- FAQs

---

### January 30, 2026 - Country-Persona Expansion Batch 8 (Europe Gaps)

#### Country-Persona Pages Added (80 pages)
Added 10 European countries to the country-persona matrix (Batch 8):
- **Luxembourg** - CNS mandatory, €2,500+/month for non-EU, CHL hospital, Belgium/Germany nearby
- **Iceland** - Sjúkratryggingar tax-funded, Landspítali only hospital, 20-40% higher premiums
- **Andorra** - Digital Nomad Visa €40k/year, CASS 75% coverage, ski injury coverage essential
- **Monaco** - CCSS for workers, €500k+ assets for residence, Princess Grace Hospital
- **Liechtenstein** - Swiss OKP mandatory, only 89 permits/year, CHF costs highest in world
- **Cyprus** - Digital Nomad Visa €3,500/month, GESY universal 2019, non-dom tax attractive
- **Malta** - Nomad Residence €2,700/month, English-speaking, Mater Dei Hospital
- **Finland** - Kela public healthcare, Nordic model, Startup Permit for entrepreneurs
- **Romania** - Digital Nomad Visa €3,700/month, 1% micro-company tax, very affordable private
- **San Marino** - ISS covers residents, Italian healthcare ties, Rimini 15 minutes

**Total country-persona pages:** 728 (91 countries × 8 personas)

---

### January 30, 2026 - Country-Persona Expansion Batch 7 (Asia-Pacific)

#### Country-Persona Pages Added (72 pages)
Added 9 Asia-Pacific countries to the country-persona matrix (Batch 7):
- **Cambodia** - E-visa easy, ER Visa 55+, Royal Phnom Penh Hospital, Bangkok evacuation
- **Laos** - Tourist extensions, Vientiane Alliance/French Hospital only, Thailand evacuation essential
- **Myanmar** - Political situation affects options, Pun Hlaing/Asia Royal Yangon, verify coverage
- **Nepal** - 150-day/year limit, Residential visa 60+, Norvic/Grande Kathmandu, altitude considerations
- **Sri Lanka** - Digital Nomad Visa 2024, SRV $15k/year, Asiri/Nawaloka Colombo, economic recovery
- **Bangladesh** - Business visa required, Square/United/Apollo Dhaka, India evacuation
- **Pakistan** - Major city hospitals good (Aga Khan, Shaukat Khanum), UAE evacuation
- **Mongolia** - 30-day visa-free, SOS Medica Ulaanbaatar only, extreme climate (-40°C), Seoul evacuation
- **Brunei** - Oil wealth, 90-day visa-free, RIPAS Hospital, Singapore evacuation

**Total country-persona pages:** 648 (81 countries × 8 personas)

---

### January 30, 2026 - Country-Persona Expansion Batch 6 (Central & South America)

#### Country-Persona Pages Added (56 pages)
Added 7 Central & South America countries to the country-persona matrix (Batch 6):
- **Nicaragua** - Pensionado $600/month (lowest threshold), Hospital Vivian Pellas only quality option, Granada/SJDS clinics basic
- **Honduras** - Pensionado $1,500/month, Roatán/Bay Islands focus, ZEDE/Próspera zones, island evacuation critical
- **El Salvador** - Bitcoin Visa (3 BTC/$100k), dollarized economy, Hospital de Diagnóstico San Salvador
- **Guatemala** - CA-4 visa mobility, Herrera Llerandi/Centro Médico hospitals, Antigua/Atitlán limited care
- **Uruguay** - Mutualista system, Hospital Británico/Italiano, FONASA contributions, most developed in region
- **Paraguay** - SUACE easy residency, 10% flat tax haven, Sanatorio Migone/Italiano Asunción, Buenos Aires evacuation
- **Bolivia** - SUS universal coverage, La Paz altitude (3,640m) consideration, Santa Cruz better facilities

**Total country-persona pages:** 576 (72 countries × 8 personas)

---

### January 30, 2026 - Country-Persona Expansion Batch 5 (Caribbean)

#### Country-Persona Pages Added (80 pages)
Added 10 Caribbean countries to the country-persona matrix (Batch 5):
- **Jamaica** - DN Visa $50k/year, Retirement Visa 55+, Kingston hospitals, Miami evacuation
- **Barbados** - Welcome Stamp visa $50k income, QEH/Bayview hospitals, diving coverage
- **Bahamas** - BEATS visa requires insurance, Nassau-centric care, Out Island gaps
- **Dominican Republic** - Pensionado $1,500/month, HOMS/CEDIMAT hospitals, Punta Cana clinics
- **Belize** - QRP program 45+ ($2k/month), KHMH Belize City, cayes/jungle gaps
- **Trinidad & Tobago** - Oil/gas funded healthcare, Port of Spain hospitals, self-sufficient
- **Cayman Islands** - Global Citizen $100k/year, Health City (JCI-accredited), best Caribbean healthcare
- **Aruba** - One Happy Workation visa, AZV insurance, Oduber Hospital, Dutch standards
- **Curaçao** - @HOME program, CMC hospital, SVB insurance, Dutch ties
- **Bermuda** - Work from Bermuda (insurance required), KEMH hospital, expensive, US evacuation

**Total country-persona pages:** 520 (65 countries × 8 personas)

---

### January 30, 2026 - Country-Persona Expansion Batch 4 (Balkans & Baltics)

#### Country-Persona Pages Added (80 pages)
Added 10 countries to the country-persona matrix (Batch 4):
- **Estonia** - DN Visa €3,504/month, Haigekassa employed-only, e-Residency ≠ healthcare, Confido/Medicum private, Helsinki ferry backup
- **Latvia** - DN Visa €2,857/month (€42,500 insurance min), NVD underfunded, most affordable Baltic, 1-year non-renewable
- **Lithuania** - No DN visa (Startup Visa alternative), PSD 6.98%, Santaros Klinikos, Northway/Kardiolita private, fintech hub
- **Bulgaria** - NHIF 8%, EU EHIC valid, Acibadem/Tokuda Sofia, dental tourism hub, 10% flat tax
- **Serbia** - 90-day visa-free, RFZO (no EHIC), Bel Medic/Medigroup Belgrade, digital nomad hub
- **Montenegro** - DN Visa requires insurance, FZOM limited, coastal summer strain, Belgrade evacuation
- **Albania** - 1-year visa-free (no insurance mandate), American Hospital/Hygeia Tirana, Greece evacuation
- **North Macedonia** - FZOM public, Sistina/Zan Mitrev Skopje, Lake Ohrid limitations, Thessaloniki evacuation
- **Slovenia** - ZZZS mandatory + dopolnilno €35/month, UKC Ljubljana, no DN visa, s.p. self-employment route
- **Slovakia** - 3-insurer system (VšZP, Dôvera, Union ZP), 14% contribution, Vienna 60km, živnosť route

**Total country-persona pages:** 440 (55 countries × 8 personas)

---

### January 29, 2026 - Tier 3 Country Refinement Batch 11 (Latin America Gaps)

#### Tier 3 Country Refinement - Batch 11 (5 countries)
- **Nicaragua** - Granada/SJDS retiree havens, Hospital Vivian Pellas (Managua) only quality option, Pensionado visa ($600/month), Costa Rica/Miami evacuation essential, very low costs ($30-50 GP visits)
- **Honduras** - Roatán/Bay Islands focus, Hospital Honduras Medical Center (San Pedro Sula), ZEDE/Próspera zones, Pensionado visa ($1,500/month), island air evacuation critical
- **Paraguay** - Tax haven appeal (10% flat rate, no foreign income tax), SUACE easy residency, Sanatorio Migone/Sanatorio Italiano Asunción, Buenos Aires/São Paulo evacuation, very affordable
- **El Salvador** - Bitcoin Beach/El Zonte focus, Hospital de Diagnóstico San Salvador, Bitcoin Visa (3 BTC/$100K), dollarized economy, Guatemala City/Panama evacuation
- **Belize** - English-speaking Caribbean, QRP (Qualified Retired Persons) program, Karl Heusner Memorial Hospital Belize City, caye/island healthcare gaps, Mexico/US evacuation

---

### January 29, 2026 - Tier 3 Country Refinement Batch 10 (European Microstates)

#### Tier 3 Country Refinement - Batch 10 (4 countries)
- **Iceland** - Tax-funded Sjúkratryggingar Íslands with copays, Landspítali sole hospital, remote location (2-3hr to Europe), evacuation essential, extreme costs (20-40% higher premiums), no DN visa
- **Andorra** - CASS mandatory for workers (75% coverage + mutua supplement), Passive Residence requires €600K+ and private insurance, Barcelona/Toulouse evacuation, Digital Nomad Visa available, ski coverage essential
- **Monaco** - CCSS for workers, non-workers need private insurance for residence, Princess Grace Hospital + Nice CHU backup, ultra-high-net-worth market, no income tax but €500K+ assets required
- **Liechtenstein** - Swiss-style mandatory OKP, Landesspital basics only, Swiss hospitals (Chur, Zürich) for complex care, extremely restrictive immigration (89 permits/year), CHF costs

---

### January 29, 2026 - Tier 3 Country Refinement Batch 9 (EU Central/Baltic)

#### Tier 3 Country Refinement - Batch 9 (5 countries)
- **Slovenia** - ZZZS mandatory + dopolnilno complementary insurance (€35/month), UKC Ljubljana, no digital nomad visa (unlike Croatia), self-employment (s.p.) route, Vienna/Milan evacuation for complex cases
- **Slovakia** - Three-insurer system (VšZP, Dôvera, Union ZP), 14% income contribution, Vienna only 60km away for complex care, živnosť self-employment route, very affordable costs
- **Lithuania** - PSD mandatory (6.98% income), Santaros Klinikos hospital, no DN visa but Startup Visa available, Northway/Kardiolita private clinics, fintech hub
- **Latvia** - Digital Nomad Visa (€2,857/month, €42,500 insurance minimum), NVD underfunded public system, most affordable Baltic state, Veselības centrs 4/ARS private clinics, 1-year non-renewable DN visa
- **Estonia** - Digital Nomad Visa (€3,504/month), e-Residency ≠ healthcare, Haigekassa for employed only, Confido/Medicum private clinics, Helsinki 2-hour ferry backup, most digital healthcare system

---

### January 29, 2026 - Country × Persona Expansion (Batch 2 & 3)

#### Batch 3: New Country-Persona Pages (80 pages)
Added 10 more countries to the country-persona matrix:
- **Austria** - ÖGK mandatory, Red-White-Red Card, Zusatzversicherung options
- **Belgium** - Mutuelle mandatory, INAMI/RIZIV, hospitalization insurance
- **Sweden** - Personnummer required, regional healthcare, frikort cost cap
- **Norway** - Skilled Worker visa NOK 479,000/year, fastlege system, frikort
- **Turkey** - SGK public, Acibadem/Memorial chains, Istanbul medical tourism
- **Hungary** - White Card digital nomad permit, NEAK public, Budapest options
- **Hong Kong** - HA public waits, expensive private, corporate coverage standard
- **South Africa** - Medical aid essential (Discovery), gap cover, Netcare/Mediclinic
- **Denmark** - CPR number required, yellow card, Group 1/2, dental excluded
- **Peru** - EsSalud public, Lima private clinics, altitude considerations

#### Batch 2: New Country-Persona Pages (80 pages)
Added 10 countries to the country-persona matrix:
- **New Zealand** - ACC injury coverage, Southern Cross, high visa barriers
- **Ireland** - HSE waits, VHI/Laya options, Stamp 0 requirements, tax relief
- **Greece** - Digital Nomad Visa (€3,500/month), EOPYY, island limitations
- **Switzerland** - Mandatory LAMal, canton variations, wealthy retiree options
- **Poland** - NFZ waits, Medicover/LuxMed subscriptions, affordable private care
- **Czech Republic** - Zivno Visa popular, VZP system, Prague expat scene
- **Croatia** - Digital Nomad Visa (€2,539/month), HZZO exclusions
- **Taiwan** - Gold Card program, NHI after 6 months, excellent care
- **Chile** - FONASA/ISAPRE system, Digital Nomad Visa, Santiago hospitals
- **India** - Apollo/Fortis networks, urban vs rural gap, affordable care

**Total country-persona pages:** 360 (45 countries × 8 personas)

---

### January 29, 2026 - Additional Constraint Pages + Tier 3 Refinement (Batch 1-5)

#### New Constraint Pages Created (4 pages)
- **Diabetes** (`/insurance-for/diabetes`) - Type 1 vs Type 2 handling, provider comparison, managing diabetes abroad, medication access by country
- **Already Pregnant** (`/insurance-for/already-pregnant`) - Why pregnancy is pre-existing, coverage options, out-of-pocket costs by country, public healthcare alternatives
- **Cancer Survivors** (`/insurance-for/cancer-survivors`) - Remission requirements, provider comparison, improving application chances, country considerations
- **Vision Coverage** (`/insurance-for/vision`) - Medical vs routine vision, provider options, LASIK abroad, vision costs by country

#### Tier 3 Country Refinement - Batch 1 (5 countries)
- **Austria** - ÖGK mandatory enrollment, SVS for self-employed, Red-White-Red Card €2,610/month requirement, Zusatzversicherung supplemental options
- **Belgium** - Mutuelle mandatory membership, hospitalization insurance essential, INAMI/RIZIV reimbursement system, EU institution coverage
- **Croatia** - Digital Nomad Visa details (€2,539/month income), HZZO exclusion for DN holders, island healthcare limitations
- **Israel** - Kupat Holim system (4 HMOs), Shaban supplemental, tech industry coverage standards, work visa restrictions
- **South Africa** - Medical aid schemes (Discovery, Bonitas), gap cover necessity, private hospital chains (Netcare, Mediclinic), load shedding impacts

#### Tier 3 Country Refinement - Batch 2 (5 countries)
- **Sweden** - Personnummer requirements, regional healthcare (21 regions), frikort cost cap system, private options (Capio, Aleris)
- **Norway** - Fødselsnummer/D-number distinction, fastlege GP system, frikort free card, Skilled Worker visa salary threshold
- **Egypt** - Cairo private hospitals (Dar Al Fouad, As-Salam), Red Sea healthcare limitations, currency volatility, affordable costs
- **Uruguay** - Mutualista system explained, FONASA contributions, Hospital Británico, retirement-friendly healthcare
- **Kenya** - Nairobi as East Africa hub, AMREF Flying Doctors, Aga Khan Hospital, Digital Nomad Permit, safari evacuation

#### Tier 3 Country Refinement - Batch 3 (5 countries)
- **Denmark** - CPR number registration, yellow card (sundhedskort), Group 1/2 membership choice, dental exclusion, 18-month registration requirement
- **Finland** - Occupational healthcare (työterveys) advantage, Kela reimbursement system, terveysasema health stations, €25.60 fee caps
- **Nepal** - Kathmandu-centric healthcare (CIWEC, Patan, Grande), altitude sickness coverage essential, helicopter evacuation for trekkers, India backup
- **Dominican Republic** - Santo Domingo hospitals (HOMS, CEDIMAT, Hospiten), ARS local insurance system, Punta Cana tourist coverage, Miami evacuation option
- **Bolivia** - La Paz altitude challenges (3,640m), SUS universal system, Santa Cruz as medical hub, evacuation to Chile/Brazil essential, very affordable costs

#### Tier 3 Country Refinement - Batch 4 (5 countries)
- **Romania** - Digital Nomad Visa (€3,700/month requirement), CNAS public system, MedLife/Regina Maria private networks, dental tourism, 10% CASS contribution
- **Laos** - Thailand evacuation essential, Vientiane-only healthcare (Alliance Medical Center), SOS International presence, basic rural healthcare
- **Bangladesh** - Dhaka private hospitals (Apollo, Square, United), NGO/corporate expat coverage, air quality concerns, Bangkok/Singapore evacuation
- **Mongolia** - Ulaanbaatar SOS Medica clinic, extreme climate (-40°C winters), mining industry coverage, Beijing/Seoul evacuation, severe air pollution
- **Guatemala** - Guatemala City hospitals (Herrera Llerandi, Centro Médico), Antigua/Lake Atitlán healthcare gaps, CA-4 visa, US evacuation option

#### Tier 3 Country Refinement - Batch 5 (1 country)
- **Fiji** - Digital Nomad Visa (FJD 100,000/year), Suva Private Hospital, outer island healthcare gaps, diving/decompression coverage, Australia/NZ evacuation

#### Tier 3 Country Refinement - Batch 6 (5 countries)
- **Malta** - Nomad Residence Permit (€2,700/month), Pink Card system, Mater Dei Hospital, iGaming industry coverage, Italy/UK evacuation
- **Cyprus** - GESY universal healthcare (2.75% contribution), Digital Nomad Visa (€3,500/month), Category F retirement, British expat community
- **Qatar** - Employer-mandated insurance, Hamad Medical Corporation, Sidra Medicine (women/children), Health Card system, no retirement visa
- **Bahrain** - Mandatory Sehati insurance since 2022, Golden Visa (10 years), King Hamad Hospital, Saudi Arabia access via causeway
- **Jamaica** - Digital Nomad Visa ($50,000/year), Retirement Visa (55+), Kingston private hospitals, Miami evacuation essential, US Medicare doesn't work

#### Tier 3 Country Refinement - Batch 7 (5 countries)
- **Luxembourg** - CNS (Caisse Nationale de Santé) mandatory enrollment, mutuelle supplements (80-100% reimbursement), cross-border healthcare (Belgium, France, Germany), EU institution considerations
- **Oman** - Mandatory insurance since 2016, MOH public system with Resident Card access, Muscat Private Hospital/Burjeel, UAE evacuation for complex cases
- **Barbados** - Welcome Stamp visa (12 months, $50,000+ income) requires insurance, QEH public hospital, Bayview private, Miami evacuation, diving/hyperbaric coverage
- **Bahamas** - BEATS visa requires insurance, Nassau-centric care (PMH, Doctors Hospital), Out Island clinic-only healthcare, Miami evacuation critical
- **Kuwait** - AFYA mandatory expat system (KWD 50/year), excellent MOH public hospitals, Dar Al Shifa/Al Salam private, kafala employer sponsorship, extreme heat coverage

#### Tier 3 Country Refinement - Batch 8 (5 countries - Balkans)
- **Bulgaria** - NHIF 8% contribution, EU EHIC valid, Acibadem City Clinic/Tokuda Sofia, dental tourism, Black Sea/ski area limitations
- **Serbia** - 90-day visa-free, RFZO public (not EU-EHIC), Bel Medic/Medigroup Belgrade, digital nomad hub, Kosovo border considerations
- **Montenegro** - Digital Nomad Visa requires insurance, FZOM limited (only one major hospital), coastal summer strain, Belgrade evacuation common
- **Albania** - 1-year visa-free (no insurance mandate), underfunded public, American Hospital/Hygeia Tirana, Albanian Riviera healthcare gaps, Greece evacuation
- **North Macedonia** - FZOM public, Sistina/Zan Mitrev Skopje private, Lake Ohrid limitations, medical tourism growing, Thessaloniki/Belgrade evacuation

---

### January 28, 2026 (Evening) - Country × Persona Pages

#### Country-Persona Pages Generated (200 pages)
- Created `countryPersonaMatrix.ts` with 25 countries × 8 personas data:
  - Country-specific visa info for each persona type
  - Persona-specific provider recommendations
  - Cost estimates by persona and country cost level
  - Healthcare access notes tailored to persona needs
- Created `CountryPersonaPage.astro` template with:
  - Key considerations section
  - Visa & insurance requirements
  - Recommended providers with persona-specific "best for" text
  - Healthcare access advice
  - Expected costs (insurance + out-of-pocket)
  - Persona-specific FAQs
- Created dynamic route `/countries/[country]/insurance/for-[persona].astro`
- Added 21 handcrafted country entries to `countries.ts` for data lookups
- Generated **200 country-persona pages** (25 top countries × 8 personas)
- Example pages:
  - `/countries/spain/insurance/for-digital-nomads`
  - `/countries/portugal/insurance/for-retirees`
  - `/countries/thailand/insurance/for-families`
  - `/countries/mexico/insurance/for-freelancers`

**Target Countries (25):**
Spain, Portugal, Mexico, Thailand, Costa Rica, France, Italy, Germany, UK, UAE, Singapore, Indonesia, Vietnam, Australia, Canada, Netherlands, Panama, Colombia, Argentina, Japan, Ecuador, South Korea, Brazil, Malaysia, Philippines

**Personas (8):**
Digital Nomads, Retirees, Families, Remote Workers, Students, Freelancers, Seniors (65+), Entrepreneurs

---

### January 28, 2026 - Regional Hubs + Country-Provider Pages + Provider-Persona Pages + Constraint Pages + Tier 2 Refinement

#### Constraint Pages Created (8 total)
- Created 7 new constraint-based pages (handcrafted, not programmatic):
  - **US Coverage** (`/insurance-for/us-coverage`) - Plans that include US care, cost implications, Medicare considerations
  - **Maternity** (`/insurance-for/maternity`) - Waiting periods, coverage details, planning timeline
  - **No Medical Underwriting** (`/insurance-for/no-medical-underwriting`) - Moratorium plans, guaranteed issue options, local alternatives
  - **Mental Health** (`/insurance-for/mental-health`) - Therapy coverage, teletherapy, pre-existing mental health conditions
  - **Short-term** (`/insurance-for/short-term`) - Travel medical, trip insurance, gap coverage
  - **Dental** (`/insurance-for/dental`) - Dental add-ons, standalone plans, dental tourism
  - **Over 70** (`/insurance-for/over-70`) - Age limits, providers accepting 70+, premium expectations
- Pre-existing conditions page already existed

#### Internal Linking Audit Completed
- **Persona pages cross-linked:** Updated 4 pages (families, retirees, students, digital-nomads) with links to related personas
- **Provider pages → comparisons:** Added 3 comparison links to each of 8 provider pages
- **Country pages → regions:** Updated CountryInsuranceHub template to automatically add "More in [Region]" link to sidebar for all 183 country pages

#### Provider-Persona Pages Created
- Created `personas.ts` data file with 8 personas: digital-nomads, retirees, families, remote-workers, students, freelancers, seniors, entrepreneurs
- Created `providerPersonaMatrix.ts` with 40 provider-persona entries (5 providers × 8 personas)
- Created `ProviderPersonaPage.astro` template
- Created dynamic route `/providers/[provider]/for-[persona].astro`
- Generated **40 provider-persona pages** with ratings, benefits, drawbacks, and alternatives
- Example pages: `/providers/cigna-global/for-digital-nomads`, `/providers/safetywing/for-students`

#### Regional Hub Pages Created
- Created `regions.ts` data file with 9 regions and country mappings
- Created `RegionalHub.astro` template
- Generated 9 regional hub pages + 1 index page:
  - Southeast Asia, East Asia, Western Europe, Eastern Europe
  - Latin America, Caribbean, Middle East, Africa, Oceania
- Each page includes: highlights, featured countries, best for/considerations, all countries list

#### Country-Provider Pages Generated
- Created `CountryProviderPage.astro` template for programmatic generation
- Created dynamic route `[country]/insurance/[provider].astro`
- Generated **732 new country-provider pages** (162 programmatic countries × ~4 providers each)
- Combined with 168 existing handcrafted pages = **1,104 total country-provider pages**
- Site now has **1,184 total pages** (up from 452)

#### Countries Refined with Detailed Content
- **China** - Added United Family/Parkway hospital details, Z Visa specifics, Tier 1 vs Tier 2 city healthcare differences, language barrier guidance, air quality considerations, no digital nomad visa warning
- Verified all other Tier 2 countries (India, Turkey, Poland, Czech Republic, Hungary, Taiwan, Hong Kong, Chile, Peru, Morocco) already had detailed content from previous session

#### Provider Matrix Updates
- Updated China provider recommendations with specific hospital network info (United Family, Parkway Health direct billing)

---

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

## Completed - Tier 2 Country Refinement

All Tier 2 countries have been refined with detailed, researched content:
- [x] India - Apollo/Fortis hospital chains, local HMOs (HDFC ERGO, ICICI Lombard), Employment Visa specifics
- [x] China - United Family/Parkway hospitals, Tier 1 vs Tier 2 city differences, Z Visa, language barrier guidance
- [x] UAE - Already handcrafted (skip list)
- [x] Turkey - SGK public insurance, Acibadem/Memorial hospitals, residence permit requirements
- [x] Poland - NFZ wait times, Medicover/LuxMed subscriptions, EU vs non-EU differences
- [x] Czech Republic - Comprehensive vs Travel insurance distinction, VZP system, Prague clinics
- [x] Hungary - NEAK public system, White Card program, Budapest private options
- [x] Taiwan - NHI enrollment rules, 6-month waiting period, Gold Card benefits
- [x] Hong Kong - HA public wait times, private hospital costs, corporate coverage
- [x] Chile - FONASA/ISAPRE dual system, Clínica Alemana, Digital Nomad Visa
- [x] Peru - EsSalud system, Lima clinics, altitude coverage considerations
- [x] Morocco - AMO system, French-trained doctors, Casablanca/Rabat options

## Tier 3 Country Refinement Progress

**Batch 1 Complete (5 countries):** Austria, Belgium, Croatia, Israel, South Africa
**Batch 2 Complete (5 countries):** Sweden, Norway, Egypt, Uruguay, Kenya
**Batch 3 Complete (5 countries):** Denmark, Finland, Nepal, Dominican Republic, Bolivia
**Batch 4 Complete (5 countries):** Romania, Laos, Bangladesh, Mongolia, Guatemala
**Batch 5 Complete (1 country):** Fiji
**Batch 6 Complete (5 countries):** Malta, Cyprus, Qatar, Bahrain, Jamaica
**Batch 7 Complete (5 countries):** Luxembourg, Oman, Barbados, Bahamas, Kuwait
**Batch 8 Complete (5 countries):** Bulgaria, Serbia, Montenegro, Albania, North Macedonia
**Batch 9 Complete (5 countries):** Slovenia, Slovakia, Lithuania, Latvia, Estonia
**Batch 10 Complete (4 countries):** Iceland, Andorra, Monaco, Liechtenstein
**Batch 11 Complete (5 countries):** Nicaragua, Honduras, Paraguay, El Salvador, Belize

**Total Tier 3 refined: 50 countries** (plus Cambodia and Sri Lanka were already detailed)

### Countries Remaining for Refinement (~110)
Prioritize by traffic potential and expat interest:
- **High priority:** Tunisia, Ghana, Senegal, Rwanda, Nigeria (Africa growth markets)
- **Medium priority:** Saudi Arabia, Jordan, Lebanon (Middle East gaps)
- **Medium priority:** Kazakhstan, Uzbekistan (Central Asia)
- **Lower priority:** Pacific Islands, smaller Caribbean nations

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
| Handcrafted country-provider pages | 168 | Complete (21 countries × 8 providers) |
| Programmatic country-provider pages | 648 | Generated (162 countries × 4 providers) |
| **Country-persona pages** | **728** | **Complete (91 countries × 8 personas)** |
| **Condition × Country pages** | **270** | **NEW (10 conditions × 27 countries)** |
| **Country comparison pages** | **29** | **NEW (popular destination pairs)** |
| Regional hub pages | 10 | Complete (9 regions + index) |
| Provider-persona pages | 40 | Complete (5 providers × 8 personas) |
| Provider comparison pages | ~28 | Complete |
| **Problem/solution guides** | **6** | **NEW (with hero images)** |
| Constraint pages | 12 | Complete (8 original + 4 new) |
| Provider pages | 12 | Existing |

**Total pages:** ~2,280

---

## Next Steps

### Immediate Priorities
1. **More Programmatic Page Types** - Consider additional page combinations:
   - Provider × Condition pages (how specific insurers handle specific conditions)
   - Visa Type × Country pages (visa-specific insurance guidance)
   - Age/Life Stage pages (seniors, young families)

2. **Continue Country-Persona Expansion** - ~92 countries remaining
   - Batch 9: Middle East (Qatar, Bahrain, Kuwait, Oman, Saudi Arabia, Jordan)
   - Batch 10: Africa (Morocco, Tunisia, Ghana, Egypt, Kenya, Nigeria)
   - Target: 8-10 countries per batch

3. **Continue Tier 3 Country Refinement** - ~110 countries remaining with generic content
   - African growth markets (Tunisia, Ghana, Senegal, Rwanda, Nigeria)
   - Middle East gaps (Saudi Arabia, Jordan, Lebanon)
   - Central Asia (Kazakhstan, Uzbekistan)

### Medium-term Goals
4. **Expand Condition × Country Pages** - Add more countries to the condition matrix
   - Currently 27 countries × 10 conditions = 270 pages
   - Could expand to more destinations

5. **Expand Country Comparison Pages** - Add more country pairs
   - Currently 29 comparisons
   - Could add more based on search demand

6. **More Problem/Solution Guides** - Topics like:
   - "What happens if I get sick abroad without insurance"
   - "How to renew expat insurance"
   - "Insurance when working for foreign employer"

7. **Content Quality Audit** - Review and enhance existing handcrafted pages
   - Update outdated visa requirements
   - Add 2025/2026 cost data
   - Verify hospital and provider information

### Future Enhancements
8. **Internal Linking Audit** - Ensure new programmatic pages are well cross-linked
9. **SEO Optimization** - Add structured data, improve meta descriptions
10. **Hero Images** - Generate unique hero images for high-traffic programmatic pages

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

- **January 30, 2026 (Programmatic Expansion):** Added 4 new programmatic page systems: (1) Country vs Country comparisons (29 pages), (2) Condition × Country pages (270 pages), (3) Enhanced CountryProviderPage template (171 pages), (4) Problem/solution guides (6 pages with hero images). Total now ~2,280 pages.
- **January 30, 2026 (Batch 8):** Country-Persona Expansion Batch 8 (Europe Gaps: Luxembourg, Iceland, Andorra, Monaco, Liechtenstein, Cyprus, Malta, Finland, Romania, San Marino). 80 new pages, total now 728 (91 countries × 8 personas), 1,973 total pages.
- **January 30, 2026 (Batch 7):** Country-Persona Expansion Batch 7 (Asia-Pacific). 72 new pages.
- **January 30, 2026 (Batch 6):** Country-Persona Expansion Batch 6 (Central & South America). 56 new pages.
- **January 30, 2026 (Batch 5):** Country-Persona Expansion Batch 5 (Caribbean). 80 new pages.
- **January 30, 2026 (Batch 4):** Country-Persona Expansion Batch 4 (Balkans & Baltics). 80 new pages.
- **January 29, 2026 (Session 5):** Completed Tier 3 Batch 11 (5 Latin America countries: Nicaragua, Honduras, Paraguay, El Salvador, Belize). Total 50 Tier 3 countries refined, 63 countries total with detailed content.
- **January 29, 2026 (Session 4):** Completed Tier 3 Batch 10 (4 European microstates: Iceland, Andorra, Monaco, Liechtenstein). Total 45 Tier 3 countries refined, 58 countries total with detailed content.
- **January 29, 2026 (Session 3):** Completed Tier 3 Batch 9 (5 EU countries: Slovenia, Slovakia, Lithuania, Latvia, Estonia). Total 41 Tier 3 countries refined, 54 countries total with detailed content.
- **January 29, 2026 (Session 2):** Completed Tier 3 Batches 7-8 (10 countries: Luxembourg, Oman, Barbados, Bahamas, Kuwait, Bulgaria, Serbia, Montenegro, Albania, North Macedonia). Total 36 Tier 3 countries refined.
- **January 29, 2026 (Session 1):** Added 160 country-persona pages (20 new countries in batches 2-3), total now 360 (45 countries × 8 personas), 1,605 total pages. Completed Tier 3 Batches 1-6.
- **January 29, 2026:** Added 4 constraint pages + Tier 3 Batch 1-5 (21 countries refined)
- **January 28, 2026 (Evening):** Added 200 country-persona pages (25 countries × 8 personas), updated to 1,441 pages
- **January 28, 2026:** Added constraint pages (US coverage, maternity, no underwriting, mental-health, short-term, dental, over-70)
- **January 28, 2026:** Added provider-persona pages (40 pages)
- **January 27, 2026:** Initial progress log created after Tier 1 refinement complete
