import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageCircle, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { AGENCY_DETAILS, UMRAH_SCHEDULES } from '../data/travelData';

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
  const [selectedBatch, setSelectedBatch] = useState(prefilledBatch || 'Batch: 10 Nov - 23 Nov (Saudia Airlines)');
  const [pilgrims, setPilgrims] = useState('2');

  useEffect(() => {
    if (prefilledBatch) {
      setSelectedBatch(prefilledBatch);
    }
  }, [prefilledBatch]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please provide your name and WhatsApp contact number.");
      return;
    }
    const message = `Assalamu Alaikum New Roshan Tours & Travels Kadapa!%0A%0A*UMRAH SEAT RESERVATION REQUEST*%0A--------------------------------%0A*Name:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*City:* ${encodeURIComponent(city)}%0A*Selected Batch:* ${encodeURIComponent(selectedBatch)}%0A*No. of Pilgrims:* ${pilgrims}%0A*Package Type:* Fixed ₹1,15,000 (Saudia Airlines Direct + 5★ Hotels)%0A%0APlease check availability and send me the booking confirmation procedure.`;
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-amber-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-emerald-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold uppercase text-amber-400 tracking-wider block">
            Direct Seat Reservation
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-serif-title mt-0.5">
            Book Your Blessed Umrah Batch
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Kadapa Head Office • Saudia Airlines Direct • Fixed ₹1,15,000
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
              Select Batch / Dates
            </label>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 font-medium focus:outline-none focus:border-emerald-600"
            >
              {UMRAH_SCHEDULES.map((s) => (
                <option key={s.id} value={`${s.onwardDate} to ${s.returnDate} (${s.airline})`}>
                  {s.onwardDate} – {s.returnDate} ({s.airline}) — {s.seatsLeftText}
                </option>
              ))}
              <option value="Custom Dates Inquiry">Custom Dates Inquiry (Family/Group)</option>
              <option value="Ramadan 2027 Special Batch">Ramadan 2027 Special Batch</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shaik Imran"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9059057239"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                Your Town / City
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Kadapa"
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                No. of Travelers
              </label>
              <select
                value={pilgrims}
                onChange={(e) => setPilgrims(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5+">5+ Persons</option>
              </select>
            </div>
          </div>

          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>5-Star Hotels near Haram (150m & 400m), Saudia Airlines direct flights, and full 8-item kit are included.</span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 text-amber-300 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm border border-amber-500/30"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Confirm & Reserve on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
