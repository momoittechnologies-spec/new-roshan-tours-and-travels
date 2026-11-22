import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-emerald-950/80 hover:bg-emerald-900 text-stone-300 flex items-center justify-center shadow-lg backdrop-blur-md transition-all border border-emerald-700/60 active:scale-95"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button (Mobile Only) */}
      <a
        href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
        className="pointer-events-auto sm:hidden w-12 h-12 rounded-full bg-amber-500 text-emerald-950 flex items-center justify-center shadow-xl border-2 border-white active:scale-90 transition-transform"
        title="Call Kadapa Office"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>

      {/* Floating WhatsApp Action Button */}
      <div className="pointer-events-auto relative group">
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block bg-emerald-950 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap border border-emerald-700/60 opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Kadapa Office 💬
        </div>

        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none" />

        <a
          href={`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${encodeURIComponent("Salam Alaikum New Roshan Tours & Travels, I am visiting your website and would like to ask about Umrah packages from Kadapa.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 border-2 border-white/80"
          title="WhatsApp Support"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>

    </div>
  );
};
