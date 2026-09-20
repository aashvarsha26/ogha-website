'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';

export const DealerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    territory: '',
    phone: '',
    email: '',
    businessType: 'RO Plant Integrator / Contractor',
    expectedVolume: '10-30 Panels / Month',
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

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B192C]">Application Submitted!</h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          Thank you, <span className="font-bold text-[#0B192C]">{formData.fullName}</span>. Our Dealer Network Director will contact you at{' '}
          <span className="font-bold text-[#0B192C]">{formData.phone}</span> to discuss margin structures, territory protection, and distributor pricing for{' '}
          <span className="font-bold text-[#0B192C]">{formData.territory || 'your region'}</span>.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 inline-block max-w-sm">
          <ShieldCheck className="w-4 h-4 text-[#FFB200] inline-block mr-1" />
          Direct Factory Support • Margin Protection Guarantee
        </div>
        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-[#0B192C] text-white font-bold rounded-lg text-xs hover:bg-[#1E3E62] transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-[#0B192C] text-white p-6 border-b border-[#1E3E62]">
        <span className="text-xs font-bold uppercase tracking-wider text-[#FFB200]">
          Dealer & Distributor Application
        </span>
        <h3 className="text-xl font-black text-white mt-1">Apply for Exclusive Regional Dealership</h3>
        <p className="text-xs text-gray-300 mt-1">
          Partner directly with Ogha Power Solutions for factory margins, custom panel branding options, and priority warranty service.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
              Full Name <span className="text-[#FFB200]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Suresh Varma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
              Company / Firm Name <span className="text-[#FFB200]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Varma Aqua Tech Systems"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
              Territory / Operating City & State <span className="text-[#FFB200]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vijayawada, Andhra Pradesh"
              value={formData.territory}
              onChange={(e) => setFormData({ ...formData, territory: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">
              Phone / WhatsApp Number <span className="text-[#FFB200]">*</span>
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
              placeholder="name@firm.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Current Business Type</label>
            <select
              value={formData.businessType}
              onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none bg-white font-medium"
            >
              <option value="RO Plant Integrator / Contractor">RO Plant Integrator / OEM Contractor</option>
              <option value="Water ATM Operator / Franchisee">Water ATM Operator / Franchisee</option>
              <option value="Industrial Electrical Supplier">Industrial Electrical / Component Dealer</option>
              <option value="New Business Investor">New Business Investor</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Expected Monthly Order Volume</label>
          <select
            value={formData.expectedVolume}
            onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-xs text-[#0F172A] outline-none bg-white font-medium"
          >
            <option value="5-10 Units / Month">5 - 10 Units / Month (Starter Dealer)</option>
            <option value="10-30 Panels / Month">10 - 30 Panels / Month (Regional Dealer)</option>
            <option value="30+ Panels / Month">30+ Panels / Month (District Stockist)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0B192C] uppercase mb-1">Additional Business Details</label>
          <textarea
            rows={3}
            placeholder="Tell us about your current client base, existing brands distributed, or specific product lines needed..."
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
            <span>Submitting Application...</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Dealer Application</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
