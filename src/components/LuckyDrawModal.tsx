import React, { useState } from 'react';
import { X, Gift, Trophy, Percent, ShieldCheck, MessageCircle, CheckCircle } from 'lucide-react';
import { AGENCY_DETAILS, LUCKY_DRAW_DATA } from '../data/travelData';

interface LuckyDrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LuckyDrawModal: React.FC<LuckyDrawModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Kadapa');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and WhatsApp number.");
      return;
    }
    const message = `Assalamu Alaikum New Roshan Tours & Travels Kadapa!%0A%0A*LUCKY DRAW REGISTRATION (₹999)*%0A------------------------------%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*City:* ${encodeURIComponent(city)}%0A*Scheme:* Pay ₹999 for Umrah Lucky Draw.%0A%0APlease provide the payment UPI / QR code so I can complete payment and receive my official Lucky Draw entry receipt.`;
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-emerald-950 text-white rounded-3xl shadow-2xl border border-amber-500/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 relative border-b border-emerald-900 bg-emerald-900/40">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            <Gift className="w-3.5 h-3.5" />
            Limited Period Community Scheme
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-title">
            Win a Free Umrah Trip for Only ₹999
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Kadapa & AP/Telangana Special Initiative
          </p>
        </div>

        {/* Prizes quick recap */}
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-emerald-900/60 p-2 rounded-xl border border-amber-400/30">
              <span className="text-[10px] text-amber-400 block font-bold">1st Prize</span>
              <strong className="text-white text-xs block">100% Free</strong>
            </div>
            <div className="bg-emerald-900/60 p-2 rounded-xl border border-amber-400/30">
              <span className="text-[10px] text-amber-400 block font-bold">2nd Prize</span>
              <strong className="text-white text-xs block">50% Off</strong>
            </div>
            <div className="bg-emerald-900/60 p-2 rounded-xl border border-amber-400/30">
              <span className="text-[10px] text-amber-400 block font-bold">3rd Prize</span>
              <strong className="text-white text-xs block">25% Off</strong>
            </div>
          </div>

          <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/30 text-[11px] text-stone-300">
            <strong className="text-amber-300 block mb-0.5">Zero-Risk Protection Guarantee:</strong>
            If not selected, your ₹999 is 100% adjusted into any Umrah package within 6 months + an extra ₹2,000 discount (Total Benefit: ₹2,999)!
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Mohammed Farooq"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-emerald-900/80 border border-emerald-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9059057239"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-emerald-900/80 border border-emerald-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-stone-300 uppercase mb-1">
                City / District
              </label>
              <input
                type="text"
                placeholder="e.g. Kadapa"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-emerald-900/80 border border-emerald-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-emerald-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-950" />
              <span>Register via WhatsApp (Pay ₹999)</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
