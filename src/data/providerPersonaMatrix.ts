/**
 * providerPersonaMatrix.ts
 *
 * Maps providers to personas with specific recommendations.
 * Used for /providers/[provider]/for-[persona] pages.
 */

export interface ProviderPersonaEntry {
  /** Provider slug */
  providerSlug: string;
  /** Persona slug */
  personaSlug: string;
  /** Rating: "excellent", "good", "fair", "not-recommended" */
  rating: 'excellent' | 'good' | 'fair' | 'not-recommended';
  /** Why this provider works (or doesn't) for this persona */
  summary: string;
  /** Specific benefits for this persona */
  benefits: string[];
  /** Drawbacks or considerations for this persona */
  drawbacks: string[];
  /** Recommended plan tier if applicable */
  recommendedPlan?: string;
  /** Estimated monthly cost range for this persona */
  estimatedCost?: string;
}

export const providerPersonaMatrix: ProviderPersonaEntry[] = [
  // =====================
  // CIGNA GLOBAL
  // =====================
  {
    providerSlug: 'cigna-global',
    personaSlug: 'digital-nomads',
    rating: 'good',
    summary: 'Cigna Global offers solid worldwide coverage for nomads, but the premium pricing may be overkill for young, healthy travelers who move frequently.',
    benefits: [
      'Worldwide coverage in 200+ countries',
      '24/7 English support from anywhere',
      'Strong hospital networks in major cities globally',
      'No need to notify when changing countries'
    ],
    drawbacks: [
      'Higher premiums than nomad-specific options like SafetyWing',
      'Annual commitment may not suit short-term nomads',
      'May be more coverage than needed for healthy young travelers'
    ],
    recommendedPlan: 'Silver (hospital-only) or Gold',
    estimatedCost: '$150-300/month'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'retirees',
    rating: 'excellent',
    summary: 'Cigna Global is one of the best options for retirees, with coverage up to age 74 for new applicants and comprehensive benefits for age-related conditions.',
    benefits: [
      'Accepts new applicants up to age 74',
      'Strong chronic condition management',
      'Excellent prescription drug coverage',
      'Medical evacuation to home country included'
    ],
    drawbacks: [
      'Premiums increase significantly with age',
      'Pre-existing conditions require underwriting',
      'May be expensive for retirees on fixed income'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$400-800/month (age 65+)'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'families',
    rating: 'excellent',
    summary: 'Cigna Global is excellent for families, with comprehensive pediatric coverage, maternity benefits, and the ability to add newborns from birth.',
    benefits: [
      'Newborns covered from birth (add within 30 days)',
      'Comprehensive pediatric and well-child coverage',
      'Maternity coverage available (waiting period applies)',
      'Family deductible options'
    ],
    drawbacks: [
      'Maternity has 10-12 month waiting period',
      'Family premiums can be substantial',
      'Some wellness visits may have limits'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$400-700/month (family of 4)'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'remote-workers',
    rating: 'excellent',
    summary: 'Cigna Global is a top choice for remote workers, with visa-compliant coverage and certificates that satisfy most employer and government requirements.',
    benefits: [
      'Widely accepted for visa applications',
      'Coverage certificates available on request',
      'Stable annual pricing for budgeting',
      'Strong networks in popular remote work destinations'
    ],
    drawbacks: [
      'Higher cost than local insurance options',
      'Annual commitment required',
      'May duplicate employer coverage if not coordinated'
    ],
    recommendedPlan: 'Gold',
    estimatedCost: '$150-250/month'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'students',
    rating: 'fair',
    summary: 'Cigna Global works for students but is typically more expensive than student-specific plans. Consider only if your university specifically requires it.',
    benefits: [
      'Comprehensive coverage meets most university requirements',
      'Worldwide coverage for study abroad and travel',
      'Mental health coverage included'
    ],
    drawbacks: [
      'Significantly more expensive than student plans',
      'No student-specific discounts',
      'May be overkill for healthy young students'
    ],
    recommendedPlan: 'Silver',
    estimatedCost: '$100-180/month'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'freelancers',
    rating: 'good',
    summary: 'Cigna Global is a solid choice for freelancers who want comprehensive coverage and can afford the premiums without employer subsidies.',
    benefits: [
      'No employer required—individual plans available',
      'Premiums may be tax-deductible (consult tax advisor)',
      'Comprehensive coverage for peace of mind',
      'Worldwide portability as you take on global clients'
    ],
    drawbacks: [
      'Premium pricing without employer cost-sharing',
      'Annual commitment may not suit variable income',
      'No monthly payment flexibility on all plans'
    ],
    recommendedPlan: 'Gold with higher deductible',
    estimatedCost: '$150-300/month'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'seniors',
    rating: 'good',
    summary: 'Cigna Global accepts seniors up to 74 and provides good coverage, but premiums are high and increase substantially with age.',
    benefits: [
      'Accepts new applicants up to age 74',
      'Comprehensive coverage for chronic conditions',
      'Good prescription coverage',
      'No coverage termination age (renewal guaranteed)'
    ],
    drawbacks: [
      'Very high premiums for 70+ age group',
      'Strict underwriting for pre-existing conditions',
      'Premium increases can be significant annually'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$600-1,200/month (age 70+)'
  },
  {
    providerSlug: 'cigna-global',
    personaSlug: 'entrepreneurs',
    rating: 'excellent',
    summary: 'Cigna Global is excellent for entrepreneurs, offering executive-level coverage, multi-country flexibility, and options to cover small teams.',
    benefits: [
      'Executive health plan options',
      'Small group plans available (2+ people)',
      'Multi-country coverage for business travel',
      'High coverage limits suitable for high earners'
    ],
    drawbacks: [
      'Premium pricing reflects executive positioning',
      'Group plans require minimum participation',
      'Complex to administer for very small teams'
    ],
    recommendedPlan: 'Platinum or Executive',
    estimatedCost: '$300-500/month'
  },

  // =====================
  // ALLIANZ CARE
  // =====================
  {
    providerSlug: 'allianz-care',
    personaSlug: 'digital-nomads',
    rating: 'good',
    summary: 'Allianz Care offers good worldwide coverage with high-deductible options that can reduce costs for healthy nomads.',
    benefits: [
      'High-deductible plans significantly reduce premiums',
      'Worldwide coverage from EU-based insurer',
      'Good hospital networks globally',
      'Flexible plan customization'
    ],
    drawbacks: [
      'Deductibles can be expensive if you do need care',
      'Less nomad-focused than SafetyWing',
      'Annual plans only'
    ],
    recommendedPlan: 'Essential with high deductible',
    estimatedCost: '$100-200/month (with high deductible)'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'retirees',
    rating: 'good',
    summary: 'Allianz Care accepts retirees up to age 74 with reasonable coverage, though Cigna or BUPA may offer better chronic condition management.',
    benefits: [
      'Accepts applicants up to age 74',
      'EU-based—good for European retirees',
      'Flexible deductible options',
      'Prescription coverage included'
    ],
    drawbacks: [
      'Pre-existing condition underwriting can be strict',
      'Premium increases with age',
      'Network may be weaker than Cigna in some regions'
    ],
    recommendedPlan: 'Comprehensive',
    estimatedCost: '$350-700/month (age 65+)'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'families',
    rating: 'good',
    summary: 'Allianz Care provides solid family coverage with maternity options, though families should compare against Cigna for pediatric networks.',
    benefits: [
      'Family plans with dependent coverage',
      'Maternity coverage available',
      'Wellness benefits for children',
      'Good EU hospital networks'
    ],
    drawbacks: [
      'Maternity waiting periods apply',
      'Pediatric networks vary by region',
      'Family premiums can add up'
    ],
    recommendedPlan: 'Comprehensive',
    estimatedCost: '$350-600/month (family of 4)'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'remote-workers',
    rating: 'excellent',
    summary: 'Allianz Care is excellent for remote workers, especially those in Europe, with visa-compliant coverage and good employer integration.',
    benefits: [
      'EU-based—ideal for European remote workers',
      'Widely accepted for visa applications',
      'High-deductible options for cost savings',
      'Good coverage certificates'
    ],
    drawbacks: [
      'US coverage is expensive add-on',
      'Deductibles can be confusing',
      'Customer service varies by region'
    ],
    recommendedPlan: 'Essential or Comprehensive',
    estimatedCost: '$120-220/month'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'students',
    rating: 'fair',
    summary: 'Allianz Care works for students but is more expensive than student-specific plans. High-deductible options can reduce costs.',
    benefits: [
      'Meets most university requirements',
      'Can choose high deductible to lower premium',
      'Good coverage in Europe'
    ],
    drawbacks: [
      'More expensive than student plans',
      'No student-specific pricing',
      'Deductibles may be hard on student budget if care needed'
    ],
    recommendedPlan: 'Essential with high deductible',
    estimatedCost: '$80-150/month'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'freelancers',
    rating: 'good',
    summary: 'Allianz Care is a good option for freelancers, with flexible deductible options to manage costs during variable income periods.',
    benefits: [
      'High-deductible plans for cost control',
      'Individual plans without employer',
      'EU-based insurer with good reputation',
      'Flexible plan options'
    ],
    drawbacks: [
      'Annual commitment required',
      'Customer service can be bureaucratic',
      'Claims process can be slower than US insurers'
    ],
    recommendedPlan: 'Essential with higher deductible',
    estimatedCost: '$100-200/month'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'seniors',
    rating: 'fair',
    summary: 'Allianz Care accepts seniors but premiums are high and underwriting can be strict. Consider BUPA for more flexible pre-existing condition coverage.',
    benefits: [
      'Accepts applicants up to age 74',
      'EU-based with European hospital networks',
      'Prescription coverage included'
    ],
    drawbacks: [
      'Strict pre-existing condition underwriting',
      'High premiums for seniors',
      'May be better options for 70+'
    ],
    recommendedPlan: 'Comprehensive',
    estimatedCost: '$500-1,000/month (age 70+)'
  },
  {
    providerSlug: 'allianz-care',
    personaSlug: 'entrepreneurs',
    rating: 'good',
    summary: 'Allianz Care works well for entrepreneurs, especially those operating in Europe with its strong EU networks.',
    benefits: [
      'Good for EU-based businesses',
      'Group plan options available',
      'Multi-country coverage',
      'High-deductible executive options'
    ],
    drawbacks: [
      'Less executive-focused than Cigna',
      'Group plans have minimum requirements',
      'US coverage is expensive'
    ],
    recommendedPlan: 'Comprehensive or Premium',
    estimatedCost: '$200-400/month'
  },

  // =====================
  // BUPA GLOBAL
  // =====================
  {
    providerSlug: 'bupa-global',
    personaSlug: 'digital-nomads',
    rating: 'fair',
    summary: 'BUPA Global offers premium coverage but is overkill for most digital nomads. The higher cost is hard to justify for healthy, mobile workers.',
    benefits: [
      'Excellent mental health coverage (important for isolated nomads)',
      'Premium service and support',
      'No lifetime limits'
    ],
    drawbacks: [
      'Premium pricing not suited to nomad budgets',
      'More coverage than most nomads need',
      'Better options exist for this demographic'
    ],
    recommendedPlan: 'Not recommended for most nomads',
    estimatedCost: '$250-450/month'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'retirees',
    rating: 'excellent',
    summary: 'BUPA Global is one of the best options for retirees, with the most flexible pre-existing condition policies and coverage up to age 85+.',
    benefits: [
      'Most flexible pre-existing condition coverage',
      'Accepts applicants at older ages than competitors',
      'Excellent chronic disease management',
      'Moratorium option for pre-existing conditions'
    ],
    drawbacks: [
      'Premium pricing—among the most expensive',
      'Can be slow to process claims',
      'May be more than needed for healthy retirees'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$500-1,000/month (age 65+)'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'families',
    rating: 'excellent',
    summary: 'BUPA Global excels for families with its comprehensive coverage, excellent maternity benefits, and strong mental health support for all ages.',
    benefits: [
      'Excellent maternity coverage',
      'Strong mental health benefits for children and adults',
      'Comprehensive pediatric care',
      'No lifetime limits'
    ],
    drawbacks: [
      'Highest family premiums',
      'Maternity waiting period applies',
      'May be overkill for healthy families'
    ],
    recommendedPlan: 'Gold',
    estimatedCost: '$500-900/month (family of 4)'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'remote-workers',
    rating: 'good',
    summary: 'BUPA Global works for remote workers but the premium pricing may not be justified unless you have specific health needs or value mental health coverage.',
    benefits: [
      'Excellent mental health coverage (good for remote work isolation)',
      'Visa-compliant for most countries',
      'Premium service and support'
    ],
    drawbacks: [
      'Higher cost than alternatives',
      'May be more than needed for healthy workers',
      'Better value options exist'
    ],
    recommendedPlan: 'Essential or Gold',
    estimatedCost: '$200-350/month'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'students',
    rating: 'not-recommended',
    summary: 'BUPA Global is not recommended for students due to premium pricing. Student-specific plans offer better value.',
    benefits: [
      'Excellent mental health coverage',
      'Comprehensive coverage if budget allows'
    ],
    drawbacks: [
      'Far too expensive for student budgets',
      'No student-specific pricing',
      'Much better value options exist'
    ],
    recommendedPlan: 'Not recommended',
    estimatedCost: '$200-350/month (too expensive for students)'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'freelancers',
    rating: 'fair',
    summary: 'BUPA Global offers premium coverage but is expensive for freelancers without employer subsidies. Consider if you have specific health needs.',
    benefits: [
      'Pre-existing condition flexibility',
      'Excellent mental health coverage',
      'Premium service'
    ],
    drawbacks: [
      'High cost without employer contribution',
      'May be overkill for healthy freelancers',
      'Better value options for budget-conscious'
    ],
    recommendedPlan: 'Essential',
    estimatedCost: '$200-400/month'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'seniors',
    rating: 'excellent',
    summary: 'BUPA Global is the best option for many seniors, with the most flexible underwriting for pre-existing conditions and no strict age limits.',
    benefits: [
      'Best pre-existing condition policies',
      'Accepts older applicants than most competitors',
      'Moratorium option available',
      'Excellent chronic condition management'
    ],
    drawbacks: [
      'Highest premiums in the market',
      'Can be very expensive for 75+',
      'Claims processing can be slow'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$700-1,500/month (age 70+)'
  },
  {
    providerSlug: 'bupa-global',
    personaSlug: 'entrepreneurs',
    rating: 'good',
    summary: 'BUPA Global offers executive-level coverage suitable for entrepreneurs who want the best and can justify the premium cost.',
    benefits: [
      'Executive-level coverage and service',
      'Excellent mental health (good for stressed entrepreneurs)',
      'No lifetime limits',
      'Premium hospital networks'
    ],
    drawbacks: [
      'Highest premiums',
      'May be overkill for early-stage entrepreneurs',
      'Group plans have high minimums'
    ],
    recommendedPlan: 'Gold or Platinum',
    estimatedCost: '$350-600/month'
  },

  // =====================
  // IMG GLOBAL
  // =====================
  {
    providerSlug: 'img-global',
    personaSlug: 'digital-nomads',
    rating: 'excellent',
    summary: 'IMG Global offers excellent value for digital nomads, with affordable worldwide coverage and flexible plan options.',
    benefits: [
      'Affordable premiums for budget-conscious nomads',
      'Worldwide coverage options',
      'Monthly payment available on some plans',
      'Good for young, healthy travelers'
    ],
    drawbacks: [
      '12-month pre-existing condition exclusion',
      'Network is smaller than premium insurers',
      'Less comprehensive than Cigna/BUPA'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$80-150/month'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'retirees',
    rating: 'fair',
    summary: 'IMG Global can work for healthy retirees on a budget, but the 12-month pre-existing condition exclusion is problematic for most seniors.',
    benefits: [
      'More affordable than premium options',
      'Coverage available for older applicants',
      'Worldwide coverage'
    ],
    drawbacks: [
      '12-month pre-existing condition exclusion',
      'Less comprehensive chronic disease management',
      'May not be sufficient for complex health needs'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$200-400/month (age 65+)'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'families',
    rating: 'good',
    summary: 'IMG Global offers affordable family coverage, making it a good choice for budget-conscious families with healthy members.',
    benefits: [
      'Affordable family premiums',
      'Dependent coverage available',
      'Worldwide coverage'
    ],
    drawbacks: [
      'Maternity coverage limited or excluded',
      'Pre-existing exclusions apply to all family members',
      'Smaller network than premium options'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$250-400/month (family of 4)'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'remote-workers',
    rating: 'good',
    summary: 'IMG Global is a solid budget option for remote workers, with visa-compliant coverage at lower premiums than premium insurers.',
    benefits: [
      'Affordable for self-funded remote workers',
      'Meets most visa requirements',
      'Worldwide coverage options'
    ],
    drawbacks: [
      'Pre-existing condition exclusion for 12 months',
      'Less comprehensive than premium options',
      'Smaller provider network'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$80-150/month'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'students',
    rating: 'good',
    summary: 'IMG Global offers affordable options that can work for students, especially those studying in countries where IMG has good networks.',
    benefits: [
      'Affordable student-friendly pricing',
      'Worldwide coverage for study and travel',
      'Meets many university requirements'
    ],
    drawbacks: [
      'Check if your university specifically requires other coverage',
      'Pre-existing conditions excluded for 12 months',
      'May not include all student-specific benefits'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$60-120/month'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'freelancers',
    rating: 'excellent',
    summary: 'IMG Global is excellent for freelancers, offering affordable coverage without employer requirements and flexible payment options.',
    benefits: [
      'Affordable without employer subsidy',
      'Individual plans readily available',
      'Lower premiums for budget management',
      'Worldwide coverage'
    ],
    drawbacks: [
      '12-month pre-existing condition wait',
      'Less comprehensive than premium options',
      'Network limitations in some regions'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$80-150/month'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'seniors',
    rating: 'fair',
    summary: 'IMG Global is not ideal for most seniors due to pre-existing condition exclusions and less comprehensive chronic care coverage.',
    benefits: [
      'More affordable than premium options',
      'Coverage available for older ages'
    ],
    drawbacks: [
      '12-month pre-existing exclusion is problematic for seniors',
      'Less comprehensive than BUPA or Cigna for chronic conditions',
      'May leave gaps in coverage for age-related needs'
    ],
    recommendedPlan: 'Consider BUPA or Cigna instead',
    estimatedCost: '$250-500/month (age 70+)'
  },
  {
    providerSlug: 'img-global',
    personaSlug: 'entrepreneurs',
    rating: 'good',
    summary: 'IMG Global is good for early-stage entrepreneurs watching costs, but consider upgrading as your business grows.',
    benefits: [
      'Affordable for bootstrapped entrepreneurs',
      'Individual plans without employer requirements',
      'Worldwide coverage for business travel'
    ],
    drawbacks: [
      'Less executive-level service',
      'Pre-existing condition limitations',
      'May want to upgrade as business succeeds'
    ],
    recommendedPlan: 'Global Medical Insurance',
    estimatedCost: '$100-200/month'
  },

  // =====================
  // SAFETYWING
  // =====================
  {
    providerSlug: 'safetywing',
    personaSlug: 'digital-nomads',
    rating: 'excellent',
    summary: 'SafetyWing is designed specifically for digital nomads with affordable monthly pricing and no long-term commitment required.',
    benefits: [
      'Built specifically for nomads',
      'Affordable monthly subscription ($45-85)',
      'No annual commitment—start/stop anytime',
      'Covers travel between countries automatically'
    ],
    drawbacks: [
      'Not true comprehensive health insurance',
      'Coverage limits are lower than full health plans',
      'May not meet visa requirements for some countries',
      'Pre-existing conditions not covered'
    ],
    recommendedPlan: 'Nomad Insurance',
    estimatedCost: '$45-85/month'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'retirees',
    rating: 'not-recommended',
    summary: 'SafetyWing is not recommended for retirees. The coverage limits and exclusions make it unsuitable for age-related health needs.',
    benefits: [
      'Affordable monthly cost'
    ],
    drawbacks: [
      'Coverage limits too low for serious health issues',
      'Pre-existing conditions not covered',
      'Not designed for long-term healthcare needs',
      'Age limits may apply'
    ],
    recommendedPlan: 'Not recommended—consider Cigna or BUPA',
    estimatedCost: 'N/A'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'families',
    rating: 'fair',
    summary: 'SafetyWing offers family coverage at low cost, but the coverage limits may be insufficient for families with children who need routine care.',
    benefits: [
      'Very affordable family pricing',
      'Children under 10 covered free with parent',
      'Monthly flexibility',
      'Good for travel medical emergencies'
    ],
    drawbacks: [
      'Not comprehensive health insurance',
      'Limited preventive care coverage',
      'May not cover well-child visits',
      'Pre-existing conditions excluded'
    ],
    recommendedPlan: 'Nomad Insurance with family',
    estimatedCost: '$100-150/month (family)'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'remote-workers',
    rating: 'fair',
    summary: 'SafetyWing can work for short-term remote work stints but may not meet visa requirements or provide comprehensive coverage for longer stays.',
    benefits: [
      'Affordable and flexible',
      'Good for testing remote work lifestyle',
      'Monthly commitment only'
    ],
    drawbacks: [
      'May not satisfy visa insurance requirements',
      'Limited coverage compared to full health plans',
      'Not suitable for long-term remote work abroad'
    ],
    recommendedPlan: 'Nomad Insurance (short-term only)',
    estimatedCost: '$45-85/month'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'students',
    rating: 'fair',
    summary: 'SafetyWing can work for budget-conscious students but verify it meets your university requirements before purchasing.',
    benefits: [
      'Very affordable on student budget',
      'Monthly flexibility',
      'Good for study abroad travel'
    ],
    drawbacks: [
      'May not meet university insurance requirements',
      'Limited coverage for comprehensive health needs',
      'Pre-existing conditions not covered'
    ],
    recommendedPlan: 'Nomad Insurance (if university accepts it)',
    estimatedCost: '$45-70/month'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'freelancers',
    rating: 'good',
    summary: 'SafetyWing is a good starting point for freelancers, offering affordable coverage while you build your income.',
    benefits: [
      'Extremely affordable',
      'No annual commitment',
      'Start/stop as income fluctuates',
      'Good travel medical coverage'
    ],
    drawbacks: [
      'Not comprehensive health insurance',
      'May want to upgrade as income stabilizes',
      'Coverage limits may be insufficient for serious illness'
    ],
    recommendedPlan: 'Nomad Insurance',
    estimatedCost: '$45-85/month'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'seniors',
    rating: 'not-recommended',
    summary: 'SafetyWing is not appropriate for seniors. Age limits, coverage exclusions, and low limits make it unsuitable for older adults.',
    benefits: [
      'Affordable'
    ],
    drawbacks: [
      'Age limits apply (typically up to 69)',
      'Pre-existing conditions not covered',
      'Coverage limits far too low for senior health needs',
      'Not designed for healthcare management'
    ],
    recommendedPlan: 'Not recommended—use BUPA, Cigna, or Allianz',
    estimatedCost: 'N/A'
  },
  {
    providerSlug: 'safetywing',
    personaSlug: 'entrepreneurs',
    rating: 'fair',
    summary: 'SafetyWing can work for early-stage entrepreneurs watching every dollar, but plan to upgrade as your business grows.',
    benefits: [
      'Extremely affordable during bootstrap phase',
      'No commitment—pause when needed',
      'Remote Team product available for small teams'
    ],
    drawbacks: [
      'Not suitable for executive health needs',
      'Limited coverage for serious illness',
      'Should upgrade when financially able'
    ],
    recommendedPlan: 'Nomad Insurance or Remote Health',
    estimatedCost: '$45-150/month'
  }
];

// Helper functions
export function getProviderPersonaEntry(providerSlug: string, personaSlug: string): ProviderPersonaEntry | undefined {
  return providerPersonaMatrix.find(
    e => e.providerSlug === providerSlug && e.personaSlug === personaSlug
  );
}

export function getPersonasForProvider(providerSlug: string): ProviderPersonaEntry[] {
  return providerPersonaMatrix.filter(e => e.providerSlug === providerSlug);
}

export function getProvidersForPersona(personaSlug: string): ProviderPersonaEntry[] {
  return providerPersonaMatrix.filter(e => e.personaSlug === personaSlug);
}

export function getAllProviderPersonaPairs(): Array<{ providerSlug: string; personaSlug: string }> {
  return providerPersonaMatrix.map(e => ({
    providerSlug: e.providerSlug,
    personaSlug: e.personaSlug
  }));
}
