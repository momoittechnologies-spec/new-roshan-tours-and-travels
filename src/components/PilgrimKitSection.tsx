import React from 'react';
import { 
  Package, 
  Check, 
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
    <section id="kit" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Package className="w-3.5 h-3.5 text-amber-400" />
            Zero-Hassle Preparation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-title">
            Complimentary Pilgrim Kit Included <span className="text-gold-gradient">With Every Package</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            We supply every pilgrim with heavy-duty travel gear and essential religious items before departure, so you travel with complete confidence and peace of mind.
          </p>
        </div>

        {/* Kit Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILGRIM_KIT_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700 hover:border-amber-500/50 transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/30 border border-amber-500/40 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {idx === 0 && <Sparkles className="w-6 h-6 text-amber-400" />}
                {idx === 1 && <Layers className="w-6 h-6 text-amber-400" />}
                {idx === 2 && <Umbrella className="w-6 h-6 text-amber-400" />}
                {idx === 3 && <Sparkles className="w-6 h-6 text-amber-400" />}
                {idx === 4 && <Luggage className="w-6 h-6 text-amber-400" />}
                {idx === 5 && <ShoppingBag className="w-6 h-6 text-amber-400" />}
                {idx === 6 && <Droplet className="w-6 h-6 text-amber-400" />}
                {idx === 7 && <Droplet className="w-6 h-6 text-amber-400" />}
              </div>

              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] text-amber-400 font-mono font-bold uppercase">Item #0{idx + 1}</span>
                <span className="text-emerald-400 text-[10px] font-bold uppercase">• Free</span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {item.name}
              </h3>
              <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Distributed Directly at our Kadapa Office</h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                Pilgrims receive branded luggage, bags, and ihram materials during the pre-departure orientation briefing.
              </p>
            </div>
          </div>
          <span className="bg-amber-500 text-emerald-950 font-black text-xs px-4 py-2 rounded-xl whitespace-nowrap shadow-md">
            100% Free of Charge
          </span>
        </div>

      </div>
    </section>
  );
};
