# KitchenWatch Marketing Website

Public marketing and demo booking website for **KitchenWatch** — inventory control, transfer management, and rupee wastage tracking built specifically for Indian restaurants, cafes, bakeries, and cloud kitchens (from 1 to 10+ outlets). Works alongside an existing POS.

---

## Design System: Stripe Meets Apple

The design language synthesizes the refined typography and quiet confidence of **Apple** with the layered UI realism and technical craft of **Stripe**:

- **From Apple:** Tightly tracked headlines (`tracking-[-0.04em]`), generous whitespace, Inter typography, pinned scroll storytelling, blue pill action buttons, blue links ending with chevron, and a thin translucent sticky navigation bar (56px) with backdrop blur and hairline border.
- **From Stripe:** Soft ambient mesh gradient backgrounds, realistic layered product UI cards floating with soft depth (`shadow-float`), precise 1px borders (`#E4E7EC`), bento grids, tabular monospaced numbers (`JetBrains Mono`) in ledgers/tables, and crisp line icons (1.5px stroke).
- **Zero Cartoon / Playful Look:** No thick outlines, no sticker cards, no mascots, and strictly zero emojis anywhere.
- **Strict Role Terminology:** Staff updating inventory on mobile are strictly referred to as **"Employee"** / **"employees"** across all copy, code, and comments.

---

## Core Principles & Design Rules

1. **Show, don't tell:** Every section features a live product UI or animation explaining the idea first; text only labels it.
2. **Strict Word Economy:** Hero headline <= 6 words; section heading <= 7 words; supporting line <= 14 words; card text <= 12 words; FAQ answers strictly <= 30 words; no paragraph longer than 2 lines.
3. **No Fake Social Proof:** Zero fake testimonials, logos, ratings, or user metrics. Social proof is earned through transparency, founder direct line, and an early-access pilot program.
4. **Zero Emojis:** Pure Lucide React icons used with 1.5px stroke.
5. **Color System:**
   - **Base:** `#FBFBFD`, `#F5F5F7`, surface `#FFFFFF`, border `#E4E7EC`, hairline `#EDEFF3`
   - **Text:** Ink `#1D1D1F`, secondary `#4B5563`, muted `#6B7280`
   - **Dark Sections:** `#101218`, text `#F5F5F7`, secondary `#A7AEBB`
   - **Brand:** Blue `#2F6BFF` (hover `#1F55E0`), navy `#0B2A66`, blue-tint `#EEF3FF`
   - **Meaning Colors:** Green `#15803D`, Amber `#B45309`, Red `#B91C1C`, Teal `#0F766E`, Violet `#6D4AE0`

---

## 11 Home Sections

1. **Hero**: Headline *"Know your stock. Move it where it's needed."* with Apple-style tightly tracked typography, soft Stripe mesh gradient, layered product UI card with live movements ledger, overlapping employee phone mockup, and primary/secondary pill CTAs.
2. **Problem & Benefits** (`#problem`): Scroll-linked word highlight paragraph showing paper/spreadsheet/WhatsApp chaos and draining stock bar, transitioning into 4 live product UI cards (filling basmati rice bar, rolling rupee wastage counter, inter-outlet SVG packet animation, and instant branch toggle).
3. **Interactive Product Demo** (`#product`): Multi-outlet simulator with Apple hardware frames (LaptopFrame & MiniPhoneFrame) featuring 3 scenarios: (1) Cross-outlet overview, (2) Inter-outlet transfer with audit ledger, (3) Mobile employee deduction with real-time audit feed.
4. **Features Bento Grid** (`#features`): Clean white surface cards with 1px borders, subtle meaning color accents, and monospaced ledger rows.
5. **How It Works** (`#how-it-works`): Apple-style pinned scroll sequence on dark `#101218` background with responsive stack on mobile.
6. **Savings Estimator** (`#calculator`): Interactive slider calculator (outlets, monthly purchases, wastage %, target reduction) calculating monthly/yearly rupee recovery and suggested plan with JetBrains Mono tabular figures.
7. **Who It Is For** (`#who-its-for`): 5 hospitality audience cards, role tabs (Owner, Manager, Employee), and compact honest comparison table with 1px borders.
8. **Pilot Program & Roadmap** (`#pilot`): Early-access partner benefits, founder support pledge, and Now/Next/Later trajectory with blue accents.
9. **Pricing** (`#pricing`): Monthly/Yearly toggle (2 months free), Starter, Growth (Recommended with blue border), and Business tiers with Indian rupee formatting (`₹2,499`, `₹4,999`, etc.).
10. **About Us** (`#about`): Mission, design beliefs, 4 operational principles, and flag-controlled founder block.
11. **FAQ** (`#faq`): 13 direct answers strictly <= 30 words with clean accessible accordion.
12. **Final CTA** (`#cta`): Dark `#101218` with ambient mesh glow, instant WhatsApp chat link, and Zod/React Hook Form demo booking with honeypot & UTM capture.

---

## Dedicated Routes

- `/` — Complete 11-section homepage
- `/pricing` — Dedicated pricing & savings estimator page
- `/about` — Dedicated about, philosophy, and roadmap page
- `/contact` — Dedicated demo booking & WhatsApp contact page
- `/privacy` — Privacy policy with draft legal review banner
- `/terms` — Terms of service with draft legal review banner
- `/refund-policy` — Cancellation & 14-day free trial guarantee
- `/*` — Accessible 404 page

---

## Tech Stack

- **Framework:** React 18 + Vite + TypeScript (Strict mode)
- **Styling:** Tailwind CSS v3 with CSS variables & custom tokens
- **Typography:** `@fontsource/inter` (weights 400-700), `@fontsource/jetbrains-mono` (weights 400-600)
- **Animations:** Framer Motion 11 + Lenis Smooth Scroll
- **Icons:** Lucide React (1.5px stroke)
- **Forms & Validation:** React Hook Form + Zod v4 + `@hookform/resolvers`
- **Routing & Prerendering:** React Router v6 with static route prerendering for SEO
