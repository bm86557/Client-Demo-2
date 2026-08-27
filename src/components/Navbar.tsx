import React, { useState } from 'react';
import { Phone, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsult: (path?: 'stay' | 'sell' | 'reclaim' | 'general') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsult }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#F0F0F2] shrink-0">
      <div className="w-full max-w-[2600px] mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-20 3xl:px-24 py-3 xs:py-3.5 sm:py-4 md:py-4.5 2xl:py-6 3xl:py-7 flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
        
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 2xl:gap-4 3xl:gap-5 group shrink-0">
          <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 bg-black rounded-lg 2xl:rounded-xl flex items-center justify-center group-hover:bg-[#0066FF] transition-colors shadow-sm">
            <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-4.5 3xl:h-4.5 border-2 border-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm xs:text-base sm:text-lg 2xl:text-2xl 3xl:text-3xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight flex items-center gap-1 xs:gap-1.5">
              <span>Stay Sell Claim</span>
              <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-[#0066FF] inline-block"></span>
            </span>
            <span className="text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-mono-code text-[#86868B] uppercase tracking-widest hidden xs:block">
              Property Rights & Advocacy
            </span>
          </div>
        </a>

        {/* Nav links and Actions grouped on the right like ECHS reference */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-12 3xl:gap-16">
          <nav className="flex items-center gap-4 xl:gap-6 2xl:gap-9 3xl:gap-12 text-sm 2xl:text-base 3xl:text-lg font-semibold text-[#666666]">
            <a href="#stay" className="hover:text-black transition-colors py-1">Path 1: Stay</a>
            <a href="#sell" className="hover:text-black transition-colors py-1">Path 2: Sell</a>
            <a href="#reclaim" className="hover:text-black transition-colors py-1">Path 3: Reclaim</a>
          </nav>

          <div className="flex items-center gap-3 xl:gap-4 2xl:gap-6 3xl:gap-8 shrink-0">
            <a 
              href="tel:4045902664" 
              className="hidden xl:flex items-center gap-2 text-xs 2xl:text-sm 3xl:text-base font-mono-code font-bold text-[#666666] hover:text-black px-3 py-2 2xl:px-4 2xl:py-2.5 3xl:px-5 3xl:py-3 rounded-lg hover:bg-[#F5F5F7] transition-all"
              title="Call Homeowner Relief Network"
            >
              <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5 text-[#0066FF]" />
              (404) 590-2664
            </a>

            <button 
              onClick={() => onOpenConsult('general')}
              className="px-4 xl:px-5 2xl:px-7 3xl:px-9 py-2 xl:py-2.5 2xl:py-3.5 3xl:py-4 bg-black hover:bg-[#0066FF] text-white text-xs sm:text-sm 2xl:text-base 3xl:text-lg font-bold rounded-full transition-all duration-200 shadow-md shadow-black/5 hover:shadow-[#0066FF]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2 group/btn"
            >
              <span>Free Consultation</span>
              <ChevronRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-4.5 2xl:h-4.5 3xl:w-5 3xl:h-5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2 xs:gap-2.5">
          <button 
            onClick={() => onOpenConsult('general')}
            className="px-2.5 xs:px-3 sm:px-3.5 py-1.5 xs:py-2 bg-black text-white text-[10px] xs:text-xs sm:text-sm font-semibold rounded-full hover:bg-[#222222] transition-all flex items-center gap-1 xs:gap-1.5"
          >
            <span>Consult</span>
            <ChevronRight className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 xs:p-2 rounded-lg xs:rounded-xl border border-[#E5E5E7] text-[#1A1A1A] hover:bg-[#F5F5F7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 xs:w-5 xs:h-5" /> : <Menu className="w-4 h-4 xs:w-5 xs:h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#E5E5E7] px-4 xs:px-5 sm:px-6 py-4 xs:py-4.5 sm:py-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5 xs:space-y-3 sm:space-y-3.5 text-xs xs:text-sm font-semibold text-[#1A1A1A]">
            <a 
              href="#stay" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 xs:py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 1: Stay in your home
            </a>
            <a 
              href="#sell" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 xs:py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 2: Sell with dignity
            </a>
            <a 
              href="#reclaim" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 xs:py-2 hover:text-[#0066FF] transition-colors"
            >
              Path 3: Reclaim surplus funds
            </a>
            
            <div className="pt-2.5 xs:pt-3 border-t border-[#F0F0F2] flex items-center justify-between">
              <a 
                href="tel:4045902664" 
                className="flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs font-mono-code font-bold text-[#1A1A1A]"
              >
                <Phone className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-[#0066FF]" />
                (404) 590-2664
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


