import React from 'react';
import { 
  MapPin, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#102D29] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-[#174C40] border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              About New Roshan Tours & Travels
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title leading-tight">
              A Sacred Service Built on <span className="text-[#C8A45D]">Integrity and Trust</span>
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.</strong> was established to provide the pilgrims of Kadapa, Rayalaseema, and neighboring districts with dependable, comfortable, and spiritually fulfilling Umrah packages.
              </p>
              <p>
                Our permanent headquarters in Kadapa was inaugurated on <strong className="text-[#C8A45D]">3rd July 2026 (Bad Namaz-e-Juma)</strong> with the spiritual presence and duahs of Chief Guest <strong className="text-[#C8A45D]">{AGENCY_DETAILS.chiefGuest}</strong>.
              </p>
              <p>
                Under our guiding principle <strong>"Hamari Zimmedari, Aapka Aitmaad"</strong>, we assume full responsibility for your travel logistics — from direct Saudia Airlines flights to handpicked hotels located within convenient walking distance of Masjid al-Haram and Masjid an-Nabawi.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#174C40]/60 p-4 rounded-xl border border-[#174C40]">
                <div className="text-[#C8A45D] font-bold text-sm flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-xs text-stone-300">
                  Fixed all-inclusive packages with zero surprise fees after registration.
                </p>
              </div>

              <div className="bg-[#174C40]/60 p-4 rounded-xl border border-[#174C40]">
                <div className="text-[#C8A45D] font-bold text-sm flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Elder & Family Comfort</span>
                </div>
                <p className="text-xs text-stone-300">
                  Proximity hotels (150m & 400m) eliminate exhausting commutes for elderly pilgrims.
                </p>
              </div>
            </div>

            {/* Address badge */}
            <div className="bg-[#174C40]/80 rounded-xl p-4 border border-[#C8A45D]/30 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="text-white block font-semibold">Registered Office Address:</strong>
                <span className="text-stone-300">{AGENCY_DETAILS.address}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inauguration Milestone Poster */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#174C40]/40 p-4 border border-[#C8A45D]/30 shadow-xl">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-[#C8A45D]/20">
                <img 
                  src="/assets/grand-opening.jpg" 
                  alt="New Roshan Tours & Travels Grand Opening Ceremony on 3rd July 2026" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 text-center sm:text-left bg-[#102D29]/90 p-3.5 rounded-xl border border-stone-700">
                <span className="text-[10px] text-[#C8A45D] font-bold uppercase tracking-wider block">
                  Grand Inauguration Date
                </span>
                <strong className="text-sm text-white block mt-0.5">
                  3rd July 2026 • Bad Namaz-e-Juma
                </strong>
                <span className="text-xs text-stone-300 mt-1 block">
                  Inaugurated by Chief Guest Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
