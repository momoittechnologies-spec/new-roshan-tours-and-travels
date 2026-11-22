import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { BrandLogo } from './BrandLogo';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenLuckyDraw: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile drawer on route change during render
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Umrah Packages', href: '/packages' },
    { name: 'Departures', href: '/schedules' },
    { name: '5-Star Hotels', href: '/#hotels' },
    { name: 'About Us', href: '/about' },
    { name: 'Fare Estimator', href: '/#calculator' },
    { name: 'Photo Gallery', href: '/#gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Utility Announcement Bar — Fluid Full-Width */}
      <div className="w-full bg-[#0d2421] text-stone-300 text-xs py-2 px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 border-b border-[#C8A45D]/20 backdrop-blur-md">
        <div className="w-full flex items-center justify-between gap-4">
          
          {/* Left: Kadapa Location & Office Status */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-stone-300 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
              <span className="font-semibold text-white">Kadapa Central Office:</span>
              <span className="hidden md:inline text-stone-300 truncate max-w-xs xl:max-w-md">13/403-1, Rahmatullah St, Ganagapeta</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#174C40] text-[#C8A45D] px-2.5 py-0.5 rounded-full text-[10px] font-bold border border-[#C8A45D]/30 shrink-0">
              <Clock className="w-3 h-3 text-[#C8A45D]" />
              <span>Open Mon–Sat · 9AM–8PM</span>
            </span>
          </div>

          {/* Center Announcement: Direct Saudia Flights Notice */}
          <div className="hidden lg:flex items-center gap-1.5 text-[#C8A45D] font-bold text-[11px] uppercase tracking-wider shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>Saudia Airlines Direct Flights · Hyderabad (HYD) ✈ Jeddah (JED)</span>
          </div>

          {/* Right: Phone Hotlines & Instagram */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#C8A45D] font-bold transition-colors focus-ring"
              title="Call Primary Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span className="tracking-wide">{AGENCY_DETAILS.phones[0].display}</span>
            </a>

            <span className="text-stone-600 hidden sm:inline">|</span>

            <a
              href={AGENCY_DETAILS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors focus-ring"
              title="Follow on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span className="hidden xl:inline text-[10px] font-semibold text-stone-300">{AGENCY_DETAILS.instagramHandle}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar — Expanded Edge-to-Edge Fluid Architecture */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#102D29]/95 backdrop-blur-xl border-[#C8A45D]/30 shadow-xl py-2.5 sm:py-3' 
            : 'bg-[#102D29]/90 backdrop-blur-md border-[#C8A45D]/20 py-3.5 sm:py-4'
        }`}
        aria-label="Main Navigation"
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Restored Authentic Brand Logo & Horizontal Lockup */}
          <BrandLogo variant="header" />

          {/* Modern Desktop Navigation Links — Spanning Full Middle Extent */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-6xl mx-2 xl:mx-4 gap-0.5 xl:gap-1.5 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] xl:text-[12px] 2xl:text-[13px] font-semibold px-2.5 py-1.5 xl:px-3 xl:py-1.5 2xl:px-3.5 2xl:py-2 rounded-full transition-all tracking-wide whitespace-nowrap focus-ring ${
                    isActive 
                      ? 'text-[#C8A45D] bg-white/10 font-bold border border-[#C8A45D]/30' 
                      : 'text-stone-200 hover:text-[#C8A45D] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
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
              className="hidden min-[420px]:inline-flex sm:hidden bg-[#C8A45D] text-[#102D29] text-xs font-black px-3 py-1.5 rounded-full focus-ring"
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
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors focus-ring ${
                      isActive
                        ? 'bg-[#174C40] text-[#C8A45D] font-bold border border-[#C8A45D]/30'
                        : 'text-stone-200 hover:bg-[#174C40] hover:text-[#C8A45D]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-700/60 grid grid-cols-2 gap-2.5">
              <a
                href={createWhatsAppUrl({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#174C40] text-white text-xs font-bold py-2.5 px-3 rounded-xl border border-[#C8A45D]/30"
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
                className="inline-flex items-center justify-center gap-1.5 bg-[#C8A45D] text-[#102D29] text-xs font-black py-2.5 px-3 rounded-xl"
              >
                <Calendar className="w-4 h-4 text-[#102D29]" />
                <span>Book Umrah</span>
              </button>
            </div>
          </div>
        )}

      </nav>

    </header>
  );
};