import React, { useState } from 'react';
import { Phone, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsult: (path?: 'stay' | 'sell' | 'reclaim' | 'general') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#F0F0F2] shrink-0">
      <div className="w-full max-w-[2600px] mx-auto px-4 sm:px-8 lg:px-12 2xl:px-20 py-3.5 sm:py-4.5 2xl:py-6 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 2xl:gap-4 group shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 2xl:w-11 2xl:h-11 bg-black rounded-lg 2xl:rounded-xl flex items-center justify-center group-hover:bg-[#0066FF] transition-colors shadow-sm">
            <div className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 border-2 border-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg 2xl:text-2xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight flex items-center gap-1.5">
              <span>Stay Sell Claim</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] inline-block"></span>
            </span>
            <span className="text-[10px] 2xl:text-xs font-mono-code text-[#86868B] uppercase tracking-widest hidden sm:block">
              Property Rights & Advocacy
            </span>
          </div>
        </a>

        {/* Nav links and Actions grouped on the right like ECHS reference */}
        <div className="hidden lg:flex items-center gap-8 2xl:gap-12">
          <nav className="flex items-center gap-6 2xl:gap-9 text-sm 2xl:text-base font-semibold text-[#666666]">
            <a href="#stay" className="hover:text-black transition-colors py-1">Path 1: Stay</a>
            <a href="#sell" className="hover:text-black transition-colors py-1">Path 2: Sell</a>
            <a href="#reclaim" className="hover:text-black transition-colors py-1">Path 3: Reclaim</a>
            {/* <a href="#calculator" className="hover:text-[#0066FF] transition-colors py-1">Surplus Estimator</a>
            <a href="#methodology" className="hover:text-black transition-colors py-1">Methodology</a>
            <a href="#faq" className="hover:text-black transition-colors py-1">FAQ</a> */}
          </nav>

          <div className="flex items-center gap-4 2xl:gap-6 shrink-0">
            <a 
              href="tel:4045902664" 
              className="hidden xl:flex items-center gap-2 text-xs 2xl:text-sm font-mono-code font-bold text-[#666666] hover:text-black px-3 py-2 2xl:px-4 2xl:py-2.5 rounded-lg hover:bg-[#F5F5F7] transition-all"
              title="Call Homeowner Relief Network"
            >
              <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-[#0066FF]" />
              (404) 590-2664
            </a>

            <button 
              onClick={() => onOpenConsult('general')}
              className="px-5 2xl:px-7 py-2.5 2xl:py-3.5 bg-black hover:bg-[#0066FF] text-white text-xs sm:text-sm 2xl:text-base font-bold rounded-full transition-all duration-200 shadow-md shadow-black/5 hover:shadow-[#0066FF]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 group/btn"
            >
              <span>Free Consultation</span>
              <ChevronRight className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2.5">
          <button 
            onClick={() => onOpenConsult('general')}
            className="px-3.5 py-2 bg-black text-white text-xs font-semibold rounded-full hover:bg-[#222222] transition-all flex items-center gap-1.5"
          >
            <span>Consult</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#E5E5E7] text-[#1A1A1A] hover:bg-[#F5F5F7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5E5E7] px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5 text-sm font-semibold text-[#1A1A1A]">
            <a 
              href="#stay" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 1: Stay in your home
            </a>
            <a 
              href="#sell" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 2: Sell with dignity
            </a>
            <a 
              href="#reclaim" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 3: Reclaim surplus funds
            </a>
            {/* <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              Surplus Estimator
            </a>
            <a 
              href="#methodology" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              How We Advocate (Methodology)
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#0066FF] transition-colors"
            >
              Frequently Asked Questions
            </a> */}
            
            <div className="pt-3 border-t border-[#F0F0F2] flex items-center justify-between">
              <a 
                href="tel:4045902664" 
                className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#1A1A1A]"
              >
                <Phone className="w-4 h-4 text-[#0066FF]" />
                (404) 590-2664
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


