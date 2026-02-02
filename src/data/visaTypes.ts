/**
 * visaTypes.ts
 *
 * Visa type definitions for programmatic page generation.
 * Used for visa-country pages like /visas/digital-nomad-visa/in/spain
 */

export interface VisaType {
  /** URL slug (e.g., "digital-nomad-visa") */
  slug: string;
  /** Display name (e.g., "Digital Nomad Visa") */
  name: string;
  /** Singular form (e.g., "digital nomad visa") */
  singular: string;
  /** Short description */
  description: string;
  /** Key insurance requirements for this visa type */
  insuranceRequirements: string[];
  /** What to look for in a plan for this visa */
  lookFor: string[];
  /** Common concerns/questions */
  concerns: string[];
  /** Related persona slugs (maps to existing persona system) */
  relatedPersonas: string[];
  /** Link to main visa type page */
  href: string;
}

export const visaTypes: VisaType[] = [
  {
    slug: 'digital-nomad-visa',
    name: 'Digital Nomad Visa',
    singular: 'digital nomad visa',
    description: 'Residence visas for remote workers employed by companies outside the host country.',
    insuranceRequirements: [
      'Most require comprehensive health insurance valid in the country',
      'Minimum coverage amounts vary (often €30,000+ in EU)',
      'Must be valid for the visa duration (typically 1-2 years)',
      'Some require coverage from specific provider types'
    ],
    lookFor: [
      'Coverage meeting minimum requirements (check specific country)',
      'Annual plans to match visa duration',
      'No "home country" exclusions',
      'Telemedicine access for convenience'
    ],
    concerns: [
      'Does my insurance meet the visa requirements?',
      'Will SafetyWing/travel insurance be accepted?',
      'What happens if I switch countries?',
      'Do I need to show proof of insurance at the border?'
    ],
    relatedPersonas: ['digital-nomads', 'remote-workers', 'freelancers'],
    href: '/visas/digital-nomad-visa'
  },
  {
    slug: 'retirement-visa',
    name: 'Retirement Visa',
    singular: 'retirement visa',
    description: 'Long-stay visas for retirees with pension income or sufficient savings.',
    insuranceRequirements: [
      'Comprehensive coverage often mandatory',
      'Age limits may apply (some insurers cap at 70-80)',
      'Pre-existing condition coverage requirements vary',
      'Minimum coverage limits typically €30,000-€100,000'
    ],
    lookFor: [
      'Plans accepting applicants your age',
      'Pre-existing condition coverage options',
      'Lifetime renewal guarantees',
      'No maximum coverage age'
    ],
    concerns: [
      'Will my pre-existing conditions be covered?',
      'What are the age limits for this insurer?',
      'How much will premiums increase annually?',
      'Does Medicare/home country insurance work?'
    ],
    relatedPersonas: ['retirees', 'seniors'],
    href: '/visas/retirement-visa'
  },
  {
    slug: 'student-visa',
    name: 'Student Visa',
    singular: 'student visa',
    description: 'Visas for international students enrolled in educational institutions.',
    insuranceRequirements: [
      'University may require specific coverage',
      'Mental health coverage increasingly important',
      'Coverage during breaks and holidays',
      'Some countries mandate public healthcare enrollment'
    ],
    lookFor: [
      'Student-specific plans with lower rates',
      'University requirement compliance',
      'Mental health and counseling coverage',
      'Coverage during travel and breaks'
    ],
    concerns: [
      'Does this meet my university requirements?',
      'Am I covered during summer break?',
      'Is mental health counseling covered?',
      'What if I travel during holidays?'
    ],
    relatedPersonas: ['students'],
    href: '/visas/student-visa'
  },
  {
    slug: 'freelancer-visa',
    name: 'Freelancer/Self-Employed Visa',
    singular: 'freelancer visa',
    description: 'Residence permits for self-employed professionals and freelancers.',
    insuranceRequirements: [
      'Private insurance often mandatory (no employer coverage)',
      'Must meet local minimum standards',
      'Business insurance separate from health insurance',
      'Tax implications vary by country'
    ],
    lookFor: [
      'Individual plan options (not group/employer)',
      'Flexible payment terms for variable income',
      'Tax-deductible premium structures',
      'No employer verification required'
    ],
    concerns: [
      'Can I get coverage without an employer?',
      'Are premiums tax-deductible?',
      'What if my income varies month to month?',
      'Do I need separate business insurance?'
    ],
    relatedPersonas: ['freelancers', 'entrepreneurs'],
    href: '/visas/freelancer-visa'
  },
  {
    slug: 'investor-visa',
    name: 'Investor/Entrepreneur Visa',
    singular: 'investor visa',
    description: 'Visas for business owners, investors, and startup founders.',
    insuranceRequirements: [
      'Proof of comprehensive coverage typically required',
      'May need to cover employees/dependents',
      'Business travel coverage important',
      'High coverage limits often expected'
    ],
    lookFor: [
      'Multi-country coverage for business travel',
      'Group plan options for employees',
      'Executive health plan features',
      'High coverage limits'
    ],
    concerns: [
      'Can I cover my team on one plan?',
      'What about frequent business travel?',
      'Are there executive plan options?',
      'How do I handle coverage in multiple countries?'
    ],
    relatedPersonas: ['entrepreneurs'],
    href: '/visas/investor-visa'
  },
  {
    slug: 'work-permit',
    name: 'Work Permit',
    singular: 'work permit',
    description: 'Employment visas for workers hired by local companies.',
    insuranceRequirements: [
      'Employer often provides coverage (check what\'s included)',
      'May need supplemental private insurance',
      'Mandatory public insurance in some countries',
      'Coordinate with employer benefits'
    ],
    lookFor: [
      'Plans that supplement employer coverage',
      'Coverage for gaps in employer plans',
      'Portable coverage if changing jobs',
      'Family coverage options'
    ],
    concerns: [
      'Does my employer insurance cover everything?',
      'What happens if I change jobs?',
      'Do I need additional private coverage?',
      'Can I add family members to my plan?'
    ],
    relatedPersonas: ['remote-workers', 'families'],
    href: '/visas/work-permit'
  }
];

// Helper functions
export function getVisaTypeBySlug(slug: string): VisaType | undefined {
  return visaTypes.find(v => v.slug === slug);
}

export function getAllVisaTypeSlugs(): string[] {
  return visaTypes.map(v => v.slug);
}

export function getVisaTypesByPersona(personaSlug: string): VisaType[] {
  return visaTypes.filter(v => v.relatedPersonas.includes(personaSlug));
}
