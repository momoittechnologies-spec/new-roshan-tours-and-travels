import React, { useState } from 'react';
import { 
  Plane, 
  MapPin, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  ShieldAlert,
  CalendarCheck
} from 'lucide-react';
import { UMRAH_SCHEDULES, SCHEDULE_METADATA, type ScheduleItem } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface ScheduleSectionProps {
  onSelectSchedule: (scheduleDetails: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onSelectSchedule }) => {
  const [filter, setFilter] = useState<'all' | 'filling' | 'open'>('all');

  const filteredSchedules = UMRAH_SCHEDULES.filter((item: ScheduleItem) => {
    if (filter === 'filling') return item.status === 'Limited' || item.status === 'Fast Filling';
    if (filter === 'open') return item.status === 'Open';
    return true;
  });

  return (
    <section id="schedules" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Last Updated Indicator */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <CalendarCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
            Confirmed Group Batches
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Upcoming Departure Schedules
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Direct roundtrip flights from <strong className="text-[#174C40]">Hyderabad (HYD) to Jeddah (JED)</strong> on premium <strong className="text-[#174C40]">Saudia Airlines</strong>. Transparent fixed B2C pricing.
          </p>
          <div className="text-xs text-stone-500 font-medium">
            Schedule last updated: <strong>{SCHEDULE_METADATA.lastUpdated}</strong> • Source: Kadapa Central Office
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Schedule Filter">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all focus-ring ${
              filter === 'all'
                ? 'bg-[#102D29] text-[#C8A45D] shadow-sm'
                : 'bg-[#F8F5ED] text-stone-700 hover:bg-stone-200/80 border border-stone-200'
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
                : 'bg-[#F8F5ED] text-stone-700 hover:bg-stone-200/80 border border-stone-200'
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
                : 'bg-[#F8F5ED] text-stone-700 hover:bg-stone-200/80 border border-stone-200'
            }`}
          >
            Seats Open
          </button>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((schedule: ScheduleItem) => {
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

        {/* Cancellation Notice (Verified policy from poster) */}
        <div className="mt-10 bg-[#F8F5ED] border border-[#C8A45D]/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
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
    </section>
  );
};
