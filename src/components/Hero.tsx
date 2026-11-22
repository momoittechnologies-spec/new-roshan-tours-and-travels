import React from 'react';
import { 
  Plane, 
  Hotel, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  PhoneCall, 
  Gift, 
  Star, 
  CheckCircle2
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenLuckyDraw: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenLuckyDraw }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-islamic-pattern overflow-hidden">
      {/* Decorative Light Rays / Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/80 to-emerald-950 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Arabic Calligraphy Header */}
            <div className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
              <span className="font-arabic text-amber-300 text-lg sm:text-xl font-bold tracking-widest">
                {AGENCY_DETAILS.mottoArabic}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-amber-400 font-semibold tracking-wider text-sm sm:text-base uppercase flex items-center justify-center lg:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Hamari Zimmedari, Aapka Aitmaad</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight font-serif-title">
                Experience the Blessed Umrah with <span className="text-gold-gradient">True 5-Star Comfort</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Kadapa's premier pilgrimage agency offering direct <strong className="text-amber-300">Saudia Airlines</strong> flights, walking-distance 5-star hotels (<strong className="text-amber-300">150m</strong> in Madinah & <strong className="text-amber-300">400m</strong> in Makkah), delicious Indian buffets, and full religious guidance.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-stone-200">
              <div className="flex items-center gap-2 bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>HYD-JED Direct Saudia</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-700/50">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fixed ₹1,15,000 All-In</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-700/50 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Complete 8-Item Kit</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#schedules"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-emerald-950 font-bold px-6 py-3.5 rounded-xl shadow-xl shadow-amber-900/40 transition-all hover:scale-105 active:scale-95 text-base"
              >
                <Calendar className="w-5 h-5" />
                <span>View Group Batches</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onOpenLuckyDraw}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-800/80 hover:bg-emerald-700 text-amber-300 font-semibold px-6 py-3.5 rounded-xl border border-amber-500/40 shadow-lg backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-base group"
              >
                <Gift className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                <span>Join ₹999 Lucky Draw</span>
              </button>

              <a
                href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-stone-300 hover:text-white px-4 py-3 text-sm font-medium transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Kadapa Office</span>
              </a>
            </div>

            {/* Trust & Accreditations Footer */}
            <div className="pt-6 border-t border-emerald-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5 text-amber-400">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0 Star Rated on Google</span>
              </div>
              <span className="text-emerald-700 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Inaugurated 3rd July 2026</span>
              </div>
              <span className="text-emerald-700 hidden sm:inline">•</span>
              <div className="text-stone-300">
                <span>Serving AP & Telangana</span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Poster / Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-md opacity-40 animate-pulse" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-emerald-950/90 border border-amber-500/40 p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Live Banner Badge */}
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-red-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Limited Seats for 2026/2027
                  </span>
                  <span className="text-amber-400 text-xs font-semibold">
                    Saudia Airlines Direct
                  </span>
                </div>

                {/* Poster Display */}
                <div className="relative rounded-xl overflow-hidden border border-amber-600/30 group">
                  <img 
                    src="/assets/umrah-schedule.jpg" 
                    alt="New Roshan Tours & Travels Umrah Groups Schedule" 
                    className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button 
                      onClick={onOpenBooking}
                      className="w-full bg-amber-500 text-emerald-950 font-bold py-2 rounded-lg text-sm shadow-md"
                    >
                      Instant Seat Reservation
                    </button>
                  </div>
                </div>

                {/* Quick Info Bar below image */}
                <div className="mt-4 pt-3 border-t border-emerald-800/80 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-800">
                    <span className="text-[10px] text-amber-300 block uppercase font-semibold">Makkah Hotel</span>
                    <strong className="text-xs text-white block truncate">Dlyar Alnada (400m)</strong>
                    <span className="text-[10px] text-stone-400">⭐⭐⭐⭐⭐ Walking distance</span>
                  </div>
                  <div className="bg-emerald-900/60 p-2.5 rounded-lg border border-emerald-800">
                    <span className="text-[10px] text-amber-300 block uppercase font-semibold">Madina Hotel</span>
                    <strong className="text-xs text-white block truncate">Al Marjan Intl (150m)</strong>
                    <span className="text-[10px] text-stone-400">⭐⭐⭐⭐⭐ 2 Mins to Prophet's Gate</span>
                  </div>
                </div>

                {/* Price CTA strip */}
                <div className="mt-3 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-3 rounded-xl border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-stone-300 block">Package Price (All-Inclusive)</span>
                    <span className="text-xl font-black text-amber-400">₹1,15,000</span>
                  </div>
                  <button 
                    onClick={onOpenBooking}
                    className="bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold text-xs px-3.5 py-2 rounded-lg transition-transform active:scale-95"
                  >
                    Book On WhatsApp
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
