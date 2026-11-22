import React, { useState } from 'react';
import { 
  Gift, 
  Trophy, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle,
  Percent,
  Coins
} from 'lucide-react';
import { LUCKY_DRAW_DATA, AGENCY_DETAILS } from '../data/travelData';

interface LuckyDrawSectionProps {
  onOpenModal: () => void;
}

export const LuckyDrawSection: React.FC<LuckyDrawSectionProps> = ({ onOpenModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Kadapa',
    agree: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number to register for the Lucky Draw.");
      return;
    }
    const message = `Assalamu Alaikum New Roshan Tours & Travels Kadapa!%0A%0A*LUCKY DRAW REGISTRATION (₹999)*%0A------------------------------%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Offer:* Pay ₹999 for Umrah Lucky Draw.%0A%0APlease share the UPI / Bank details for paying ₹999 and generating my Lucky Draw Coupon Number.`;
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="lucky-draw" className="py-20 bg-emerald-950 text-white relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
            <Gift className="w-4 h-4 text-amber-400 animate-bounce" />
            Special Pilgrimage Community Initiative
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-title leading-tight">
            Golden Opportunity: Go for Umrah <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Absolutely FREE! Pay Only ₹999</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Your name will be selected through transparent Lucky Draw. Even if you don't win, your ₹999 is <strong>100% protected</strong> with guaranteed extra discounts!
          </p>
        </div>

        {/* Main Grid: Prizes vs Registration & Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3 Prizes */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {LUCKY_DRAW_DATA.prizes.map((prize, idx) => (
              <div 
                key={prize.rank}
                className={`relative rounded-2xl p-6 border transition-all hover:scale-[1.01] ${
                  idx === 0 
                    ? 'bg-gradient-to-r from-amber-500/20 via-amber-600/10 to-emerald-900/40 border-amber-400 ring-2 ring-amber-400/30' 
                    : 'bg-emerald-900/40 border-emerald-700/60'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                      idx === 0 
                        ? 'bg-gold-gradient text-emerald-950 font-black text-xl' 
                        : 'bg-emerald-800 text-amber-300 font-bold text-lg border border-amber-400/30'
                    }`}>
                      {idx === 0 ? <Trophy className="w-6 h-6" /> : <Percent className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">{prize.rank}</span>
                        <span className="bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                          {prize.badge}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                        {prize.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1">
                        {prize.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Consolation Guarantee Box */}
            <div className="bg-gradient-to-br from-emerald-900/90 to-emerald-950 rounded-2xl p-6 border-2 border-dashed border-amber-400/60 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-bold text-base sm:text-lg text-white">
                  {LUCKY_DRAW_DATA.consolationGuarantee.title}
                </h4>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {LUCKY_DRAW_DATA.consolationGuarantee.details}
              </p>
              <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold flex items-center justify-between">
                <span>{LUCKY_DRAW_DATA.consolationGuarantee.extraBonus}</span>
                <span className="font-mono font-bold text-amber-400 text-sm whitespace-nowrap ml-2">
                  +₹2,000 OFF
                </span>
              </div>
              <div className="text-right">
                <span className="inline-block bg-amber-400 text-emerald-950 font-black text-xs sm:text-sm px-3 py-1 rounded-md">
                  {LUCKY_DRAW_DATA.consolationGuarantee.totalBenefit}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Registration Form & Poster Link */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-emerald-900/70 border border-amber-500/40 rounded-2xl p-6 sm:p-7 backdrop-blur-xl shadow-2xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                    Instant Draw Entry
                  </span>
                  <span className="bg-amber-500 text-emerald-950 text-xs font-black px-2.5 py-1 rounded-full">
                    Entry Fee: ₹999
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-white mb-2">
                  Reserve Your Lucky Draw Coupon
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mb-6">
                  Fill your details below. You will be redirected to WhatsApp to receive official payment UPI ID and coupon receipt.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-200 uppercase mb-1">
                      Full Name (As per Aadhaar/Passport)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mohammed Farooq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-200 uppercase mb-1">
                      WhatsApp Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9059057239"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-700 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-200 uppercase mb-1">
                      City / District (AP & Telangana)
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-emerald-950/80 border border-emerald-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Kadapa">Kadapa</option>
                      <option value="Proddatur">Proddatur</option>
                      <option value="Rayachoty">Rayachoty</option>
                      <option value="Pulivendula">Pulivendula</option>
                      <option value="Mydukur">Mydukur</option>
                      <option value="Kurnool">Kurnool</option>
                      <option value="Anantapur">Anantapur</option>
                      <option value="Tirupati / Chittoor">Tirupati / Chittoor</option>
                      <option value="Nellore">Nellore</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Other AP/Telangana">Other AP / Telangana City</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-1 text-xs text-stone-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>I understand ₹999 is fully adjustable within 6 months + ₹2,000 off.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-emerald-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-950" />
                    <span>Get Coupon on WhatsApp (₹999)</span>
                  </button>
                </form>
              </div>

              {/* View Original Poster Thumbnail */}
              <div className="mt-6 pt-4 border-t border-emerald-800 flex items-center justify-between text-xs text-stone-400">
                <span>View original draw poster</span>
                <a 
                  href="/assets/lucky-draw.jpg" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-amber-300 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  See Full Flyer <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
