# Canva Asset Pack Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate three Canva design assets (Facebook ad creative, stat infographic, brand OG poster), export as PNGs, and embed them into the Tiny Agent site.

**Architecture:** Use Canva MCP `generate-design` → `create-design-from-candidate` → `export-design` for each asset. Exported PNGs go to `/public`. Component changes are minimal — Hero.tsx swaps its Unsplash photo for the Canva ad creative, layout.tsx OG image gets the brand poster, and Features.tsx gets the infographic as a visual card.

**Tech Stack:** Canva MCP tools, Next.js Image component, TypeScript

---

## Files Modified

- `public/ad-creative.png` — Canva facebook_post export (ad image inside Hero phone mockup)
- `public/stat-infographic.png` — Canva infographic export (embedded in Features section)
- `public/og-image.png` — Canva poster export 1200×630 (OpenGraph + Twitter card)
- `components/Hero.tsx` — replace Unsplash photo URL with `/ad-creative.png`
- `components/Features.tsx` — add infographic card
- `app/layout.tsx` — update OG/Twitter image references from `/logo.png` to `/og-image.png`

---

## Task 1: Generate the Facebook Ad Creative

**Files:**
- Create: `public/ad-creative.png`

- [ ] **Step 1: Generate candidates**

  Call `generate-design` with:
  ```
  design_type: "facebook_post"
  query: "Premium real estate Facebook video ad for Australian real estate agent James Mitchell. Dark cinematic style. Deep navy background #0A0F1E. Electric blue #2563EB accents. Gold #F59E0B highlights. Shows a professional real estate agent headshot, headline '47 Leads in 30 Days', suburb targeting copy, 'Book a Free Appraisal' CTA button. Meta Ads aesthetic. Luxury property marketing feel."
  ```

- [ ] **Step 2: Show candidates to user, ask which to save**

  Present the returned candidates (thumbnail URLs or IDs). Ask: "Which design do you want to use?"

- [ ] **Step 3: Save chosen candidate**

  Call `create-design-from-candidate` with the `job_id` and chosen `candidate_id`.

- [ ] **Step 4: Export as PNG**

  Call `export-design` with:
  ```
  design_id: <returned design_id>
  format: { type: "png", export_quality: "pro", width: 1080, height: 1350 }
  ```
  Download the returned URL and save to `public/ad-creative.png`.

- [ ] **Step 5: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add public/ad-creative.png
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: add Canva facebook ad creative asset"
  ```

---

## Task 2: Embed Ad Creative in Hero Phone Mockup

**Files:**
- Modify: `components/Hero.tsx:69-81`

- [ ] **Step 1: Replace Unsplash image with Canva asset**

  In `Hero.tsx`, inside `LiveAdMockup`, find the `<Image>` inside the `.ken-burns` div (line ~71-79) and replace:

  ```tsx
  // Before
  <Image
    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=544&h=360&fit=crop&crop=faces&q=80"
    alt="Agent"
    fill
    className="object-cover"
    style={{ objectPosition: "50% 10%" }}
    priority
  />
  ```

  With:

  ```tsx
  // After
  <Image
    src="/ad-creative.png"
    alt="Real estate ad creative"
    fill
    className="object-cover"
    style={{ objectPosition: "50% 15%" }}
    priority
  />
  ```

- [ ] **Step 2: Verify dev server renders the new image**

  ```bash
  cd /Users/mandeeppremi/tinyagent-web && npm run dev -- --port 3031
  ```
  Open http://localhost:3031 and confirm the phone mockup shows the Canva image.

- [ ] **Step 3: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add components/Hero.tsx
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: embed Canva ad creative in Hero phone mockup"
  ```

---

## Task 3: Generate the Stat Infographic

**Files:**
- Create: `public/stat-infographic.png`

- [ ] **Step 1: Generate candidates**

  Call `generate-design` with:
  ```
  design_type: "infographic"
  query: "Real estate advertising results infographic. Dark background #0A0F1E. Electric blue #2563EB and gold #F59E0B accent colors. Four key stats displayed prominently: '47 Leads / Month Average', '8.3× ROI vs Static Ads', '200K+ Homeowners Reachable', '48hrs to Go Live'. Clean modern data visualization style. Premium agency aesthetic. White sans-serif typography. Subtle grid or dot pattern background."
  ```

- [ ] **Step 2: Show candidates, ask user to pick**

- [ ] **Step 3: Save chosen candidate**

  Call `create-design-from-candidate` with `job_id` and chosen `candidate_id`.

- [ ] **Step 4: Export as PNG**

  Call `export-design` with:
  ```
  design_id: <returned design_id>
  format: { type: "png", export_quality: "pro" }
  ```
  Save to `public/stat-infographic.png`.

- [ ] **Step 5: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add public/stat-infographic.png
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: add Canva stat infographic asset"
  ```

---

## Task 4: Add Infographic to Features Section

**Files:**
- Modify: `components/Features.tsx`

- [ ] **Step 1: Read current Features.tsx**

  ```bash
  cat /Users/mandeeppremi/tinyagent-web/components/Features.tsx
  ```

- [ ] **Step 2: Add import and infographic card**

  Add `import Image from "next/image";` at the top if not already present.

  Below the existing 6-card grid (after the closing `</div>` of the grid), add:

  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mt-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
  >
    <Image
      src="/stat-infographic.png"
      alt="Real estate advertising results — 47 leads/month, 8.3× ROI, 200K+ homeowners reachable"
      width={1200}
      height={630}
      className="w-full h-auto"
    />
  </motion.div>
  ```

- [ ] **Step 3: Verify**

  Check http://localhost:3031 — scroll to Features section, confirm infographic renders below the 6 cards.

- [ ] **Step 4: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add components/Features.tsx
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: add stat infographic to Features section"
  ```

---

## Task 5: Generate the Brand OG Poster

**Files:**
- Create: `public/og-image.png`

- [ ] **Step 1: Generate candidates**

  Call `generate-design` with:
  ```
  design_type: "poster"
  query: "Open Graph social preview image for Tiny Agent — Australian real estate advertising agency. Landscape 1200×630 format. Deep navy background #0A0F1E. 'Tiny Agent' wordmark in white bold sans-serif. Tagline: 'Your Face. Your Market. Every Door.' Electric blue #2563EB glow accents. Gold #F59E0B highlights. Premium dark agency aesthetic. Subtle bokeh or city lights in background. Professional, modern, trustworthy."
  ```

- [ ] **Step 2: Show candidates, ask user to pick**

- [ ] **Step 3: Save chosen candidate**

  Call `create-design-from-candidate` with `job_id` and chosen `candidate_id`.

- [ ] **Step 4: Export as PNG at 1200×630**

  Call `export-design` with:
  ```
  design_id: <returned design_id>
  format: { type: "png", export_quality: "pro", width: 1200, height: 630 }
  ```
  Save to `public/og-image.png`.

- [ ] **Step 5: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add public/og-image.png
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: add Canva brand OG poster asset"
  ```

---

## Task 6: Update OG Metadata to Use Brand Poster

**Files:**
- Modify: `app/layout.tsx:63-78`

- [ ] **Step 1: Replace OG image references**

  In `app/layout.tsx`, update the `openGraph.images` array (line ~63-69):

  ```tsx
  // Before
  images: [
    {
      // TODO: Replace /logo.png with a proper 1200×630 og-image.png once created
      url: `${siteUrl}/logo.png`,
      width: 1024,
      height: 1024,
      alt: "Tiny Agent — Real Estate Advertising",
    },
  ],
  ```

  ```tsx
  // After
  images: [
    {
      url: `${siteUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "Tiny Agent — Real Estate Advertising for Australian Agents",
    },
  ],
  ```

  Also update the Twitter images array (line ~76-78):

  ```tsx
  // Before
  images: [`${siteUrl}/logo.png`],
  ```

  ```tsx
  // After
  images: [`${siteUrl}/og-image.png`],
  ```

- [ ] **Step 2: Commit**

  ```bash
  git -C /Users/mandeeppremi/tinyagent-web add app/layout.tsx
  git -C /Users/mandeeppremi/tinyagent-web commit -m "feat: update OG/Twitter metadata to use Canva brand poster"
  ```

---

## Self-Review Notes

- All three Canva assets are generated interactively — user picks a candidate at each step before it's saved.
- Hero phone frame (rounded corners, notch, animated counters) is preserved; only the inner ad image changes.
- ProofBar unchanged — its animated count-up stats are better UX than a static infographic there; the infographic goes in Features instead.
- CTASection skipped — the gradient background there works well; embedding a poster would clash rather than add.
- OG image TODO comment removed.
- No external dependencies added.
