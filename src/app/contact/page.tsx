'use client';

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Building2,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'General Product Enquiry',
    productCategory: 'RO Control Panels',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="page-shell py-10 px-4 space-y-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Hero */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 border-b-4 border-[#FFB200] shadow-md space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FFB200] bg-[#FFB200]/10 px-3 py-1 rounded">
            Ogha Technical Sales & Support
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Contact Ogha Power Solutions</h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl">
            Reach our Hyderabad headquarters for product quotes, dealer applications, custom panel builds, or technical support.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Call Direct */}
          <div className="panel-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1B365D] text-[#FFB200] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B192C]">Direct Sales & Support Phone</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p>Primary Sales: <a href="tel:+919052797900" className="font-bold text-[#0B192C] hover:underline">+91 9052 797 900</a></p>
              <p>IndiaMART Contact: <a href="tel:+917942800051" className="font-bold text-[#0B192C] hover:underline">+91 79428 00051</a></p>
              <p className="text-[11px] text-gray-400">Director: K. Siddiramulu</p>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="panel-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1B365D] text-[#FFB200] flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B192C]">Instant WhatsApp Support</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Get instant price quotes, wiring diagrams, and product availability directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/919052797900?text=Hi%20Ogha%20Team,%20I%20want%20to%20enquire%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Business Hours & Address */}
          <div className="panel-card p-6 rounded-2xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1B365D] text-[#FFB200] flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B192C]">Business Hours & Location</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong className="text-[#0B192C]">Hours:</strong> Monday – Saturday (9:00 AM – 7:00 PM IST)</p>
              <p><strong className="text-[#0B192C]">Email:</strong> support@oghapowersolutions.com</p>
              <p className="text-[11px] text-gray-400">Kamala Nagar, ECIL, Hyderabad, TS 500062</p>
            </div>
          </div>
        </div>

        {/* Main Form & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pre-Segmented General Contact Form */}
          <div className="lg:col-span-7 panel-card rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-[#0B192C] text-white p-6 border-b border-[#1E3E62]">
              <h3 className="text-xl font-extrabold text-white">Send an Enquiry to Our Engineering Team</h3>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B192C]">Message Sent!</h3>
                <p className="text-xs text-gray-600 max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-[#0B192C]">{formData.name}</span>. Your inquiry for{' '}
                  <span className="font-bold text-[#0B192C]">{formData.department}</span> has been routed to the respective specialist. We will respond shortly at{' '}
                  <span className="font-bold text-[#0B192C]">{formData.phone}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0B192C] text-white font-bold rounded-lg text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
                      Full Name <span className="text-[#FFB200]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
                      Phone / WhatsApp <span className="text-[#FFB200]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Enquiry Type / Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none bg-white font-medium"
                    >
                      <option value="General Product Enquiry">General Product Enquiry</option>
                      <option value="Become a Dealer Enquiry">Become a Regional Dealer Enquiry</option>
                      <option value="Support & Spare Parts">Support, Warranty & Spare Parts</option>
                      <option value="Custom Panel Specs">Custom Capacity Panel Build</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Product Line Interest</label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none bg-white font-medium"
                  >
                    <option value="RO Control Panels">RO Control Panels (Manual / Semi / Automatic SKY)</option>
                    <option value="Water Vending Machines">Water Vending Machines (Coin / Card / UPI)</option>
                    <option value="Accessories & Spares">Sensors, RFID Cards & Solenoid Valves</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Inquiry Details</label>
                  <textarea
                    rows={4}
                    placeholder="Mention plant capacity (e.g. 2000 LPH), required features, or delivery location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-extrabold text-sm rounded-lg shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Location & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="panel-card p-6 rounded-2xl shadow-md space-y-4">
              <h3 className="text-lg font-bold text-[#0B192C]">Registered & Factory Address</h3>

              <div className="flex items-start space-x-3 text-xs text-gray-700">
                <MapPin className="w-5 h-5 text-[#FFB200] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-[#0B192C] block">Ogha Power Solutions Private Limited</strong>
                  1-7-170/5, 1st, 2nd and 3rd Floors, Beside More Super market, Kamala Nagar, ECIL, Hyderabad, Telangana 500062
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="bg-[#0B192C] rounded-xl p-6 text-center text-white space-y-2 border border-[#1E3E62]">
                <Building2 className="w-8 h-8 text-[#FFB200] mx-auto" />
                <div className="font-bold text-sm">ECIL Hyderabad Manufacturing Unit</div>
                <div className="text-[11px] text-gray-400">Near Kamala Nagar More Supermarket</div>
                <a
                  href="https://maps.google.com/?q=1-7-170/5+Beside+More+Supermarket+Kamala+Nagar+ECIL+Hyderabad+Telangana+500062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#FFB200] text-[#0B192C] font-bold text-xs rounded-lg mt-2 hover:bg-[#E09D00] transition-colors"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
