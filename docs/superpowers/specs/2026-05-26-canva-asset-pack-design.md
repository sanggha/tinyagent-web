# Canva Asset Pack — Design Spec

## Goal
Generate real Canva design assets and embed them into the Tiny Agent marketing site, replacing code-rendered placeholders with polished visuals.

## Assets to Generate

### 1. Facebook Ad Mockup (Hero)
- **Type:** `facebook_post` (1080×1350px portrait)
- **Content:** Real estate agent lifestyle video ad creative — dark tone, "47 leads in 30 days" proof copy, Tiny Agent branding, navy/blue/gold palette
- **Integration:** Export as PNG → `/public/ad-mockup-hero.png` → replace the code-rendered `LiveAdMockup` in `Hero.tsx` with a static `<Image>` component inside the existing phone frame

### 2. Stat Card Infographic
- **Type:** `infographic`
- **Content:** Key proof points — 47 leads avg/month, 8.3x ROI, 2,400+ reach per campaign — dark background matching site palette
- **Integration:** Export as PNG → `/public/stat-card.png` → embed in `ProofBar.tsx` or `Features.tsx`

### 3. Brand Poster / Hero Imagery
- **Type:** `poster`
- **Content:** Premium dark real estate marketing visual, Tiny Agent wordmark, gold accent — suitable as section background or OG image
- **Integration:** Export as PNG → `/public/brand-hero.png` → use as OG/meta image in `layout.tsx` and optionally as a background in `CTASection.tsx`

## Workflow Per Asset
1. `generate-design` → review candidates
2. `create-design-from-candidate` → save to Canva account
3. `export-design` as PNG → save to `/public`
4. Update component to use the new image

## Palette Reference
- Background: `#0A0F1E` (deep navy)
- Primary: `#2563EB` (electric blue)
- Accent: `#F59E0B` (gold)
- Text: white / `#E2E8F0`
