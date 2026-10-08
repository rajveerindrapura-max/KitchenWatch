# KitchenWatch — Content & Founder Confirmation Checklist

This document tracks all copy, links, contact details, and flags marked with `confirm: true` or `TODO` in `src/content/site.ts`. The founder should confirm or update these items before launching publicly.

## 1. Domain & App Routing
- [ ] **Production Domain:** Confirm whether `kitchenwatch.in` is the final domain.
- [ ] **App URL (`appUrl`):** Currently set to `https://app.kitchenwatch.in`. Confirm dashboard login/signup URL.
- [ ] **Booking URL (`bookingUrl`):** Currently set to `https://cal.com/kitchenwatch/demo`. Provide Cal.com or Calendly link.

## 2. Customer Contact Channels
- [ ] **WhatsApp Number (`whatsappNumber`):** Currently set to `919876543210`. Provide verified WhatsApp business phone number.
- [ ] **Contact Email (`email`):** Currently set to `hello@kitchenwatch.in`.
- [ ] **Support Phone (`phone`):** Currently placeholder `+91 98765 43210`.
- [ ] **Operating Address (`address`):** Add registered office or business address in India for legal footer requirements.

## 3. Commercials & Pricing Plans
- [ ] **Starter Tier:** Currently ₹2,499/mo (₹1,999/mo yearly). Confirm pricing for 1-2 outlets.
- [ ] **Growth Tier (Recommended):** Currently ₹4,999/mo (₹3,999/mo yearly). Confirm pricing for up to 6 outlets.
- [ ] **Business Tier:** Currently ₹8,999/mo (₹7,499/mo yearly). Confirm pricing for 7+ outlets.
- [ ] **GST Treatment:** Confirm that GST is charged extra on all invoices.

## 4. Founder & Pilot Program
- [ ] **Founder Name:** Currently placeholder in `site.ts`. Set `flags.showFounder: true` once name, bio, and photo are provided.
- [ ] **Founder Bio & Photo:** Place founder portrait at `/public/founder.jpg`.
- [ ] **Founder Video (Optional):** 30–60 second video explaining why KitchenWatch was built (`flags.showFounderVideo: true`).
- [ ] **Pilot Terms:** Confirm pilot benefits (free setup, direct founder line, locked lifetime rate).

## 5. Technical & Operational Claims
- [ ] **Response Time Promise:** Currently "Replies within 2 hours during kitchen operating hours". Confirm SLA.
- [ ] **Offline Mode Sync:** FAQ honestly discloses that mobile phone internet is needed to sync, with offline queuing planned.
- [ ] **Lead Endpoint (`leadEndpoint`):** Connect `/api/lead` to Google Sheets, CRM, or email relay.

## 6. Legal & Regulatory Review
- [ ] **Privacy Policy:** Review `src/pages/LegalPage.tsx` with a legal professional.
- [ ] **Terms of Service:** Review SaaS subscription and limitation of liability terms.
- [ ] **Refund Policy:** Confirm 14-day free trial policy and payment cancellation terms.
