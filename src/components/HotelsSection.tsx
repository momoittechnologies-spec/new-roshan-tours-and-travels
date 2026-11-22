import React from 'react';
import { 
  Building2, 
  MapPin, 
  Star, 
  Check, 
  Wifi, 
  Coffee, 
  Utensils, 
  MessageCircle
} from 'lucide-react';
import { HOTEL_DETAILS } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const HotelsSection: React.FC = () => {
  return (
    <section id="hotels" className="py-20 bg-[#F8F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-[#C8A45D]" />
            Haram Proximity Accommodations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Comfortable Stays Steps from the Sacred Mosques
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            We prioritize physical ease for our pilgrims. Accommodations are carefully selected in Central Markaziya within comfortable walking distance to the prayer courtyards.
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Makkah Hotel Card */}
          <div className="card-surface rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="relative h-64 bg-[#102D29] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80" 
                alt="Masjid al-Haram in Makkah Al-Mukarramah"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D29] via-[#102D29]/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#C8A45D] text-[#102D29] font-extrabold text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                Makkah Al-Mukarramah
              </div>
              <div className="absolute top-4 right-4 flex text-[#C8A45D] bg-[#102D29]/90 px-2.5 py-1 rounded-full text-xs font-bold items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>5-Star Standard</span>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white font-serif-title">
                  {HOTEL_DETAILS.makkah.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[#C8A45D] text-xs sm:text-sm font-semibold mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <span>{HOTEL_DETAILS.makkah.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-[#26332F]/80 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Utensils className="w-4 h-4 text-[#C8A45D]" />
                    Hyderabadi Buffet
                  </span>
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Wifi className="w-4 h-4 text-[#C8A45D]" />
                    Free Wi-Fi
                  </span>
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Coffee className="w-4 h-4 text-[#C8A45D]" />
                    Tea & Hot Water
                  </span>
                </div>

                <ul className="space-y-2">
                  {HOTEL_DETAILS.makkah.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#26332F]/80">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#174C40] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  Walking terrain: Flat route to King Abdulaziz Gate
                </span>
                <a
                  href={createWhatsAppUrl({ intent: 'hotel' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#174C40] hover:text-[#C8A45D] font-bold text-xs transition-colors focus-ring"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Madina Hotel Card */}
          <div className="card-surface rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="relative h-64 bg-[#102D29] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80" 
                alt="Prophet's Mosque courtyard in Madinah Al-Munawwarah"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D29] via-[#102D29]/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#174C40] text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                Madinah Al-Munawwarah
              </div>
              <div className="absolute top-4 right-4 flex text-[#C8A45D] bg-[#102D29]/90 px-2.5 py-1 rounded-full text-xs font-bold items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>5-Star Standard</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white font-serif-title">
                  {HOTEL_DETAILS.madina.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[#C8A45D] text-xs sm:text-sm font-semibold mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <span>{HOTEL_DETAILS.madina.distance}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-[#26332F]/80 border-b border-stone-100 pb-3">
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Building2 className="w-4 h-4 text-[#C8A45D]" />
                    Central Markaziya
                  </span>
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Wifi className="w-4 h-4 text-[#C8A45D]" />
                    Free Wi-Fi
                  </span>
                  <span className="flex items-center gap-1 text-[#174C40]">
                    <Utensils className="w-4 h-4 text-[#C8A45D]" />
                    Familiar Dining
                  </span>
                </div>

                <ul className="space-y-2">
                  {HOTEL_DETAILS.madina.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#26332F]/80">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#174C40] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  Walking time: Approx. 2 minutes leisurely walk to perimeter gates
                </span>
                <a
                  href={createWhatsAppUrl({ intent: 'hotel' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#174C40] hover:text-[#C8A45D] font-bold text-xs transition-colors focus-ring"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
