/**
 * Bulk generation script for country pages.
 *
 * Usage: npx tsx scripts/bulk-generate/generate.ts
 *
 * This generates templated content for all countries in countryMetadata.ts
 * and writes to src/data/countries.ts and src/data/countryProviderMatrix.ts
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { newCountries, type CountryMeta } from './countryMetadata';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '../../');
const DATA_DIR = join(ROOT, 'src/data');

// =====================
// CONTENT TEMPLATES
// =====================

function generateSummaryBullets(c: CountryMeta): string[] {
  const bullets: string[] = [];

  if (c.insuranceRequired) {
    bullets.push(`Health insurance is required for most visa types in ${c.name}.`);
  } else {
    bullets.push(`${c.name} does not require health insurance for most visas, but coverage is recommended.`);
  }

  bullets.push(`The public healthcare system (${c.publicSystemName}) is available to residents${c.region === 'europe' ? ' and may be accessible to EU citizens' : ''}.`);
  bullets.push(`International health insurance typically costs ${c.insuranceCostRange}.`);
  bullets.push(`Private healthcare offers faster access and English-speaking staff in major cities.`);

  if (c.visaTypes.length > 0) {
    bullets.push(`Popular visa options include: ${c.visaTypes.slice(0, 2).join(', ')}.`);
  }

  return bullets;
}

function generateRequirementExplanation(c: CountryMeta): string {
  if (c.insuranceRequired) {
    return `${c.name} requires proof of health insurance for most visa and residency applications. Coverage requirements vary by visa type, but international health insurance that meets ${c.demonym} standards is generally accepted. Check specific requirements for your visa category.`;
  }
  return `${c.name} does not mandate health insurance for most visa types. However, private coverage is strongly recommended as it provides access to quality healthcare without long wait times. Expats from countries without reciprocal healthcare agreements should definitely get coverage.`;
}

function generateWhoNeedsInsurance(c: CountryMeta): string[] {
  const needs: string[] = [];

  if (c.insuranceRequired) {
    needs.push(`All visa applicants—insurance is typically required`);
  }

  needs.push(`Expats wanting faster access to healthcare`);
  needs.push(`Those preferring English-speaking medical staff`);
  needs.push(`Anyone with pre-existing conditions`);
  needs.push(`Digital nomads and remote workers`);

  if (c.region === 'americas' || c.region === 'asia') {
    needs.push(`US/Canadian citizens (home coverage doesn't work abroad)`);
  }

  return needs.slice(0, 5);
}

function generateWatchOuts(c: CountryMeta): string[] {
  const watchOuts: string[] = [];

  if (c.insuranceRequired) {
    watchOuts.push(`Insurance is required for visa applications—verify your policy meets requirements.`);
  }

  watchOuts.push(`Pre-existing conditions may have waiting periods (typically 6-24 months).`);
  watchOuts.push(`Check if your plan covers the specific ${c.demonym} regions you'll live in.`);
  watchOuts.push(`Age limits may apply—some insurers won't cover new applicants over 65-75.`);
  watchOuts.push(`Medical evacuation coverage is important if quality care requires travel to another country.`);

  if (c.region === 'americas') {
    watchOuts.push(`US Medicare does NOT cover healthcare in ${c.name}.`);
  }

  if (c.notes) {
    watchOuts.push(c.notes);
  }

  return watchOuts.slice(0, 6);
}

function generateFAQs(c: CountryMeta): { question: string; answer: string }[] {
  const faqs = [
    {
      question: `Do I need health insurance for a ${c.name} visa?`,
      answer: c.insuranceRequired
        ? `Yes. Most ${c.demonym} visa types require proof of health insurance. Requirements vary by visa category, so verify specific coverage amounts and policy requirements before applying.`
        : `No. ${c.name} does not require health insurance for most visa types. However, coverage is strongly recommended as it provides access to quality healthcare and protects against unexpected medical costs.`,
    },
    {
      question: `How does ${c.demonym} public healthcare work?`,
      answer: `${c.name}'s public healthcare system (${c.publicSystemName}) provides coverage to citizens and legal residents. Access and quality vary by location. Most expats supplement with private insurance for faster care and English-speaking staff.`,
    },
    {
      question: `How much does health insurance cost in ${c.name}?`,
      answer: `International health insurance typically costs ${c.insuranceCostRange} depending on your age and coverage level. Local/public options cost ${c.publicCostRange} but may have limitations for non-citizens.`,
    },
    {
      question: `What's the best health insurance for expats in ${c.name}?`,
      answer: `The best option depends on your situation. Cigna Global and Allianz Care are popular for comprehensive international coverage. Budget-conscious expats may prefer IMG Global or local options if they plan to stay long-term.`,
    },
    {
      question: `Are pre-existing conditions covered in ${c.name}?`,
      answer: `Most insurers have waiting periods (6-24 months) for pre-existing conditions. Some plans offer coverage after the waiting period; others may exclude specific conditions. BUPA Global is known for more flexible pre-existing condition policies.`,
    },
  ];

  return faqs;
}

function generateSidebarLinks(c: CountryMeta): { title: string; href: string }[] {
  return [
    { title: `Cigna Global in ${c.name}`, href: `/countries/${c.slug}/insurance/cigna-global` },
    { title: `Allianz Care in ${c.name}`, href: `/countries/${c.slug}/insurance/allianz-care` },
    { title: 'Insurance for Digital Nomads', href: '/insurance-for/digital-nomads' },
    { title: 'Insurance for Retirees', href: '/insurance-for/retirees' },
    { title: 'Best Expat Health Insurance', href: '/best/expat-health-insurance' },
  ];
}

// =====================
// GENERATE COUNTRY DATA
// =====================

function generateCountryData(c: CountryMeta): string {
  const data = {
    slug: c.slug,
    name: c.name,
    demonym: c.demonym,
    lastUpdated: new Date().toISOString().split('T')[0],
    heroImage: `/images/countries/${c.slug}-hero-bg.png`,

    metaTitle: `Health Insurance for Expats in ${c.name} (2025 Guide)`,
    metaDescription: `Complete guide to expat health insurance in ${c.name}. ${c.insuranceRequired ? 'Visa requirements, ' : ''}public vs private options, provider comparison, and costs.`,

    headline: `${c.name} Expat Health Insurance`,
    subheadline: `Find the right coverage for living in ${c.name}—understanding the ${c.publicSystemName} system and international insurance options.`,

    summaryBullets: generateSummaryBullets(c),

    insuranceRequired: c.insuranceRequired,
    requirementExplanation: generateRequirementExplanation(c),
    whoNeedsInsurance: generateWhoNeedsInsurance(c),

    publicHealthcare: {
      name: c.publicSystemName,
      access: `${c.demonym} citizens, legal residents${c.region === 'europe' ? ', EU citizens with EHIC' : ''}`,
      cost: c.publicCostRange,
      notes: `Quality and access vary by location. Wait times may exist for specialists. ${c.notes || ''}`.trim(),
    },

    privateHealthcare: {
      cost: c.insuranceCostRange,
      notes: 'International plans offer worldwide coverage, English support, and direct billing at major hospitals.',
    },

    watchOuts: generateWatchOuts(c),
    faqs: generateFAQs(c),
    sidebarLinks: generateSidebarLinks(c),
  };

  // Keep double quotes for strings to avoid apostrophe issues
  return JSON.stringify(data, null, 2)
    .replace(/"([^"]+)":/g, '$1:');  // Remove quotes from keys only
}

// =====================
// GENERATE PROVIDER MATRIX
// =====================

function generateProviderMatrix(c: CountryMeta): string {
  // Standard provider set - adjust based on region
  const providers = [
    {
      providerSlug: 'cigna-global',
      bestFor: 'Worldwide coverage and strong customer service',
      notIdealFor: 'Budget-focused expats staying only in ' + c.name,
      countryPageHref: `/countries/${c.slug}/insurance/cigna-global`,
    },
    {
      providerSlug: 'allianz-care',
      bestFor: 'High-deductible savings and EU-based service',
      notIdealFor: 'Those wanting minimal out-of-pocket costs',
      countryPageHref: `/countries/${c.slug}/insurance/allianz-care`,
    },
    {
      providerSlug: 'bupa-global',
      bestFor: 'Pre-existing conditions and mental health coverage',
      notIdealFor: 'Those seeking the lowest premiums',
      countryPageHref: `/countries/${c.slug}/insurance/bupa-global`,
    },
    {
      providerSlug: 'img-global',
      bestFor: 'Budget international coverage',
      notIdealFor: 'Those wanting premium service levels',
      countryPageHref: `/countries/${c.slug}/insurance/img-global`,
    },
  ];

  const entry = {
    countrySlug: c.slug,
    providers,
  };

  return JSON.stringify(entry, null, 2)
    .replace(/"([^"]+)":/g, '$1:');  // Remove quotes from keys only
}

// =====================
// MAIN
// =====================

function main() {
  console.log(`\nGenerating data for ${newCountries.length} countries...\n`);

  // Generate countries.ts content
  const countriesContent = `/**
 * countries.ts
 *
 * Auto-generated country data for programmatic pages.
 * Generated: ${new Date().toISOString()}
 * Total countries: ${newCountries.length}
 *
 * To regenerate: npx tsx scripts/bulk-generate/generate.ts
 */

import type { Country } from './types';

export const countries: Country[] = [
${newCountries.map(c => '  ' + generateCountryData(c).split('\n').join('\n  ')).join(',\n')}
];

// Helper functions
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map(c => c.slug);
}

export function getCountriesRequiringInsurance(): Country[] {
  return countries.filter(c => c.insuranceRequired);
}

export function getCountriesNotRequiringInsurance(): Country[] {
  return countries.filter(c => !c.insuranceRequired);
}
`;

  // Generate countryProviderMatrix.ts content
  const matrixContent = `/**
 * countryProviderMatrix.ts
 *
 * Auto-generated country-provider mappings.
 * Generated: ${new Date().toISOString()}
 * Total entries: ${newCountries.length}
 *
 * To regenerate: npx tsx scripts/bulk-generate/generate.ts
 */

import type { CountryProviderEntry, ProviderInCountry, ProviderCard, ComparisonRow } from './types';
import { getProviderBySlug } from './providers';

export const countryProviderMatrix: CountryProviderEntry[] = [
${newCountries.map(c => '  ' + generateProviderMatrix(c).split('\n').join('\n  ')).join(',\n')}
];

// Helper functions

export function getProvidersForCountry(countrySlug: string): ProviderInCountry[] {
  const entry = countryProviderMatrix.find(e => e.countrySlug === countrySlug);
  return entry?.providers || [];
}

export function buildProviderCards(countrySlug: string): ProviderCard[] {
  const countryProviders = getProvidersForCountry(countrySlug);

  return countryProviders.slice(0, 4).map(cp => {
    const provider = getProviderBySlug(cp.providerSlug);
    return {
      name: provider?.name || cp.providerSlug,
      bestFor: cp.bestFor,
      notIdealFor: cp.notIdealFor,
      href: cp.countryPageHref || provider?.href || '#',
    };
  });
}

export function buildComparisonRows(countrySlug: string): ComparisonRow[] {
  const countryProviders = getProvidersForCountry(countrySlug);

  return countryProviders.map(cp => {
    const provider = getProviderBySlug(cp.providerSlug);
    return {
      provider: provider?.name || cp.providerSlug,
      bestFor: cp.bestFor.split(' ').slice(0, 4).join(' '),
      coverageStyle: provider?.coverageStyle || 'Unknown',
      includesUS: provider?.includesUS || false,
      notableLimits: cp.notableLimitsOverride || provider?.notableLimits || 'None noted',
      learnMoreHref: cp.countryPageHref || provider?.href || '#',
    };
  });
}

export function getCountriesWithProvider(providerSlug: string): string[] {
  return countryProviderMatrix
    .filter(entry => entry.providers.some(p => p.providerSlug === providerSlug))
    .map(entry => entry.countrySlug);
}

export function getAllMatrixCountrySlugs(): string[] {
  return countryProviderMatrix.map(e => e.countrySlug);
}
`;

  // Write files
  writeFileSync(join(DATA_DIR, 'countries.ts'), countriesContent);
  console.log(`✓ Generated src/data/countries.ts (${newCountries.length} countries)`);

  writeFileSync(join(DATA_DIR, 'countryProviderMatrix.ts'), matrixContent);
  console.log(`✓ Generated src/data/countryProviderMatrix.ts (${newCountries.length} entries)`);

  console.log(`\n✅ Done! Run 'npm run build' to generate pages.\n`);

  // Print summary by region
  const byRegion = newCountries.reduce((acc, c) => {
    acc[c.region] = (acc[c.region] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  console.log('Countries by region:');
  Object.entries(byRegion).sort((a, b) => b[1] - a[1]).forEach(([region, count]) => {
    console.log(`  ${region}: ${count}`);
  });
}

main();
