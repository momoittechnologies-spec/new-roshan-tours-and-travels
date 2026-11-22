import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  ExternalLink, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { AGENCY_DETAILS } from '../data/travelData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Kadapa',
    pilgrimsCount: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const text = `Assalamu Alaikum New Roshan Tours & Travels Kadapa!%0A%0A*NEW UMRAH / TRAVEL INQUIRY*%0A----------------------------%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*City:* ${encodeURIComponent(formData.city)}%0A*Pilgrims Count:* ${formData.pilgrimsCount}%0A*Message/Note:* ${encodeURIComponent(formData.message || 'I want complete details for Umrah package.')}%0A%0APlease contact me with package dates and requirements.`;
    window.open(`https://wa.me/${AGENCY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Visit Our Office
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif-title">
            Connect With New Roshan Tours & Travels
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Walk into our Kadapa headquarters or reach out directly to our dedicated pilgrimage coordinators.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details & Phone Directory (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase text-amber-700 tracking-wider block mb-1">
                  Headquarters & Registered Address
                </span>
                <h3 className="text-xl font-bold text-stone-900 font-serif-title mb-2">
                  Kadapa Central Office
                </h3>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-600">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{AGENCY_DETAILS.address}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-stone-900 block font-semibold">Office Timings:</strong>
                  <span className="text-stone-600">Monday to Saturday: 9:30 AM – 7:30 PM</span>
                  <span className="text-stone-600 block">Sunday: By Prior Appointment / Emergency Assistance</span>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase text-stone-500 tracking-wider block">
                  Official Contact & Help Lines
                </span>
                {AGENCY_DETAILS.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-950 font-bold text-sm transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-700" />
                      {phone.display}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded shadow-xs">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={AGENCY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold text-xs sm:text-sm"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>{AGENCY_DETAILS.instagramHandle}</span>
                </a>
                <a
                  href={AGENCY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold text-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Maps</span>
                </a>
              </div>

            </div>

            {/* Google Rating Banner */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase">Google Business Verified</span>
                <div className="text-lg font-bold text-white mt-0.5">5.0 Star Pilgrimage Agency</div>
                <p className="text-xs text-stone-300">Rahmatullah Street, Ganagapeta, Kadapa</p>
              </div>
              <ShieldCheck className="w-10 h-10 text-amber-400 shrink-0" />
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form (Col 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200">
            <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider block mb-1">
              Direct Pilgrimage Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-title mb-2">
              Send Your Travel Requirements
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6">
              Our coordinators in Kadapa will review your details and send you full package itineraries, seat availability, and hotel confirmations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shaik Abdul"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9959578900"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
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
                    placeholder="e.g. Kadapa, Proddatur, Rayachoty..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                    Number of Pilgrims
                  </label>
                  <select
                    value={formData.pilgrimsCount}
                    onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="1">1 Person (Individual)</option>
                    <option value="2">2 Persons (Couple / Sharing)</option>
                    <option value="3 to 4">3 to 4 Persons (Family Group)</option>
                    <option value="5+">5+ Persons (Large Family)</option>
                    <option value="10+">10+ Persons (Group Booking)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                  Additional Note / Dates Preferred
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us your preferred departure month, Saudia Airlines batch preference, or special requests for elderly travelers..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 text-amber-300 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 text-sm border border-amber-500/30"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
