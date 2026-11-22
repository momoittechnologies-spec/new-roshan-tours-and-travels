# COMPREHENSIVE AUDIT REPORT: NEW ROSHAN TOURS & TRAVELS
**Project:** NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.  
**Auditor:** MOMO IT TECHNOLOGIES  
**Environment:** Vite 8 + React 19 + TypeScript + Tailwind CSS v4  
**Date:** November 22, 2026  
**Status:** Audit Completed (Pre-Implementation Phase)

---

## 1. Confirmed Working Features (Verified in Browser & Terminal)

1. **Build & Bundler Stability:**
   - Production build runs cleanly via `tsc -b && vite build` in ~450ms.
   - Production bundle size: HTML (2.13 kB), CSS (64 kB), JS (343 kB / 96 kB gzipped).
   - Zero console errors or unhandled exceptions on initial page load (confirmed 200 OK via Browser agent).
2. **Interactive Departure Schedule & Filters:**
   - Departure batch filters (*All Batches*, *Fast Filling*, *Seats Open*) dynamically update the schedule list without layout shifts.
   - Non-refundable booking policy and custom date inquiry links function as intended.
3. **Interactive Umrah Fare Estimator:**
   - Reactively computes total package pricing based on Adults (1-10+), Children (0-5), and Room Sharing (Quad, Triple, Double).
   - Correctly updates prices: Quad (₹1,15,000/person), Triple (+₹10k/person), Double (+₹20k/person), Child (₹85,000).
   - Correctly constructs URL-encoded WhatsApp messages.
4. **Modals & Lightbox:**
   - 'Book Umrah' header CTA and card CTA open the `BookingModal` with batch prefilled.
   - ₹999 Draw trigger opens the `LuckyDrawModal`.
   - Gallery cards open a high-resolution lightbox preview with proper captions and dismissal.
5. **Mobile Responsiveness (375px Viewport):**
   - Zero horizontal scrollbar/overflow across all 14 container sections.
   - Hamburger drawer toggles smoothly; all navigation links and CTAs fit within mobile viewport.
   - Minimum interactive touch target heights >= 44px on mobile buttons.
6. **Local Visual Assets:**
   - 5 authentic high-res business assets served locally from `public/assets/` (`store-office.jpg`, `umrah-schedule.jpg`, `lucky-draw.jpg`, `kadapa-banner.jpg`, `grand-opening.jpg`).

---

## 2. Confirmed Bugs & Code Quality Issues

1. **Keyboard Accessibility Defect (Escape Key on Modals):**
   - Neither `BookingModal.tsx` nor `LuckyDrawModal.tsx` nor the `GallerySection.tsx` lightbox listen for the physical `Escape` key event (`keydown`), requiring mouse/touch clicks to dismiss.
2. **React Compiler / Cascading Render Warning:**
   - `src/components/BookingModal.tsx:24:7`: `react(set-state-in-effect)` warning due to calling `setSelectedBatch(prefilledBatch)` synchronously inside `useEffect`.
3. **Linter Warnings (42 Unused Variables & Imports):**
   - Oxlint reported 42 unused identifier imports across 10 components (e.g., `Building`, `Calendar`, `Award`, `Compass` in `AboutSection.tsx`, `Mail`, `Send` in `ContactSection.tsx`, etc.).
4. **Missing ARIA Dialog Attributes:**
   - Modals lack `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` attributes for screen readers.
   - Accordion FAQ buttons lack `aria-expanded="true/false"` and `aria-controls`.
   - Mobile hamburger menu lacks `aria-expanded` state.

---

## 3. Missing Features (Per Master Transformation Prompt)

1. **Structured Umrah Package Cards (Phase 3.D):**
   - The current site only features the departure schedule table; it lacks dedicated, structured Umrah Package Tier cards (e.g., Economy, Deluxe, Executive, VIP) showing duration, inclusions/exclusions, flight details, room options, and individual package details.
2. **Pilgrimage Journey Guide Timeline (Phase 3.I):**
   - Missing the recommended 7-step pilgrimage journey timeline (Initial Enquiry -> Package Consultation -> Documentation Guidance -> Booking Confirmation -> Pre-Departure Briefing -> Umrah Journey -> Return Assistance).
3. **Centralized WhatsApp Utility (Phase 5):**
   - Currently, raw WhatsApp URL strings with inline `encodeURIComponent` are duplicated across 9 different files instead of a single, validated, typed utility `src/utils/whatsapp.ts`.
4. **Search Engine Optimization (SEO) Assets (Phase 6):**
   - Missing `public/robots.txt`.
   - Missing `public/sitemap.xml`.
   - Missing JSON-LD structured data (`schema.org/TravelAgency`) for Kadapa local discovery.
   - Missing canonical URL tag (`https://new-roshan-tours-and-travels.vercel.app/`).
5. **Formal Legal Policies (Phase 3.M & Phase 4):**
   - Missing Privacy Policy, Terms & Conditions, and Booking/Cancellation Policy modals or anchors.

---

## 4. UX & Luxury Design System Issues

1. **Color Palette Discrepancy (Phase 2):**
   - The current styling uses default Tailwind saturated emeralds (`#022c22`, `#064e3b`) and high-saturation bright amber gradients (`#f59e0b`, `#fbbf24`), with glowing radial dots.
   - The master design specification requires a refined, luxury Islamic travel palette:
     - Primary dark emerald: `#102D29`
     - Secondary emerald: `#174C40`
     - Premium muted gold: `#C8A45D`
     - Warm ivory: `#F8F5ED`
     - Primary text: `#26332F`
     - Pure white: `#FFFFFF`
2. **Hero Copy & Visual Focus (Phase 3.B):**
   - The current hero headline is generic. Master prompt specifies:
     - Headline: *"Your Sacred Journey Begins with Trust."*
     - Supporting text: *"Thoughtfully planned Umrah & Ziyarath journeys from Kadapa."*
     - Clear primary CTA: *"Explore Umrah Packages"*, secondary CTA: *"Enquire on WhatsApp"*.
   - Replace the busy right-hand schedule duplicate with a single authentic high-resolution visual of Makkah/Madinah.
3. **Overpowering Promotion (Phase 4):**
   - The ₹999 Lucky Draw section currently occupies a huge visual footprint with bright borders and looks like a lottery ticket checkout, which can undermine the solemn, sacred dignity of an Umrah pilgrimage provider.
   - It must be repositioned as an optional community initiative, clearly marked as subject to official business/regulatory terms, and kept secondary to package booking.

---

## 5. Security & Privacy Risks

1. **Client-Side Form Handling:**
   - Currently, all forms directly format WhatsApp URLs on the client. While this prevents server-side database vulnerabilities (no SQL injection or backend leak risks), it does not store lead records or validate phone numbers rigorously before opening WhatsApp.
2. **Lucky Draw Consumer Protection:**
   - Collecting personal data for a lucky draw without explicit terms of participation, draw date, or regulatory disclaimer presents legal compliance risks under Indian consumer and lottery regulations.
   - Recommendation: Add clear disclaimer that the scheme is an in-office promotional program subject to official terms, disable any misleading "guaranteed win" language, and channel all inquiries to official office verification.

---

## 6. SEO & Performance Issues

1. **External Unsplash Images:**
   - Makkah and Madinah hotel cards currently load remote images from Unsplash (`images.unsplash.com`). These introduce third-party network latency and lack explicit width/height dimensions (risk of layout shift).
2. **Missing OpenGraph Production Domain:**
   - OpenGraph meta tags use relative paths (`/assets/umrah-schedule.jpg`) instead of absolute production URLs (`https://new-roshan-tours-and-travels.vercel.app/assets/...`), preventing WhatsApp and Facebook from generating rich link preview cards.
3. **Google Fonts Loading:**
   - Multiple Google font families are loaded synchronously. Can be optimized with `font-display: swap` and preconnect links.

---

## 7. Prioritized Recommendations

| Priority | Category | Action Item |
| :--- | :--- | :--- |
| **P0 (Critical)** | **Design System** | Implement the required luxury palette (`#102D29`, `#174C40`, `#C8A45D`, `#F8F5ED`, `#26332F`) in Tailwind v4 theme and remove oversaturated neon gradients. |
| **P0 (Critical)** | **Code Health** | Resolve all 42 Oxlint warnings, fix `react(set-state-in-effect)`, and add `Escape` key listeners to all modals. |
| **P1 (High)** | **Architecture** | Build centralized `src/utils/whatsapp.ts` utility and replace all fragmented inline links. |
| **P1 (High)** | **New Components**| Build dedicated `UmrahPackagesSection.tsx` (Package Cards) and `JourneyGuideSection.tsx` (7-step timeline). |
| **P1 (High)** | **SEO & Discovery**| Add `robots.txt`, `sitemap.xml`, canonical tags, and JSON-LD `TravelAgency` Schema. |
| **P2 (Medium)** | **Restraint / Ethics**| Restructure Lucky Draw into a dignified community initiative with clear legal disclaimer and business terms notice. |
| **P2 (Medium)** | **Accessibility**| Add ARIA dialog attributes, focus traps, and accordion `aria-expanded` controls. |
| **P2 (Medium)** | **Legal & Trust**| Add Policy Modals (Terms, Privacy, Refund/Cancellation) in the footer. |
