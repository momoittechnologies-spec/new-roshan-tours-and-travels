import React, { useState, useEffect } from 'react';
import { 
  Images, 
  X, 
  ZoomIn 
} from 'lucide-react';

interface GalleryItem {
  src: string;
  caption: string;
  tag: string;
  title: string;
}

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const galleryItems: GalleryItem[] = [
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
      src: '/assets/store-office.jpg',
      caption: 'New Roshan Tours & Travels Kadapa Head Office located at 13/403-1, Rahmatullah Street, Ganagapeta.',
      tag: 'Headquarters',
      title: 'Kadapa Office Storefront'
    },
    {
      src: '/assets/lucky-draw.jpg',
      caption: 'Official Promotional Scheme Flyer for the ₹999 Umrah Community Program.',
      tag: 'Promotional Flyer',
      title: 'Community Initiative'
    },
    {
      src: '/assets/kadapa-banner.jpg',
      caption: 'Official Kadapa Launch Notice: Dedicated to serving pilgrims across Kadapa and Rayalaseema.',
      tag: 'Kadapa Launch',
      title: 'City Launch Announcement'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Images className="w-3.5 h-3.5 text-[#C8A45D]" />
            Authentic Visual Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Our Kadapa Office & Milestones
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Review genuine photographs of our Kadapa headquarters, official departure schedules, and inauguration memories. Click any image to view in high resolution.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(item);
                }
              }}
              className="group card-surface rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between focus-ring"
              aria-label={`View ${item.title}`}
            >
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#102D29]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#C8A45D] text-[#102D29] font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <ZoomIn className="w-4 h-4" />
                    Enlarge Photo
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-[#102D29]/90 text-[#C8A45D] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#C8A45D]/30">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-[#102D29] text-base group-hover:text-[#174C40] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#26332F]/70 mt-1 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with Escape Key Support */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border border-[#C8A45D]/40 p-2 sm:p-4 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors focus-ring"
              aria-label="Close image preview"
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
              <span className="text-xs text-[#C8A45D] font-bold uppercase">{selectedImage.tag}</span>
              <p className="text-stone-300 text-xs sm:text-sm mt-0.5">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
