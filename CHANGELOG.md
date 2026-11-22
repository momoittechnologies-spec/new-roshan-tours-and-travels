# CHANGELOG: NEW ROSHAN TOURS & TRAVELS (REFINEMENT V2)
**Agency:** MOMO IT TECHNOLOGIES  
**Project:** NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD. (Kadapa)  
**Date:** November 22, 2026

---

## 🎨 1. Luxury Design System & Brand Palette (Step 2)
- Refactored entire visual theme from oversaturated neon greens/yellows to the verified luxury palette:
  - **Deep Emerald:** `#102D29`
  - **Rich Jade:** `#174C40`
  - **Muted Gold:** `#C8A45D`
  - **Warm Ivory:** `#F8F5ED`
  - **Charcoal Text:** `#26332F`
  - **Pure White:** `#FFFFFF`
- Removed all distracting glowing radial dots, oversaturated gradients, and excessive borders.
- Standardized typography across Playfair Display (editorial headings), Plus Jakarta Sans (UI & body copy), and Amiri (Arabic calligraphy).
- Implemented accessible focus rings (`focus-visible:ring-2 focus-visible:ring-[#C8A45D]`) and `@media (prefers-reduced-motion: reduce)` support.

---

## 🏛️ 2. Header & Hero Redesign (Step 3)
- Restructured sticky header with proportional brand crest, clean utility contact bar, and direct WhatsApp / Book Umrah CTAs.
- Redesigned Hero:
  - Adopted emotional, high-trust headline: *"Your Sacred Journey Begins with Trust."*
  - Added concise subtitle: *"Experience thoughtfully planned Umrah & Ziyarath journeys with New Roshan Tours & Travels, Kadapa."*
  - Incorporated genuine Makkah Haram courtyard visual with a dark emerald overlay.
  - Positioned primary CTA (*Explore Umrah Packages*) and secondary CTA (*Enquire on WhatsApp*).
  - Maintained authentic business motto: *"Hamari Zimmedari, Aapka Aitmaad — Allah Aapki Umrah Ko Maqbool Farmaye (Aameen)"*.

---

## 📦 3. New Featured Package Cards Component (Step 5)
- Created `src/components/PackagesSection.tsx`:
  - Structured cards for **Deluxe Saudia Umrah Package** (₹1,15,000), **Classic Group Umrah Package** (₹1,05,000), and **Executive VIP Family Package** (Custom).
  - Detailed duration, departure city, flight specifications, room sharing breakdown, and verified walking distances to Makkah (400m) and Madinah (150m) Harams.
  - Transparent itemized inclusions and exclusions with expandable accordion.
  - Direct WhatsApp booking button pre-filled with package parameters.

---

## 🌟 4. Why Choose New Roshan & Trust Indicators (Step 7)
- Created `src/components/WhyChooseUs.tsx`:
  - 6 verified pillars: Permanent Kadapa Head Office, Direct Saudia Airlines Batches, Walking Proximity to Holy Harams, Nutritious Indian/Hyderabadi Buffets, Multilingual Islamic Guidance, and Price Transparency.
  - Highlighted official inauguration on **3rd July 2026 (Bad Namaz-e-Juma)** by Chief Guest **Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari**.

---

## 🗺️ 5. Pilgrimage Journey Guide Timeline (Step 4 & Phase 3.I)
- Created `src/components/JourneyGuideSection.tsx`:
  - 7-step customer journey:
    1. Initial Enquiry & Consultation
    2. Package Selection
    3. Documentation & Visa Processing
    4. Booking Confirmation
    5. Pre-Departure Briefing & Kit Distribution
    6. Sacred Pilgrimage Journey
    7. Safe Return & Zamzam

---

## 🧮 6. Fare Estimator & Centralized WhatsApp Utility (Step 6 & Phase 5)
- Created `src/utils/whatsapp.ts`:
  - Strongly typed `createWhatsAppUrl()` function with automated URL encoding, country code handling (`919059057239`), and structured message payloads for packages, departures, quotes, and hotel queries.
- Refactored `FareCalculator.tsx`:
  - Bound input controls, live breakdown, and clear indicative price disclaimer.

---

## 🎁 7. Restrained Lucky Draw Review (Step 8)
- Repositioned the ₹999 Lucky Draw scheme to a secondary, calm community initiative section.
- Removed aggressive lottery-style checkout triggers and added clear disclaimers that participation terms, official rules, and verification are conducted in-person at the Kadapa head office.

---

## 📜 8. Legal & Consumer Policy Modals
- Created `src/components/PolicyModal.tsx`:
  - Integrated Privacy Policy, Terms & Conditions, and Cancellation/Refund Policy.
  - Fully accessible with global `Escape` key dismissal, focus trapping, and screen-reader `role="dialog"`.

---

## 🔍 9. Technical SEO & Schema (Step 11)
- Added canonical URL: `https://new-roshan-tours-and-travels.vercel.app/`.
- Generated `public/robots.txt` and `public/sitemap.xml`.
- Added JSON-LD Structured Data for `schema.org/TravelAgency` including address, geolocation, operating hours, phone, and review ratings.
- Added Twitter Card and absolute OpenGraph image tags.

---

## ♿ 10. Accessibility & Code Health Fixes (Steps 12 & 13)
- Fixed all 42 Oxlint linter warnings (0 errors, 0 warnings).
- Fixed `react(set-state-in-effect)` in `BookingModal.tsx`.
- Added physical `Escape` key listeners to all dialogs and the photo lightbox.
- Added `aria-expanded` and `aria-controls` to accordion buttons and mobile menu.
- Added `verbatimModuleSyntax` type imports across all TypeScript files.
