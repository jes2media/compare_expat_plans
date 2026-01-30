/**
 * conditions.ts
 *
 * Medical conditions data for programmatic condition × country pages.
 * These pages help expats with specific health conditions understand
 * how to manage their care and find appropriate insurance abroad.
 */

export interface Condition {
  /** Unique identifier (e.g., "diabetes") */
  slug: string;
  /** Display name (e.g., "Diabetes") */
  name: string;
  /** Full medical name if different */
  medicalName?: string;
  /** Brief description for meta/intro */
  description: string;
  /** Type of condition */
  type: 'chronic' | 'mental-health' | 'acute' | 'preventive';
  /** How common this is among expats */
  prevalence: 'very-common' | 'common' | 'moderate' | 'less-common';
  /** Key concerns for expats with this condition */
  expatConcerns: string[];
  /** What to look for in insurance */
  insuranceConsiderations: string[];
  /** General management requirements */
  managementNeeds: string[];
}

export const conditions: Condition[] = [
  {
    slug: 'diabetes',
    name: 'Diabetes',
    medicalName: 'Diabetes Mellitus (Type 1 & Type 2)',
    description: 'A chronic condition affecting blood sugar regulation requiring ongoing medication, monitoring, and specialist care.',
    type: 'chronic',
    prevalence: 'very-common',
    expatConcerns: [
      'Access to insulin and diabetes medications',
      'Blood glucose monitoring supplies',
      'Finding endocrinologists who speak English',
      'Managing diet in a new food culture',
      'Emergency care for hypo/hyperglycemia'
    ],
    insuranceConsiderations: [
      'Pre-existing condition coverage or exclusions',
      'Prescription medication coverage limits',
      'Coverage for insulin pumps and CGM devices',
      'Diabetic supplies (test strips, needles)',
      'Specialist visit coverage'
    ],
    managementNeeds: [
      'Regular endocrinologist visits (2-4x per year)',
      'Daily blood glucose monitoring',
      'Consistent medication supply',
      'A1C testing every 3-6 months',
      'Annual eye and foot exams'
    ]
  },
  {
    slug: 'hypertension',
    name: 'High Blood Pressure',
    medicalName: 'Hypertension',
    description: 'A common cardiovascular condition requiring daily medication and regular monitoring to prevent complications.',
    type: 'chronic',
    prevalence: 'very-common',
    expatConcerns: [
      'Consistent access to blood pressure medications',
      'Finding equivalent medications abroad',
      'Regular blood pressure monitoring',
      'Managing stress during relocation',
      'Altitude considerations for some destinations'
    ],
    insuranceConsiderations: [
      'Cardiovascular pre-existing condition coverage',
      'Generic vs brand medication coverage',
      'Cardiologist access',
      'Emergency coverage for cardiac events',
      'Health screening coverage'
    ],
    managementNeeds: [
      'Daily medication',
      'Regular blood pressure monitoring',
      'Annual or semi-annual doctor visits',
      'Periodic blood tests',
      'Lifestyle management (diet, exercise, stress)'
    ]
  },
  {
    slug: 'asthma',
    name: 'Asthma',
    medicalName: 'Bronchial Asthma',
    description: 'A respiratory condition causing airway inflammation, requiring inhalers and potentially specialist care.',
    type: 'chronic',
    prevalence: 'common',
    expatConcerns: [
      'Air quality in destination country',
      'Access to rescue and maintenance inhalers',
      'Finding pulmonologists',
      'New environmental triggers',
      'Emergency care for severe attacks'
    ],
    insuranceConsiderations: [
      'Respiratory condition coverage',
      'Inhaler and nebulizer coverage',
      'Emergency room coverage',
      'Pulmonologist visits',
      'Allergy testing coverage'
    ],
    managementNeeds: [
      'Daily maintenance inhaler (for many)',
      'Rescue inhaler always available',
      'Peak flow monitoring',
      'Trigger identification and avoidance',
      'Annual pulmonologist review'
    ]
  },
  {
    slug: 'depression-anxiety',
    name: 'Depression & Anxiety',
    medicalName: 'Major Depressive Disorder / Generalized Anxiety Disorder',
    description: 'Common mental health conditions requiring therapy, medication, or both, with unique challenges abroad.',
    type: 'mental-health',
    prevalence: 'very-common',
    expatConcerns: [
      'Finding English-speaking therapists',
      'Cultural attitudes toward mental health',
      'Medication availability and equivalents',
      'Isolation and adjustment challenges',
      'Crisis support in emergencies'
    ],
    insuranceConsiderations: [
      'Mental health coverage limits (often capped)',
      'Therapy session limits per year',
      'Psychiatric medication coverage',
      'Inpatient psychiatric coverage',
      'Telehealth therapy coverage'
    ],
    managementNeeds: [
      'Regular therapy (weekly/biweekly)',
      'Psychiatric medication management',
      'Crisis resources',
      'Social support network',
      'Self-care routines'
    ]
  },
  {
    slug: 'heart-disease',
    name: 'Heart Disease',
    medicalName: 'Cardiovascular Disease / Coronary Artery Disease',
    description: 'Serious cardiovascular conditions requiring ongoing specialist care, medication, and potentially procedures.',
    type: 'chronic',
    prevalence: 'common',
    expatConcerns: [
      'Access to cardiologists and cardiac care',
      'Emergency response for cardiac events',
      'Medication consistency',
      'Medical evacuation considerations',
      'Activity at altitude or in heat'
    ],
    insuranceConsiderations: [
      'Cardiac pre-existing condition coverage',
      'Procedure and surgery coverage',
      'Cardiac rehabilitation',
      'Medical evacuation for cardiac emergencies',
      'Specialist network access'
    ],
    managementNeeds: [
      'Regular cardiologist visits',
      'Cardiac medication regime',
      'Regular testing (ECG, stress tests)',
      'Lifestyle management',
      'Emergency action plan'
    ]
  },
  {
    slug: 'thyroid-disorders',
    name: 'Thyroid Disorders',
    medicalName: 'Hypothyroidism / Hyperthyroidism',
    description: 'Conditions affecting thyroid function, typically well-managed with daily medication and periodic testing.',
    type: 'chronic',
    prevalence: 'common',
    expatConcerns: [
      'Consistent levothyroxine or other medication',
      'Brand vs generic medication differences',
      'Finding endocrinologists',
      'Regular TSH testing',
      'Medication storage in hot climates'
    ],
    insuranceConsiderations: [
      'Endocrine condition coverage',
      'Hormone medication coverage',
      'Lab work coverage',
      'Specialist visits',
      'Generally easier to cover than many conditions'
    ],
    managementNeeds: [
      'Daily medication',
      'TSH testing every 6-12 months',
      'Annual endocrinologist review',
      'Consistent medication timing',
      'Symptom monitoring'
    ]
  },
  {
    slug: 'arthritis',
    name: 'Arthritis',
    medicalName: 'Rheumatoid Arthritis / Osteoarthritis',
    description: 'Joint conditions causing pain and mobility issues, with treatment ranging from OTC medications to biologics.',
    type: 'chronic',
    prevalence: 'common',
    expatConcerns: [
      'Access to rheumatologists',
      'Biologic medication availability (if needed)',
      'Physical therapy access',
      'Climate effects on symptoms',
      'Mobility in new environments'
    ],
    insuranceConsiderations: [
      'Biologic medication coverage (very expensive)',
      'Rheumatologist network',
      'Physical therapy coverage',
      'Joint replacement surgery coverage',
      'Infusion center access'
    ],
    managementNeeds: [
      'Regular rheumatologist visits',
      'Medication (NSAIDs to biologics)',
      'Physical therapy',
      'Joint protection strategies',
      'Regular monitoring for complications'
    ]
  },
  {
    slug: 'cancer-survivor',
    name: 'Cancer (In Remission)',
    medicalName: 'Cancer Survivorship',
    description: 'Post-cancer care requires ongoing surveillance, potential follow-up treatments, and careful insurance planning.',
    type: 'chronic',
    prevalence: 'moderate',
    expatConcerns: [
      'Access to oncologists for surveillance',
      'Imaging and testing availability',
      'Emergency care if recurrence',
      'Medical records transfer',
      'Insurance acceptance post-cancer'
    ],
    insuranceConsiderations: [
      'Cancer history and underwriting',
      'Surveillance scan coverage',
      'Oncologist access',
      'Potential recurrence coverage',
      'Medical evacuation for cancer care'
    ],
    managementNeeds: [
      'Regular surveillance scans',
      'Oncologist follow-up visits',
      'Blood work monitoring',
      'Awareness of recurrence symptoms',
      'Survivorship care plan'
    ]
  },
  {
    slug: 'allergies',
    name: 'Severe Allergies',
    medicalName: 'Anaphylaxis Risk / Severe Allergic Conditions',
    description: 'Life-threatening allergies requiring emergency preparedness, medication access, and careful food/environment management.',
    type: 'chronic',
    prevalence: 'moderate',
    expatConcerns: [
      'EpiPen availability and cost',
      'Food labeling in local language',
      'Communicating allergies to restaurants',
      'Emergency response quality',
      'New environmental allergens'
    ],
    insuranceConsiderations: [
      'Emergency care coverage',
      'EpiPen/epinephrine coverage',
      'Allergist access',
      'Anaphylaxis treatment',
      'Travel emergency coverage'
    ],
    managementNeeds: [
      'Always carry epinephrine auto-injector',
      'Medical ID bracelet/card',
      'Allergen avoidance strategies',
      'Emergency action plan',
      'Regular allergist review'
    ]
  },
  {
    slug: 'kidney-disease',
    name: 'Kidney Disease',
    medicalName: 'Chronic Kidney Disease (CKD)',
    description: 'Progressive kidney condition requiring specialist monitoring and potentially dialysis access.',
    type: 'chronic',
    prevalence: 'less-common',
    expatConcerns: [
      'Nephrologist availability',
      'Dialysis center access (if needed)',
      'Lab monitoring availability',
      'Medication management',
      'Medical evacuation if condition worsens'
    ],
    insuranceConsiderations: [
      'Kidney disease coverage',
      'Dialysis coverage (extremely expensive)',
      'Nephrologist access',
      'Lab work coverage',
      'Transplant coverage if applicable'
    ],
    managementNeeds: [
      'Regular nephrologist visits',
      'Frequent lab monitoring',
      'Dietary management',
      'Blood pressure control',
      'Dialysis (if stage 5)'
    ]
  }
];

// Helper functions
export function getConditionBySlug(slug: string): Condition | undefined {
  return conditions.find(c => c.slug === slug);
}

export function getAllConditionSlugs(): string[] {
  return conditions.map(c => c.slug);
}

export function getConditionsByType(type: Condition['type']): Condition[] {
  return conditions.filter(c => c.type === type);
}

export function getCommonConditions(): Condition[] {
  return conditions.filter(c => c.prevalence === 'very-common' || c.prevalence === 'common');
}
