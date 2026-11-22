import React from 'react';
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  ShoppingBag, 
  Luggage, 
  Droplet, 
  Umbrella, 
  Layers 
} from 'lucide-react';
import { PILGRIM_KIT_ITEMS } from '../data/travelData';

export const PilgrimKitSection: React.FC = () => {
  return (
    <section id="kit" className="py-20 bg-[#102D29] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40] border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-[#C8A45D]" />
            Zero-Hassle Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-title">
            Complimentary 8-Piece Pilgrim Kit <span className="text-[#C8A45D]">With Every Package</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            We provide every pilgrim with durable luggage, bags, and essential religious accessories during the pre-departure briefing at our Kadapa office.
          </p>
        </div>

        {/* Kit Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILGRIM_KIT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#174C40]/50 rounded-2xl p-5 border border-stone-700/80 hover:border-[#C8A45D]/60 transition-all hover:-translate-y-1 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#102D29] border border-[#C8A45D]/30 text-[#C8A45D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {idx === 0 && <Sparkles className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 1 && <Layers className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 2 && <Umbrella className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 3 && <Sparkles className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 4 && <Luggage className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 5 && <ShoppingBag className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 6 && <Droplet className="w-5 h-5 text-[#C8A45D]" />}
                {idx === 7 && <Droplet className="w-5 h-5 text-[#C8A45D]" />}
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] text-[#C8A45D] font-mono font-bold uppercase">Item #0{idx + 1}</span>
                <span className="text-emerald-400 text-[10px] font-bold uppercase">• Free</span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-[#C8A45D] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#174C40]/80 border border-[#C8A45D]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#102D29] text-[#C8A45D] flex items-center justify-center shrink-0 border border-[#C8A45D]/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base">Provided In-Person at our Kadapa Office</h4>
              <p className="text-xs text-stone-300 mt-0.5">
                Every pilgrim receives their luggage kit and Zamzam handling confirmation prior to departure.
              </p>
            </div>
          </div>
          <span className="bg-[#C8A45D] text-[#102D29] font-black text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-xs uppercase tracking-wider">
            Included at Zero Extra Cost
          </span>
        </div>

      </div>
    </section>
  );
};
