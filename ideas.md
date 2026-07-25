# 7Band Inc. — Design Brainstorm

## Three Stylistic Approaches

### 1. Civic Warmth (Probability: 0.07)
**Theme:** Warm, community-centered design with earthy tones, hand-drawn accents, and approachable typography.
**Intent:** Feels like a neighborhood organization — trusted, grassroots, human. Warm amber, clay, and cream tones with a bold serif display font.

### 2. Institutional Clarity (Probability: 0.03)
**Theme:** Clean, structured, government-adjacent design with rigid grids, strong typography hierarchy, and muted blues.
**Intent:** Communicates authority and transparency. Feels like a credible institution. Very formal, minimal decoration.

### 3. ✅ CHOSEN — Elevated Civic (Probability: 0.06)
**Theme:** A premium nonprofit aesthetic that blends deep authority with hopeful momentum — structured yet human, serious yet welcoming.
**Intent:** Positions 7Band Inc. as a forward-thinking, trustworthy organization that takes its mission seriously while remaining accessible to the community it serves.

---

## Chosen Approach: Elevated Civic

### Design Movement
Contemporary Civic Design — drawing from modern institutional design, editorial journalism, and community-centered UX. Think Brookings Institution meets IDEO's social impact work.

### Core Principles
1. **Purposeful Asymmetry** — Offset layouts, left-anchored text blocks, and diagonal section transitions create energy without chaos.
2. **Typographic Authority** — Large, confident headings in a bold serif or high-contrast sans-serif carry the mission. Body text is generous and readable.
3. **Restrained Color Drama** — Deep Navy as the dominant authority color, Emerald Green as the growth/hope accent, Gold for calls-to-action and highlights. White space breathes.
4. **Photography-First** — Large, full-bleed imagery of real community moments anchors every major section.

### Color Philosophy
- **Deep Navy** `#0D2B4E` — Authority, trust, stability. Used for headers, nav, and dark sections.
- **Emerald Green** `#1A7A4A` — Growth, education, hope. Used for accents, icons, and program highlights.
- **Warm Gold** `#D4A017` — Opportunity, achievement, energy. Used for CTAs, badges, and highlights.
- **Off-White** `#F8F7F4` — Warmth, openness. Used as the primary background.
- **Light Gray** `#E8E6E1` — Subtle section dividers and card backgrounds.

### Layout Paradigm
Asymmetric editorial layout: hero sections use a 60/40 split (text left, image right), program cards use a staggered masonry-inspired grid, and section transitions use diagonal clip-paths to create visual flow. Navigation is a sticky top bar that transitions from transparent-over-hero to solid navy on scroll.

### Signature Elements
1. **The 7-Band Stripe** — A 7-segment horizontal bar in varying widths (representing the 7 bands/programs) used as a decorative motif in headers, dividers, and cards.
2. **Diagonal Section Cuts** — Sections transition with a subtle diagonal clip-path, suggesting forward momentum.
3. **Gold Underline Accents** — Key headings and CTAs feature a gold underline or left-border accent.

### Interaction Philosophy
Interactions should feel deliberate and confident — not flashy. Buttons scale slightly on hover. Cards lift with a soft shadow. Navigation items have a gold underline slide-in on hover. Page transitions are smooth but fast.

### Animation
- Entrance animations: elements fade up from `translateY(20px)` to `translateY(0)` with `opacity: 0 → 1` over 400ms ease-out, staggered 60ms per item.
- Hover states: cards lift `translateY(-4px)` with shadow deepening over 200ms.
- Nav: gold underline slides in from left on hover, 150ms ease-out.
- Scroll-triggered reveals for stats counters and testimonials.
- Respect `prefers-reduced-motion`.

### Typography System
- **Display/Headings:** `Playfair Display` — Bold, authoritative serif. Used for H1, H2, hero text.
- **UI/Body:** `Inter` — Clean, highly readable sans-serif for body text, navigation, and UI elements.
- **Accent:** `Inter` semibold with letter-spacing for labels, badges, and section titles.
- Scale: 4xl–6xl for heroes, 2xl–3xl for section headings, base–lg for body.

### Brand Essence
**7Band Inc. — Community-powered education for a stronger tomorrow.** Purposeful. Grounded. Transformative.

### Brand Voice
Headlines are direct and mission-forward. CTAs are inviting, not pushy. Microcopy is warm and human.
- Example headline: *"Building Futures, One Community at a Time"*
- Example CTA: *"Join the Movement — Volunteer Today"*
- Banned: "Welcome to our website", "Get started today", "Learn more about us"

### Wordmark & Logo
A bold geometric "7" mark with a subtle band/stripe motif — the numeral 7 with 7 horizontal lines crossing through it, suggesting both the number and the concept of layers/bands of opportunity. Navy fill with a gold accent stripe.

### Signature Brand Color
Deep Navy `#0D2B4E` — unmistakably 7Band Inc.

---

## Style Decisions
(Appended after style review)
