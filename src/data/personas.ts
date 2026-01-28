/**
 * personas.ts
 *
 * Persona definitions for programmatic page generation.
 * Used for provider-persona and country-persona pages.
 */

export interface Persona {
  /** URL slug (e.g., "digital-nomads") */
  slug: string;
  /** Display name (e.g., "Digital Nomads") */
  name: string;
  /** Singular form (e.g., "digital nomad") */
  singular: string;
  /** Short description */
  description: string;
  /** Key insurance needs for this persona */
  keyNeeds: string[];
  /** What to look for in a plan */
  lookFor: string[];
  /** Common concerns/questions */
  concerns: string[];
  /** Link to main persona page */
  href: string;
}

export const personas: Persona[] = [
  {
    slug: 'digital-nomads',
    name: 'Digital Nomads',
    singular: 'digital nomad',
    description: 'Remote workers who travel frequently and work from multiple countries.',
    keyNeeds: [
      'Coverage in multiple countries without changing plans',
      'Flexibility to move between destinations',
      'Telemedicine and virtual consultations',
      'No fixed address requirements'
    ],
    lookFor: [
      'Worldwide coverage (excluding or including US)',
      'Monthly payment options vs annual',
      'No minimum stay requirements per country',
      'Good travel medical coverage'
    ],
    concerns: [
      'Will I be covered if I change countries frequently?',
      'Do I need to declare my location?',
      'Is travel insurance enough or do I need health insurance?',
      'What happens if I need care in a country not on my plan?'
    ],
    href: '/insurance-for/digital-nomads'
  },
  {
    slug: 'retirees',
    name: 'Retirees',
    singular: 'retiree',
    description: 'People retiring abroad who need comprehensive long-term coverage.',
    keyNeeds: [
      'Coverage for age-related conditions',
      'No upper age limits or reasonable limits',
      'Pre-existing condition coverage or short waiting periods',
      'Prescription drug coverage'
    ],
    lookFor: [
      'Plans that accept applicants 65+',
      'Chronic condition management',
      'Wellness and preventive care',
      'Medical evacuation to home country'
    ],
    concerns: [
      'Will my pre-existing conditions be covered?',
      'What are the age limits for coverage?',
      'How much will premiums increase as I age?',
      'Can I get coverage for ongoing medications?'
    ],
    href: '/insurance-for/retirees'
  },
  {
    slug: 'families',
    name: 'Families',
    singular: 'family',
    description: 'Families with children relocating abroad who need coverage for all members.',
    keyNeeds: [
      'Pediatric care and well-child visits',
      'Maternity coverage (if planning more children)',
      'Vaccination coverage',
      'Family-friendly pricing'
    ],
    lookFor: [
      'Dependent coverage options',
      'Newborn coverage from birth',
      'Pediatric specialists in network',
      'Mental health coverage for all ages'
    ],
    concerns: [
      'Are my children covered for routine checkups?',
      'What about vaccinations and school requirements?',
      'Is maternity covered if we have another child?',
      'How do family deductibles work?'
    ],
    href: '/insurance-for/families'
  },
  {
    slug: 'remote-workers',
    name: 'Remote Workers',
    singular: 'remote worker',
    description: 'Employees working remotely from abroad for a company in another country.',
    keyNeeds: [
      'Coverage that satisfies employer requirements',
      'Compliance with local visa requirements',
      'Stable coverage for longer-term stays',
      'Integration with employer benefits if applicable'
    ],
    lookFor: [
      'Plans accepted for visa applications',
      'Coverage certificates for employers',
      'Annual plans with stable pricing',
      'Good network in your chosen destination'
    ],
    concerns: [
      'Does my employer insurance cover me abroad?',
      'Do I need local insurance for my visa?',
      'Can I coordinate with employer benefits?',
      'What if my company requires specific coverage?'
    ],
    href: '/insurance-for/remote-workers'
  },
  {
    slug: 'students',
    name: 'Students',
    singular: 'student',
    description: 'International students studying abroad who need affordable coverage.',
    keyNeeds: [
      'Affordable premiums on student budgets',
      'Coverage that meets university requirements',
      'Mental health support',
      'Coverage during breaks and travel'
    ],
    lookFor: [
      'Student-specific plans with lower rates',
      'University requirement compliance',
      'Coverage during holidays in other countries',
      'Counseling and mental health services'
    ],
    concerns: [
      'Does this meet my university requirements?',
      'Am I covered during summer break?',
      'What if I travel during school holidays?',
      'Is mental health counseling covered?'
    ],
    href: '/insurance-for/students'
  },
  {
    slug: 'freelancers',
    name: 'Freelancers',
    singular: 'freelancer',
    description: 'Self-employed professionals working internationally without employer coverage.',
    keyNeeds: [
      'Individual coverage without employer sponsorship',
      'Flexible payment options',
      'Coverage that works for variable income',
      'Tax-deductible premiums where applicable'
    ],
    lookFor: [
      'Individual plan options (not group)',
      'Monthly vs annual payment flexibility',
      'Reasonable rates for self-employed',
      'No employer verification required'
    ],
    concerns: [
      'Can I get coverage without an employer?',
      'Are premiums tax-deductible?',
      'What if my income varies month to month?',
      'Do I need business insurance too?'
    ],
    href: '/insurance-for/freelancers'
  },
  {
    slug: 'seniors',
    name: 'Seniors (65+)',
    singular: 'senior',
    description: 'Older adults who need coverage that accommodates age-related health needs.',
    keyNeeds: [
      'No rejection based on age',
      'Coverage for chronic conditions',
      'Reasonable premiums for age group',
      'Good prescription coverage'
    ],
    lookFor: [
      'Plans accepting 70+, 75+, or 80+ applicants',
      'Pre-existing condition policies',
      'Premium caps or predictable increases',
      'Strong hospital networks'
    ],
    concerns: [
      'Is there an age limit for applying?',
      'How much will my premium increase each year?',
      'Will my conditions disqualify me?',
      'Is there a maximum coverage age?'
    ],
    href: '/insurance-for/seniors'
  },
  {
    slug: 'entrepreneurs',
    name: 'Entrepreneurs',
    singular: 'entrepreneur',
    description: 'Business owners relocating abroad or running international businesses.',
    keyNeeds: [
      'Flexibility for business travel',
      'Coverage in multiple business locations',
      'Options to cover employees',
      'High coverage limits for executives'
    ],
    lookFor: [
      'Multi-country coverage',
      'Group plan options for small teams',
      'Executive health plans',
      'Business travel coverage'
    ],
    concerns: [
      'Can I cover my small team?',
      'What about frequent business travel?',
      'Are there executive plan options?',
      'How do I handle coverage in multiple countries?'
    ],
    href: '/insurance-for/entrepreneurs'
  }
];

// Helper functions
export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find(p => p.slug === slug);
}

export function getAllPersonaSlugs(): string[] {
  return personas.map(p => p.slug);
}
