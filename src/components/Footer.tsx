import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  ArrowUp,
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { AGENCY_DETAILS } from '../data/travelData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-stone-300 border-t border-amber-500/20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900">
          
          {/* Brand & Motto (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-emerald-950 rounded-[10px] flex items-center justify-center font-serif font-black text-amber-400 text-lg">
                  NR
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-wide uppercase font-serif-title block">
                  NEW ROSHAN TOURS & TRAVELS
                </span>
                <span className="text-[11px] text-amber-300 tracking-wider uppercase font-semibold">
                  UMRAH & ZIYARATH INDIA PVT. LTD.
                </span>
              </div>
            </div>

            <p className="font-arabic text-amber-200/90 text-lg font-bold">
              {AGENCY_DETAILS.mottoArabic}
            </p>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {AGENCY_DETAILS.mottoEnglish}. Serving pilgrims across Kadapa, Rayalaseema, Andhra Pradesh, and Telangana with trusted 5-star packages, Saudia direct flights, and sincere khidmat.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={AGENCY_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-pink-400 flex items-center justify-center transition-colors border border-emerald-800"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_DETAILS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-emerald-400 flex items-center justify-center transition-colors border border-emerald-800"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
                className="w-9 h-9 rounded-lg bg-emerald-900/80 hover:bg-emerald-800 text-amber-400 flex items-center justify-center transition-colors border border-emerald-800"
                title="Call Kadapa Office"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-serif-title">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="#schedules" className="hover:text-amber-300 transition-colors">Umrah Batches & Schedules</a></li>
              <li><a href="#hotels" className="hover:text-amber-300 transition-colors">5-Star Hotels (Makkah & Madina)</a></li>
              <li><a href="#lucky-draw" className="hover:text-amber-300 transition-colors text-amber-400 font-semibold">₹999 Lucky Draw Offer</a></li>
              <li><a href="#kit" className="hover:text-amber-300 transition-colors">Free 8-Item Pilgrim Kit</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Umrah Fare Calculator</a></li>
              <li><a href="#gallery" className="hover:text-amber-300 transition-colors">Photo & Proof Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-300 transition-colors">Kadapa Office Contact</a></li>
            </ul>
          </div>

          {/* Office Address & Grand Inauguration (Col 4) */}
          <div className="lg:col-span-4 space-y-3 text-xs sm:text-sm">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider font-serif-title">
              Kadapa Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-stone-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{AGENCY_DETAILS.address}</span>
            </div>
            <div className="pt-2 text-stone-400 space-y-1">
              <div><strong>Founded:</strong> 3rd July 2026 (Bad Namaz-e-Juma)</div>
              <div><strong>Inaugurated by:</strong> {AGENCY_DETAILS.chiefGuest}</div>
              <div><strong>Google Rating:</strong> 5.0 ⭐ (Ganagapeta, Kadapa)</div>
            </div>
          </div>

        </div>

        {/* Agency Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} {AGENCY_DETAILS.legalName}. All rights reserved.
          </div>

          {/* Agency Signature */}
          <div className="flex items-center gap-2 bg-emerald-900/60 px-4 py-2 rounded-xl border border-amber-500/20 text-stone-300">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
            <span>by</span>
            <strong className="text-amber-300 font-bold tracking-wide">
              MOMO IT TECHNOLOGIES
            </strong>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
