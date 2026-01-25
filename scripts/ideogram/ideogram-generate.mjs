#!/usr/bin/env node

/**
 * Ideogram Single Image Generator
 *
 * Usage:
 *   node scripts/ideogram/ideogram-generate.mjs --prompt "..." --out "public/images/hero/home.png" --ratio "16:9"
 *
 * Options:
 *   --prompt    The image generation prompt (required)
 *   --out       Output file path (required)
 *   --ratio     Aspect ratio: 1:1, 16:9, 4:3, 3:2, 9:16 (default: 16:9)
 *   --force     Overwrite existing file
 *   --dry-run   Print what would be done without making API call
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// =============================================================================
// API CONFIGURATION - Update these if the API changes
// =============================================================================

const API_URL = 'https://api.ideogram.ai/generate';
const MODEL = 'V_2';              // Ideogram model: V_1, V_1_TURBO, V_2, V_2_TURBO
const MAGIC_PROMPT = 'AUTO';      // AUTO, ON, OFF - let Ideogram enhance prompts
const STYLE_TYPE = 'DESIGN';      // DESIGN, REALISTIC, RENDER_3D, ANIME, GENERAL

// Aspect ratio mapping to Ideogram format
const ASPECT_RATIOS = {
  '1:1': 'ASPECT_1_1',
  '16:9': 'ASPECT_16_9',
  '9:16': 'ASPECT_9_16',
  '4:3': 'ASPECT_4_3',
  '3:4': 'ASPECT_3_4',
  '3:2': 'ASPECT_3_2',
  '2:3': 'ASPECT_2_3',
};

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;

// =============================================================================
// HELPERS
// =============================================================================

function parseArgs(args) {
  const result = {
    prompt: null,
    out: null,
    ratio: '16:9',
    force: false,
    dryRun: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--prompt' && args[i + 1]) {
      result.prompt = args[++i];
    } else if (arg === '--out' && args[i + 1]) {
      result.out = args[++i];
    } else if (arg === '--ratio' && args[i + 1]) {
      result.ratio = args[++i];
    } else if (arg === '--force') {
      result.force = true;
    } else if (arg === '--dry-run') {
      result.dryRun = true;
    }
  }

  return result;
}

function getApiKey() {
  // Try multiple env file locations
  const envFiles = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), 'Ideogram.env'),
  ];

  for (const envFile of envFiles) {
    if (fs.existsSync(envFile)) {
      const content = fs.readFileSync(envFile, 'utf-8');
      const match = content.match(/IDEOGRAM_API_KEY=(.+)/);
      if (match) {
        return match[1].trim();
      }
    }
  }

  // Fall back to process.env
  return process.env.IDEOGRAM_API_KEY;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url, options, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (response.status === 429) {
        // Rate limited
        const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
        console.log(`⏳ Rate limited. Waiting ${delay / 1000}s before retry ${attempt}/${retries}...`);
        await sleep(delay);
        continue;
      }

      if (response.status >= 500) {
        // Server error
        const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
        console.log(`⏳ Server error (${response.status}). Waiting ${delay / 1000}s before retry ${attempt}/${retries}...`);
        await sleep(delay);
        continue;
      }

      return response;
    } catch (error) {
      if (attempt === retries) throw error;
      const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
      console.log(`⏳ Network error. Waiting ${delay / 1000}s before retry ${attempt}/${retries}...`);
      await sleep(delay);
    }
  }
}

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

function writeSidecar(imagePath, data) {
  const sidecarPath = `${imagePath}.json`;
  fs.writeFileSync(sidecarPath, JSON.stringify(data, null, 2));
  console.log(`📄 Wrote sidecar: ${sidecarPath}`);
}

// =============================================================================
// MAIN GENERATION FUNCTION
// =============================================================================

export async function generateImage({ prompt, out, ratio = '16:9', force = false, dryRun = false }) {
  // Validate inputs
  if (!prompt) {
    throw new Error('Missing required --prompt argument');
  }
  if (!out) {
    throw new Error('Missing required --out argument');
  }

  const aspectRatio = ASPECT_RATIOS[ratio];
  if (!aspectRatio) {
    throw new Error(`Invalid ratio "${ratio}". Valid options: ${Object.keys(ASPECT_RATIOS).join(', ')}`);
  }

  // Resolve output path
  const outputPath = path.resolve(process.cwd(), out);

  // Check if file exists
  if (fs.existsSync(outputPath) && !force) {
    console.log(`⏭️  Skipping (already exists): ${outputPath}`);
    console.log(`   Use --force to overwrite`);
    return { skipped: true, path: outputPath };
  }

  // Dry run mode
  if (dryRun) {
    console.log(`\n🔍 DRY RUN - Would generate:`);
    console.log(`   Prompt: "${prompt}"`);
    console.log(`   Output: ${outputPath}`);
    console.log(`   Ratio:  ${ratio} (${aspectRatio})`);
    console.log(`   Model:  ${MODEL}`);
    console.log(`   Style:  ${STYLE_TYPE}`);
    return { dryRun: true, path: outputPath };
  }

  // Get API key
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error(
      'IDEOGRAM_API_KEY not found.\n' +
      'Set it in .env, Ideogram.env, or as an environment variable.'
    );
  }

  console.log(`\n🎨 Generating image...`);
  console.log(`   Prompt: "${prompt.substring(0, 60)}${prompt.length > 60 ? '...' : ''}"`);
  console.log(`   Ratio:  ${ratio}`);

  // Build request payload
  const payload = {
    image_request: {
      prompt,
      model: MODEL,
      magic_prompt_option: MAGIC_PROMPT,
      style_type: STYLE_TYPE,
      aspect_ratio: aspectRatio,
    },
  };

  // Make API request
  const response = await fetchWithRetry(API_URL, {
    method: 'POST',
    headers: {
      'Api-Key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error (${response.status}): ${errorText}`);
  }

  const result = await response.json();

  // Extract image URL from response
  const imageData = result.data?.[0];
  if (!imageData?.url) {
    throw new Error('No image URL in API response');
  }

  // Download the image
  console.log(`   Downloading...`);
  const imageResponse = await fetch(imageData.url);
  if (!imageResponse.ok) {
    throw new Error(`Failed to download image: ${imageResponse.status}`);
  }

  const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());

  // Ensure output directory exists
  ensureDir(outputPath);

  // Write image file
  fs.writeFileSync(outputPath, imageBuffer);
  console.log(`✅ Saved: ${outputPath}`);

  // Write sidecar metadata
  const sidecar = {
    prompt,
    ratio,
    model: MODEL,
    style: STYLE_TYPE,
    generatedAt: new Date().toISOString(),
    seed: imageData.seed,
  };
  writeSidecar(outputPath, sidecar);

  return { success: true, path: outputPath, sidecar };
}

// =============================================================================
// CLI ENTRY POINT
// =============================================================================

const __filename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === __filename;

if (isMainModule) {
  const args = parseArgs(process.argv.slice(2));

  generateImage(args)
    .then(result => {
      if (result.success) {
        console.log(`\n🎉 Done!`);
      }
      process.exit(0);
    })
    .catch(error => {
      console.error(`\n❌ Error: ${error.message}`);
      process.exit(1);
    });
}
