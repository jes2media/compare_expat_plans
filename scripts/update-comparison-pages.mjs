/**
 * Script to update all comparison pages with:
 * 1. Hero image
 * 2. More paragraphs of content
 */

import fs from 'fs';
import path from 'path';

const compareDir = './src/pages/compare';

// Provider info for generating content
const providerInfo = {
  'cigna-global': {
    name: 'Cigna Global',
    shortDesc: 'known for its extensive global network and strong customer service',
    strength: 'massive provider network with direct billing at over 1.5 million healthcare facilities worldwide',
    audience: 'families and American expats who prioritize convenience',
    pricing: 'premium pricing but many feel the convenience justifies the cost'
  },
  'allianz-care': {
    name: 'Allianz Care',
    shortDesc: 'backed by German insurance giant Allianz, offering flexible and competitively priced plans',
    strength: 'plan customization and competitive pricing, often 10-15% cheaper than comparable options',
    audience: 'cost-conscious expats who value flexibility',
    pricing: 'competitive rates with good coverage options'
  },
  'bupa-global': {
    name: 'Bupa Global',
    shortDesc: 'a UK-based insurer with a strong reputation in international health coverage',
    strength: 'comprehensive coverage and a solid reputation for claims handling',
    audience: 'expats who want reliable coverage from an established brand',
    pricing: 'mid-to-premium range with good value for the coverage provided'
  },
  'axa-global': {
    name: 'AXA Global',
    shortDesc: 'part of the French AXA group, offering robust international health plans',
    strength: 'strong presence in Europe and Asia with comprehensive plan options',
    audience: 'expats in Europe and Asia who want a well-established provider',
    pricing: 'competitive pricing with flexible deductible options'
  },
  'aetna-international': {
    name: 'Aetna International',
    shortDesc: 'backed by CVS Health, offering plans designed for globally mobile individuals',
    strength: 'integration with US healthcare system and strong employer-sponsored options',
    audience: 'US-based companies with international employees and American expats',
    pricing: 'mid-range pricing with good corporate plan options'
  },
  'img-global': {
    name: 'IMG Global',
    shortDesc: 'offering affordable international health insurance with flexible options',
    strength: 'budget-friendly plans that still provide solid coverage',
    audience: 'budget-conscious expats and digital nomads',
    pricing: 'lower premiums with higher deductible options available'
  },
  'safetywing': {
    name: 'SafetyWing',
    shortDesc: 'a modern insurance option designed specifically for digital nomads and remote workers',
    strength: 'subscription-based model with no long-term commitment required',
    audience: 'digital nomads, remote workers, and location-independent professionals',
    pricing: 'very affordable monthly subscription starting around $40/month'
  },
  'geoblue': {
    name: 'GeoBlue',
    shortDesc: 'a Blue Cross Blue Shield company focused on international health coverage',
    strength: 'connection to the Blue Cross Blue Shield network and strong US ties',
    audience: 'American expats who want continuity with US healthcare brands',
    pricing: 'mid-range with good options for short and long-term coverage'
  }
};

function getProviderSlug(filename) {
  // Extract provider slugs from filename like "cigna-global-vs-allianz-care.astro"
  const match = filename.match(/(.+)-vs-(.+)\.astro$/);
  if (match) {
    return [match[1], match[2]];
  }
  return null;
}

function generateOverviewParagraphs(provider1, provider2) {
  const p1 = providerInfo[provider1];
  const p2 = providerInfo[provider2];

  if (!p1 || !p2) {
    console.log(`Missing provider info for ${provider1} or ${provider2}`);
    return null;
  }

  return `  <h2 id="overview">Overview</h2>
  <p>
    ${p1.name} and ${p2.name} are both popular choices for international health insurance, but they serve different needs. Understanding their key differences will help you choose the right coverage for your situation abroad.
  </p>
  <p>
    ${p1.name} is ${p1.shortDesc}. Their main ${p1.strength}. They're particularly popular among ${p1.audience}, with ${p1.pricing}.
  </p>
  <p>
    ${p2.name} is ${p2.shortDesc}. They're known for their ${p2.strength}. They tend to attract ${p2.audience}, offering ${p2.pricing}.
  </p>
  <p>
    This comparison breaks down the key differences between these two providers so you can make an informed decision. We'll cover coverage options, pricing estimates, network access, claims processes, and help you determine which one makes more sense for your specific needs and budget.
  </p>

  <div class="grid md:grid-cols-2 gap-6 my-8">`;
}

function updateFile(filepath) {
  const filename = path.basename(filepath);
  const providers = getProviderSlug(filename);

  if (!providers) {
    console.log(`Skipping ${filename} - couldn't parse provider names`);
    return false;
  }

  const [provider1, provider2] = providers;
  let content = fs.readFileSync(filepath, 'utf-8');

  // Skip if already has heroImage
  if (content.includes('heroImage=')) {
    console.log(`Skipping ${filename} - already has heroImage`);
    return false;
  }

  // Add heroImage to PageShell
  content = content.replace(
    /(<PageShell[\s\S]*?)(tocItems=)/,
    '$1heroImage="/images/pages/provider-card-generic.png"\n  $2'
  );

  // Generate new overview content
  const newOverview = generateOverviewParagraphs(provider1, provider2);

  if (newOverview) {
    // Replace the overview section
    content = content.replace(
      /<h2 id="overview">Overview<\/h2>[\s\S]*?<div class="grid md:grid-cols-2 gap-6 my-8">/,
      newOverview
    );
  }

  fs.writeFileSync(filepath, content);
  console.log(`Updated ${filename}`);
  return true;
}

// Get all comparison files
const files = fs.readdirSync(compareDir)
  .filter(f => f.endsWith('.astro') && f !== 'index.astro' && !f.includes('['))
  .map(f => path.join(compareDir, f));

console.log(`Found ${files.length} comparison pages to update`);

let updated = 0;
for (const file of files) {
  if (updateFile(file)) {
    updated++;
  }
}

console.log(`\nUpdated ${updated} files`);
