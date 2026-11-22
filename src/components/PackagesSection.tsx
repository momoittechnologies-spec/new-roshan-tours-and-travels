import React, { useState } from 'react';
import { 
  Check, 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  MessageCircle, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { FEATURED_PACKAGES, type PackageTier } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedPackageId(expandedPackageId === id ? null : id);
  };

  return (
    <section id="packages" className="py-20 bg-[#F8F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
            Carefully Crafted Pilgrimage Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Featured Umrah Packages
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Choose from fixed group departures or custom VIP family packages. Every package includes verified walking-distance hotels, direct flights, and full Kadapa office support.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {FEATURED_PACKAGES.map((pkg: PackageTier) => {
            const isExpanded = expandedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`card-surface rounded-2xl flex flex-col justify-between overflow-hidden relative ${
                  pkg.featured ? 'ring-2 ring-[#C8A45D]' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="bg-[#C8A45D] text-[#102D29] text-[11px] font-extrabold uppercase tracking-widest text-center py-1.5 px-4">
                    ★ Most Recommended for Kadapa Families ★
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-5">
                  {/* Title & Tagline */}
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#102D29] font-serif-title">
                        {pkg.name}
                      </h3>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase shrink-0 ${
                        pkg.availability === 'Fast Filling'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}>
                        {pkg.availability}
                      </span>
                    </div>
                    <p className="text-xs text-[#26332F]/70 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Pricing Strip */}
                  <div className="bg-[#F8F5ED] p-4 rounded-xl border border-[#174C40]/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] uppercase font-semibold text-[#26332F]/60 block">
                        Starting Price
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-[#174C40]">
                        {pkg.startingPrice}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#26332F]/70">
                      per pilgrim (Quad)
                    </span>
                  </div>

                  {/* Quick Specs */}
                  <div className="space-y-2.5 text-xs text-[#26332F]/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C8A45D] shrink-0" />
                      <span><strong>Duration:</strong> {pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Plane className="w-4 h-4 text-[#C8A45D] shrink-0" />
                      <span><strong>Flight:</strong> {pkg.airline} ({pkg.departureAirport})</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <div>
                        <strong>Makkah:</strong> {pkg.makkahHotel} <span className="text-stone-500">({pkg.makkahDistance})</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <div>
                        <strong>Madinah:</strong> {pkg.madinaHotel} <span className="text-stone-500">({pkg.madinaDistance})</span>
                      </div>
                    </div>
                  </div>

                  {/* Sharing Types */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase text-[#102D29] block mb-1.5 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C8A45D]" /> Room Categories:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.sharingTypes.map((type, idx) => (
                        <span key={idx} className="text-[11px] bg-white border border-stone-200 px-2 py-0.5 rounded text-stone-700">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions Highlights */}
                  <div className="pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold uppercase text-[#102D29] block mb-2">
                      Package Inclusions:
                    </span>
                    <ul className="space-y-1.5">
                      {pkg.inclusions.slice(0, isExpanded ? pkg.inclusions.length : 4).map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#26332F]/80">
                          <Check className="w-3.5 h-3.5 text-[#174C40] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.inclusions.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(pkg.id)}
                        className="mt-2 text-xs font-semibold text-[#174C40] hover:text-[#C8A45D] flex items-center gap-1 transition-colors"
                      >
                        {isExpanded ? (
                          <><span>Show fewer details</span> <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <><span>+{pkg.inclusions.length - 4} more inclusions</span> <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 mt-auto border-t border-stone-100 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={createWhatsAppUrl({ intent: 'package', packageName: pkg.name, roomType: 'Quad Sharing' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#174C40] hover:bg-[#102D29] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 focus-ring"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.name)}
                    className="bg-white hover:bg-stone-50 text-[#102D29] border border-stone-300 text-xs font-bold py-3 px-4 rounded-xl transition-colors active:scale-95 focus-ring"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
