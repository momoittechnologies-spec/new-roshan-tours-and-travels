import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck 
} from 'lucide-react';
import { AGENCY_DETAILS } from '../data/travelData';
import { InstagramIcon } from './InstagramIcon';
import { createWhatsAppUrl } from '../utils/whatsapp';

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
      alert("Please provide your name and WhatsApp contact number.");
      return;
    }
    const url = createWhatsAppUrl({
      intent: 'general',
      name: formData.name,
      city: formData.city,
      adults: parseInt(formData.pilgrimsCount, 10) || 2,
      customMessage: `• *Contact Inquiry:* ${formData.name} (${formData.phone}) from ${formData.city}. Pilgrims: ${formData.pilgrimsCount}. Notes: ${formData.message || 'Please share available departure dates.'}`
    });
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F5ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-[#174C40]/10 border border-[#174C40]/20 text-[#174C40] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
            Direct Office Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#102D29] font-serif-title">
            Visit Our Kadapa Office or Connect Online
          </h2>
          <p className="text-[#26332F]/80 text-base sm:text-lg">
            Our experienced pilgrimage coordinators are available to welcome you in person or assist through direct WhatsApp communication.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase text-[#C8A45D] tracking-wider block mb-1">
                  Registered Headquarters
                </span>
                <h3 className="text-xl font-bold text-[#102D29] font-serif-title mb-2">
                  Kadapa Central Office
                </h3>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-stone-600">
                  <MapPin className="w-5 h-5 text-[#174C40] shrink-0 mt-0.5" />
                  <span>{AGENCY_DETAILS.address}</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-[#F8F5ED] border border-stone-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#102D29] block font-semibold">Office Hours:</strong>
                  <span className="text-stone-600">Monday to Saturday: 9:30 AM – 7:30 PM</span>
                  <span className="text-stone-600 block">Sunday: By Prior Appointment / Pilgrimage Helpline</span>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-stone-500 tracking-wider block">
                  Official Phone Lines
                </span>
                {AGENCY_DETAILS.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F5ED] hover:bg-stone-200/60 border border-stone-200 text-[#102D29] font-bold text-xs sm:text-sm transition-colors focus-ring"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#174C40]" />
                      {phone.display}
                    </span>
                    <span className="text-[10px] font-semibold text-[#174C40] bg-white px-2 py-0.5 rounded shadow-2xs">
                      Call Now
                    </span>
                  </a>
                ))}
              </div>

              {/* Social Channels & Map */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <a
                  href={AGENCY_DETAILS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-600 hover:text-[#C8A45D] font-semibold text-xs focus-ring"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>{AGENCY_DETAILS.instagramHandle}</span>
                </a>
                <a
                  href={AGENCY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#174C40] hover:text-[#C8A45D] font-semibold text-xs focus-ring"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>
              </div>

            </div>

            {/* Google Rating Banner */}
            <div className="bg-[#102D29] text-white rounded-2xl p-5 border border-[#C8A45D]/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#C8A45D] font-bold uppercase">Google Verified Location</span>
                <div className="text-base font-bold text-white mt-0.5">5.0 Star Pilgrimage Service</div>
                <p className="text-xs text-stone-300">Ganagapeta, Kadapa, Andhra Pradesh</p>
              </div>
              <ShieldCheck className="w-9 h-9 text-[#C8A45D] shrink-0" />
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200">
            <span className="text-xs font-bold uppercase text-[#174C40] tracking-wider block mb-1">
              Direct Pilgrimage Inquiry
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#102D29] font-serif-title mb-2">
              Send Your Travel Requirements
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Fill out your details below. Our Kadapa coordinators will review your itinerary preference and reach out directly with seat availability and hotel vouchers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammed Farooq"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9059057239"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    Your City / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kadapa, Proddatur, Rayachoty..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                    Number of Pilgrims
                  </label>
                  <select
                    value={formData.pilgrimsCount}
                    onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                    className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] focus-ring"
                  >
                    <option value="1">1 Person (Individual)</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="3 to 4">3 to 4 Persons (Family Group)</option>
                    <option value="5+">5+ Persons (Large Family)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102D29] uppercase mb-1">
                  Preferred Batch / Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us your preferred month of travel, Saudia Airlines batch dates, or special accommodations for elderly pilgrims..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F8F5ED] border border-stone-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#102D29] resize-none focus-ring"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#174C40] hover:bg-[#102D29] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-transform active:scale-95 flex items-center justify-center gap-2 text-xs uppercase tracking-wider focus-ring"
              >
                <MessageCircle className="w-4 h-4 text-[#C8A45D]" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
