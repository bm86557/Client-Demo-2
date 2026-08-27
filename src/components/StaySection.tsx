import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface StaySectionProps {
  onOpenConsult: (path: 'stay') => void;
}

export const StaySection: React.FC<StaySectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-14 sm:py-20 2xl:py-24 border-b border-[#F0F0F2] scroll-mt-16" id="stay">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 2xl:gap-20 items-center">
          
          {/* Media with Sleek Badging */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 group">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/10">
              Path 1 · Stay
            </div>
            <img 
              src="/staysection.jpg" 
              alt="A family standing together looking toward their home from the front yard"
              className="w-full h-auto aspect-[4/3] max-h-[440px] 2xl:max-h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col items-start">
            <div className="inline-block px-3.5 2xl:px-4 py-1 2xl:py-1.5 mb-4 2xl:mb-6 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#0066FF]">
              Stay In Your Home With The Right Help
            </div>
            
            <h2 className="text-2xl sm:text-4xl 2xl:text-5xl 3xl:text-[3.25rem] font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-4 2xl:mb-6">
              We specialize in helping homeowners facing tax deed issues stay in their property.
            </h2>
            
            <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#666666] leading-relaxed mb-6 2xl:mb-8 font-normal">
              We explore every possible solution to stop the loss of your home — from redemption options to legal strategies. We even work with attorneys to fight on your behalf. You focus on your life — we'll handle the paperwork, negotiations, and legal path forward.
            </p>

            <ul className="space-y-4 2xl:space-y-6 mb-8 2xl:mb-10 w-full">
              <li className="flex items-start gap-3.5 2xl:gap-4 text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                </div>
                <span>Expert navigation of tax deed redemption</span>
              </li>
              <li className="flex items-start gap-3.5 2xl:gap-4 text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
                </div>
                <span>No upfront cost — our team covers everything</span>
              </li>
              <li className="flex items-start gap-3.5 2xl:gap-4 text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 2xl:w-7 2xl:h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5 2xl:w-4 2xl:h-4" />
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

