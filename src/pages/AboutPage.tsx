import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Award,
  Compass,
  HeartHandshake
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { SEOHead } from '../components/SEOHead';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface AboutPageProps {
  onOpenBooking: (prefillNote?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About New Roshan Tours & Travels Umrah Agency Kadapa",
    "description": "Learn about New Roshan Tours & Travels Umrah & Ziyarath India Pvt Ltd, Kadapa. Inaugurated 3rd July 2026. Discover our pilgrimage values, 5-star hotel proximities, and direct Saudia flights.",
    "url": "https://new-roshan-tours-and-travels.vercel.app/about",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.",
      "telephone": "+91 90590 57239",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13/403-1, Rahmatullah Street, YV Street, Ganagapeta",
        "addressLocality": "Kadapa",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "516001",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#26332F]">
      <SEOHead 
        title="About Us | New Roshan Tours & Travels Umrah Agency Kadapa"
        description="Learn about New Roshan Tours & Travels Umrah & Ziyarath India Pvt Ltd, Kadapa. Inaugurated on 3rd July 2026. Discover our pilgrimage values, 5-star hotel proximities, and direct Saudia flights."
        keywords="About New Roshan Tours and Travels, Umrah travel agency Kadapa, Umrah agency Andhra Pradesh, Kadapa Umrah tour operator, Hazrath Sufi Shah Mohammed Abdus Sattar"
        canonicalPath="/about"
        schema={schema}
      />

      {/* 1. Page Header & Breadcrumbs */}
      <section className="bg-gradient-to-b from-[#102D29] via-[#102D29] to-[#174C40] text-white pt-28 sm:pt-36 pb-16 sm:pb-20 relative overflow-hidden">
        <div 
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#C8A45D]/10 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-stone-400 mb-6 font-medium">
            <Link to="/" className="hover:text-[#C8A45D] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#C8A45D]">About Us</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#C8A45D]/20 border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              Official Registered Entity · Inaugurated 3rd July 2026
            </div>
            
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Sacred Service Built on <span className="text-[#C8A45D]">Truth, Comfort & Sincerity</span>
            </h1>

            <p className="font-arabic text-[#C8A45D] text-xl sm:text-2xl font-bold pt-1">
              {AGENCY_DETAILS.mottoArabic}
            </p>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              <strong>NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.</strong> is Kadapa's dedicated pilgrimage travel agency, established to offer pilgrims across Andhra Pradesh and Telangana transparent, 5-star, and religiously guided Umrah and Ziyarath journeys.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Grand Inauguration & Foundation Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Story & Background */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase text-[#C8A45D] tracking-wider block">
                The Inception of Our Pilgrimage Journey
              </span>
              <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D29] leading-tight">
                Inaugurated with Spiritual Duahs on 3rd July 2026
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <p>
                  Our Kadapa headquarters was inaugurated on <strong>3rd July 2026 (Bad Namaz-e-Juma)</strong> with the auspicious presence and blessings of Chief Guest <strong>{AGENCY_DETAILS.chiefGuest}</strong>.
                </p>
                <p>
                  For decades, pilgrims from Kadapa and Rayalaseema have faced unfulfilled promises — hotels located miles away from the Haram, deceptive layover flights, subpar catering, and surprise fees upon departure. New Roshan Tours & Travels was established with a singular, resolute intention: to provide our local community with honest, completely transparent, and dignified Umrah travel.
                </p>
                <p>
                  Our motto, <strong className="text-[#102D29]">"{AGENCY_DETAILS.mottoEnglish}" ({AGENCY_DETAILS.mottoUrdu})</strong>, reflects our sacred promise: we take total accountability for your flights, visas, 5-star hotel reservations, and ground logistics, so you can dedicate every second in the Holy Sanctuaries to sincere devotion.
                </p>
              </div>

              {/* Verified Credentials List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F5ED] border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#102D29] block">Saudia Airlines Direct</span>
                    <span className="text-[11px] text-stone-600">HYD to JED Non-Stop Flights</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F5ED] border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#102D29] block">Close Haram Proximity</span>
                    <span className="text-[11px] text-stone-600">150m Madina · 400m Makkah</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F5ED] border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#102D29] block">Hyderabadi Buffet Meals</span>
                    <span className="text-[11px] text-stone-600">3 Daily Meals & Indian Tea</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F5ED] border border-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-[#102D29] block">Official Saudi e-Visa</span>
                    <span className="text-[11px] text-stone-600">Verified Ministry Processing</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Inauguration Ceremony Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#102D29] p-4 border border-[#C8A45D]/30 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden border border-[#C8A45D]/20">
                  <img 
                    src="/assets/grand-opening.jpg" 
                    alt="Grand Opening of New Roshan Tours & Travels Kadapa on 3rd July 2026" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="mt-4 p-4 rounded-xl bg-[#174C40]/80 border border-white/5 space-y-1.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#C8A45D] block">
                    Chief Guest of Honor
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {AGENCY_DETAILS.chiefGuest}
                  </h4>
                  <p className="text-xs text-stone-300">
                    Grand Opening Ceremony · Friday, 3rd July 2026 (Bad Namaz-e-Juma) at Kadapa Office.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values & Pilgrim Commitments */}
      <section className="py-16 sm:py-24 bg-[#F8F5ED]">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase text-[#C8A45D] tracking-wider block">
              Our Guiding Principles
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D29]">
              Why Pilgrims Place Their Sincere Faith in Us
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              We manage every nuance of the journey with precision, ensuring dignity and comfort for every elderly parent, mother, and child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-[#C8A45D]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold text-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#102D29]">
                Zero-Layover Flights
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We fly exclusively via Saudia Airlines direct flights between Hyderabad (HYD) and Jeddah (JED). This eliminates distressing connections and airport transfers for senior citizens and families.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-[#C8A45D]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold text-xl">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#102D29]">
                Genuine Walking Proximity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                In Madina, Al Marjan International is situated approx. 150 meters (less than 2 minutes walk) from Masjid an-Nabawi gates. In Makkah, Dlyar Alnada is approx. 400 meters flat walk from Masjid al-Haram.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-[#C8A45D]/40 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold text-xl">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-lg font-bold text-[#102D29]">
                Transparent Non-Gambling Ethics
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                All pricing is fully declared with clear terms. Even our promotional ₹999 community scheme is an advance package credit where non-drawn entries receive full ₹999 credit plus ₹2,000 bonus discount.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Leadership, Religious Guidance & Office Credentials */}
      <section className="py-16 sm:py-24 bg-[#102D29] text-white">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase text-[#C8A45D] tracking-wider block">
                Local Presence & Global Ground Execution
              </span>
              <h2 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Permanent Office in Kadapa, Dedicated Muallims in Makkah & Madinah
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Unlike online brokers or distant agencies, New Roshan Tours & Travels maintains a physical head office in Ganagapeta, Kadapa. You can visit in person, meet our directors, verify airline PNRs, inspect sample luggage bags, and hand over your original passports with total peace of mind.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
                  <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span>{AGENCY_DETAILS.address}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
                  <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span>Direct Hotlines: {AGENCY_DETAILS.phones[0].display} · {AGENCY_DETAILS.phones[1].display}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-300">
                  <Award className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span>Google Review Score: 5.0 ★★★★★ Verified Customer Rating</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#dfbe78] text-[#102D29] text-xs font-extrabold px-5 py-3 rounded-xl shadow-md transition-all focus-ring"
                >
                  <MapPin className="w-4 h-4 text-[#102D29]" />
                  <span>Visit Our Kadapa Office</span>
                </Link>

                <a
                  href={createWhatsAppUrl({ intent: 'general' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-5 py-3 rounded-xl border border-[#C8A45D]/30 transition-all focus-ring"
                >
                  <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#174C40]/50 p-6 rounded-2xl border border-[#C8A45D]/20 text-center space-y-1">
                <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#C8A45D] block">
                  150m
                </span>
                <span className="text-xs font-bold text-white block">Madinah Hotel Distance</span>
                <span className="text-[11px] text-stone-400 block">Al Marjan Int. to Masjid an-Nabawi</span>
              </div>

              <div className="bg-[#174C40]/50 p-6 rounded-2xl border border-[#C8A45D]/20 text-center space-y-1">
                <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#C8A45D] block">
                  400m
                </span>
                <span className="text-xs font-bold text-white block">Makkah Hotel Distance</span>
                <span className="text-[11px] text-stone-400 block">Dlyar Alnada to Masjid al-Haram</span>
              </div>

              <div className="bg-[#174C40]/50 p-6 rounded-2xl border border-[#C8A45D]/20 text-center space-y-1">
                <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#C8A45D] block">
                  100%
                </span>
                <span className="text-xs font-bold text-white block">Saudia Direct Flights</span>
                <span className="text-[11px] text-stone-400 block">Hyderabad to Jeddah Non-Stop</span>
              </div>

              <div className="bg-[#174C40]/50 p-6 rounded-2xl border border-[#C8A45D]/20 text-center space-y-1">
                <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#C8A45D] block">
                  5.0 ★
                </span>
                <span className="text-xs font-bold text-white block">Google Verified Rating</span>
                <span className="text-[11px] text-stone-400 block">Kadapa Pilgrims Feedback</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Pre-Footer Call to Action */}
      <section className="py-14 bg-gradient-to-r from-[#174C40] via-[#102D29] to-[#174C40] text-white border-t border-[#C8A45D]/20">
        <div className="w-full max-w-5xl mx-auto px-4 text-center space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Plan Your Sacred Umrah Journey?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Connect with our pilgrimage coordinators today for upcoming Saudia Airlines departure batch availability and personalized package estimates.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenBooking('Inquiry from About Us Page')}
              className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#dfbe78] text-[#102D29] text-xs font-extrabold px-6 py-3 rounded-xl shadow-lg transition-all focus-ring"
            >
              <Calendar className="w-4 h-4 text-[#102D29]" />
              <span>Book Your Umrah</span>
            </button>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 bg-[#174C40] hover:bg-[#1f5c4f] text-white text-xs font-bold px-6 py-3 rounded-xl border border-[#C8A45D]/30 transition-all focus-ring"
            >
              <span>Explore All Packages</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};