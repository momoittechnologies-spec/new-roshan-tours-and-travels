import React, { useState } from 'react';
import { 
  Calculator, 
  Users, 
  Calendar, 
  BedDouble, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Info 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';

export const FareCalculator: React.FC = () => {
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [roomType, setRoomType] = useState<'quad' | 'triple' | 'double'>('quad');
  const [travelMonth, setTravelMonth] = useState<string>('Dec 2026 (Saudia Airlines)');

  // Base pricing
  const basePricePerPerson = 115000;
  const roomSurcharge = roomType === 'double' ? 20000 : roomType === 'triple' ? 10000 : 0;
  const pricePerAdult = basePricePerPerson + roomSurcharge;
  const pricePerChild = 85000; // without separate bed / with seat & visa

  const totalPrice = (adults * pricePerAdult) + (children * pricePerChild);

  const handleSendToWhatsApp = () => {
    const text = `Assalamu Alaikum New Roshan Tours & Travels Kadapa!%0A%0A*UMRAH PACKAGE QUOTATION REQUEST*%0A--------------------------------%0A*Travel Month:* ${encodeURIComponent(travelMonth)}%0A*Adult Pilgrims:* ${adults}%0A*Child Pilgrims:* ${children}%0A*Room Category:* ${roomType.toUpperCase()} Sharing%0A*Estimated Total:* ₹${totalPrice.toLocaleString('en-IN')}%0A%0APlease confirm availability and share booking requirements for our family.`;
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            Transparent Cost Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Calculate Your Umrah Package Cost
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Customize your family or group requirements in real-time. No hidden surcharges — everything from flights to 5-star hotels is included.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Input Controls (Col 7) */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Departure Month */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-700" />
                  Select Travel Period
                </label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 font-medium focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                >
                  <option value="Nov 2026 (Saudia Airlines Direct)">Nov 2026 — Saudia Airlines Direct (HYD-JED)</option>
                  <option value="Dec 2026 (Saudia Airlines Direct)">Dec 2026 — Saudia Airlines Direct (HYD-JED)</option>
                  <option value="Jan 2027 (Winter Batch)">Jan 2027 — Winter Season Batch</option>
                  <option value="Feb 2027 (Pre-Ramadan)">Feb 2027 — Pre-Ramadan Special</option>
                  <option value="Ramadan 2027 (Holy Month)">Ramadan 2027 — Holy Month Batch</option>
                </select>
              </div>

              {/* Number of Pilgrims */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-700" />
                    Adults (12+ yrs)
                  </label>
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-11 py-3 text-lg font-bold text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-stone-900">{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      className="w-11 py-3 text-lg font-bold text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-700" />
                    Children (2-11 yrs)
                  </label>
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50">
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-11 py-3 text-lg font-bold text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-stone-900">{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      className="w-11 py-3 text-lg font-bold text-stone-600 hover:bg-stone-200 active:bg-stone-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Room Category */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-emerald-700" />
                  Room Sharing Preference
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setRoomType('quad')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      roomType === 'quad'
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-700'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Quad Sharing</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">4 in a Room (Std)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('triple')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      roomType === 'triple'
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-700'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Triple Sharing</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">+₹10k / person</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('double')}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${
                      roomType === 'double'
                        ? 'border-emerald-700 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-700'
                        : 'border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Double Sharing</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Couple Private (+₹20k)</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Output Summary Card (Col 5) */}
            <div className="md:col-span-5 bg-emerald-950 text-white p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-emerald-900">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block mb-1">
                  Estimated Summary
                </span>
                <h3 className="text-xl font-bold font-serif-title mb-4">
                  Package Breakdown
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-stone-300 border-b border-emerald-900 pb-4 mb-4">
                  <div className="flex justify-between">
                    <span>Adults ({adults} × ₹{pricePerAdult.toLocaleString('en-IN')})</span>
                    <span className="font-semibold text-white">₹{(adults * pricePerAdult).toLocaleString('en-IN')}</span>
                  </div>
                  {children > 0 && (
                    <div className="flex justify-between">
                      <span>Children ({children} × ₹{pricePerChild.toLocaleString('en-IN')})</span>
                      <span className="font-semibold text-white">₹{(children * pricePerChild).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-300">
                    <span>Flights, 5★ Hotels & Food</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between text-emerald-300">
                    <span>Full 8-Piece Pilgrim Kit</span>
                    <span className="font-semibold">Free</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-stone-400 block uppercase">Total Estimated Package</span>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1">
                    ₹{totalPrice.toLocaleString('en-IN')}*
                  </div>
                  <span className="text-[10px] text-stone-400 block mt-1">
                    *Subject to seat availability at time of booking.
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-emerald-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-950" />
                  <span>Send Quotation to WhatsApp</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
