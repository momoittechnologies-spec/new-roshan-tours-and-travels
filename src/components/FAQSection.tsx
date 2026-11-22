import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  MessageCircle 
} from 'lucide-react';
import { FAQS, AGENCY_DETAILS } from '../data/travelData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-base">
            Everything you need to know about our Umrah packages, flight tickets, hotel proximity, and the ₹999 lucky draw.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                >
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Help Box */}
        <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-stone-900">Have a specific question not listed here?</h4>
            <p className="text-xs text-stone-500 mt-0.5">Our Kadapa team is available 7 days a week to guide you.</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${AGENCY_DETAILS.phones[0].raw}`}
              className="bg-emerald-900 text-amber-300 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 hover:bg-emerald-800 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call Office
            </a>
            <a
              href={`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${encodeURIComponent("Salam Alaikum, I have a query regarding Umrah booking.")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 hover:bg-emerald-500 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
