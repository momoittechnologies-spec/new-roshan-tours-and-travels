import React from 'react';
import { 
  Plane, 
  Compass, 
  FileText, 
  Bus, 
  MapPin, 
  HeartHandshake 
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-5 h-5 text-[#C8A45D]" />,
      title: "Direct Saudia Air Ticketing",
      description: "Confirmed group bookings directly from Hyderabad (HYD) to Jeddah (JED) on Saudia Airlines with full luggage allowance and onboard meals."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#C8A45D]" />,
      title: "Guided Baghdad Sharif Ziyarath",
      description: "Spiritual Ziyarath journeys to blessed shrines in Baghdad Sharif, Najaf, and Karbala with experienced Indian religious guides."
    },
    {
      icon: <FileText className="w-5 h-5 text-[#C8A45D]" />,
      title: "Umrah Visa & Medical Insurance",
      description: "Fast-track Saudi e-Visa processing, mandatory health insurance coverage, and biometric consultation managed from our Kadapa office."
    },
    {
      icon: <Bus className="w-5 h-5 text-[#C8A45D]" />,
      title: "Luxury AC Ground Coaches",
      description: "Air-conditioned intercity transfers between Jeddah Airport, Makkah Al-Mukarramah, and Madinah Al-Munawwarah with dedicated baggage handling."
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#C8A45D]" />,
      title: "Historical Ziyarath Excursions",
      description: "Accompanied visits to Ghar-e-Hira, Ghar-e-Saur, Mount Uhud, Masjid Quba, Masjid Qiblatain, and the historic Date Palm gardens."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#C8A45D]" />,
      title: "Experienced Religious Muallims",
      description: "Qualified scholars providing ritual guidance in Urdu, Telugu, and English throughout every stage of your Tawaf, Sa'ee, and prayers."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C8A45D]" />
            Full Pilgrimage Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Comprehensive Travel & Ziyarath Services
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            From preliminary passport consultation in Kadapa to executive ground handling in the Holy Cities, we take complete responsibility for your peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="card-surface rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#102D29] flex items-center justify-center mb-5 shadow-xs">
                  {srv.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#102D29] mb-2 font-serif-title">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#26332F]/75 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#174C40]">
                <span>Certified Assistance</span>
                <span className="text-[#C8A45D]">Kadapa & AP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
