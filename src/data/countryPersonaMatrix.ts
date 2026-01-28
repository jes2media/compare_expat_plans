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

// Top 25 countries for initial generation
const targetCountries = [
  'spain', 'portugal', 'mexico', 'thailand', 'costa-rica',
  'france', 'italy', 'germany', 'uk', 'uae',
  'singapore', 'indonesia', 'vietnam', 'australia', 'canada',
  'netherlands', 'panama', 'colombia', 'argentina', 'japan',
  'ecuador', 'south-korea', 'brazil', 'malaysia', 'philippines'
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
