import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Plane } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ScheduleSection } from '../components/ScheduleSection';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface SchedulesPageProps {
  onOpenBooking: (prefillNote?: string) => void;
}

export const SchedulesPage: React.FC<SchedulesPageProps> = ({ onOpenBooking }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Umrah Departures Schedule 2026 - Saudia Airlines Direct Flights",
    "description": "Upcoming group Umrah departures from Hyderabad direct to Jeddah on Saudia Airlines. Verified batch dates, seat availability, and fixed all-inclusive ₹115,000 packages.",
    "url": "https://new-roshan-tours-and-travels.vercel.app/schedules"
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#26332F]">
      <SEOHead 
        title="Umrah Group Departures Schedule 2026 | Saudia Direct Flights from Hyderabad"
        description="Upcoming group Umrah departures from Hyderabad direct to Jeddah on Saudia Airlines. Check dates, pricing (₹115,000), seat availability, and book your slot."
        keywords="Umrah departures schedule 2026, Saudia Airlines Umrah Hyderabad, Umrah batch dates Kadapa, direct Umrah flights Hyderabad Jeddah, New Roshan schedule"
        canonicalPath="/schedules"
        schema={schema}
      />

      {/* 1. Header & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#102D29] via-[#102D29] to-[#174C40] text-white pt-28 sm:pt-36 pb-14 sm:pb-18 relative overflow-hidden">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A45D]/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
          
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6 font-medium">
            <Link to="/" className="hover:text-[#C8A45D] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C8A45D]">Departures Schedule</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#C8A45D]/20 border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-[#C8A45D]" />
              Saudia Airlines Direct Group Departures (HYD ✈ JED)
            </div>
            
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Upcoming Umrah Departures <span className="text-[#C8A45D]">Calendar</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              All batches fly directly from Hyderabad (HYD) to Jeddah (JED) on Saudia Airlines without stressful stopovers. Seats fill rapidly — review open dates and confirm your family's booking with our Kadapa office today.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Schedule Section */}
      <ScheduleSection onSelectSchedule={(batchInfo) => onOpenBooking(batchInfo)} />

      {/* 3. Pre-Footer Call to Action */}
      <section className="py-14 bg-[#102D29] text-white border-t border-[#C8A45D]/20">
        <div className="w-full max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#C8A45D]/20 border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            <span>Fast Filling Group Batches</span>
          </div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white">
            Have a Specific Departure Date in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Contact our Kadapa office to lock in current Saudia group fares and reserve your preferred room sharing configuration.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl({ intent: 'schedule' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-6 py-3 rounded-xl border border-[#C8A45D]/30 transition-all focus-ring"
            >
              <span>Confirm Seats on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#dfbe78] text-[#102D29] text-xs font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all focus-ring"
            >
              <span>Visit Kadapa Office</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};