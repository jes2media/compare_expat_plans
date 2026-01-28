/**
 * regions.ts
 *
 * Regional hub definitions for SEO landing pages.
 * Maps regions to countries and provides region-specific content.
 */

export interface Region {
  /** URL slug (e.g., "southeast-asia") */
  slug: string;
  /** Display name (e.g., "Southeast Asia") */
  name: string;
  /** Meta title for SEO */
  metaTitle: string;
  /** Meta description for SEO */
  metaDescription: string;
  /** Page headline */
  headline: string;
  /** Subheadline */
  subheadline: string;
  /** Hero image */
  heroImage: string;
  /** Country slugs in this region */
  countries: string[];
  /** Key highlights about the region (3-5 bullets) */
  highlights: string[];
  /** Who this region is best for */
  bestFor: string[];
  /** Common considerations/watch-outs */
  considerations: string[];
  /** Featured/top countries to highlight */
  featuredCountries: string[];
}

export const regions: Region[] = [
  // =====================
  // ASIA
  // =====================
  {
    slug: 'southeast-asia',
    name: 'Southeast Asia',
    metaTitle: 'Health Insurance for Expats in Southeast Asia (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Thailand, Vietnam, Indonesia, Philippines, Malaysia, and Singapore. Coverage options, costs, and regional considerations.',
    headline: 'Expat Health Insurance in Southeast Asia',
    subheadline: 'From Bangkok to Bali—find the right coverage for life in Southeast Asia\'s diverse healthcare landscape.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['thailand', 'vietnam', 'indonesia', 'philippines', 'malaysia', 'singapore', 'cambodia', 'laos', 'myanmar', 'brunei'],
    highlights: [
      'Healthcare quality varies dramatically—Singapore has world-class facilities while rural Cambodia has limited options.',
      'Thailand and Malaysia are medical tourism hubs with excellent private hospitals at affordable prices.',
      'Most countries don\'t require insurance for visas, but private coverage is essential for quality care.',
      'Digital nomad visas are available in Thailand, Indonesia (Bali), and Malaysia.',
      'Evacuation coverage is important—Singapore is the regional hub for complex medical cases.'
    ],
    bestFor: [
      'Digital nomads seeking affordable cost of living',
      'Retirees looking for warm weather and low costs',
      'Adventurers and travelers moving between countries',
      'Remote workers based in Bali, Bangkok, or Kuala Lumpur'
    ],
    considerations: [
      'Language barriers outside major cities—English is limited in Vietnam, Cambodia, Laos',
      'Air quality issues in some cities (Bangkok, Hanoi) during certain seasons',
      'Tropical diseases (dengue, malaria in some areas) require coverage',
      'Infrastructure varies—island locations may need evacuation coverage'
    ],
    featuredCountries: ['thailand', 'vietnam', 'indonesia', 'malaysia', 'singapore', 'philippines']
  },
  {
    slug: 'east-asia',
    name: 'East Asia',
    metaTitle: 'Health Insurance for Expats in East Asia (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Japan, South Korea, Taiwan, China, and Hong Kong. Mandatory insurance rules, costs, and coverage options.',
    headline: 'Expat Health Insurance in East Asia',
    subheadline: 'Navigate mandatory insurance systems in Japan and Korea, world-class care in Taiwan, and complex options in China.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['japan', 'south-korea', 'taiwan', 'china', 'hong-kong', 'macau', 'mongolia'],
    highlights: [
      'Japan, South Korea, and Taiwan have mandatory national insurance—expats must enroll.',
      'Healthcare quality is excellent throughout the region, rivaling or exceeding Western standards.',
      'China requires Mandarin for public healthcare—international hospitals are expensive but English-friendly.',
      'Hong Kong has extremely long public wait times—private insurance is essential.',
      'Costs vary: Taiwan\'s NHI is very affordable; Hong Kong private care is among Asia\'s most expensive.'
    ],
    bestFor: [
      'Professionals on work visas with employer coverage',
      'English teachers in Japan, Korea, and China',
      'Tech workers and entrepreneurs',
      'Families seeking excellent healthcare infrastructure'
    ],
    considerations: [
      'Language barriers—limited English outside international clinics (except Hong Kong, Singapore)',
      'Mandatory insurance enrollment in Japan/Korea/Taiwan—you pay regardless of private coverage',
      'China has no digital nomad visa—legal remote work is difficult',
      'High cost of living in Japan, Korea, Hong Kong, Singapore'
    ],
    featuredCountries: ['japan', 'south-korea', 'taiwan', 'china', 'hong-kong']
  },

  // =====================
  // EUROPE
  // =====================
  {
    slug: 'western-europe',
    name: 'Western Europe',
    metaTitle: 'Health Insurance for Expats in Western Europe (2025 Guide)',
    metaDescription: 'Compare expat health insurance for France, Germany, Spain, Italy, UK, and Netherlands. EU healthcare, visa requirements, and coverage options.',
    headline: 'Expat Health Insurance in Western Europe',
    subheadline: 'From Spain\'s sunshine to Germany\'s efficiency—understand healthcare systems and insurance options across Western Europe.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['spain', 'france', 'germany', 'italy', 'uk', 'netherlands', 'belgium', 'austria', 'switzerland', 'portugal', 'ireland', 'luxembourg'],
    highlights: [
      'Most countries have excellent public healthcare—but access rules vary for expats.',
      'Germany and Switzerland have mandatory insurance requirements—specific rules apply.',
      'Spain and Portugal offer Digital Nomad Visas with insurance requirements.',
      'UK post-Brexit: Non-EU citizens need visa; EU citizens have new requirements.',
      'Private insurance costs €100-400/month depending on country and coverage level.'
    ],
    bestFor: [
      'Digital nomads using Spain/Portugal nomad visas',
      'Retirees seeking quality healthcare and lifestyle',
      'Professionals relocating for work',
      'Families wanting excellent education and healthcare'
    ],
    considerations: [
      'High cost of living, especially in Switzerland, UK, Netherlands',
      'Bureaucracy varies—Germany and France can be complex for foreigners',
      'Language requirements for public healthcare in non-English countries',
      'Brexit impacts UK access for EU citizens and vice versa'
    ],
    featuredCountries: ['spain', 'portugal', 'france', 'germany', 'italy', 'netherlands']
  },
  {
    slug: 'eastern-europe',
    name: 'Eastern Europe',
    metaTitle: 'Health Insurance for Expats in Eastern Europe (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Poland, Czech Republic, Hungary, Romania, and Bulgaria. Affordable living, digital nomad options, and coverage requirements.',
    headline: 'Expat Health Insurance in Eastern Europe',
    subheadline: 'Affordable living meets growing digital nomad scenes—find coverage across Eastern Europe\'s emerging expat destinations.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['poland', 'czech-republic', 'hungary', 'romania', 'bulgaria', 'croatia', 'slovenia', 'slovakia', 'serbia', 'montenegro', 'albania', 'north-macedonia', 'lithuania', 'latvia', 'estonia'],
    highlights: [
      'Significantly lower cost of living than Western Europe—insurance costs €50-150/month.',
      'Public healthcare quality varies—private coverage recommended for English service.',
      'Czech Republic has strict "Comprehensive vs Travel" insurance requirements.',
      'Croatia, Serbia, and Montenegro offer digital nomad visas.',
      'EU members (Poland, Czech, Hungary, etc.) allow easier access for EU citizens.'
    ],
    bestFor: [
      'Budget-conscious digital nomads',
      'Remote workers seeking lower costs with EU access',
      'Retirees wanting affordable Europe',
      'Tech workers in growing hubs (Prague, Warsaw, Budapest)'
    ],
    considerations: [
      'English is less common outside capitals and tourist areas',
      'Public healthcare can have long wait times (especially Poland\'s NFZ)',
      'Some countries have complex insurance requirements for residence permits',
      'Winter can be harsh—consider if that affects your health needs'
    ],
    featuredCountries: ['poland', 'czech-republic', 'hungary', 'croatia', 'romania', 'estonia']
  },

  // =====================
  // AMERICAS
  // =====================
  {
    slug: 'latin-america',
    name: 'Latin America',
    metaTitle: 'Health Insurance for Expats in Latin America (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Mexico, Costa Rica, Panama, Colombia, and Ecuador. Retirement visas, healthcare costs, and coverage options.',
    headline: 'Expat Health Insurance in Latin America',
    subheadline: 'From Mexico\'s beaches to Colombia\'s cities—find coverage across Latin America\'s top expat destinations.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['mexico', 'costa-rica', 'panama', 'colombia', 'ecuador', 'peru', 'chile', 'argentina', 'brazil', 'uruguay', 'nicaragua', 'guatemala', 'belize', 'dominican-republic'],
    highlights: [
      'Mexico, Costa Rica, and Panama are top retirement destinations with established expat communities.',
      'Healthcare is affordable—private insurance costs $80-200/month in most countries.',
      'Mexico\'s IMSS offers public healthcare access to expats for ~$500/year.',
      'Colombia and Ecuador have growing digital nomad scenes with new visa options.',
      'Quality varies: Major cities have excellent private hospitals; rural areas are limited.'
    ],
    bestFor: [
      'Retirees seeking affordable retirement with good healthcare',
      'Digital nomads wanting timezone alignment with US/Canada',
      'Spanish learners immersing in Latin culture',
      'Those wanting proximity to the US for visits'
    ],
    considerations: [
      'Spanish is essential outside major tourist areas and expat hubs',
      'Security varies by country and region—research specific areas',
      'Hurricane/earthquake risk in some areas (Mexico, Central America)',
      'Infrastructure can be inconsistent outside major cities'
    ],
    featuredCountries: ['mexico', 'costa-rica', 'panama', 'colombia', 'ecuador', 'peru']
  },
  {
    slug: 'caribbean',
    name: 'Caribbean',
    metaTitle: 'Health Insurance for Expats in the Caribbean (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Caribbean islands. Bahamas, Barbados, Cayman Islands, Dominican Republic, and more. Island healthcare and evacuation coverage.',
    headline: 'Expat Health Insurance in the Caribbean',
    subheadline: 'Island life comes with unique healthcare considerations—understand coverage options across the Caribbean.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['bahamas', 'barbados', 'jamaica', 'trinidad-tobago', 'dominican-republic', 'puerto-rico', 'us-virgin-islands', 'cayman-islands', 'aruba', 'curacao', 'st-lucia', 'antigua-barbuda', 'grenada', 'st-kitts-nevis', 'turks-caicos', 'bermuda'],
    highlights: [
      'Medical evacuation coverage is CRITICAL—many islands have limited facilities.',
      'Miami and Puerto Rico are common evacuation destinations for serious cases.',
      'Several islands offer "digital nomad" or remote work visas (Barbados, Bahamas, Cayman).',
      'Healthcare quality varies dramatically by island—Cayman and Bahamas have better facilities.',
      'Costs are generally high due to limited facilities and imported medical supplies.'
    ],
    bestFor: [
      'Remote workers seeking island lifestyle',
      'High-net-worth individuals in tax-friendly jurisdictions',
      'Retirees wanting warm weather year-round',
      'Yacht owners and sailing enthusiasts'
    ],
    considerations: [
      'Hurricane season (June-November) is a real consideration',
      'Limited specialist care—complex cases require evacuation',
      'High cost of living on most islands',
      'Inter-island travel may be needed for medical care'
    ],
    featuredCountries: ['bahamas', 'barbados', 'cayman-islands', 'dominican-republic', 'aruba', 'bermuda']
  },

  // =====================
  // MIDDLE EAST
  // =====================
  {
    slug: 'middle-east',
    name: 'Middle East',
    metaTitle: 'Health Insurance for Expats in the Middle East (2025 Guide)',
    metaDescription: 'Compare expat health insurance for UAE, Saudi Arabia, Qatar, Israel, and Turkey. Mandatory coverage requirements, employer insurance, and options.',
    headline: 'Expat Health Insurance in the Middle East',
    subheadline: 'From Dubai\'s luxury healthcare to Turkey\'s affordable options—understand coverage across the Middle East.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['uae', 'saudi-arabia', 'qatar', 'bahrain', 'kuwait', 'oman', 'israel', 'jordan', 'lebanon', 'turkey', 'egypt'],
    highlights: [
      'UAE, Saudi Arabia, and Qatar REQUIRE employer-provided health insurance—it\'s mandatory.',
      'Dubai and Abu Dhabi have world-class private hospitals with high costs to match.',
      'Turkey offers excellent healthcare value—medical tourism destination with affordable private care.',
      'Israel has mandatory health insurance with four competing funds to choose from.',
      'Gulf states generally have excellent facilities in major cities.'
    ],
    bestFor: [
      'Professionals on corporate packages with included insurance',
      'High earners seeking tax-free income (UAE, Qatar, Saudi)',
      'Medical tourists seeking affordable procedures (Turkey)',
      'Retirees in Turkey seeking affordable Mediterranean lifestyle'
    ],
    considerations: [
      'Cultural differences and local laws vary significantly by country',
      'Summer heat is extreme in Gulf states—health implications for some',
      'Lebanon\'s economic crisis has affected healthcare access',
      'Political situations vary—check current conditions'
    ],
    featuredCountries: ['uae', 'turkey', 'saudi-arabia', 'qatar', 'israel', 'bahrain']
  },

  // =====================
  // AFRICA
  // =====================
  {
    slug: 'africa',
    name: 'Africa',
    metaTitle: 'Health Insurance for Expats in Africa (2025 Guide)',
    metaDescription: 'Compare expat health insurance for South Africa, Morocco, Kenya, and more. Healthcare infrastructure, evacuation coverage, and regional considerations.',
    headline: 'Expat Health Insurance in Africa',
    subheadline: 'From South Africa\'s private hospitals to Morocco\'s French-influenced healthcare—coverage across Africa\'s diverse landscape.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['south-africa', 'morocco', 'kenya', 'tanzania', 'ghana', 'nigeria', 'egypt', 'mauritius', 'rwanda', 'ethiopia', 'senegal', 'uganda', 'namibia', 'botswana', 'zambia', 'zimbabwe'],
    highlights: [
      'South Africa has excellent private healthcare—but public system is strained.',
      'Morocco has French-trained doctors and good private facilities in Casablanca/Rabat.',
      'Medical evacuation coverage is ESSENTIAL—many countries have limited facilities.',
      'Nairobi and Johannesburg are regional medical hubs for East/Southern Africa.',
      'Tropical disease coverage (malaria, etc.) is important in many countries.'
    ],
    bestFor: [
      'Development workers and NGO employees',
      'Business professionals in emerging markets',
      'Retirees in South Africa or Morocco',
      'Safari and travel enthusiasts'
    ],
    considerations: [
      'Healthcare infrastructure is limited outside major cities',
      'Evacuation to South Africa, Europe, or home country may be needed',
      'Political and security situations vary—research specific countries',
      'Tropical disease vaccinations and coverage are important'
    ],
    featuredCountries: ['south-africa', 'morocco', 'kenya', 'mauritius', 'ghana', 'tanzania']
  },

  // =====================
  // OCEANIA
  // =====================
  {
    slug: 'oceania',
    name: 'Oceania',
    metaTitle: 'Health Insurance for Expats in Oceania (2025 Guide)',
    metaDescription: 'Compare expat health insurance for Australia, New Zealand, and Pacific Islands. Medicare, ACC, and regional coverage options.',
    headline: 'Expat Health Insurance in Oceania',
    subheadline: 'From Australia\'s Medicare to New Zealand\'s ACC—understand coverage options across Oceania.',
    heroImage: '/images/countries/default-hero-bg.png',
    countries: ['australia', 'new-zealand', 'fiji', 'papua-new-guinea', 'vanuatu', 'samoa', 'tonga', 'new-caledonia', 'french-polynesia', 'guam'],
    highlights: [
      'Australia requires insurance for most visas—reciprocal agreements exist with some countries.',
      'New Zealand\'s ACC covers accident injuries for everyone—but not illness.',
      'Pacific islands have very limited healthcare—evacuation to Australia/NZ is common.',
      'Australia and NZ have excellent healthcare systems but can be expensive.',
      'Wait times for public healthcare can be long in both Australia and NZ.'
    ],
    bestFor: [
      'Professionals on skilled worker visas',
      'Working holiday makers',
      'Retirees in New Zealand (if qualifying)',
      'Pacific island workers and volunteers'
    ],
    considerations: [
      'Australia visa insurance requirements are specific—check your visa type',
      'New Zealand\'s ACC doesn\'t cover illness—private insurance recommended',
      'Pacific islands require evacuation coverage to Australia/NZ',
      'Cost of living is high in Australia and NZ'
    ],
    featuredCountries: ['australia', 'new-zealand', 'fiji']
  }
];

// Helper functions
export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug);
}

export function getAllRegionSlugs(): string[] {
  return regions.map(r => r.slug);
}

export function getRegionForCountry(countrySlug: string): Region | undefined {
  return regions.find(r => r.countries.includes(countrySlug));
}

export function getCountriesInRegion(regionSlug: string): string[] {
  const region = getRegionBySlug(regionSlug);
  return region?.countries || [];
}
