import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  Sparkles, 
  Calendar, 
  Gift, 
  Compass
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { AGENCY_DETAILS } from '../data/travelData';

interface NavbarProps {
  onOpenBooking: (prefillNote?: string) => void;
  onOpenLuckyDraw: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenLuckyDraw }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Umrah Schedules', href: '#schedules' },
    { name: '5-Star Hotels', href: '#hotels' },
    { name: '₹999 Lucky Draw', href: '#lucky-draw', highlight: true },
    { name: 'Pilgrim Kit', href: '#kit' },
    { name: 'Services', href: '#services' },
    { name: 'Fare Calculator', href: '#calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Kadapa Office', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Office & Opening Info */}
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Kadapa Head Office: Rahmatullah Street, Ganagapeta
            </span>
            <span className="hidden md:inline-block text-emerald-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Direct Saudia Airlines Batches Open (HYD-JED)
            </span>
          </div>

          {/* Right: Phone & Socials */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href={`tel:${AGENCY_DETAILS.phones[0].raw}`} 
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{AGENCY_DETAILS.phones[0].display}</span>
            </a>
            <a 
              href={AGENCY_DETAILS.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-pink-300 hover:text-pink-200 transition-colors"
              title="Follow us on Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <button
              onClick={onOpenLuckyDraw}
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 shadow-sm transition-transform active:scale-95"
            >
              <Gift className="w-3 h-3" />
              ₹999 Draw
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-emerald-900/95 backdrop-blur-md shadow-xl border-b border-amber-500/20 py-2.5' 
          : 'bg-emerald-900/85 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                <span className="text-amber-400 font-serif font-black text-xl tracking-tighter">NR</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full flex items-center justify-center text-[8px] text-emerald-950 font-bold">
                ★
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-wide uppercase font-serif-title">
                  NEW ROSHAN
                </span>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded border border-amber-500/30 uppercase font-semibold">
                  Kadapa
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-amber-300/90 font-medium tracking-wider uppercase">
                TOURS & TRAVELS • UMRAH & ZIYARATH
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  link.highlight 
                    ? 'text-amber-300 font-semibold hover:text-amber-200' 
                    : 'text-stone-200 hover:text-amber-300'
                }`}
              >
                {link.name}
                {link.highlight && (
                  <span className="absolute -top-1.5 -right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${encodeURIComponent("Salam Alaikum New Roshan Travels, I want details regarding Umrah packages from Kadapa.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-md transition-all active:scale-95 border border-emerald-400/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-emerald-950 text-sm font-bold px-4 py-2 rounded-lg shadow-lg shadow-amber-900/30 transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Umrah</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-amber-500 text-emerald-950 text-xs font-bold px-3 py-1.5 rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-amber-400 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-emerald-950/98 border-t border-amber-500/20 px-4 pt-3 pb-6 space-y-2.5 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.highlight
                    ? 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
                    : 'text-stone-200 hover:bg-emerald-800/50 hover:text-amber-300'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 border-t border-emerald-800/80 grid grid-cols-2 gap-2">
              <a
                href={`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${encodeURIComponent("Salam Alaikum, I would like to inquire about Umrah packages from Kadapa.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white text-sm font-semibold py-2.5 px-3 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-2 bg-amber-500 text-emerald-950 text-sm font-bold py-2.5 px-3 rounded-lg"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
