#!/usr/bin/env node

/**
 * Ideogram Batch Image Generator
 *
 * Usage:
 *   node scripts/ideogram/ideogram-batch.mjs --in scripts/ideogram/prompts.json
 *
 * Options:
 *   --in        Path to JSON file with prompts (required)
 *   --force     Overwrite existing files
 *   --dry-run   Print what would be done without making API calls
 *
 * JSON Format:
 *   {
 *     "images": [
 *       { "prompt": "...", "out": "public/images/hero/home.png", "ratio": "16:9" }
 *     ]
 *   }
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateImage } from './ideogram-generate.mjs';

// =============================================================================
// CONFIGURATION
// =============================================================================

const DELAY_BETWEEN_IMAGES_MS = 1000; // Delay between API calls to avoid rate limits

// =============================================================================
// HELPERS
// =============================================================================

function parseArgs(args) {
  const result = {
    in: null,
    force: false,
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--in' && args[i + 1]) {
      result.in = args[++i];
    } else if (arg === '--force') {
      result.force = true;
    } else if (arg === '--dry-run') {
      result.dryRun = true;
    }
  }

  return result;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function loadPromptsFile(filePath) {
  const resolvedPath = path.resolve(process.cwd(), filePath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Prompts file not found: ${resolvedPath}`);
  }

  const content = fs.readFileSync(resolvedPath, 'utf-8');
  let data;

  try {
    data = JSON.parse(content);
  } catch (e) {
    throw new Error(`Invalid JSON in prompts file: ${e.message}`);
  }

  if (!Array.isArray(data.images)) {
    throw new Error('Prompts file must have an "images" array');
  }

  return data.images;
}

function validateImage(image, index) {
  const errors = [];

  if (!image.prompt) {
    errors.push(`Missing "prompt"`);
  }
  if (!image.out) {
    errors.push(`Missing "out"`);
  }

  if (errors.length > 0) {
    throw new Error(`Image #${index + 1}: ${errors.join(', ')}`);
  }
}

// =============================================================================
// MAIN BATCH FUNCTION
// =============================================================================

async function runBatch({ in: inputFile, force = false, dryRun = false }) {
  if (!inputFile) {
    throw new Error('Missing required --in argument');
  }

  console.log(`\n📦 Ideogram Batch Generator`);
  console.log(`   Input: ${inputFile}`);
  console.log(`   Mode:  ${dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log(`   Force: ${force ? 'Yes' : 'No'}`);

  // Load and validate prompts
  const images = loadPromptsFile(inputFile);
  console.log(`\n📋 Found ${images.length} image(s) to generate\n`);

  // Validate all images first
  images.forEach((image, index) => validateImage(image, index));

  // Track results
  const results = {
    success: 0,
    skipped: 0,
    failed: 0,
    errors: [],
  };

  // Process each image
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageNum = `[${i + 1}/${images.length}]`;

    console.log(`\n${imageNum} Processing...`);

    try {
      const result = await generateImage({
        prompt: image.prompt,
        out: image.out,
        ratio: image.ratio || '16:9',
        force,
        dryRun,
      });

      if (result.skipped) {
        results.skipped++;
      } else if (result.dryRun) {
        // Dry run counts as success for reporting
        results.success++;
      } else if (result.success) {
        results.success++;
      }
    } catch (error) {
      results.failed++;
      results.errors.push({ index: i, out: image.out, error: error.message });
      console.error(`❌ Failed: ${error.message}`);
    }

    // Delay between API calls (skip for dry run and last image)
    if (!dryRun && i < images.length - 1) {
      await sleep(DELAY_BETWEEN_IMAGES_MS);
    }
  }

  // Print summary
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 Batch Complete`);
  console.log(`   ✅ Success: ${results.success}`);
  console.log(`   ⏭️  Skipped: ${results.skipped}`);
  console.log(`   ❌ Failed:  ${results.failed}`);

  if (results.errors.length > 0) {
    console.log(`\n❌ Errors:`);
    results.errors.forEach(({ index, out, error }) => {
      console.log(`   #${index + 1} (${out}): ${error}`);
    });
  }

  return results;
}

// =============================================================================
// CLI ENTRY POINT
// =============================================================================

const __filename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === __filename;

if (isMainModule) {
  const args = parseArgs(process.argv.slice(2));

  runBatch(args)
    .then(results => {
      process.exit(results.failed > 0 ? 1 : 0);
    })
    .catch(error => {
      console.error(`\n❌ Error: ${error.message}`);
      process.exit(1);
    });
}
