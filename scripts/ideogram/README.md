# Ideogram Image Generator

Generate consistent site images (hero, cards, section images) using the Ideogram API.

## Setup

1. Copy `.env.example` to `.env` (or use existing `Ideogram.env`)
2. Add your Ideogram API key

```bash
IDEOGRAM_API_KEY=your_api_key_here
```

## Quick Start: Test Style Images

Generate 4 test images to lock in the site's visual style:

```bash
# 1. Ensure your API key is set in .env or Ideogram.env
IDEOGRAM_API_KEY=your_key_here

# 2. Run the test style batch
npm run img:test-style

# 3. Optional: Preview what will be generated (no API call)
npm run img:test-style -- --dry-run

# 4. Optional: Force regenerate existing images
npm run img:test-style -- --force
```

This generates:
- `public/images/style-test/hero-16x9.png` - Hero image (16:9)
- `public/images/style-test/card-1x1.png` - Card image (1:1)
- `public/images/style-test/country-thumb-1x1.png` - Country thumbnail (1:1)
- `public/images/style-test/icon-1x1.png` - Icon (1:1)

---

## Usage

### Single Image

```bash
# Basic usage
npm run img:one -- --prompt "A globe with passport icons" --out "public/images/hero/home.png"

# With aspect ratio
npm run img:one -- --prompt "Travel documents illustration" --out "public/images/cards/documents.png" --ratio "1:1"

# Force overwrite existing
npm run img:one -- --prompt "..." --out "..." --force

# Dry run (no API call)
npm run img:one -- --prompt "..." --out "..." --dry-run
```

### Batch Generation

```bash
# From JSON file
npm run img:batch -- --in scripts/ideogram/prompts.json

# Dry run
npm run img:dry -- --in scripts/ideogram/prompts.json
```

### Aspect Ratios

Supported ratios:
- `1:1` - Square (cards, thumbnails)
- `16:9` - Wide (hero images)
- `4:3` - Standard (section images)
- `3:2` - Photos
- `9:16` - Vertical/mobile

## Prompts JSON Format

```json
{
  "images": [
    {
      "prompt": "Your prompt here",
      "out": "public/images/hero/home.png",
      "ratio": "16:9"
    }
  ]
}
```

## Prompting Guidelines

**DO use:**
- Clean, trustworthy, utility-site aesthetic
- Neutral icons and illustrations
- Passports, globes, documents, airplane silhouettes
- Maps, location pins, comparison motifs
- Abstract geometric patterns
- Flat/minimal illustration styles
- Professional color palettes (blues, neutrals)

**DON'T use:**
- Medical imagery (hospitals, syringes, doctors)
- Dramatic patient scenes
- Stock-photo lifestyle spam
- Overly emotional imagery
- Complex photorealistic scenes

**Example prompts:**

```
"Flat illustration of a passport with a globe and airplane silhouette, clean minimal style, blue and white color palette, professional utility website aesthetic"

"Minimal icon set showing comparison between two documents with checkmarks, clean vector style, neutral colors, trustworthy business aesthetic"

"Abstract world map with location pins and travel route lines, flat design, muted blue tones, professional and clean"
```

## Configuration

API settings are defined at the top of each script:

```javascript
// ideogram-generate.mjs
const API_URL = 'https://api.ideogram.ai/generate';
const MODEL = 'V_2';           // Ideogram model version
const MAGIC_PROMPT = 'AUTO';   // Let Ideogram enhance prompts
const STYLE_TYPE = 'DESIGN';   // DESIGN, REALISTIC, etc.
```

Adjust these if the API changes or you want different defaults.

## Output

Each generated image creates two files:
- `image.png` - The actual image
- `image.png.json` - Metadata sidecar with prompt and timestamp

Example sidecar:
```json
{
  "prompt": "Your prompt here",
  "ratio": "16:9",
  "generatedAt": "2025-01-25T12:00:00.000Z",
  "model": "V_2"
}
```

## Error Handling

- Missing API key: Fails immediately with clear error
- Rate limits (429): Automatic retry with exponential backoff
- Server errors (5xx): Automatic retry (up to 3 attempts)
- Existing file: Skipped unless `--force` is passed

## File Structure

```
scripts/ideogram/
├── README.md
├── ideogram-generate.mjs      # Single image generator
├── ideogram-batch.mjs         # Batch generator
├── prompts.example.json       # Example prompts file
└── prompts.test-style.json    # Style test prompts (4 images)

public/images/
├── hero/                      # Hero/banner images (16:9)
├── cards/                     # Card images (4:3 or 1:1)
├── icons/                     # Small icons/illustrations
├── countries/                 # Country thumbnails
└── style-test/                # Style test outputs
```
