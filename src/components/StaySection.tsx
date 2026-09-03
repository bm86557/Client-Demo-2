import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface StaySectionProps {
  onOpenConsult: (path: 'stay') => void;
}

export const StaySection: React.FC<StaySectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-24 3xl:py-28 border-b border-[#F0F0F2] scroll-mt-16" id="stay">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-14 2xl:gap-20 3xl:gap-24 items-center">
          
          {/* Media with Sleek Badging */}
          <div className="relative rounded-2xl xs:rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 group">
            <div className="absolute top-3 xs:top-4 left-3 xs:left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[9px] xs:text-[10px] sm:text-[11px] 2xl:text-xs font-bold tracking-wider uppercase px-2.5 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 rounded-full border border-white/10">
              Path 1 · Stay
            </div>
            <img 
              src="/staysection.jpg" 
              alt="A family standing together looking toward their home from the front yard"
              width={1600}
              height={1200}
              className="w-full h-auto aspect-[4/3] max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] md:max-h-[440px] 2xl:max-h-[500px] 3xl:max-h-[600px] object-cover"
              style={{
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                filter: 'none',
                WebkitFilter: 'none'
              }}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col items-start px-2 xs:px-0">
            <div className="inline-block px-2.5 xs:px-3 sm:px-3.5 2xl:px-4 3xl:px-5 py-0.5 xs:py-1 2xl:py-1.5 mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-bold tracking-widest uppercase text-[#0066FF]">
              Stay In Your Home With The Right Help
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 3xl:text-[3.5rem] font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8">
              We specialize in helping homeowners facing tax deed issues stay in their property.
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#666666] leading-relaxed mb-5 xs:mb-6 2xl:mb-8 3xl:mb-10 font-normal">
              We explore every possible solution to stop the loss of your home — from redemption options to legal strategies. We even work with attorneys to fight on your behalf. You focus on your life — we'll handle the paperwork, negotiations, and legal path forward.
            </p>

            <ul className="space-y-3 xs:space-y-4 2xl:space-y-6 3xl:space-y-8 mb-6 xs:mb-8 2xl:mb-10 3xl:mb-12 w-full">
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>Expert navigation of tax deed redemption</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>No upfront cost — our team covers everything</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>Personalized support to keep you in your home</span>
              </li>
            </ul>

            {/* <button
              onClick={() => onOpenConsult('stay')}
              className="px-7 2xl:px-9 py-3.5 2xl:py-4.5 bg-black text-white text-sm 2xl:text-base font-bold rounded-xl 2xl:rounded-2xl hover:bg-[#333333] transition-colors flex items-center gap-2 2xl:gap-3 cursor-pointer shadow-md shadow-black/5"
            >
              <span>Discuss Keeping My Home</span>
              <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 text-[#0066FF]" />
            </button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

