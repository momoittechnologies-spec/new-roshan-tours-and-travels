# IMPLEMENTATION PLAN: NEW ROSHAN TOURS & TRAVELS TRANSFORMATION
**Agency:** MOMO IT TECHNOLOGIES  
**Framework:** Vite 8 + React 19 + TypeScript + Tailwind CSS v4  
**Target:** Production-Grade Luxury Umrah & Ziyarath Web Platform

---

## Stage 1: Design System & Color Palette Foundation (Phase 2)
1. Update `src/index.css` with the exact luxury brand palette:
   - Primary dark emerald: `#102D29` (`--color-emerald-primary`)
   - Secondary emerald: `#174C40` (`--color-emerald-secondary`)
   - Premium muted gold: `#C8A45D` (`--color-gold-muted`)
   - Warm ivory: `#F8F5ED` (`--color-ivory-warm`)
   - Primary text: `#26332F` (`--color-text-primary`)
   - Pure white: `#FFFFFF`
2. Remove oversaturated gradients (`#fef08a`, `#f59e0b`, `#fbbf24`), excessive glowing radial dot backgrounds, and replace with restrained, subtle Islamic architectural styling.
3. Configure accessible focus states (`focus-visible:ring-2 focus-visible:ring-[#C8A45D]`), consistent border radii, and reduced-motion media query support.

---

## Stage 2: Centralized Utilities & Data Architecture (Phases 3 & 5)
1. **WhatsApp Utility (`src/utils/whatsapp.ts`):**
   - Centralize all WhatsApp link creation into a single strongly-typed function `createWhatsAppUrl()`.
   - Support structured inquiries for packages, schedules, custom quotes, and general questions.
   - Include proper URL encoding, country code handling, and fallback behavior.
2. **Structured Package Data (`src/data/travelData.ts`):**
   - Add structured Umrah Package tiers (e.g., Deluxe Umrah Package, Economy Group Package, VIP Custom Package) with duration, hotel proximity, Saudia flight details, and inclusions/exclusions.
   - Add a `lastUpdated` timestamp to departure schedules.
   - Maintain 100% verified Kadapa office data, phone numbers, and official launch details.

---

## Stage 3: Core Section Redesign & New Components (Phase 3 & 4)
1. **Header & Navigation (`src/components/Navbar.tsx`):**
   - Refined logo with `#C8A45D` accent.
   - Simplified, high-converting desktop & mobile menu.
   - Visible WhatsApp inquiry CTA with phone hotline.
   - Keyboard accessible drawer with `aria-expanded` and Esc key support.
2. **Hero Section (`src/components/Hero.tsx`):**
   - Adopt recommended headline: *"Your Sacred Journey Begins with Trust."*
   - Supporting text: *"Thoughtfully planned Umrah & Ziyarath journeys from Kadapa."*
   - Primary CTA: *"Explore Umrah Packages"* (scrolls to packages).
   - Secondary CTA: *"Enquire on WhatsApp"* (direct chat).
   - Replace cluttered schedule preview card with a single authentic high-resolution visual of the Holy Haram courtyard.
3. **Dedicated Package Cards (`src/components/PackagesSection.tsx` - NEW):**
   - Display structured cards for Economy, Deluxe, and Executive packages.
   - Clear starting prices, inclusions (visa, flights, 5★ hotels, food, transport, kit), and one-click WhatsApp booking.
4. **Departure Schedule (`src/components/ScheduleSection.tsx`):**
   - Display verified departure dates with a clear *"Schedule last updated on [Date]"* badge.
   - Filter pills with accessible states.
   - Non-refundable policy notice.
5. **Pilgrimage Journey Guide Timeline (`src/components/JourneyGuideSection.tsx` - NEW):**
   - 7-step visual timeline:
     1. Initial Enquiry
     2. Package Consultation
     3. Documentation Guidance
     4. Booking Confirmation
     5. Pre-Departure Briefing & Kit Distribution
     6. Umrah & Ziyarath Sacred Journey
     7. Return Travel Assistance
6. **Why Choose Us Section (`src/components/WhyChooseUs.tsx` - NEW):**
   - Verifiable strengths: Kadapa headquarters, Saudia direct flights, hotels within 150m/400m, experienced Indian Muallims, authentic Hyderabadi catering.
7. **Refined Lucky Draw Review (`src/components/LuckyDrawSection.tsx`):**
   - Redesign as a secondary, tasteful community initiative banner.
   - Remove aggressive "lottery ticket" checkout appearance.
   - Clearly mark as subject to official business/regulatory terms and office confirmation.
8. **Interactive Fare Estimator (`src/components/FareCalculator.tsx`):**
   - Enhance with clear breakdown, input bounds, indicative price disclaimer, and integration with `createWhatsAppUrl()`.
9. **FAQ & Reviews (`src/components/FAQSection.tsx`, `src/components/ReviewsSection.tsx`):**
   - Add ARIA attributes (`aria-expanded`, `aria-controls`) to accordion buttons.
   - Present authentic Google rating accurately (*5.0 Rating based on verified Google Maps reviews*).
10. **Legal & Compliance Modals (`src/components/PolicyModal.tsx` - NEW):**
    - Provide Privacy Policy, Terms & Conditions, and Booking & Cancellation Policies in accessible modal format.

---

## Stage 4: Code Quality, Linting & Accessibility Fixes (Phases 8 & 9)
1. Clean up all 42 unused identifier warnings across all components.
2. Fix `react(set-state-in-effect)` in `BookingModal.tsx`.
3. Add global `keydown` Escape listener to `BookingModal`, `LuckyDrawModal`, `PolicyModal`, and `GallerySection` Lightbox.
4. Ensure all interactive dialogs have `role="dialog"` and `aria-modal="true"`.

---

## Stage 5: Technical SEO & Discoverability (Phase 6)
1. Create `public/robots.txt` allowing search indexing and pointing to sitemap.
2. Create `public/sitemap.xml` with canonical production URL `https://new-roshan-tours-and-travels.vercel.app/`.
3. Add JSON-LD Structured Data for `schema.org/TravelAgency` inside `index.html` with address, phone numbers, opening hours, coordinates, and Kadapa services.
4. Set canonical tag and absolute OpenGraph image URL.

---

## Stage 6: Verification, QA & Documentation
1. Run `npm run lint` and verify 0 warnings.
2. Run `npm run build` and verify clean production output.
3. Test with browser agent across desktop (1440px) and mobile (375px).
4. Generate `CHANGELOG.md`, `QA_REPORT.md`, and business dependencies list.
