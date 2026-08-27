import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface ClosingCtaProps {
  onOpenConsult: (path?: 'general') => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-14 sm:py-20 2x1:py-28 bg-[#FFFFFF]" id="consult">
      <div className="site-container flex justify-center">
        <div className="relative bg-[#07090E] border border-[#1A2234] text-white rounded-2xl 2xl:rounded-[1.75rem] p-6 sm:p-8 md:p-10 2xl:p-20 overflow-hidden text-center shadow-2xl shadow-black/20 w-full max-w-3xl 2xl:max-w-6xl">
          
          {/* Subtle tech background highlight */}
          <div className="absolute -top-24 -right-24 w-96 2xl:w-[600px] h-96 2xl:h-[600px] bg-[#0066FF]/20 rounded-full blur-3xl 2xl:blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 2xl:w-[600px] h-96 2xl:h-[600px] bg-[#0066FF]/10 rounded-full blur-3xl 2xl:blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl 2xl:max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 sm:mb-5 bg-[#111726] border border-[#23304A] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#0066FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse"></span>
              <span>Whichever Path Is Yours</span>
            </div>

            <h2 className="text-xl sm:text-2xl 2xl:text-5xl font-extrabold tracking-tight text-white leading-[1.2] mb-3 sm:mb-4">
              Ready to Protect Your Home & Strengthen Your Financial Future?
            </h2>

            <p className="text-xs sm:text-sm 2xl:text-xl text-[#94A3B8] mb-6 sm:mb-7 max-w-2xl 2xl:max-w-5xl mx-auto leading-relaxed">
              Connect with Homeowner Relief Network to explore tailored relief strategies, foreclosure defense, and county surplus recovery solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-6">
              <button 
                onClick={() => onOpenConsult('general')}
                className="w-full sm:w-auto px-6 2xl:px-12 py-3 sm:py-3.5 2xl:py-5 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs 2xl:text-lg uppercase tracking-wider rounded-full shadow-lg shadow-[#0066FF]/30 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Partner With Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="tel:4045902664"
                className="w-full sm:w-auto px-5 2xl:px-10 py-3 sm:py-3.5 2xl:py-5 bg-[#111726] border border-[#23304A] text-white hover:bg-[#1A2338] hover:border-[#0066FF]/40 font-bold text-xs 2xl:text-lg rounded-full transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 2xl:w-4 2xl:h-4 text-[#0066FF]" />
                <span>Call (404) 590-2664</span>
              </a>
            </div>

            <div className="font-mono-code text-[10px] 2xl:text-xs text-[#64748B] tracking-wide">
              Our goal: solutions that protect you and your family's future.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

