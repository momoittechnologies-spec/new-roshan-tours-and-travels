import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { FEATURED_PACKAGES } from '../data/travelData';
import { SEOHead } from '../components/SEOHead';
import { PackagesSection } from '../components/PackagesSection';
import { FareCalculator } from '../components/FareCalculator';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface PackagesPageProps {
  onOpenBooking: (prefillNote?: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onOpenBooking }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Umrah Packages 2026 - New Roshan Tours & Travels Kadapa",
    "description": "All-inclusive Umrah packages from Kadapa with direct Saudia Airlines flights, walking distance 5-star hotels, buffet catering, and 8-piece luggage kits.",
    "itemListElement": FEATURED_PACKAGES.map((pkg, idx) => ({
      "@type": "TouristTrip",
      "position": idx + 1,
      "name": pkg.name,
      "description": pkg.tagline,
      "offers": {
        "@type": "Offer",
        "price": pkg.startingPrice.replace(/[^0-9]/g, ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#26332F]">
      <SEOHead 
        title="Umrah Packages 2026-2027 from Kadapa | Deluxe Saudia Flight ₹115,000"
        description="Explore premium all-inclusive Umrah packages from Kadapa. Deluxe Saudia direct flight package at ₹115,000. 5-star hotels near Haram (150m & 400m), Indian buffet, and complete 8-piece kit."
        keywords="Umrah packages from Kadapa, Umrah package price 2026, Deluxe Saudia Umrah 115000, Umrah tour operator Kadapa, Ramadan Umrah packages 2027 Kadapa"
        canonicalPath="/packages"
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
            <span className="text-[#C8A45D]">Umrah Packages</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#C8A45D]/20 border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              Fixed Departure Batches & All-Inclusive Pricing
            </div>
            
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Verified Umrah Packages from <span className="text-[#C8A45D]">Kadapa</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Transparent, all-inclusive pricing with zero hidden fees. Includes direct Saudia Airlines flights from Hyderabad, verified 5-star hotels within 150m of Madina and 400m of Makkah, daily Indian buffet catering, and complimentary 8-piece luggage kits.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Packages Cards Grid */}
      <PackagesSection onSelectPackage={(pkgName) => onOpenBooking(`Inquiry for ${pkgName}`)} />

      {/* 3. Fare Calculator Section */}
      <FareCalculator />

      {/* 4. Pre-Footer Action */}
      <section className="py-14 bg-[#102D29] text-white border-t border-[#C8A45D]/20">
        <div className="w-full max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white">
            Need a Customized Family or Group Package?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            Our Kadapa office specializes in private double-sharing, VIP executive suites, and custom departure dates for family groups and senior citizens.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppUrl({ intent: 'package', packageName: 'Custom Family Package' })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-6 py-3 rounded-xl border border-[#C8A45D]/30 transition-all focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
              <span>Request Custom Quote on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => onOpenBooking('Custom Family Package Inquiry')}
              className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#dfbe78] text-[#102D29] text-xs font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all focus-ring"
            >
              <Calendar className="w-4 h-4 text-[#102D29]" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};