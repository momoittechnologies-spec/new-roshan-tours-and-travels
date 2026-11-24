import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  Send,
  FileCheck2,
  Navigation,
  Train,
  Bus,
  Sparkles
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { SEOHead } from '../components/SEOHead';
import { BrandLogo } from '../components/BrandLogo';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Kadapa',
    pilgrimsCount: '2',
    packagePreference: 'Deluxe Saudia Batch (₹1,15,000)',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your full name and WhatsApp phone number.");
      return;
    }
    const url = createWhatsAppUrl({
      intent: 'general',
      name: formData.name,
      city: formData.city,
      adults: parseInt(formData.pilgrimsCount, 10) || 2,
      customMessage: `• *Contact Us Page Inquiry:*\n• *Name:* ${formData.name}\n• *Phone:* ${formData.phone}\n• *City/Town:* ${formData.city}\n• *Pilgrims:* ${formData.pilgrimsCount}\n• *Package:* ${formData.packagePreference}\n• *Notes:* ${formData.message || 'Please share available departure dates and passport submission procedure.'}`
    });
    setFormSubmitted(true);
    window.open(url, '_blank');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact New Roshan Tours & Travels Kadapa Office",
    "description": "Contact New Roshan Tours & Travels Kadapa office. Address: 13/403-1 Rahmatullah St, Ganagapeta, Kadapa, AP. Call +91 9059057239 or WhatsApp for Umrah bookings & schedules.",
    "url": "https://new-roshan-tours-and-travels.vercel.app/contact",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "NEW ROSHAN TOURS & TRAVELS UMRAH & ZIYARATH INDIA PVT. LTD.",
      "telephone": ["+91-9059057239", "+91-9959578900"],
      "email": "info@newroshantoursandtravels.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "13/403-1, Rahmatullah Street, YV Street, Ganagapeta",
        "addressLocality": "Kadapa",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "516001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 14.4673,
        "longitude": 78.8242
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] text-[#26332F]">
      <SEOHead 
        title="Contact Us | New Roshan Tours & Travels Kadapa Office & Helplines"
        description="Contact New Roshan Tours & Travels Kadapa office. Address: 13/403-1 Rahmatullah St, Ganagapeta, Kadapa, AP. Call +91 9059057239 or WhatsApp for Umrah bookings & schedules."
        keywords="Contact New Roshan Tours and Travels, Umrah office Kadapa, Kadapa Umrah phone number, Ganagapeta tours and travels, Umrah agency contact Andhra Pradesh"
        canonicalPath="/contact"
        schema={schema}
      />

      {/* 1. Page Header */}
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
            <span className="text-[#C8A45D]">Contact Us</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#C8A45D]/20 border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              Centrally Located in Ganagapeta, Kadapa
            </div>

            <div className="pt-2">
              <BrandLogo variant="hero" />
            </div>
            
            <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get in Touch with Our <span className="text-[#C8A45D]">Kadapa Head Office</span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              Whether you are planning your first Umrah, booking a family group batch, or submitting original passports for Saudi e-Visa stamping, our team is at your dedicated service.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Direct Contact Channels Strip */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Physical Office */}
            <div className="p-6 rounded-2xl bg-[#F8F5ED] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#102D29]">
                Visit Our Office
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                13/403-1, Rahmatullah Street, YV Street, Ganagapeta, Kadapa, Andhra Pradesh – 516001.
              </p>
              <a
                href={AGENCY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#174C40] hover:text-[#C8A45D] pt-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: Phone Hotlines */}
            <div className="p-6 rounded-2xl bg-[#F8F5ED] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#102D29]">
                Direct Phone Hotlines
              </h3>
              <div className="space-y-2 text-xs">
                <div>
                  <a href={`tel:${AGENCY_DETAILS.phones[0].raw}`} className="font-bold text-[#102D29] hover:text-[#174C40] block">
                    {AGENCY_DETAILS.phones[0].display}
                  </a>
                  <span className="text-stone-500 text-[11px]">Primary Helpline &amp; WhatsApp Support</span>
                </div>
                <div className="pt-1 border-t border-stone-200">
                  <a href={`tel:${AGENCY_DETAILS.phones[1].raw}`} className="font-bold text-[#102D29] hover:text-[#174C40] block">
                    {AGENCY_DETAILS.phones[1].display}
                  </a>
                  <span className="text-stone-500 text-[11px]">Office Reservations &amp; Customer Inquiries</span>
                </div>
              </div>
            </div>

            {/* Card 3: Working Hours */}
            <div className="p-6 rounded-2xl bg-[#F8F5ED] border border-stone-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#174C40] text-[#C8A45D] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#102D29]">
                Office Working Hours
              </h3>
              <div className="space-y-1 text-xs text-stone-600">
                <p><strong className="text-[#102D29]">Monday – Saturday:</strong> 9:00 AM – 8:00 PM</p>
                <p><strong className="text-[#102D29]">Friday:</strong> Open Bad Namaz-e-Juma</p>
                <p><strong className="text-[#102D29]">Sunday:</strong> 10:00 AM – 2:00 PM (Emergency Helpline)</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Office Open for Walk-ins
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Inquiry Form & Landmark Details */}
      <section className="py-16 sm:py-24 bg-[#F8F5ED]">
        <div className="w-full max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase text-[#174C40] tracking-wider block mb-1">
                  Send Your Inquiry
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-extrabold text-[#102D29]">
                  Request Package Itinerary & Availability
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Fill in your preferred travel details below. Our Kadapa coordinators will reach out immediately via phone or WhatsApp with verified seat status and hotel room options.
                </p>
              </div>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                  ✓ WhatsApp inquiry chat opened. If your chat did not open automatically, please reach us directly at <strong>+91 90590 57239</strong>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9059057239"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                      Your City / District
                    </label>
                    <input
                      type="text"
                      placeholder="Kadapa, Proddatur, Rayachoty, etc."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                      Number of Pilgrims
                    </label>
                    <select
                      value={formData.pilgrimsCount}
                      onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                      className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                    >
                      <option value="1">1 Pilgrim (Individual)</option>
                      <option value="2">2 Pilgrims (Couple)</option>
                      <option value="3 to 4">3 to 4 Pilgrims (Family Group)</option>
                      <option value="5+">5+ Pilgrims (Large Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    Select Preferred Package
                  </label>
                  <select
                    value={formData.packagePreference}
                    onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                  >
                    <option value="Deluxe Saudia Batch (₹1,15,000)">Deluxe Saudia Airlines Batch — ₹1,15,000</option>
                    <option value="Classic Group Package (₹1,05,000)">Classic Group Umrah Package — ₹1,05,000</option>
                    <option value="Executive Comfort Package (₹1,35,000)">Executive Comfort Package — ₹1,35,000</option>
                    <option value="Ramadan Mubarak Special (₹1,65,000)">Ramadan Mubarak Special Group — ₹1,65,000</option>
                    <option value="Custom Family Package">Customized Private Family Itinerary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide preferred travel month, requirements for elderly family members, wheelchair support, or double sharing requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] resize-none focus-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#174C40] hover:bg-[#102D29] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider focus-ring"
                >
                  <Send className="w-4 h-4 text-[#C8A45D]" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Office Guidance & Landmarks Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Landmark Transit Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase text-[#C8A45D] tracking-wider block">
                  Location & Transit Access
                </span>
                <h3 className="font-serif-title text-xl font-bold text-[#102D29]">
                  How to Reach Our Kadapa Office
                </h3>
                
                <div className="space-y-3 text-xs text-stone-600">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F5ED]">
                    <Bus className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102D29] block">From Kadapa RTC Main Bus Stand:</strong>
                      <span>Approx. 1.5 km (5 to 7 mins by auto-rickshaw via YV Street / Ganagapeta road).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F5ED]">
                    <Train className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102D29] block">From Kadapa Railway Station (HX):</strong>
                      <span>Approx. 3.0 km (10 to 12 mins by taxi or auto via Rahmatullah Street).</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F5ED]">
                    <Navigation className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102D29] block">Nearby Landmark:</strong>
                      <span>Located in Ganagapeta right off Rahmatullah Street near YV Street intersection.</span>
                    </div>
                  </div>
                </div>

                <a
                  href={AGENCY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#102D29] hover:bg-[#174C40] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C8A45D]" />
                </a>
              </div>

              {/* Passport & Document Submission Checklist */}
              <div className="bg-[#102D29] text-white rounded-2xl p-6 sm:p-8 border border-[#C8A45D]/30 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#C8A45D]">
                  <FileCheck2 className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Office Visit Checklist
                  </span>
                </div>
                <h3 className="font-serif-title text-lg font-bold text-white">
                  Documents Required for Umrah Booking
                </h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                    <span>Original Indian Passport (minimum 6 months validity)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                    <span>2 Passport-size Photographs (White background)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                    <span>Aadhaar Card Copy (for flight tickets and insurance)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
                    <span>Advance booking deposit for confirmed Saudia group PNR</span>
                  </li>
                </ul>
                <p className="text-[11px] text-stone-400 italic pt-1">
                  Our Kadapa office issues official stamped payment receipts and verified Saudi Ministry e-Visa confirmation vouchers.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};