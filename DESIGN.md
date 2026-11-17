---
name: Miguel Ángel Hernández · Portfolio
description: A dark, product-launch portfolio where each project is presented like a flagship device.
colors:
  bg: "#000000"
  tile: "#161617"
  tile-2: "#1d1d1f"
  line: "#2c2c2e"
  text: "#f5f5f7"
  text-2: "#a1a1a6"
  text-3: "#8e8e93"
  link: "#2997ff"
  button: "#0071e3"
  button-hover: "#0062c4"
  on-button: "#ffffff"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  hero-stat:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  subhead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  body-small:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  label:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.011em"
  micro:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.011em"
rounded:
  focus: "6px"
  tile: "24px"
  pill: "980px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  inline: "28px"
  lg: "40px"
  xl: "48px"
  xxl: "64px"
  section: "120px"
  section-mobile: "88px"
components:
  nav-bar:
    backgroundColor: "rgba(0, 0, 0, 0.8)"
    textColor: "{colors.text}"
    height: "48px"
  nav-link:
    textColor: "{colors.text-2}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.text}"
  lang-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.text-3}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "4px 8px"
  lang-toggle-active:
    backgroundColor: "{colors.tile-2}"
    textColor: "{colors.text}"
  button-pill:
    backgroundColor: "{colors.button}"
    textColor: "{colors.on-button}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "11px 22px"
    height: "44px"
  button-pill-hover:
    backgroundColor: "{colors.button-hover}"
  link-chevron:
    textColor: "{colors.link}"
    typography: "{typography.body}"
  project-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.text}"
    rounded: "{rounded.tile}"
    padding: "56px 40px 48px"
  project-tile-wide:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "72px 56px 56px"
  degree-tile:
    backgroundColor: "{colors.tile}"
    rounded: "{rounded.tile}"
    padding: "64px 40px"
  cert-row:
    textColor: "{colors.text}"
    typography: "{typography.body}"
    padding: "16px 0"
  spec-row:
    textColor: "{colors.text-2}"
    typography: "{typography.body}"
    padding: "24px 0"
---

# Design System: Miguel Ángel Hernández · Portfolio

## Overview

**Creative North Star: "The Keynote Stage"**

The page is a product launch held in a dark auditorium: a black floor, graphite tiles lit from nowhere, and one blue that appears only where the visitor can act. Every project is introduced the way a flagship device is: a big name, one honest line, one hero number, and only then the spec details. The world is typographic. There is no imagery, no illustration and no ornament; scale, weight and tracking carry the whole hierarchy.

Density is low and deliberately generous. Compositions are centered and symmetrical at the top of every block, then shift to left-aligned reading inside the details, the certifications list and the spec table, the way a product page moves from stage to fine print. Depth comes from three near-black steps, never from shadow or glow. Motion is a single soft fade-up as content enters, plus a small press on the pill; nothing loops, nothing hovers in place.

The world rejects developer-template chrome outright (terminal cards, neon, glow, skill bars) and, by binding brand commitment, gradients of any kind.

**Key Characteristics:**
- Pure black page, graphite rounded tiles, near-white type, two gray tiers.
- One blue hue, reserved for action: links, the pill button, focus and selection.
- One face (Inter) at 600 for every heading and number; weight and tracking do the work.
- Centered stage at the top of each block, left-aligned fine print beneath.
- Flat: no shadows, no gradients, no glow.
- One fade-up reveal, once, from a visible default.

## Colors

A near-achromatic black-and-graphite palette with a single blue hue that means "you can act here".

### Primary
- **Keynote Blue** (link): the text-on-black expression of the accent. Every text link, the chevron link, the focus ring and the text selection fill. Bright enough to read on black and on tiles (6.96:1 on the page, 6.0:1 on a tile).
- **Action Blue** (button): the filled expression of the same hue, deeper so a white label stays legible (4.7:1). Used only as the pill button's fill. **Action Blue Pressed** (button-hover) is its hover state.
- **Label White** (on-button): the pill's label and the selection text.

### Neutral
- **Stage Black** (bg): the page, the browser chrome (theme-color) and the base of the translucent nav bar.
- **Graphite Tile** (tile): every tile surface (project, degree). The only container fill.
- **Raised Graphite** (tile-2): the one step above a tile, used for the active language toggle.
- **Hairline** (line): 1px rules: the top of each tile's detail block, certification and spec rows, the footer edge, unhovered link underlines.
- **Paper White** (text): headings, names, hero numbers, body that must be read first.
- **Quiet Gray** (text-2): subheads, taglines, leads, details, nav links. 8.2:1 on black.
- **Fine-Print Gray** (text-3): dates, the private-repo note, footer, inactive language toggle, list markers. 6.4:1 on black; the floor for any text.

### Named Rules
**The One Blue Rule.** Blue is the only hue in the system and it appears only on things you can click or have focused. Headings, numbers, labels and decoration are never blue.

**The Two-Weight Blue Rule.** The accent has two values: the bright link value for text and outlines on black, the deeper action value for filled surfaces carrying white text. Never put white text on the bright link value (3.0:1).

**The Graphite Step Rule.** Surfaces separate by lightness alone: black page, graphite tile, raised graphite control. Never add a fourth step, a tint, or a border around a tile.

## Typography

**Display Font:** Inter (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Inter (same stack)

**Character:** One neo-grotesque doing everything, standing in for the SF Pro of the reference style. Headings are heavy and tightly tracked so large sizes read as a single shape; body stays at regular weight with a whisper of negative tracking for an engineered, even texture.

### Hierarchy
- **Display** (600, clamp 44px to 80px, 1.05): the name in the hero and the contact headline. At most two per page.
- **Hero Stat** (600, clamp 56px to 88px, 1.0, tabular numerals): the single hero number inside each project tile. The largest type on any tile.
- **Headline** (600, clamp 36px to 56px, 1.07): section headlines, written as short statements ending in a period. Wide project tiles promote their name to this size.
- **Title** (600, clamp 32px to 44px, 1.08): project names in half-width tiles; the degree name sits just above it (clamp 30px to 48px, 1.1, balanced wrap).
- **Subhead** (600, clamp 24px to 36px, 1.15, Quiet Gray): the line under the hero name.
- **Lead** (400, 21px, Quiet Gray): section intros, the school line, the contact invitation. The hero meta line is the same role at 19px (17px on phones), capped at 40em. Project taglines are a fluid lead (clamp 18px to 24px, 1.32, -0.02em), capped at 24em.
- **Body** (400, 17px, 1.5): certification names, spec rows, the pill and chevron link labels (500 for the pill).
- **Body Small** (400, 15px, 1.5): tile detail paragraphs and bullets, issuer and date columns.
- **Label** (600, 13px): the small headings inside a tile's detail block. Nav links use the same size at 400 in Quiet Gray; the brand name is 14px 600; the stat caption is 14px Quiet Gray.
- **Micro** (500, 12px): the language toggle; the footer uses 12px at 400 in Fine-Print Gray.

### Named Rules
**The Tightening Rule.** Tracking tightens as size grows: -0.011em body, -0.02em taglines, -0.025em subhead, -0.03em headlines and titles, -0.035em display, -0.04em hero stat. Never track large type positively, never set display at 400.

**The One Face Rule.** Inter only, at 400, 500 and 600. Hierarchy comes from size, weight and gray tier, never from a second family, italics or uppercase.

## Layout

A single centered column, min(1080px, 100% minus two 16px gutters), with the 16px side gutter at every width. Blocks are stacked sections with large vertical air: 40px above and 120px below each content block (24px and 88px on phones); the hero gets 136px and 120px (88px and 80px on phones), the contact block 80px and 140px (56px and 96px).

Each block opens with a centered head (headline, optional lead, 48px below; 32px on phones). Project tiles sit in a two-column grid with a 16px gap; a wide tile spans both columns and lays its three detail groups side by side, collapsing to one column below 900px. Below 734px every tile goes single-column and tile padding drops to 48px 24px 40px.

Lists are rows, not cards: certifications are a three-column row (name, issuer, right-aligned date in a fixed 120px column) that reflows on phones to the name above issuer and date. Tools are a definition table, one quarter label to three quarters value, stacking on phones.

Spacing follows a 4px base with 8px steps for most gaps (4, 8, 16, 24, 40, 48, 64), plus a recurring 28px for inline groups (nav links, hero actions, the rule above tile details).

### Named Rules
**The Stage-Then-Fine-Print Rule.** Headlines, tile heads and hero numbers are centered; anything read line by line (tile details, cert rows, spec rows) is left-aligned and full width. Never center a list or a paragraph longer than two lines.

## Elevation & Depth

The system is flat. No element casts a shadow, glows, or carries a gradient. Depth is tonal: Stage Black, then Graphite Tile, then Raised Graphite, with Hairline rules dividing content inside or beneath them. The only material effect is the sticky nav bar: Stage Black at 80% opacity over a saturate(180%) blur(20px) backdrop, with a 1px white-at-8% bottom edge, so content slides under it like frosted glass.

### Named Rules
**The No-Shadow Rule.** No box-shadow, text-shadow, glow or gradient anywhere. If something needs to stand forward, it moves one graphite step lighter.

## Shapes

Two silhouettes. Containers are generously rounded rectangles (24px) with no border; every interactive control that carries a fill is a full pill (980px), including the skip link and the language toggle. Focus rings round to 6px with a 3px offset. Rules are 1px Hairline, horizontal only. The chevron (an open 7 by 12px stroke, 1.8px, round caps) is the only glyph, drawn as inline SVG in the current text color.

## Components

### Buttons
Confident and quiet: one filled shape per group, never two side by side.
- **Shape:** full pill (980px), minimum 44px tall.
- **Pill (primary):** Action Blue fill, Label White text, 17px at 500, padding 11px 22px. Used for the one primary action of a block (the hero call to action, the email address).
- **Hover / Press:** fill shifts to Action Blue Pressed over 160ms; on press the pill scales to 0.97 with the system ease-out. Press scaling is removed under reduced motion.
- **Focus:** 2px Keynote Blue outline, 3px offset.

### Chevron Link (secondary action)
- **Style:** Keynote Blue text at 17px with a trailing chevron, 6px gap, no underline at rest.
- **Hover:** underline appears, offset 0.2em.
- **Use:** paired beside a pill (28px apart), or alone as the repository link at the foot of a project tile.

### Navigation
- **Bar:** sticky, 48px tall, frosted Stage Black (see Elevation). Brand name at left (14px 600, Paper White); links pushed right with 28px gaps (13px, Quiet Gray, Paper White on hover over 160ms); language toggle last.
- **Language toggle:** two pill buttons (ES / EN), 12px 500, Fine-Print Gray; the pressed language sits on Raised Graphite in Paper White, driven by aria-pressed.
- **Mobile (below 734px):** every nav link except the last (Contact) is hidden; gaps tighten to 16px.

### Project Tile (signature)
The product-launch card. A Graphite Tile, 24px radius, centered head: project name (Title, or Headline when wide), tagline in Quiet Gray, then the hero stat 36px below: one large tabular number in Paper White with a 14px Quiet Gray caption naming exactly what it measures. Beneath, after 40px, a Hairline rule and a left-aligned detail block of labelled groups (what it does; my part, with a disc list in Fine-Print Gray markers; technologies joined by middle dots). The foot is a chevron link to the repository or, when private, a Fine-Print Gray note.
- **Padding:** 56px 40px 48px; wide 72px 56px 56px; phones 48px 24px 40px.
- **Wide variant:** spans both grid columns; details in three columns above 900px.

### Degree Tile
A Graphite Tile with only centered type: the degree name over the school and year in Quiet Gray at 21px, 10px apart. Padding 64px 40px (48px 24px on phones). No number and no details: it is a statement, not a card.

### Certifications List
A 24px 600 heading 64px below the degree tile, then Hairline-ruled rows (16px vertical padding): name in Paper White body, issuer in Quiet Gray 15px, month-and-year date in Fine-Print Gray 15px tabular numerals, right-aligned. Issuers are plain text; a linked issuer, when one exists, takes a Hairline underline that turns Keynote Blue on hover.

### Spec Table
The tools list as a product spec sheet: a definition list with a Hairline top and Hairline row rules, 24px row padding, category in 17px 600 Paper White, values as a comma-separated run in Quiet Gray at line-height 1.6.

### Contact Block
A centered closing stage on the bare page (no tile): Display headline, a Quiet Gray lead capped at 34em, then the pill (the email address) beside a chevron link to GitHub.

### Reveal Motion
Tiles, section heads, the certifications list, the spec table and contact elements fade up 16px once as they enter the viewport: 600ms on the system ease-out, triggered 8% before the bottom edge. Content is visible by default; only elements still below the fold are pre-hidden, and only when the browser can animate. Under reduced motion nothing moves and smooth scrolling is off.

## Do's and Don'ts

### Do:
- **Do** keep every surface on the three graphite steps (#000000, #161617, #1d1d1f) and separate content inside them with 1px Hairline (#2c2c2e) rules.
- **Do** give every project tile exactly one hero number with a caption that names what it measures, and make that number true.
- **Do** set every heading and number in Inter 600 with negative tracking that tightens as size grows (-0.03em headlines, -0.035em display, -0.04em stats).
- **Do** pair one blue pill with at most one chevron link per action group, 28px apart.
- **Do** center stage elements and left-align anything read line by line.
- **Do** keep text at Fine-Print Gray (#8e8e93) or brighter; nothing dimmer carries words.
- **Do** keep the reveal visible by default and remove it under reduced motion.

### Don't:
- **Don't** use gradients, shadows, glow or neon anywhere.
- **Don't** introduce a second accent hue, or use blue on non-interactive text.
- **Don't** put white text on the bright link blue (#2997ff); filled controls use the action blue (#0071e3).
- **Don't** add developer-template chrome: terminal windows, code-editor cards, skill bars or percentage meters.
- **Don't** add borders around tiles or a fourth surface tone.
- **Don't** add a second typeface, italics or uppercase labels to create hierarchy.
- **Don't** add looping, parallax or hover-lift motion; the fade-up and the 0.97 press are the whole vocabulary.
