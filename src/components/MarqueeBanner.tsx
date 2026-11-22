import React from 'react';
import { 
  Sparkles, 
  Plane, 
  MapPin, 
  Star, 
  Phone, 
  ShieldCheck, 
  HeartHandshake 
} from 'lucide-react';

export const MarqueeBanner: React.FC = () => {
  const marqueeItems = [
    {
      icon: <span className="text-[#C8A45D] font-arabic font-bold text-sm tracking-wider">لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ</span>,
      text: "Labbaik Allahumma Labbaik",
      highlight: true
    },
    {
      icon: <Plane className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Direct Saudia Airlines Batches (HYD ➔ JED Non-Stop)",
      highlight: false
    },
    {
      icon: <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Kadapa Head Office: 13/403-1 Rahmatullah Street, Ganagapeta",
      highlight: false
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Walking Distance Hotels: 150m in Madinah & 400m in Makkah",
      highlight: true
    },
    {
      icon: <Star className="w-3.5 h-3.5 text-[#C8A45D] fill-[#C8A45D]" />,
      text: "5.0 Star Rated on Google (Verified Reviews)",
      highlight: false
    },
    {
      icon: <HeartHandshake className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Hamari Zimmedari, Aapka Aitmaad",
      highlight: true
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Complimentary 8-Piece Luggage & Pilgrim Kit Included",
      highlight: false
    },
    {
      icon: <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />,
      text: "Helpline: +91 90590 57239 / +91 99595 78900",
      highlight: false
    }
  ];

  return (
    <div 
      className="bg-[#174C40] text-white py-3 border-y border-[#C8A45D]/30 overflow-hidden relative select-none shadow-xs"
      aria-label="Announcements and Business Highlights"
    >
      {/* Visual edge fades */}
      <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-[#174C40] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#174C40] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8 text-xs font-semibold tracking-wide">
        {/* Track 1 */}
        {marqueeItems.map((item, idx) => (
          <div key={`track1-${idx}`} className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            {item.icon}
            <span className={item.highlight ? 'text-[#C8A45D] font-bold' : 'text-stone-200'}>
              {item.text}
            </span>
            <span className="text-[#C8A45D]/40 text-xs ml-4">✦</span>
          </div>
        ))}

        {/* Track 2 (Duplicate for seamless loop with aria-hidden) */}
        {marqueeItems.map((item, idx) => (
          <div key={`track2-${idx}`} aria-hidden="true" className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            {item.icon}
            <span className={item.highlight ? 'text-[#C8A45D] font-bold' : 'text-stone-200'}>
              {item.text}
            </span>
            <span className="text-[#C8A45D]/40 text-xs ml-4">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
