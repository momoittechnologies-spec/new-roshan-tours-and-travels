import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  Calendar,
  Clock
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
      setIsScrolled(window.scrollY > 15);
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
    { name: 'Journey Steps', href: '#journey-guide' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Kadapa Office', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility Announcement Bar — Fluid Full-Width */}
      <div className="w-full bg-[#0d2421] text-stone-300 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 border-b border-[#C8A45D]/20 backdrop-blur-md">
        <div className="w-full flex flex-wrap justify-between items-center gap-2">
          
          {/* Left: Kadapa Office & Flight Information */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            <span className="inline-flex items-center gap-2 font-medium text-[#C8A45D]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8A45D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8A45D]"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Head Office: Rahmatullah Street, Ganagapeta, Kadapa</span>
            </span>

            <span className="hidden lg:inline-block text-stone-600">|</span>

            <span className="hidden lg:inline-flex items-center gap-1.5 text-stone-300">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              <span>Saudia Airlines Direct HYD - JED Batches Open</span>
            </span>

            <span className="hidden 2xl:inline-block text-stone-600">|</span>

            <span className="hidden 2xl:inline-flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3 h-3 text-[#C8A45D]" />
              <span>Timings: Mon – Sat 9:30 AM – 7:30 PM</span>
            </span>
          </div>

          {/* Right: Phone Directory & Socials */}
          <div className="flex items-center gap-3 sm:gap-6 ml-auto">
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-[11px] text-stone-400 uppercase tracking-wider">Helplines:</span>
              <a 
                href={`tel:${AGENCY_DETAILS.phones[0].raw}`} 
                className="inline-flex items-center gap-1 text-stone-200 hover:text-[#C8A45D] font-bold text-xs transition-colors focus-ring"
              >
                <Phone className="w-3 h-3 text-[#C8A45D]" />
                <span>{AGENCY_DETAILS.phones[0].display}</span>
              </a>
              <span className="text-stone-600">•</span>
              <a 
                href={`tel:${AGENCY_DETAILS.phones[1].raw}`} 
                className="inline-flex items-center gap-1 text-stone-200 hover:text-[#C8A45D] font-bold text-xs transition-colors focus-ring"
              >
                <span>{AGENCY_DETAILS.phones[1].display}</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={AGENCY_DETAILS.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 bg-[#174C40]/60 hover:bg-[#174C40] text-stone-200 hover:text-[#C8A45D] px-2.5 py-1 rounded-full border border-[#C8A45D]/25 transition-all text-[11px] font-medium focus-ring"
                title="Follow us on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span className="hidden md:inline">@newroshantoursandtravels</span>
                <span className="md:hidden">Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar — Maximum Extent Fluid Width with Modern Glassmorphism */}
      <nav 
        role="navigation"
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#102D29]/95 backdrop-blur-xl shadow-xl shadow-black/20 border-b border-[#C8A45D]/25 py-2.5' 
            : 'bg-[#102D29]/88 backdrop-blur-md border-b border-stone-800/80 py-3.5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-4">
          
          {/* Brand Identity / Logo */}
          <a href="#home" className="flex items-center gap-3.5 group focus-ring rounded-xl shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#dfbe78] via-[#C8A45D] to-[#927335] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#102D29] rounded-[10px] flex items-center justify-center">
                <span className="text-[#C8A45D] font-serif font-black text-xl sm:text-2xl tracking-tighter">NR</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C8A45D] rounded-full flex items-center justify-center text-[7px] text-[#102D29] font-black">
                ★
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-wide uppercase font-serif-title">
                  NEW ROSHAN
                </span>
                <span className="bg-[#C8A45D]/20 text-[#C8A45D] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#C8A45D]/40 uppercase tracking-wider">
                  Kadapa
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#C8A45D]/90 font-medium tracking-widest uppercase">
                TOURS & TRAVELS • UMRAH & ZIYARATH
              </p>
            </div>
          </a>

          {/* Modern Desktop Navigation Links — Spanning Full Middle Extent */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-6xl mx-2 xl:mx-4 gap-0.5 xl:gap-1.5 2xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold text-stone-200 hover:text-[#C8A45D] hover:bg-white/5 px-2.5 py-1.5 xl:px-3 xl:py-1.5 2xl:px-3.5 2xl:py-2 rounded-full transition-all tracking-wide whitespace-nowrap focus-ring"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Modern Right-Side Actions */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={createWhatsAppUrl({ intent: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 xl:gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-3.5 xl:px-4 py-2.5 rounded-full border border-[#C8A45D]/30 shadow-xs transition-all hover:scale-[1.02] active:scale-95 focus-ring"
            >
              <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#C8A45D]" />
              <span className="whitespace-nowrap">WhatsApp Enquiry</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-1.5 xl:gap-2 bg-gradient-to-r from-[#C8A45D] via-[#dfbe78] to-[#C8A45D] hover:from-[#dfbe78] hover:to-[#C8A45D] text-[#102D29] text-xs font-extrabold px-4 xl:px-5 py-2.5 rounded-full shadow-md shadow-[#C8A45D]/15 transition-all hover:scale-[1.02] active:scale-95 focus-ring"
            >
              <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#102D29]" />
              <span className="whitespace-nowrap">Book Umrah</span>
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-[#C8A45D] text-[#102D29] text-xs font-black px-3.5 py-1.5 rounded-full focus-ring"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-[#C8A45D] focus-ring rounded-lg border border-stone-700/60"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden w-full bg-[#102D29]/98 border-t border-[#C8A45D]/25 px-5 pt-4 pb-7 space-y-2 backdrop-blur-2xl animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-stone-200 hover:bg-[#174C40] hover:text-[#C8A45D] transition-colors focus-ring"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-700/60 grid grid-cols-2 gap-2.5">
              <a
                href={createWhatsAppUrl({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#174C40] text-white text-xs font-bold py-3 px-3 rounded-xl focus-ring"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#C8A45D] to-[#dfbe78] text-[#102D29] text-xs font-extrabold py-3 px-3 rounded-xl focus-ring shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Umrah</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
