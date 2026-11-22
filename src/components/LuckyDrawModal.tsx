import React, { useState, useEffect } from 'react';
import { X, Gift, MessageCircle } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface LuckyDrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LuckyDrawModal: React.FC<LuckyDrawModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Kadapa');

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
      alert("Please provide your name and WhatsApp number.");
      return;
    }
    const url = createWhatsAppUrl({
      intent: 'luckydraw',
      name,
      city
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
      aria-labelledby="luckydraw-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-[#102D29] text-white rounded-2xl shadow-2xl border border-[#C8A45D]/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 relative border-b border-stone-800 bg-[#174C40]/50">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-ring"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-[#C8A45D]/20 text-[#C8A45D] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5" />
            Community Scheme Notice
          </div>
          <h3 id="luckydraw-modal-title" className="text-xl sm:text-2xl font-bold font-serif-title">
            ₹999 Umrah Community Program
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Kadapa Office Promotional Initiative • Terms & In-Office Verification Apply
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="bg-[#174C40]/60 p-3 rounded-xl border border-[#C8A45D]/30 text-xs text-stone-300 leading-relaxed">
            <strong className="text-[#C8A45D] block mb-0.5">100% Value Guarantee:</strong>
            If not drawn, your ₹999 entry fee is fully adjusted into any Umrah package within 6 months, plus an additional ₹2,000 company discount (total ₹2,999 value). Official terms must be verified at our Kadapa office.
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mohammed Farooq"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#174C40]/70 border border-stone-600 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-400 focus-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9059057239"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#174C40]/70 border border-stone-600 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-400 focus-ring"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase mb-1">
                City / Town
              </label>
              <input
                type="text"
                placeholder="e.g. Kadapa"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#174C40]/70 border border-stone-600 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-stone-400 focus-ring"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] font-bold py-3.5 px-4 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider focus-ring"
            >
              <MessageCircle className="w-4 h-4 text-[#102D29]" />
              <span>Inquire Scheme via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
