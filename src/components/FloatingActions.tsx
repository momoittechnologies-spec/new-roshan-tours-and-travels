import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

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
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-[#102D29]/90 hover:bg-[#102D29] text-stone-200 flex items-center justify-center shadow-md backdrop-blur-xs transition-all border border-[#C8A45D]/40 active:scale-95 focus-ring"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 text-[#C8A45D]" />
        </button>
      )}

      {/* Single Unobtrusive Floating WhatsApp CTA */}
      <div className="pointer-events-auto relative group">
        <a
          href={createWhatsAppUrl({ intent: 'general' })}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 rounded-full bg-[#174C40] hover:bg-[#102D29] text-white shadow-xl transition-all hover:scale-105 active:scale-95 border-2 border-[#C8A45D]/60 focus-ring"
          title="Chat on WhatsApp"
          aria-label="Chat with New Roshan Tours & Travels on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-[#C8A45D]" />
        </a>
      </div>

    </div>
  );
};
