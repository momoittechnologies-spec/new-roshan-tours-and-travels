import React from 'react';
import { 
  Gift, 
  Trophy, 
  ShieldCheck, 
  MessageCircle,
  Percent,
  FileText
} from 'lucide-react';
import { LUCKY_DRAW_DATA } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const LuckyDrawSection: React.FC = () => {
  return (
    <section id="lucky-draw" className="py-16 bg-[#F8F5ED] border-y border-[#C8A45D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#174C40]/10 text-[#174C40] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#C8A45D]" />
            Community Pilgrimage Initiative
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102D29] font-serif-title">
            ₹999 Umrah Community Lucky Draw Scheme
          </h2>
          <p className="text-[#26332F]/75 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            An in-office promotional program offering selected pilgrims up to 100% trip subsidy. Backed by guaranteed full credit protection if not drawn.
          </p>
        </div>

        {/* Prizes Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {LUCKY_DRAW_DATA.prizes.map((prize, idx) => (
            <div 
              key={prize.rank}
              className="bg-white rounded-xl p-5 border border-stone-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#C8A45D] uppercase tracking-wider">{prize.rank}</span>
                  <span className="bg-[#174C40]/10 text-[#174C40] text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                    {prize.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#102D29]">
                  {prize.title}
                </h3>
                <p className="text-xs text-[#26332F]/70 mt-1 leading-relaxed">
                  {prize.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-stone-500 text-[11px]">
                {idx === 0 ? <Trophy className="w-3.5 h-3.5 text-[#C8A45D]" /> : <Percent className="w-3.5 h-3.5 text-[#174C40]" />}
                <span>Subject to verified scheme rules</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner & Office Verification CTA */}
        <div className="bg-[#102D29] text-white rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#C8A45D] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Credit Guarantee (Not Selected)</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-serif-title">
              {LUCKY_DRAW_DATA.consolationGuarantee.totalBenefit}
            </h4>
            <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
              {LUCKY_DRAW_DATA.consolationGuarantee.details} {LUCKY_DRAW_DATA.consolationGuarantee.extraBonus}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={createWhatsAppUrl({ intent: 'luckydraw' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] font-bold text-xs px-5 py-3 rounded-xl transition-all active:scale-95 focus-ring shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#102D29]" />
              <span>Inquire Scheme via WhatsApp</span>
            </a>
            <a
              href="/assets/lucky-draw.jpg"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#174C40] hover:bg-[#1f5c4f] text-stone-200 font-semibold text-xs px-4 py-3 rounded-xl transition-colors focus-ring"
            >
              <FileText className="w-4 h-4 text-[#C8A45D]" />
              <span>View Official Flyer</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
