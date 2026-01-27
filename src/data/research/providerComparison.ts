export const lastUpdated = 'January 2026';

export const providers = [
  {
    name: 'Cigna Global',
    slug: 'cigna-global',
    type: 'Premium',
    headquarters: 'USA',
    globalNetwork: 'Yes',
    directBilling: 'Extensive',
    maxAge: '84',
    lifetimeRenewal: 'Yes',
    preExisting: 'Moratorium or underwriting',
    mentalHealth: 'Limited',
    maternity: 'Yes (10-12 mo wait)',
    usaCoverage: 'Optional add-on',
    telemedicine: 'Yes',
    claimsProcess: 'App, online, email',
    avgRating: '4.2/5',
  },
  {
    name: 'Allianz Care',
    slug: 'allianz-care',
    type: 'Mid-Premium',
    headquarters: 'Germany',
    globalNetwork: 'Yes',
    directBilling: 'Good',
    maxAge: '74',
    lifetimeRenewal: 'Yes',
    preExisting: 'Moratorium or underwriting',
    mentalHealth: 'Limited',
    maternity: 'Yes (10-12 mo wait)',
    usaCoverage: 'Optional add-on',
    telemedicine: 'Yes',
    claimsProcess: 'App, online, email',
    avgRating: '4.0/5',
  },
  {
    name: 'BUPA Global',
    slug: 'bupa-global',
    type: 'Premium',
    headquarters: 'UK',
    globalNetwork: 'Yes',
    directBilling: 'Extensive',
    maxAge: '85',
    lifetimeRenewal: 'Yes',
    preExisting: 'Moratorium, MHD option',
    mentalHealth: 'Better than average',
    maternity: 'Yes (10-12 mo wait)',
    usaCoverage: 'Optional add-on',
    telemedicine: 'Yes',
    claimsProcess: 'App, online, phone',
    avgRating: '4.3/5',
  },
  {
    name: 'IMG Global',
    slug: 'img-global',
    type: 'Value',
    headquarters: 'USA',
    globalNetwork: 'Yes',
    directBilling: 'Moderate',
    maxAge: '74',
    lifetimeRenewal: 'Yes',
    preExisting: 'Underwriting only',
    mentalHealth: 'Limited',
    maternity: 'Yes (12 mo wait)',
    usaCoverage: 'Included (most plans)',
    telemedicine: 'Yes',
    claimsProcess: 'Online, email',
    avgRating: '3.8/5',
  },
  {
    name: 'Aetna International',
    slug: 'aetna-international',
    type: 'Premium',
    headquarters: 'USA (CVS)',
    globalNetwork: 'Yes',
    directBilling: 'Good',
    maxAge: '74',
    lifetimeRenewal: 'Yes',
    preExisting: 'Underwriting',
    mentalHealth: 'Moderate',
    maternity: 'Yes (10-12 mo wait)',
    usaCoverage: 'Included (most plans)',
    telemedicine: 'Yes',
    claimsProcess: 'App, online',
    avgRating: '4.0/5',
  },
  {
    name: 'GeoBlue',
    slug: 'geoblue',
    type: 'Mid-Premium',
    headquarters: 'USA (BCBS)',
    globalNetwork: 'Yes + BCBS',
    directBilling: 'Good',
    maxAge: '84',
    lifetimeRenewal: 'Yes',
    preExisting: 'Underwriting',
    mentalHealth: 'Moderate',
    maternity: 'Yes (12 mo wait)',
    usaCoverage: 'Included (BCBS network)',
    telemedicine: 'Yes',
    claimsProcess: 'App, online',
    avgRating: '4.1/5',
  },
  {
    name: 'AXA Global',
    slug: 'axa-global',
    type: 'Mid-Premium',
    headquarters: 'France',
    globalNetwork: 'Yes',
    directBilling: 'Good',
    maxAge: '74',
    lifetimeRenewal: 'Yes',
    preExisting: 'Moratorium or underwriting',
    mentalHealth: 'Limited',
    maternity: 'Yes (10-12 mo wait)',
    usaCoverage: 'Optional add-on',
    telemedicine: 'Yes',
    claimsProcess: 'Online, email',
    avgRating: '3.9/5',
  },
  {
    name: 'SafetyWing',
    slug: 'safetywing',
    type: 'Budget',
    headquarters: 'USA/Norway',
    globalNetwork: 'Limited',
    directBilling: 'Limited',
    maxAge: '69 (Nomad)',
    lifetimeRenewal: 'No',
    preExisting: 'Not covered',
    mentalHealth: 'Not covered',
    maternity: 'Not covered',
    usaCoverage: 'Limited (Nomad)',
    telemedicine: 'No',
    claimsProcess: 'Online only',
    avgRating: '3.5/5',
  },
];

export const pricingByAge = [
  { age: '30', cigna: '$180-280', allianz: '$150-240', bupa: '$170-260', img: '$120-200', aetna: '$160-250', geoblue: '$150-230', axa: '$140-220', safetywing: '$45-70' },
  { age: '40', cigna: '$240-360', allianz: '$200-320', bupa: '$230-350', img: '$160-280', aetna: '$220-340', geoblue: '$200-310', axa: '$190-300', safetywing: '$65-95' },
  { age: '50', cigna: '$320-480', allianz: '$270-420', bupa: '$300-460', img: '$220-360', aetna: '$290-440', geoblue: '$280-430', axa: '$260-400', safetywing: '$95-140' },
  { age: '55', cigna: '$380-550', allianz: '$320-480', bupa: '$360-520', img: '$260-400', aetna: '$340-500', geoblue: '$330-480', axa: '$300-460', safetywing: '$120-170' },
  { age: '60', cigna: '$480-700', allianz: '$400-600', bupa: '$450-680', img: '$340-520', aetna: '$420-640', geoblue: '$400-620', axa: '$380-580', safetywing: '$150-210' },
  { age: '65', cigna: '$600-900', allianz: '$500-780', bupa: '$580-880', img: '$450-700', aetna: '$540-820', geoblue: '$520-800', axa: '$480-750', safetywing: '$190-280' },
  { age: '70', cigna: '$780-1100', allianz: '$650-950', bupa: '$750-1050', img: '$600-900', aetna: '$700-1000', geoblue: '$680-980', axa: '$630-920', safetywing: 'N/A' },
];

export const coverageLimits = [
  { provider: 'Cigna Global', minimum: '$1M', maximum: 'Unlimited', deductibleRange: '$0-$10,000' },
  { provider: 'Allianz Care', minimum: '€1M', maximum: '€3M+', deductibleRange: '€0-€5,000' },
  { provider: 'BUPA Global', minimum: '$1.5M', maximum: 'Unlimited', deductibleRange: '$0-$10,000' },
  { provider: 'IMG Global', minimum: '$1M', maximum: '$8M', deductibleRange: '$250-$25,000' },
  { provider: 'Aetna International', minimum: '$1M', maximum: '$5M', deductibleRange: '$0-$10,000' },
  { provider: 'GeoBlue', minimum: '$1M', maximum: '$5M', deductibleRange: '$0-$5,000' },
  { provider: 'AXA Global', minimum: '€1M', maximum: '€3M+', deductibleRange: '€0-€5,000' },
  { provider: 'SafetyWing', minimum: '$250K', maximum: '$250K', deductibleRange: '$250 (fixed)' },
];

export const bestFor = [
  { provider: 'Cigna Global', bestFor: 'Comprehensive coverage seekers, US expats wanting US options, retirees prioritizing service', notIdealFor: 'Budget-conscious, younger nomads' },
  { provider: 'Allianz Care', bestFor: 'Value seekers wanting established insurer, European expats, long-term cost optimization', notIdealFor: 'Those needing extensive US coverage' },
  { provider: 'BUPA Global', bestFor: 'Service-focused expats, those with mental health needs, long-term residents', notIdealFor: 'Budget-conscious, digital nomads' },
  { provider: 'IMG Global', bestFor: 'Flexible coverage needs, budget optimization with high deductibles, US expats', notIdealFor: 'Those wanting premium service, complex pre-existing conditions' },
  { provider: 'Aetna International', bestFor: 'Americans wanting US integration, CVS prescription benefits, corporate continuity', notIdealFor: 'Non-Americans, budget seekers' },
  { provider: 'GeoBlue', bestFor: 'Americans who split time with US, those wanting BCBS network, US-based service', notIdealFor: 'Non-US citizens, those never returning to US' },
  { provider: 'AXA Global', bestFor: 'European expats, those comparing alternatives, worldwide excluding US coverage', notIdealFor: 'Americans wanting US network access' },
  { provider: 'SafetyWing', bestFor: 'Young healthy nomads, budget travel coverage, short-term stays', notIdealFor: 'Retirees, those with health conditions, long-term residents, families' },
];

export const methodology = `
## Methodology

**Data Collection**
Provider information was gathered from official insurer websites, policy documents, and verified third-party sources. Pricing represents typical ranges for healthy individuals with mid-tier coverage.

**Pricing Methodology**
- Prices shown are monthly estimates in USD for worldwide coverage excluding US (except where US is included by default)
- Ranges reflect different plan tiers and deductible options
- All prices are for individual coverage, not family plans
- Prices current as of January 2026; actual quotes may vary

**Rating Criteria**
Ratings are aggregated from multiple review platforms and weighted by recency and verification status. Factors include claims satisfaction, customer service responsiveness, and overall value perception.

**Limitations**
- Prices change frequently; always get a personalized quote
- Coverage details vary by specific plan; this is a general comparison
- Some providers offer plans not included in this comparison
- Individual circumstances significantly affect pricing and availability
`;
