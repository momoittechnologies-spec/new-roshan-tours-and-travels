import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';
import { FAQS, AGENCY_DETAILS } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#C8A45D]" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Frequently Asked Questions
          </h2>
          <p className="text-[#26332F]/80 text-base">
            Essential information regarding our Umrah packages, flight arrangements, hotel distances, and booking guidelines.
          </p>
        </div>

        {/* Accordion with Accessibility Controls */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const headingId = `faq-heading-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={idx}
                className="bg-[#F8F5ED] rounded-xl border border-stone-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-stone-200/50 transition-colors focus-ring"
                >
                  <span className="font-bold text-[#102D29] text-xs sm:text-sm">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full shrink-0 ${isOpen ? 'bg-[#174C40] text-white' : 'bg-stone-200 text-stone-600'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#26332F]/80 leading-relaxed border-t border-stone-200/60 bg-white"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Help Box */}
        <div className="mt-10 p-6 bg-[#F8F5ED] rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#102D29]">Have a specific query not covered here?</h4>
            <p className="text-xs text-stone-600 mt-0.5">Our Kadapa team is available to assist you personally.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
              className="bg-[#102D29] text-[#C8A45D] font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 hover:bg-[#174C40] transition-colors focus-ring"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Kadapa Office</span>
            </a>
            <a
              href={createWhatsAppUrl({ intent: 'general' })}
              target="_blank"
              rel="noreferrer"
              className="bg-[#174C40] text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 hover:bg-[#102D29] transition-colors focus-ring"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
