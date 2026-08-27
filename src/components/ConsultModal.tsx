import React, { useState, useEffect } from 'react';
import { X, Check, Send } from 'lucide-react';

interface ConsultModalProps {
  isOpen: boolean;
  initialPath: 'stay' | 'sell' | 'reclaim' | 'general';
  onClose: () => void;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, initialPath, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    countyState: '',
    situation: 'Behind on property taxes',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (initialPath === 'stay') setFormData(prev => ({ ...prev, situation: 'Want to stay in my home (Tax deed / Redemption)' }));
    else if (initialPath === 'sell') setFormData(prev => ({ ...prev, situation: 'Looking to sell my property with dignity' }));
    else if (initialPath === 'reclaim') setFormData(prev => ({ ...prev, situation: 'Reclaiming excess proceeds from tax sale' }));
    else setFormData(prev => ({ ...prev, situation: 'Behind on property taxes / Exploring options' }));
  }, [initialPath]);

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setFormSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg 2xl:max-w-xl bg-white rounded-3xl 2xl:rounded-4xl shadow-2xl border border-[#E5E5E7] p-6 sm:p-8 2xl:p-10 max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 2xl:top-6 2xl:right-6 text-[#86868B] hover:text-black p-1.5 2xl:p-2 rounded-full hover:bg-[#F5F5F7] transition-colors cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5 2xl:w-6 2xl:h-6" />
        </button>

        {formSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-black text-[#0066FF] flex items-center justify-center mx-auto mb-4 border border-[#333333]">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2">Request Received</h3>
            <p className="text-sm text-[#666666] mb-6 leading-relaxed">
              Thank you for reaching out to Homeowner Relief Network. An advocate will review your county records and contact you within 24 hours.
            </p>
            <div className="p-3.5 bg-[#F5F5F7] border border-[#E5E5E7] rounded-xl text-xs font-mono-code text-[#1A1A1A] mb-6">
              Case File: HRN-{Math.floor(100000 + Math.random() * 900000)} · Confidential
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-black text-white font-bold text-sm hover:bg-[#333333] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] font-bold tracking-widest uppercase text-[#86868B] mb-2">
                Confidential · $0 Out of Pocket
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
                Request Your Free Property Review
              </h3>
              <p className="text-xs text-[#666666] mt-1">
                No upfront fees, no obligation. Our research team will review your county status.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                    Property Address
                  </label>
                  <input 
                    type="text" 
                    placeholder="123 Maple St"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                    County & State
                  </label>
                  <input 
                    type="text" 
                    placeholder="Cook County, IL"
                    value={formData.countyState}
                    onChange={(e) => setFormData({ ...formData, countyState: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                  Primary Objective / Situation
                </label>
                <select 
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black font-sans"
                >
                  <option value="Want to stay in my home (Tax deed / Redemption)">Path 1: Want to stay in my home</option>
                  <option value="Looking to sell my property with dignity">Path 2: Looking to sell with dignity</option>
                  <option value="Reclaiming excess proceeds from tax sale">Path 3: Reclaiming excess proceeds from tax sale</option>
                  <option value="Behind on property taxes / Exploring options">Behind on property taxes / Exploring options</option>
                  <option value="Auction date scheduled">Auction date is already scheduled (Urgent)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-1.5">
                  Additional Notes (Optional)
                </label>
                <textarea 
                  rows={2}
                  placeholder="Any notice dates or details about your property..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#DEDEDE] bg-white focus:outline-none focus:border-black focus:ring-1 focus:ring-black font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-black text-white font-bold text-sm hover:bg-[#333333] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/10 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-[#0066FF]" />
                  <span>Submit For Free Case Evaluation</span>
                </button>
                <span className="text-[11px] text-[#86868B] text-center block mt-2.5">
                  🔒 Your data is 100% confidential. No spam, ever.
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
