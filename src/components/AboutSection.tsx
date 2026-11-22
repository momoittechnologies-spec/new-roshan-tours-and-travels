import React from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  CheckCircle, 
  Sparkles, 
  Award, 
  Compass, 
  HeartHandshake 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              About New Roshan Tours & Travels
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title leading-tight">
              A Legacy of Trust, Dedicated to the <span className="text-gold-gradient">Guests of Allah</span>
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.</strong> was founded with a singular, noble mission: to provide the pilgrims of Kadapa, Rayalaseema, and the broader Andhra Pradesh & Telangana regions with an honest, transparent, and spiritually elevating Umrah journey.
              </p>
              <p>
                Our grand head office in Kadapa was officially inaugurated on <strong className="text-amber-300">3rd July 2026 (Bad Namaz-e-Juma)</strong> with the auspicious blessings of Chief Guest <strong className="text-amber-300">Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari</strong>.
              </p>
              <p>
                We believe that pilgrimage is not a commercial transaction — it is sacred service (<em>Khidmat</em>). Under our guiding motto <strong>"Hamari Zimmedari, Aapka Aitmaad"</strong>, every detail from direct Saudia Airlines tickets to handpicked 5-star hotels within minutes of the Haram courtyards is verified personally by our leadership.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-emerald-900/50 p-4 rounded-xl border border-emerald-800">
                <div className="text-amber-400 font-bold text-sm flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Transparent Fixed Pricing</span>
                </div>
                <p className="text-xs text-stone-300">
                  Fixed ₹1,15,000 all-inclusive packages with zero hidden fees after signing.
                </p>
              </div>

              <div className="bg-emerald-900/50 p-4 rounded-xl border border-emerald-800">
                <div className="text-amber-400 font-bold text-sm flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Elder & Family Priority</span>
                </div>
                <p className="text-xs text-stone-300">
                  Hotels within 150m and 400m eliminate long walks for senior citizens and mothers.
                </p>
              </div>
            </div>

            {/* Address badge */}
            <div className="bg-emerald-900/80 rounded-xl p-4 border border-amber-500/30 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong className="text-white block font-semibold">Kadapa Central Office:</strong>
                <span className="text-stone-300">{AGENCY_DETAILS.address}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Chief Guest & Grand Opening Milestone Poster */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-emerald-900/40 p-4 border border-amber-500/30 shadow-2xl backdrop-blur-md">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-amber-500/20">
                <img 
                  src="/assets/grand-opening.jpg" 
                  alt="New Roshan Tours & Travels Grand Opening 3rd July 2026" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-4 text-center sm:text-left bg-emerald-950/80 p-3.5 rounded-xl border border-emerald-800">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Inauguration Date & Time
                </span>
                <strong className="text-sm text-white block mt-0.5">
                  3rd July 2026 • Bad Namaz-e-Juma
                </strong>
                <span className="text-xs text-stone-300 mt-1 block">
                  Under the blessed presence of Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
