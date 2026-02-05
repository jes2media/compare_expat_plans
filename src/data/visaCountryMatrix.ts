/**
 * visaCountryMatrix.ts
 *
 * Data for programmatic visa × country page generation.
 * Each entry provides visa-specific content for a country.
 */

export interface VisaCountryEntry {
  visaSlug: string;
  countrySlug: string;
  /** Official visa name in this country */
  officialVisaName: string;
  /** Core requirements (income, savings, etc.) */
  requirements: {
    incomeMinimum?: string;
    savingsMinimum?: string;
    insuranceRequired: boolean;
    insuranceMinimum?: string;
    additionalRequirements: string[];
  };
  /** Visa duration and renewal */
  duration: {
    initial: string;
    renewable: boolean;
    maxStay?: string;
  };
  /** Application process notes */
  applicationProcess: string[];
  /** Insurance-specific notes for this visa */
  insuranceNotes: string;
  /** Healthcare access with this visa */
  healthcareAccess: string;
  /** Cost estimates */
  costs: {
    visaFee: string;
    insuranceRange: string;
  };
  /** Recommended providers for this visa type */
  recommendedProviders: string[];
  /** Key considerations specific to this visa-country combo */
  keyConsiderations: string[];
  /** Common mistakes to avoid */
  commonMistakes: string[];
  /** FAQs specific to this visa-country */
  faqs: Array<{ question: string; answer: string }>;
}

// Countries that have each visa type (realistic mapping)
export const visaCountryAvailability: Record<string, string[]> = {
  'digital-nomad-visa': [
    // Europe
    'spain', 'portugal', 'germany', 'italy', 'greece', 'croatia', 'estonia',
    'latvia', 'czech-republic', 'hungary', 'romania', 'malta', 'cyprus',
    // Middle East
    'uae',
    // Asia
    'thailand', 'indonesia', 'malaysia', 'south-korea', 'taiwan', 'sri-lanka',
    // Americas
    'costa-rica', 'mexico', 'colombia', 'brazil', 'argentina', 'ecuador',
    'panama', 'barbados', 'bahamas', 'cayman-islands', 'curacao', 'aruba', 'jamaica'
  ],
  'retirement-visa': [
    // Europe
    'spain', 'portugal', 'france', 'italy', 'greece', 'ireland',
    // Asia
    'thailand', 'malaysia', 'indonesia', 'philippines',
    // Americas
    'mexico', 'costa-rica', 'panama', 'ecuador', 'colombia', 'nicaragua',
    'belize', 'dominican-republic', 'uruguay',
    // Other
    'south-africa'
  ],
  'student-visa': [
    'uk', 'germany', 'france', 'spain', 'italy', 'netherlands', 'ireland',
    'australia', 'canada', 'new-zealand', 'japan', 'south-korea',
    'singapore', 'switzerland', 'austria', 'belgium', 'sweden',
    'denmark', 'norway', 'czech-republic', 'poland', 'portugal'
  ],
  'freelancer-visa': [
    'germany', 'netherlands', 'czech-republic', 'spain', 'portugal',
    'france', 'austria', 'uae', 'estonia'
  ],
  'investor-visa': [
    'spain', 'portugal', 'uk', 'ireland', 'germany', 'france', 'netherlands',
    'uae', 'singapore', 'canada', 'australia', 'new-zealand',
    'malta', 'cyprus', 'greece'
  ],
  'work-permit': [
    'germany', 'uk', 'france', 'netherlands', 'spain', 'ireland',
    'uae', 'singapore', 'hong-kong', 'japan', 'south-korea', 'australia',
    'canada', 'new-zealand', 'switzerland', 'austria', 'belgium', 'sweden'
  ]
};

export const visaCountryMatrix: VisaCountryEntry[] = [
  // Spain Digital Nomad Visa
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'spain',
    officialVisaName: 'Visado de Nómada Digital',
    requirements: {
      incomeMinimum: '€2,200/month (or €26,400/year)',
      insuranceRequired: true,
      insuranceMinimum: 'Full coverage valid in Spain',
      additionalRequirements: [
        'Proof of remote work for non-Spanish company',
        'Clean criminal record certificate',
        'Professional qualifications or 3+ years relevant experience',
        'No more than 20% of income from Spanish clients'
      ]
    },
    duration: {
      initial: '1 year',
      renewable: true,
      maxStay: '5 years (can lead to permanent residency)'
    },
    applicationProcess: [
      'Apply at Spanish consulate in your home country OR apply in Spain within 60 days of arrival on tourist visa',
      'Gather documents: passport, criminal record, proof of income, insurance, work contract or client letters',
      'Submit application with €80 visa fee',
      'Wait 20 working days (typically 1-2 months) for processing',
      'If approved, schedule biometrics appointment for TIE card (€16 fee)',
      'Receive TIE card within 40 days of biometrics'
    ],
    insuranceNotes: 'Spain requires "full coverage" health insurance (cobertura completa) for the Digital Nomad Visa. Travel medical insurance like SafetyWing or World Nomads is NOT sufficient. You need either annual international health insurance from providers like Cigna Global or Allianz Care, or Spanish private insurance from Sanitas or Adeslas. The policy must cover the entire visa duration and have no coverage gaps.',
    healthcareAccess: 'Digital Nomad Visa holders do NOT have automatic access to Spain\'s public healthcare system (SNS). You must maintain private insurance. After becoming a tax resident and contributing to Social Security for 6+ months, you may be able to access the public system, but this is not guaranteed for all visa holders.',
    costs: {
      visaFee: '€80 visa application + €16 TIE card',
      insuranceRange: '€100-300/month for qualifying international coverage, or €60-150/month for Spanish private insurance'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'axa-global', 'bupa-global'],
    keyConsiderations: [
      'Travel medical insurance (SafetyWing, World Nomads) will NOT be accepted—you need comprehensive annual health insurance',
      'Spanish private insurers (Sanitas, Adeslas) are often cheaper but only cover you in Spain',
      'International insurers cost more but provide worldwide coverage and portability if you leave Spain',
      'Path to permanent residency after 5 years makes Spain attractive for long-term stays',
      'Family members can apply as dependents—each needs their own insurance coverage'
    ],
    commonMistakes: [
      'Applying with travel medical insurance instead of comprehensive health insurance—applications are rejected',
      'Not meeting the income threshold consistently (€2,200/month must be verifiable and ongoing)',
      'Working more than 20% for Spanish clients, which violates visa terms',
      'Waiting more than 60 days after arrival to apply if applying from within Spain',
      'Not translating documents with apostille certification when required',
      'Choosing the cheapest insurance without verifying it meets "full coverage" requirements'
    ],
    faqs: [
      {
        question: 'Will SafetyWing be accepted for Spain\'s Digital Nomad Visa?',
        answer: 'No. SafetyWing is travel medical insurance, not comprehensive health insurance. Spanish authorities require "cobertura completa" (full coverage), which means annual international health insurance or Spanish private insurance. SafetyWing explicitly states they don\'t cover visa requirements and claims for visa purposes may be rejected.'
      },
      {
        question: 'Can I use Spanish public healthcare with the Digital Nomad Visa?',
        answer: 'Not initially. DNV holders are not automatically enrolled in the public system (SNS). You must maintain private insurance throughout your stay. Only after becoming a tax resident and contributing to Social Security may you access public healthcare—and this is not guaranteed for all DNV holders.'
      },
      {
        question: 'Is international insurance or Spanish private insurance better for the DNV?',
        answer: 'It depends on your plans. Spanish private insurance (Sanitas, Adeslas) is cheaper (€60-150/month) but only covers you in Spain. International insurance (Cigna, Allianz) costs more (€150-300/month) but covers you worldwide—important if you travel or might relocate. If you plan to stay in Spain long-term and travel minimally, Spanish insurance is more economical.'
      },
      {
        question: 'What happens if my income drops below €2,200/month?',
        answer: 'Your visa renewal could be at risk. You need to demonstrate consistent income meeting the threshold. Savings can help bridge gaps, but the requirement is primarily about ongoing income. If you anticipate income variability, consider the higher threshold option using savings (€26,400+ in the bank).'
      },
      {
        question: 'Can my spouse and children get Digital Nomad Visas too?',
        answer: 'Yes. Family members can apply as dependents. Each dependent needs their own health insurance meeting the same "full coverage" requirement. The income threshold increases for dependents: add 75% of the minimum (about €1,650) for a spouse and 25% (about €550) per child.'
      },
      {
        question: 'How long does the Digital Nomad Visa application take?',
        answer: 'Official processing time is 20 working days (about 1 month) from submission. In practice, expect 1-2 months. If applying from within Spain on a tourist visa, start immediately upon arrival—you only have 60 days. After approval, the TIE card appointment and issuance adds another 4-6 weeks.'
      }
    ]
  },
  // Portugal Digital Nomad Visa
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'portugal',
    officialVisaName: 'Visto para Trabalhadores Remotos',
    requirements: {
      incomeMinimum: '€3,040/month (4x Portuguese minimum wage)',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance valid in Portugal',
      additionalRequirements: [
        'Proof of remote employment or self-employment',
        'Tax registration from your country of tax residence',
        'Clean criminal record certificate',
        'Proof of accommodation in Portugal'
      ]
    },
    duration: {
      initial: '1 year (temporary residence)',
      renewable: true,
      maxStay: '5 years (can lead to permanent residency/citizenship)'
    },
    applicationProcess: [
      'Apply for D8 visa at Portuguese consulate in your home country',
      'Gather documents: passport, proof of income, insurance, criminal record, accommodation proof',
      'Submit application with visa fee',
      'Wait 2-3 months for processing',
      'If approved, enter Portugal and apply for residence permit (Autorização de Residência) at SEF',
      'Receive residence card valid for 2 years'
    ],
    insuranceNotes: 'Portugal requires valid health insurance covering you in Portugal. Unlike Spain, the requirements are less strictly defined, but you should have comprehensive coverage. Travel medical insurance may not be sufficient for residence permit issuance. International health insurance or Portuguese private insurance are recommended.',
    healthcareAccess: 'After registering as a resident and obtaining your NIF (tax number), you can access Portugal\'s public healthcare system (SNS). However, wait times can be long for non-urgent care. Many expats maintain private insurance for faster access and English-speaking providers.',
    costs: {
      visaFee: '€90 visa application + residence permit fees',
      insuranceRange: '€80-250/month for qualifying coverage'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'safetywing', 'img-global'],
    keyConsiderations: [
      'Higher income requirement (€3,040/month) than Spain\'s DNV',
      'NHR (Non-Habitual Resident) tax regime can provide significant tax benefits for 10 years',
      'Path to citizenship after 5 years of residence (one of the fastest in EU)',
      'Access to public healthcare after obtaining residence',
      'Strong expat community, especially in Lisbon and Porto'
    ],
    commonMistakes: [
      'Confusing the D8 visa with the older D7 visa (passive income visa for retirees)',
      'Not having accommodation proof before applying',
      'Underestimating the €3,040/month income requirement',
      'Not applying for NHR tax status within the deadline after becoming resident',
      'Assuming travel insurance is sufficient for the residence permit stage'
    ],
    faqs: [
      {
        question: 'What\'s the difference between Portugal\'s D7 and D8 visas?',
        answer: 'The D7 is for people with passive income (pensions, investments, rental income). The D8 is specifically for remote workers with active income from employment or freelancing outside Portugal. The D8 has a higher income requirement (€3,040/month vs €760/month) but is designed for working professionals.'
      },
      {
        question: 'Can I access Portugal\'s public healthcare with the Digital Nomad Visa?',
        answer: 'Yes, but not immediately. After obtaining your residence permit and NIF (tax number), you can register with the local health center (Centro de Saúde). However, many expats find wait times long and maintain private insurance for faster access and English-speaking doctors.'
      },
      {
        question: 'Is SafetyWing accepted for Portugal\'s D8 visa?',
        answer: 'For the initial visa application, SafetyWing may be accepted as proof of insurance. However, for the residence permit stage, more comprehensive coverage is recommended. Many expats upgrade to international health insurance once they become residents.'
      },
      {
        question: 'What is the NHR tax regime and should I apply?',
        answer: 'The NHR (Non-Habitual Resident) regime offers significant tax benefits for 10 years, including 20% flat tax on Portuguese-source income and potential exemptions on foreign income. You must apply within 12 months of becoming a tax resident. Consult a tax advisor—it can save thousands annually.'
      },
      {
        question: 'Can I bring my family on the Digital Nomad Visa?',
        answer: 'Yes. Spouses, children, and dependent parents can apply for family reunification visas. The income requirement increases by 50% for a spouse and 30% per child. Each family member needs their own health insurance.'
      },
      {
        question: 'How long until I can get Portuguese citizenship?',
        answer: 'After 5 years of legal residence, you can apply for Portuguese citizenship. You\'ll need to pass a basic Portuguese language test (A2 level). Portugal allows dual citizenship, so you don\'t need to renounce your original nationality.'
      }
    ]
  },
  // Germany Digital Nomad Visa (Freiberufler/Self-Employment route)
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'germany',
    officialVisaName: 'Aufenthaltserlaubnis für selbständige Tätigkeit',
    requirements: {
      incomeMinimum: 'No fixed minimum, but must prove economic viability',
      insuranceRequired: true,
      insuranceMinimum: 'Comprehensive health insurance (public or private)',
      additionalRequirements: [
        'Proof of freelance/remote work contracts or clients',
        'Business plan showing economic interest to Germany',
        'Proof of sufficient funds for living expenses',
        'Professional qualifications or experience in your field',
        'Clean criminal record'
      ]
    },
    duration: {
      initial: '1-3 years (varies by case)',
      renewable: true,
      maxStay: 'Unlimited (can lead to permanent residency after 5 years)'
    },
    applicationProcess: [
      'Apply for freelance visa at German embassy/consulate in home country',
      'Prepare comprehensive application: business plan, client contracts, financial proof, insurance',
      'Attend visa interview',
      'If approved, enter Germany and register at local Ausländerbehörde (foreigners office)',
      'Complete Anmeldung (address registration) within 2 weeks of arrival',
      'Receive residence permit (Aufenthaltstitel)'
    ],
    insuranceNotes: 'Germany requires comprehensive health insurance—either public (gesetzliche Krankenversicherung) or private (private Krankenversicherung). For freelancers earning above €69,300/year, private insurance is an option. Below this, you may need to join public insurance. International health insurance is generally NOT accepted for residence permits—you need German-compliant coverage.',
    healthcareAccess: 'Once enrolled in German health insurance (public or private), you have full access to Germany\'s excellent healthcare system. Public insurance covers most services with small co-pays. Private insurance often provides faster access to specialists and private hospital rooms.',
    costs: {
      visaFee: '€75 visa application + residence permit fees',
      insuranceRange: '€200-400/month for private insurance, or 14.6% of income for public insurance'
    },
    recommendedProviders: ['allianz-care', 'cigna-global', 'bupa-global', 'axa-global'],
    keyConsiderations: [
      'Germany has no official "digital nomad visa"—freelancers use the self-employment residence permit',
      'International health insurance typically NOT accepted—you need German public or private insurance',
      'Private insurance is cheaper when young but increases with age; public insurance is income-based',
      'Must register address (Anmeldung) within 2 weeks of arrival',
      'Path to permanent residency after 5 years, citizenship possible after 8 years'
    ],
    commonMistakes: [
      'Assuming international health insurance will be accepted—it usually isn\'t for residence permits',
      'Not having a strong enough business plan showing benefit to German economy',
      'Forgetting to do Anmeldung (address registration) within the required timeframe',
      'Choosing private insurance without understanding it\'s hard to switch back to public later',
      'Underestimating the bureaucracy—German visa processes are thorough'
    ],
    faqs: [
      {
        question: 'Does Germany have a Digital Nomad Visa?',
        answer: 'Not officially. Germany uses the freelance/self-employment visa (Freiberufler visa) for remote workers. You need to demonstrate your work benefits Germany economically, which can be challenging for pure remote workers with no German clients. Some succeed by emphasizing their professional expertise and tax contributions.'
      },
      {
        question: 'Will my international health insurance be accepted?',
        answer: 'Usually not. German authorities require insurance that meets German standards—either public (gesetzliche) or private German insurance (private Krankenversicherung). International plans like Cigna or Allianz may be accepted initially but you\'ll likely need to switch to German insurance for your residence permit.'
      },
      {
        question: 'Should I choose public or private health insurance in Germany?',
        answer: 'It depends on your income and age. Public insurance costs 14.6% of income (plus 1.6% nursing care) but has no age-based increases. Private insurance is often cheaper when young (€200-400/month) but increases with age and is hard to leave once you join. Freelancers earning under €69,300/year must generally join public insurance.'
      },
      {
        question: 'How difficult is the German freelance visa to get?',
        answer: 'Moderately difficult. You need to prove your work benefits Germany, which is easier for certain professions (IT, consulting, creative fields). Having German clients helps significantly. The process is bureaucratic but straightforward if your documentation is complete.'
      },
      {
        question: 'Can I work for non-German companies on a freelance visa?',
        answer: 'Yes, but you need to demonstrate some connection to or benefit for Germany. This could be paying German taxes, contributing expertise, or having some German clients. Pure remote work for foreign companies with no German connection is harder to justify.'
      },
      {
        question: 'How long until I can get permanent residency in Germany?',
        answer: 'After 5 years of continuous residence with a valid permit, you can apply for a settlement permit (Niederlassungserlaubnis). You\'ll need to prove German language skills (B1 level), financial stability, and adequate pension contributions or savings.'
      }
    ]
  },
  // Thailand Digital Nomad Visa (LTR Visa)
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'thailand',
    officialVisaName: 'Long-Term Resident (LTR) Visa - Work-from-Thailand',
    requirements: {
      incomeMinimum: '$80,000/year for the past 2 years',
      savingsMinimum: '$250,000 in assets (alternative path)',
      insuranceRequired: true,
      insuranceMinimum: '$50,000 coverage or Thai Social Security',
      additionalRequirements: [
        'Employment with established company (publicly listed or with $150M+ revenue)',
        'OR 5+ years experience in target industry',
        'Clean criminal record',
        'Must work remotely for non-Thai employer'
      ]
    },
    duration: {
      initial: '5 years',
      renewable: true,
      maxStay: '10 years (renewable 5+5)'
    },
    applicationProcess: [
      'Apply online through Thailand Board of Investment (BOI) website',
      'Submit documents: employment verification, income proof, insurance, background check',
      'Wait 20-30 working days for BOI endorsement',
      'If endorsed, apply for LTR visa at Thai embassy/consulate',
      'Receive 5-year multiple entry visa',
      'Report to immigration every 90 days (can be done online)'
    ],
    insuranceNotes: 'The LTR Work-from-Thailand category requires health insurance with minimum $50,000 coverage, OR enrollment in Thai Social Security. Most international health insurance plans meet this requirement. Travel medical insurance (SafetyWing) may be accepted if it meets the coverage minimum. Keep proof of coverage readily available.',
    healthcareAccess: 'Thailand has excellent private healthcare at affordable prices. Bangkok hospitals (Bumrungrad, BNH, Samitivej) are world-class. LTR visa holders can use private hospitals directly with their insurance. Public hospitals are very affordable but have longer waits and less English support.',
    costs: {
      visaFee: '50,000 THB ($1,400) for 5-year LTR visa',
      insuranceRange: '$100-250/month for international coverage meeting requirements'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'pacific-cross'],
    keyConsiderations: [
      'High income requirement ($80,000/year) excludes many digital nomads',
      'Alternative: Tourist visa + border runs, but this is increasingly risky and not recommended long-term',
      'Thai Elite Visa ($16,000-60,000) is another option without income requirements',
      'LTR visa includes 17% flat tax rate on Thai income (vs 35% normal top rate)',
      '90-day reporting required but can be done online'
    ],
    commonMistakes: [
      'Assuming the LTR visa is accessible—the $80,000 income requirement is high',
      'Overstaying tourist visas or doing too many border runs (can result in entry bans)',
      'Not having insurance documents readily available for immigration checks',
      'Forgetting 90-day reporting (results in fines and complications)',
      'Working in Thailand for Thai clients without proper work authorization'
    ],
    faqs: [
      {
        question: 'Is there a Thailand Digital Nomad Visa?',
        answer: 'The LTR Work-from-Thailand visa is Thailand\'s closest option, but it requires $80,000/year income—too high for many nomads. Alternatives include tourist visa extensions (risky long-term), Thailand Elite Visa ($16,000+ one-time), or ED visa for language study. Thailand is working on a more accessible nomad visa but it\'s not yet available.'
      },
      {
        question: 'Can I use SafetyWing for the Thailand LTR visa?',
        answer: 'Potentially yes, if your SafetyWing coverage meets the $50,000 minimum. Check your policy limits. However, for a 5-year stay, comprehensive international health insurance is more appropriate than travel medical coverage. Consider upgrading to a proper expat health plan.'
      },
      {
        question: 'What if I don\'t qualify for the LTR visa?',
        answer: 'Options include: Thailand Elite Visa (5-20 years, $16,000-60,000, no income requirement), ED Visa (study Thai language), or periodic tourist visa entries. The Elite visa is popular with digital nomads who want legal long-term status without high income requirements.'
      },
      {
        question: 'How good is healthcare in Thailand?',
        answer: 'Excellent, especially in Bangkok. Bumrungrad, BNH, and Samitivej are internationally accredited. Costs are 50-70% less than the US for equivalent care. Private hospitals have English-speaking staff. With insurance, you can access world-class care affordably.'
      },
      {
        question: 'What is 90-day reporting?',
        answer: 'All foreigners staying in Thailand on long-term visas must report their address to immigration every 90 days. This can be done online, by mail, or in person. Missing a report results in a 2,000 THB fine and can complicate future visa renewals.'
      },
      {
        question: 'Can I work for Thai clients on the LTR visa?',
        answer: 'The LTR Work-from-Thailand visa is specifically for remote work for non-Thai employers. Working for Thai clients or companies requires a different visa category and work permit. Violations can result in visa revocation and deportation.'
      }
    ]
  },
  // Mexico Digital Nomad Visa (Temporary Resident)
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'mexico',
    officialVisaName: 'Residente Temporal (Temporary Resident Visa)',
    requirements: {
      incomeMinimum: '$2,500/month for past 6 months',
      savingsMinimum: '$43,000 in savings (alternative path)',
      insuranceRequired: false,
      insuranceMinimum: 'Not required but strongly recommended',
      additionalRequirements: [
        'Proof of income via bank statements (6 months)',
        'Valid passport with 6+ months validity',
        'Completed visa application form',
        'Passport photos meeting Mexican specifications',
        'Clean criminal record (not always required)'
      ]
    },
    duration: {
      initial: '1 year',
      renewable: true,
      maxStay: '4 years (can lead to permanent residency)'
    },
    applicationProcess: [
      'Apply at Mexican consulate in your home country (cannot apply from within Mexico)',
      'Submit documents: bank statements, passport, application form, photos',
      'Attend visa interview',
      'If approved, receive visa sticker in passport',
      'Enter Mexico and exchange visa for Temporary Resident Card at INM within 30 days',
      'Receive plastic Temporary Resident Card valid for 1 year'
    ],
    insuranceNotes: 'Mexico does not require health insurance for the Temporary Resident visa. However, you\'re strongly advised to have coverage. Mexican public healthcare (IMSS) is available to residents for a fee (~$500/year) but has long waits. Private hospitals in major cities offer excellent care but can be expensive without insurance.',
    healthcareAccess: 'Temporary residents can enroll in IMSS (public healthcare) for about $500/year. Private healthcare is excellent in major cities—Hospital Angeles, Médica Sur, and ABC Hospital in Mexico City are world-class. Costs are 30-50% less than the US. Many expats use private insurance for faster, English-language care.',
    costs: {
      visaFee: '$50 visa application + ~$150 residence card fee',
      insuranceRange: '$80-200/month for international coverage (optional but recommended)'
    },
    recommendedProviders: ['cigna-global', 'img-global', 'safetywing', 'allianz-care'],
    keyConsiderations: [
      'Mexico has no official "digital nomad visa"—Temporary Resident is the standard path',
      'Insurance not required but highly recommended—medical emergencies can be costly',
      'IMSS public healthcare is affordable ($500/year) but has limitations',
      'Many nomads use 180-day tourist visa renewals, but this doesn\'t allow legal work',
      'Path to permanent residency after 4 years as Temporary Resident'
    ],
    commonMistakes: [
      'Trying to apply for Temporary Resident visa from within Mexico (must apply at consulate abroad)',
      'Not exchanging the visa for a Resident Card within 30 days of entry',
      'Assuming tourist visa allows legal remote work (gray area—Temporary Resident is safer)',
      'Skipping insurance because it\'s not required (risky given potential medical costs)',
      'Not keeping bank statements showing consistent income history'
    ],
    faqs: [
      {
        question: 'Does Mexico have a Digital Nomad Visa?',
        answer: 'Not officially. The Temporary Resident visa is used by most digital nomads for legal long-term stays. Many also use the 180-day tourist visa (renewed by border runs), but this doesn\'t technically permit work—even remote work for non-Mexican employers exists in a legal gray area on tourist status.'
      },
      {
        question: 'Do I need health insurance for Mexico\'s Temporary Resident visa?',
        answer: 'No, it\'s not required. But you should have it. Private hospital care in Mexico can cost thousands of dollars without insurance. You can enroll in IMSS public healthcare for ~$500/year as a resident, but waits are long and English support is limited.'
      },
      {
        question: 'Can I work remotely on a Mexican tourist visa?',
        answer: 'Technically, any work—including remote work for foreign companies—requires a work visa or residence permit. In practice, enforcement is minimal for remote workers. However, the Temporary Resident visa provides legal certainty and is worth getting for stays over 6 months.'
      },
      {
        question: 'What\'s the income requirement for Mexico\'s Temporary Resident visa?',
        answer: 'You need to show approximately $2,500/month income (varies by consulate) for the past 6 months via bank statements. Alternatively, you can show savings of about $43,000. Requirements vary by consulate—some are stricter than others.'
      },
      {
        question: 'Can I apply for the Temporary Resident visa while in Mexico?',
        answer: 'No. You must apply at a Mexican consulate in your country of residence or citizenship. After approval, you enter Mexico and exchange the visa for a Temporary Resident Card at an INM office within 30 days.'
      },
      {
        question: 'How long until I can get permanent residency in Mexico?',
        answer: 'After 4 years as a Temporary Resident, you can apply for Permanent Residency (Residente Permanente). This removes income requirements and allows you to work freely. You can also qualify through marriage to a Mexican citizen (2 years) or other family ties.'
      }
    ]
  },
  // Costa Rica Digital Nomad Visa
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'costa-rica',
    officialVisaName: 'Visa de Nómada Digital',
    requirements: {
      incomeMinimum: '$3,000/month (or $5,000/month for families)',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance covering Costa Rica for visa duration',
      additionalRequirements: [
        'Proof of remote employment for non-Costa Rican company',
        'Bank statements showing income for past 12 months',
        'Clean criminal record from country of residence',
        'Valid passport with 6+ months validity'
      ]
    },
    duration: {
      initial: '1 year',
      renewable: true,
      maxStay: '2 years (1+1 renewal)'
    },
    applicationProcess: [
      'Apply online through Costa Rica immigration (DGME) portal',
      'Submit documents: income proof, insurance certificate, criminal record, passport copy',
      'Pay $100 application fee',
      'Wait 15-30 working days for processing',
      'If approved, receive digital approval letter',
      'Enter Costa Rica and register at DGME office to activate visa'
    ],
    insuranceNotes: 'Costa Rica requires health insurance valid in the country for the entire visa duration. The Costa Rican government accepts international health insurance (Cigna, Allianz, etc.) as well as local insurers like INS. Travel medical insurance may be accepted if it provides comprehensive coverage. The policy must specifically name Costa Rica as a covered country.',
    healthcareAccess: 'Costa Rica has excellent healthcare for Latin America. CAJA (public system) is available to residents who contribute. Private hospitals like CIMA, Clínica Bíblica, and Hospital Metropolitano in San José offer high-quality care. Medical tourism is common—procedures cost 40-60% less than the US.',
    costs: {
      visaFee: '$100 application fee',
      insuranceRange: '$100-250/month for qualifying international coverage'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'img-global', 'bupa-global'],
    keyConsiderations: [
      'One of the first countries to create a dedicated Digital Nomad Visa (launched 2021)',
      'Income requirement ($3,000/month) is moderate compared to other DNVs',
      'Health insurance is required and must cover Costa Rica specifically',
      'Cannot lead to permanent residency—must apply through different visa category',
      'Costa Rica has no income tax on foreign-source income for non-residents'
    ],
    commonMistakes: [
      'Assuming the DNV leads to permanent residency (it doesn\'t—you need a different visa category)',
      'Getting insurance that doesn\'t specifically list Costa Rica as a covered country',
      'Not having 12 months of bank statements ready (they verify income history)',
      'Forgetting to register at DGME office after arrival to activate the visa',
      'Underestimating the cost of living in Costa Rica (higher than other Latin American countries)'
    ],
    faqs: [
      {
        question: 'Does Costa Rica\'s Digital Nomad Visa lead to permanent residency?',
        answer: 'No. The DNV is a temporary visa (2 years maximum) and doesn\'t lead to residency. For permanent residency, you\'d need to apply through other categories like Rentista (proof of income), Pensionado (retirees), or Inversionista (investors). After 3 years of legal residency through these visas, you can apply for permanent residency.'
      },
      {
        question: 'What insurance is accepted for Costa Rica\'s Digital Nomad Visa?',
        answer: 'Costa Rica accepts international health insurance from major providers (Cigna, Allianz, BUPA, etc.) as well as local insurers like INS (Instituto Nacional de Seguros). The policy must cover Costa Rica specifically and be valid for the entire visa duration. Travel medical insurance may work if it meets coverage requirements.'
      },
      {
        question: 'Is Costa Rica expensive for digital nomads?',
        answer: 'Moderately. Costa Rica is more expensive than Mexico, Colombia, or Southeast Asia. Expect $1,500-2,500/month for a comfortable lifestyle in the Central Valley, more in beach towns. The $3,000 income requirement roughly matches what you\'d need to live comfortably.'
      },
      {
        question: 'Do I pay taxes in Costa Rica on my remote income?',
        answer: 'Generally no. Costa Rica uses territorial taxation—only income sourced from Costa Rica is taxable. Remote work income from foreign companies is typically not taxable. However, consult a local tax advisor for your specific situation, especially if you work for Costa Rican clients.'
      },
      {
        question: 'Can my family join me on the Digital Nomad Visa?',
        answer: 'Yes. Dependents (spouse and children under 25) can be included in your application. The income requirement increases to $5,000/month for families. Each dependent needs their own health insurance coverage.'
      },
      {
        question: 'How is healthcare in Costa Rica?',
        answer: 'Very good. Costa Rica ranks highly in healthcare for Latin America. Private hospitals in San José (CIMA, Clínica Bíblica) offer US-comparable care at 40-60% lower costs. The public system (CAJA) is affordable but has longer waits. Medical tourism is common for dentistry, cosmetic surgery, and elective procedures.'
      }
    ]
  },
  // UAE Digital Nomad Visa (Dubai)
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'uae',
    officialVisaName: 'Virtual Working Program / Remote Work Visa',
    requirements: {
      incomeMinimum: '$3,500/month (or equivalent)',
      insuranceRequired: true,
      insuranceMinimum: 'UAE-valid health insurance',
      additionalRequirements: [
        'Proof of employment with company outside UAE (minimum 1 year tenure)',
        'Employment contract showing salary',
        'Bank statements for past 3 months',
        'Valid passport with 6+ months validity',
        'Passport-sized photo'
      ]
    },
    duration: {
      initial: '1 year',
      renewable: true,
      maxStay: 'Renewable annually'
    },
    applicationProcess: [
      'Apply online through Dubai government portal or GDRFA app',
      'Submit documents: employment proof, salary certificate, bank statements, insurance',
      'Pay 611 AED ($166) application fee',
      'Wait 5-7 working days for processing',
      'If approved, receive visa and Emirates ID',
      'Complete medical fitness test and biometrics in UAE'
    ],
    insuranceNotes: 'UAE requires health insurance valid in the Emirates. Most international health insurance plans are accepted. The UAE has mandatory health insurance for residents in some emirates (Dubai, Abu Dhabi). For the remote work visa, you must provide proof of health coverage—either international insurance or a local UAE policy.',
    healthcareAccess: 'UAE healthcare is excellent but expensive. Dubai and Abu Dhabi have world-class private hospitals (Cleveland Clinic Abu Dhabi, Mediclinic, Aster). Public hospitals are available but primarily serve Emirati citizens. Insurance is essential—a basic hospital visit can cost 1,000+ AED without coverage.',
    costs: {
      visaFee: '611 AED ($166) + Emirates ID fee + medical test',
      insuranceRange: '$150-350/month for international coverage'
    },
    recommendedProviders: ['cigna-global', 'bupa-global', 'allianz-care', 'axa-global'],
    keyConsiderations: [
      'No income tax in UAE—your earnings are tax-free (but check your home country obligations)',
      'High cost of living in Dubai—budget $3,000-5,000/month minimum',
      'Insurance is mandatory and enforced—don\'t skip it',
      'Cannot work for UAE-based clients or companies on this visa',
      'Fast processing (5-7 days) compared to other DNVs'
    ],
    commonMistakes: [
      'Underestimating the cost of living in Dubai (it\'s expensive)',
      'Assuming tax-free means no tax obligations (your home country may still tax you)',
      'Not having insurance before arrival—it\'s required for the visa',
      'Working for UAE clients on the remote work visa (not permitted)',
      'Forgetting that visa doesn\'t include dependents—they need separate applications'
    ],
    faqs: [
      {
        question: 'Is income really tax-free in Dubai?',
        answer: 'UAE has no personal income tax, so your earnings within the UAE are tax-free. However, your home country may still require you to pay taxes on worldwide income (especially the US and some European countries). You may also owe social security contributions. Consult a tax advisor about your specific obligations.'
      },
      {
        question: 'What insurance is accepted for the UAE Remote Work Visa?',
        answer: 'Most international health insurance plans from major providers (Cigna, BUPA, Allianz, Aetna) are accepted. You can also purchase local UAE insurance. The key requirement is that the policy must be valid in the UAE. Keep your insurance certificate readily available.'
      },
      {
        question: 'How expensive is Dubai for digital nomads?',
        answer: 'Very expensive. Budget $3,000-5,000/month minimum for a comfortable lifestyle. Rent alone in a decent area is $1,500-2,500/month. Food, transport, and entertainment add up quickly. The $3,500 income requirement is the minimum—you\'ll likely want more.'
      },
      {
        question: 'Can I bring my family on the Remote Work Visa?',
        answer: 'Not automatically. Family members need separate visa applications. You can sponsor dependents once you have your visa, but each person needs their own application and insurance coverage. Budget for additional visa fees and insurance costs.'
      },
      {
        question: 'Can I work for UAE companies on this visa?',
        answer: 'No. The Remote Work Visa is specifically for working remotely for companies outside the UAE. Working for UAE-based clients or companies requires a different visa type and work permit. Violations can result in visa cancellation and fines.'
      },
      {
        question: 'How does this visa compare to a UAE Freelance Visa?',
        answer: 'The Remote Work Visa is for employees of foreign companies. The Freelance Visa (available in Dubai and other free zones) allows you to work for UAE clients as a self-employed individual. The freelance visa costs more ($3,000-5,000/year) but offers more flexibility for local work.'
      }
    ]
  },
  // Croatia Digital Nomad Visa
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'croatia',
    officialVisaName: 'Digital Nomad Residence Permit',
    requirements: {
      incomeMinimum: '€2,539.31/month (2.5x Croatian average salary)',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance valid in Croatia',
      additionalRequirements: [
        'Proof of remote work for non-Croatian company',
        'Employment contract or proof of business ownership',
        'Bank statements showing income',
        'Proof of accommodation in Croatia',
        'Clean criminal record'
      ]
    },
    duration: {
      initial: '1 year',
      renewable: false,
      maxStay: '1 year (must leave for 6 months before reapplying)'
    },
    applicationProcess: [
      'Apply at Croatian embassy/consulate OR at local police station in Croatia',
      'Submit documents: income proof, insurance, accommodation, work contract',
      'Pay administrative fee (varies)',
      'Wait 30-60 days for processing',
      'If approved, receive temporary stay permit',
      'Register with local authorities within 30 days'
    ],
    insuranceNotes: 'Croatia requires health insurance valid in Croatia for the permit duration. International health insurance is generally accepted. Croatia has a reciprocal healthcare agreement with some EU countries, but digital nomads from outside the EU need private coverage. The HZZO (Croatian Health Insurance Fund) is not available to DNV holders.',
    healthcareAccess: 'Digital nomad visa holders do NOT have access to Croatia\'s public healthcare system (HZZO). You must rely on private insurance. Private clinics in Zagreb, Split, and Dubrovnik offer good care. For serious procedures, consider medical evacuation coverage to Austria, Germany, or Italy.',
    costs: {
      visaFee: '€70-100 (varies)',
      insuranceRange: '€80-200/month for qualifying coverage'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'safetywing', 'img-global'],
    keyConsiderations: [
      'One of the first EU countries to offer a Digital Nomad Visa (2021)',
      'Cannot be renewed or extended—maximum 1 year stay',
      'Must leave Croatia for 6 months before reapplying',
      'No access to public healthcare—private insurance essential',
      'No path to permanent residency through this visa'
    ],
    commonMistakes: [
      'Assuming you can renew the visa (you cannot—it\'s a one-time 1-year permit)',
      'Not understanding the 6-month gap requirement before reapplying',
      'Expecting access to public healthcare (DNV holders are excluded)',
      'Underestimating costs in popular areas (Dubrovnik and Split are expensive)',
      'Working for Croatian clients (not permitted on DNV)'
    ],
    faqs: [
      {
        question: 'Can I renew Croatia\'s Digital Nomad Visa?',
        answer: 'No. The permit is valid for 1 year maximum and cannot be renewed or extended. After your year expires, you must leave Croatia for at least 6 months before you can apply again. This makes Croatia less suitable for long-term stays compared to Spain or Portugal.'
      },
      {
        question: 'Can I access Croatian public healthcare with the DNV?',
        answer: 'No. Digital nomad visa holders are explicitly excluded from HZZO (Croatian public health insurance). You must have private insurance throughout your stay. For serious medical issues, consider plans with medical evacuation to Austria, Germany, or Italy.'
      },
      {
        question: 'Is Croatia expensive for digital nomads?',
        answer: 'It varies significantly by location. Zagreb is moderate (€1,500-2,000/month). Coastal cities like Split and Dubrovnik are expensive in summer (€2,500+/month). Off-season, prices drop significantly. The €2,539 income requirement is reasonable for comfortable living.'
      },
      {
        question: 'Does Croatia\'s DNV lead to residency?',
        answer: 'No. The digital nomad visa is specifically designed as a temporary permit with no path to permanent residency. If you want long-term residency in Croatia, you\'d need to apply through other categories (employment, business, family ties, or EU citizenship).'
      },
      {
        question: 'Can I travel within the EU on Croatia\'s DNV?',
        answer: 'Yes. As Croatia is part of the Schengen Area, your residence permit allows visa-free travel throughout the Schengen zone for up to 90 days per 180-day period. You can explore Europe while based in Croatia.'
      },
      {
        question: 'What happens if I overstay the 1-year permit?',
        answer: 'Overstaying is a serious offense. You\'ll face fines, potential deportation, and could be banned from Croatia and the Schengen Area for up to 5 years. Leave before your permit expires and respect the 6-month gap before reapplying.'
      }
    ]
  },
  // Colombia Digital Nomad Visa
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'colombia',
    officialVisaName: 'Visa V - Nómada Digital',
    requirements: {
      incomeMinimum: '3x Colombian minimum wage (~$900/month)',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance covering Colombia',
      additionalRequirements: [
        'Proof of remote work (employment contract or client letters)',
        'Bank statements showing income',
        'Motivational letter explaining why you want to live in Colombia',
        'Valid passport with 6+ months validity',
        'No criminal record'
      ]
    },
    duration: {
      initial: '2 years',
      renewable: false,
      maxStay: '2 years (can apply for different visa type after)'
    },
    applicationProcess: [
      'Apply online through Colombian Ministry of Foreign Affairs website',
      'Upload documents: income proof, insurance, motivation letter, work proof',
      'Pay $55 application fee',
      'Wait 5-30 days for processing',
      'If approved, download digital visa',
      'Register with Migración Colombia within 15 days of arrival'
    ],
    insuranceNotes: 'Colombia requires health insurance covering the country for the visa duration. International health insurance is accepted. Colombia also has affordable local insurance options (EPS mandatory, prepaid medicine optional). Many expats use international insurance for broader coverage and easier reimbursement.',
    healthcareAccess: 'Colombia has a two-tier healthcare system. The public system (EPS) is available to all residents for a low monthly fee. Private healthcare (prepaid medicine) offers faster access. Major cities have excellent hospitals—Fundación Santa Fe, Clínica del Country in Bogotá; Clínica Las Américas in Medellín.',
    costs: {
      visaFee: '$55 application fee',
      insuranceRange: '$50-150/month for international coverage'
    },
    recommendedProviders: ['cigna-global', 'img-global', 'safetywing', 'allianz-care'],
    keyConsiderations: [
      'Very low income requirement (~$900/month) makes this one of the most accessible DNVs',
      '2-year duration is longer than most DNVs',
      'Cannot be renewed as the same visa type—must apply for different category',
      'Affordable cost of living, especially in Medellín and smaller cities',
      'Must register with Migración Colombia within 15 days of arrival'
    ],
    commonMistakes: [
      'Forgetting to register with Migración Colombia within 15 days (results in fines)',
      'Not writing a strong motivation letter (this is reviewed carefully)',
      'Underestimating security considerations in some areas',
      'Assuming the DNV can be renewed (it cannot—you\'d need a different visa type)',
      'Not getting a cédula de extranjería (foreign ID card) which simplifies life in Colombia'
    ],
    faqs: [
      {
        question: 'What is Colombia\'s income requirement for the Digital Nomad Visa?',
        answer: 'Colombia requires 3x the minimum wage, which is approximately $900/month—one of the lowest requirements of any DNV worldwide. This makes Colombia very accessible for freelancers and remote workers with moderate income.'
      },
      {
        question: 'Can I renew Colombia\'s Digital Nomad Visa?',
        answer: 'No, the digital nomad visa cannot be renewed as the same category. After 2 years, you\'d need to apply for a different visa type (like the M visa for work or R visa for residency if you qualify). Many nomads simply reapply for a new digital nomad visa from outside Colombia.'
      },
      {
        question: 'Is Colombia safe for digital nomads?',
        answer: 'Generally yes in major cities and expat areas. Medellín, Bogotá (especially northern areas), Cartagena, and Santa Marta have large expat communities and are considered safe with normal precautions. Avoid certain neighborhoods, don\'t flash valuables, and use common sense. The security situation has improved dramatically over the past 20 years.'
      },
      {
        question: 'How is healthcare in Colombia?',
        answer: 'Excellent in major cities. Colombia is a medical tourism destination with modern hospitals and English-speaking doctors. The public EPS system costs ~$20/month and covers basic care. Private "prepaid medicine" plans ($50-100/month) provide faster access to better facilities.'
      },
      {
        question: 'What is the cédula de extranjería?',
        answer: 'The cédula de extranjería is a Colombian ID card for foreigners with visas longer than 3 months. You\'ll need it to open bank accounts, sign rental contracts, and access many services. Apply at Migración Colombia after registering your visa. Processing takes 2-4 weeks.'
      },
      {
        question: 'What\'s the best city in Colombia for digital nomads?',
        answer: 'Medellín is the most popular—great weather year-round, strong nomad community, excellent internet, and affordable costs. Bogotá is cooler and larger with more cultural offerings. Cartagena and Santa Marta offer beach lifestyle but with more humidity and higher tourist prices.'
      }
    ]
  },
  // Indonesia Digital Nomad Visa (Second Home Visa)
  {
    visaSlug: 'digital-nomad-visa',
    countrySlug: 'indonesia',
    officialVisaName: 'Second Home Visa (Visa Tinggal Terbatas)',
    requirements: {
      incomeMinimum: 'No fixed income requirement',
      savingsMinimum: '$130,000 in bank account OR $2,000/month passive income proof',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance covering Indonesia',
      additionalRequirements: [
        'Proof of savings ($130,000+) or passive income ($2,000/month)',
        'Clean criminal record',
        'Valid passport with 6+ months validity',
        'Investment in Indonesian assets or commitment to do so'
      ]
    },
    duration: {
      initial: '5 years',
      renewable: true,
      maxStay: '10 years (5+5 renewal)'
    },
    applicationProcess: [
      'Apply through Indonesian Immigration (Directorate General of Immigration)',
      'Submit documents: bank statements, income proof, insurance, criminal record',
      'Pay visa fee',
      'Wait for processing (varies)',
      'If approved, receive visa authorization',
      'Convert to KITAS (Limited Stay Permit) after arrival'
    ],
    insuranceNotes: 'Indonesia requires health insurance for the Second Home Visa. International health insurance is accepted. Bali has decent private healthcare (BIMC, Siloam), but serious cases require evacuation to Singapore or Australia. Ensure your plan includes medical evacuation coverage.',
    healthcareAccess: 'Healthcare quality varies significantly. Bali has international-standard private hospitals (BIMC, Siloam). Jakarta has excellent facilities. Rural areas have limited care. For serious conditions, evacuation to Singapore is common (3-hour flight). Medical evacuation coverage is essential.',
    costs: {
      visaFee: 'Varies (approximately $1,000-2,000 for 5-year visa)',
      insuranceRange: '$100-250/month for international coverage with evacuation'
    },
    recommendedProviders: ['cigna-global', 'allianz-care', 'bupa-global', 'axa-global'],
    keyConsiderations: [
      'High savings requirement ($130,000) excludes many digital nomads',
      'Alternative: B211A visa (60 days, extendable to 180 days) is more accessible',
      'Medical evacuation coverage is essential—serious cases require Singapore/Australia evacuation',
      'Indonesia doesn\'t technically allow remote work on tourist visas',
      '5-year duration is very long compared to other DNVs'
    ],
    commonMistakes: [
      'Assuming the B211A visa allows long-term legal work (it\'s still a tourist visa)',
      'Not having medical evacuation coverage (critical given healthcare limitations)',
      'Underestimating visa run costs if using shorter-term visas',
      'Working in Indonesia on tourist visa (technically not permitted, though common)',
      'Not researching healthcare options before choosing a location'
    ],
    faqs: [
      {
        question: 'Does Indonesia have a Digital Nomad Visa?',
        answer: 'Indonesia is developing a dedicated Remote Worker Visa (announced in 2022) but it\'s not yet fully implemented. Currently, the Second Home Visa ($130,000 requirement) is the main long-term option. Most nomads use the B211A visa (60-180 days) or visa runs, though neither technically permits work.'
      },
      {
        question: 'What is the B211A visa?',
        answer: 'The B211A is a 60-day social/cultural visa extendable up to 180 days. It\'s easier to obtain than the Second Home Visa (no savings requirement) and is what most Bali nomads use. However, it doesn\'t legally permit work—even remote work for foreign companies exists in a gray area.'
      },
      {
        question: 'Is medical evacuation insurance necessary for Indonesia?',
        answer: 'Strongly recommended. While Bali has decent private hospitals (BIMC, Siloam), serious medical emergencies often require evacuation to Singapore (3-hour flight). A helicopter evacuation from remote areas plus Singapore hospital care can cost $50,000+. Ensure your plan covers this.'
      },
      {
        question: 'How is healthcare in Bali?',
        answer: 'Adequate for minor issues at international clinics (BIMC, Siloam, Kasih Ibu). Good for broken bones, minor surgeries, routine care. For serious conditions (heart attack, major trauma, cancer), evacuation to Singapore or Australia is standard. Don\'t rely on Bali for complex medical care.'
      },
      {
        question: 'Can I work remotely in Indonesia legally?',
        answer: 'Technically, no visa currently permits remote work except the developing Remote Worker Visa and Second Home Visa (with restrictions). Most nomads on B211A or tourist visas work in a legal gray area—not enforced but technically not permitted. The government is working on clearer regulations.'
      },
      {
        question: 'What will the Indonesia Remote Worker Visa look like?',
        answer: 'The announced plan includes 5-year visa, no Indonesian income tax for 5 years, and ability to work remotely. Income requirements haven\'t been confirmed but likely around $1,500-2,000/month. Check current status before planning—implementation has been delayed multiple times.'
      }
    ]
  },
  // UK Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'uk',
    officialVisaName: 'Student Visa (formerly Tier 4)',
    requirements: {
      incomeMinimum: '£1,334/month (London) or £1,023/month (outside)',
      savingsMinimum: 'Tuition + 9 months living costs',
      insuranceRequired: false,
      insuranceMinimum: 'NHS access via Immigration Health Surcharge (£776/year)',
      additionalRequirements: [
        'CAS (Confirmation of Acceptance for Studies) from licensed sponsor',
        'English language test (IELTS 5.5-7.0 depending on level)',
        'TB test certificate (from certain countries)',
        'Funds held for 28 consecutive days'
      ]
    },
    duration: {
      initial: 'Course length + wind-down period',
      renewable: false,
      maxStay: 'Course duration (can switch to Graduate Route after)'
    },
    applicationProcess: [
      'Receive CAS from university',
      'Complete online application at gov.uk',
      'Pay visa fee (£490) and IHS (£776/year)',
      'Book and attend biometric appointment',
      'Wait 3-8 weeks for processing',
      'Collect BRP within 10 days of arrival'
    ],
    insuranceNotes: 'The UK uses the Immigration Health Surcharge (IHS) instead of separate insurance. At £776/year, you get full NHS access—same as British residents. Private insurance is optional but useful for mental health (NHS waits are long), dental (partially covered), and faster specialist access.',
    healthcareAccess: 'Full NHS access after paying IHS. Register with a GP upon arrival. Hospital care, GP visits, and most treatments are free. Prescriptions cost £9.90/item in England (free in Scotland, Wales, Northern Ireland). Dental is subsidized but not free.',
    costs: {
      visaFee: '£490 standard + £776/year IHS',
      insuranceRange: '£0 mandatory (NHS via IHS), £50-150/month optional private'
    },
    recommendedProviders: ['bupa-global', 'cigna-global', 'allianz-care', 'img-global'],
    keyConsiderations: [
      'NHS access included via mandatory IHS—no separate insurance shopping required',
      'Private insurance only needed for mental health, dental, or faster access',
      'Graduate Route allows 2-3 years post-study work',
      '20 hours/week work allowed during term',
      'BRP collection required within 10 days of arrival'
    ],
    commonMistakes: [
      'Not showing funds held for 28 consecutive days',
      'Applying too late (visa centers overwhelmed in Aug-Sep)',
      'Not registering with GP immediately upon arrival',
      'Working more than 20 hours during term time',
      'Forgetting to collect BRP within 10-day deadline'
    ],
    faqs: [
      {
        question: 'Do I need private health insurance for UK Student Visa?',
        answer: 'No. The Immigration Health Surcharge (IHS) gives you full NHS access. Private insurance is optional—useful for mental health (NHS waits are long), dental coverage, and faster specialist access, but not required for the visa.'
      },
      {
        question: 'What is the Immigration Health Surcharge?',
        answer: 'The IHS is a mandatory fee (£776/year for students) paid with your visa application. It gives you the same NHS access as British residents. You pay upfront for your entire visa duration—e.g., £2,328 for a 3-year undergraduate degree.'
      },
      {
        question: 'Can I work on a UK Student Visa?',
        answer: 'Yes. Up to 20 hours/week during term time, unlimited during holidays. After completing your degree, apply for the Graduate Route (2 years for bachelor\'s/master\'s, 3 years for PhD) to work any job at any level.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes, via the Graduate Route visa. It allows 2 years post-study work for bachelor\'s/master\'s graduates, 3 years for PhD. You can work any job during this time, then potentially switch to a Skilled Worker visa.'
      },
      {
        question: 'What does NHS cover for students?',
        answer: 'GP visits, hospital treatment, emergency care, mental health services, and maternity care are free. Prescriptions cost £9.90/item in England (free elsewhere in UK). Dental is subsidized but not free. Eye tests are paid unless you\'re on benefits.'
      },
      {
        question: 'How long does UK student visa processing take?',
        answer: 'Standard processing is 3 weeks from biometrics. Priority service (£500 extra) takes 5 working days. Super priority (£1,000 extra) is next working day. Apply early—visa centers are very busy July-September.'
      }
    ]
  },
  // Australia Student Visa (Subclass 500)
  {
    visaSlug: 'student-visa',
    countrySlug: 'australia',
    officialVisaName: 'Student Visa (Subclass 500)',
    requirements: {
      incomeMinimum: 'A$24,505/year living costs',
      savingsMinimum: 'Tuition + living costs + travel',
      insuranceRequired: true,
      insuranceMinimum: 'OSHC (Overseas Student Health Cover) for entire visa',
      additionalRequirements: [
        'CoE (Confirmation of Enrolment) from CRICOS-registered institution',
        'Genuine Temporary Entrant (GTE) statement',
        'English language test (IELTS 5.5-7.0)',
        'Health examination (some nationalities)',
        'Police clearance (if requested)'
      ]
    },
    duration: {
      initial: 'Course length + extra time',
      renewable: false,
      maxStay: 'Course duration (then Temporary Graduate Visa)'
    },
    applicationProcess: [
      'Accept university offer, pay deposit, receive CoE',
      'Purchase OSHC for full visa duration',
      'Create ImmiAccount and submit online application',
      'Complete health examination if required',
      'Provide police clearances if requested',
      'Wait 4-12 weeks for processing',
      'Receive electronic visa grant'
    ],
    insuranceNotes: 'OSHC is mandatory—no visa without it. Purchase from approved providers (Medibank, BUPA, Allianz, AHM, NIB, CBHS). All meet minimum standards. Covers hospital, GP visits, PBS prescriptions. Does NOT cover dental, optical, pre-existing conditions (12-month wait). Add extras cover if needed.',
    healthcareAccess: 'OSHC provides Medicare-like benefits. Bulk-billing GPs mean no out-of-pocket for covered services. Hospital treatment in public hospitals covered. Private hospitals may have gap fees. Ambulance coverage varies by state. Serious cases may require Singapore evacuation.',
    costs: {
      visaFee: 'A$710',
      insuranceRange: 'A$500-650/year singles OSHC'
    },
    recommendedProviders: ['allianz-care', 'bupa-global', 'cigna-global', 'medibank'],
    keyConsiderations: [
      'OSHC is mandatory and must cover entire visa—no gaps allowed',
      'Dental/optical not covered—add extras or do before arrival',
      '12-month wait for pre-existing conditions',
      'Unlimited work hours (changed from 40 hours/fortnight in 2023)',
      'Temporary Graduate Visa (2-4 years) available after completion'
    ],
    commonMistakes: [
      'Letting OSHC lapse—visa condition breach, can lead to cancellation',
      'Weak GTE statement—many rejections stem from unconvincing intent',
      'Not buying OSHC extras for dental (Australian dental is expensive)',
      'Insufficient financial evidence',
      'Applying too late—processing can take 12 weeks'
    ],
    faqs: [
      {
        question: 'What is OSHC and is it mandatory?',
        answer: 'Overseas Student Health Cover (OSHC) is government-mandated health insurance for international students. Yes, it\'s absolutely mandatory—you cannot get a student visa without it, and your visa can be cancelled if coverage lapses. Purchase from one of six approved providers.'
      },
      {
        question: 'Which OSHC provider is best?',
        answer: 'All six approved providers meet minimum government standards. Allianz (Peoplecare) is often cheapest. Medibank has the largest network. BUPA has good customer service. Compare prices—coverage is largely identical. Check if your university has a preferred provider discount.'
      },
      {
        question: 'Does OSHC cover dental?',
        answer: 'No. Basic OSHC does not cover dental or optical. Australian dental is expensive—a simple filling can cost A$200+. Either do dental work before leaving home, or add an OSHC extras package (about A$300-500/year) for partial dental coverage.'
      },
      {
        question: 'Can I work unlimited hours on student visa?',
        answer: 'Yes, since July 2023, student visa holders can work unlimited hours. This was previously limited to 40 hours per fortnight. Take advantage—Australian wages are high and work experience is valuable.'
      },
      {
        question: 'What is the Temporary Graduate Visa?',
        answer: 'After completing your studies, you can apply for the Temporary Graduate Visa (Subclass 485). Duration: 2 years for bachelor\'s, 3 years for master\'s coursework, 4 years for master\'s research/PhD. It\'s an open work permit—work any job. Great for gaining Australian experience and PR points.'
      },
      {
        question: 'Do I need medical evacuation coverage?',
        answer: 'Strongly recommended. While Bali and major cities have decent hospitals, serious emergencies often require evacuation to Singapore (3-hour flight). OSHC covers treatment in Australia, but evacuation coverage is valuable peace of mind.'
      }
    ]
  },
  // Canada Study Permit
  {
    visaSlug: 'student-visa',
    countrySlug: 'canada',
    officialVisaName: 'Study Permit',
    requirements: {
      incomeMinimum: 'C$20,635/year living costs (outside Quebec)',
      savingsMinimum: 'Tuition + living costs (GIC option available)',
      insuranceRequired: false,
      insuranceMinimum: 'Varies by province—Ontario requires private, BC/Alberta cover students',
      additionalRequirements: [
        'Letter of Acceptance from DLI (Designated Learning Institution)',
        'Proof of financial support (bank statements or GIC)',
        'Genuine intent to leave Canada after studies',
        'English/French language test',
        'Biometrics',
        'Medical exam (some nationalities)'
      ]
    },
    duration: {
      initial: 'Course length + 90 days',
      renewable: true,
      maxStay: 'Course duration (then PGWP available)'
    },
    applicationProcess: [
      'Accept offer from DLI, pay deposit',
      'Open GIC if using (C$20,635 deposit)',
      'Get CAQ if studying in Quebec',
      'Create IRCC account, submit online application',
      'Complete biometrics within 30 days',
      'Complete medical exam if required',
      'Wait 4-16 weeks for processing',
      'Receive approval letter, get permit stamped at border'
    ],
    insuranceNotes: 'Health coverage varies dramatically by province. Ontario does NOT cover students—UHIP mandatory. BC, Alberta, Manitoba cover students after 0-3 month wait. Quebec has reciprocal agreements with some countries. Research YOUR province\'s specific rules—this is critical.',
    healthcareAccess: 'In covering provinces (BC, Alberta, Manitoba), you get provincial health coverage similar to residents. In Ontario, you rely entirely on private insurance (UHIP). Quality is excellent across Canada, but wait times for specialists can be long. University health centers are good for routine care.',
    costs: {
      visaFee: 'C$150 + C$85 biometrics',
      insuranceRange: 'C$0-1,200/year depending on province'
    },
    recommendedProviders: ['guard-me', 'cigna-global', 'allianz-care', 'studentSecure'],
    keyConsiderations: [
      'Provincial health coverage varies—Ontario requires private insurance',
      'GIC (C$20,635 deposit) simplifies financial proof',
      'SDS (Student Direct Stream) offers faster processing for eligible countries',
      'PGWP (Post-Graduation Work Permit) up to 3 years after completion',
      'Clear pathway to PR through Canadian Experience Class'
    ],
    commonMistakes: [
      'Not understanding provincial health coverage differences',
      'Forgetting CAQ for Quebec studies',
      'Weak proof of intent to leave (even though PR pathway exists)',
      'Missing SDS eligibility (faster processing)',
      'Not applying for provincial coverage when eligible'
    ],
    faqs: [
      {
        question: 'Do I need health insurance for Canada Study Permit?',
        answer: 'It depends on your province. Ontario does NOT cover international students—you must have private insurance (usually UHIP through your university). BC, Alberta, Saskatchewan, and Manitoba cover students after 0-3 months. Research your specific province.'
      },
      {
        question: 'What is a GIC and should I get one?',
        answer: 'A Guaranteed Investment Certificate (GIC) is a C$20,635 deposit with a Canadian bank (Scotia, BMO, CIBC) that\'s returned to you monthly. It\'s not mandatory, but IRCC accepts it readily as financial proof. Many applicants prefer it—simplifies requirements and guarantees living funds.'
      },
      {
        question: 'What is the PGWP?',
        answer: 'The Post-Graduation Work Permit allows you to work in Canada after completing your studies. Duration: 1 year for 8-month to 1-year programs, up to 3 years for 2+ year programs. It\'s an open permit—work any job, any employer. Critical stepping stone to permanent residency.'
      },
      {
        question: 'How do I get PR after studying in Canada?',
        answer: 'Most graduates use the Canadian Experience Class (CEC) through Express Entry. Your PGWP work experience earns significant points. With 1+ year of skilled Canadian work experience and adequate English/French, many graduates qualify. Canada actively retains international graduates.'
      },
      {
        question: 'What is the Student Direct Stream (SDS)?',
        answer: 'SDS is a faster processing stream (about 20 days) for students from certain countries (India, China, Philippines, Pakistan, etc.) who have IELTS 6.0+ and a GIC. If eligible, definitely use it—standard processing can take months.'
      },
      {
        question: 'Can I work on a Study Permit?',
        answer: 'Yes. You can work up to 24 hours/week off-campus during academic sessions and unlimited hours during scheduled breaks. On-campus work has no hour limit. No separate work permit needed—included in your Study Permit conditions.'
      }
    ]
  },
  // Germany Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'germany',
    officialVisaName: 'Visum zu Studienzwecken (Student Visa)',
    requirements: {
      incomeMinimum: '€11,208/year (blocked account) or €934/month',
      savingsMinimum: '€11,208 in blocked account OR financial guarantee',
      insuranceRequired: true,
      insuranceMinimum: 'German-compliant health insurance (public or private)',
      additionalRequirements: [
        'University admission letter (Zulassungsbescheid)',
        'German language proof (unless English-taught program)',
        'Blocked account (Sperrkonto) with €11,208',
        'Academic qualifications recognized in Germany',
        'Proof of accommodation (at least initial address)',
        'Health insurance valid from day 1'
      ]
    },
    duration: {
      initial: '1-2 years (renewable)',
      renewable: true,
      maxStay: 'Duration of studies + 18 months job search'
    },
    applicationProcess: [
      'Receive university admission (Zulassungsbescheid)',
      'Open blocked account (Fintiba, Expatrio, or Deutsche Bank)',
      'Purchase German health insurance (public or private)',
      'Schedule visa appointment at German embassy',
      'Submit documents and attend interview',
      'Wait 4-12 weeks for processing',
      'Enter Germany and register at Ausländerbehörde within 90 days',
      'Receive residence permit (Aufenthaltstitel)'
    ],
    insuranceNotes: 'Germany requires health insurance valid from your first day. Under 30 and enrolled full-time, you can join public insurance (gesetzliche Krankenversicherung) for about €110/month. Over 30 or not in public system, you need private insurance meeting German requirements. International insurance is NOT accepted for residence permits—you need German-compliant coverage.',
    healthcareAccess: 'Once enrolled in German health insurance, you have full access to Germany\'s excellent healthcare system. Public insurance (TK, AOK, Barmer) covers most services with small copays. Doctors, specialists, and hospitals are high quality. Dental is partially covered.',
    costs: {
      visaFee: '€75 visa + residence permit fees',
      insuranceRange: '€110/month (public) or €80-150/month (private under 30)'
    },
    recommendedProviders: ['tk-german-public', 'aok', 'barmer', 'allianz-care'],
    keyConsiderations: [
      'Tuition is FREE at public universities (only semester fee €150-350)',
      'German public health insurance ~€110/month is mandatory and excellent',
      'International insurance NOT accepted for residence permit',
      'Blocked account (€11,208) required as financial proof',
      '18-month job-search visa after graduation—excellent for staying',
      'Learning German significantly improves experience and job prospects'
    ],
    commonMistakes: [
      'Bringing international insurance instead of German-compliant coverage',
      'Not opening blocked account early enough (takes 1-2 weeks)',
      'Underestimating German language requirements for daily life',
      'Missing residence permit registration deadline (90 days)',
      'Not knowing public insurance is age-restricted (under 30 for students)'
    ],
    faqs: [
      {
        question: 'Is tuition really free in Germany?',
        answer: 'Yes, at public universities! You only pay a semester fee (€150-350) covering administration and public transport. Private universities charge tuition. This makes Germany one of the most affordable destinations for quality education.'
      },
      {
        question: 'What is a blocked account (Sperrkonto)?',
        answer: 'A blocked account is a special German bank account where you deposit €11,208 (one year\'s living costs). You can only withdraw ~€934/month, proving you can support yourself. Open with Fintiba, Expatrio, or Deutsche Bank before your visa application.'
      },
      {
        question: 'Can I use international health insurance in Germany?',
        answer: 'No. German authorities require insurance meeting German standards. For students under 30, public insurance (TK, AOK, Barmer) is mandatory and affordable (~€110/month). Over 30, you need approved private insurance. Cigna or Allianz won\'t work for your residence permit.'
      },
      {
        question: 'Can I work while studying in Germany?',
        answer: 'Yes. Students can work 120 full days or 240 half days per year. During semester breaks, you can work full-time. Mini-jobs (€538/month max) are also allowed without counting toward limits. Income is taxed but students often fall below tax thresholds.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes! Germany offers an 18-month job-search visa after graduation—one of the most generous in the world. Find a job matching your degree, and you can switch to a work visa. This is a major advantage over many other countries.'
      },
      {
        question: 'Do I need to speak German?',
        answer: 'For English-taught programs, German isn\'t required for admission. But for daily life, some German helps enormously. Many programs are in German, requiring TestDaF or DSH certificates. Even for English programs, learning German improves job prospects and integration.'
      }
    ]
  },
  // France Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'france',
    officialVisaName: 'Visa Long Séjour pour Études (VLS-TS)',
    requirements: {
      incomeMinimum: '€615/month minimum (SMIC-based)',
      savingsMinimum: '€7,380/year minimum financial guarantee',
      insuranceRequired: false,
      insuranceMinimum: 'Social Security coverage after registration (CVEC)',
      additionalRequirements: [
        'University admission via Campus France or direct admission',
        'Proof of accommodation in France',
        'Financial proof (bank statements, sponsor letter, or scholarship)',
        'French language proof (DELF/DALF/TCF) for French-taught programs',
        'Previous academic transcripts and diplomas',
        'Birth certificate (apostilled and translated)'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies + job search extension possible'
    },
    applicationProcess: [
      'Create Campus France account and complete procedure',
      'Receive university admission',
      'Schedule visa appointment at French consulate',
      'Submit documents: admission letter, finances, accommodation, insurance',
      'Pay visa fee (€99)',
      'Wait 2-6 weeks for processing',
      'Enter France and validate VLS-TS online within 3 months',
      'Pay CVEC (€100) and register with Social Security'
    ],
    insuranceNotes: 'France no longer requires separate student insurance—students are automatically enrolled in French Social Security (Sécurité Sociale) through the CVEC contribution (€100/year). This provides comprehensive healthcare coverage. Private insurance (mutuelle) is optional but recommended for better reimbursement rates and dental/optical coverage.',
    healthcareAccess: 'After CVEC registration, you\'re covered by French Social Security. Coverage is approximately 70% of costs—you pay 30% out of pocket (ticket modérateur). Mutuelle (complementary insurance) covers the remaining 30% and adds dental/optical. Quality is excellent—France has one of the world\'s best healthcare systems.',
    costs: {
      visaFee: '€99 VLS-TS visa fee',
      insuranceRange: '€100/year CVEC (mandatory) + €15-50/month mutuelle (optional)'
    },
    recommendedProviders: ['lmde', 'heyme', 'smerra', 'allianz-care'],
    keyConsiderations: [
      'Public university tuition very low (€170-380/year for EU, €2,770-3,770/year for non-EU)',
      'French Social Security covers 70% of healthcare costs automatically',
      'Mutuelle (top-up insurance) recommended for full coverage',
      'CAF housing assistance (APL) available—can save €100-200/month',
      'Campus France procedure mandatory for most nationalities',
      'Job search visa (APS) available after graduation'
    ],
    commonMistakes: [
      'Not completing Campus France procedure (required for most countries)',
      'Forgetting to validate VLS-TS online within 3 months of arrival',
      'Skipping mutuelle and facing 30% out-of-pocket costs',
      'Not applying for CAF housing assistance (free money!)',
      'Underestimating importance of French language for daily life'
    ],
    faqs: [
      {
        question: 'Do I need private health insurance for France student visa?',
        answer: 'No. Since 2019, students are automatically covered by French Social Security via the CVEC contribution (€100/year). This replaces the old student insurance requirement. However, Social Security only covers 70%—a mutuelle (€15-50/month) covers the remaining 30% and is highly recommended.'
      },
      {
        question: 'What is Campus France?',
        answer: 'Campus France is the French government agency managing international student applications. Most non-EU students must complete the "Études en France" procedure through Campus France before applying for a visa. It validates your academic project and connects you with universities.'
      },
      {
        question: 'What is a mutuelle and do I need one?',
        answer: 'A mutuelle is complementary insurance covering the 30% not covered by Social Security (called ticket modérateur). Without it, you pay 30% of medical costs out of pocket. Student mutuelles like LMDE, HEYME, or SMERRA cost €15-50/month and are highly recommended.'
      },
      {
        question: 'How much is tuition in France?',
        answer: 'Very affordable. Public universities charge €170/year (licence), €243/year (master\'s), €380/year (doctorate) for EU students. Non-EU students pay €2,770-3,770/year at public universities—still far cheaper than UK, US, or Australia. Grandes écoles and private schools charge more.'
      },
      {
        question: 'Can I work while studying in France?',
        answer: 'Yes. Students can work up to 964 hours per year (about 20 hours/week). During summer, you can work full-time. No separate work permit needed—your student residence permit includes work authorization. The French minimum wage (SMIC) is €11.65/hour.'
      },
      {
        question: 'What is the CAF housing benefit?',
        answer: 'CAF (Caisse d\'Allocations Familiales) provides housing assistance (APL) to students regardless of nationality. Depending on your rent and location, you could receive €100-200/month. Apply at caf.fr after arrival—it\'s free money that many students miss.'
      }
    ]
  },
  // Netherlands Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'netherlands',
    officialVisaName: 'MVV + Residence Permit for Study',
    requirements: {
      incomeMinimum: '€950/month (2024 amount, increases annually)',
      savingsMinimum: '€11,400/year or proof of ongoing income',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance meeting Dutch requirements',
      additionalRequirements: [
        'Unconditional admission letter from Dutch institution',
        'Proof of financial means (€11,400/year)',
        'Valid passport (6+ months)',
        'TB certificate (from certain countries)',
        'Proof of accommodation (initial address)',
        'English proficiency (IELTS 6.0-6.5 typically)',
        'Nuffic credential evaluation (for non-EU degrees)'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies + 1 year job search (zoekjaar)'
    },
    applicationProcess: [
      'Receive unconditional admission from Dutch university',
      'University initiates MVV application on your behalf',
      'Pay MVV fee (varies by institution)',
      'Receive MVV approval and entry visa',
      'Travel to Netherlands within 90 days',
      'Register at municipality (gemeente) within 5 days',
      'Collect residence permit from IND',
      'Arrange Dutch health insurance'
    ],
    insuranceNotes: 'Non-EU students must have health insurance meeting Dutch requirements. If you work 32+ hours/month, you must join Dutch basic insurance (basisverzekering, ~€130/month). If you don\'t work (or work less), you can use international student insurance meeting minimum standards. Dutch insurance covers most care but has €385 deductible (eigen risico).',
    healthcareAccess: 'With Dutch health insurance, you have full access to excellent healthcare. The system uses GPs (huisarts) as gatekeepers to specialists. Register with a huisarts upon arrival. Quality is high, wait times reasonable. Dental for adults is NOT covered—get separate insurance or pay out of pocket.',
    costs: {
      visaFee: '€210 MVV/residence permit (often paid via university)',
      insuranceRange: '€50-80/month (student insurance) or €130+/month (Dutch basic)'
    },
    recommendedProviders: ['aon-student-insurance', 'oom-verzekeringen', 'cigna-global', 'allianz-care'],
    keyConsiderations: [
      'Most programs taught in English—Netherlands is very international',
      'University handles visa application (MVV)—less paperwork for you',
      'Dutch basic insurance required only if working 32+ hours/month',
      'Zoekjaar (1-year job search visa) after graduation—great for staying',
      '€385 annual deductible (eigen risico) before insurance pays',
      'Dental NOT covered for adults—budget separately'
    ],
    commonMistakes: [
      'Not arranging insurance before arrival (required from day 1)',
      'Forgetting to register at municipality within 5 days',
      'Not understanding working triggers Dutch insurance requirement',
      'Skipping dental coverage (Dutch dental is expensive)',
      'Underestimating housing difficulty (Amsterdam especially)'
    ],
    faqs: [
      {
        question: 'Do I need Dutch health insurance as a student?',
        answer: 'It depends on whether you work. If you work 32+ hours/month, Dutch basic insurance (basisverzekering) is mandatory. If you don\'t work (or work less), you can use student insurance from providers like AON or OOM that meets Dutch requirements. Either way, you need valid insurance from day 1.'
      },
      {
        question: 'What is the zoekjaar (orientation year)?',
        answer: 'After graduating from a Dutch university, you can apply for the zoekjaar—a 1-year residence permit to find work. You can work any job while searching, and once you find employment matching your degree, you can switch to a work permit. It\'s a major advantage of studying in the Netherlands.'
      },
      {
        question: 'What is the eigen risico (deductible)?',
        answer: 'Dutch basic insurance has a mandatory €385 annual deductible (eigen risico). You pay the first €385 of covered care each year before insurance kicks in. GP visits are exempt from the deductible. Some insurers offer lower deductibles for higher premiums.'
      },
      {
        question: 'How much is tuition in the Netherlands?',
        answer: 'EU/EEA students pay the statutory rate: about €2,530/year. Non-EU students pay institutional rates: €8,000-20,000/year depending on program and university. Research universities and popular programs tend to be more expensive.'
      },
      {
        question: 'Can I work while studying in the Netherlands?',
        answer: 'Yes, but with conditions. Non-EU students need a work permit (TWV), which your employer must obtain. You can work up to 16 hours/week during the academic year or full-time during summer. Working 32+ hours/month triggers mandatory Dutch insurance. EU students have no restrictions.'
      },
      {
        question: 'Is dental covered by Dutch insurance?',
        answer: 'No. Dutch basic insurance does NOT cover dental care for adults (only children under 18). Dental treatment in the Netherlands is expensive—a basic checkup is €30-50, fillings €80-150+. Either get separate dental insurance (aanvullende verzekering) or budget for out-of-pocket costs.'
      }
    ]
  },
  // Spain Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'spain',
    officialVisaName: 'Visado de Estudiante (Student Visa)',
    requirements: {
      incomeMinimum: '€600/month (100% IPREM)',
      savingsMinimum: '€7,200/year minimum financial guarantee',
      insuranceRequired: true,
      insuranceMinimum: 'Full coverage, no copays, €30,000+ coverage',
      additionalRequirements: [
        'University admission letter',
        'Proof of accommodation in Spain',
        'Clean criminal record certificate',
        'Medical certificate confirming no serious diseases',
        'Private health insurance with no copays',
        'Proof of financial means (€600/month)'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies'
    },
    applicationProcess: [
      'Receive university admission',
      'Gather documents (criminal record, medical cert, finances)',
      'Purchase Spanish-compliant health insurance',
      'Schedule visa appointment at Spanish consulate',
      'Submit application and attend interview',
      'Wait 1-3 months for processing',
      'Receive visa and travel to Spain',
      'Register at local police station within 30 days',
      'Apply for TIE (foreigner ID card)'
    ],
    insuranceNotes: 'Spain requires private health insurance with NO copays (sin copagos) and coverage of at least €30,000. The policy must be from an insurer operating in Spain. Spanish local insurers like Sanitas, ASSSA, and Adeslas are accepted, as are international insurers with Spanish presence like Cigna and Allianz.',
    healthcareAccess: 'With valid private insurance, you have access to private healthcare in Spain. Students who work and pay into Social Security may also access the public system (SNS). Public healthcare in Spain is excellent but requires social security contributions.',
    costs: {
      visaFee: '€80 (short-stay) or €180 (long-stay)',
      insuranceRange: '€50-150/month depending on coverage and age'
    },
    recommendedProviders: ['sanitas', 'asssa', 'adeslas', 'cigna-global', 'allianz-care'],
    keyConsiderations: [
      'Insurance must have NO copays (sin copagos) - many consulates reject policies with copays',
      'Local Spanish insurers (Sanitas, ASSSA) are often cheaper than international',
      'Public university tuition is very affordable (€700-1,500/year)',
      'Student visa allows 30 hours/week work (vs 20 in most countries)',
      'Can convert to work permit if employed after studies',
      'TIE card required within 30 days of arrival'
    ],
    commonMistakes: [
      'Buying insurance with copays (rejected by consulates)',
      'Not getting insurance from Spain-operating insurer',
      'Forgetting to apply for TIE within 30 days',
      'Underestimating processing time (can take 3 months)',
      'Not having criminal record certificate apostilled'
    ],
    faqs: [
      {
        question: 'Why does Spain require insurance with no copays?',
        answer: 'Spanish consulates want to ensure students can access healthcare without financial barriers. Policies with copays (even small ones like €10/visit) are routinely rejected. Always confirm your policy is "sin copagos" (without copays).'
      },
      {
        question: 'Can I use international insurance like Cigna or SafetyWing?',
        answer: 'Cigna Global and Allianz Care work because they operate in Spain. SafetyWing and similar travel insurance are typically NOT accepted—they don\'t meet the "no copays" requirement and aren\'t registered in Spain. Use Spanish insurers or international insurers with Spanish presence.'
      },
      {
        question: 'How much is tuition in Spain?',
        answer: 'Very affordable at public universities: €700-1,500/year for EU students, €1,500-3,500/year for non-EU (varies by region—Madrid and Catalonia charge more). Private universities charge €5,000-20,000/year.'
      },
      {
        question: 'Can I work while studying in Spain?',
        answer: 'Yes, up to 30 hours/week (more generous than most countries). You need a work permit, but it\'s relatively easy to obtain as a student. Many students work part-time in hospitality, teaching English, or tourism.'
      },
      {
        question: 'What is the TIE card?',
        answer: 'The TIE (Tarjeta de Identidad de Extranjero) is your Spanish foreigner ID card. You must apply within 30 days of arrival at the local police station (Extranjería). It replaces the visa in your passport as proof of legal residence.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'You can apply to modify your student visa to a work permit if you find employment. Spain also allows changing to self-employment (autónomo) status. The process is bureaucratic but possible—many students transition successfully.'
      }
    ]
  },
  // Italy Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'italy',
    officialVisaName: 'Visto per Studio (Student Visa)',
    requirements: {
      incomeMinimum: '€467/month (updated annually)',
      savingsMinimum: '€5,600/year minimum',
      insuranceRequired: true,
      insuranceMinimum: 'Health insurance valid in Italy, covering medical treatment',
      additionalRequirements: [
        'University pre-enrollment or admission letter',
        'Proof of accommodation in Italy',
        'Proof of financial means (€467/month or €5,600/year)',
        'Valid passport (3+ months beyond stay)',
        'Return ticket or proof of funds for return',
        'Health insurance covering Italy'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies'
    },
    applicationProcess: [
      'Apply to Italian university via Universitaly portal',
      'Receive pre-enrollment confirmation',
      'Gather required documents',
      'Purchase health insurance valid in Italy',
      'Apply for visa at Italian consulate',
      'Wait 2-6 weeks for processing',
      'Travel to Italy',
      'Apply for Permesso di Soggiorno within 8 days',
      'Complete university enrollment'
    ],
    insuranceNotes: 'Italy requires health insurance but is less strict than Spain about specific policy types. EU students can use EHIC. Non-EU students need private insurance or can enroll in the Italian National Health Service (SSN) for about €150/year after arrival—one of the best deals in Europe.',
    healthcareAccess: 'Students can enroll in Italy\'s excellent public healthcare system (SSN) for approximately €150/year. This gives you access to the same healthcare as Italian citizens. Alternatively, use private insurance throughout your stay.',
    costs: {
      visaFee: '€50 (student visa)',
      insuranceRange: '€150/year (SSN) or €50-100/month (private)'
    },
    recommendedProviders: ['italian-ssn', 'cigna-global', 'allianz-care', 'img-global'],
    keyConsiderations: [
      'SSN enrollment (€150/year) is exceptional value—full public healthcare access',
      'Public university tuition is very low (€200-3,000/year based on income)',
      'Many scholarships available for international students',
      'Permesso di Soggiorno required within 8 days of arrival',
      'Pre-enrollment via Universitaly portal required for most universities',
      'Italian language often required for undergraduate programs'
    ],
    commonMistakes: [
      'Not applying for Permesso di Soggiorno within 8 days',
      'Skipping SSN enrollment (missing out on €150/year healthcare)',
      'Not using Universitaly portal for pre-enrollment',
      'Underestimating Italian language requirements',
      'Missing scholarship application deadlines'
    ],
    faqs: [
      {
        question: 'What is the SSN and should I enroll?',
        answer: 'The SSN (Servizio Sanitario Nazionale) is Italy\'s public health service. Students can enroll for about €150/year and get full access to public healthcare—doctor visits, hospital care, prescriptions. It\'s exceptional value and highly recommended over private insurance.'
      },
      {
        question: 'How much is tuition in Italy?',
        answer: 'Public universities charge €200-3,000/year based on family income (ISEE calculation). Many students from lower-income families pay under €500/year. Private universities charge €5,000-20,000/year. Italy is one of Europe\'s most affordable options.'
      },
      {
        question: 'What is the Permesso di Soggiorno?',
        answer: 'It\'s your residence permit. You must apply at the post office within 8 working days of arrival using the "kit" available at post offices. Missing this deadline can create problems with your legal status.'
      },
      {
        question: 'Do I need to speak Italian?',
        answer: 'For undergraduate programs, usually yes—most are taught in Italian. Master\'s programs increasingly offer English-taught options, especially in business, engineering, and design. Check your specific program\'s language requirements.'
      },
      {
        question: 'Can I work while studying in Italy?',
        answer: 'Yes, up to 20 hours/week during term and full-time during breaks. You don\'t need a separate work permit—your student permit allows part-time work. The Italian minimum wage isn\'t legally set but typically €7-9/hour in practice.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'You can convert your student permit to a work permit if you find employment within 12 months of graduation. Italy also offers an "attesa occupazione" (awaiting employment) permit for job searching after studies.'
      }
    ]
  },
  // Ireland Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'ireland',
    officialVisaName: 'Study Visa / Stamp 2',
    requirements: {
      incomeMinimum: '€10,000/year (must show €10,000 immediately available)',
      savingsMinimum: '€10,000 minimum in accessible funds',
      insuranceRequired: true,
      insuranceMinimum: 'Private medical insurance covering Ireland',
      additionalRequirements: [
        'Acceptance letter from Irish education provider',
        'Evidence of €10,000 available funds',
        'Private medical insurance',
        'Evidence of tuition payment or ability to pay',
        'Proof of English proficiency (IELTS 5.5-6.5)',
        'Clean criminal record'
      ]
    },
    duration: {
      initial: '1 year (Stamp 2)',
      renewable: true,
      maxStay: '7 years for degree programs'
    },
    applicationProcess: [
      'Receive acceptance from Irish institution',
      'Pay tuition deposit (usually €6,000-10,000)',
      'Apply for study visa online (AVATS system)',
      'Attend biometrics appointment',
      'Wait 4-8 weeks for decision',
      'Travel to Ireland with visa',
      'Register with immigration (GNIB/IRP) within 90 days',
      'Receive Stamp 2 permission'
    ],
    insuranceNotes: 'Ireland requires private medical insurance but doesn\'t have strict requirements like Spain\'s "no copays" rule. Most international health insurance policies are accepted. Students cannot access the public HSE system unless they have habitual residence status (usually takes 1+ year).',
    healthcareAccess: 'Private insurance is essential as students don\'t qualify for free public healthcare (HSE) initially. After establishing habitual residence (typically 1+ year), you may qualify for a medical card if income is low. Until then, rely on your private insurance.',
    costs: {
      visaFee: '€60 (single entry) or €100 (multi-entry)',
      insuranceRange: '€80-200/month for comprehensive coverage'
    },
    recommendedProviders: ['irish-life-health', 'vhi', 'laya-healthcare', 'cigna-global', 'allianz-care'],
    keyConsiderations: [
      'English-speaking country—no language barrier',
      'Strong tech and pharma industries for post-study employment',
      'Stamp 1G allows 2 years post-study work for degree holders',
      'Must show €10,000 available immediately (not just annual income)',
      'Non-EU tuition is expensive (€10,000-25,000/year)',
      'Part-time work allowed (20 hrs/week term, 40 hrs/week breaks)'
    ],
    commonMistakes: [
      'Not having €10,000 immediately accessible (bank statement timing)',
      'Forgetting to register with GNIB/IRP within 90 days',
      'Not understanding tuition is due upfront (deposits required)',
      'Assuming public healthcare access (you need private insurance)',
      'Missing the Stamp 1G post-study work opportunity'
    ],
    faqs: [
      {
        question: 'Can I access Irish public healthcare (HSE)?',
        answer: 'Not initially. Students don\'t qualify for free HSE healthcare until they establish "habitual residence" (typically after 1+ year). You must have private medical insurance from the start. After establishing residence, low-income students may qualify for a medical card.'
      },
      {
        question: 'What is the €10,000 requirement?',
        answer: 'Ireland requires evidence of €10,000 immediately available funds (not just income over time). Your bank statement should show €10,000 accessible. If parents are sponsoring, you need their bank statements plus a sponsorship letter.'
      },
      {
        question: 'What is Stamp 1G?',
        answer: 'Stamp 1G is a 2-year post-study work permission for graduates of degree programs (Level 8+). It allows you to work full-time while seeking employment in Ireland. One of the better post-study work options in Europe.'
      },
      {
        question: 'How much is tuition in Ireland?',
        answer: 'EU students: often free or €3,000/year (student contribution). Non-EU students: €10,000-25,000/year depending on program. Medicine and specialized programs cost more. Ireland is expensive for non-EU students compared to continental Europe.'
      },
      {
        question: 'Can I work while studying?',
        answer: 'Yes. Stamp 2 allows 20 hours/week during term and 40 hours/week during holidays (June-September, December 15-January 15). Irish minimum wage is €12.70/hour (2024), among the highest in Europe.'
      },
      {
        question: 'Is IELTS required?',
        answer: 'Yes, for most non-native English speakers. Requirements vary: typically IELTS 5.5-6.0 for undergraduate, 6.5+ for postgraduate. Some universities accept other tests (TOEFL, Cambridge). Native English speakers from certain countries may be exempt.'
      }
    ]
  },

  // Japan - Student Visa
  {
    visaSlug: 'student-visa',
    countrySlug: 'japan',
    officialVisaName: 'Student Visa (留学ビザ / Ryūgaku Visa)',
    requirements: {
      eligibility: [
        'Acceptance from approved Japanese educational institution',
        'Certificate of Eligibility (COE) from Immigration Bureau',
        'Sufficient funds for living expenses',
        'Academic qualifications for chosen program',
        'Valid passport with blank pages',
        'Clean criminal record'
      ],
      financial: {
        minimumFunds: '¥1,500,000-2,000,000/year (~$10,000-13,000)',
        proofRequired: ['Bank statements (3-6 months)', 'Sponsor letter if applicable', 'Certificate of deposit'],
        notes: 'Financial requirements vary by school and sponsor. Sponsored students need guarantor letter.'
      },
      documents: [
        'Certificate of Eligibility (COE)',
        'Valid passport',
        'Visa application form',
        'Photo (4.5cm x 4.5cm)',
        'Letter of acceptance from institution',
        'Academic transcripts and diplomas',
        'Financial proof documents',
        'Sponsor/guarantor documents if applicable'
      ]
    },
    duration: {
      initial: '6 months to 4 years 3 months',
      renewable: true,
      maxStay: 'Duration of studies + extension possible'
    },
    applicationProcess: [
      'Apply to Japanese school and receive acceptance',
      'School applies for Certificate of Eligibility (COE) - 1-3 months',
      'Receive COE from Immigration Bureau via school',
      'Apply for student visa at Japanese embassy with COE',
      'Visa issued within 5-7 working days',
      'Arrive in Japan within 3 months of COE issuance',
      'Register at local ward office within 14 days',
      'Obtain residence card (Zairyu Card)'
    ],
    insuranceNotes: 'Japan requires all residents to enroll in National Health Insurance (NHI / Kokumin Kenko Hoken). This is mandatory for students staying 3+ months. NHI covers 70% of medical costs; you pay 30%. Monthly premiums are income-based and very affordable for students (often ¥1,500-2,000/month).',
    healthcareAccess: 'Once enrolled in NHI, you have access to Japan\'s excellent healthcare system at 30% copay. Many universities also offer supplementary insurance to cover the 30% copay. Japanese healthcare quality is world-class, and costs are reasonable even at the 30% rate.',
    costs: {
      visaFee: '¥3,000 (~$20) for single entry, ¥6,000 (~$40) for multiple entry',
      insuranceRange: '¥1,500-3,000/month (~$10-20) for NHI'
    },
    recommendedProviders: ['japan-nhi', 'university-supplementary', 'cigna-global', 'allianz-care'],
    keyConsiderations: [
      'NHI is mandatory—you cannot use only international insurance',
      'Language schools require separate visa category (留学 for universities, others for language schools)',
      'Part-time work requires separate "Permission to Engage in Activity Other than that Permitted" permit',
      'Work limited to 28 hrs/week during school, 40 hrs/week during holidays',
      'Japanese language ability helpful even for English programs',
      'Designated Activities visa available post-graduation for job search'
    ],
    commonMistakes: [
      'Not enrolling in NHI within 14 days of arrival (it\'s mandatory)',
      'Working without the part-time work permit (serious visa violation)',
      'Exceeding 28 hours/week work limit during term',
      'Letting COE expire before arriving (valid only 3 months)',
      'Not registering at ward office within 14 days'
    ],
    faqs: [
      {
        question: 'Is Japanese health insurance mandatory for students?',
        answer: 'Yes. All residents staying 3+ months must enroll in National Health Insurance (NHI). You cannot substitute international insurance. Enroll at your local ward office within 14 days of arrival. Premiums are very affordable for students.'
      },
      {
        question: 'How much does NHI cost for students?',
        answer: 'NHI premiums are income-based. For students with minimal income, expect ¥1,500-3,000/month (~$10-20). This covers 70% of medical costs at any clinic or hospital. Many universities offer supplementary insurance to cover the remaining 30%.'
      },
      {
        question: 'Can I work while studying in Japan?',
        answer: 'Yes, but you need a "Permission to Engage in Activity Other than that Permitted" stamp in your passport. Apply at immigration after arrival. Limited to 28 hours/week during school, 40 hours/week during long holidays. Minimum wage varies by prefecture (¥900-1,100/hour).'
      },
      {
        question: 'What is the Certificate of Eligibility (COE)?',
        answer: 'The COE is issued by Japan Immigration Bureau and proves you meet entry requirements. Your school applies on your behalf. Processing takes 1-3 months. Once received, apply for the visa at your local Japanese embassy—this step is quick (5-7 days).'
      },
      {
        question: 'Can I stay in Japan after graduation?',
        answer: 'Yes. Graduates can apply for "Designated Activities" visa for job hunting (6 months to 1 year). Once employed, switch to work visa (Engineer/Specialist in Humanities, etc.). Japan is actively recruiting skilled foreign graduates.'
      },
      {
        question: 'How much is tuition in Japan?',
        answer: 'National universities: ¥535,800/year (~$3,600). Private universities: ¥800,000-1,500,000/year (~$5,400-10,000). Scholarships available through MEXT (full ride), JASSO, and universities. Japan is affordable compared to US/UK.'
      }
    ]
  },

  // South Korea - Student Visa (D-2)
  {
    visaSlug: 'student-visa',
    countrySlug: 'south-korea',
    officialVisaName: 'Student Visa (D-2 Visa)',
    requirements: {
      eligibility: [
        'Acceptance from accredited Korean higher education institution',
        'High school diploma or higher (for undergraduate)',
        'Bachelor\'s degree (for graduate programs)',
        'Sufficient financial resources',
        'Valid passport',
        'Korean language proficiency (TOPIK 3+ for Korean-taught programs) or English proficiency'
      ],
      financial: {
        minimumFunds: '$10,000+ in bank account or sponsorship',
        proofRequired: ['Bank statement showing $10,000+', 'Sponsor financial documents', 'Scholarship letter if applicable'],
        notes: 'Financial requirements vary. Some universities require tuition payment before visa application.'
      },
      documents: [
        'Valid passport',
        'Visa application form',
        'Photo (3.5cm x 4.5cm, white background)',
        'Certificate of Admission',
        'Apostilled academic transcripts and diploma',
        'Financial proof ($10,000+ or equivalent)',
        'Proof of Korean/English proficiency',
        'Standard Admission Letter from KEIS (Korean immigration system)'
      ]
    },
    duration: {
      initial: '6 months to 2 years',
      renewable: true,
      maxStay: 'Duration of academic program'
    },
    applicationProcess: [
      'Apply to Korean university and receive admission',
      'University issues Standard Admission Letter via KEIS',
      'Gather required documents (apostille for some countries)',
      'Apply for D-2 visa at Korean embassy/consulate',
      'Visa processing takes 1-4 weeks',
      'Arrive in Korea',
      'Register as foreign resident (Alien Registration Card) within 90 days',
      'Enroll in National Health Insurance within first semester'
    ],
    insuranceNotes: 'South Korea requires all international students to enroll in National Health Insurance (NHIS) as of 2021. This is mandatory and non-negotiable. Premiums are approximately ₩70,000-90,000/month (~$50-65). NHIS covers 70% of medical costs at Korean hospitals and clinics.',
    healthcareAccess: 'With NHIS, you have access to Korea\'s excellent healthcare system at 30% copay. Korean healthcare is high-quality, efficient, and affordable. Many doctors in Seoul speak English. Some universities have on-campus health centers for basic care.',
    costs: {
      visaFee: '$50-90 depending on nationality and visa type',
      insuranceRange: '₩70,000-90,000/month (~$50-65) for NHIS'
    },
    recommendedProviders: ['korea-nhis', 'samsung-fire-marine', 'cigna-global', 'allianz-care'],
    keyConsiderations: [
      'NHIS enrollment is mandatory—international insurance not accepted as substitute',
      'D-2 visa is for degree programs; D-4 is for language school',
      'TOPIK Level 3+ often required for Korean-taught programs',
      'Part-time work allowed (20 hrs/week) after 6 months with permission',
      'Korea is very affordable for students (especially outside Seoul)',
      'Strong job market for graduates, especially in tech and teaching'
    ],
    commonMistakes: [
      'Not enrolling in NHIS (mandatory since 2021)',
      'Working without permission in first 6 months',
      'Not getting Alien Registration Card within 90 days',
      'Forgetting to apostille documents (required for some nationalities)',
      'Underestimating Korean language requirements for daily life'
    ],
    faqs: [
      {
        question: 'Is Korean health insurance mandatory?',
        answer: 'Yes. Since 2021, all international students must enroll in Korea\'s National Health Insurance System (NHIS). This is mandatory and you cannot substitute with international insurance. Premiums are ~₩70,000-90,000/month (~$50-65).'
      },
      {
        question: 'How good is Korean healthcare?',
        answer: 'Excellent. Korea has world-class hospitals with modern facilities. Wait times are short, and costs are reasonable with NHIS (30% copay). Many doctors in Seoul speak English. Korea is actually a medical tourism destination.'
      },
      {
        question: 'Can I work while studying in Korea?',
        answer: 'Yes, after your first semester (6 months). Apply for part-time work permission at immigration. Limited to 20 hours/week during term, more during holidays. Minimum wage is ₩9,860/hour (~$7.50) in 2024. Many students teach English or work in service jobs.'
      },
      {
        question: 'What is the D-2 vs D-4 visa?',
        answer: 'D-2 is for degree programs at universities (bachelor\'s, master\'s, PhD). D-4 is for Korean language programs, vocational training, or other non-degree studies. If you\'re attending a language school before university, you\'ll start with D-4, then switch to D-2.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Graduates can apply for D-10 (Job Seeking Visa) for 6 months to 2 years. Once employed, switch to E-7 (Professional Employment) or other work visa. Korea actively recruits skilled foreign graduates, especially in tech, engineering, and teaching.'
      },
      {
        question: 'How much is tuition in Korea?',
        answer: 'National universities: $2,000-5,000/semester. Private universities: $3,500-8,000/semester. Top universities (SKY) cost more. Many scholarships available: Korean Government Scholarship (KGSP), university scholarships, and NIIED. Living costs are low outside Seoul.'
      }
    ]
  },

  // Singapore - Student Pass
  {
    visaSlug: 'student-visa',
    countrySlug: 'singapore',
    officialVisaName: 'Student\'s Pass (STP)',
    requirements: {
      eligibility: [
        'Acceptance from approved Singapore educational institution',
        'Institution must be registered with Immigration & Checkpoints Authority (ICA)',
        'Meet academic requirements for chosen program',
        'Sufficient funds to support studies and living expenses',
        'Valid passport with 6+ months validity',
        'Good character and health'
      ],
      financial: {
        minimumFunds: 'S$20,000-30,000/year (~$15,000-22,000)',
        proofRequired: ['Bank statements', 'Sponsor letter if applicable', 'Scholarship documentation'],
        notes: 'No official minimum, but sufficient funds for tuition + S$1,500-2,500/month living costs expected.'
      },
      documents: [
        'Valid passport',
        'Completed Form 16 (Student\'s Pass application)',
        'Completed Form V36 (if applicable)',
        'Recent passport photo',
        'Letter of acceptance (In-Principle Approval from institution)',
        'Academic transcripts and certificates',
        'Financial proof documents',
        'Medical examination results (for some nationalities)'
      ]
    },
    duration: {
      initial: 'Duration of course (typically 1-4 years)',
      renewable: true,
      maxStay: 'Duration of studies + extensions possible'
    },
    applicationProcess: [
      'Apply to Singapore institution and receive acceptance',
      'Institution applies for In-Principle Approval (IPA) via SOLAR system',
      'Receive IPA letter via email (usually within 4 weeks)',
      'Arrange accommodation and travel',
      'Arrive in Singapore with IPA letter',
      'Complete formalities at ICA within 2 weeks',
      'Receive Student\'s Pass card',
      'Register with institution'
    ],
    insuranceNotes: 'Singapore does not have mandatory national health insurance for students. However, most universities require students to purchase the school\'s health insurance plan or provide proof of equivalent coverage. International health insurance is widely accepted. Singapore healthcare is excellent but expensive without insurance.',
    healthcareAccess: 'Singapore has world-class healthcare but it\'s expensive. Without insurance, basic GP visits cost S$30-50, hospital stays can cost S$300-1,000+/day. Most schools require insurance (S$50-200/semester through school plans). University health centers offer subsidized care for students.',
    costs: {
      visaFee: 'S$30 (IPA) + S$60 (Student\'s Pass issuance) = S$90 (~$67)',
      insuranceRange: 'S$100-500/semester (~$75-375) for university plans'
    },
    recommendedProviders: ['university-health-plan', 'cigna-global', 'allianz-care', 'safetywing'],
    keyConsiderations: [
      'Singapore is expensive—budget S$1,500-2,500/month for living costs',
      'English is the main language—no language barrier',
      'Part-time work requires separate work pass (Training Work Permit)',
      'Strict visa rules—maintain full-time enrollment',
      'Excellent post-study work opportunities in finance and tech',
      'No mandatory government health insurance—school insurance usually required'
    ],
    commonMistakes: [
      'Underestimating living costs (Singapore is very expensive)',
      'Working without proper work permit (serious violation)',
      'Not completing ICA formalities within 2 weeks of arrival',
      'Letting Student\'s Pass expire before renewal',
      'Skipping required school health insurance enrollment'
    ],
    faqs: [
      {
        question: 'Is health insurance mandatory in Singapore?',
        answer: 'There\'s no national mandatory insurance, but most universities require students to enroll in the school\'s health insurance plan or prove equivalent coverage. Costs are typically S$100-500/semester. Given Singapore\'s high medical costs, insurance is essential.'
      },
      {
        question: 'How expensive is Singapore for students?',
        answer: 'Very expensive. Budget S$1,500-2,500/month for living costs (accommodation, food, transport, personal). Accommodation is the biggest expense: S$500-1,500/month for shared rooms. Government subsidies make public university tuition reasonable for some students.'
      },
      {
        question: 'Can I work while studying?',
        answer: 'Only with permission. Full-time students at approved institutions can work up to 16 hours/week during term (no separate permit needed). For more hours or vacation work, you need a Training Work Permit. Internships related to your studies are usually allowed.'
      },
      {
        question: 'What is the SOLAR system?',
        answer: 'SOLAR (Student\'s Pass Online Application & Registration) is ICA\'s online system for student pass applications. Your institution submits the application on your behalf. You\'ll receive the In-Principle Approval (IPA) via email, which you present when arriving in Singapore.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Graduates can apply for Long-Term Visit Pass (up to 1 year) to seek employment. Once you receive a job offer, switch to Employment Pass (EP) or S Pass depending on salary. Singapore actively recruits skilled graduates, especially in finance, tech, and engineering.'
      },
      {
        question: 'How much is tuition in Singapore?',
        answer: 'Public universities (with government tuition grant): S$8,000-15,000/year for international students. Private universities: S$15,000-30,000/year. The tuition grant requires a 3-year work commitment in Singapore after graduation. Without grant, fees are 2-3x higher.'
      }
    ]
  },

  // Switzerland - Student Visa (Permit B)
  {
    visaSlug: 'student-visa',
    countrySlug: 'switzerland',
    officialVisaName: 'Student Residence Permit (Permit B)',
    requirements: {
      eligibility: [
        'Acceptance from recognized Swiss educational institution',
        'Proof of sufficient financial resources',
        'Proof of accommodation in Switzerland',
        'Valid passport',
        'Clean criminal record',
        'Commitment to leave Switzerland after studies'
      ],
      financial: {
        minimumFunds: 'CHF 21,000/year (~$23,000) minimum',
        proofRequired: ['Bank statements', 'Scholarship letter', 'Sponsor guarantee', 'Blocked account'],
        notes: 'Must prove funds for entire study period. Cantonal requirements may vary slightly.'
      },
      documents: [
        'Valid passport (6+ months validity)',
        'Completed visa application form',
        'Passport photos (Swiss specifications)',
        'Letter of acceptance from Swiss institution',
        'Proof of financial resources',
        'Proof of accommodation',
        'CV/resume',
        'Motivation letter',
        'Academic transcripts and diplomas',
        'Language proficiency proof'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies'
    },
    applicationProcess: [
      'Receive acceptance from Swiss university',
      'Gather all required documents',
      'Apply for student visa at Swiss embassy (non-EU/EFTA)',
      'Wait 8-12 weeks for visa processing',
      'Arrive in Switzerland',
      'Register with cantonal migration office within 14 days',
      'Receive Permit B residence card',
      'Register for mandatory health insurance within 3 months'
    ],
    insuranceNotes: 'Switzerland requires mandatory health insurance (Krankenversicherung/LAMal) for all residents including students. You must enroll within 3 months of arrival. Student premiums are approximately CHF 80-150/month for basic coverage. International insurance is NOT accepted—you must have Swiss-compliant coverage.',
    healthcareAccess: 'Once enrolled in mandatory Swiss insurance, you have access to Switzerland\'s excellent healthcare system. Choose a deductible (CHF 300-2,500/year) to adjust premiums. Higher deductible = lower premium. Swiss healthcare is world-class but expensive; insurance makes it affordable.',
    costs: {
      visaFee: 'CHF 88 (~$97) for national visa',
      insuranceRange: 'CHF 80-150/month for basic coverage (LAMal)'
    },
    recommendedProviders: ['swica', 'css', 'helsana', 'sanitas', 'groupe-mutuel'],
    keyConsiderations: [
      'Swiss health insurance is MANDATORY—international plans not accepted',
      'Switzerland is very expensive (CHF 1,800-2,500/month living costs)',
      'Tuition is affordable at public universities (CHF 500-2,000/semester)',
      'Part-time work limited to 15 hrs/week during semester',
      'Four official languages: German, French, Italian, Romansch',
      'Not an EU member—separate visa rules apply'
    ],
    commonMistakes: [
      'Not enrolling in Swiss health insurance within 3 months (mandatory)',
      'Thinking international insurance is sufficient (it\'s not)',
      'Underestimating living costs (Switzerland is very expensive)',
      'Not registering with cantonal authorities within 14 days',
      'Exceeding 15 hours/week work limit during semester'
    ],
    faqs: [
      {
        question: 'Is Swiss health insurance mandatory for students?',
        answer: 'Yes. All residents including students must have Swiss-compliant health insurance (LAMal/KVG). You have 3 months from arrival to enroll. International insurance is NOT accepted. Student premiums are CHF 80-150/month depending on canton and deductible chosen.'
      },
      {
        question: 'How expensive is Switzerland for students?',
        answer: 'Very expensive. Budget CHF 1,800-2,500/month for living costs. Rent alone is CHF 600-1,200/month for a room. The good news: public university tuition is low (CHF 500-2,000/semester). Total annual cost: CHF 25,000-35,000 including tuition and living.'
      },
      {
        question: 'Can I work while studying in Switzerland?',
        answer: 'Yes, but limited. During semester: max 15 hours/week. During semester breaks: full-time allowed. EU/EFTA students have more flexibility. Work permit is part of your residence permit—no separate application needed.'
      },
      {
        question: 'What is the deductible system in Swiss insurance?',
        answer: 'You choose an annual deductible (franchise) from CHF 300 to CHF 2,500. Higher deductible = lower monthly premium. For healthy students who rarely need care, CHF 2,500 deductible saves money. If you expect medical needs, CHF 300 is safer.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'It\'s challenging. Switzerland is strict about post-study immigration. You can apply for a 6-month extension to job search, but finding a Swiss employer to sponsor you is difficult. Many graduates return home or move to EU countries.'
      },
      {
        question: 'Which language should I learn?',
        answer: 'Depends on your university location. Zurich/Bern: German. Geneva/Lausanne: French. Lugano: Italian. Many master\'s programs are in English, but daily life requires local language skills. German-speaking regions are largest.'
      }
    ]
  },

  // Austria - Student Visa (Aufenthaltsbewilligung Studierende)
  {
    visaSlug: 'student-visa',
    countrySlug: 'austria',
    officialVisaName: 'Residence Permit Student (Aufenthaltsbewilligung Studierende)',
    requirements: {
      eligibility: [
        'Acceptance from recognized Austrian educational institution',
        'Proof of sufficient financial resources (€12,500/year for students under 24)',
        'Proof of accommodation in Austria',
        'Valid passport',
        'Health insurance coverage',
        'Clean criminal record'
      ],
      financial: {
        minimumFunds: '€10,452/year (under 24) or €12,500/year (24+)',
        proofRequired: ['Bank statements', 'Scholarship letter', 'Sponsor declaration', 'Blocked account'],
        notes: 'Must prove resources for at least first year. Regular proof required for renewals.'
      },
      documents: [
        'Valid passport',
        'Completed application form',
        'Passport photos (Austrian specifications)',
        'Letter of admission from Austrian institution',
        'Proof of financial resources',
        'Proof of accommodation',
        'Health insurance confirmation',
        'Birth certificate (apostilled)',
        'Criminal record certificate',
        'Academic credentials'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies + extensions'
    },
    applicationProcess: [
      'Receive admission from Austrian university',
      'Apply for student visa at Austrian embassy (non-EU)',
      'Wait 2-3 months for processing',
      'Arrive in Austria with visa',
      'Register residence (Meldezettel) within 3 days',
      'Apply for residence permit at MA 35 (Vienna) or BH',
      'Receive residence permit card',
      'Arrange health insurance if not already covered'
    ],
    insuranceNotes: 'Students can access Austrian public health insurance (ÖGK) through the student self-insurance scheme for approximately €70/month. This is optional but highly recommended. Alternatively, private insurance meeting Austrian standards is accepted. EU/EEA students can use EHIC for initial period.',
    healthcareAccess: 'With ÖGK student insurance (~€70/month), you have full access to Austria\'s excellent public healthcare system with minimal copays. Coverage includes GP visits, specialists, hospitals, and most prescriptions. Private insurance offers faster access to specialists.',
    costs: {
      visaFee: '€160 for residence permit application',
      insuranceRange: '€70/month for ÖGK student self-insurance'
    },
    recommendedProviders: ['oegk', 'uniqa', 'wiener-staedtische', 'generali', 'allianz-austria'],
    keyConsiderations: [
      'Student self-insurance (ÖGK) is affordable at ~€70/month',
      'Austria is more affordable than Switzerland or UK',
      'Free tuition for EU students; ~€726/semester for non-EU',
      'German language required for most programs',
      'Part-time work allowed: 20 hrs/week',
      'Vienna consistently ranked most livable city'
    ],
    commonMistakes: [
      'Not registering residence (Meldezettel) within 3 days',
      'Skipping ÖGK enrollment (it\'s the best value option)',
      'Underestimating German language requirements',
      'Not applying for residence permit promptly after arrival',
      'Exceeding 20 hours/week work limit'
    ],
    faqs: [
      {
        question: 'Is health insurance mandatory in Austria?',
        answer: 'Yes, you need health insurance to get a residence permit. The best option is ÖGK student self-insurance (~€70/month) which gives full public healthcare access. EU students can use EHIC initially, then switch to ÖGK. Private insurance is also accepted.'
      },
      {
        question: 'How much does ÖGK student insurance cost?',
        answer: 'Approximately €70/month for the student self-insurance scheme (Selbstversicherung für Studierende). This covers comprehensive healthcare including GP, specialists, hospital, prescriptions, and basic dental. One of the best value student insurance options in Europe.'
      },
      {
        question: 'Can I work while studying in Austria?',
        answer: 'Yes. Non-EU students can work up to 20 hours/week (10 hrs/week for language course students). No separate work permit needed—it\'s included in your residence permit. Summer jobs and internships have different rules.'
      },
      {
        question: 'Is tuition free in Austria?',
        answer: 'For EU/EEA students: essentially yes (only ~€20 student union fee). For non-EU students: €726.72/semester at public universities. Much more affordable than UK or US. Some programs charge higher fees.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Graduates can apply for "Rot-Weiß-Rot Karte" (job seeker permit) for 12 months. If you find qualifying employment, you can stay long-term. Austria actively recruits skilled graduates in shortage occupations.'
      },
      {
        question: 'Do I need to speak German?',
        answer: 'For most bachelor\'s programs: yes, German B2-C1 required. Master\'s programs increasingly offer English tracks. Daily life in Vienna is manageable with English, but German greatly improves your experience and job prospects.'
      }
    ]
  },

  // Belgium - Student Visa (Type D)
  {
    visaSlug: 'student-visa',
    countrySlug: 'belgium',
    officialVisaName: 'Student Visa (Type D) + Residence Permit',
    requirements: {
      eligibility: [
        'Acceptance from recognized Belgian educational institution',
        'Proof of sufficient financial resources (€730/month minimum)',
        'Valid passport',
        'Health insurance coverage',
        'Clean criminal record',
        'Medical certificate'
      ],
      financial: {
        minimumFunds: '€730/month (~€8,760/year)',
        proofRequired: ['Bank statements', 'Scholarship letter', 'Sponsor undertaking (Annexe 32)', 'Blocked account'],
        notes: 'Sponsor (Belgian resident/citizen) can sign Annexe 32 guaranteeing support. Otherwise, show personal funds.'
      },
      documents: [
        'Valid passport (valid for entire stay)',
        'Completed visa application form',
        'Passport photos',
        'Letter of enrollment/admission',
        'Proof of financial resources or Annexe 32',
        'Health insurance certificate',
        'Medical certificate',
        'Criminal record certificate (apostilled)',
        'Academic credentials (legalized)',
        'Proof of accommodation (optional but helpful)'
      ]
    },
    duration: {
      initial: '1 year (renewable annually)',
      renewable: true,
      maxStay: 'Duration of studies'
    },
    applicationProcess: [
      'Receive admission from Belgian institution',
      'Gather all required documents',
      'Apply for Type D visa at Belgian embassy',
      'Wait 4-8 weeks for processing',
      'Receive visa and travel to Belgium',
      'Register at commune (municipality) within 8 days',
      'Receive residence permit (A card)',
      'Enroll in health insurance (mutuelle/mutualiteit)'
    ],
    insuranceNotes: 'Belgium has mandatory health insurance through mutualités/mutualiteiten (non-profit health funds). Students must register with one upon arrival. Cost is approximately €100-150/year for basic coverage, plus optional supplementary insurance. International students can often use their home country insurance initially, but must transition to Belgian system.',
    healthcareAccess: 'Belgian healthcare operates on a reimbursement system. You pay upfront and get reimbursed 75-100% depending on service. Mutuelle membership is required. Quality is excellent with short wait times. Most doctors speak English in Brussels; Dutch/French elsewhere.',
    costs: {
      visaFee: '€226 for visa application',
      insuranceRange: '€100-150/year for mutuelle + optional supplementary'
    },
    recommendedProviders: ['cm-mc', 'mutualite-socialiste', 'partenamut', 'helan', 'cigna-global'],
    keyConsiderations: [
      'Very affordable tuition (€835-4,175/year for non-EU)',
      'Three regions: Flanders (Dutch), Wallonia (French), Brussels (bilingual)',
      'Central EU location—easy travel to France, Germany, Netherlands, UK',
      'Mutuelle (health fund) membership is mandatory',
      'Part-time work allowed: 20 hrs/week during term',
      'Brussels is EU capital with international job market'
    ],
    commonMistakes: [
      'Not registering at commune within 8 days of arrival',
      'Forgetting to join a mutuelle (health fund)',
      'Not understanding reimbursement system (pay first, get refunded)',
      'Underestimating language needs outside Brussels',
      'Missing residence permit renewal deadline'
    ],
    faqs: [
      {
        question: 'How does Belgian health insurance work?',
        answer: 'You must join a mutuelle (mutualité/mutualiteit)—a non-profit health fund. Cost is ~€100-150/year. When you visit a doctor, you pay upfront and submit receipts for reimbursement (75-100% depending on service). Pharmacies often apply reimbursement directly.'
      },
      {
        question: 'How much is tuition in Belgium?',
        answer: 'Very affordable. Non-EU students: €835-4,175/year depending on region and program. EU students: €835-1,000/year. Flanders (Dutch-speaking) tends to be cheapest. Some specialized programs cost more. Much cheaper than UK or Netherlands.'
      },
      {
        question: 'Can I work while studying in Belgium?',
        answer: 'Yes. During term: 20 hours/week. During holidays: unlimited. No separate work permit needed—included in your student residence permit. Many students work in hospitality, retail, or university jobs.'
      },
      {
        question: 'Which language should I learn?',
        answer: 'Depends on where you study. Flanders: Dutch. Wallonia: French. Brussels: both work, but French is more common. Many international programs are in English, especially at master\'s level. Learning Dutch or French helps daily life significantly.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Belgium offers a 12-month "search year" residence permit for graduates to find employment. If you find a job meeting criteria, you can switch to work permit. Brussels has a strong international job market, especially in EU institutions.'
      },
      {
        question: 'What is the Annexe 32?',
        answer: 'A sponsorship undertaking where a Belgian resident/citizen guarantees financial support for your studies. This can substitute for showing personal funds. The sponsor takes legal responsibility for your costs if you can\'t support yourself.'
      }
    ]
  },

  // Sweden - Student Residence Permit
  {
    visaSlug: 'student-visa',
    countrySlug: 'sweden',
    officialVisaName: 'Residence Permit for Studies (Uppehållstillstånd för studier)',
    requirements: {
      eligibility: [
        'Acceptance to full-time studies at Swedish university',
        'Proof of comprehensive health insurance',
        'Proof of sufficient funds for living expenses',
        'Valid passport',
        'Payment of tuition fees (non-EU students)'
      ],
      financial: {
        minimumFunds: 'SEK 9,450/month (~€850) for living expenses',
        proofRequired: ['Bank statements', 'Scholarship letter', 'Sponsor guarantee'],
        notes: 'Must prove funds for entire first year. CSN (Swedish student aid) not available to non-EU students initially.'
      },
      documents: [
        'Valid passport',
        'Letter of acceptance from Swedish university',
        'Proof of paid tuition (non-EU)',
        'Proof of comprehensive health insurance',
        'Proof of financial support (SEK 9,450/month)',
        'Passport photos',
        'Completed online application'
      ]
    },
    duration: {
      initial: 'Length of studies (max 1 year initially)',
      renewable: true,
      maxStay: 'Duration of study program'
    },
    applicationProcess: [
      'Receive admission from Swedish university',
      'Pay tuition fees (non-EU students)',
      'Apply online via Swedish Migration Agency website',
      'Pay application fee (SEK 1,500)',
      'Submit biometrics at embassy/consulate',
      'Wait 2-4 months for decision',
      'Receive residence permit card',
      'Arrive in Sweden and register with Swedish Tax Agency'
    ],
    insuranceNotes: 'Non-EU students studying less than 1 year must have comprehensive health insurance from home country. Students studying 1+ year are automatically covered by Swedish healthcare (once registered with Tax Agency and assigned personnummer). EU students use EHIC initially, then get Swedish coverage.',
    healthcareAccess: 'Once you have a personnummer (personal ID) and are registered for 1+ year studies, you access Swedish healthcare on same terms as residents. Patient fees are capped at SEK 1,300/year. Before personnummer, use your comprehensive insurance or EHIC (EU students).',
    costs: {
      visaFee: 'SEK 1,500 (~€130) application fee',
      insuranceRange: 'Free after personnummer registration (1+ year studies) or private insurance required'
    },
    recommendedProviders: ['swedish-public-healthcare', 'kammarkollegiet-fk', 'cigna-global', 'safetywing'],
    keyConsiderations: [
      'EU students: free tuition. Non-EU: SEK 80,000-295,000/year (~€7,500-27,000)',
      'Swedish healthcare is essentially free once you have personnummer',
      'High living costs—SEK 9,450/month minimum required',
      'Work permitted without restrictions once permit granted',
      'English widely spoken—many programs in English',
      'Dark winters can be challenging—consider this seriously'
    ],
    commonMistakes: [
      'Not having comprehensive insurance for studies under 1 year',
      'Underestimating how long personnummer takes (can be weeks/months)',
      'Not registering with Tax Agency promptly after arrival',
      'Underestimating living costs (Sweden is expensive)',
      'Not paying tuition before applying for permit (non-EU)'
    ],
    faqs: [
      {
        question: 'Is health insurance included for students in Sweden?',
        answer: 'For 1+ year programs: yes, once you have a personnummer (Swedish ID), you access public healthcare with small patient fees (max SEK 1,300/year). For shorter programs: you must have comprehensive private insurance. EU students can use EHIC.'
      },
      {
        question: 'How much is tuition in Sweden?',
        answer: 'EU/EEA students: FREE. Non-EU students: SEK 80,000-295,000/year (~€7,500-27,000) depending on program. STEM and medical programs cost more. Scholarships available through Swedish Institute and universities.'
      },
      {
        question: 'Can I work while studying in Sweden?',
        answer: 'Yes! Students with residence permits can work unlimited hours. No separate work permit needed. This is one of Sweden\'s advantages—many students work part-time to offset high living costs.'
      },
      {
        question: 'What is the personnummer?',
        answer: 'Swedish personal identity number—essential for healthcare, banking, phone contracts, and more. Register with Swedish Tax Agency (Skatteverket) after arrival. Processing takes 2-8 weeks. Life is difficult without it, so apply immediately.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Sweden offers a 9-month extension for job seeking after graduation. If you find employment meeting salary thresholds, you can get a work permit. Sweden actively recruits skilled graduates, especially in tech and engineering.'
      },
      {
        question: 'How dark are Swedish winters?',
        answer: 'Very dark in northern Sweden (polar night). Stockholm gets ~6 hours daylight in December. Many students struggle with this—take it seriously. Light therapy lamps and staying active help. Summers compensate with near-24-hour daylight.'
      }
    ]
  },

  // Denmark - Student Residence Permit
  {
    visaSlug: 'student-visa',
    countrySlug: 'denmark',
    officialVisaName: 'Residence Permit for Studies (Opholdstilladelse til studier)',
    requirements: {
      eligibility: [
        'Acceptance to full-time higher education in Denmark',
        'Proof of sufficient financial resources',
        'Valid passport',
        'Health insurance (non-EU for first period)',
        'Tuition payment confirmation (non-EU)'
      ],
      financial: {
        minimumFunds: 'DKK 6,397/month (~€860) for living expenses',
        proofRequired: ['Bank statements showing funds', 'Scholarship documentation', 'Loan approval'],
        notes: 'Must demonstrate funds for entire study period or at least first year.'
      },
      documents: [
        'Valid passport',
        'Letter of admission from Danish institution',
        'Proof of tuition payment (non-EU)',
        'Documentation of financial resources',
        'Health insurance proof (initial period)',
        'Passport photo',
        'Completed application via newtodenmark.dk'
      ]
    },
    duration: {
      initial: 'Duration of studies',
      renewable: true,
      maxStay: 'Length of study program + possible extensions'
    },
    applicationProcess: [
      'Receive admission from Danish university',
      'Pay tuition (non-EU students)',
      'Apply online at newtodenmark.dk',
      'Pay application fee (DKK 2,000-2,500)',
      'Submit biometrics at embassy/application center',
      'Wait 1-2 months for processing',
      'Receive residence permit',
      'Register with CPR (Civil Registration) after arrival'
    ],
    insuranceNotes: 'EU students use EHIC, then get Danish health card (sundhedskort). Non-EU students need private insurance until they receive CPR number and Danish health card (typically takes a few weeks). Once registered, Danish public healthcare is free.',
    healthcareAccess: 'After CPR registration, you receive a Danish health card (sundhedskort) giving access to free public healthcare. GP visits, hospital care, and most treatments are free. You choose a GP in your area. Dental and some services not covered.',
    costs: {
      visaFee: 'DKK 2,000-2,500 (~€270-335) application fee',
      insuranceRange: 'Free after CPR registration; private insurance needed initially (~€50-100/month)'
    },
    recommendedProviders: ['danish-public-healthcare', 'cigna-global', 'allianz-care', 'safetywing'],
    keyConsiderations: [
      'EU students: free tuition. Non-EU: DKK 45,000-120,000/year (~€6,000-16,000)',
      'Danish healthcare is free once you have CPR number',
      'Very high living costs—Denmark is expensive',
      'Work allowed: 20 hrs/week during semester, full-time in summer',
      'English widely spoken—many English-taught programs',
      'Hygge culture and high quality of life'
    ],
    commonMistakes: [
      'Not having insurance for the period before CPR registration',
      'Underestimating Danish living costs (Copenhagen especially)',
      'Not registering for CPR promptly after arrival',
      'Expecting to survive without a bike (cycling is essential)',
      'Underestimating the cold and dark winters'
    ],
    faqs: [
      {
        question: 'Is healthcare free for students in Denmark?',
        answer: 'Yes, once you have a CPR number and Danish health card (sundhedskort). Registration takes a few weeks after arrival. Until then, EU students use EHIC; non-EU students need private insurance. After registration, GP visits and hospital care are free.'
      },
      {
        question: 'How much is tuition in Denmark?',
        answer: 'EU/EEA students: FREE. Non-EU students: DKK 45,000-120,000/year (~€6,000-16,000). Some programs (business, technical) cost more. Scholarships available but competitive.'
      },
      {
        question: 'Can I work while studying in Denmark?',
        answer: 'Yes. During semester: 20 hours/week. June-August and December: full-time allowed. No separate work permit needed. Many students work to offset Denmark\'s high living costs. Minimum wage is high (~DKK 120/hour).'
      },
      {
        question: 'What is the CPR number?',
        answer: 'Civil Personal Registration number—your Danish ID. Essential for healthcare, banking, employment, phone contracts. Register at your local Citizen Service Centre after arrival. Processing: 1-3 weeks typically.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Denmark offers a 6-month "establishment card" for job seeking after graduation. Can be extended to 3 years if you find qualifying work. Pay Limit scheme allows staying if earning above DKK 465,000/year.'
      },
      {
        question: 'How expensive is Copenhagen?',
        answer: 'Very expensive. Budget DKK 8,000-12,000/month minimum (€1,100-1,600). Rent alone: DKK 5,000-8,000 for a room. Smaller cities (Aarhus, Odense) are cheaper. Student housing (kollegium) is much more affordable if you can get it.'
      }
    ]
  },

  // Norway - Student Residence Permit
  {
    visaSlug: 'student-visa',
    countrySlug: 'norway',
    officialVisaName: 'Student Residence Permit (Oppholdstillatelse for studier)',
    requirements: {
      eligibility: [
        'Admission to approved Norwegian educational institution',
        'Proof of full financing for living expenses and tuition',
        'Valid passport',
        'Housing arrangement in Norway',
        'Health insurance (until enrolled in Norwegian system)'
      ],
      financial: {
        minimumFunds: 'NOK 137,907/year (~€12,000) for living expenses (2024 rate)',
        proofRequired: ['Bank account in own name with full amount', 'Norwegian bank account or blocked account', 'Scholarship proof'],
        notes: 'Full amount must be available, not income over time. Can be Norwegian bank account, blocked account, or scholarship.'
      },
      documents: [
        'Valid passport',
        'Letter of admission from Norwegian institution',
        'Proof of full financing (NOK 137,907)',
        'Proof of housing arrangement',
        'Health insurance documentation',
        'Passport photo',
        'Completed online application via UDI'
      ]
    },
    duration: {
      initial: '1 year (renewable)',
      renewable: true,
      maxStay: 'Duration of studies'
    },
    applicationProcess: [
      'Receive admission from Norwegian institution',
      'Prepare financial documentation (full amount)',
      'Apply online at UDI (Norwegian immigration)',
      'Pay application fee (NOK 6,300)',
      'Submit biometrics at embassy/police station',
      'Wait 1-3 months for processing',
      'Receive residence permit',
      'Register with Norwegian Tax Administration after arrival'
    ],
    insuranceNotes: 'Students enrolled in programs lasting 1+ year are entitled to Norwegian public healthcare (Helfo). You need a D-number or Norwegian ID number first. Until then, have private insurance. EU students can use EHIC. Norwegian healthcare has small copays but is largely free.',
    healthcareAccess: 'After registering and receiving D-number/ID number, you access Norwegian public healthcare. GP visits have copay of ~NOK 160-200 (~€14-18). Hospital stays: NOK 200/day. Annual cap: NOK 3,165 (~€275). Very affordable for comprehensive care.',
    costs: {
      visaFee: 'NOK 6,300 (~€550) application fee',
      insuranceRange: 'Minimal copays with Norwegian healthcare; private insurance ~€50-100/month before registration'
    },
    recommendedProviders: ['norwegian-public-helfo', 'cigna-global', 'allianz-care', 'safetywing'],
    keyConsiderations: [
      'Tuition is FREE at public universities—even for non-EU students!',
      'Extremely high living costs—NOK 137,907/year minimum required',
      'Must prove FULL financing upfront (not monthly income)',
      'Work allowed: 20 hrs/week during semester, full-time in holidays',
      'Spectacular nature—fjords, northern lights, midnight sun',
      'Norwegian healthcare has small copays but excellent coverage'
    ],
    commonMistakes: [
      'Not having the FULL funding amount available (it\'s strictly checked)',
      'Underestimating Norwegian living costs (highest in Europe)',
      'Not arranging housing before applying (required)',
      'Not having insurance before D-number registration',
      'Thinking high costs mean better job availability (it\'s still competitive)'
    ],
    faqs: [
      {
        question: 'Is tuition really free in Norway?',
        answer: 'Yes! Norwegian public universities charge no tuition—even for international students. You only pay a small semester fee (NOK 300-600). This is unique in the world. The catch: you must prove NOK 137,907/year for living costs, and Norway is VERY expensive.'
      },
      {
        question: 'How does Norwegian healthcare work for students?',
        answer: 'After registering and getting a D-number (takes a few weeks), you access public healthcare with small copays: GP ~NOK 160-200, hospital ~NOK 200/day. Annual cap is NOK 3,165. Coverage is excellent. Until D-number: use private insurance or EHIC.'
      },
      {
        question: 'How expensive is Norway really?',
        answer: 'The most expensive country in Europe. Budget NOK 12,000-15,000/month minimum (€1,000-1,300). Rent in Oslo: NOK 6,000-10,000/month for a room. Food is expensive. Alcohol is very expensive. Student housing helps significantly.'
      },
      {
        question: 'Can I work while studying in Norway?',
        answer: 'Yes. During semester: 20 hours/week. During semester breaks: full-time. No separate work permit needed. Wages are high (NOK 150-200/hour common for student jobs) but so are costs. Many students work to supplement savings.'
      },
      {
        question: 'What is the D-number?',
        answer: 'Temporary Norwegian identification number for people not permanently resident. You need it for healthcare, banking, employment. Register at the Tax Office after arrival. Processing: 2-4 weeks. Once you\'ve been in Norway longer, you get a full national ID number.'
      },
      {
        question: 'Can I stay after graduation?',
        answer: 'Yes. Graduates can apply for a 1-year job seeker permit. If you find skilled employment, you can get a work permit. Norway also has a skilled worker immigration program. The job market is good for tech, engineering, and oil/energy sectors.'
      }
    ]
  }
];

// Helper functions
export function getVisaCountryEntry(visaSlug: string, countrySlug: string): VisaCountryEntry | undefined {
  return visaCountryMatrix.find(e => e.visaSlug === visaSlug && e.countrySlug === countrySlug);
}

export function getCountriesForVisa(visaSlug: string): string[] {
  return visaCountryAvailability[visaSlug] || [];
}

export function getVisasForCountry(countrySlug: string): string[] {
  return Object.entries(visaCountryAvailability)
    .filter(([_, countries]) => countries.includes(countrySlug))
    .map(([visaSlug]) => visaSlug);
}

export function getAllVisaCountryPairs(): Array<{ visaSlug: string; countrySlug: string }> {
  const pairs: Array<{ visaSlug: string; countrySlug: string }> = [];

  // Only return pairs that have full data entries (not just availability)
  for (const entry of visaCountryMatrix) {
    pairs.push({ visaSlug: entry.visaSlug, countrySlug: entry.countrySlug });
  }

  return pairs;
}

export function getVisaCountryEntriesForVisa(visaSlug: string): VisaCountryEntry[] {
  return visaCountryMatrix.filter(e => e.visaSlug === visaSlug);
}

export function getVisaCountryEntriesForCountry(countrySlug: string): VisaCountryEntry[] {
  return visaCountryMatrix.filter(e => e.countrySlug === countrySlug);
}
