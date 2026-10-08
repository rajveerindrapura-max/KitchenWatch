# KitchenWatch Marketing Website

Public marketing and demo booking website for **KitchenWatch** — inventory control, transfer management, and rupee wastage tracking built specifically for Indian restaurants, cafes, bakeries, and cloud kitchens (from 1 to 10+ outlets). Works alongside an existing POS.

---

## Core Principles & Design Rules

1. **Show, don't tell:** Every section features an animation or live visual explaining the idea first; text only labels it.
2. **Strict Word Economy:** Hero headline ≤ 6 words; section heading ≤ 7 words; supporting line ≤ 14 words; FAQ answers strictly ≤ 30 words; no paragraph longer than 2 lines.
3. **No Fake Social Proof:** Zero fake testimonials, logos, ratings, or user metrics. Social proof is earned through transparency, founder direct line, and an early-access pilot program.
4. **Zero Emojis:** Pure Lucide React icons used sparingly.
5. **Meaningful Semantic Color System:**
   - **Blue** (`#2563EB` / `#EFF6FF`): Brand & primary actions
   - **Sky** (`#38BDF8` / `#E0F2FE`): Highlights & 3D accents
   - **Teal** (`#0D9488` / `#CCFBF1`): Transfers between outlets
   - **Emerald** (`#15803D` / `#DCFCE7`): Healthy stock, savings, and success
   - **Amber** (`#B45309` / `#FEF3C7`): Low-stock warnings & expiry
   - **Coral** (`#DC2626` / `#FEE2E2`): Food wastage & losses
   - **Violet** (`#7C3AED` / `#F3E8FF`): Roles & permissions

---

## 11 Home Sections

1. **Hero**: Headline *"Know your stock. Move it where it's needed."* with italic serif *"stock"*, 3D floating inventory scene, primary/secondary CTA, and POS trust line.
2. **Problem & Benefits** (`#problem`): Scroll-linked word highlight paragraph showing paper/spreadsheet/WhatsApp chaos and draining stock bar, transitioning into 4 live micro-visuals (filling basmati rice bar, rolling rupee wastage counter, inter-outlet SVG packet animation, and instant branch toggle).
3. **Interactive Product Demo** (`#product`): 30-second multi-outlet simulator featuring 3 scenarios: (1) Cross-outlet overview, (2) Inter-outlet transfer with audit ledger, (3) Mobile worker deduction with undo.
4. **Features Bento Grid** (`#features`): Semantic color-mapped tiles (multi-outlet dashboard, stock movement ledger, low stock alerts, batch expiry, transfers, wastage in rupees, roles, and table QR ordering labelled "Coming soon").
5. **How It Works** (`#how-it-works`): Pinned dark `#0B1220` step story on desktop and responsive stack on mobile.
6. **Savings Estimator** (`#calculator`): Interactive slider calculator (outlets, monthly purchases, wastage %, target reduction) calculating monthly/yearly rupee recovery and suggested plan.
7. **Who It Is For** (`#who-its-for`): 5 hospitality audience cards, violet role tabs (Owner, Manager, Worker), and honest comparison table without competitor names.
8. **Pilot Program & Roadmap** (`#pilot`): Early-access partner benefits, founder support pledge, and Now/Next/Later trajectory.
9. **Pricing** (`#pricing`): Monthly/Yearly toggle (2 months free), Starter, Growth (Recommended with blue border), and Business tiers with Indian rupee formatting (`₹2,499`, `₹4,999`, etc.).
10. **About Us** (`#about`): Mission, design beliefs, 4 operational principles, and flag-controlled founder block.
11. **FAQ** (`#faq`): 13 direct answers strictly ≤ 30 words with accessible accordion.
12. **Final CTA** (`#cta`): Dark `#0B1220` with sky glow, instant WhatsApp chat link, and Zod/React Hook Form demo booking with honeypot & UTM capture.

---

## Dedicated Routes

- `/` — Complete 11-section homepage
- `/pricing` — Dedicated pricing & savings estimator page
- `/about` — Dedicated about, philosophy, and roadmap page
- `/contact` — Dedicated demo booking & WhatsApp contact page
- `/privacy` — Privacy policy with draft legal review banner
- `/terms` — Terms of service with draft legal review banner
- `/refund-policy` — Cancellation & 14-day free trial guarantee
- `/*` — Accessible 44px 404 page

---

## Tech Stack

- **Framework:** React 18 + Vite + TypeScript (Strict mode)
- **Styling:** Tailwind CSS v3 with CSS variables & custom color tokens
- **Animations:** Framer Motion 11 + GSAP + Lenis Smooth Scroll
- **3D Graphics:** Three.js / @react-three/fiber / @react-three/drei (lazy-loaded)
- **Forms & Validation:** React Hook Form + Zod v4 + `@hookform/resolvers`
- **Typography:** Plus Jakarta Sans (headings), Inter (body), Instrument Serif (italic emphasis)

---

## Environment Variables

Configure these in `.env` or in your hosting provider:

```bash
VITE_APP_URL="https://app.kitchenwatch.in"
VITE_WHATSAPP_NUMBER="919876543210"
VITE_BOOKING_URL="https://cal.com/kitchenwatch/demo"
VITE_LEAD_ENDPOINT="/api/lead"
VITE_ANALYTICS_ID=""
```

---

## Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run TypeScript typecheck
npx tsc --noEmit

# Production build with static route prerendering
npm run build

# Preview build locally
npm run preview
```

See [CONTENT_TODO.md](file:///Users/rajveersingh/Downloads/kitchenwatch%20website/CONTENT_TODO.md) for the checklist of founder items requiring confirmation before public launch.
