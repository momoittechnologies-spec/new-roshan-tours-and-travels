import React from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';
import { REVIEWS, AGENCY_DETAILS } from '../data/travelData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F8F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#C8A45D] text-[#C8A45D]" />
            Genuine Pilgrim Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Words of Appreciation from Pilgrims
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Read firsthand reflections from pilgrims across Kadapa and Rayalaseema who completed their journey with New Roshan Tours & Travels.
          </p>

          {/* Rating Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-xs border border-stone-200 mt-2">
            <div className="flex text-[#C8A45D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#102D29]">5.0 / 5.0 Google Rating</span>
            <span className="text-stone-300">|</span>
            <a 
              href={AGENCY_DETAILS.googleMapsUrl}
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-semibold text-[#174C40] hover:text-[#C8A45D] flex items-center gap-1 focus-ring"
            >
              <span>View Google Reviews</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="card-surface rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#C8A45D]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#174C40] bg-[#174C40]/10 px-2.5 py-0.5 rounded-full">
                    {rev.batch}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-[#C8A45D]/40 mb-2" />
                <p className="text-[#26332F]/80 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#102D29]">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C8A45D]" />
                    <span>{rev.city}</span>
                  </div>
                </div>
                <div className="text-[10px] text-stone-400 font-medium">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
