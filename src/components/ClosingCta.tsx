import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

interface ClosingCtaProps {
  onOpenConsult: (path?: 'general') => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-28 3xl:py-32 bg-[#FFFFFF]" id="consult">
      <div className="site-container flex justify-center">
        <div className="relative bg-[#07090E] border border-[#1A2234] text-white rounded-xl xs:rounded-2xl 2xl:rounded-[1.75rem] 3xl:rounded-[2rem] p-5 xs:p-6 sm:p-8 md:p-10 2xl:p-20 3xl:p-24 overflow-hidden text-center shadow-2xl shadow-black/20 w-full max-w-3xl 2xl:max-w-6xl 3xl:max-w-7xl">
          
          {/* Subtle tech background highlight */}
          <div className="absolute -top-16 xs:-top-20 sm:-top-24 -right-16 xs:-right-20 sm:-right-24 w-64 xs:w-80 sm:w-96 2xl:w-[600px] 3xl:w-[750px] h-64 xs:h-80 sm:h-96 2xl:h-[600px] 3xl:h-[750px] bg-[#0066FF]/20 rounded-full blur-2xl xs:blur-3xl 2xl:blur-[140px] 3xl:blur-[160px] pointer-events-none" />
          <div className="absolute -bottom-16 xs:-bottom-20 sm:-bottom-24 -left-16 xs:-left-20 sm:-left-24 w-64 xs:w-80 sm:w-96 2xl:w-[600px] 3xl:w-[750px] h-64 xs:h-80 sm:h-96 2xl:h-[600px] 3xl:h-[750px] bg-[#0066FF]/10 rounded-full blur-2xl xs:blur-3xl 2xl:blur-[140px] 3xl:blur-[160px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 sm:px-4 py-1 xs:py-1.5 mb-3 xs:mb-4 sm:mb-5 bg-[#111726] border border-[#23304A] rounded-full text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-bold tracking-widest uppercase text-[#0066FF]">
              <span className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-[#0066FF] animate-pulse"></span>
              <span>Whichever Path Is Yours</span>
            </div>

            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-2.5 xs:mb-3 sm:mb-4 2xl:mb-6 3xl:mb-8 px-2 xs:px-0">
              Ready to Protect Your Home & Strengthen Your Financial Future?
            </h2>

            <p className="text-xs xs:text-sm sm:text-base 2xl:text-xl 3xl:text-2xl text-[#94A3B8] mb-5 xs:mb-6 sm:mb-7 2xl:mb-9 3xl:mb-12 max-w-2xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto leading-relaxed px-2 xs:px-0">
              Connect with Homeowner Relief Network to explore tailored relief strategies, foreclosure defense, and county surplus recovery solutions.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-2.5 xs:gap-3 sm:gap-3.5 mb-5 xs:mb-6 px-2 xs:px-0">
              <button 
                onClick={() => onOpenConsult('general')}
                className="w-full xs:w-auto px-5 xs:px-6 sm:px-8 2xl:px-12 3xl:px-14 py-2.5 xs:py-3 sm:py-3.5 2xl:py-5 3xl:py-6 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-[10px] xs:text-xs sm:text-sm 2xl:text-lg 3xl:text-xl uppercase tracking-wider rounded-full shadow-lg shadow-[#0066FF]/30 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5 xs:gap-2 group"
              >
                <span>Partner With Our Team</span>
                <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="tel:4045902664"
                className="w-full xs:w-auto px-4 xs:px-5 sm:px-6 2xl:px-10 3xl:px-12 py-2.5 xs:py-3 sm:py-3.5 2xl:py-5 3xl:py-6 bg-[#111726] border border-[#23304A] text-white hover:bg-[#1A2338] hover:border-[#0066FF]/40 font-bold text-[10px] xs:text-xs sm:text-sm 2xl:text-lg 3xl:text-xl rounded-full transition-all flex items-center justify-center gap-1.5 xs:gap-2"
              >
                <Phone className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5 text-[#0066FF]" />
                <span>Call (404) 590-2664</span>
              </a>
            </div>

            <div className="font-mono-code text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm text-[#64748B] tracking-wide px-2 xs:px-0">
              Our goal: solutions that protect you and your family's future.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

