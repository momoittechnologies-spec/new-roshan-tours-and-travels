import React from 'react';
import { Compass } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/travelData';

export const JourneyGuideSection: React.FC = () => {
  return (
    <section id="journey-guide" className="py-20 bg-[#F8F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#C8A45D]" />
            Step-By-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Your Pilgrimage Journey With Us
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            From initial document verification in Kadapa to your safe return with holy Zamzam, here is what you can expect at every step.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-[85%] h-0.5 bg-[#C8A45D]/30 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {JOURNEY_STEPS.slice(0, 4).map((item) => (
              <div 
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#C8A45D]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#102D29] text-[#C8A45D] font-black text-sm flex items-center justify-center font-mono shadow-sm">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Step {item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#102D29] mb-2 font-serif-title">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#26332F]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative z-10">
            {JOURNEY_STEPS.slice(4, 7).map((item) => (
              <div 
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:border-[#C8A45D]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#174C40] text-[#C8A45D] font-black text-sm flex items-center justify-center font-mono shadow-sm">
                      {item.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-stone-400">Step {item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#102D29] mb-2 font-serif-title">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#26332F]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
