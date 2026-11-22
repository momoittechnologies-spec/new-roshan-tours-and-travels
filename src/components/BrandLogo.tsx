import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'hero' | 'emblem-only';
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
  // 1. Standalone Official Emblem Only (Tightly cropped crescent, NR, dome & Kaaba)
  if (variant === 'emblem-only') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <picture>
          <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
          <img
            src="/branding/new-roshan-emblem-official.png"
            alt="New Roshan Tours & Travels Authentic Emblem"
            className="h-12 sm:h-14 lg:h-16 w-auto aspect-[310/322] object-contain drop-shadow-md"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>
    );
  }

  // 2. Compact Mobile Variant (Minimalist Emblem + 2-Line Text)
  if (variant === 'compact') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`group inline-flex items-center gap-2.5 focus-ring rounded-xl shrink-0 transition-transform ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        <picture className="shrink-0 flex items-center justify-center">
          <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
          <img
            src="/branding/new-roshan-emblem-official.png"
            alt="New Roshan Emblem"
            className="h-10 w-auto aspect-[310/322] object-contain group-hover:scale-105 transition-transform drop-shadow-sm"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="flex flex-col select-none">
          <span className="font-serif-title text-sm font-bold text-[#F8F5ED] tracking-wide leading-none">
            NEW ROSHAN
          </span>
          <span className="font-sans text-[10px] font-extrabold text-[#C8A45D] tracking-[0.16em] uppercase mt-0.5 leading-none">
            TOURS &amp; TRAVELS
          </span>
        </div>
      </Link>
    );
  }

  // 3. Hero Variant (Page Headers like About & Contact)
  if (variant === 'hero') {
    return (
      <div className={`inline-flex items-center gap-4 sm:gap-5 select-none ${className}`}>
        <picture className="shrink-0 flex items-center justify-center">
          <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
          <img
            src="/branding/new-roshan-emblem-official.png"
            alt="New Roshan Tours & Travels Authentic Emblem"
            className="h-16 sm:h-20 lg:h-24 w-auto aspect-[310/322] object-contain drop-shadow-xl"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="flex flex-col items-start text-left">
          <span className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F8F5ED] tracking-wide leading-tight">
            NEW ROSHAN
          </span>
          <span className="font-sans text-xs sm:text-sm lg:text-base font-extrabold text-[#C8A45D] tracking-[0.22em] uppercase mt-1 leading-none">
            TOURS &amp; TRAVELS
          </span>
          <span className="font-sans text-[9px] sm:text-[11px] lg:text-xs font-semibold text-stone-300 tracking-[0.14em] uppercase mt-1 leading-none">
            UMRAH &amp; ZIYARATH INDIA PVT. LTD.
          </span>
        </div>
      </div>
    );
  }

  // 4. Footer Brand Lockup (Generous Proportions & Consistent Identity)
  if (variant === 'footer') {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`group inline-flex items-center gap-3.5 sm:gap-4.5 focus-ring rounded-2xl shrink-0 transition-transform ${className}`}
        aria-label="New Roshan Tours & Travels Home"
      >
        {/* Standalone Official Emblem */}
        <div className="relative shrink-0 flex items-center justify-center">
          <picture>
            <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
            <img
              src="/branding/new-roshan-emblem-official.png"
              alt="New Roshan Official Emblem"
              className="h-16 sm:h-18 lg:h-20 w-auto aspect-[310/322] object-contain group-hover:scale-105 transition-transform drop-shadow-xl"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        {/* Brand Typography Lockup */}
        <div className="flex flex-col items-start select-none">
          <span className="font-serif-title text-xl sm:text-2xl lg:text-3xl font-bold text-[#F8F5ED] tracking-wide leading-tight group-hover:text-white transition-colors">
            NEW ROSHAN
          </span>
          <span className="font-sans text-xs sm:text-sm font-extrabold text-[#C8A45D] tracking-[0.2em] uppercase mt-1 leading-none">
            TOURS &amp; TRAVELS
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] font-semibold text-stone-300 tracking-[0.12em] uppercase mt-1.5 leading-none">
            UMRAH &amp; ZIYARATH INDIA PVT. LTD.
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#C8A45D]/80 font-bold tracking-wider uppercase mt-2">
            Kadapa, Andhra Pradesh <span className="text-stone-400 font-normal">● Inaugurated 3rd July 2026</span>
          </span>
        </div>
      </Link>
    );
  }

  // 5. Default Header Variant (Desktop, Tablet & Mobile Header)
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 xl:gap-4 focus-ring rounded-xl shrink-0 transition-transform ${className}`}
      aria-label="New Roshan Tours & Travels Home"
    >
      {/* Standalone Official Emblem (Tightly cropped, vibrant colors, 60-68px desktop, 46-52px mobile) */}
      <picture className="shrink-0 flex items-center justify-center">
        <source srcSet="/branding/new-roshan-emblem-official.webp" type="image/webp" />
        <img
          src="/branding/new-roshan-emblem-official.png"
          alt="New Roshan Tours & Travels Emblem"
          className="h-12 sm:h-13 lg:h-[62px] xl:h-[66px] w-auto aspect-[310/322] object-contain group-hover:scale-[1.03] transition-transform drop-shadow-md"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Brand Typography Lockup (Live HTML Text) */}
      <div className="flex flex-col items-start select-none">
        {/* Line 1: NEW ROSHAN (Elegant Serif, Ivory White #F8F5ED) */}
        <span className="font-serif-title text-base sm:text-lg lg:text-[21px] xl:text-[23px] font-bold text-[#F8F5ED] tracking-[0.03em] leading-none group-hover:text-white transition-colors">
          NEW ROSHAN
        </span>

        {/* Line 2: TOURS & TRAVELS (Refined Sans, Muted Gold #C8A45D, Clear Letter Spacing) */}
        <span className="font-sans text-[10px] sm:text-[11px] lg:text-[12.5px] xl:text-[13.5px] font-extrabold text-[#C8A45D] tracking-[0.18em] xl:tracking-[0.2em] uppercase mt-1 leading-none">
          TOURS &amp; TRAVELS
        </span>

        {/* Line 3: UMRAH & ZIYARATH INDIA PVT. LTD. (Small Uppercase Sans, Soft Ivory / Gold) */}
        <span className="font-sans text-[7.5px] sm:text-[8.5px] lg:text-[9.5px] xl:text-[10px] font-semibold text-stone-300 tracking-[0.10em] sm:tracking-[0.12em] uppercase mt-1 leading-none">
          UMRAH &amp; ZIYARATH INDIA PVT. LTD.
        </span>
      </div>

      <span className="sr-only">
        NEW ROSHAN TOURS &amp; TRAVELS - UMRAH &amp; ZIYARATH INDIA PVT. LTD. KADAPA
      </span>
    </Link>
  );
};
