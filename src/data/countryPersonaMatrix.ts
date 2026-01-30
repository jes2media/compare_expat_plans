/**
 * countryPersonaMatrix.ts
 *
 * Data for programmatic country × persona page generation.
 * Each entry provides persona-specific content for a country.
 */

export interface CountryPersonaEntry {
  countrySlug: string;
  personaSlug: string;
  /** Key considerations for this persona in this country */
  keyConsiderations: string[];
  /** Recommended providers in order of fit for this persona */
  recommendedProviders: string[];
  /** Visa notes specific to this persona */
  visaNotes: string;
  /** Healthcare access notes for this persona */
  healthcareNotes: string;
  /** Cost notes for this persona */
  costNotes: string;
}

// Top 91 countries for page generation
const targetCountries = [
  'spain', 'portugal', 'mexico', 'thailand', 'costa-rica',
  'france', 'italy', 'germany', 'uk', 'uae',
  'singapore', 'indonesia', 'vietnam', 'australia', 'canada',
  'netherlands', 'panama', 'colombia', 'argentina', 'japan',
  'ecuador', 'south-korea', 'brazil', 'malaysia', 'philippines',
  // Batch 2: 10 additional countries
  'new-zealand', 'ireland', 'greece', 'switzerland', 'poland',
  'czech-republic', 'croatia', 'taiwan', 'chile', 'india',
  // Batch 3: 10 more countries
  'austria', 'belgium', 'sweden', 'norway', 'turkey',
  'hungary', 'hong-kong', 'south-africa', 'denmark', 'peru',
  // Batch 4: Balkans & Baltics (10 countries)
  'estonia', 'latvia', 'lithuania', 'bulgaria', 'serbia',
  'montenegro', 'albania', 'north-macedonia', 'slovenia', 'slovakia',
  // Batch 5: Caribbean (10 countries)
  'jamaica', 'barbados', 'bahamas', 'dominican-republic', 'belize',
  'trinidad-tobago', 'cayman-islands', 'aruba', 'curacao', 'bermuda',
  // Batch 6: Central & South America (7 countries)
  'nicaragua', 'honduras', 'el-salvador', 'guatemala', 'uruguay', 'paraguay', 'bolivia',
  // Batch 7: Asia-Pacific (9 countries)
  'cambodia', 'laos', 'myanmar', 'nepal', 'sri-lanka', 'bangladesh', 'pakistan', 'mongolia', 'brunei',
  // Batch 8: Europe Gaps (10 countries)
  'luxembourg', 'iceland', 'andorra', 'monaco', 'liechtenstein', 'cyprus', 'malta', 'finland', 'romania', 'san-marino'
];

// All 8 personas
const targetPersonas = [
  'digital-nomads', 'retirees', 'families', 'remote-workers',
  'students', 'freelancers', 'seniors', 'entrepreneurs'
];

// Country-specific data for generating entries
const countryData: Record<string, {
  visaTypes: Record<string, string>;
  healthcareHighlights: string;
  costLevel: 'low' | 'medium' | 'high';
  nomadFriendly: boolean;
  retireeFriendly: boolean;
  familyFriendly: boolean;
  topProviders: string[];
}> = {
  'spain': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €2,200/month income and health insurance with full coverage in Spain.',
      'retirees': 'Non-Lucrative Visa requires proof of income (~€2,400/month) and comprehensive health insurance.',
      'families': 'Family reunification possible on most visa types. Children can attend public schools.',
      'remote-workers': 'Digital Nomad Visa allows remote work for non-Spanish employers.',
      'students': 'Student visa allows part-time work (20 hours/week) and requires health insurance.',
      'freelancers': 'Autónomo (self-employed) visa requires registering as self-employed in Spain.',
      'seniors': 'Non-Lucrative Visa popular for retirees, requires comprehensive coverage.',
      'entrepreneurs': 'Entrepreneur Visa available for innovative business projects.'
    },
    healthcareHighlights: 'Excellent public healthcare (SNS) available to residents. Private care affordable and high quality.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'sanitas', 'bupa-global']
  },
  'portugal': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €3,040/month income (4x minimum wage) and health insurance.',
      'retirees': 'D7 Passive Income Visa requires stable income and NHR tax regime offers benefits.',
      'families': 'Family members can join on D7 visa. Excellent public schools in Lisbon/Porto.',
      'remote-workers': 'Digital Nomad Visa designed for remote workers employed abroad.',
      'students': 'Student visa available with proof of enrollment and health coverage.',
      'freelancers': 'D7 visa works for freelancers with proof of consistent income.',
      'seniors': 'D7 visa popular with retirees. NHR tax regime can reduce pension taxes.',
      'entrepreneurs': 'Startup Visa available for tech entrepreneurs with innovative projects.'
    },
    healthcareHighlights: 'SNS public healthcare good but wait times long. Private care affordable in Lisbon/Porto.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'multicare']
  },
  'mexico': {
    visaTypes: {
      'digital-nomads': 'No dedicated nomad visa, but Temporary Resident Visa works for 1-4 year stays.',
      'retirees': 'Temporary/Permanent Resident visas available. No mandatory insurance requirement.',
      'families': 'Family-friendly visa process. Children can attend private bilingual schools.',
      'remote-workers': 'Tourist visa (180 days) commonly used, or Temporary Resident for longer.',
      'students': 'Student visa available. Many study Spanish while on tourist visa.',
      'freelancers': 'Temporary Resident visa allows freelance work for foreign clients.',
      'seniors': 'Permanent Resident visa available at 65+. No insurance requirement.',
      'entrepreneurs': 'Business visas available for those starting Mexican companies.'
    },
    healthcareHighlights: 'Excellent private healthcare at 30-50% of US costs. IMSS public system available to residents.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'gnp-seguros']
  },
  'thailand': {
    visaTypes: {
      'digital-nomads': 'LTR visa (Work-from-Thailand) requires $80k/year income. Tourist visa commonly used.',
      'retirees': 'O-A/O-X retirement visas require approved health insurance from TGIA list.',
      'families': 'Dependent visas available. International schools excellent but expensive.',
      'remote-workers': 'LTR visa for qualifying remote workers. Most use tourist visas.',
      'students': 'ED visa for Thai language or Muay Thai study allows 1-year stays.',
      'freelancers': 'No dedicated visa. Most freelancers use tourist visas or Elite visa.',
      'seniors': 'O-A visa requires TGIA-approved insurance. Elite visa alternative for those who can afford it.',
      'entrepreneurs': 'Business visa requires Thai company setup with Thai shareholders.'
    },
    healthcareHighlights: 'World-class private hospitals (Bumrungrad, Bangkok Hospital). Medical tourism hub.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['pacific-cross', 'cigna-global', 'allianz-care', 'bupa-global']
  },
  'costa-rica': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires $3,000/month income or $60,000 in bank.',
      'retirees': 'Pensionado visa requires $1,000/month pension. Popular retirement destination.',
      'families': 'Rentista visa works for families. Bilingual schools available.',
      'remote-workers': 'Digital Nomad Visa allows 1-year stay with extension option.',
      'students': 'Student visa available with enrollment proof.',
      'freelancers': 'Rentista visa requires $2,500/month or $60,000 deposit.',
      'seniors': 'Pensionado visa at $1,000/month is one of lowest requirements in region.',
      'entrepreneurs': 'Investor visa requires $150,000 investment in approved sectors.'
    },
    healthcareHighlights: 'CAJA public healthcare covers residents. Private hospitals in San José excellent.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'ins-costa-rica']
  },
  'france': {
    visaTypes: {
      'digital-nomads': 'No dedicated visa. Long-stay visa with "visitor" purpose possible but complex.',
      'retirees': 'Visitor long-stay visa requires proof of funds and private health insurance.',
      'families': 'Family reunification available. Excellent public schools (free).',
      'remote-workers': 'No specific visa. Some use visitor visa or intra-company transfers.',
      'students': 'Student visa straightforward. French universities affordable.',
      'freelancers': 'Auto-entrepreneur visa allows self-employment in France.',
      'seniors': 'Visitor visa for retirees with proof of income and health coverage.',
      'entrepreneurs': 'Talent Passport visa for business creators with innovative projects.'
    },
    healthcareHighlights: 'One of world\'s best healthcare systems. PUMA covers residents after 3 months.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'italy': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa launching 2024 requires €28,000/year income.',
      'retirees': 'Elective Residence Visa requires proof of passive income (~€31,000/year).',
      'families': 'Family members can join on most visa types. Public schools free.',
      'remote-workers': 'Digital Nomad Visa for non-EU remote workers.',
      'students': 'Student visa available. Italian universities affordable for EU/non-EU.',
      'freelancers': 'Self-employment visa possible but bureaucratic.',
      'seniors': 'Elective Residence popular with retirees. Flat tax option for pensioners.',
      'entrepreneurs': 'Startup Visa for innovative entrepreneurs.'
    },
    healthcareHighlights: 'SSN public healthcare excellent. Private care also affordable.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'germany': {
    visaTypes: {
      'digital-nomads': 'Freelance Visa available but requires proof of clients in Germany.',
      'retirees': 'No specific retirement visa. Residence permit requires health insurance.',
      'families': 'Family reunification straightforward. Excellent free public schools.',
      'remote-workers': 'No specific visa for remote workers employed abroad.',
      'students': 'Student visa widely used. Public universities nearly free.',
      'freelancers': 'Freelance Visa (Freiberufler) for artists, writers, consultants.',
      'seniors': 'Residence permit possible with proof of funds and health insurance.',
      'entrepreneurs': 'Entrepreneur Visa for those creating jobs in Germany.'
    },
    healthcareHighlights: 'Outstanding healthcare system. Private insurance popular for higher earners.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'tk-germany']
  },
  'uk': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Standard Visitor visa max 6 months, no work.',
      'retirees': 'No retirement visa. High-value investor visas available for wealthy.',
      'families': 'Family visas strict. NHS available to visa holders.',
      'remote-workers': 'No specific visa for remote workers.',
      'students': 'Student visa allows part-time work. NHS access included.',
      'freelancers': 'Self-Sponsored Worker visa possible for high earners.',
      'seniors': 'No retirement visa category. Limited options for non-wealthy.',
      'entrepreneurs': 'Innovator Founder visa for those starting innovative businesses.'
    },
    healthcareHighlights: 'NHS free at point of use for residents. Private care for shorter waits.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['bupa-global', 'cigna-global', 'allianz-care', 'axa-global']
  },
  'uae': {
    visaTypes: {
      'digital-nomads': 'Remote Work Visa (Dubai) requires $5,000/month income proof.',
      'retirees': 'Retirement Visa requires AED 1M savings or AED 15k/month income.',
      'families': 'Family visas tied to sponsor. International schools excellent.',
      'remote-workers': 'Dubai Remote Work Visa for 1 year, renewable.',
      'students': 'Student visa tied to institution enrollment.',
      'freelancers': 'Freelance Visa through free zones like Dubai Media City.',
      'seniors': 'Retirement Visa requires significant savings or income.',
      'entrepreneurs': 'Free zone company setup popular. 100% foreign ownership.'
    },
    healthcareHighlights: 'Mandatory health insurance (DHA in Dubai). World-class private facilities.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'daman']
  },
  'singapore': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Business visas require local company.',
      'retirees': 'No retirement visa. Global Investor Programme for ultra-wealthy.',
      'families': 'Dependent Pass for family of EP holders. Schools competitive.',
      'remote-workers': 'No remote work visa category.',
      'students': 'Student Pass for enrolled students.',
      'freelancers': 'EntrePass for entrepreneurs. High bar for approval.',
      'seniors': 'No senior-specific visa. Limited options.',
      'entrepreneurs': 'EntrePass for innovative founders. Tech Visa for tech companies.'
    },
    healthcareHighlights: 'World-class healthcare. Mandatory MediShield for residents, but expats need private.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'axa-global']
  },
  'indonesia': {
    visaTypes: {
      'digital-nomads': 'Second Home Visa or B211A business visa. Remote work visa in development.',
      'retirees': 'Retirement KITAS for 55+. Requires $1,500/month proof.',
      'families': 'Dependent visas available. International schools in Jakarta/Bali.',
      'remote-workers': 'B211A social/cultural visa commonly used for longer stays.',
      'students': 'Student KITAS for enrolled students.',
      'freelancers': 'No dedicated visa. Second Home or business visa used.',
      'seniors': 'Retirement KITAS requires proof of pension/income.',
      'entrepreneurs': 'Investor KITAS requires significant investment.'
    },
    healthcareHighlights: 'Private hospitals in Jakarta/Bali good. Insurance essential outside major cities.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'vietnam': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Business visa or 90-day tourist visa with extensions.',
      'retirees': 'No retirement visa. 3-month tourist visas with extensions used.',
      'families': 'Dependent visas for family of work permit holders.',
      'remote-workers': 'No specific visa. Tourist and business visas used.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'No freelance visa. Business visa with sponsor possible.',
      'seniors': 'No retirement visa. Tourist visa extensions common.',
      'entrepreneurs': 'Investment visa for those establishing Vietnamese companies.'
    },
    healthcareHighlights: 'Good private hospitals in HCMC/Hanoi. Insurance essential. Bangkok evacuation possible.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'pacific-cross', 'bupa-global']
  },
  'australia': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Work and Holiday for some nationalities.',
      'retirees': 'Retirement Visa (410) closed. Investor visas for wealthy.',
      'families': 'Partner and family visas available but strict requirements.',
      'remote-workers': 'No remote work visa. Work and Holiday for under 31.',
      'students': 'Student visa allows 48 hours work/fortnight. OSHC mandatory.',
      'freelancers': 'Skilled visas require specific occupations.',
      'seniors': 'Parent visas available but very long wait times (decades).',
      'entrepreneurs': 'Business Innovation and Investment Visa for qualified applicants.'
    },
    healthcareHighlights: 'Medicare for residents. Reciprocal agreements with UK, NZ. Private common.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['bupa-global', 'cigna-global', 'allianz-care', 'medibank']
  },
  'canada': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 6-month visitor stays possible.',
      'retirees': 'No retirement visa. Super Visa for parents of citizens.',
      'families': 'Family sponsorship for PR holders. Public healthcare included.',
      'remote-workers': 'No remote work visa. Working Holiday for some nationalities.',
      'students': 'Study permit allows 20 hours work. Provincial healthcare varies.',
      'freelancers': 'Self-employed visa for arts/sports. Difficult for others.',
      'seniors': 'Super Visa for parents visiting children.',
      'entrepreneurs': 'Startup Visa for tech entrepreneurs with backing.'
    },
    healthcareHighlights: 'Provincial healthcare for residents. Private for visitors/new arrivals.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'manulife']
  },
  'netherlands': {
    visaTypes: {
      'digital-nomads': 'DAFT treaty for Americans. Self-employment visa possible.',
      'retirees': 'No specific retirement visa. Residence possible with funds.',
      'families': 'Family reunification for visa holders. Great public schools.',
      'remote-workers': 'No remote work visa. DAFT for US citizens.',
      'students': 'Student visa straightforward. English programs common.',
      'freelancers': 'Self-employment visa (ZZP) possible. DAFT for Americans.',
      'seniors': 'No retirement visa. Residence permit with funds possible.',
      'entrepreneurs': 'Startup Visa for innovative entrepreneurs.'
    },
    healthcareHighlights: 'Mandatory basic health insurance (basisverzekering). Private insurers compete.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'zilveren-kruis']
  },
  'panama': {
    visaTypes: {
      'digital-nomads': 'Short Stay Visa (Remote Worker) requires $3,000/month income.',
      'retirees': 'Pensionado Visa with $1,000/month pension. Best discounts in Latin America.',
      'families': 'Dependent visas available. Bilingual schools in Panama City.',
      'remote-workers': 'Remote Worker Visa for 9 months, renewable.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Friendly Nations Visa for 50 countries. Easy residency.',
      'seniors': 'Pensionado program popular. 25% off most services.',
      'entrepreneurs': 'Investor Visa with $160k+ investment.'
    },
    healthcareHighlights: 'Good private hospitals in Panama City. Johns Hopkins affiliate. Affordable.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'colombia': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires $3 million COP/month (~$750).',
      'retirees': 'Retirement Visa with $3 million COP/month pension.',
      'families': 'Family visas for dependents. Good bilingual schools in Bogotá/Medellín.',
      'remote-workers': 'Digital Nomad Visa covers remote workers.',
      'students': 'Student Visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa works for freelancers.',
      'seniors': 'Retirement Visa with low income threshold.',
      'entrepreneurs': 'Business Visa for establishing Colombian companies.'
    },
    healthcareHighlights: 'Excellent private healthcare in major cities. Very affordable. EPS system for residents.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'argentina': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires $1,500/month income proof.',
      'retirees': 'Rentista Visa with $30,000 proof or income source.',
      'families': 'Family visas available. Strong public education system.',
      'remote-workers': 'Digital Nomad Visa covers remote employees.',
      'students': 'Student Visa for university enrollment.',
      'freelancers': 'Digital Nomad or Rentista visa options.',
      'seniors': 'Rentista Visa accessible for retirees.',
      'entrepreneurs': 'Investor Visa for business creation.'
    },
    healthcareHighlights: 'Free public healthcare for all. Excellent private care in Buenos Aires. Very affordable.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'allianz-care', 'bupa-global']
  },
  'japan': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 90-day tourist stays only.',
      'retirees': 'No retirement visa. Long-stay difficult without work/spouse.',
      'families': 'Dependent visas for family of work visa holders.',
      'remote-workers': 'No remote work visa category.',
      'students': 'Student visa for language schools or universities.',
      'freelancers': 'Highly Skilled Professional Visa for qualified freelancers.',
      'seniors': 'No retirement visa. Very limited options.',
      'entrepreneurs': 'Business Manager Visa requires ¥5M investment.'
    },
    healthcareHighlights: 'Excellent healthcare. National Health Insurance mandatory for residents. Private for visitors.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'ecuador': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires $1,350/month income.',
      'retirees': 'Pensioner Visa with $1,400/month pension. Easy process.',
      'families': 'Dependent visas included. Good international schools in Quito/Cuenca.',
      'remote-workers': 'Digital Nomad Visa for remote employees.',
      'students': 'Student Visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa works for freelancers.',
      'seniors': 'Pensioner Visa popular. Senior discounts on many services.',
      'entrepreneurs': 'Investor Visa with $25,000 minimum investment.'
    },
    healthcareHighlights: 'Good private hospitals in major cities. Very affordable. IESS public system for residents.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'south-korea': {
    visaTypes: {
      'digital-nomads': 'Workcation Visa (new) for remote workers. 1-2 years possible.',
      'retirees': 'No retirement visa. Long-stay difficult.',
      'families': 'F-3 Dependent visa for family of work visa holders.',
      'remote-workers': 'Workcation Visa designed for remote workers.',
      'students': 'D-2 Student Visa. Part-time work allowed.',
      'freelancers': 'D-10 Job Seeker visa. Limited freelance options.',
      'seniors': 'No retirement visa category.',
      'entrepreneurs': 'D-8 Corporate Investment visa for business owners.'
    },
    healthcareHighlights: 'NHIS mandatory for long-term residents. World-class hospitals. Affordable private care.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'brazil': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa (VITEM XIV) requires $1,500/month income.',
      'retirees': 'Retirement Visa with $2,000/month pension.',
      'families': 'Dependent visas available. Good international schools in São Paulo.',
      'remote-workers': 'Digital Nomad Visa covers remote employees.',
      'students': 'Student Visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa works for freelancers.',
      'seniors': 'Retirement Visa with pension proof.',
      'entrepreneurs': 'Investor Visa with R$500,000 investment.'
    },
    healthcareHighlights: 'SUS public healthcare free for all. Excellent private hospitals. Local plans (planos de saúde) affordable.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'sulamerica']
  },
  'malaysia': {
    visaTypes: {
      'digital-nomads': 'DE Rantau (Digital Nomad) Pass requires $24,000/year income.',
      'retirees': 'MM2H requires financial qualifications. Insurance mandatory for 35+.',
      'families': 'MM2H includes dependents. International schools affordable.',
      'remote-workers': 'DE Rantau for freelancers and remote workers.',
      'students': 'Student Pass for enrolled students.',
      'freelancers': 'DE Rantau covers freelancers meeting income requirement.',
      'seniors': 'MM2H for retirees. Insurance mandatory.',
      'entrepreneurs': 'Tech Entrepreneur Programme for startups.'
    },
    healthcareHighlights: 'Excellent private hospitals (Prince Court, Gleneagles). Very affordable. Medical tourism hub.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'philippines': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa extensions up to 3 years possible.',
      'retirees': 'SRRV Retirement Visa with $10,000-$50,000 deposit.',
      'families': 'SRRV includes dependents. International schools in Manila.',
      'remote-workers': 'No specific visa. Tourist visa extensions common.',
      'students': 'Student Visa for enrolled students.',
      'freelancers': 'No dedicated visa. Tourist visa with extensions.',
      'seniors': 'SRRV Smile/Classic programs. Age 35+ eligible.',
      'entrepreneurs': 'Investor Visa with $75,000 investment.'
    },
    healthcareHighlights: 'Good private hospitals in Metro Manila. Big gap between city and provinces. Singapore evacuation common.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'pacific-cross', 'bupa-global']
  },
  // Batch 2: 10 additional countries
  'new-zealand': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Working Holiday Visa for under 35 from eligible countries.',
      'retirees': 'Investor Visa requires NZ$3M+ investment. No pension visa.',
      'families': 'Skilled Migrant or Partner visas for families. Excellent public schools.',
      'remote-workers': 'Visitor visa up to 9 months. No remote work visa.',
      'students': 'Student Visa with part-time work rights.',
      'freelancers': 'Essential Skills Visa for specialized freelancers.',
      'seniors': 'Investor Visa only option. High financial bar.',
      'entrepreneurs': 'Entrepreneur Work Visa requires approved business plan.'
    },
    healthcareHighlights: 'ACC covers accident injuries free. Public healthcare good but wait times. Southern Cross popular private option.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'southern-cross', 'allianz-care']
  },
  'ireland': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Stamp 0 for self-sufficient individuals.',
      'retirees': 'Stamp 0 requires €50,000/year income. Private insurance mandatory.',
      'families': 'Family reunification for visa holders. Excellent English schools.',
      'remote-workers': 'Stamp 1G for spouses. Otherwise limited options.',
      'students': 'Stamp 2 Student Visa with 20-hour work rights.',
      'freelancers': 'Self-employed Stamp 1 difficult without Irish clients.',
      'seniors': 'Stamp 0 requires private insurance and financial proof.',
      'entrepreneurs': 'Start-up Entrepreneur Programme (STEP) for innovative businesses.'
    },
    healthcareHighlights: 'HSE public system has long waits. VHI/Laya popular private options. 20% tax relief on premiums.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'vhi', 'laya-healthcare', 'bupa-global']
  },
  'greece': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €3,500/month income. 2-year duration.',
      'retirees': 'Type D Visa for financially independent. Residency permit renewable.',
      'families': 'Family members included on visas. International schools in Athens.',
      'remote-workers': 'Digital Nomad Visa for non-Greek employers.',
      'students': 'Student Visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa covers freelancers meeting income threshold.',
      'seniors': 'Type D Visa popular. Low cost of living attractive.',
      'entrepreneurs': 'Business Visa requires €60,000 investment.'
    },
    healthcareHighlights: 'EOPYY public system functional. Private care affordable in Athens/Thessaloniki. Island care limited.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'interamerican']
  },
  'switzerland': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Very restrictive immigration.',
      'retirees': 'Residence permit for wealthy individuals in specific cantons.',
      'families': 'Family reunification for work permit holders.',
      'remote-workers': 'No remote work visa. Work permits for Swiss employers only.',
      'students': 'Student permit for enrolled students.',
      'freelancers': 'Self-employment permit requires Swiss client base.',
      'seniors': 'Wealthy retiree permits in select cantons (Zug, Schwyz).',
      'entrepreneurs': 'Must create jobs for Swiss residents.'
    },
    healthcareHighlights: 'LAMal mandatory insurance within 3 months. High quality but expensive. Franchise (deductible) affects costs.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'swica', 'css', 'helsana']
  },
  'poland': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Temporary residence permit for various purposes.',
      'retirees': 'Temporary residence for financially independent.',
      'families': 'Family reunification available. Good international schools in Warsaw.',
      'remote-workers': 'Temporary residence possible with income proof.',
      'students': 'Student Visa with limited work rights.',
      'freelancers': 'Self-employment residence permit available.',
      'seniors': 'Temporary residence with financial proof.',
      'entrepreneurs': 'Business activity residence permit available.'
    },
    healthcareHighlights: 'NFZ public system has long waits. Medicover/LuxMed private subscriptions popular. Very affordable private care.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'medicover', 'luxmed']
  },
  'czech-republic': {
    visaTypes: {
      'digital-nomads': 'Zivno Visa (freelance) popular with digital nomads.',
      'retirees': 'Long-term residence for financially independent.',
      'families': 'Family reunification for residence holders. Good schools in Prague.',
      'remote-workers': 'Zivno visa allows remote work with trade license.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Zivno (trade license) visa is the standard route.',
      'seniors': 'Long-term residence with financial proof.',
      'entrepreneurs': 'Business visa requires company establishment.'
    },
    healthcareHighlights: 'VZP public system for residents. Comprehensive insurance required for visa. Canadian Medical popular with expats.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'pvzp', 'uniqa']
  },
  'croatia': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €2,539/month income. 1 year, non-renewable.',
      'retirees': 'Temporary stay for pensioners with income proof.',
      'families': 'Family members included on visas. Schools in Zagreb/Split.',
      'remote-workers': 'Digital Nomad Visa for non-Croatian employers.',
      'students': 'Student residence permit available.',
      'freelancers': 'Digital Nomad Visa covers freelancers.',
      'seniors': 'Temporary stay permit for retirees.',
      'entrepreneurs': 'Business visa requires company establishment.'
    },
    healthcareHighlights: 'HZZO public system excludes digital nomads. Private insurance mandatory for DN visa. Zagreb has best care.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'croatia-osiguranje']
  },
  'taiwan': {
    visaTypes: {
      'digital-nomads': 'Gold Card for professionals. Employment Gold Card (3 years).',
      'retirees': 'Resident visa for those with Taiwan connections. Limited options otherwise.',
      'families': 'Dependent visas for Gold Card holders.',
      'remote-workers': 'Gold Card allows remote work for foreign companies.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Gold Card for high-earning freelancers.',
      'seniors': 'Gold Card or investment-based residence.',
      'entrepreneurs': 'Entrepreneur visa for startup founders.'
    },
    healthcareHighlights: 'NHI world-class and affordable after 6-month wait. Private hospitals excellent. Very accessible.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global']
  },
  'chile': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa (new) for remote workers.',
      'retirees': 'Rentista Visa with stable income proof.',
      'families': 'Family visas included. Good international schools in Santiago.',
      'remote-workers': 'Digital Nomad Visa for non-Chilean employers.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista or Digital Nomad Visa options.',
      'seniors': 'Rentista Visa popular with retirees.',
      'entrepreneurs': 'Investor visa with business plan approval.'
    },
    healthcareHighlights: 'FONASA public or ISAPRE private. Clínica Alemana and Clínica Las Condes are top hospitals. Affordable private care.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'colmena']
  },
  'india': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Business or Employment visa required.',
      'retirees': 'No retirement visa. Entry visa for Indian-origin persons.',
      'families': 'Dependent visas for Employment visa holders.',
      'remote-workers': 'Business visa with conditions. Gray area for remote work.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa for consulting/freelance with Indian clients.',
      'seniors': 'PIO/OCI cards for Indian-origin seniors.',
      'entrepreneurs': 'Business visa for establishing Indian operations.'
    },
    healthcareHighlights: 'Apollo and Fortis hospital chains excellent. Huge gap urban vs rural. Very affordable private care in major cities.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'hdfc-ergo']
  },
  // Batch 3: 10 more countries
  'austria': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Red-White-Red Card for skilled workers.',
      'retirees': 'Private residence permit requires €2,610/month income.',
      'families': 'Family reunification for permit holders. Excellent schools.',
      'remote-workers': 'No specific visa. Self-employment permit possible.',
      'students': 'Student residence permit with work rights.',
      'freelancers': 'Self-employment (Neue Selbständige) permit available.',
      'seniors': 'Private residence permit with income/wealth proof.',
      'entrepreneurs': 'Red-White-Red Card for business founders.'
    },
    healthcareHighlights: 'ÖGK mandatory enrollment for workers. SVS for self-employed. Excellent public system. Zusatzversicherung for private rooms.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'uniqa', 'wiener-staedtische']
  },
  'belgium': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Professional Card for self-employed.',
      'retirees': 'Long-stay visa D for financially independent.',
      'families': 'Family reunification available. Excellent international schools.',
      'remote-workers': 'Professional Card if working for Belgian clients.',
      'students': 'Student visa with limited work rights.',
      'freelancers': 'Professional Card required for self-employment.',
      'seniors': 'Long-stay visa with income proof.',
      'entrepreneurs': 'Professional Card for business establishment.'
    },
    healthcareHighlights: 'Mutuelle membership mandatory. Hospitalization insurance essential. INAMI/RIZIV reimbursement system.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'dkv', 'ag-insurance']
  },
  'sweden': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Work permit requires Swedish employer.',
      'retirees': 'Residence permit for self-sufficient with comprehensive insurance.',
      'families': 'Family reunification for permit holders. Free public schools.',
      'remote-workers': 'Self-employed permit difficult. Mostly for EU citizens.',
      'students': 'Student residence permit available.',
      'freelancers': 'Self-employment permit requires Swedish client base.',
      'seniors': 'Residence permit with insurance and income proof.',
      'entrepreneurs': 'Self-employment permit for business founders.'
    },
    healthcareHighlights: 'Personnummer required for public healthcare. Regional system (21 regions). Frikort cost cap. Private options (Capio, Aleris).',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'euro-accident']
  },
  'norway': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Skilled Worker visa requires NOK 479,000/year.',
      'retirees': 'No retirement visa. Very limited non-work options.',
      'families': 'Family immigration for permit holders.',
      'remote-workers': 'No remote work visa. Work permit needed.',
      'students': 'Student residence permit available.',
      'freelancers': 'Self-employment permit very difficult.',
      'seniors': 'No retirement pathway. Extremely limited.',
      'entrepreneurs': 'Independent basis permit for self-employed rare.'
    },
    healthcareHighlights: 'D-number for short stays, Fødselsnummer for residents. Fastlege GP system. Frikort free card after limit. Excellent public care.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'vertikal-helse']
  },
  'turkey': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist residence permit (1 year) commonly used.',
      'retirees': 'Short-term residence permit for retirees. Easy renewal.',
      'families': 'Family residence permit available. International schools in Istanbul.',
      'remote-workers': 'Tourist residence permit. Gray area for remote work.',
      'students': 'Student residence permit available.',
      'freelancers': 'Tourist residence. Work permit if Turkish clients.',
      'seniors': 'Short-term residence easy to obtain.',
      'entrepreneurs': 'Work permit required for business activities.'
    },
    healthcareHighlights: 'SGK public insurance for residents. Acibadem/Memorial hospital chains excellent. Istanbul medical tourism hub. Very affordable.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'acibadem-sigorta']
  },
  'hungary': {
    visaTypes: {
      'digital-nomads': 'White Card digital nomad permit (new). 1 year, renewable.',
      'retirees': 'Residence permit for pensioners with income proof.',
      'families': 'Family reunification for permit holders. Good schools in Budapest.',
      'remote-workers': 'White Card for remote workers earning abroad.',
      'students': 'Student residence permit available.',
      'freelancers': 'White Card or self-employment permit.',
      'seniors': 'Residence permit with pension proof.',
      'entrepreneurs': 'Business residence permit available.'
    },
    healthcareHighlights: 'NEAK public system for residents. White Card program ongoing. Budapest private options good. Affordable care.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'medicover', 'generali']
  },
  'hong-kong': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Employment visa or investment visa.',
      'retirees': 'Capital Investment Entrant Scheme (HK$30M investment).',
      'families': 'Dependent visas for employment visa holders.',
      'remote-workers': 'No remote work visa. Employment visa needed.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Investment visa or establish company.',
      'seniors': 'Capital Investment Entrant Scheme only.',
      'entrepreneurs': 'Investment visa for business establishment.'
    },
    healthcareHighlights: 'HA public system long waits. Private hospitals expensive but excellent. Corporate coverage standard. Regional hub for care.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'axa-hong-kong']
  },
  'south-africa': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Retired Persons Visa popular.',
      'retirees': 'Retired Persons Visa with R37,000/month income.',
      'families': 'Relative\'s visa for family. Good international schools.',
      'remote-workers': 'No specific visa. Critical Skills Visa for some.',
      'students': 'Study visa for enrolled students.',
      'freelancers': 'Business visa or Relative\'s visa if applicable.',
      'seniors': 'Retired Persons Visa. R37,000/month pension required.',
      'entrepreneurs': 'Business visa with R5M investment.'
    },
    healthcareHighlights: 'Medical aid schemes essential (Discovery, Bonitas). Gap cover recommended. Netcare/Mediclinic private chains. Public system struggling.',
    costLevel: 'medium',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'discovery-health', 'bupa-global', 'momentum']
  },
  'denmark': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Work permit requires Danish employer.',
      'retirees': 'No retirement visa. Very limited options.',
      'families': 'Family reunification for permit holders. Excellent schools.',
      'remote-workers': 'No remote work visa pathway.',
      'students': 'Student residence permit with work rights.',
      'freelancers': 'Self-employment permit difficult.',
      'seniors': 'No retirement visa. EU freedom of movement only.',
      'entrepreneurs': 'Start-up Denmark for innovative businesses.'
    },
    healthcareHighlights: 'CPR number required. Yellow card (sundhedskort) for access. Group 1 (free GP) or Group 2 (choose doctor). Dental not covered.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'dansk-sundhedssikring']
  },
  'peru': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa (new) for remote workers.',
      'retirees': 'Rentista Visa with $1,000/month income proof.',
      'families': 'Family visas included. International schools in Lima.',
      'remote-workers': 'Digital Nomad Visa for non-Peruvian employers.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista or Digital Nomad Visa.',
      'seniors': 'Rentista Visa popular with retirees.',
      'entrepreneurs': 'Investor visa with business plan.'
    },
    healthcareHighlights: 'EsSalud public system for workers. Private clinics in Lima excellent. Altitude considerations (Cusco 3,400m). Affordable private care.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'pacifico-seguros', 'rimac']
  },
  // Batch 4: Balkans & Baltics
  'estonia': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €3,504/month income. 1-year stay, can apply remotely.',
      'retirees': 'No retirement visa. D-visa for temporary stay with financial proof.',
      'families': 'Family reunification for residence permit holders. Estonian schools free.',
      'remote-workers': 'Digital Nomad Visa designed for remote workers with non-Estonian employers.',
      'students': 'Student residence permit. Work 20 hours/week allowed.',
      'freelancers': 'e-Residency for business, but doesn\'t grant healthcare. Self-employment residence possible.',
      'seniors': 'No retirement pathway. D-visa with sufficient funds only option.',
      'entrepreneurs': 'Startup Visa for founders. e-Residency for digital business management.'
    },
    healthcareHighlights: 'Haigekassa covers employed residents only. e-Residency doesn\'t include healthcare. Confido and Medicum are top private clinics. Helsinki 2-hour ferry for complex care.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'latvia': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €2,857/month income and €42,500 minimum insurance. 1-year, non-renewable.',
      'retirees': 'Temporary residence permit with financial self-sufficiency proof.',
      'families': 'Family reunification available. Latvian schools free for residents.',
      'remote-workers': 'Digital Nomad Visa for remote workers. Strict insurance requirements.',
      'students': 'Student residence permit with limited work rights.',
      'freelancers': 'Self-employment residence permit possible with business plan.',
      'seniors': 'Temporary residence with pension/savings proof. Limited options.',
      'entrepreneurs': 'Startup Visa available. Company registration straightforward.'
    },
    healthcareHighlights: 'NVD public system underfunded with long waits. Veselības centrs 4 and ARS are leading private clinics. Most affordable Baltic state for healthcare.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global']
  },
  'lithuania': {
    visaTypes: {
      'digital-nomads': 'No dedicated Digital Nomad Visa. Startup Visa alternative for tech workers.',
      'retirees': 'Temporary residence for financially independent. Must show income source.',
      'families': 'Family reunification for permit holders. Good schools in Vilnius.',
      'remote-workers': 'No specific visa. Temporary residence with income proof possible.',
      'students': 'Student residence permit. Universities affordable.',
      'freelancers': 'Self-employment (individual activity certificate) possible.',
      'seniors': 'Temporary residence with pension proof. No dedicated pathway.',
      'entrepreneurs': 'Startup Visa popular for tech founders. Fintech hub status.'
    },
    healthcareHighlights: 'PSD mandatory (6.98% of income for self-employed). Santaros Klinikos main public hospital. Northway and Kardiolita top private clinics.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'bulgaria': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa. Type D visa for long stays. Freelance permit possible.',
      'retirees': 'Type D visa for pensioners. €500/month income often sufficient.',
      'families': 'Family reunification available. International schools in Sofia.',
      'remote-workers': 'Freelance permit or Type D visa. Gray area for remote work.',
      'students': 'Student visa for enrolled students. Very affordable universities.',
      'freelancers': 'Freelance permit (свободна практика) registration required.',
      'seniors': 'Type D visa popular with budget retirees. Low cost of living.',
      'entrepreneurs': 'Business visa for company establishment. 10% flat tax attractive.'
    },
    healthcareHighlights: 'NHIF covers residents (8% contribution). EU EHIC valid. Acibadem City Clinic and Tokuda Sofia are top private hospitals. Dental tourism hub.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'serbia': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa but 90-day visa-free for most nationalities. Temp residence possible.',
      'retirees': 'Temporary residence for pensioners with income proof.',
      'families': 'Family reunification available. International schools in Belgrade.',
      'remote-workers': 'Temporary residence permit. 90-day visa-free stays common.',
      'students': 'Student residence permit. Very affordable universities.',
      'freelancers': 'Temporary residence as freelancer possible. Low tax rates.',
      'seniors': 'Temporary residence with pension proof.',
      'entrepreneurs': 'Business residence for company founders. Attractive tax environment.'
    },
    healthcareHighlights: 'RFZO public system (not EU, no EHIC). Bel Medic and Medigroup are leading Belgrade private options. Growing digital nomad hub.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global']
  },
  'montenegro': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires health insurance proof. 2-year permit available.',
      'retirees': 'Temporary residence for pensioners. Affordable requirements.',
      'families': 'Family reunification available. Limited international school options.',
      'remote-workers': 'Digital Nomad Visa covers remote workers.',
      'students': 'Student residence permit for enrolled students.',
      'freelancers': 'Temporary residence as self-employed possible.',
      'seniors': 'Temporary residence with pension proof.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'FZOM public system limited—only one major hospital (Clinical Center Montenegro). Coastal summer strain on healthcare. Belgrade evacuation common for complex cases.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global']
  },
  'albania': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa but 1-year visa-free stay for most nationalities. No insurance mandate.',
      'retirees': 'Residence permit for pensioners. Low requirements.',
      'families': 'Family reunification available. International schools in Tirana.',
      'remote-workers': '1-year visa-free makes it easy for remote workers.',
      'students': 'Student residence permit available.',
      'freelancers': 'Residence permit for self-employed. Low bureaucracy.',
      'seniors': 'Residence permit with pension proof. Very affordable.',
      'entrepreneurs': 'Business visa for company founders.'
    },
    healthcareHighlights: 'Public system underfunded. American Hospital and Hygeia Hospital Tirana are the main private options. Albanian Riviera has limited healthcare. Greece evacuation for serious cases.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global']
  },
  'north-macedonia': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa. Temporary residence permit possible.',
      'retirees': 'Temporary residence for pensioners with income proof.',
      'families': 'Family reunification available. Schools in Skopje.',
      'remote-workers': 'Temporary residence permit. Visa-free 90 days for most.',
      'students': 'Student residence for enrolled students.',
      'freelancers': 'Self-employment registration possible.',
      'seniors': 'Temporary residence with pension proof.',
      'entrepreneurs': 'Business residence for company founders.'
    },
    healthcareHighlights: 'FZOM public healthcare. Sistina and Zan Mitrev hospitals in Skopje are top private options. Lake Ohrid area has limited care. Thessaloniki or Belgrade evacuation for complex cases.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global']
  },
  'slovenia': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa (unlike neighboring Croatia). Self-employment (s.p.) route available.',
      'retirees': 'Temporary residence for financially independent. Requires comprehensive insurance.',
      'families': 'Family reunification for permit holders. Excellent schools.',
      'remote-workers': 'Self-employment permit (s.p.) is the main route for remote workers.',
      'students': 'Student residence permit. Affordable universities.',
      'freelancers': 'Self-employment (s.p. - samostojni podjetnik) the standard route.',
      'seniors': 'Temporary residence with financial proof and insurance.',
      'entrepreneurs': 'Business establishment straightforward. EU market access.'
    },
    healthcareHighlights: 'ZZZS mandatory + dopolnilno complementary insurance (~€35/month) recommended for full coverage. UKC Ljubljana is the main hospital. Vienna or Milan evacuation for complex cases.',
    costLevel: 'medium',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'triglav', 'generali-slovenia']
  },
  'slovakia': {
    visaTypes: {
      'digital-nomads': 'No Digital Nomad Visa. Živnosť (trade license) self-employment route popular.',
      'retirees': 'Temporary residence for pensioners. Must show sufficient income.',
      'families': 'Family reunification for permit holders. Good schools in Bratislava.',
      'remote-workers': 'Živnosť self-employment permit is the main route.',
      'students': 'Student residence permit. Some programs in English.',
      'freelancers': 'Živnosť (trade license) the standard route. 14% health insurance contribution.',
      'seniors': 'Temporary residence with pension proof.',
      'entrepreneurs': 'Company establishment straightforward.'
    },
    healthcareHighlights: 'Three-insurer system (VšZP, Dôvera, Union ZP). 14% income contribution for self-employed. Vienna only 60km away for complex care. Very affordable private care.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'union-zp', 'dovera']
  },
  // Batch 5: Caribbean
  'jamaica': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires $50,000/year income. 1 year, renewable.',
      'retirees': 'Retirement Visa for 55+ with income proof. Popular retirement destination.',
      'families': 'Dependent visas available. International schools in Kingston.',
      'remote-workers': 'Digital Nomad Visa covers remote workers meeting income threshold.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa works for freelancers with $50k income.',
      'seniors': 'Retirement Visa at 55+. Jamaica marketed to retirees.',
      'entrepreneurs': 'Business visa for establishing Jamaican operations.'
    },
    healthcareHighlights: 'Private hospitals in Kingston (Medical Associates, Andrews Memorial). Public system (NHF) has long waits. Miami evacuation essential for complex cases—only 1.5 hours by air.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'sagicor']
  },
  'barbados': {
    visaTypes: {
      'digital-nomads': 'Welcome Stamp Visa requires $50,000/year income. 12 months stay.',
      'retirees': 'Special Entry Permit for retirees with income proof.',
      'families': 'Welcome Stamp includes dependents. Good schools available.',
      'remote-workers': 'Welcome Stamp designed for remote workers. Insurance required.',
      'students': 'Student permit for enrolled students.',
      'freelancers': 'Welcome Stamp covers freelancers meeting income requirement.',
      'seniors': 'Special Entry Permit for retirees.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Queen Elizabeth Hospital (public) is the main facility. Bayview Hospital (private) for faster care. Limited specialist availability—Miami evacuation for complex cases. Diving/hyperbaric coverage important.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'sagicor']
  },
  'bahamas': {
    visaTypes: {
      'digital-nomads': 'BEATS (Bahamas Extended Access Travel Stay) requires insurance. 1 year.',
      'retirees': 'Annual Residence Permit with financial proof.',
      'families': 'BEATS includes dependents. International schools in Nassau.',
      'remote-workers': 'BEATS program for remote workers. Insurance mandatory.',
      'students': 'Student permit for enrolled students.',
      'freelancers': 'BEATS covers freelancers. Insurance required.',
      'seniors': 'Annual Residence Permit. Retiree-friendly.',
      'entrepreneurs': 'Investor permit for business establishment.'
    },
    healthcareHighlights: 'Nassau has Princess Margaret Hospital (public) and Doctors Hospital (private). Out Islands have clinic-only healthcare—air evacuation to Nassau or Miami critical. Miami only 30 minutes by air from Nassau.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'dominican-republic': {
    visaTypes: {
      'digital-nomads': 'No dedicated nomad visa. Tourist visa 30 days, extendable.',
      'retirees': 'Pensionado Visa with $1,500/month pension.',
      'families': 'Residency visas include dependents. Bilingual schools available.',
      'remote-workers': 'Tourist visa extensions or temporary residency.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista visa with income proof.',
      'seniors': 'Pensionado popular for retirees. Low cost of living.',
      'entrepreneurs': 'Investor visa for business establishment.'
    },
    healthcareHighlights: 'Santo Domingo has excellent private hospitals (HOMS, CEDIMAT, Hospiten). Punta Cana has tourist-focused clinics. Outside major cities, care is basic. Miami evacuation option for complex cases.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'belize': {
    visaTypes: {
      'digital-nomads': 'No dedicated nomad visa. Tourist visa 30 days, extendable to 6 months.',
      'retirees': 'QRP (Qualified Retired Persons) program at 45+ with $2,000/month income.',
      'families': 'QRP includes dependents. Limited school options.',
      'remote-workers': 'Tourist visa extensions. No specific remote work visa.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Tourist visa extensions. Self-employment permit possible.',
      'seniors': 'QRP popular with retirees. Tax-free income benefits.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Only English-speaking Central American country. Karl Heusner Memorial Hospital (Belize City) is main facility. Cayes and jungle have minimal healthcare. Mexico (Chetumal) or Miami evacuation essential.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'trinidad-tobago': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Business visa or work permit required for long stays.',
      'retirees': 'Retiree permit with pension/income proof.',
      'families': 'Dependent visas available. Good schools in Port of Spain.',
      'remote-workers': 'No specific visa. Work permit if employed by local entity.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Self-employment permit possible but complex.',
      'seniors': 'Retiree permit available.',
      'entrepreneurs': 'Investor/business visa for company establishment.'
    },
    healthcareHighlights: 'Oil & gas wealth funds decent public healthcare. Private options in Port of Spain (St. Clair Medical, Medical Associates). Tobago has limited facilities. More self-sufficient than most Caribbean islands.',
    costLevel: 'medium',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'sagicor', 'guardian-life']
  },
  'cayman-islands': {
    visaTypes: {
      'digital-nomads': 'Global Citizen Concierge Program requires $100,000/year income. 2 years.',
      'retirees': 'Certificate of Permanent Residence with significant investment.',
      'families': 'Global Citizen includes dependents. Top international schools.',
      'remote-workers': 'Global Citizen Program for remote workers. High income threshold.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Global Citizen for high-earning freelancers.',
      'seniors': 'Person of Independent Means permit.',
      'entrepreneurs': 'Business visa for company establishment. Tax haven status.'
    },
    healthcareHighlights: 'Health City Cayman Islands is Caribbean\'s most advanced hospital (JCI-accredited, cardiac surgery). George Town has good private clinics. Better healthcare than most Caribbean destinations. Miami backup still available.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'aetna-international']
  },
  'aruba': {
    visaTypes: {
      'digital-nomads': 'One Happy Workation visa. 90 days, renewable.',
      'retirees': 'Temporary residence for financially independent.',
      'families': 'Dependent permits available. Dutch education system.',
      'remote-workers': 'One Happy Workation for remote workers.',
      'students': 'Student permit for enrolled students.',
      'freelancers': 'One Happy Workation covers freelancers.',
      'seniors': 'Temporary residence with financial proof.',
      'entrepreneurs': 'Business permit for company establishment.'
    },
    healthcareHighlights: 'AZV (public insurance) covers residents. Dr. Horacio E. Oduber Hospital is main facility. Good for island healthcare but complex cases go to Colombia, Curaçao, or Netherlands. Dutch healthcare standards.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'curacao': {
    visaTypes: {
      'digital-nomads': '@HOME in Curaçao program for remote workers. 6 months, renewable.',
      'retirees': 'Residence permit for financially independent.',
      'families': 'Dependent permits available. Dutch and international schools.',
      'remote-workers': '@HOME program designed for remote workers.',
      'students': 'Student permit for enrolled students.',
      'freelancers': '@HOME covers freelancers.',
      'seniors': 'Residence permit with pension/savings proof.',
      'entrepreneurs': 'Investor permit for business establishment.'
    },
    healthcareHighlights: 'Curaçao Medical Center (CMC) is the main hospital—better equipped than most Caribbean islands. SVB public insurance for residents. Complex cases may evacuate to Colombia or Netherlands. Dutch healthcare ties.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'bermuda': {
    visaTypes: {
      'digital-nomads': 'Work from Bermuda certificate. 1 year, renewable. Insurance required.',
      'retirees': 'Residential Certificate (expensive—annual fees $30k+).',
      'families': 'Work permit dependents. Excellent private schools.',
      'remote-workers': 'Work from Bermuda program. Must have health insurance.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Work from Bermuda covers freelancers.',
      'seniors': 'Residential Certificate for wealthy retirees only.',
      'entrepreneurs': 'Business permits for established businesses.'
    },
    healthcareHighlights: 'King Edward VII Memorial Hospital is the main facility. Healthcare is expensive but British-standard quality. Complex cases evacuate to US East Coast (Boston, NYC). Health insurance mandatory for all residents and visitors.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'colonial-bermuda']
  },
  // Batch 6: Central & South America
  'nicaragua': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 90-day tourist visa, extendable. Easy residency process.',
      'retirees': 'Pensionado Visa requires $600/month pension. Very low threshold.',
      'families': 'Dependent visas available. Limited international school options.',
      'remote-workers': 'Tourist visa extensions. No specific remote work visa.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista visa with income proof possible.',
      'seniors': 'Pensionado at $600/month is one of lowest requirements in world.',
      'entrepreneurs': 'Investor visa for business establishment.'
    },
    healthcareHighlights: 'Hospital Vivian Pellas in Managua is the only quality private option. Granada and San Juan del Sur have basic clinics only. Costa Rica or Miami evacuation essential for serious cases. Very affordable care ($30-50 GP visits).',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'honduras': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 90-day tourist visa. Próspera/ZEDE zones offer alternatives.',
      'retirees': 'Pensionado Visa requires $1,500/month pension.',
      'families': 'Dependent visas available. International schools in Tegucigalpa/San Pedro Sula.',
      'remote-workers': 'Tourist visa extensions. ZEDE zones (Próspera) offer special status.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista visa possible with income proof.',
      'seniors': 'Pensionado visa available. Roatán popular with retirees.',
      'entrepreneurs': 'ZEDE/Próspera zones offer business-friendly environment.'
    },
    healthcareHighlights: 'Hospital Honduras Medical Center in San Pedro Sula is best mainland option. Roatán/Bay Islands have limited facilities—air evacuation to mainland or Miami critical. Very affordable but quality varies significantly.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'el-salvador': {
    visaTypes: {
      'digital-nomads': 'Bitcoin Visa requires 3 BTC or $100k USD. Unique crypto-friendly option.',
      'retirees': 'Pensionado requires $1,000/month pension.',
      'families': 'Dependent visas available. International schools in San Salvador.',
      'remote-workers': 'Bitcoin Visa for crypto holders. Tourist extensions otherwise.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Bitcoin Visa or Rentista options.',
      'seniors': 'Pensionado visa available. Dollarized economy simplifies finances.',
      'entrepreneurs': 'Bitcoin Beach/El Zonte crypto ecosystem. Business-friendly.'
    },
    healthcareHighlights: 'Hospital de Diagnóstico in San Salvador is top private option. Dollarized economy (USD) simplifies payments. Beach areas have limited care. Guatemala City or Panama evacuation for complex cases.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'guatemala': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. CA-4 allows 90 days, extendable. Easy residency process.',
      'retirees': 'Pensionado requires $1,000/month pension.',
      'families': 'Dependent visas available. Good international schools in Guatemala City/Antigua.',
      'remote-workers': 'Tourist visa extensions. CA-4 mobility with neighbors.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Rentista visa with income proof.',
      'seniors': 'Pensionado visa available.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Guatemala City has good private hospitals (Herrera Llerandi, Centro Médico). Antigua and Lake Atitlán have limited facilities—Guatemala City or US evacuation for serious cases. Affordable private care in the capital.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'uruguay': {
    visaTypes: {
      'digital-nomads': 'No dedicated nomad visa. Easy residency process with income proof.',
      'retirees': 'Retirement residency with pension proof. Straightforward process.',
      'families': 'Family residency available. Good public and private schools.',
      'remote-workers': 'Residency permit with income documentation.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Residency with proof of income/savings.',
      'seniors': 'Retirement-friendly. Good healthcare system.',
      'entrepreneurs': 'Business visa for company establishment. Tech-friendly environment.'
    },
    healthcareHighlights: 'Mutualista system provides good coverage for residents. Hospital Británico and Hospital Italiano are top private options. FONASA contributions required. More developed healthcare than most of Latin America.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'blue-cross-uruguay']
  },
  'paraguay': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. SUACE system makes residency very easy.',
      'retirees': 'Retirement residency straightforward. No minimum income requirement.',
      'families': 'Family residency included. Schools in Asunción.',
      'remote-workers': 'Easy residency via SUACE. No specific remote work visa needed.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'SUACE residency works for freelancers.',
      'seniors': 'Easy residency process. Low cost of living.',
      'entrepreneurs': 'Tax haven appeal: 10% flat tax, no foreign income tax.'
    },
    healthcareHighlights: 'Sanatorio Migone and Sanatorio Italiano in Asunción are best options. Healthcare limited outside capital. Buenos Aires or São Paulo evacuation for complex cases. Very affordable but quality varies.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  'bolivia': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 90-day tourist visa. Specific Purpose Visa for longer stays.',
      'retirees': 'Retirement visa with pension proof. Low requirements.',
      'families': 'Dependent visas available. International schools in La Paz/Santa Cruz.',
      'remote-workers': 'Specific Purpose Visa possible. Tourist extensions common.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Specific Purpose Visa with income documentation.',
      'seniors': 'Retirement visa available. Very low cost of living.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'La Paz altitude (3,640m) is a major health consideration. SUS provides universal coverage. Santa Cruz has better facilities at lower altitude. Evacuation to Chile or Brazil essential for complex cases. Very affordable.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: false,
    topProviders: ['cigna-global', 'img-global', 'bupa-global', 'allianz-care']
  },
  // Batch 7: Asia-Pacific
  'cambodia': {
    visaTypes: {
      'digital-nomads': 'E-visa or visa on arrival. Easy extensions. Digital Nomad Visa announced but not yet implemented.',
      'retirees': 'ER (Retirement) Visa for 55+ with $50k+ in savings.',
      'families': 'Dependent visas available. International schools in Phnom Penh/Siem Reap.',
      'remote-workers': 'Business visa (E-class) easy to obtain and extend.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa works for freelancers. Very relaxed enforcement.',
      'seniors': 'ER Visa for 55+. Very affordable retirement destination.',
      'entrepreneurs': 'Business visa straightforward. 100% foreign ownership allowed in most sectors.'
    },
    healthcareHighlights: 'Royal Phnom Penh Hospital and Sen Sok International best options. Siem Reap has basic facilities only. Bangkok evacuation (1 hour flight) essential for serious cases. Very affordable but quality limited.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'laos': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa 30 days, extendable. Business visa possible.',
      'retirees': 'No retirement visa. Business or investor visa required for long stays.',
      'families': 'Dependent visas available. Very limited international school options.',
      'remote-workers': 'Tourist visa extensions or business visa.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa possible but requirements unclear.',
      'seniors': 'No retirement pathway. Tourist extensions common.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Vientiane has Alliance International Medical Center and French Hospital. Very limited elsewhere. Thailand evacuation (Udon Thani 1 hour, Bangkok 1.5 hours) essential for anything serious. Very affordable but basic.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'myanmar': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa 28 days. Political situation affects options.',
      'retirees': 'No retirement visa. Business visa only practical long-term option.',
      'families': 'Dependent visas limited. International schools in Yangon only.',
      'remote-workers': 'Business visa. Political/sanctions situation complicates matters.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa with local sponsor.',
      'seniors': 'No retirement visa. Limited options.',
      'entrepreneurs': 'Business visa possible but foreign investment restricted in many sectors.'
    },
    healthcareHighlights: 'Yangon has Pun Hlaing International Hospital and Asia Royal Hospital. Quality varies significantly. Political instability affects healthcare access. Bangkok or Singapore evacuation essential. Verify insurance covers Myanmar given political situation.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'nepal': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa 150 days/year max. Business visa alternative.',
      'retirees': 'Residential visa for 60+ requires property ownership or $20k/year income.',
      'families': 'Dependent visas available. International schools in Kathmandu.',
      'remote-workers': 'Tourist visa with extensions. 150-day annual limit.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Tourist visa extensions. Business visa for longer stays.',
      'seniors': 'Residential visa option for 60+.',
      'entrepreneurs': 'Business/investor visa for company establishment.'
    },
    healthcareHighlights: 'Kathmandu has Norvic Hospital and Grande International. Quality decent but limited specialists. Altitude (1,400m Kathmandu, much higher trekking areas) is consideration. India or Thailand evacuation for complex cases. Very affordable.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'sri-lanka': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa announced 2024. ETA for short visits. Residence visa for longer stays.',
      'retirees': 'Residence visa (SRV) for retirees with $15k/year income.',
      'families': 'Dependent visas available. International schools in Colombo.',
      'remote-workers': 'Digital Nomad Visa or residence visa options.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Digital Nomad Visa or residence visa.',
      'seniors': 'SRV residence visa for retirees.',
      'entrepreneurs': 'Investor visa for business establishment.'
    },
    healthcareHighlights: 'Colombo has good private hospitals (Asiri, Nawaloka, Lanka Hospitals). Economic crisis (2022) affected healthcare temporarily but recovering. Quality care available in Colombo at affordable prices. India or Singapore evacuation for complex cases.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'bangladesh': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa 30-90 days. Business visa for longer stays.',
      'retirees': 'No retirement visa. Investor visa only practical long-term option.',
      'families': 'Dependent visas available. International schools in Dhaka.',
      'remote-workers': 'Business visa required for extended stays.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa with local engagement.',
      'seniors': 'No retirement pathway.',
      'entrepreneurs': 'Business/investor visa for company establishment.'
    },
    healthcareHighlights: 'Dhaka has Square Hospital, United Hospital, and Apollo. Quality improving but inconsistent. Outside Dhaka very limited. India (Kolkata 1.5 hours) or Thailand evacuation for complex cases. Very affordable.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'pakistan': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Tourist visa or business visa. E-visa available for many nationalities.',
      'retirees': 'No retirement visa. Extended tourist or family visas only options.',
      'families': 'Family visas available. International schools in major cities.',
      'remote-workers': 'Business visa for extended stays.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Business visa with local ties.',
      'seniors': 'No retirement pathway. Family visa if applicable.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Karachi (Aga Khan), Lahore (Shaukat Khanum), Islamabad (Shifa) have good hospitals. Quality care available in major cities. Rural areas very limited. UAE or Thailand evacuation for complex cases. Affordable.',
    costLevel: 'low',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'mongolia': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 30-day visa-free for many nationalities. Extensions possible.',
      'retirees': 'No retirement visa. Investor or employment visa for long stays.',
      'families': 'Dependent visas available. International schools in Ulaanbaatar only.',
      'remote-workers': 'Tourist visa extensions. No specific remote work pathway.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Tourist extensions or business visa.',
      'seniors': 'No retirement pathway.',
      'entrepreneurs': 'Business visa for company establishment.'
    },
    healthcareHighlights: 'Ulaanbaatar has SOS Medica and Intermed Hospital. Outside the capital, healthcare is extremely limited. Extreme climate (-40°C winters) is health factor. Seoul or Beijing evacuation for serious cases. Affordable but basic.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'img-global', 'allianz-care']
  },
  'brunei': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. 90-day visa-free for many nationalities.',
      'retirees': 'No retirement visa. Employment or investor visa only.',
      'families': 'Dependent visas for work permit holders. Good international schools.',
      'remote-workers': 'No specific visa. Usually requires employment by local entity.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Very difficult without local employment.',
      'seniors': 'No retirement pathway.',
      'entrepreneurs': 'Business visa possible but requirements strict.'
    },
    healthcareHighlights: 'RIPAS Hospital is main government facility. Jerudong Park Medical Centre is private option. Oil wealth funds decent healthcare. Singapore evacuation (2 hour flight) for complex cases. Free healthcare for citizens, expats need insurance.',
    costLevel: 'medium',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'aetna-international']
  },
  // Batch 8: Europe Gaps
  'luxembourg': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. EU free movement for EU citizens. Non-EU need work permits.',
      'retirees': 'EU citizens free. Non-EU need proof of resources (€2,500/month+) and insurance.',
      'families': 'Family reunification for permit holders. Excellent international schools.',
      'remote-workers': 'EU citizens free. Non-EU need authorization—employer must sponsor.',
      'students': 'Student visa for enrolled students. Many English programs.',
      'freelancers': 'Self-employed authorization possible. High barriers for non-EU.',
      'seniors': 'EU citizens free. Non-EU need substantial resources.',
      'entrepreneurs': 'Business visa requires significant investment and job creation.'
    },
    healthcareHighlights: 'CNS (Caisse Nationale de Santé) mandatory for workers—covers 80-100% of costs. High salaries fund excellent healthcare. Centre Hospitalier de Luxembourg main facility. Belgium/Germany/France nearby for specialized care.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'dkv-luxembourg']
  },
  'iceland': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Schengen 90 days. Long-term residence difficult.',
      'retirees': 'EEA citizens can stay. Non-EEA very limited options.',
      'families': 'Family reunification for permit holders. Excellent schools.',
      'remote-workers': 'EEA free movement. Non-EEA need employer sponsorship.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Self-employment permit possible but difficult.',
      'seniors': 'EEA citizens can stay. Non-EEA very limited.',
      'entrepreneurs': 'Business visa requires substantial investment.'
    },
    healthcareHighlights: 'Sjúkratryggingar Íslands (Icelandic Health Insurance) tax-funded with copays. Landspítali is the only major hospital. Remote location (2-3 hours to Europe) makes evacuation planning essential. Extreme costs—premiums 20-40% higher than European average.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'img-global']
  },
  'andorra': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa available. Requires €40k+/year income. Minimum 90 days stay.',
      'retirees': 'Passive Residence requires €600k+ financial investment and private insurance.',
      'families': 'Family permits for residence holders. French and Spanish schools.',
      'remote-workers': 'Digital Nomad Visa for remote workers meeting income threshold.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Self-employed residence possible with business plan.',
      'seniors': 'Passive Residence requires substantial assets.',
      'entrepreneurs': 'Active Residence for business owners. 10% max income tax attractive.'
    },
    healthcareHighlights: 'CASS mandatory for workers (covers 75%, need mutua supplement for rest). Passive residents need private insurance. Hospital Nostra Senyora de Meritxell main facility. Barcelona (2.5 hours) or Toulouse evacuation for complex cases. Ski injury coverage essential.',
    costLevel: 'high',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'dkv-andorra']
  },
  'monaco': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Residence requires substantial assets (€500k+).',
      'retirees': 'Residence for wealthy retirees. Must demonstrate significant assets.',
      'families': 'Family permits for residence holders. Excellent international schools.',
      'remote-workers': 'No specific visa. Residence based on employment or wealth.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Self-employed residence possible with substantial income.',
      'seniors': 'Residence for wealthy seniors. No income tax but high cost of living.',
      'entrepreneurs': 'Business residence requires significant investment and job creation.'
    },
    healthcareHighlights: 'CCSS (Caisses Sociales de Monaco) for workers. Non-workers need private insurance for residence. Princess Grace Hospital main facility. Nice CHU 20 minutes away for complex cases. Ultra-high-net-worth market—expect premium pricing.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'axa-monaco']
  },
  'liechtenstein': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Extremely restrictive—only 89 residence permits per year.',
      'retirees': 'Residence nearly impossible without employment or family ties.',
      'families': 'Family reunification very limited. Excellent schools if you get in.',
      'remote-workers': 'Requires employer sponsorship. Very few permits available.',
      'students': 'Student visa possible for enrolled students.',
      'freelancers': 'Self-employment residence extremely difficult to obtain.',
      'seniors': 'Residence nearly impossible for retirees.',
      'entrepreneurs': 'Business residence possible but highly competitive.'
    },
    healthcareHighlights: 'Swiss-style mandatory OKP health insurance. Landesspital handles basics only. Swiss hospitals (Chur, Zürich) for anything complex. CHF costs—among the most expensive in the world. Insurance mandatory for all residents.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: false,
    topProviders: ['cigna-global', 'bupa-global', 'css-liechtenstein', 'swica']
  },
  'cyprus': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa for non-EU. Requires €3,500/month income. 1 year, renewable.',
      'retirees': 'Category F permit for retirees with €9,568+/year income (single).',
      'families': 'Family permits available. Good international schools in Nicosia/Limassol.',
      'remote-workers': 'Digital Nomad Visa for remote workers meeting income threshold.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Self-employed registration possible. EU citizens straightforward.',
      'seniors': 'Category F for retirees. Non-dom tax status attractive.',
      'entrepreneurs': 'Business visa with company establishment. Favorable corporate tax.'
    },
    healthcareHighlights: 'GESY (GHS) universal healthcare launched 2019—covers residents and workers. Private hospitals in Limassol/Nicosia good quality. UK/Greece evacuation for complex cases. Affordable by EU standards.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'malta': {
    visaTypes: {
      'digital-nomads': 'Nomad Residence Permit requires €2,700/month income. 1 year, renewable.',
      'retirees': 'Global Residence Programme for non-EU. Malta Retirement Programme for EU.',
      'families': 'Family permits available. English-speaking schools.',
      'remote-workers': 'Nomad Residence Permit for remote workers.',
      'students': 'Student visa for enrolled students. English programs.',
      'freelancers': 'Self-employed registration. Freelancer-friendly environment.',
      'seniors': 'Retirement programmes available. 15% flat tax on remitted income.',
      'entrepreneurs': 'Business visa. Attractive tax regime for holding companies.'
    },
    healthcareHighlights: 'Entitlement Card for residents gives access to public healthcare. Mater Dei Hospital main facility. English-speaking medical staff. Sicily (ferry) or UK evacuation for complex cases. EU member state.',
    costLevel: 'medium',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'finland': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. EU free movement. Non-EU need work permits.',
      'retirees': 'EU citizens can stay. Non-EU need proof of funds and insurance.',
      'families': 'Family reunification for permit holders. Excellent free education.',
      'remote-workers': 'EU free movement. Non-EU need employer sponsorship.',
      'students': 'Student residence permit. Tuition-free for EU students.',
      'freelancers': 'Self-employed residence permit possible with business plan.',
      'seniors': 'EU citizens can stay. Non-EU need substantial resources.',
      'entrepreneurs': 'Startup Permit for innovative businesses.'
    },
    healthcareHighlights: 'Kela provides public healthcare for residents—mostly tax-funded with small copays. Excellent quality. HUS (Helsinki University Hospital) top facility. Private options (Mehiläinen, Terveystalo) for faster access. Nordic healthcare model.',
    costLevel: 'high',
    nomadFriendly: false,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'if-insurance']
  },
  'romania': {
    visaTypes: {
      'digital-nomads': 'Digital Nomad Visa requires €3,700/month income. 1 year permit.',
      'retirees': 'Long-stay visa for retirees with income proof.',
      'families': 'Family reunification available. International schools in Bucharest.',
      'remote-workers': 'Digital Nomad Visa for remote workers meeting income threshold.',
      'students': 'Student visa for enrolled students.',
      'freelancers': 'Freelancer visa (PFA registration) available.',
      'seniors': 'Long-stay visa with pension proof.',
      'entrepreneurs': 'Business visa for company establishment. 1% micro-company tax.'
    },
    healthcareHighlights: 'CNAS public insurance covers workers. Private hospitals in Bucharest excellent (Regina Maria, MedLife, Sanador). Very affordable private care. EU member—EHIC valid for visitors.',
    costLevel: 'low',
    nomadFriendly: true,
    retireeFriendly: true,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  },
  'san-marino': {
    visaTypes: {
      'digital-nomads': 'No digital nomad visa. Residence very difficult—need employment or property.',
      'retirees': 'Elective residence possible but very limited spots.',
      'families': 'Family permits for residence holders. Italian schools nearby.',
      'remote-workers': 'No specific visa. Residence requires local ties.',
      'students': 'Student visa limited. Most study in Italy.',
      'freelancers': 'Self-employment residence difficult to obtain.',
      'seniors': 'Elective residence possible but highly competitive.',
      'entrepreneurs': 'Business residence with investment and job creation.'
    },
    healthcareHighlights: 'ISS (Istituto Sicurezza Sociale) covers residents. Hospital di Stato main facility. Close ties with Italian healthcare—Rimini Hospital 15 minutes away. Bologna major hospitals 1 hour. Small scale but good quality.',
    costLevel: 'medium',
    nomadFriendly: false,
    retireeFriendly: false,
    familyFriendly: true,
    topProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'img-global']
  }
};

// Persona-specific provider rankings
const personaProviderPreferences: Record<string, string[]> = {
  'digital-nomads': ['safetywing', 'img-global', 'world-nomads', 'cigna-global', 'allianz-care'],
  'retirees': ['cigna-global', 'allianz-care', 'bupa-global', 'aetna-international', 'axa-global'],
  'families': ['cigna-global', 'bupa-global', 'allianz-care', 'aetna-international', 'axa-global'],
  'remote-workers': ['safetywing', 'cigna-global', 'allianz-care', 'img-global', 'bupa-global'],
  'students': ['safetywing', 'img-global', 'isoa', 'cigna-global', 'allianz-care'],
  'freelancers': ['safetywing', 'img-global', 'cigna-global', 'allianz-care', 'world-nomads'],
  'seniors': ['cigna-global', 'bupa-global', 'allianz-care', 'aetna-international', 'axa-global'],
  'entrepreneurs': ['cigna-global', 'allianz-care', 'bupa-global', 'aetna-international', 'axa-global']
};

// Persona-specific considerations templates
const personaConsiderations: Record<string, (country: string, data: typeof countryData[string]) => string[]> = {
  'digital-nomads': (country, data) => [
    data.nomadFriendly
      ? `${country} is nomad-friendly with good infrastructure and coworking options`
      : `${country} lacks dedicated nomad infrastructure—visa options are limited`,
    'Flexible insurance that works across borders is essential for frequent travelers',
    data.costLevel === 'low'
      ? 'Low costs mean you can self-insure minor expenses and use insurance for emergencies'
      : 'Higher costs make comprehensive coverage more valuable',
    'Telemedicine access helpful when moving between locations'
  ],
  'retirees': (country, data) => [
    data.retireeFriendly
      ? `${country} is popular with retirees and has established expat communities`
      : `${country} has limited retirement visa options—research carefully`,
    'Pre-existing condition coverage becomes more important with age',
    'Consider plans with no lifetime maximums for long-term security',
    data.costLevel === 'low'
      ? 'Lower healthcare costs stretch retirement budgets further'
      : 'Budget for higher insurance premiums in this higher-cost destination'
  ],
  'families': (country, data) => [
    data.familyFriendly
      ? `${country} offers good schools and family infrastructure`
      : `${country} may require more planning for families with children`,
    'Pediatric coverage and well-child visits are essential for young families',
    'Consider maternity coverage if planning to have children abroad',
    'Family deductible structures can save money vs individual deductibles'
  ],
  'remote-workers': (country, data) => [
    data.nomadFriendly
      ? `${country} has options for remote workers, including dedicated visas`
      : `${country} lacks clear visa paths for remote workers—check requirements`,
    'Ensure coverage meets any employer requirements',
    'Consider whether employer insurance extends internationally',
    'Stable annual plans often better than travel medical for longer stays'
  ],
  'students': (country, data) => [
    'University health insurance requirements vary—check with your institution',
    data.costLevel === 'low'
      ? 'Affordable healthcare costs make student budgets go further'
      : 'Budget for higher healthcare costs in this destination',
    'Mental health coverage increasingly important for students abroad',
    'Coverage during breaks and travel periods is essential'
  ],
  'freelancers': (country, data) => [
    data.nomadFriendly
      ? `${country} has visa options for self-employed individuals`
      : `${country} may require creative visa solutions for freelancers`,
    'Individual plans (not group) are necessary without employer sponsorship',
    'Monthly payment options help manage variable income',
    data.costLevel === 'low'
      ? 'Low costs allow higher deductibles to reduce premiums'
      : 'Consider comprehensive coverage in this higher-cost destination'
  ],
  'seniors': (country, data) => [
    'Age limits vary by provider—verify acceptance before applying',
    'Pre-existing condition policies become critical considerations',
    data.retireeFriendly
      ? `${country} accepts older residents and has appropriate healthcare`
      : `${country} may have limited options for seniors—research carefully`,
    'Higher premiums expected—budget accordingly and compare carefully'
  ],
  'entrepreneurs': (country, data) => [
    'Business visa options may include or require health coverage',
    'Multi-country coverage useful for business travel',
    'Consider coverage for key employees if building a team',
    data.costLevel === 'high'
      ? 'Executive health plans may be worth the investment in this destination'
      : 'Mid-range plans often sufficient given lower local healthcare costs'
  ]
};

// Healthcare notes by persona
const personaHealthcareNotes: Record<string, (data: typeof countryData[string]) => string> = {
  'digital-nomads': (data) => data.costLevel === 'low'
    ? 'Routine care is affordable out of pocket. Focus insurance on emergencies and hospitalization.'
    : 'Comprehensive coverage recommended given higher local healthcare costs.',
  'retirees': () => 'Access to specialists and chronic condition management should be priorities. Consider plans with strong hospital networks.',
  'families': () => 'Pediatric care access, vaccinations, and well-child visits are essential. Check which hospitals have children\'s departments.',
  'remote-workers': () => 'Stable coverage for longer stays. Consider telemedicine options for convenience and continuity.',
  'students': () => 'University clinics often available for basic care. Insurance covers emergencies and referrals to specialists.',
  'freelancers': (data) => data.costLevel === 'low'
    ? 'Pay-as-you-go for routine care works well. Insurance for emergencies and major procedures.'
    : 'Comprehensive coverage worthwhile given local costs. Consider higher deductibles to reduce premiums.',
  'seniors': () => 'Hospital network quality matters most. Ensure coverage for chronic conditions and regular specialist access.',
  'entrepreneurs': () => 'Flexible coverage for business travel. Consider executive health plans with annual checkups and priority access.'
};

// Cost notes by persona and cost level
const personaCostNotes: Record<string, (data: typeof countryData[string]) => string> = {
  'digital-nomads': (data) => {
    if (data.costLevel === 'low') return 'Budget $45-100/month for travel medical. Routine care affordable out of pocket ($20-50/visit).';
    if (data.costLevel === 'medium') return 'Budget $80-150/month for coverage. Routine care $50-100/visit.';
    return 'Budget $150-250/month for adequate coverage. Routine care $100-200/visit.';
  },
  'retirees': (data) => {
    if (data.costLevel === 'low') return 'Budget $150-300/month depending on age and pre-existing conditions. Local care very affordable.';
    if (data.costLevel === 'medium') return 'Budget $200-400/month. Consider local plans for cost savings.';
    return 'Budget $300-600/month. Comprehensive international coverage recommended.';
  },
  'families': (data) => {
    if (data.costLevel === 'low') return 'Family coverage $200-400/month total. Pediatric care $30-60/visit.';
    if (data.costLevel === 'medium') return 'Family coverage $300-500/month. Pediatric care $60-100/visit.';
    return 'Family coverage $400-800/month. Consider local plans to reduce costs.';
  },
  'remote-workers': (data) => {
    if (data.costLevel === 'low') return 'Budget $80-150/month. Travel medical may suffice for healthy individuals.';
    if (data.costLevel === 'medium') return 'Budget $120-200/month for stable coverage.';
    return 'Budget $180-350/month. Check if employer provides any international coverage.';
  },
  'students': (data) => {
    if (data.costLevel === 'low') return 'Budget $45-80/month for travel medical. University clinics often free or low-cost.';
    if (data.costLevel === 'medium') return 'Budget $60-120/month. Check university health requirements.';
    return 'Budget $100-180/month. University may offer group plans.';
  },
  'freelancers': (data) => {
    if (data.costLevel === 'low') return 'Budget $50-120/month. Higher deductibles reduce costs when income varies.';
    if (data.costLevel === 'medium') return 'Budget $100-180/month. Consider monthly payment plans.';
    return 'Budget $150-300/month. Tax-deductibility may offset costs.';
  },
  'seniors': (data) => {
    if (data.costLevel === 'low') return 'Budget $200-500/month at 65+. Premiums increase with age. Local care affordable.';
    if (data.costLevel === 'medium') return 'Budget $300-600/month at 65+. Compare carefully—rates vary widely.';
    return 'Budget $400-800/month at 65+. Comprehensive coverage essential in high-cost destination.';
  },
  'entrepreneurs': (data) => {
    if (data.costLevel === 'low') return 'Budget $120-200/month for individual coverage. Group plans if employing staff.';
    if (data.costLevel === 'medium') return 'Budget $180-300/month. Executive plans available $400+.';
    return 'Budget $250-500/month. Executive health plans common in this market.';
  }
};

// Generate all entries
function generateEntries(): CountryPersonaEntry[] {
  const entries: CountryPersonaEntry[] = [];

  for (const countrySlug of targetCountries) {
    const data = countryData[countrySlug];
    if (!data) continue;

    // Format country name from slug
    const countryName = countrySlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    for (const personaSlug of targetPersonas) {
      // Generate considerations for this combo
      const considerationsFn = personaConsiderations[personaSlug];
      const keyConsiderations = considerationsFn
        ? considerationsFn(countryName, data)
        : ['Research visa requirements carefully', 'Compare multiple providers', 'Consider local vs international plans'];

      // Merge country providers with persona preferences
      const personaProviders = personaProviderPreferences[personaSlug] || [];
      const countryProviders = data.topProviders;

      // Prioritize providers that appear in both lists
      const recommendedProviders = [
        ...personaProviders.filter(p => countryProviders.includes(p)),
        ...personaProviders.filter(p => !countryProviders.includes(p))
      ].slice(0, 4);

      // Get visa notes
      const visaNotes = data.visaTypes[personaSlug] || 'Check current visa requirements for your nationality.';

      // Get healthcare notes
      const healthcareNotesFn = personaHealthcareNotes[personaSlug];
      const healthcareNotes = healthcareNotesFn
        ? healthcareNotesFn(data)
        : data.healthcareHighlights;

      // Get cost notes
      const costNotesFn = personaCostNotes[personaSlug];
      const costNotes = costNotesFn
        ? costNotesFn(data)
        : 'Costs vary based on age, coverage level, and pre-existing conditions.';

      entries.push({
        countrySlug,
        personaSlug,
        keyConsiderations,
        recommendedProviders,
        visaNotes,
        healthcareNotes,
        costNotes
      });
    }
  }

  return entries;
}

// Export the generated entries
export const countryPersonaEntries: CountryPersonaEntry[] = generateEntries();

// Helper functions
export function getCountryPersonaEntry(countrySlug: string, personaSlug: string): CountryPersonaEntry | undefined {
  return countryPersonaEntries.find(
    e => e.countrySlug === countrySlug && e.personaSlug === personaSlug
  );
}

export function getPersonasForCountry(countrySlug: string): CountryPersonaEntry[] {
  return countryPersonaEntries.filter(e => e.countrySlug === countrySlug);
}

export function getCountriesForPersona(personaSlug: string): CountryPersonaEntry[] {
  return countryPersonaEntries.filter(e => e.personaSlug === personaSlug);
}

export function getAllCountryPersonaPairs(): { countrySlug: string; personaSlug: string }[] {
  return countryPersonaEntries.map(e => ({
    countrySlug: e.countrySlug,
    personaSlug: e.personaSlug
  }));
}

// Export target lists for page generation
export { targetCountries, targetPersonas };
