/**
 * countries.seed.ts
 *
 * Seed data for CountryInsuranceHub template demo pages.
 * Contains Spain, Portugal, and Mexico as examples.
 *
 * This data structure is designed to be:
 * - Simple but extensible
 * - Compatible with future CMS or database integration
 * - Easy to validate and maintain
 *
 * NOTE: relatedCards is optional - the template uses standard cards
 * (Best Expat Insurance, Insurance for Retirees, Cigna vs Allianz)
 * unless custom cards are provided.
 */

import type { CountryData } from '../templates/CountryInsuranceHub.astro';

export const countriesSeed: CountryData[] = [
  // =====================
  // SPAIN
  // =====================
  {
    slug: 'spain',
    name: 'Spain',
    demonym: 'Spanish',
    lastUpdated: '2025-01-15',
    heroImage: '/images/countries/spain-hero-bg.png',

    metaTitle: 'Health Insurance for Expats in Spain (2025 Guide)',
    metaDescription: 'Complete guide to expat health insurance in Spain. Visa requirements, public vs private options, provider comparison, and costs.',

    headline: 'Spain Expat Health Insurance',
    subheadline: 'Find the right coverage for living in Spain—whether you need it for a visa, want faster care, or are supplementing the public system.',

    summaryBullets: [
      'Most visas (non-lucrative, digital nomad, student) require private health insurance with no copays.',
      'Spain has good public healthcare (SNS), but expats often need private coverage initially.',
      'Local Spanish insurers (Sanitas, ASSSA) are cheaper but only cover Spain.',
      'International plans cost more but work worldwide and are easier for English speakers.',
      'Expect to pay €60-200/month depending on age and coverage level.',
    ],

    insuranceRequired: true,
    requirementExplanation: 'Spain requires private health insurance for most visa types. The policy must have no copays, cover at least €30,000, and come from an insurer authorized to operate in Spain. EU citizens with EHIC have different rules.',

    whoNeedsInsurance: [
      'Non-lucrative visa applicants (retirement visa)',
      'Digital nomad visa applicants',
      'Student visa holders',
      'Non-EU citizens without social security contributions',
      'Anyone wanting faster access to specialists',
    ],

    publicVsPrivate: {
      publicName: 'Sistema Nacional de Salud (SNS)',
      publicAccess: 'Spanish citizens, legal residents with social security, EU citizens with EHIC',
      publicCost: 'Free or low cost for those who qualify',
      publicNotes: 'Good quality care but can have wait times for specialists. Not available to most non-EU expats initially.',
      privateCost: '€60-200/month',
      privateNotes: 'Faster access, English-speaking doctors, no wait times. Required for most visas.',
    },

    providerCards: [
      {
        name: 'Cigna Global',
        bestFor: 'Expats who travel frequently or want worldwide coverage',
        notIdealFor: 'Those on a tight budget who will stay only in Spain',
        href: '/countries/spain/insurance/cigna-global',
      },
      {
        name: 'Allianz Care',
        bestFor: 'High-deductible savings (up to 60% off) and EU-based service',
        notIdealFor: 'Those who want low out-of-pocket costs',
        href: '/countries/spain/insurance/allianz-care',
      },
      {
        name: 'Sanitas (Local)',
        bestFor: 'Long-term Spain residents who want the best local network',
        notIdealFor: 'Frequent travelers or those who might relocate',
        href: '/providers/sanitas',
      },
      {
        name: 'ASSSA (Local)',
        bestFor: 'Budget-conscious expats staying in Spain long-term',
        notIdealFor: 'Those needing coverage outside Spain',
        href: '/providers/asssa',
      },
    ],

    comparisonRows: [
      {
        provider: 'Cigna Global',
        bestFor: 'Travelers, flexibility',
        coverageStyle: 'International comprehensive',
        includesUS: true,
        notableLimits: 'Higher cost than local options',
        learnMoreHref: '/countries/spain/insurance/cigna-global',
      },
      {
        provider: 'Allianz Care',
        bestFor: 'High-deductible savings',
        coverageStyle: 'International comprehensive',
        includesUS: true,
        notableLimits: 'Deductibles apply',
        learnMoreHref: '/countries/spain/insurance/allianz-care',
      },
      {
        provider: 'BUPA Global',
        bestFor: 'Mental health, pre-existing',
        coverageStyle: 'International premium',
        includesUS: true,
        notableLimits: 'Premium pricing',
        learnMoreHref: '/countries/spain/insurance/bupa-global',
      },
      {
        provider: 'Sanitas',
        bestFor: 'Local network, value',
        coverageStyle: 'Spain-only private',
        includesUS: false,
        notableLimits: 'No coverage outside Spain',
        learnMoreHref: '/providers/sanitas',
      },
      {
        provider: 'ASSSA',
        bestFor: 'Budget option',
        coverageStyle: 'Spain-only private',
        includesUS: false,
        notableLimits: 'Limited international coverage',
        learnMoreHref: '/providers/asssa',
      },
    ],

    watchOuts: [
      'Visa insurance must have NO copays—many plans don\'t qualify.',
      'Some consulates require Spanish-language policy documents.',
      'Local insurers (Sanitas, ASSSA) won\'t cover you outside Spain.',
      'Pre-existing conditions often have 6-24 month waiting periods.',
      'EU citizens should check if EHIC or S1 form covers their situation.',
      'Digital nomad visa has specific insurance requirements—verify before applying.',
    ],

    faqs: [
      {
        question: 'Do I need health insurance for a Spanish visa?',
        answer: 'Yes, for most visa types. Non-lucrative visas, digital nomad visas, and student visas all require private health insurance with no copays and coverage of at least €30,000 from an insurer operating in Spain.',
      },
      {
        question: 'Can I use Spanish public healthcare?',
        answer: 'It depends on your status. If you\'re employed and paying into social security, you can access SNS. EU citizens with EHIC have coverage. Most non-EU expats need private insurance, at least initially.',
      },
      {
        question: 'What\'s cheaper—local or international insurance?',
        answer: 'Local Spanish insurers like Sanitas and ASSSA are typically 30-50% cheaper than international plans. However, they only cover you in Spain and may have more restrictions.',
      },
      {
        question: 'How much does expat health insurance cost in Spain?',
        answer: 'Local plans start around €50-80/month. International plans typically cost €120-200/month. Costs increase with age and comprehensive coverage.',
      },
      {
        question: 'Are pre-existing conditions covered?',
        answer: 'Most insurers have waiting periods (6-24 months) for pre-existing conditions. Some Spanish insurers may exclude them entirely. International insurers generally cover them after the waiting period.',
      },
    ],

    // relatedCards: omitted - uses standard cards from template

    sidebarLinks: [
      { title: 'Cigna Global in Spain', href: '/countries/spain/insurance/cigna-global' },
      { title: 'Allianz Care in Spain', href: '/countries/spain/insurance/allianz-care' },
      { title: 'BUPA Global in Spain', href: '/countries/spain/insurance/bupa-global' },
      { title: 'Insurance for Digital Nomads', href: '/insurance-for/digital-nomads' },
      { title: 'Insurance for Retirees', href: '/insurance-for/retirees' },
    ],
  },

  // =====================
  // PORTUGAL
  // =====================
  {
    slug: 'portugal',
    name: 'Portugal',
    demonym: 'Portuguese',
    lastUpdated: '2025-01-15',
    heroImage: '/images/countries/portugal-hero-bg.png',

    metaTitle: 'Health Insurance for Expats in Portugal (2025 Guide)',
    metaDescription: 'Complete guide to expat health insurance in Portugal. D7 visa requirements, SNS access, provider comparison, and costs.',

    headline: 'Portugal Expat Health Insurance',
    subheadline: 'Find the right coverage for living in Portugal—from visa requirements to accessing the public SNS system.',

    summaryBullets: [
      'D7 (passive income) visa requires private health insurance for the application.',
      'Portugal\'s public healthcare (SNS) is available to residents after registration.',
      'Many expats keep private insurance for faster care and English-speaking doctors.',
      'NHR tax regime (if you qualify) doesn\'t affect insurance requirements.',
      'Expect to pay €80-180/month for quality international coverage.',
    ],

    insuranceRequired: true,
    requirementExplanation: 'Portugal requires proof of health insurance for most visa applications, including the popular D7 visa. Once you become a resident and register with SNS, you can access public healthcare, but many expats maintain private coverage.',

    whoNeedsInsurance: [
      'D7 (passive income) visa applicants',
      'Digital nomad visa applicants',
      'Golden visa applicants',
      'Non-EU citizens before SNS registration',
      'Anyone wanting private care with shorter wait times',
    ],

    publicVsPrivate: {
      publicName: 'Serviço Nacional de Saúde (SNS)',
      publicAccess: 'Portuguese citizens, legal residents (after registration)',
      publicCost: 'Free or low cost for residents',
      publicNotes: 'Quality care but can have wait times. Registration requires residency and NIF (tax number).',
      privateCost: '€80-180/month',
      privateNotes: 'Faster access, English-speaking staff common in Lisbon/Porto. Good for initial visa period.',
    },

    providerCards: [
      {
        name: 'Allianz Care',
        bestFor: 'EU-based service and high-deductible savings options',
        notIdealFor: 'Those wanting US coverage included',
        href: '/countries/portugal/insurance/allianz-care',
      },
      {
        name: 'Cigna Global',
        bestFor: 'Worldwide coverage and strong customer service',
        notIdealFor: 'Budget-focused expats staying only in Portugal',
        href: '/countries/portugal/insurance/cigna-global',
      },
      {
        name: 'BUPA Global',
        bestFor: 'Pre-existing conditions and mental health coverage',
        notIdealFor: 'Those seeking the lowest premiums',
        href: '/countries/portugal/insurance/bupa-global',
      },
      {
        name: 'IMG Global',
        bestFor: 'Budget international coverage',
        notIdealFor: 'Those wanting premium service levels',
        href: '/countries/portugal/insurance/img-global',
      },
    ],

    comparisonRows: [
      {
        provider: 'Allianz Care',
        bestFor: 'High-deductible savings',
        coverageStyle: 'International comprehensive',
        includesUS: true,
        notableLimits: 'Deductibles apply to savings',
        learnMoreHref: '/countries/portugal/insurance/allianz-care',
      },
      {
        provider: 'Cigna Global',
        bestFor: 'Flexibility, global network',
        coverageStyle: 'International comprehensive',
        includesUS: true,
        notableLimits: 'Mid-range pricing',
        learnMoreHref: '/countries/portugal/insurance/cigna-global',
      },
      {
        provider: 'BUPA Global',
        bestFor: 'Mental health, complex needs',
        coverageStyle: 'International premium',
        includesUS: true,
        notableLimits: 'Higher premiums',
        learnMoreHref: '/countries/portugal/insurance/bupa-global',
      },
      {
        provider: 'IMG Global',
        bestFor: 'Budget option',
        coverageStyle: 'International standard',
        includesUS: false,
        notableLimits: '12-month pre-existing exclusion',
        learnMoreHref: '/countries/portugal/insurance/img-global',
      },
    ],

    watchOuts: [
      'D7 visa requires insurance valid for the entire visa period.',
      'SNS registration requires a NIF (tax number) and proof of address.',
      'Wait times for SNS specialists can be long—private insurance helps.',
      'Golden visa applicants need insurance for the application.',
      'Pre-existing conditions may have waiting periods with any insurer.',
      'Some local Portuguese insurers have age limits for new applicants.',
    ],

    faqs: [
      {
        question: 'Do I need insurance for a Portugal D7 visa?',
        answer: 'Yes. You need to show proof of health insurance when applying for the D7 visa. The policy should cover you in Portugal for the visa duration.',
      },
      {
        question: 'Can I use Portuguese public healthcare (SNS)?',
        answer: 'Yes, once you become a legal resident and register. You\'ll need a NIF (tax number) and proof of address. Registration can take time, so private insurance bridges the gap.',
      },
      {
        question: 'Should I keep private insurance after getting SNS access?',
        answer: 'Many expats do. Private insurance provides faster access to specialists, English-speaking doctors, and coverage when traveling outside Portugal.',
      },
      {
        question: 'What does health insurance cost in Portugal?',
        answer: 'International plans typically cost €80-180/month depending on age and coverage. Local Portuguese private insurance may be cheaper but has limitations.',
      },
      {
        question: 'Does NHR tax status affect insurance requirements?',
        answer: 'No. The Non-Habitual Resident tax regime is separate from healthcare. You still need insurance for visa applications regardless of NHR status.',
      },
    ],

    // relatedCards: omitted - uses standard cards from template

    sidebarLinks: [
      { title: 'Allianz Care in Portugal', href: '/countries/portugal/insurance/allianz-care' },
      { title: 'Cigna Global in Portugal', href: '/countries/portugal/insurance/cigna-global' },
      { title: 'BUPA Global in Portugal', href: '/countries/portugal/insurance/bupa-global' },
      { title: 'Insurance for Retirees', href: '/insurance-for/retirees' },
      { title: 'Insurance for Digital Nomads', href: '/insurance-for/digital-nomads' },
    ],
  },

  // =====================
  // MEXICO
  // =====================
  {
    slug: 'mexico',
    name: 'Mexico',
    demonym: 'Mexican',
    lastUpdated: '2025-01-15',
    heroImage: '/images/countries/mexico-hero-bg.png',

    metaTitle: 'Health Insurance for Expats in Mexico (2025 Guide)',
    metaDescription: 'Complete guide to expat health insurance in Mexico. IMSS public option, private plans, and why US Medicare won\'t help.',

    headline: 'Mexico Expat Health Insurance',
    subheadline: 'Find the right coverage in Mexico—from the affordable IMSS public system to international plans with US coverage.',

    summaryBullets: [
      'Mexico does NOT require health insurance for residency visas.',
      'US Medicare does NOT work in Mexico—you need separate coverage.',
      'IMSS (public insurance) costs under $500/year and is open to legal residents.',
      'Private healthcare is excellent and affordable in major cities.',
      'Many expats combine IMSS + private insurance for comprehensive coverage.',
    ],

    insuranceRequired: false,
    requirementExplanation: 'Unlike many countries, Mexico does not require health insurance to obtain temporary or permanent residency. The main visa requirements are financial. However, since US Medicare and most US insurance don\'t work in Mexico, coverage is strongly recommended.',

    whoNeedsInsurance: [
      'US retirees (Medicare doesn\'t work in Mexico)',
      'Anyone wanting access to private hospitals',
      'Expats who travel or might need US care',
      'Those with pre-existing conditions wanting comprehensive coverage',
      'Anyone concerned about medical evacuation',
    ],

    publicVsPrivate: {
      publicName: 'IMSS (Instituto Mexicano del Seguro Social)',
      publicAccess: 'Mexican citizens, temporary & permanent residents',
      publicCost: 'Under $500/year',
      publicNotes: 'Affordable and covers most care, but Spanish-only. Tourists on visitor permits not eligible.',
      privateCost: '$120-200/month (local), $200-400/month (international)',
      privateNotes: 'English-speaking staff, shorter waits, excellent facilities in major cities.',
    },

    providerCards: [
      {
        name: 'IMSS (Public)',
        bestFor: 'Budget-conscious expats who speak Spanish and stay in Mexico',
        notIdealFor: 'Those wanting English service or coverage outside Mexico',
        href: '/countries/mexico/insurance',
      },
      {
        name: 'GNP Seguros (Local)',
        bestFor: 'Long-term residents wanting local private coverage',
        notIdealFor: 'New residents (requires 2 years residency for full coverage)',
        href: '/providers/gnp-seguros',
      },
      {
        name: 'Cigna Global',
        bestFor: 'Expats wanting US coverage and worldwide flexibility',
        notIdealFor: 'Those on a tight budget who don\'t need US coverage',
        href: '/countries/mexico/insurance/cigna-global',
      },
      {
        name: 'IMG Global',
        bestFor: 'Budget international coverage with 50% deductible waiver outside US',
        notIdealFor: 'Those wanting premium service levels',
        href: '/countries/mexico/insurance/img-global',
      },
    ],

    comparisonRows: [
      {
        provider: 'IMSS (Public)',
        bestFor: 'Maximum savings',
        coverageStyle: 'Public comprehensive',
        includesUS: false,
        notableLimits: 'Spanish only, no evacuation',
        learnMoreHref: '/countries/mexico/insurance',
      },
      {
        provider: 'GNP Seguros',
        bestFor: 'Local private, value',
        coverageStyle: 'Mexico private',
        includesUS: false,
        notableLimits: '2-year residency for full coverage',
        learnMoreHref: '/providers/gnp-seguros',
      },
      {
        provider: 'Cigna Global',
        bestFor: 'US border, travelers',
        coverageStyle: 'International comprehensive',
        includesUS: true,
        notableLimits: 'Higher cost',
        learnMoreHref: '/countries/mexico/insurance/cigna-global',
      },
      {
        provider: 'IMG Global',
        bestFor: 'Budget international',
        coverageStyle: 'International standard',
        includesUS: false,
        notableLimits: '12-month pre-existing exclusion',
        learnMoreHref: '/countries/mexico/insurance/img-global',
      },
      {
        provider: 'BUPA Global',
        bestFor: 'Mental health, pre-existing',
        coverageStyle: 'International premium',
        includesUS: true,
        notableLimits: 'Premium pricing',
        learnMoreHref: '/countries/mexico/insurance/bupa-global',
      },
    ],

    watchOuts: [
      'US Medicare does NOT cover care in Mexico—don\'t assume you\'re covered.',
      'IMSS requires legal residency (not tourist/visitor status).',
      'IMSS is Spanish-only—you\'ll need help navigating if you don\'t speak Spanish.',
      'Mexican insurers apply deductibles per incident, not per year.',
      'Medical evacuation isn\'t included in IMSS—consider adding separately.',
      '2026 fee increases for residency visas—apply in 2025 if possible.',
    ],

    faqs: [
      {
        question: 'Do I need insurance for a Mexico residency visa?',
        answer: 'No. Mexico does not require health insurance for temporary or permanent residency. The requirements are financial (income or savings proof).',
      },
      {
        question: 'Does US Medicare work in Mexico?',
        answer: 'No. US Medicare does not cover healthcare outside the United States. If you\'re a US retiree in Mexico, you need separate coverage.',
      },
      {
        question: 'What is IMSS and can I join?',
        answer: 'IMSS is Mexico\'s public social security healthcare. Legal residents (temporary or permanent) can join voluntarily for under $500/year. Tourists on visitor permits cannot join.',
      },
      {
        question: 'Should I get IMSS or private insurance?',
        answer: 'Many expats get both. IMSS is so affordable it\'s worth having for routine care. Private insurance adds English service, shorter waits, and coverage for major issues or evacuation.',
      },
      {
        question: 'How good is Mexican healthcare?',
        answer: 'Healthcare quality in major cities (Mexico City, Guadalajara, Puerto Vallarta) is excellent. Many doctors trained in the US. Private hospitals rival US facilities at a fraction of the cost.',
      },
    ],

    // relatedCards: omitted - uses standard cards from template

    sidebarLinks: [
      { title: 'Cigna Global in Mexico', href: '/countries/mexico/insurance/cigna-global' },
      { title: 'Allianz Care in Mexico', href: '/countries/mexico/insurance/allianz-care' },
      { title: 'IMG Global in Mexico', href: '/countries/mexico/insurance/img-global' },
      { title: 'Insurance for Retirees', href: '/insurance-for/retirees' },
      { title: 'Insurance for Remote Workers', href: '/insurance-for/remote-workers' },
    ],
  },
];

// Helper to get country by slug
export function getCountryBySlug(slug: string): CountryData | undefined {
  return countriesSeed.find(c => c.slug === slug);
}

// Get all country slugs (for getStaticPaths)
export function getAllCountrySlugs(): string[] {
  return countriesSeed.map(c => c.slug);
}
