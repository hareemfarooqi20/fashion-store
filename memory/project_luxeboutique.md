---
name: LuxeBoutique Fashion Store Project
description: Full-stack Next.js 15 fashion boutique website built at D:\projects\fashion-store
type: project
---

LuxeBoutique — a production-ready Next.js 15 fashion boutique site at D:\projects\fashion-store.

**Why:** User requested a full-featured online store for fashion boutiques with benefits for both customers and business owners.

**How to apply:** When asked to extend or modify this project, refer to the existing structure below.

## Tech Stack
- Next.js 15 (App Router, TypeScript, Tailwind CSS)
- framer-motion, lucide-react
- Brand color: #C5956A (warm gold/caramel)

## Pages Built
- `/` — Home (Hero + Brands + Collections + Products + Stats + Why Us + Testimonials + CTA)
- `/shop` — All products with sidebar filters
- `/collections/[category]` — Collection pages (women, men, accessories, new-arrivals)
- `/services` — Styling services with pricing cards
- `/booking` — 4-step booking wizard (service → date/time → goal → contact)
- `/about` — Story + team + FAQ accordion
- `/contact` — Contact form + hours + info

## Key Files
- `src/lib/data.ts` — All mock data (products, collections, services, testimonials, team, FAQ, brands)
- `src/types/index.ts` — TypeScript interfaces
- `src/app/globals.css` — Brand tokens and utility classes
- `src/components/layout/Navbar.tsx` — Sticky nav with dropdown + mobile menu
- `src/components/booking/BookingWizard.tsx` — 4-step wizard
- `src/components/ui/FloatingBooking.tsx` — Pulsing FAB with popup card
