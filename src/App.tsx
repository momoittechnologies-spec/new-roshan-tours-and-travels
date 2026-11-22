import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LuckyDrawModal } from './components/LuckyDrawModal';
import { PolicyModal, type PolicyType } from './components/PolicyModal';
import { FloatingActions } from './components/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';
import { SchedulesPage } from './pages/SchedulesPage';

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8F5ED] text-[#26332F] flex flex-col font-sans selection:bg-[#C8A45D] selection:text-[#102D29]">
        {/* 1. Header & Navigation */}
        <Navbar 
          onOpenBooking={() => handleOpenBooking()} 
          onOpenLuckyDraw={handleOpenLuckyDraw} 
        />

        {/* 2. Page Content Managed by React Router */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={(note) => handleOpenBooking(note)} 
                  onOpenLuckyDraw={handleOpenLuckyDraw} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenBooking={(note) => handleOpenBooking(note)} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="/packages" 
              element={<PackagesPage onOpenBooking={(note) => handleOpenBooking(note)} />} 
            />
            <Route 
              path="/schedules" 
              element={<SchedulesPage onOpenBooking={(note) => handleOpenBooking(note)} />} 
            />
            {/* Catch-all route to HomePage */}
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={(note) => handleOpenBooking(note)} 
                  onOpenLuckyDraw={handleOpenLuckyDraw} 
                />
              } 
            />
          </Routes>
        </main>

        {/* 3. Footer with Direct Route Links & MOMO IT TECHNOLOGIES Credits */}
        <Footer 
          onOpenPolicy={(type) => setActivePolicy(type)} 
          onOpenBooking={(note) => handleOpenBooking(note)}
        />

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

        {/* Floating Contact Actions */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;
