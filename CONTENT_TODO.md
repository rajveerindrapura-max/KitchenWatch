# KitchenWatch — Content Confirmation Checklist (CONTENT_TODO.md)

This document tracks all placeholder copy, environment endpoints, founder details, and commercial terms in `src/content/site.ts` marked with `confirm: true`.

Before launching publicly, the founder or team must confirm or replace each of the items below. When an item is confirmed, update `src/content/site.ts` and set its `confirm` flag to `false`.

---

## 1. External URLs & Environment Endpoints (`site.config`)
| Item | Current Value | Required Action / Confirmation |
| :--- | :--- | :--- |
| **WhatsApp Business Number** | `919876543210` | Replace with actual business WhatsApp number (with country code `91`, without `+` or spaces). |
| **Demo Booking Link** | `https://cal.com/kitchenwatch/demo` | Connect founder's Cal.com or Calendly booking link for 15-minute screen share. |
| **Web App URL** | `https://app.kitchenwatch.in` | Verify production domain for dashboard sign-in (`/login`) and trial signup (`/signup`). |
| **Lead Webhook Endpoint** | `/api/lead` | Configure webhook URL (Zapier, Make, Slack, or CRM webhook) in `.env` as `VITE_LEAD_ENDPOINT`. |

---

## 2. Founder Identity & Social Proof Flags (`site.flags`)
| Item | Current Flag | Required Action |
| :--- | :--- | :--- |
| **Founder Name & Bio** | `showFounder: false` | Set to `true` in `site.flags` after providing real founder full name, role, bio, and headshot in `public/founder-placeholder.jpg`. *(Auto-hides fake names when false).* |
| **Founder Video** | `showFounderVideo: false` | Set to `true` when a 30-60 second Loom / YouTube walkthrough is recorded. |
| **Customer Logos** | `showCustomerLogos: false` | Kept `false` until pilot customers provide formal logo permission. *(Never display fake logos).* |
| **Customer Testimonials** | `showTestimonials: false` | Kept `false` until verified pilot reviews are gathered. *(Never display fake reviews).* |

---

## 3. Commercial Pricing & Terms (`site.pricing`)
| Plan Tier | Outlets | Monthly (INR) | Yearly (INR) | Confirmation Needed |
| :--- | :--- | :--- | :--- | :--- |
| **Starter** | 1 to 2 outlets | ₹2,499 | ₹1,999/mo | Confirm base subscription pricing & tax inclusion (GST extra). |
| **Growth (Recommended)** | Up to 6 outlets | ₹4,999 | ₹3,999/mo | Confirm recommended tier pricing for multi-outlet restaurants. |
| **Business** | 7+ outlets | ₹8,999 | ₹7,499/mo | Confirm large group tier pricing. |

---

## 4. Pilot Program Commitments (`site.pilot`)
- [ ] Confirm whether all early pilot partners receive **free 1-on-1 setup assistance**.
- [ ] Confirm availability of **direct WhatsApp founder communication**.
- [ ] Confirm **founding-partner locked lifetime pricing**.

---

## 5. Contact Details & Legal Disclaimers (`site.footer`)
- [ ] **Registered Business Address**: Provide legal entity name and registered office address (e.g., Bengaluru / Mumbai).
- [ ] **Support Email**: Confirm official inbound email address (currently `hello@kitchenwatch.in`).
- [ ] **Support Phone**: Confirm official inbound helpline number.
- [ ] **Legal Review**: Complete formal legal counsel review of `/privacy`, `/terms`, and `/refund-policy` before removing the `Draft Document` disclaimer banner.
