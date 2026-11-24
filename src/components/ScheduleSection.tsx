import React, { useState } from 'react';
import { 
  Plane, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  ShieldAlert,
  CalendarCheck,
  Star,
  Phone,
  Building2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { 
  UMRAH_SCHEDULES, 
  SCHEDULE_METADATA, 
  AGENCY_DETAILS, 
  type ScheduleItem 
} from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ScheduleSectionProps {
  onSelectSchedule: (scheduleDetails: string) => void;
}

// Clean SVG representation of the official Saudia palm & crossed swords crest
const SaudiaCrestIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-label="Saudia Airlines Crest">
    <g fill="#006C35">
      {/* Palm fronds */}
      <path d="M24 5c-1.5 2.5-4 5-8 6 3-1 6.5-1 9 1.5 0-3.5 1-6 2-7.5-1.5 2.5-1 6 2 7.5 2.5-2.5 6-2.5 9-1.5-4-1-6.5-3.5-8-6-1 1.5 0 4 2 7.5-2-1.5-4-2-6-2s-4 .5-6 2c2-3.5 3-6 2-7.5z" />
      <path d="M24 13c-4 0-9 2-12 6 4-2 8-2 11 0 0-2.5 1-4.5 1-6 0 1.5 1 3.5 1 6 3-2 7-2 11 0-3-4-8-6-12-6z" />
      <path d="M24 19c-3 0-7 2-9 5 3-1.5 6-1.5 8 0 0-2 .5-3.5 1-5 0 1.5 1 3 1 5 2-1.5 5-1.5 8 0-2-3-6-5-9-5z" />
      {/* Palm trunk */}
      <path d="M23 23h2v8h-2z" />
      {/* Crossed swords */}
      <path d="M11 38c5-1 11.5-4 15.5-9.5l-1.5-1.5c-4 5-10 7.5-14.5 8.5l.5 2.5z" />
      <path d="M37 38c-5-1-11.5-4-15.5-9.5l1.5-1.5c4 5 10 7.5 14.5 8.5l-.5 2.5z" />
      <circle cx="9.5" cy="39" r="1.5" />
      <circle cx="38.5" cy="39" r="1.5" />
    </g>
  </svg>
);

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onSelectSchedule }) => {
  const [activeTab, setActiveTab] = useState<'official' | 'all'>('official');
  const [filter, setFilter] = useState<'all' | 'filling' | 'open'>('all');

  // The 4 verified flyer batches
  const officialFlyerBatches = UMRAH_SCHEDULES.slice(0, 4);

  const filteredAllSchedules = UMRAH_SCHEDULES.filter((item: ScheduleItem) => {
    if (filter === 'filling') return item.status === 'Limited' || item.status === 'Fast Filling';
    if (filter === 'open') return item.status === 'Open';
    return true;
  });

  return (
    <section id="schedules" className="py-20 sm:py-24 bg-[#F8F5ED] relative overflow-hidden">
      
      {/* Subtle background ambient gradients */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#102D29]/5 via-transparent to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
            Official Kadapa Office Departures
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102D29] font-serif-title tracking-tight">
            Umrah Groups Schedule
          </h2>
          <p className="text-[#26332F]/80 text-sm sm:text-base lg:text-lg">
            Direct roundtrip flights from <strong className="text-[#174C40]">Hyderabad (HYD) to Jeddah (JED)</strong> on premium <strong className="text-[#174C40]">Saudia Airlines</strong>. Transparent all-inclusive B2C pricing with walking distance hotels.
          </p>
          <div className="text-xs text-stone-500 font-medium">
            Schedule last updated: <strong className="text-[#102D29]">{SCHEDULE_METADATA.lastUpdated}</strong> • Source: Verified Kadapa Head Office Flyer
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10" role="tablist" aria-label="Schedule View Selector">
          <div className="inline-flex p-1.5 bg-stone-200/70 rounded-xl border border-stone-300/80 shadow-inner">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'official'}
              onClick={() => setActiveTab('official')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all focus-ring ${
                activeTab === 'official'
                  ? 'bg-[#102D29] text-[#C8A45D] shadow-md'
                  : 'text-stone-700 hover:text-[#102D29] hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Official Departure Board (4 Confirmed Batches)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold rounded-lg transition-all focus-ring ${
                activeTab === 'all'
                  ? 'bg-[#102D29] text-[#C8A45D] shadow-md'
                  : 'text-stone-700 hover:text-[#102D29] hover:bg-white/60'
              }`}
            >
              <Plane className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>All Batches & Ramadan 2027 ({UMRAH_SCHEDULES.length})</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            TAB 1: OFFICIAL LUXURY SCHEDULE BOARD (DESIGN RE-CREATION OF THE FLYER)
           ========================================================================= */}
        {activeTab === 'official' && (
          <div className="rounded-3xl bg-gradient-to-b from-[#0F2A26] via-[#102D29] to-[#0A1F1C] border-2 border-[#C8A45D]/60 p-4 sm:p-7 lg:p-9 shadow-2xl relative overflow-hidden text-white">
            
            {/* Decorative Islamic Arch Background Elements */}
            <div 
              className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#C8A45D]/10 blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#174C40]/40 blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Top Ornamental Frame with Arabic Calligraphy & Brand Lockup */}
            <div className="relative text-center border-b border-[#C8A45D]/30 pb-6 mb-7">
              
              {/* Talbiyah Calligraphy */}
              <div className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-[#C8A45D] font-bold tracking-wide drop-shadow-sm mb-1">
                لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ
              </div>
              <div className="text-[11px] sm:text-xs uppercase tracking-widest text-stone-300/90 font-serif-title italic mb-3">
                Labbaik Allahumma Labbaik
              </div>

              {/* Official Brand Name from Flyer */}
              <h3 className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-wide">
                NEW ROSHAN TOURS & TRAVELS
              </h3>
              <div className="text-[10px] sm:text-xs text-[#C8A45D] font-bold tracking-widest uppercase mt-0.5">
                — UMRAH & ZIYARATH PVT. LTD. —
              </div>

              {/* Arched Gold Medallion Banner */}
              <div className="inline-block mt-4">
                <div className="px-6 sm:px-10 py-2 sm:py-2.5 bg-gradient-to-r from-[#9A7B38] via-[#E2C57B] to-[#9A7B38] rounded-full shadow-lg border border-[#F8F5ED]/50 flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#102D29]" />
                  <span className="font-serif-title text-sm sm:text-lg lg:text-xl font-black text-[#102D29] uppercase tracking-wider">
                    Umrah Groups Schedule
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#102D29]" />
                </div>
              </div>

              {/* Tagline Badge */}
              <div className="mt-2 text-[11px] sm:text-xs text-stone-300 font-semibold tracking-wider uppercase">
                <span className="text-[#C8A45D]">✦</span> Your Journey Our Priority <span className="text-[#C8A45D]">✦</span>
              </div>
            </div>

            {/* Desktop Table View (>= 768px) */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#C8A45D]/30 shadow-lg bg-[#0C2420]/80 backdrop-blur-xs mb-7">
              <table className="w-full text-left border-collapse" aria-label="Official Umrah Groups Departure Schedule">
                <thead>
                  <tr className="bg-gradient-to-r from-[#174C40] via-[#102D29] to-[#174C40] border-b border-[#C8A45D]/40 text-stone-200 text-xs uppercase tracking-wider font-bold">
                    <th scope="col" className="py-4 px-5 text-[#C8A45D]">Onward Flight</th>
                    <th scope="col" className="py-4 px-5 text-[#C8A45D]">Return Flight</th>
                    <th scope="col" className="py-4 px-4 text-[#C8A45D]">Airlines</th>
                    <th scope="col" className="py-4 px-5 text-right text-[#C8A45D]">B2C Price</th>
                    <th scope="col" className="py-4 px-5 text-center text-[#C8A45D]">Status</th>
                    <th scope="col" className="py-4 px-5 text-center text-[#C8A45D]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C8A45D]/15 text-sm">
                  {officialFlyerBatches.map((batch, idx) => {
                    const isUrgent = batch.status === 'Limited' || batch.id === 'batch-nov-10';
                    const isFilling = batch.status === 'Fast Filling' || batch.id === 'batch-nov-18';

                    return (
                      <tr 
                        key={batch.id} 
                        className={`transition-colors hover:bg-white/[0.04] ${idx % 2 === 1 ? 'bg-white/[0.02]' : 'bg-transparent'}`}
                      >
                        {/* Onward */}
                        <td className="py-4 px-5">
                          <div className="font-extrabold text-base text-white font-serif-title">
                            {batch.onwardDate}
                          </div>
                          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-200/90 bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded-md mt-0.5">
                            <span>HYD ✈ JED</span>
                          </div>
                        </td>

                        {/* Return */}
                        <td className="py-4 px-5">
                          <div className="font-extrabold text-base text-white font-serif-title">
                            {batch.returnDate}
                          </div>
                          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-200/90 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded-md mt-0.5">
                            <span>JED ✈ HYD</span>
                          </div>
                        </td>

                        {/* Airline */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                              <SaudiaCrestIcon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="font-bold text-xs text-white">
                                Saudia
                              </div>
                              <div className="text-[10px] text-stone-300">
                                Direct Non-Stop
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* B2C Price */}
                        <td className="py-4 px-5 text-right">
                          <div className="text-xs text-stone-300 uppercase font-semibold">
                            Fixed All-Inclusive
                          </div>
                          <div className="text-xl font-black text-[#F4E3B2] tracking-tight">
                            {batch.price}
                          </div>
                        </td>

                        {/* Status Badge (Matching the Flyer) */}
                        <td className="py-4 px-5 text-center">
                          {isUrgent ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-rose-700 text-white border border-red-400 shadow-md animate-pulse">
                              <span className="w-2 h-2 rounded-full bg-white" />
                              02 SEATS LEFT
                            </span>
                          ) : isFilling ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-600 to-orange-700 text-white border border-amber-400 shadow-md">
                              <span className="w-2 h-2 rounded-full bg-white" />
                              10 SEATS LEFT
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-emerald-600 to-green-700 text-white border border-emerald-400 shadow-md">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              OPEN
                            </span>
                          )}
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-5 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <a
                              href={createWhatsAppUrl({ 
                                intent: 'schedule', 
                                batchDates: `${batch.onwardDate} to ${batch.returnDate} (Saudia Airlines)` 
                              })}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-[#0A1F1C] font-black text-xs px-3 py-2 rounded-lg transition-all active:scale-95 shadow-sm"
                              title="Book on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Enquire</span>
                            </a>
                            <button
                              type="button"
                              onClick={() => onSelectSchedule(`${batch.onwardDate} to ${batch.returnDate} (${batch.airline})`)}
                              className="inline-flex items-center gap-1 bg-[#C8A45D] hover:bg-[#d8b467] text-[#102D29] font-black text-xs px-3 py-2 rounded-lg transition-all active:scale-95 shadow-sm"
                            >
                              <span>Book</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View (< 768px) */}
            <div className="block md:hidden space-y-4 mb-7">
              {officialFlyerBatches.map((batch) => {
                const isUrgent = batch.status === 'Limited' || batch.id === 'batch-nov-10';
                const isFilling = batch.status === 'Fast Filling' || batch.id === 'batch-nov-18';

                return (
                  <div 
                    key={batch.id}
                    className="bg-[#0C2420]/90 border border-[#C8A45D]/40 rounded-2xl p-4 space-y-3 relative overflow-hidden shadow-lg"
                  >
                    {/* Header Row: Airline & Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0">
                          <SaudiaCrestIcon className="w-5 h-5" />
                        </div>
                        <span className="font-bold text-xs text-white">Saudia Airlines (Direct)</span>
                      </div>
                      
                      {isUrgent ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-red-600 text-white border border-red-400">
                          02 SEATS LEFT
                        </span>
                      ) : isFilling ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-amber-600 text-white border border-amber-400">
                          10 SEATS LEFT
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase bg-emerald-600 text-white border border-emerald-400">
                          OPEN
                        </span>
                      )}
                    </div>

                    {/* Flight Dates */}
                    <div className="grid grid-cols-2 gap-2 bg-white/[0.04] p-3 rounded-xl border border-white/10 text-center">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Onward</span>
                        <strong className="text-sm text-white font-serif-title block">{batch.onwardDate}</strong>
                        <span className="text-[10px] text-amber-300 font-bold">HYD ➔ JED</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold block">Return</span>
                        <strong className="text-sm text-white font-serif-title block">{batch.returnDate}</strong>
                        <span className="text-[10px] text-emerald-300 font-bold">JED ➔ HYD</span>
                      </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <span className="text-[10px] uppercase text-stone-400 font-semibold block">Fixed B2C Price</span>
                        <div className="text-lg font-black text-[#F4E3B2]">{batch.price}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={createWhatsAppUrl({ 
                            intent: 'schedule', 
                            batchDates: `${batch.onwardDate} to ${batch.returnDate} (Saudia Airlines)` 
                          })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#25D366] text-[#0A1F1C] font-black text-xs px-3 py-2 rounded-lg inline-flex items-center gap-1 shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => onSelectSchedule(`${batch.onwardDate} to ${batch.returnDate} (${batch.airline})`)}
                          className="bg-[#C8A45D] text-[#102D29] font-black text-xs px-3 py-2 rounded-lg shadow-sm"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 5-STAR HOTELS SHOWCASE (MATCHING THE FLYER CARDS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-7">
              
              {/* Makkah Hotel Card */}
              <div className="bg-gradient-to-r from-[#174C40]/90 to-[#102D29]/90 border-2 border-[#C8A45D]/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/20 border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#C8A45D]" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-[#C8A45D] tracking-wider">
                      MAKKAH HOTEL
                    </span>
                    <div className="flex text-[#C8A45D]" aria-label="5 Star Hotel">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-serif-title text-base sm:text-lg font-black text-white">
                    DIYAR ALNADA HOTEL
                  </h4>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-200">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span>(APPROXE) (400 Mtrs) • Flat Walk to Haram</span>
                  </div>
                </div>
              </div>

              {/* Madina Hotel Card */}
              <div className="bg-gradient-to-r from-[#174C40]/90 to-[#102D29]/90 border-2 border-[#C8A45D]/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#C8A45D]/20 border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#C8A45D]" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs uppercase font-extrabold text-[#C8A45D] tracking-wider">
                      MADINA HOTEL
                    </span>
                    <div className="flex text-[#C8A45D]" aria-label="5 Star Hotel">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h4 className="font-serif-title text-base sm:text-lg font-black text-white">
                    AL MARJAN INTERNATIONAL
                  </h4>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-200">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span>(APPROXE) (150 Mtrs) • 2 Mins to Prophet's Mosque</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Partner Airline & Quality Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              
              {/* Saudia Partner Badge */}
              <div className="bg-[#0A1F1C]/80 border border-[#C8A45D]/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 shadow-sm">
                  <SaudiaCrestIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-serif-title text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                    SAUDIA AIRLINES
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Direct HYD ✈ JED Roundtrip Flights • Non-Stop
                  </div>
                </div>
              </div>

              {/* Motto Badge */}
              <div className="bg-[#0A1F1C]/80 border border-[#C8A45D]/30 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A45D] to-[#9A7B38] text-[#102D29] flex items-center justify-center shrink-0 font-serif-title font-black text-xs shadow-sm">
                  ★ NR ★
                </div>
                <div>
                  <div className="font-serif-title text-xs sm:text-sm font-black text-[#F4E3B2] uppercase tracking-wider">
                    YOUR JOURNEY OUR PRIORITY
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Experienced Kadapa Muallims & Complete Care
                  </div>
                </div>
              </div>

            </div>

            {/* Official Contact & Kadapa Address Strip */}
            <div className="bg-[#0A1F1C] border border-[#C8A45D]/40 rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left mb-5">
              
              {/* Phone Hotlines */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 text-white font-mono text-sm sm:text-base font-bold bg-[#174C40]/60 border border-[#C8A45D]/30 px-3.5 py-1.5 rounded-xl">
                  <Phone className="w-4 h-4 text-[#C8A45D]" />
                  <a href={`tel:${AGENCY_DETAILS.phones[0].raw}`} className="hover:text-[#C8A45D] transition-colors">
                    {AGENCY_DETAILS.phones[0].raw}
                  </a>
                  <span className="text-[#C8A45D]">|</span>
                  <a href={`tel:${AGENCY_DETAILS.phones[1].raw}`} className="hover:text-[#C8A45D] transition-colors">
                    {AGENCY_DETAILS.phones[1].raw}
                  </a>
                </div>
              </div>

              {/* Verified Kadapa Office Address from Flyer */}
              <div className="text-xs text-stone-300 flex items-center justify-center lg:justify-end gap-1.5">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>
                  <strong>Rahmatullah Street, Office No: 13/403-1</strong>, Kadapa Dist., Andhra Pradesh & Telangana
                </span>
              </div>
            </div>

            {/* PROMINENT GOLDEN CANCELLATION POLICY RIBBON (MATCHING FLYER FOOTER) */}
            <div className="bg-gradient-to-r from-[#9A7B38] via-[#E2C57B] to-[#9A7B38] text-[#102D29] rounded-xl p-3 sm:p-3.5 text-center shadow-lg border border-[#F8F5ED]/60 font-bold text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 font-black uppercase tracking-wide">
                <ShieldAlert className="w-4 h-4 text-[#102D29]" />
                Note: Once Visa issued, Total Package is <span className="underline decoration-red-700 decoration-2">Non-Refundable</span>
              </span>
            </div>

          </div>
        )}

        {/* =========================================================================
            TAB 2: ALL BATCHES & EXTENDED SCHEDULE (CARDS VIEW)
           ========================================================================= */}
        {activeTab === 'all' && (
          <div className="space-y-8">
            
            {/* Filter Tabs */}
            <div className="flex justify-center gap-2" role="tablist" aria-label="Schedule Filter">
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'all'}
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-ring ${
                  filter === 'all'
                    ? 'bg-[#102D29] text-[#C8A45D] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                All Batches ({UMRAH_SCHEDULES.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'filling'}
                onClick={() => setFilter('filling')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-ring ${
                  filter === 'filling'
                    ? 'bg-[#102D29] text-[#C8A45D] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                Fast Filling Batches
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'open'}
                onClick={() => setFilter('open')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-ring ${
                  filter === 'open'
                    ? 'bg-[#102D29] text-[#C8A45D] shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                }`}
              >
                Seats Open
              </button>
            </div>

            {/* Schedule Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAllSchedules.map((schedule: ScheduleItem) => {
                const isUrgent = schedule.status === 'Limited' || schedule.status === 'Fast Filling';
                return (
                  <div
                    key={schedule.id}
                    className={`card-surface rounded-2xl p-6 relative flex flex-col justify-between ${
                      isUrgent ? 'border-[#C8A45D]/60' : 'border-stone-200'
                    }`}
                  >
                    {/* Status & Airline */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1.5 ${
                        isUrgent 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                      }`}>
                        <Clock className="w-3 h-3" />
                        {schedule.seatsLeftText}
                      </span>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 uppercase block font-semibold">Airline</span>
                        <span className="text-xs font-bold text-[#102D29] flex items-center gap-1">
                          <Plane className="w-3 h-3 text-[#C8A45D]" />
                          {schedule.airline}
                        </span>
                      </div>
                    </div>

                    {/* Dates Section */}
                    <div className="bg-[#F8F5ED] rounded-xl p-4 border border-[#174C40]/10 mb-4 space-y-2">
                      <div className="flex justify-between items-center text-xs sm:text-sm">
                        <div>
                          <span className="text-[10px] text-stone-500 uppercase font-semibold block">Onward Flight</span>
                          <strong className="text-sm sm:text-base text-[#102D29]">{schedule.onwardDate}</strong>
                          <span className="text-[11px] text-stone-500 block">HYD ➔ JED</span>
                        </div>
                        <div className="text-center px-2">
                          <ArrowRight className="w-4 h-4 text-[#C8A45D] mx-auto" />
                          <span className="text-[10px] text-stone-400 font-medium">14-15 Days</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-stone-500 uppercase font-semibold block">Return Flight</span>
                          <strong className="text-sm sm:text-base text-[#102D29]">{schedule.returnDate}</strong>
                          <span className="text-[11px] text-stone-500 block">JED ➔ HYD</span>
                        </div>
                      </div>
                    </div>

                    {/* Hotel Proximity */}
                    <div className="space-y-1.5 mb-5 text-xs text-[#26332F]/80">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                        <span><strong>Makkah:</strong> {schedule.makkahHotel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#174C40] shrink-0" />
                        <span><strong>Madina:</strong> {schedule.madinaHotel}</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                      <div>
                        <span className="text-[10px] text-stone-500 block uppercase font-semibold">Fixed B2C Price</span>
                        <div className="text-xl font-black text-[#174C40]">{schedule.price}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={createWhatsAppUrl({ intent: 'schedule', batchDates: `${schedule.onwardDate} to ${schedule.returnDate}` })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-[#174C40] hover:bg-[#102D29] text-white font-bold text-xs px-3.5 py-2.5 rounded-lg transition-all active:scale-95 focus-ring shadow-xs"
                          title="Enquire on WhatsApp"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#C8A45D]" />
                          <span>WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => onSelectSchedule(`${schedule.onwardDate} to ${schedule.returnDate} (${schedule.airline})`)}
                          className="bg-stone-100 hover:bg-stone-200 text-[#102D29] font-bold text-xs px-3 py-2.5 rounded-lg transition-colors focus-ring"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cancellation Notice */}
            <div className="bg-[#F8F5ED] border border-[#C8A45D]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl shrink-0">
                <ShieldAlert className="w-6 h-6 text-[#174C40]" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#102D29] uppercase tracking-wide">
                  Verified Booking & Cancellation Policy
                </h4>
                <p className="text-xs sm:text-sm text-[#26332F]/85 mt-0.5">
                  {SCHEDULE_METADATA.policyNote}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectSchedule("Custom Dates Inquiry")}
                className="shrink-0 bg-[#174C40] hover:bg-[#102D29] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors focus-ring"
              >
                Custom Date Inquiry
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
