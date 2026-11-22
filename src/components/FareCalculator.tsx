import React, { useState } from 'react';
import { 
  Calculator, 
  Users, 
  Calendar, 
  BedDouble, 
  MessageCircle, 
  AlertCircle 
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FareCalculator: React.FC = () => {
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [roomType, setRoomType] = useState<'quad' | 'triple' | 'double'>('quad');
  const [travelMonth, setTravelMonth] = useState<string>('November / December 2026');

  // Verified pricing rules
  const basePricePerPerson = 115000;
  const roomSurcharge = roomType === 'double' ? 20000 : roomType === 'triple' ? 10000 : 0;
  const pricePerAdult = basePricePerPerson + roomSurcharge;
  const pricePerChild = 85000; // Indicative child fare with seat & visa

  const totalPrice = (adults * pricePerAdult) + (children * pricePerChild);
  const formattedTotal = `₹${totalPrice.toLocaleString('en-IN')}`;

  const handleWhatsAppQuote = () => {
    const roomLabel = roomType === 'quad' ? 'Quad Sharing (Standard)' : roomType === 'triple' ? 'Triple Sharing' : 'Double Sharing';
    const url = createWhatsAppUrl({
      intent: 'calculator',
      batchDates: travelMonth,
      adults,
      children,
      roomType: roomLabel,
      indicativeQuote: formattedTotal
    });
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#C8A45D]" />
            Transparent Cost Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Calculate Your Umrah Package Estimate
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Customize your group requirements in real-time. Fares include direct Saudia flights, 5-star hotels near the Haram, visa, transport, and meals.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto card-surface rounded-2xl overflow-hidden border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Input Controls */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
              
              {/* Departure Period */}
              <div>
                <label className="block text-xs font-bold text-[#102D29] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C8A45D]" />
                  Select Travel Period
                </label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] font-medium focus-ring"
                >
                  <option value="November 2026 (Saudia Airlines Direct)">Nov 2026 — Saudia Airlines Direct (HYD-JED)</option>
                  <option value="December 2026 (Saudia Airlines Direct)">Dec 2026 — Saudia Airlines Direct (HYD-JED)</option>
                  <option value="January 2027 (Winter Season)">Jan 2027 — Winter Season Batch</option>
                  <option value="Ramadan 2027 (Holy Month Special)">Ramadan 2027 — Holy Month Advance</option>
                  <option value="Custom Family Date (Open)">Custom Family Dates</option>
                </select>
              </div>

              {/* Number of Pilgrims */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#C8A45D]" />
                    Adults (12+ yrs)
                  </label>
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-[#F8F5ED]">
                    <button
                      type="button"
                      aria-label="Decrease adults"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-10 py-2.5 text-base font-bold text-stone-600 hover:bg-stone-200 transition-colors focus-ring"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-[#102D29]">{adults}</span>
                    <button
                      type="button"
                      aria-label="Increase adults"
                      onClick={() => setAdults(adults + 1)}
                      className="w-10 py-2.5 text-base font-bold text-stone-600 hover:bg-stone-200 transition-colors focus-ring"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#C8A45D]" />
                    Children (2-11 yrs)
                  </label>
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-[#F8F5ED]">
                    <button
                      type="button"
                      aria-label="Decrease children"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-10 py-2.5 text-base font-bold text-stone-600 hover:bg-stone-200 transition-colors focus-ring"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-sm text-[#102D29]">{children}</span>
                    <button
                      type="button"
                      aria-label="Increase children"
                      onClick={() => setChildren(children + 1)}
                      className="w-10 py-2.5 text-base font-bold text-stone-600 hover:bg-stone-200 transition-colors focus-ring"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Room Category */}
              <div>
                <label className="block text-xs font-bold text-[#102D29] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-[#C8A45D]" />
                  Room Sharing Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setRoomType('quad')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all focus-ring ${
                      roomType === 'quad'
                        ? 'border-[#174C40] bg-[#174C40]/10 text-[#102D29] font-bold ring-1 ring-[#174C40]'
                        : 'border-stone-200 bg-[#F8F5ED] text-stone-600 hover:bg-stone-200/60'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Quad Sharing</span>
                    <span className="text-[10px] text-stone-500 block">4 in Room (Std)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('triple')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all focus-ring ${
                      roomType === 'triple'
                        ? 'border-[#174C40] bg-[#174C40]/10 text-[#102D29] font-bold ring-1 ring-[#174C40]'
                        : 'border-stone-200 bg-[#F8F5ED] text-stone-600 hover:bg-stone-200/60'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Triple Sharing</span>
                    <span className="text-[10px] text-stone-500 block">+₹10k / person</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRoomType('double')}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all focus-ring ${
                      roomType === 'double'
                        ? 'border-[#174C40] bg-[#174C40]/10 text-[#102D29] font-bold ring-1 ring-[#174C40]'
                        : 'border-stone-200 bg-[#F8F5ED] text-stone-600 hover:bg-stone-200/60'
                    }`}
                  >
                    <span className="block text-xs uppercase font-bold">Double Sharing</span>
                    <span className="text-[10px] text-stone-500 block">Couple (+₹20k)</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Output Summary Card */}
            <div className="md:col-span-5 bg-[#102D29] text-white p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-800">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#C8A45D] block mb-1">
                  Indicative Breakdown
                </span>
                <h3 className="text-xl font-bold font-serif-title mb-4">
                  Estimated Fare
                </h3>

                <div className="space-y-2.5 text-xs text-stone-300 border-b border-stone-700/80 pb-4 mb-4">
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
                  <div className="flex justify-between text-[#C8A45D]">
                    <span>Saudia Flight & 5★ Hotels</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between text-[#C8A45D]">
                    <span>8-Piece Kit & Zamzam</span>
                    <span className="font-semibold">Complimentary</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Total Estimated Amount</span>
                  <div className="text-3xl font-black text-[#C8A45D] mt-1 font-mono">
                    {formattedTotal}
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex items-start gap-1.5 text-[10px] text-stone-400 leading-normal">
                  <AlertCircle className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>
                    <strong>Indicative Disclaimer:</strong> Final pricing is subject to seat confirmation and airline inventory at time of booking.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-[#C8A45D] hover:bg-[#b8954f] text-[#102D29] font-bold py-3.5 px-4 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider focus-ring"
                >
                  <MessageCircle className="w-4 h-4 text-[#102D29]" />
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
