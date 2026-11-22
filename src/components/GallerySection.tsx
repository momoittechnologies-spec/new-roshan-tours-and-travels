import React, { useState } from 'react';
import { 
  Images, 
  ExternalLink, 
  X, 
  Sparkles, 
  Award, 
  ZoomIn 
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string; tag: string } | null>(null);

  const galleryItems = [
    {
      src: '/assets/grand-opening.jpg',
      caption: 'Official Grand Opening & Ribbon Cutting with Chief Guest Hazrath Sufi Shah Mohammed Abdus Sattar Al-Maroof Rowshen Ali Shah Qadri-O-Shuttari on 3rd July 2026.',
      tag: 'Grand Opening (3rd July 2026)',
      title: 'Grand Inauguration Ceremony'
    },
    {
      src: '/assets/umrah-schedule.jpg',
      caption: 'Saudia Airlines Direct HYD-JED Fixed Batches & 5-Star Hotel Package Schedule (₹1,15,000 All-Inclusive).',
      tag: 'Flight Schedule',
      title: 'Official Umrah Batches'
    },
    {
      src: '/assets/lucky-draw.jpg',
      caption: 'A Golden Opportunity: Win 100% Free Umrah or Up to 50% Discounts with the ₹999 Lucky Draw & Guaranteed Bonus.',
      tag: 'Special Offer',
      title: '₹999 Lucky Draw Flyer'
    },
    {
      src: '/assets/store-office.jpg',
      caption: 'New Roshan Tours & Travels Kadapa Head Office located at 13/403-1, Rahmatullah Street, Ganagapeta.',
      tag: 'Head Office',
      title: 'Kadapa Office & Storefront'
    },
    {
      src: '/assets/kadapa-banner.jpg',
      caption: '"Jaldi Kadapa Mein Daftar Khol Rahe Hain" — Dedicated to serving the Hujjaj & pilgrims across Rayalaseema.',
      tag: 'Kadapa Welcome',
      title: 'City Launch Announcement'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Images className="w-3.5 h-3.5 text-emerald-700" />
            Authentic Visual Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Our Official Postings & Office Milestones
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Review our official announcements, schedule releases, Kadapa headquarters, and inauguration memories. Click any image to view in high resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 cursor-pointer hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-amber-500 text-emerald-950 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                    Enlarge Image
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-stone-900 text-base group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border border-amber-500/40 p-2 sm:p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-auto flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="pt-3 px-2 text-center sm:text-left">
              <span className="text-xs text-amber-400 font-bold uppercase">{selectedImage.tag}</span>
              <p className="text-stone-300 text-xs sm:text-sm mt-0.5">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
