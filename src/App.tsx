import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScheduleSection } from './components/ScheduleSection';
import { HotelsSection } from './components/HotelsSection';
import { LuckyDrawSection } from './components/LuckyDrawSection';
import { PilgrimKitSection } from './components/PilgrimKitSection';
import { ServicesSection } from './components/ServicesSection';
import { FareCalculator } from './components/FareCalculator';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LuckyDrawModal } from './components/LuckyDrawModal';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [luckyDrawModalOpen, setLuckyDrawModalOpen] = useState(false);
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
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-500 selection:text-emerald-950">
      {/* Sticky Header */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        onOpenLuckyDraw={handleOpenLuckyDraw} 
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenLuckyDraw={handleOpenLuckyDraw} 
        />

        {/* Departure Schedules & Batches */}
        <ScheduleSection 
          onSelectSchedule={(batchInfo) => handleOpenBooking(batchInfo)} 
        />

        {/* 5-Star Accommodations Near Haram */}
        <HotelsSection />

        {/* ₹999 Lucky Draw Scheme */}
        <LuckyDrawSection 
          onOpenModal={handleOpenLuckyDraw} 
        />

        {/* Complimentary 8-Piece Pilgrim Kit */}
        <PilgrimKitSection />

        {/* Services & Guided Ziyarat */}
        <ServicesSection />

        {/* Interactive Umrah Fare Estimator */}
        <FareCalculator />

        {/* Authentic Photo & Milestone Gallery */}
        <GallerySection />

        {/* Story, Founding & Chief Guest Blessings */}
        <AboutSection />

        {/* Google 5.0 Star Reviews */}
        <ReviewsSection />

        {/* Accordion FAQs */}
        <FAQSection />

        {/* Office Contact, Maps & Form */}
        <ContactSection />
      </main>

      {/* Footer with MOMO IT TECHNOLOGIES Agency Credits */}
      <Footer />

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

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingActions />
    </div>
  );
}

export default App;
