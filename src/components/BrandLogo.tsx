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
  // 1. Standalone Official Emblem Only (Cropped Crescent, NR, Dome & Kaaba)
  if (variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <picture>
          <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
          <img
            src="/branding/new-roshan-emblem-official.png"
            alt="New Roshan Tours & Travels Authentic Emblem"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-md"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    );
  }

  // 2. Footer Official Brand Lockup
  if (variant === 'footer') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`group inline-flex flex-col items-start gap-2 focus-ring rounded-2xl shrink-0 transition-transform ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        <div className="relative shrink-0">
          <picture>
            <source srcSet="/branding/new-roshan-logo-official.webp" type="image/webp" />
            <img
              src="/branding/new-roshan-logo-official.png"
              alt="New Roshan Tours & Travels Umrah & Ziyarath India Pvt. Ltd. Official Logo"
              className="h-14 sm:h-16 lg:h-18 w-auto object-contain group-hover:scale-[1.02] transition-transform drop-shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <div className="text-[11px] text-[#C8A45D] font-bold tracking-wider uppercase pl-0.5">
          <span>Kadapa, Andhra Pradesh</span>
          <span className="text-stone-400 font-normal ml-2">● Inaugurated 3rd July 2026</span>
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
        className={`group inline-flex items-center focus-ring rounded-xl shrink-0 ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        <picture>
          <source srcSet="/branding/new-roshan-logo-official.webp" type="image/webp" />
          <img
            src="/branding/new-roshan-logo-official.png"
            alt="New Roshan Tours & Travels Logo"
            className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform drop-shadow-sm"
            loading="eager"
            decoding="async"
          />
        </picture>
        <span className="sr-only">New Roshan Tours &amp; Travels</span>
      </Link>
    );
  }

  // 4. Default Header Variant (Desktop & Responsive Mobile Header)
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 focus-ring rounded-xl shrink-0 transition-transform ${className}`}
      aria-label="New Roshan Tours & Travels Home"
    >
      <picture className="flex items-center shrink-0">
        <source srcSet="/branding/new-roshan-logo-official.webp" type="image/webp" />
        <img
          src="/branding/new-roshan-logo-official.png"
          alt="New Roshan Tours & Travels - Umrah & Ziyarath India Pvt. Ltd."
          className="h-10 sm:h-12 lg:h-13 xl:h-14 w-auto object-contain group-hover:scale-[1.02] transition-transform drop-shadow-md"
          loading="eager"
          decoding="async"
        />
      </picture>
      <span className="sr-only">
        NEW ROSHAN TOURS &amp; TRAVELS - UMRAH &amp; ZIYARATH INDIA PVT. LTD. KADAPA
      </span>
    </Link>
  );
};
