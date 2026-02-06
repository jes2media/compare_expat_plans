/**
 * providers.ts
 *
 * Master list of insurance providers.
 * These are the canonical provider definitions used across the site.
 */

import type { Provider } from './types';

export const providers: Provider[] = [
  // =====================
  // INTERNATIONAL PROVIDERS
  // =====================
  {
    slug: 'cigna-global',
    name: 'Cigna Global',
    tagline: 'Worldwide coverage with strong US network',
    type: 'international',
    coverageStyle: 'International comprehensive',
    includesUS: true,
    notableLimits: 'Higher cost than local options',
    href: '/providers/cigna-global',
    logo: '/images/providers/cigna-global.png',
    externalUrl: 'https://www.cignaglobal.com',
  },
  {
    slug: 'allianz-care',
    name: 'Allianz Care',
    tagline: 'EU-based with high-deductible savings',
    type: 'international',
    coverageStyle: 'International comprehensive',
    includesUS: true,
    notableLimits: 'Deductibles apply to savings',
    href: '/providers/allianz-care',
    logo: '/images/providers/allianz-care.png',
    externalUrl: 'https://www.allianzcare.com',
  },
  {
    slug: 'bupa-global',
    name: 'BUPA Global',
    tagline: 'Premium coverage with mental health focus',
    type: 'international',
    coverageStyle: 'International premium',
    includesUS: true,
    notableLimits: 'Premium pricing',
    href: '/providers/bupa-global',
    logo: '/images/providers/bupa-global.png',
    externalUrl: 'https://www.bupaglobal.com',
  },
  {
    slug: 'img-global',
    name: 'IMG Global',
    tagline: 'Budget international coverage',
    type: 'international',
    coverageStyle: 'International standard',
    includesUS: false,
    notableLimits: '12-month pre-existing exclusion',
    href: '/providers/img-global',
    logo: '/images/providers/img-global.png',
    externalUrl: 'https://www.imglobal.com',
  },
  {
    slug: 'axa-global',
    name: 'AXA Global Healthcare',
    tagline: 'Global coverage from French insurer',
    type: 'international',
    coverageStyle: 'International comprehensive',
    includesUS: true,
    notableLimits: 'Variable networks by region',
    href: '/providers/axa-global',
    logo: '/images/providers/axa-global.png',
    externalUrl: 'https://www.axaglobalhealthcare.com',
  },
  {
    slug: 'safetywing',
    name: 'SafetyWing',
    tagline: 'Affordable nomad insurance',
    type: 'international',
    coverageStyle: 'Travel medical / nomad',
    includesUS: false,
    notableLimits: 'Not true health insurance; limited coverage',
    href: '/providers/safetywing',
    logo: '/images/providers/safetywing.png',
    externalUrl: 'https://safetywing.com',
  },
  {
    slug: 'aetna-international',
    name: 'Aetna International',
    tagline: 'Strong US network for American expats',
    type: 'international',
    coverageStyle: 'International comprehensive',
    includesUS: true,
    notableLimits: 'Best value with US coverage needs',
    href: '/providers/aetna-international',
    logo: '/images/providers/aetna-international.png',
    externalUrl: 'https://www.aetnainternational.com',
  },
  {
    slug: 'geoblue',
    name: 'GeoBlue',
    tagline: 'Blue Cross Blue Shield for expats',
    type: 'international',
    coverageStyle: 'International comprehensive',
    includesUS: true,
    notableLimits: 'US-focused; limited outside Americas',
    href: '/providers/geoblue',
    logo: '/images/providers/geoblue.png',
    externalUrl: 'https://www.geobluetravelinsurance.com',
  },
  {
    slug: 'world-nomads',
    name: 'World Nomads',
    tagline: 'Travel insurance for adventurers',
    type: 'international',
    coverageStyle: 'Travel medical',
    includesUS: false,
    notableLimits: 'Trip-based, not annual; limited medical',
    href: '/providers/world-nomads',
    logo: '/images/providers/world-nomads.png',
  },
  {
    slug: 'now-health',
    name: 'Now Health International',
    tagline: 'Flexible modular plans',
    type: 'international',
    coverageStyle: 'International modular',
    includesUS: true,
    notableLimits: 'Core plan is limited; add-ons increase cost',
    href: '/providers/now-health',
    logo: '/images/providers/now-health.png',
  },

  // =====================
  // LOCAL/REGIONAL PROVIDERS (Spain)
  // =====================
  {
    slug: 'sanitas',
    name: 'Sanitas',
    tagline: 'Spain\'s leading private insurer',
    type: 'local',
    coverageStyle: 'Spain-only private',
    includesUS: false,
    notableLimits: 'No coverage outside Spain',
    href: '/providers/sanitas',
    logo: '/images/providers/sanitas.png',
  },
  {
    slug: 'asssa',
    name: 'ASSSA',
    tagline: 'Budget Spanish health insurance',
    type: 'local',
    coverageStyle: 'Spain-only private',
    includesUS: false,
    notableLimits: 'Limited international coverage',
    href: '/providers/asssa',
    logo: '/images/providers/asssa.png',
  },

  // =====================
  // LOCAL/REGIONAL PROVIDERS (Mexico)
  // =====================
  {
    slug: 'gnp-seguros',
    name: 'GNP Seguros',
    tagline: 'Top Mexican private insurer',
    type: 'local',
    coverageStyle: 'Mexico private',
    includesUS: false,
    notableLimits: '2-year residency for full coverage',
    href: '/providers/gnp-seguros',
    logo: '/images/providers/gnp-seguros.png',
  },
  {
    slug: 'imss',
    name: 'IMSS',
    tagline: 'Mexico public healthcare',
    type: 'public',
    coverageStyle: 'Public comprehensive',
    includesUS: false,
    notableLimits: 'Spanish only, no evacuation',
    href: '/providers/imss',
    logo: '/images/providers/imss.png',
  },
];

// Helper functions
export function getProviderBySlug(slug: string): Provider | undefined {
  return providers.find(p => p.slug === slug);
}

export function getProvidersByType(type: Provider['type']): Provider[] {
  return providers.filter(p => p.type === type);
}

export function getInternationalProviders(): Provider[] {
  return getProvidersByType('international');
}

export function getLocalProviders(): Provider[] {
  return getProvidersByType('local');
}

export function getAllProviderSlugs(): string[] {
  return providers.map(p => p.slug);
}
