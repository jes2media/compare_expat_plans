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
