import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Plane, 
  Utensils, 
  Users, 
  Building, 
  HeartHandshake, 
  Sparkles 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: <Building className="w-5 h-5 text-[#C8A45D]" />,
      title: "Permanent Kadapa Head Office",
      description: "Conveniently located at Rahmatullah Street, Ganagapeta. Accessible 7 days a week for in-person consultation, document verification, and family meetings."
    },
    {
      icon: <Plane className="w-5 h-5 text-[#C8A45D]" />,
      title: "Direct Saudia Airlines Batches",
      description: "Non-stop Hyderabad to Jeddah flights with confirmed seat allotments and luggage allowances, eliminating exhausting layovers for seniors and children."
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#C8A45D]" />,
      title: "Walking Proximity to Holy Harams",
      description: "Hotels situated within 150 meters (Madina) and 400 meters (Makkah) along flat routes, ensuring you can reach prayer courtyards without bus queues."
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#C8A45D]" />,
      title: "Nutritious Indian & Hyderabadi Buffets",
      description: "Freshly prepared breakfast, lunch, dinner, and evening tea by dedicated Indian chefs, ensuring healthy and familiar meals throughout your stay."
    },
    {
      icon: <Users className="w-5 h-5 text-[#C8A45D]" />,
      title: "Multilingual Islamic Guidance",
      description: "Accompanied by qualified Muallims providing step-by-step guidance for Umrah rituals and historic Ziyarath in Urdu, Telugu, and English."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C8A45D]" />,
      title: "Complete Price Transparency",
      description: "Fixed all-inclusive packages with zero post-booking surcharges. We manage visas, insurance, transport, accommodation, and the 8-piece kit."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C8A45D]" />
            Verifiable Dedication & Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Why Pilgrims Choose New Roshan Tours & Travels
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Serving the pilgrims of Kadapa, Rayalaseema, and Telangana with authentic service, transparent pricing, and sincere devotion.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#F8F5ED] border border-stone-200/80 hover:border-[#C8A45D]/60 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#102D29] flex items-center justify-center mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#102D29] mb-2 font-serif-title">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#26332F]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#174C40]">
                <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                <span>Verified Service Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inauguration Notice Bar */}
        <div className="mt-12 bg-[#102D29] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C8A45D]/30">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] uppercase tracking-widest text-[#C8A45D] font-bold block">
              Official Foundation & Spiritual Blessings
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-serif-title">
              Inaugurated on 3rd July 2026 (Bad Namaz-e-Juma)
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
              Formally opened under the gracious presence of Chief Guest <strong>{AGENCY_DETAILS.chiefGuest}</strong> at our permanent Kadapa office on Rahmatullah Street.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] text-xs font-bold py-3 px-5 rounded-xl shadow-md transition-all active:scale-95 focus-ring"
            >
              <span>Visit Kadapa Office</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
