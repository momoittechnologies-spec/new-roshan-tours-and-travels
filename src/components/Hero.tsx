import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Plane,
  Sparkles,
  Clock,
  PhoneCall
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLuckyDraw: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-[#102D29] text-white overflow-hidden">
      {/* Background Hero Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Holy Kaaba courtyard at Masjid al-Haram" 
          className="w-full h-full object-cover object-center opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            
            {/* Slogan & Arabic Duah */}
            <div className="space-y-1.5">
              <div className="inline-block py-1 px-3.5 rounded-full bg-[#174C40] border border-[#C8A45D]/40 backdrop-blur-xs">
                <span className="font-arabic text-[#C8A45D] text-base sm:text-lg font-bold tracking-widest">
                  {AGENCY_DETAILS.mottoArabic}
                </span>
              </div>
              <div className="text-[#C8A45D] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>{AGENCY_DETAILS.mottoEnglish} — {AGENCY_DETAILS.prayerDuah}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] font-serif-title">
              Your Sacred Journey <br className="hidden sm:inline" />
              <span className="text-[#C8A45D]">Begins with Trust.</span>
            </h1>

            {/* Concise Subtitle */}
            <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              Experience thoughtfully planned Umrah & Ziyarath journeys with New Roshan Tours & Travels, Kadapa. Direct Saudia Airlines flights, walking-distance 5-star hotels (150m in Madinah & 400m in Makkah), and dedicated Indian Muallim guidance.
            </p>

            {/* Key Pill Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-200">
              <div className="bg-[#174C40]/60 p-2.5 rounded-lg border border-[#174C40] flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>HYD - JED Direct Saudia</span>
              </div>
              <div className="bg-[#174C40]/60 p-2.5 rounded-lg border border-[#174C40] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>150m & 400m to Harams</span>
              </div>
              <div className="bg-[#174C40]/60 p-2.5 rounded-lg border border-[#174C40] flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Fixed ₹1,15,000 All-In</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-xs sm:text-sm focus-ring"
              >
                <span>Explore Umrah Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppUrl({ intent: 'general' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white font-bold px-6 py-3.5 rounded-xl border border-[#C8A45D]/30 shadow-md transition-all active:scale-95 text-xs sm:text-sm focus-ring"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center text-stone-300 hover:text-white px-3 py-3 text-xs font-semibold transition-colors focus-ring"
              >
                Custom Date Request
              </button>
            </div>

            {/* Compact Trust Indicators */}
            <div className="pt-4 border-t border-stone-700/60 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-stone-400">
              <div className="flex items-center gap-1.5 text-[#C8A45D]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0 Star Google Rating (Kadapa)</span>
              </div>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <div className="text-stone-300">
                Inaugurated 3rd July 2026
              </div>
            </div>

          </div>

          {/* Right Column: Quick Departure & Proximity Snapshot Card (Col 5) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="bg-[#174C40]/80 rounded-2xl p-6 sm:p-7 border border-[#C8A45D]/35 shadow-xl backdrop-blur-xs space-y-5">
              
              {/* Badge & Route */}
              <div className="flex justify-between items-center pb-3 border-b border-stone-700/70">
                <span className="inline-flex items-center gap-1.5 bg-[#C8A45D] text-[#102D29] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-2xs">
                  <Clock className="w-3 h-3" />
                  Fast Filling Batches
                </span>
                <span className="text-xs font-bold text-stone-200 flex items-center gap-1">
                  <Plane className="w-3.5 h-3.5 text-[#C8A45D]" />
                  Saudia Airlines Direct
                </span>
              </div>

              {/* Verified Hotel Distances Box */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#C8A45D] tracking-wider block">
                  Verified Walking Distance Accommodations
                </span>
                
                <div className="bg-[#102D29]/70 rounded-xl p-3 border border-stone-700/80 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Madina: Al Marjan International</span>
                    <span className="text-[11px] text-stone-300">Central Markaziya • 2 Mins Walk</span>
                  </div>
                  <span className="bg-[#174C40] text-[#C8A45D] text-[10px] font-bold px-2 py-0.5 rounded border border-[#C8A45D]/20">
                    150m
                  </span>
                </div>

                <div className="bg-[#102D29]/70 rounded-xl p-3 border border-stone-700/80 flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Makkah: Dlyar Alnada Hotel</span>
                    <span className="text-[11px] text-stone-300">Flat Route to Courtyard • 5 Mins Walk</span>
                  </div>
                  <span className="bg-[#174C40] text-[#C8A45D] text-[10px] font-bold px-2 py-0.5 rounded border border-[#C8A45D]/20">
                    400m
                  </span>
                </div>
              </div>

              {/* Price & Action Strip */}
              <div className="pt-2 border-t border-stone-700/70 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">All-Inclusive Fixed Rate</span>
                  <div className="text-2xl font-black text-[#C8A45D] font-mono">
                    ₹1,15,000
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-transform active:scale-95 focus-ring"
                >
                  Reserve Seat
                </button>
              </div>

              {/* Kadapa Helpline */}
              <div className="pt-1 flex items-center justify-between text-[11px] text-stone-300">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#C8A45D]" />
                  Kadapa Office: +91 90590 57239
                </span>
                <span className="text-stone-400">7 Days a Week</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
