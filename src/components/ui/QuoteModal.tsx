'use client';

import React, { useState, useEffect } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { X, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';

export const QuoteModal: React.FC = () => {
  const { isOpen, productName, closeQuoteModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '1-5 Units',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (productName) {
      setFormData((prev) => ({ ...prev, product: productName }));
    }
  }, [productName]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API lead intake route handler
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    closeQuoteModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-xs p-4 pt-8 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 my-4 sm:my-8">
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#FFB200] flex items-center justify-center font-bold text-[#0B192C] text-lg">
              O
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">Request Price Quote</h3>
            </div>
          </div>
          <button
            onClick={closeQuoteModal}
            className="text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-[#0B192C]">Quote Request Received!</h4>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Our technical engineering team will review your requirement for{' '}
              <span className="font-semibold text-[#0B192C]">{formData.product || 'your inquiry'}</span> and call you at{' '}
              <span className="font-semibold text-[#0B192C]">{formData.phone}</span> within 2 hours.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 flex items-center space-x-2 justify-center">
              <ShieldCheck className="w-4 h-4 text-[#FFB200] shrink-0" />
              <span>IndiaMART 4.8★ Verified Manufacturer • Direct Factory Warranty</span>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-[#0B192C] text-white font-semibold rounded-lg hover:bg-[#1E3E62] transition-colors w-full"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {formData.product && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-[#0B192C] flex justify-between items-center">
                <span className="font-medium">Selected Product:</span>
                <span className="font-bold text-[#0B192C] bg-white px-2 py-1 rounded border border-blue-100">
                  {formData.product}
                </span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Full Name <span className="text-[#FFB200]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Phone / WhatsApp <span className="text-[#FFB200]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Product Requirement</label>
                <input
                  type="text"
                  placeholder="RO Panel / Water ATM / Spare Parts"
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Estimated Quantity</label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none bg-white"
                >
                  <option value="1-5 Units">1 - 5 Units (Sample / Single)</option>
                  <option value="5-20 Units">5 - 20 Units (Batch order)</option>
                  <option value="20+ Units">20+ Units (Distributor / Bulk)</option>
                  <option value="Custom Build">Custom Specification Panel</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Additional Requirements / Specs</label>
              <textarea
                rows={3}
                placeholder="Mention plant capacity (e.g. 2000 LPH), preferred payment mode, or delivery city..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] text-sm text-[#0F172A] outline-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-bold rounded-lg shadow-md transition-all flex items-center justify-center space-x-2 text-base cursor-pointer"
              >
                {loading ? (
                  <span>Sending Quote Request...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Get Instant Price Quote</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-gray-500 text-center flex items-center justify-center space-x-1">
              <PhoneCall className="w-3.5 h-3.5 text-gray-400" />
              <span>Or call direct sales: +91 9052 797 900</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
