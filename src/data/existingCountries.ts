/**
 * existingCountries.ts
 *
 * List of countries that already have handcrafted .astro pages.
 * These are EXCLUDED from programmatic generation to prevent conflicts.
 *
 * When you create a new handcrafted country page, add its slug here.
 * When you want to migrate a country TO the template, remove it from here.
 */

export const existingCountrySlugs: string[] = [
  // Europe
  'spain',
  'portugal',
  'france',
  'italy',
  'germany',
  'uk',
  'netherlands',

  // Asia
  'thailand',
  'singapore',
  'indonesia',
  'vietnam',
  'japan',

  // Middle East
  'uae',

  // Oceania
  'australia',

  // Americas
  'mexico',
  'costa-rica',
  'panama',
  'colombia',
  'argentina',
  'ecuador',
  'canada',
];

/**
 * Check if a country has an existing handcrafted page
 */
export function hasExistingPage(slug: string): boolean {
  return existingCountrySlugs.includes(slug);
}

/**
 * Get count of existing pages
 */
export function getExistingCount(): number {
  return existingCountrySlugs.length;
}
