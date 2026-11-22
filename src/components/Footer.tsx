import React from 'react';
import { 
  Heart, 
  MapPin, 
  Phone, 
  ArrowUp,
  MessageCircle
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { InstagramIcon } from './InstagramIcon';
import type { PolicyType } from './PolicyModal';

const CURRENT_YEAR = new Date().getFullYear();

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102D29] text-stone-300 border-t border-[#C8A45D]/20 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8A45D] to-[#927335] p-0.5 shadow-xs">
                <div className="w-full h-full bg-[#102D29] rounded-[10px] flex items-center justify-center font-serif font-black text-[#C8A45D] text-lg">
                  NR
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-base sm:text-lg tracking-wide uppercase font-serif-title block">
                  NEW ROSHAN TOURS & TRAVELS
                </span>
                <span className="text-[10px] text-[#C8A45D] tracking-wider uppercase font-semibold">
                  UMRAH & ZIYARATH INDIA PVT. LTD.
                </span>
              </div>
            </div>

            <p className="font-arabic text-[#C8A45D] text-base font-bold">
              {AGENCY_DETAILS.mottoArabic}
            </p>
            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              {AGENCY_DETAILS.mottoEnglish}. Serving pilgrims across Kadapa, Rayalaseema, and Telangana with trusted 5-star packages, Saudia direct flights, and sincere religious guidance.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={AGENCY_DETAILS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#174C40] hover:bg-[#1f5c4f] text-pink-400 flex items-center justify-center transition-colors focus-ring"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${AGENCY_DETAILS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#174C40] hover:bg-[#1f5c4f] text-emerald-400 flex items-center justify-center transition-colors focus-ring"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
                className="w-8 h-8 rounded-lg bg-[#174C40] hover:bg-[#1f5c4f] text-[#C8A45D] flex items-center justify-center transition-colors focus-ring"
                title="Call Kadapa Office"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif-title">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              <li><a href="#home" className="hover:text-[#C8A45D] transition-colors">Home</a></li>
              <li><a href="#packages" className="hover:text-[#C8A45D] transition-colors">Featured Packages</a></li>
              <li><a href="#schedules" className="hover:text-[#C8A45D] transition-colors">Upcoming Departures</a></li>
              <li><a href="#why-us" className="hover:text-[#C8A45D] transition-colors">Why Choose Us</a></li>
              <li><a href="#hotels" className="hover:text-[#C8A45D] transition-colors">5-Star Hotels (Makkah & Madina)</a></li>
              <li><a href="#calculator" className="hover:text-[#C8A45D] transition-colors">Fare Calculator</a></li>
              <li><a href="#journey-guide" className="hover:text-[#C8A45D] transition-colors">Journey Steps</a></li>
              <li><a href="#gallery" className="hover:text-[#C8A45D] transition-colors">Photo Proof Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C8A45D] transition-colors">Kadapa Head Office</a></li>
            </ul>
          </div>

          {/* Legal Policies & Office Address */}
          <div className="lg:col-span-4 space-y-4 text-xs text-stone-300">
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif-title mb-2">
                Kadapa Head Office
              </h4>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{AGENCY_DETAILS.address}</span>
              </div>
              <div className="mt-2 text-stone-400">
                Inaugurated 3rd July 2026 by {AGENCY_DETAILS.chiefGuest}
              </div>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider font-serif-title mb-2">
                Legal & Consumer Policies
              </h4>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <button 
                    type="button"
                    onClick={() => onOpenPolicy('privacy')}
                    className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onOpenPolicy('terms')}
                    className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
                  >
                    Terms and Conditions
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    onClick={() => onOpenPolicy('cancellation')}
                    className="text-stone-300 hover:text-[#C8A45D] transition-colors focus-ring"
                  >
                    Cancellation & Refund Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Agency Attribution & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {CURRENT_YEAR} {AGENCY_DETAILS.legalName}. All rights reserved.
          </div>

          {/* Agency Signature */}
          <div className="flex items-center gap-1.5 bg-[#174C40]/60 px-3.5 py-1.5 rounded-lg border border-[#C8A45D]/20 text-stone-300">
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
            className="flex items-center gap-1.5 text-stone-400 hover:text-[#C8A45D] transition-colors focus-ring"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
