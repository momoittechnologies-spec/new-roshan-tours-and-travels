import React from 'react';
import { 
  Building2, 
  MapPin, 
  Star, 
  Check, 
  Wifi, 
  Coffee, 
  Utensils, 
  Compass, 
  Sparkles 
} from 'lucide-react';
import { HOTEL_DETAILS } from '../data/travelData';

export const HotelsSection: React.FC = () => {
  return (
    <section id="hotels" className="py-20 bg-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            Verified Premium Accommodations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            5-Star Hospitality Just Steps from the Holy Harams
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Say goodbye to long bus queues and exhaustion. We house our pilgrims within easy, flat walking distance to the Kaaba and Prophet's Mosque.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Makkah Hotel Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 bg-emerald-950 overflow-hidden">
              {/* Hotel Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80" 
                alt="Makkah Al Mukarramah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute top-4 left-4 z-20 bg-amber-500 text-emerald-950 font-black text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                Makkah Al-Mukarramah
              </div>
              <div className="absolute top-4 right-4 z-20 flex text-amber-400 bg-emerald-950/80 px-2.5 py-1 rounded-full text-xs font-bold items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                5-Star Rated
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-2xl font-bold text-white font-serif-title">
                  {HOTEL_DETAILS.makkah.name}
                </h3>
                <div className="flex items-center gap-1.5 text-amber-300 text-sm font-semibold mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{HOTEL_DETAILS.makkah.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-stone-600 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    Indian Buffet Food
                  </span>
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Wifi className="w-4 h-4 text-amber-600" />
                    Free Fast Wi-Fi
                  </span>
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Coffee className="w-4 h-4 text-amber-600" />
                    24/7 Hot Water/Tea
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {HOTEL_DETAILS.makkah.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200/80 text-xs text-amber-900 font-medium flex items-center justify-between">
                <span>Walking time to Haram: <strong>5-7 Minutes</strong></span>
                <span className="text-amber-800 font-bold">Flat Terrain, No Hills</span>
              </div>
            </div>
          </div>

          {/* Madina Hotel Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 bg-emerald-950 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80" 
                alt="Madinah Al Munawwarah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
              />
              <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                Madinah Al-Munawwarah
              </div>
              <div className="absolute top-4 right-4 z-20 flex text-amber-400 bg-emerald-950/80 px-2.5 py-1 rounded-full text-xs font-bold items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                5-Star Rated
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20">
                <h3 className="text-2xl font-bold text-white font-serif-title">
                  {HOTEL_DETAILS.madina.name}
                </h3>
                <div className="flex items-center gap-1.5 text-amber-300 text-sm font-semibold mt-0.5">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>{HOTEL_DETAILS.madina.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-stone-600 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Closest Courtyard Gates
                  </span>
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Wifi className="w-4 h-4 text-amber-600" />
                    Free Wi-Fi
                  </span>
                  <span className="flex items-center gap-1 text-emerald-800">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    Indian/Hyderabadi Chefs
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {HOTEL_DETAILS.madina.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200/80 text-xs text-emerald-950 font-medium flex items-center justify-between">
                <span>Walking time to Prophet's Gate: <strong>Less than 2 Minutes!</strong></span>
                <span className="text-emerald-800 font-bold">Unmatched Markaziya Location</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
