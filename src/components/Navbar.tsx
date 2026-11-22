import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  Calendar 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { InstagramIcon } from './InstagramIcon';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenLuckyDraw: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Umrah Packages', href: '#packages' },
    { name: 'Departures', href: '#schedules' },
    { name: 'Why Us', href: '#why-us' },
    { name: '5-Star Hotels', href: '#hotels' },
    { name: 'Fare Estimator', href: '#calculator' },
    { name: 'Journey', href: '#journey-guide' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Kadapa Office', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#102D29] text-stone-200 text-xs py-2 px-4 border-b border-[#C8A45D]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Office Badge */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#C8A45D]">
              <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
              Kadapa Head Office: Rahmatullah Street, Ganagapeta
            </span>
            <span className="hidden md:inline-block text-stone-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-stone-300">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              Direct Saudia Airlines Batches (HYD - JED)
            </span>
          </div>

          {/* Phone Hotlines & Instagram */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href={`tel:${AGENCY_DETAILS.phones[0].raw}`} 
              className="inline-flex items-center gap-1.5 text-stone-200 hover:text-[#C8A45D] font-semibold transition-colors focus-ring"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{AGENCY_DETAILS.phones[0].display}</span>
            </a>
            <a 
              href={AGENCY_DETAILS.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
              title="Follow us on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#102D29]/95 backdrop-blur-md shadow-lg border-b border-[#C8A45D]/20 py-2.5' 
            : 'bg-[#102D29]/90 backdrop-blur-xs py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group focus-ring rounded-lg">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#C8A45D] to-[#927335] p-0.5 shadow-md">
              <div className="w-full h-full bg-[#102D29] rounded-[10px] flex items-center justify-center">
                <span className="text-[#C8A45D] font-serif font-black text-xl tracking-tighter">NR</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-wide uppercase font-serif-title">
                  NEW ROSHAN
                </span>
                <span className="bg-[#C8A45D]/20 text-[#C8A45D] text-[10px] px-1.5 py-0.5 rounded border border-[#C8A45D]/30 uppercase font-bold">
                  Kadapa
                </span>
              </div>
              <p className="text-[10px] text-stone-300 font-medium tracking-wider uppercase">
                TOURS & TRAVELS • UMRAH & ZIYARATH
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-stone-200 hover:text-[#C8A45D] transition-colors py-1 focus-ring rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppUrl({ intent: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-3.5 py-2 rounded-lg border border-[#C8A45D]/30 shadow-xs transition-all active:scale-95 focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all active:scale-95 focus-ring"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Umrah</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-[#C8A45D] text-[#102D29] text-xs font-bold px-3 py-1.5 rounded-md focus-ring"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-[#C8A45D] focus-ring rounded"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#102D29]/98 border-t border-[#C8A45D]/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-md animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-stone-200 hover:bg-[#174C40] hover:text-[#C8A45D] transition-colors focus-ring"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-stone-700/60 grid grid-cols-2 gap-2">
              <a
                href={createWhatsAppUrl({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#174C40] text-white text-xs font-bold py-2.5 px-3 rounded-lg focus-ring"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 bg-[#C8A45D] text-[#102D29] text-xs font-bold py-2.5 px-3 rounded-lg focus-ring"
              >
                <Calendar className="w-4 h-4" />
                Book Umrah
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
