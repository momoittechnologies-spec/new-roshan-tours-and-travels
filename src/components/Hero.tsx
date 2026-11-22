import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Plane,
  Sparkles 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLuckyDraw: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-[#102D29] text-white overflow-hidden">
      {/* Background Hero Image with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Holy Kaaba courtyard at Masjid al-Haram" 
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Slogan & Arabic Duah */}
          <div className="space-y-1.5">
            <div className="inline-block py-1 px-3.5 rounded-full bg-[#174C40] border border-[#C8A45D]/40 backdrop-blur-xs">
              <span className="font-arabic text-[#C8A45D] text-base sm:text-lg font-bold tracking-widest">
                {AGENCY_DETAILS.mottoArabic}
              </span>
            </div>
            <div className="text-[#C8A45D] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2">
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
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
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
              <span>Fixed Transparent Pricing</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
            <a
              href="#packages"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] font-bold px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95 text-sm focus-ring"
            >
              <span>Explore Umrah Packages</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={createWhatsAppUrl({ intent: 'general' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white font-bold px-6 py-3.5 rounded-xl border border-[#C8A45D]/30 shadow-md transition-all active:scale-95 text-sm focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center text-stone-300 hover:text-white px-4 py-3 text-xs font-semibold transition-colors focus-ring"
            >
              Custom Dates Inquiry
            </button>
          </div>

          {/* Compact Trust Indicators */}
          <div className="pt-6 border-t border-stone-700/60 flex flex-wrap items-center gap-5 text-xs text-stone-400">
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
            <span className="text-stone-600 hidden sm:inline">•</span>
            <div className="text-stone-300">
              Permanent Head Office in Ganagapeta, Kadapa
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
