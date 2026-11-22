import React from 'react';
import { 
  Plane, 
  Compass, 
  FileText, 
  Bus, 
  MapPin, 
  Users, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Plane className="w-6 h-6 text-amber-400" />,
      title: "Saudia Direct Air Ticketing",
      description: "Direct group departures from Hyderabad (HYD) to Jeddah (JED) on Saudia Airlines with confirmed luggage allowance and meal service."
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: "Guided Baghdad Sharif Ziyarath",
      description: "Dedicated spiritual ziyarat itineraries to sacred shrines in Baghdad Sharif, Najaf, and Karbala with seasoned Indian tour guides."
    },
    {
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      title: "Express Umrah Visa & Insurance",
      description: "Hassle-free Saudi e-Visa processing, mandatory medical insurance, and biometric guidance right from our Kadapa office."
    },
    {
      icon: <Bus className="w-6 h-6 text-amber-400" />,
      title: "Luxury AC Ground Coaches",
      description: "Modern, air-conditioned executive coaches for all intercity transfers between Jeddah Airport, Makkah Mukarramah, and Madinah Munawwarah."
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-400" />,
      title: "Historical Ziyarath Excursions",
      description: "Accompanied visits to Ghar-e-Hira, Ghar-e-Saur, Mount Uhud, Masjid Quba, Masjid Qiblatain, and the famous Date Palm gardens."
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: "Experienced Religious Muallims",
      description: "Qualified Islamic guides providing step-by-step guidance in Urdu, Telugu, and English throughout every ritual of your Umrah."
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            Complete Travel Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            End-to-End Pilgrimage Services
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            From the moment you step into our Kadapa office until you return home with the sacred Zamzam, we take full responsibility for your comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center mb-5 shadow-md">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2 font-serif-title">
                  {srv.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                <span>Certified Assistance</span>
                <span className="text-amber-600">Kadapa & AP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
