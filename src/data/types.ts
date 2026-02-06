/**
 * types.ts
 *
 * Shared type definitions for the data layer.
 * These types are used by countries, providers, and the CountryInsuranceHub template.
 */

// =====================
// PROVIDER TYPES
// =====================

export interface Provider {
  /** Unique identifier (e.g., "cigna-global") */
  slug: string;
  /** Display name (e.g., "Cigna Global") */
  name: string;
  /** Short tagline for cards */
  tagline: string;
  /** Provider type */
  type: 'international' | 'local' | 'public';
  /** Coverage style for comparison tables */
  coverageStyle: string;
  /** Whether US coverage is included */
  includesUS: boolean;
  /** Common notable limits/caveats */
  notableLimits: string;
  /** Link to provider page */
  href: string;
  /** Logo image path (optional) */
  logo?: string;
  /** External URL for "Get a Quote" redirects */
  externalUrl?: string;
}

// =====================
// COUNTRY TYPES
// =====================

export interface PublicHealthcare {
  /** Name of the public system (e.g., "SNS", "IMSS") */
  name: string;
  /** Who can access it */
  access: string;
  /** Cost description */
  cost: string;
  /** Additional notes */
  notes: string;
}

export interface PrivateHealthcare {
  /** Cost range description */
  cost: string;
  /** Additional notes */
  notes: string;
}

export interface Country {
  /** Unique identifier (e.g., "spain") */
  slug: string;
  /** Display name (e.g., "Spain") */
  name: string;
  /** Demonym (e.g., "Spanish") */
  demonym: string;
  /** Last content update date */
  lastUpdated: string;
  /** Hero background image path */
  heroImage: string;

  // Meta
  metaTitle: string;
  metaDescription: string;

  // Hero section
  headline: string;
  subheadline: string;

  // Quick summary (4-6 bullets)
  summaryBullets: string[];

  // Insurance requirements
  insuranceRequired: boolean;
  requirementExplanation: string;
  whoNeedsInsurance: string[];

  // Healthcare comparison
  publicHealthcare: PublicHealthcare;
  privateHealthcare: PrivateHealthcare;

  // Watch-outs (5-8 bullets)
  watchOuts: string[];

  // FAQs (5-8)
  faqs: FAQItem[];

  // Sidebar related links
  sidebarLinks: SidebarLink[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SidebarLink {
  title: string;
  href: string;
}

// =====================
// COUNTRY-PROVIDER MATRIX TYPES
// =====================

export interface ProviderInCountry {
  /** Provider slug reference */
  providerSlug: string;
  /** What this provider is best for in this country context */
  bestFor: string;
  /** Who this provider is not ideal for in this country context */
  notIdealFor: string;
  /** Country-specific page link (if different from provider.href) */
  countryPageHref?: string;
  /** Override notableLimits for this country (optional) */
  notableLimitsOverride?: string;
}

export interface CountryProviderEntry {
  /** Country slug */
  countrySlug: string;
  /** Providers available/recommended in this country */
  providers: ProviderInCountry[];
}

// =====================
// TEMPLATE TYPES (derived from above)
// =====================

/** Provider card for display in Plan Options section */
export interface ProviderCard {
  name: string;
  bestFor: string;
  notIdealFor: string;
  href: string;
}

/** Row in the comparison table */
export interface ComparisonRow {
  provider: string;
  bestFor: string;
  coverageStyle: string;
  includesUS: boolean;
  notableLimits: string;
  learnMoreHref: string;
}

/** Related resource card */
export interface RelatedCard {
  title: string;
  description: string;
  href: string;
  image?: string;
}
