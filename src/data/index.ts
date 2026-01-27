/**
 * Data Layer Index
 *
 * Centralizes exports for the data layer.
 * Import from here for cleaner code.
 *
 * Example:
 *   import { getCountryBySlug, buildProviderCards } from '../data';
 */

// Types
export * from './types';

// Countries
export {
  countries,
  getCountryBySlug,
  getAllCountrySlugs,
  getCountriesRequiringInsurance,
  getCountriesNotRequiringInsurance,
} from './countries';

// Providers
export {
  providers,
  getProviderBySlug,
  getProvidersByType,
  getInternationalProviders,
  getLocalProviders,
  getAllProviderSlugs,
} from './providers';

// Country-Provider Matrix
export {
  countryProviderMatrix,
  getProvidersForCountry,
  buildProviderCards,
  buildComparisonRows,
  getCountriesWithProvider,
  getAllMatrixCountrySlugs,
} from './countryProviderMatrix';

// Existing Countries (skip list)
export {
  existingCountrySlugs,
  hasExistingPage,
  getExistingCount,
} from './existingCountries';

// Validation
export {
  validateAll,
  printValidationReport,
  validateOrThrow,
  type ValidationError,
  type ValidationResult,
} from './validate';
