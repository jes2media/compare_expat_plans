/**
 * validate.ts
 *
 * Validation utilities for the data layer.
 * Use these to catch errors before build time.
 */

import { countries, getAllCountrySlugs } from './countries';
import { providers, getAllProviderSlugs } from './providers';
import { countryProviderMatrix, getAllMatrixCountrySlugs } from './countryProviderMatrix';
import type { Country, Provider, CountryProviderEntry } from './types';

export interface ValidationError {
  type: 'error' | 'warning';
  category: 'country' | 'provider' | 'matrix' | 'reference';
  message: string;
  details?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
  stats: {
    countriesCount: number;
    providersCount: number;
    matrixEntriesCount: number;
    orphanedCountries: string[];
    orphanedProviders: string[];
  };
}

/**
 * Validate a single country
 */
function validateCountry(country: Country): ValidationError[] {
  const errors: ValidationError[] = [];

  // Required fields
  if (!country.slug || country.slug.trim() === '') {
    errors.push({ type: 'error', category: 'country', message: `Country missing slug` });
  }
  if (!country.name || country.name.trim() === '') {
    errors.push({ type: 'error', category: 'country', message: `Country ${country.slug} missing name` });
  }
  if (!country.metaTitle) {
    errors.push({ type: 'warning', category: 'country', message: `Country ${country.slug} missing metaTitle` });
  }
  if (!country.metaDescription) {
    errors.push({ type: 'warning', category: 'country', message: `Country ${country.slug} missing metaDescription` });
  }

  // Content quality checks
  if (country.summaryBullets.length < 3) {
    errors.push({ type: 'warning', category: 'country', message: `Country ${country.slug} has fewer than 3 summary bullets` });
  }
  if (country.faqs.length < 3) {
    errors.push({ type: 'warning', category: 'country', message: `Country ${country.slug} has fewer than 3 FAQs` });
  }
  if (country.watchOuts.length < 3) {
    errors.push({ type: 'warning', category: 'country', message: `Country ${country.slug} has fewer than 3 watch-outs` });
  }

  // Date format check
  if (country.lastUpdated && !/^\d{4}-\d{2}-\d{2}$/.test(country.lastUpdated)) {
    errors.push({ type: 'error', category: 'country', message: `Country ${country.slug} has invalid lastUpdated date format` });
  }

  return errors;
}

/**
 * Validate a single provider
 */
function validateProvider(provider: Provider): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!provider.slug || provider.slug.trim() === '') {
    errors.push({ type: 'error', category: 'provider', message: `Provider missing slug` });
  }
  if (!provider.name || provider.name.trim() === '') {
    errors.push({ type: 'error', category: 'provider', message: `Provider ${provider.slug} missing name` });
  }
  if (!provider.type) {
    errors.push({ type: 'error', category: 'provider', message: `Provider ${provider.slug} missing type` });
  }
  if (!provider.coverageStyle) {
    errors.push({ type: 'warning', category: 'provider', message: `Provider ${provider.slug} missing coverageStyle` });
  }

  return errors;
}

/**
 * Validate matrix entry references
 */
function validateMatrixEntry(
  entry: CountryProviderEntry,
  countrySlugs: Set<string>,
  providerSlugs: Set<string>
): ValidationError[] {
  const errors: ValidationError[] = [];

  // Check country exists
  if (!countrySlugs.has(entry.countrySlug)) {
    errors.push({
      type: 'error',
      category: 'reference',
      message: `Matrix references non-existent country: ${entry.countrySlug}`,
    });
  }

  // Check each provider reference
  for (const providerEntry of entry.providers) {
    if (!providerSlugs.has(providerEntry.providerSlug)) {
      errors.push({
        type: 'error',
        category: 'reference',
        message: `Matrix entry for ${entry.countrySlug} references non-existent provider: ${providerEntry.providerSlug}`,
      });
    }

    // Content checks
    if (!providerEntry.bestFor) {
      errors.push({
        type: 'warning',
        category: 'matrix',
        message: `Matrix entry ${entry.countrySlug}/${providerEntry.providerSlug} missing bestFor`,
      });
    }
    if (!providerEntry.notIdealFor) {
      errors.push({
        type: 'warning',
        category: 'matrix',
        message: `Matrix entry ${entry.countrySlug}/${providerEntry.providerSlug} missing notIdealFor`,
      });
    }
  }

  return errors;
}

/**
 * Run full validation on all data
 */
export function validateAll(): ValidationResult {
  const allErrors: ValidationError[] = [];
  const countrySlugs = new Set(getAllCountrySlugs());
  const providerSlugs = new Set(getAllProviderSlugs());
  const matrixCountrySlugs = new Set(getAllMatrixCountrySlugs());

  // Validate countries
  for (const country of countries) {
    allErrors.push(...validateCountry(country));
  }

  // Validate providers
  for (const provider of providers) {
    allErrors.push(...validateProvider(provider));
  }

  // Validate matrix
  for (const entry of countryProviderMatrix) {
    allErrors.push(...validateMatrixEntry(entry, countrySlugs, providerSlugs));
  }

  // Find orphaned countries (in countries.ts but not in matrix)
  const orphanedCountries = [...countrySlugs].filter(slug => !matrixCountrySlugs.has(slug));
  if (orphanedCountries.length > 0) {
    allErrors.push({
      type: 'warning',
      category: 'reference',
      message: `Countries without matrix entries: ${orphanedCountries.join(', ')}`,
    });
  }

  // Find orphaned providers (in providers.ts but never used in matrix)
  const usedProviders = new Set<string>();
  for (const entry of countryProviderMatrix) {
    for (const p of entry.providers) {
      usedProviders.add(p.providerSlug);
    }
  }
  const orphanedProviders = [...providerSlugs].filter(slug => !usedProviders.has(slug));
  if (orphanedProviders.length > 0) {
    allErrors.push({
      type: 'warning',
      category: 'reference',
      message: `Providers not used in any country: ${orphanedProviders.join(', ')}`,
    });
  }

  // Separate errors and warnings
  const errors = allErrors.filter(e => e.type === 'error');
  const warnings = allErrors.filter(e => e.type === 'warning');

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      countriesCount: countries.length,
      providersCount: providers.length,
      matrixEntriesCount: countryProviderMatrix.length,
      orphanedCountries,
      orphanedProviders,
    },
  };
}

/**
 * Print validation results to console
 */
export function printValidationReport(result: ValidationResult): void {
  console.log('\n=== Data Validation Report ===\n');

  console.log('Stats:');
  console.log(`  Countries: ${result.stats.countriesCount}`);
  console.log(`  Providers: ${result.stats.providersCount}`);
  console.log(`  Matrix entries: ${result.stats.matrixEntriesCount}`);

  if (result.stats.orphanedCountries.length > 0) {
    console.log(`  Orphaned countries: ${result.stats.orphanedCountries.join(', ')}`);
  }
  if (result.stats.orphanedProviders.length > 0) {
    console.log(`  Orphaned providers: ${result.stats.orphanedProviders.join(', ')}`);
  }

  if (result.errors.length > 0) {
    console.log('\nERRORS:');
    for (const error of result.errors) {
      console.log(`  ❌ [${error.category}] ${error.message}`);
    }
  }

  if (result.warnings.length > 0) {
    console.log('\nWARNINGS:');
    for (const warning of result.warnings) {
      console.log(`  ⚠️  [${warning.category}] ${warning.message}`);
    }
  }

  console.log('\n' + (result.valid ? '✅ Validation passed!' : '❌ Validation failed!') + '\n');
}

/**
 * Validate and throw if errors found (for build-time checking)
 */
export function validateOrThrow(): void {
  const result = validateAll();
  if (!result.valid) {
    printValidationReport(result);
    throw new Error(`Data validation failed with ${result.errors.length} error(s)`);
  }
}
