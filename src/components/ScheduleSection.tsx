import React, { useState } from 'react';
import { 
  Calendar, 
  Plane, 
  MapPin, 
  AlertCircle, 
  Check, 
  Clock, 
  ArrowRight, 
  MessageCircle, 
  Info,
  ShieldAlert
} from 'lucide-react';
import { UMRAH_SCHEDULES, AGENCY_DETAILS } from '../data/travelData';

interface ScheduleSectionProps {
  onSelectSchedule: (scheduleDetails: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onSelectSchedule }) => {
  const [filter, setFilter] = useState<'all' | 'filling' | 'open'>('all');

  const filteredSchedules = UMRAH_SCHEDULES.filter((item) => {
    if (filter === 'filling') return item.status === 'Limited' || item.status === 'Last Seats';
    if (filter === 'open') return item.status === 'Open' || item.status === 'Fast Filling';
    return true;
  });

  return (
    <section id="schedules" className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Plane className="w-3.5 h-3.5 text-amber-700" />
            Official Departure Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Fixed Umrah Group Batches & Dates
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Direct round-trip flights from <strong className="text-emerald-800">Hyderabad (HYD) to Jeddah (JED)</strong> on premium <strong className="text-emerald-800">Saudia Airlines</strong>. Transparent B2C pricing with no hidden charges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              filter === 'all'
                ? 'bg-emerald-900 text-amber-300 shadow-md'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            All Batches
          </button>
          <button
            onClick={() => setFilter('filling')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              filter === 'filling'
                ? 'bg-emerald-900 text-amber-300 shadow-md'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            🔥 Fast Filling / Limited
          </button>
          <button
            onClick={() => setFilter('open')}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              filter === 'open'
                ? 'bg-emerald-900 text-amber-300 shadow-md'
                : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            ✅ Seats Open / Upcoming
          </button>
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map((schedule) => {
            const isUrgent = schedule.status === 'Limited' || schedule.status === 'Last Seats';
            return (
              <div
                key={schedule.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border transition-all hover:shadow-xl hover:-translate-y-1 relative flex flex-col justify-between ${
                  isUrgent ? 'border-amber-400 ring-1 ring-amber-400/50' : 'border-stone-200'
                }`}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1.5 ${
                    isUrgent 
                      ? 'bg-red-100 text-red-700 border border-red-200 animate-pulse' 
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  }`}>
                    <Clock className="w-3 h-3" />
                    {schedule.seatsLeftText}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-stone-500 block uppercase">Airline</span>
                    <span className="text-sm font-bold text-emerald-900 flex items-center gap-1">
                      <Plane className="w-3.5 h-3.5 text-amber-600" />
                      {schedule.airline}
                    </span>
                  </div>
                </div>

                {/* Dates Section */}
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-100 mb-4 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase font-semibold block">Onward Flight</span>
                      <strong className="text-base text-stone-900">{schedule.onwardDate}</strong>
                      <span className="text-xs text-stone-500 block">HYD ➔ JED</span>
                    </div>
                    <div className="text-center px-2">
                      <ArrowRight className="w-5 h-5 text-amber-600" />
                      <span className="text-[10px] text-stone-400 font-medium">14-15 Days</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-stone-500 uppercase font-semibold block">Return Flight</span>
                      <strong className="text-base text-stone-900">{schedule.returnDate}</strong>
                      <span className="text-xs text-stone-500 block">JED ➔ HYD</span>
                    </div>
                  </div>
                </div>

                {/* Hotel Information */}
                <div className="space-y-2 mb-5 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span><strong>Makkah:</strong> {schedule.makkahHotel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Madina:</strong> {schedule.madinaHotel}</span>
                  </div>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[11px] text-stone-500 block uppercase">B2C Fixed Price</span>
                    <div className="text-xl font-black text-emerald-900">{schedule.price}</div>
                  </div>
                  <button
                    onClick={() => onSelectSchedule(`${schedule.onwardDate} to ${schedule.returnDate} (${schedule.airline})`)}
                    className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-700 text-amber-300 font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Book Batch
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Crucial Agency Policy Note (Authentic from poster) */}
        <div className="mt-10 bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 bg-amber-200/70 text-amber-900 rounded-xl shrink-0">
            <ShieldAlert className="w-6 h-6 text-amber-800" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wide">
              Official Booking & Cancellation Policy
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 mt-0.5">
              <strong>Note:</strong> Once Umrah Visa and Saudia Airline group tickets are issued, the Total Package is <strong>Non-Refundable</strong>. Please confirm your passport validity (minimum 6 months) before confirming your reservation.
            </p>
          </div>
          <a
            href={`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${encodeURIComponent("Salam Alaikum, I would like to get custom dates for Umrah from Kadapa.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors"
          >
            Custom Date Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};
