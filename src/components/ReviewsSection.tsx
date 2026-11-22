import React from 'react';
import { 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle, 
  ExternalLink 
} from 'lucide-react';
import { REVIEWS, AGENCY_DETAILS } from '../data/travelData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Google Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Google Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Loved by Pilgrims Across Kadapa & Beyond
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Read firsthand experiences from families who entrusted their blessed journey to New Roshan Tours & Travels.
          </p>

          {/* Rating Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-stone-200 mt-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-900">5.0 / 5.0 on Google</span>
            <span className="text-stone-300">|</span>
            <a 
              href={AGENCY_DETAILS.googleMapsUrl}
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
            >
              View on Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {rev.batch}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-200 mb-2" />
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{rev.author}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-600" />
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
