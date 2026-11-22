import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'emblem-only';
  className?: string;
  to?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  to = '/',
  onClick
}) => {
  // 1. Standalone Emblem Variant
  if (variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/branding/new-roshan-emblem.svg"
          alt="New Roshan Tours & Travels Authentic Emblem"
          className="h-12 w-auto object-contain drop-shadow-md"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  // 2. Footer Variant
  if (variant === 'footer') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`group inline-flex items-center gap-3.5 sm:gap-4 focus-ring rounded-2xl shrink-0 transition-transform ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        <div className="relative shrink-0">
          <img
            src="/branding/new-roshan-emblem.svg"
            alt="New Roshan Tours & Travels Official Emblem"
            className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-extrabold text-lg sm:text-xl lg:text-2xl text-[#F8F5ED] tracking-wide uppercase font-serif-title block leading-tight">
              NEW ROSHAN <span className="text-[#C8A45D]">TOURS &amp; TRAVELS</span>
            </span>
          </div>

          <span className="text-[10px] sm:text-xs text-[#C8A45D] tracking-[0.2em] uppercase font-bold block leading-none">
            UMRAH &amp; ZIYARATH INDIA PVT. LTD.
          </span>

          <span className="text-[10px] text-stone-400 tracking-wider block font-medium">
            Kadapa, Andhra Pradesh • Inaugurated 3rd July 2026
          </span>
        </div>
      </Link>
    );
  }

  // 3. Compact Mobile Variant
  if (variant === 'compact') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`group inline-flex items-center gap-2 focus-ring rounded-xl shrink-0 ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        <img
          src="/branding/new-roshan-emblem.svg"
          alt="New Roshan Tours & Travels Emblem"
          className="h-9 sm:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-sm"
          loading="eager"
          decoding="async"
        />
        <div className="leading-tight">
          <span className="font-extrabold text-sm text-[#F8F5ED] tracking-wide uppercase font-serif-title block">
            NEW ROSHAN
          </span>
          <span className="text-[8.5px] text-[#C8A45D] tracking-wider uppercase font-bold block">
            UMRAH &amp; ZIYARATH
          </span>
        </div>
      </Link>
    );
  }

  // 4. Default Header Variant (Desktop, Tablet & Highly Responsive Mobile Lockup)
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 sm:gap-3 lg:gap-3.5 focus-ring rounded-xl shrink-0 transition-transform ${className}`}
      aria-label="New Roshan Tours & Travels Home"
    >
      {/* Restored Authentic Emblem */}
      <div className="relative shrink-0">
        <img
          src="/branding/new-roshan-emblem.svg"
          alt="New Roshan Tours & Travels Official Logo Emblem"
          className="h-10 sm:h-12 lg:h-13 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-md"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Professional Company Name & Subtitle Typography Lockup */}
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="font-extrabold text-[15px] sm:text-lg lg:text-[19px] text-[#F8F5ED] tracking-wide uppercase font-serif-title leading-tight whitespace-nowrap">
            NEW ROSHAN
          </span>
          <span className="hidden sm:inline font-bold text-xs lg:text-[13px] text-stone-300 tracking-wider uppercase whitespace-nowrap">
            TOURS &amp; TRAVELS
          </span>
          <span className="hidden min-[480px]:inline-block bg-[#C8A45D]/20 text-[#C8A45D] text-[9px] lg:text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#C8A45D]/40 uppercase tracking-wider">
            Kadapa
          </span>
        </div>

        <p className="text-[8.5px] sm:text-[10px] lg:text-[11px] text-[#C8A45D] font-bold tracking-[0.14em] uppercase leading-tight pt-0.5 truncate max-w-[160px] min-[360px]:max-w-none">
          UMRAH &amp; ZIYARATH INDIA PVT. LTD.
        </p>
      </div>
    </Link>
  );
};