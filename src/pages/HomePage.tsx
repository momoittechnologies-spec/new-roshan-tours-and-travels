import React from 'react';
import { Hero } from '../components/Hero';
import { MarqueeBanner } from '../components/MarqueeBanner';
import { PackagesSection } from '../components/PackagesSection';
import { ScheduleSection } from '../components/ScheduleSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HotelsSection } from '../components/HotelsSection';
import { FareCalculator } from '../components/FareCalculator';
import { JourneyGuideSection } from '../components/JourneyGuideSection';
import { ServicesSection } from '../components/ServicesSection';
import { PilgrimKitSection } from '../components/PilgrimKitSection';
import { GallerySection } from '../components/GallerySection';
import { AboutSection } from '../components/AboutSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { LuckyDrawSection } from '../components/LuckyDrawSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenLuckyDraw: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenLuckyDraw
}) => {
  return (
    <>
      <SEOHead 
        title="New Roshan Tours & Travels | Umrah & Ziyarath Agency Kadapa"
        description="Official website of New Roshan Tours & Travels Umrah & Ziyarath India Pvt Ltd, Kadapa. Direct Saudia Airlines flights, 5-Star hotels near Haram (150m & 400m), visa processing, and complete pilgrim kits."
        keywords="Umrah packages from Kadapa, Umrah travel agency in Kadapa, Umrah packages Andhra Pradesh, Ziyarath tours Kadapa, Saudia Airlines Umrah Hyderabad, New Roshan Tours and Travels, MOMO IT TECHNOLOGIES"
        canonicalPath="/"
      />

      {/* 2. Premium Hero with Trust Indicators */}
      <Hero 
        onOpenBooking={() => onOpenBooking()} 
        onOpenLuckyDraw={onOpenLuckyDraw} 
      />

      {/* Professional Islamic Pilgrimage Text Marquee */}
      <MarqueeBanner />

      {/* 3. Featured Umrah Packages */}
      <PackagesSection 
        onSelectPackage={(pkgName) => onOpenBooking(`Inquiry for ${pkgName}`)} 
      />

      {/* 4. Upcoming Group Departures (Saudia Airlines Direct) */}
      <ScheduleSection 
        onSelectSchedule={(batchInfo) => onOpenBooking(batchInfo)} 
      />

      {/* 5. Why Choose New Roshan (Authentic Kadapa Strengths) */}
      <WhyChooseUs />

      {/* 6. Hotels & Accommodation (Proximity to Harams) */}
      <HotelsSection />

      {/* 7. Umrah Fare Estimator */}
      <FareCalculator />

      {/* 8. Pilgrimage Journey Guide (7-Step Timeline) */}
      <JourneyGuideSection />

      {/* 9. Full Services & Complimentary Pilgrim Kit */}
      <ServicesSection />
      <PilgrimKitSection />

      {/* 10. Authentic Photo Proof Gallery */}
      <GallerySection />

      {/* 11. About & Leadership (Grand Opening 3rd July 2026) */}
      <AboutSection />

      {/* 12. Genuine Testimonials (5.0 Google Rating) */}
      <ReviewsSection />

      {/* 13. Secondary Promotional Initiative (₹999 Lucky Draw Notice) */}
      <LuckyDrawSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Contact & Office Location */}
      <ContactSection />
    </>
  );
};