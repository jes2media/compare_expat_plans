export interface CountryRequirement {
  country: string;
  insuranceRequired: 'Yes' | 'No' | 'Depends';
  publicSystemAccess: 'Full' | 'Limited' | 'None' | 'Depends';
  notes: string;
}

export const requirementsByCountry: CountryRequirement[] = [
  {
    country: 'Spain',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Limited',
    notes: 'Required for non-lucrative and digital nomad visas. Public access after residency and social security contributions.',
  },
  {
    country: 'Portugal',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'Required for D7/D8 visas. SNS (public system) access available to legal residents.',
  },
  {
    country: 'France',
    insuranceRequired: 'Depends',
    publicSystemAccess: 'Full',
    notes: 'Required for long-stay visa application. PUMA (public coverage) available after 3 months of stable residence.',
  },
  {
    country: 'Italy',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'Required for elective residency visa. SSN (public system) access with residency registration.',
  },
  {
    country: 'Germany',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'Health insurance mandatory for all residents. Choice of public (gesetzliche) or private coverage.',
  },
  {
    country: 'Netherlands',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'Basic health insurance (basisverzekering) legally required for all residents.',
  },
  {
    country: 'Switzerland',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'None',
    notes: 'Health insurance mandatory within 3 months of arrival. No public system; all coverage is private.',
  },
  {
    country: 'United Kingdom',
    insuranceRequired: 'Depends',
    publicSystemAccess: 'Full',
    notes: 'NHS access based on residency status. Immigration Health Surcharge required for most visa types.',
  },
  {
    country: 'Ireland',
    insuranceRequired: 'No',
    publicSystemAccess: 'Full',
    notes: 'No insurance requirement for residency. HSE (public system) access available to residents.',
  },
  {
    country: 'Mexico',
    insuranceRequired: 'No',
    publicSystemAccess: 'Limited',
    notes: 'No insurance required for temporary or permanent residency. IMSS access available through voluntary enrollment.',
  },
  {
    country: 'Costa Rica',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'CAJA (public insurance) enrollment mandatory for all residents. Private insurance accepted for initial visa.',
  },
  {
    country: 'Panama',
    insuranceRequired: 'No',
    publicSystemAccess: 'Limited',
    notes: 'No insurance required for Pensionado or Friendly Nations visa. Public system access limited for non-citizens.',
  },
  {
    country: 'Colombia',
    insuranceRequired: 'Depends',
    publicSystemAccess: 'Limited',
    notes: 'Digital nomad visa requires insurance. Retirement visa does not. EPS (public) enrollment available to residents.',
  },
  {
    country: 'Brazil',
    insuranceRequired: 'No',
    publicSystemAccess: 'Full',
    notes: 'No insurance requirement for most visas. SUS (public system) available to all residents free of charge.',
  },
  {
    country: 'Thailand',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'None',
    notes: 'Required for O-A, O-X retirement visas and LTR visa. Must meet minimum coverage amounts. No public access for expats.',
  },
  {
    country: 'Vietnam',
    insuranceRequired: 'Depends',
    publicSystemAccess: 'Limited',
    notes: 'Some work permits require insurance. Public system technically available but limited English-language care.',
  },
  {
    country: 'Japan',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'National Health Insurance (NHI) enrollment mandatory for residents staying 3+ months.',
  },
  {
    country: 'South Korea',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Full',
    notes: 'National Health Insurance mandatory for residents on long-term visas (6+ months).',
  },
  {
    country: 'Australia',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'Depends',
    notes: 'OSHC required for student visas. Medicare access depends on visa type and reciprocal agreements.',
  },
  {
    country: 'UAE',
    insuranceRequired: 'Yes',
    publicSystemAccess: 'None',
    notes: 'Health insurance mandatory in Abu Dhabi and Dubai. No public system; employer-sponsored or private required.',
  },
];

export const lastUpdated = '2026-01-26';

export const methodology = `## Methodology

This report compiles health insurance requirements for expat residency across 20 countries. Our research process includes:

**Data Collection**
- Review of official government immigration websites and visa requirement pages
- Analysis of embassy and consulate guidance documents
- Examination of public health system eligibility rules
- Cross-referencing with international health insurance provider documentation

**Verification**
- Each country entry verified against at least two independent official sources
- Requirements checked against recent policy changes (within 12 months)
- Notes reviewed for accuracy by editorial team

**Limitations**
- Requirements may change without notice; always verify with official sources
- Specific visa types may have different requirements than general guidance
- Public system access rules vary by region within some countries
- This data represents general patterns and may not cover all edge cases

**Update Schedule**
- Full review conducted quarterly
- Individual country updates made as policy changes are identified
- Last comprehensive review: January 2026`;
