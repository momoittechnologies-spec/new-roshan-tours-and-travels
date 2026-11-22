import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  ArrowUp,
  MessageCircle,
  Clock,
  Plane,
  Building2,
  Calendar,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Utensils,
  PackageCheck
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { InstagramIcon } from './InstagramIcon';
import type { PolicyType } from './PolicyModal';
import { createWhatsAppUrl } from '../utils/whatsapp';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onOpenBooking?: (prefillNote?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102D29] text-stone-300 border-t border-[#C8A45D]/25 pt-12 sm:pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Luxury Ambient Glows */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8A45D]/5 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#174C40]/40 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Fluid Maximum Extent Container */}
      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* 1. Pre-Footer Action Banner — Pilgrimage Consultation */}
        <div className="bg-gradient-to-r from-[#174C40]/90 via-[#102D29]/95 to-[#174C40]/90 border border-[#C8A45D]/30 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 xl:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#C8A45D]/15 border border-[#C8A45D]/30 text-[#C8A45D] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Begin Your Blessed Journey</span>
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Planning Your Sacred Umrah from Kadapa?
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Experience direct Saudia Airlines flights from Hyderabad, verified Saudi e-Visas, walking-distance 5-star hotels in Makkah & Madinah, authentic Indian buffet catering, and personalized Muallim care for your entire family.
              </p>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-3">
              <a
                href={createWhatsAppUrl({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl border border-[#C8A45D]/40 shadow-md transition-all hover:scale-[1.02] active:scale-95 focus-ring"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                <span>WhatsApp Inquiry</span>
              </a>

              {onOpenBooking ? (
                <button
                  type="button"
                  onClick={() => onOpenBooking('Inquiry from Website Footer')}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C8A45D] via-[#dfbe78] to-[#C8A45D] hover:from-[#dfbe78] hover:to-[#C8A45D] text-[#102D29] text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl shadow-lg shadow-[#C8A45D]/20 transition-all hover:scale-[1.02] active:scale-95 focus-ring"
                >
                  <Calendar className="w-4 h-4 text-[#102D29]" />
                  <span>Book Umrah</span>
                </button>
              ) : (
                <a
                  href="#packages"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C8A45D] via-[#dfbe78] to-[#C8A45D] hover:from-[#dfbe78] hover:to-[#C8A45D] text-[#102D29] text-xs sm:text-sm font-extrabold px-5 py-3 rounded-xl shadow-lg shadow-[#C8A45D]/20 transition-all hover:scale-[1.02] active:scale-95 focus-ring"
                >
                  <Calendar className="w-4 h-4 text-[#102D29]" />
                  <span>View Packages</span>
                </a>
              )}
            </div>

          </div>
        </div>

        {/* 2. Reassurance Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 mb-12 border-b border-[#C8A45D]/15">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#174C40] flex items-center justify-center shrink-0 text-[#C8A45D]">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-serif-title">Direct Saudia Flights</h4>
              <p className="text-[11px] text-stone-400">HYD ✈ JED (No Layover)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#174C40] flex items-center justify-center shrink-0 text-[#C8A45D]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-serif-title">Walking Distance Hotels</h4>
              <p className="text-[11px] text-stone-400">150m Madina · 400m Makkah</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#174C40] flex items-center justify-center shrink-0 text-[#C8A45D]">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-serif-title">Indian Buffet Catering</h4>
              <p className="text-[11px] text-stone-400">3 Daily Meals & Tea</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#174C40] flex items-center justify-center shrink-0 text-[#C8A45D]">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold font-serif-title">Complimentary 8-Pc Kit</h4>
              <p className="text-[11px] text-stone-400">Bags, Ihram & 5L Zamzam</p>
            </div>
          </div>
        </div>

        {/* 3. Main Footer Columns — Balanced 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand, Sacred Motto & Socials (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C8A45D] to-[#927335] p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-[#102D29] rounded-[10px] flex items-center justify-center font-serif font-black text-[#C8A45D] text-xl">
                  NR
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-wide uppercase font-serif-title block leading-tight">
                  NEW ROSHAN TOURS & TRAVELS
                </span>
                <span className="text-[10px] text-[#C8A45D] tracking-wider uppercase font-bold block">
                  UMRAH & ZIYARATH INDIA PVT. LTD.
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-arabic text-[#C8A45D] text-lg font-bold leading-normal">
                {AGENCY_DETAILS.mottoArabic}
              </p>
              <p className="text-xs font-bold text-stone-200 italic">
                "{AGENCY_DETAILS.mottoEnglish}" ({AGENCY_DETAILS.mottoUrdu})
              </p>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Established in Kadapa on 3rd July 2026. Sincere facilitators for pilgrims performing Umrah and historic Ziyarath with 5-star hospitality, verified e-Visas, and transparent pricing.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-[#174C40]/70 border border-[#C8A45D]/30 px-3 py-1.5 rounded-lg text-xs">
              <div className="flex text-[#C8A45D] text-xs">
                ★★★★★
              </div>
              <span className="text-white font-semibold">{AGENCY_DETAILS.googleRating}</span>
              <span className="text-stone-400 text-[11px]">on Google Reviews</span>
            </div>

            {/* Social & Contact Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={AGENCY_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#174C40] hover:bg-[#1f5c4f] text-pink-400 hover:text-pink-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-[#C8A45D]/20 focus-ring"
                title="Follow on Instagram (@newroshantoursandtravels)"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_DETAILS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#174C40] hover:bg-[#1f5c4f] text-emerald-400 hover:text-emerald-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-[#C8A45D]/20 focus-ring"
                title="Message on WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
                className="w-9 h-9 rounded-xl bg-[#174C40] hover:bg-[#1f5c4f] text-[#C8A45D] hover:text-[#dfbe78] flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-[#C8A45D]/20 focus-ring"
                title="Call Kadapa Office (+91 90590 57239)"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-[#174C40] hover:bg-[#1f5c4f] text-stone-200 hover:text-[#C8A45D] flex items-center justify-center transition-all hover:scale-105 active:scale-95 border border-[#C8A45D]/20 focus-ring"
                title="Find Kadapa Office on Google Maps"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Umrah Packages & Departures (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif-title flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
              Umrah Packages
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#packages" className="hover:text-[#C8A45D] transition-colors flex items-center justify-between group">
                  <span>Deluxe 14-Day Batch</span>
                  <span className="text-[10px] text-[#C8A45D] font-bold">₹1.15L</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C8A45D] transition-colors flex items-center justify-between group">
                  <span>Classic Group Batch</span>
                  <span className="text-[10px] text-stone-400">₹1.05L</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C8A45D] transition-colors flex items-center justify-between group">
                  <span>Executive Comfort</span>
                  <span className="text-[10px] text-stone-400">₹1.35L</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#C8A45D] transition-colors flex items-center justify-between group">
                  <span>Ramadan Mubarak 2027</span>
                  <span className="text-[10px] text-stone-400">₹1.65L</span>
                </a>
              </li>
              <li>
                <a href="#schedules" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1 pt-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>Saudia Group Departures</span>
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>Fare Calculator</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Sacred Pilgrim Services (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif-title flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
              Pilgrim Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#hotels" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>5-Star Hotels (150m & 400m)</span>
                </a>
              </li>
              <li>
                <a href="#pilgrim-kit" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>8-Piece Luggage & Ihram Kit</span>
                </a>
              </li>
              <li>
                <a href="#journey-guide" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>7-Step Umrah Guide</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>Hyderabadi Buffet Dining</span>
                </a>
              </li>
              <li>
                <a href="#lucky-draw" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>₹999 Lucky Draw Program</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C8A45D] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C8A45D]" />
                  <span>Photo Proof Gallery</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Kadapa Head Office Showcase Card (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4">
            <div className="bg-[#174C40]/40 border border-[#C8A45D]/25 rounded-2xl p-5 space-y-3.5 shadow-md">
              
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <h4 className="text-white text-xs font-extrabold uppercase tracking-wider font-serif-title">
                    Kadapa Head Office
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Visiting Welcome
                </span>
              </div>

              {/* Physical Street Address */}
              <div className="text-xs text-stone-300 leading-relaxed">
                <p className="font-semibold text-white">13/403-1, Rahmatullah Street,</p>
                <p>YV Street, Ganagapeta,</p>
                <p>Kadapa, Andhra Pradesh – 516001</p>
                <p className="text-[11px] text-stone-400 mt-1">
                  Inaugurated 3rd July 2026 by {AGENCY_DETAILS.chiefGuest}
                </p>
              </div>

              {/* Office Contact Hotlines */}
              <div className="pt-1 space-y-1.5">
                <div className="text-[11px] uppercase tracking-wider font-bold text-[#C8A45D]">
                  Direct Hotlines:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <a 
                    href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
                    className="flex items-center gap-2 bg-[#102D29]/70 hover:bg-[#102D29] text-stone-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span className="font-semibold">{AGENCY_DETAILS.phones[0].display}</span>
                  </a>
                  <a 
                    href={`tel:${AGENCY_DETAILS.phones[1].raw}`}
                    className="flex items-center gap-2 bg-[#102D29]/70 hover:bg-[#102D29] text-stone-200 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span className="font-semibold">{AGENCY_DETAILS.phones[1].display}</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center gap-2 text-[11px] text-stone-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Mon–Sat: 9:00 AM – 8:00 PM · Friday: Open Bad Namaz-e-Juma</span>
              </div>

              {/* Google Maps Link */}
              <a
                href={AGENCY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#174C40] hover:bg-[#1f5c4f] text-stone-200 hover:text-white text-xs font-semibold py-2 px-3 rounded-xl border border-[#C8A45D]/20 transition-all focus-ring"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C8A45D]" />
              </a>

            </div>
          </div>

        </div>

        {/* 4. Agency Attribution, Legal Policies & Copyright Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs text-stone-400">
          
          {/* Copyright & Registration */}
          <div className="text-center lg:text-left">
            <p>© {CURRENT_YEAR} {AGENCY_DETAILS.legalName}. All rights reserved.</p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              Authorized Umrah & Ziyarath travel services from Kadapa, Andhra Pradesh.
            </p>
          </div>

          {/* Legal Policies Modal Triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button 
              type="button"
              onClick={() => onOpenPolicy('privacy')}
              className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
            >
              Privacy Policy
            </button>
            <span className="text-stone-700">·</span>
            <button 
              type="button"
              onClick={() => onOpenPolicy('terms')}
              className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
            >
              Terms & Conditions
            </button>
            <span className="text-stone-700">·</span>
            <button 
              type="button"
              onClick={() => onOpenPolicy('cancellation')}
              className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
            >
              Cancellation & Refund Policy
            </button>
          </div>

          {/* Agency Signature & Back to Top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#174C40]/80 hover:bg-[#174C40] px-3.5 py-1.5 rounded-full border border-[#C8A45D]/30 text-stone-200 shadow-xs transition-colors">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-red-400 fill-current" />
              <span>by</span>
              <a 
                href={AGENCY_DETAILS.developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A45D] font-bold tracking-wide hover:underline focus-ring"
              >
                MOMO IT TECHNOLOGIES
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#174C40]/80 hover:bg-[#174C40] text-stone-300 hover:text-[#C8A45D] flex items-center justify-center transition-colors border border-white/5 focus-ring"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};