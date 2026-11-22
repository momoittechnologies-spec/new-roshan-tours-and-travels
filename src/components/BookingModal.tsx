import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ShieldCheck } from 'lucide-react';
import { UMRAH_SCHEDULES, FEATURED_PACKAGES } from '../data/travelData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledBatch?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  prefilledBatch = '' 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Kadapa');
  const [userSelectedBatch, setUserSelectedBatch] = useState<string | null>(null);
  const selectedBatch = userSelectedBatch ?? (prefilledBatch || 'Deluxe Saudia Umrah Package (Fixed Batch)');
  const [pilgrims, setPilgrims] = useState('2');

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and WhatsApp contact number.");
      return;
    }

    const url = createWhatsAppUrl({
      intent: 'package',
      packageName: selectedBatch,
      name,
      city,
      adults: parseInt(pilgrims, 10) || 2,
      roomType: 'Standard Quad Sharing'
    });
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102D29] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-ring"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-bold uppercase text-[#C8A45D] tracking-wider block">
            Direct Seat Reservation
          </span>
          <h3 id="booking-modal-title" className="text-xl sm:text-2xl font-bold font-serif-title mt-0.5">
            Book Your Blessed Umrah Batch
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Kadapa Head Office • Saudia Airlines Direct • Verified 5★ Hotels
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
              Select Package / Departure Batch
            </label>
            <select
              value={selectedBatch}
              onChange={(e) => setUserSelectedBatch(e.target.value)}
              className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] font-medium focus-ring"
            >
              <optgroup label="Featured Packages">
                {FEATURED_PACKAGES.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.startingPrice})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Confirmed Saudia Schedules">
                {UMRAH_SCHEDULES.map((s) => (
                  <option key={s.id} value={`${s.onwardDate} to ${s.returnDate} (${s.airline})`}>
                    {s.onwardDate} – {s.returnDate} ({s.airline})
                  </option>
                ))}
              </optgroup>
              <option value="Custom Dates Inquiry">Custom Family Date Inquiry</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shaik Imran"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                WhatsApp Phone *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9059057239"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                City / Town
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Kadapa"
                className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                No. of Travelers
              </label>
              <select
                value={pilgrims}
                onChange={(e) => setPilgrims(e.target.value)}
                className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
              >
                <option value="1">1 Pilgrim</option>
                <option value="2">2 Pilgrims</option>
                <option value="3">3 Pilgrims</option>
                <option value="4">4 Pilgrims</option>
                <option value="5+">5+ Pilgrims (Family)</option>
              </select>
            </div>
          </div>

          <div className="bg-[#F8F5ED] p-3 rounded-xl border border-stone-200 text-[11px] text-[#26332F]/80 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#174C40] shrink-0 mt-0.5" />
            <span>Includes 5-Star walking distance hotels (150m & 400m), direct flights, buffet dining, and 8-piece kit.</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#174C40] hover:bg-[#102D29] text-white font-bold py-3.5 px-4 rounded-xl shadow-xs transition-transform active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider focus-ring"
          >
            <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
            <span>Confirm & Reserve on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
