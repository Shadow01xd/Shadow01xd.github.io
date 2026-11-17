---
name: Miguel Ángel Hernández · Portfolio
description: An arcade cabinet screen where every project is a stage with its own lit marquee and a real score.
colors:
  glass: "#07060b"
  glass-2: "#100e19"
  glass-3: "#1a1728"
  line: "#2b2740"
  line-strong: "#4b4570"
  ink: "#f4f1ff"
  ink-2: "#bdb7d9"
  ink-3: "#948eb3"
  coin: "#ffd23f"
  coin-hover: "#ffe27a"
  coin-pressed: "#e3b52a"
  pink: "#ff3d6e"
  cyan: "#39d0ff"
  lime: "#8dff5a"
typography:
  display:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "clamp(2.75rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0.01em"
  score:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "clamp(4rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
    fontFeature: "tnum"
  headline:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "clamp(2.25rem, 6vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  subhead:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "clamp(1.05rem, 2.4vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label:
    fontFamily: "Tiny5, Courier New, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.08em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  pixel-notch: "4px"
spacing:
  px: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "48px"
  section: "120px"
  section-mobile: "88px"
components:
  button-primary:
    backgroundColor: "{colors.coin}"
    textColor: "{colors.glass}"
    typography: "{typography.label}"
    rounded: "{rounded.pixel-notch}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.coin-hover}"
  button-primary-active:
    backgroundColor: "{colors.coin-pressed}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pixel-notch}"
    padding: "12px 22px"
    height: "48px"
  button-ghost-hover:
    textColor: "{colors.cyan}"
  stage-tab:
    backgroundColor: "{colors.glass-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pixel-notch}"
  stage-tab-selected:
    backgroundColor: "{colors.glass-3}"
  level-panel:
    backgroundColor: "{colors.glass-2}"
    rounded: "{rounded.pixel-notch}"
    padding: "48px"
  dialog-box:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.none}"
    padding: "20px 22px 22px"
  inventory-slot:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pixel-notch}"
    padding: "8px 12px"
    height: "40px"
  chip:
    backgroundColor: "{colors.glass-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "6px 10px 5px"
  lang-toggle-active:
    backgroundColor: "{colors.coin}"
    textColor: "{colors.glass}"
    typography: "{typography.label}"
---

# Design System: Miguel Ángel Hernández · Portfolio

## Overview

**Creative North Star: "The Arcade Cabinet"**

The page is a cabinet switched on in a dark room. A visitor arrives on a title screen: the name in fat yellow pixel letters with a pink shade, a cyan role line, a blinking PRESS START and two buttons. Scrolling down plays the machine. The stage select lights one marquee per project. The level panel shows the project's real score at a scale nothing else on the page reaches. Education is a player profile and a framed certifications log, the tools are an inventory of slots, and the contact closes on a "Continue?" screen with a countdown.

The machine speaks in the pixel face (Tiny5) and the visitor reads in a plain sans (Atkinson Hyperlegible Next). Every name, number, label and control is pixel type. Every sentence that has to be read is sans, set inside framed dialog boxes or as a lead under a heading. The surface is CRT glass: near-black violet with 4px scanlines and an inner vignette. Four arcade primaries carry identity, one per stage. Motion moves in steps, never in smooth easing.

The world refuses the dark card-grid developer portfolio, terminal chrome, neon glow on everything, and, by binding brand commitment, gradients of any kind.

**Key Characteristics:**
- Near-black violet CRT glass with 4px scanlines drawn by an SVG tile (not a gradient).
- Two faces with fixed jobs: Tiny5 for the machine's voice, Atkinson Hyperlegible Next for reading.
- Four arcade primaries (coin, pink, cyan, lime), one per stage, never blended.
- Pixel-stepped corners on controls and stage frames; square corners elsewhere.
- Motion in `steps()`: blink, twinkle, a stepped wipe between levels, a fading pixel trail.

## Colors

CRT glass in three violet-black steps, phosphor inks in three tiers, and four arcade primaries that name things rather than decorate them.

### Primary
- **Coin Yellow** (#ffd23f): the primary action fill (buttons, active language), the hero name, the selected marquee for coin stages, certification dates, the degree name. **Coin Lit** (#ffe27a) is its hover step and **Coin Pressed** (#e3b52a) its pressed step.

### Secondary
- **Player Pink** (#ff3d6e): the shade under the hero name and brand mark, profile labels, the countdown numeral, selection fill. It is also the Sistema-Ticket-CRS stage colour.
- **Cabinet Cyan** (#39d0ff): the role line, table headers, focus ring, and ghost-button hover. It is also the NVCode stage colour.

### Tertiary
- **Phosphor Lime** (#8dff5a): the SIA-U stage colour and the fourth inventory row.

### Neutral
- **Glass** (#07060b): the page, the topbar, dialog-box interiors, inventory slots.
- **Glass Raised** (#100e19): stage tabs, the level panel, profile, score table, inventory and contact surfaces.
- **Glass Lit** (#1a1728): hovered and selected tabs, hovered table rows.
- **Scan Line** (#2b2740): rules, dashed separators, the topbar edge.
- **Bezel** (#4b4570): frames of dialog boxes, panels, chips and slots; the shade under section titles.
- **Phosphor White** (#f4f1ff): headings, scores, body that must be read first.
- **Phosphor Dim** (#bdb7d9): leads, dialog text, taglines, nav links.
- **Phosphor Faint** (#948eb3): hints, footer, inactive language, private-repo note. This is the floor for any text.

### Named Rules
**The One Stage, One Colour Rule.** Each project owns exactly one arcade primary (`data-color` on the tab and the panel sets `--stage`). The marquee, the panel frame, the score label and the bullets all take that colour, and no other primary appears inside the level.

**The No-Blend Rule.** Primaries are never mixed into gradients. The only mixing allowed is `color-mix` against Glass to dim an unselected marquee (14%) or to tint a shade, which keeps the dimmed marquee text above 4.5:1.

## Typography

**Display Font:** Tiny5 (with Courier New, monospace)
**Body Font:** Atkinson Hyperlegible Next (with Segoe UI, system-ui, sans-serif)

**Character:** Tiny5 is a compact pixel face with unambiguous numerals; "15+" and "0.82" read cleanly where other pixel faces turned 5 into S. Atkinson is built for legibility, which is why every long sentence, email address and stack name uses it.

### Hierarchy
- **Display** (Tiny5 400, clamp 44–96px, 0.95, uppercase): the hero name. One per page.
- **Score** (Tiny5 400, clamp 64–96px, 0.9, tabular): the level's hero number, the largest thing inside the panel.
- **Headline** (Tiny5 400, clamp 36–64px, 1.0, uppercase, Bezel shade): section titles. The contact heading uses the same family at clamp 40–84px in Coin.
- **Title** (Tiny5 400, clamp 36–60px, uppercase, stage colour): the level name.
- **Subhead** (Tiny5 400, clamp 17–26px, 0.06em, uppercase): the hero role line in Cyan.
- **Label** (Tiny5 400, 13–18px, 0.06–0.1em, uppercase): nav links, HUD, dialog titles, profile and table headers, inventory labels, stage units, buttons (17px).
- **Lead** (Atkinson 400, 19–20px, 1.55, Phosphor Dim): section subs, the hero meta (max 36em), the contact sub (max 34em).
- **Body** (Atkinson 400, 18px, 1.55): the default; certification names, profile values (20px).
- **Body Small** (Atkinson 400, 15–16px): dialog text, taglines, chips, slots, score captions.

### Named Rules
**The Machine Speaks, You Read Rule.** Pixel type is for names, numbers, labels and controls. Any sentence longer than a line, and anything the visitor must copy exactly (an email address), is set in Atkinson.

**The One Weight Rule.** Tiny5 ships one weight and `font-synthesis: none` forbids faux bold. Hierarchy comes from size, colour and the pixel shade, never from weight.

## Layout

A single centered column, `min(1120px, 100% - 32px)`, with a 16px gutter at every width. The title screen fills the first viewport (`100svh` minus the topbar) with the HUD pinned to its top. Content sections open with 120px above (88px on phones), and each head sits 40px above its content (28px on phones).

The stage select is a four-column grid with 12px gaps. It drops to two columns below 960px; below 520px tabs hide the tagline but keep score and unit. The level panel is a 5fr/6fr two-column grid with 48px gaps and padding, stacking below 960px (36px/28px padding, then 28px/18px). The inventory is one panel of rows with a 220px label column, stacking below 720px. The profile is a 3fr/1fr grid; the score table reflows to stacked rows below 720px. The topbar wraps on phones: the nav becomes a second row of four evenly spaced links.

Spacing rides a 4px pixel unit: 4, 8, 12, 16, 20, 24, 28, 40, 48, plus the 120/88 section rhythm.

## Elevation & Depth

The cabinet is flat. Depth is tonal (Glass → Glass Raised → Glass Lit) plus three material effects:
- The CRT scanline tile.
- An inset vignette (`box-shadow: inset 0 0 120px rgb(0 0 0 / .55)`) on title, level and contact screens.
- A phosphor bloom on display numbers and names (`text-shadow: 0 0 18px` at 35% of the current colour).

The display type also carries a solid pixel shade (`0.06em 0.06em 0`) in Pink, Bezel or a stage tint. That is the arcade logo convention and it is applied to type only.

### Named Rules
**The Type-Only Shade Rule.** Solid offset shades belong to pixel display type. Boxes and buttons never cast an offset shadow; they step colour instead.

## Shapes

There are two silhouettes. Controls and stage frames (buttons, stage tabs, the level panel, inventory slots) use **pixel-stepped corners**: a 12-point `clip-path` (`--pixel-corners`) that removes one 4px pixel at each corner. Reading containers (dialog boxes, profile, score table, inventory frame, chips) keep square corners with 2–3px Bezel borders. Dialog boxes add a second, inner frame line. Bullets are 6px squares, and the only icon is a pixel arrow drawn as crisp-edged SVG rects.

## Components

### Buttons
A coin block that lights up and sinks.
- **Shape:** pixel-stepped corners, 48px tall, 12px 22px padding.
- **Primary:** Coin fill with Glass text, Tiny5 17px uppercase, and a pixel arrow before the label.
- **Hover / Press:** the fill steps to Coin Lit; on press it moves `translateY(2px)` and steps to Coin Pressed (120ms, `steps(4)`).
- **Ghost:** transparent with a 3px inset Bezel frame. On hover both the frame and the text turn Cyan.
- **Plain modifier:** Atkinson 700, no uppercase, for the email address.

### Stage Select (signature)
An ARIA tablist of four tabs. Each tab stacks three rows:
- A marquee band with the project name, dimmed to a 14% stage tint.
- The score in Tiny5 36px with its unit in stage colour.
- The tagline in Atkinson 15px.

The selected tab lights the marquee to full stage colour with Glass text, frames the tab in stage colour, and shows a blinking pixel cursor. Arrow keys, Home and End move the selection, which activates automatically and wraps.

### Level Panel (signature)
A stage-coloured frame on Glass Raised with scanlines. The left column holds the name, the tagline, a dashed rule, the score label, the score and its caption. The right column holds three dialog boxes (what it does, my part with square bullets, technologies as chips) and the repository button or a private note. Changing stage replays an 8-step `clip-path` wipe on both columns.

### Dialog Box
A square double frame with a Tiny5 title in the context accent (`--stage` or Cyan) and Atkinson text in Phosphor Dim.

### Inventory
One framed panel. Each row is a coloured Tiny5 label beside a run of slots, and rows are divided by dashed Scan Line rules. Slots are pixel-cornered Glass cells with a 2px Bezel inset frame. "Learning" slots are dashed outlines without fill: unlocked later.

### Certifications Log and Player Profile
The profile is a framed definition list: a Pink Tiny5 label over a value, with the degree in Coin Tiny5. Certifications are a framed table with Cyan Tiny5 headers, Coin Tiny5 dates, Atkinson names and dashed row rules.

### Navigation
A sticky 56px Glass bar with a 3px Scan Line bottom edge. The brand "MAH" is in Coin with a Pink shade. Links are Tiny5 15px uppercase in Phosphor Dim and turn Coin on hover. The language toggle is two joined square buttons; the pressed one is Coin.

### Continue Screen
A full-width scanline screen. The heading reads "¿Continuar?" in Coin with a pink countdown numeral (9→0, only while visible). Below sit the lead and the two buttons.

## Do's and Don'ts

### Do:
- **Do** give each project one arcade primary via `data-color` and let `--stage` carry it through tab and panel.
- **Do** set every name, number, label and control in Tiny5 400. Set every sentence and every exact-copy string in Atkinson.
- **Do** keep scores true and always pair them with a unit or a caption that says what they measure.
- **Do** use `steps()` timing for every transition and animation, and drop them all under `prefers-reduced-motion`.
- **Do** draw focus rings inward on pixel-cornered elements (`outline-offset: calc(-2 * var(--border) - 2px)`), since the corner clip cuts an outer ring.
- **Do** keep text at Phosphor Faint (#948eb3) or brighter.

### Don't:
- **Don't** use gradients (including `repeating-linear-gradient` stripes). Scanlines are an SVG tile.
- **Don't** put offset box shadows on buttons or boxes; step the colour instead.
- **Don't** bold Tiny5 or let the browser synthesise weight.
- **Don't** set long reading text, email addresses or stack names in the pixel face.
- **Don't** turn tools into a grid of same-size cards, or add skill bars or percentage meters.
- **Don't** add a kicker or eyebrow line above a heading.
