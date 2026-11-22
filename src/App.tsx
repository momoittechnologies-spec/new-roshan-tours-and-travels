import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PackagesSection } from './components/PackagesSection';
import { ScheduleSection } from './components/ScheduleSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HotelsSection } from './components/HotelsSection';
import { FareCalculator } from './components/FareCalculator';
import { JourneyGuideSection } from './components/JourneyGuideSection';
import { ServicesSection } from './components/ServicesSection';
import { PilgrimKitSection } from './components/PilgrimKitSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LuckyDrawSection } from './components/LuckyDrawSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LuckyDrawModal } from './components/LuckyDrawModal';
import { PolicyModal, type PolicyType } from './components/PolicyModal';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [luckyDrawModalOpen, setLuckyDrawModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [selectedBatchNote, setSelectedBatchNote] = useState('');

  const handleOpenBooking = (prefillNote?: string) => {
    if (prefillNote) {
      setSelectedBatchNote(prefillNote);
    }
    setBookingModalOpen(true);
  };

  const handleOpenLuckyDraw = () => {
    setLuckyDrawModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#26332F] flex flex-col font-sans selection:bg-[#C8A45D] selection:text-[#102D29]">
      {/* 1. Header & Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenLuckyDraw={handleOpenLuckyDraw} 
      />

      <main className="flex-1">
        {/* 2. Premium Hero with Trust Indicators */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenLuckyDraw={handleOpenLuckyDraw} 
        />

        {/* 3. Featured Umrah Packages */}
        <PackagesSection 
          onSelectPackage={(pkgName) => handleOpenBooking(`Inquiry for ${pkgName}`)} 
        />

        {/* 4. Upcoming Group Departures (Saudia Airlines Direct) */}
        <ScheduleSection 
          onSelectSchedule={(batchInfo) => handleOpenBooking(batchInfo)} 
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
      </main>

      {/* 16. Footer with Policy Links & MOMO IT TECHNOLOGIES Credits */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledBatch={selectedBatchNote}
      />

      <LuckyDrawModal 
        isOpen={luckyDrawModalOpen}
        onClose={() => setLuckyDrawModalOpen(false)}
      />

      <PolicyModal 
        policyType={activePolicy}
        onClose={() => setActivePolicy(null)}
      />

      {/* Single Unobtrusive Floating Action */}
      <FloatingActions />
    </div>
  );
}

export default App;
