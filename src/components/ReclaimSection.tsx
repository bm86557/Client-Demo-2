import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ReclaimSectionProps {
  onOpenConsult: (path: 'reclaim') => void;
}

export const ReclaimSection: React.FC<ReclaimSectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-24 3xl:py-28 border-b border-[#F0F0F2] scroll-mt-16" id="reclaim">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-14 2xl:gap-20 3xl:gap-24 items-center">
          
          {/* Media */}
          <div className="relative rounded-2xl xs:rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 group">
            <div className="absolute top-3 xs:top-4 left-3 xs:left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[9px] xs:text-[10px] sm:text-[11px] 2xl:text-xs font-bold tracking-wider uppercase px-2.5 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 rounded-full border border-white/10">
              Path 3 · Reclaim
            </div>
            <img 
              src="https://images.unsplash.com/photo-1671469899829-8c1c400f5866?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="A hand holding recovered cash, representing excess proceeds owed to former homeowners"
              className="w-full h-auto aspect-[4/3] max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] md:max-h-[440px] 2xl:max-h-[500px] 3xl:max-h-[600px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?fm=jpg&q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col items-start px-2 xs:px-0">
            <div className="inline-block px-2.5 xs:px-3 sm:px-3.5 2xl:px-4 3xl:px-5 py-0.5 xs:py-1 2xl:py-1.5 mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-bold tracking-widest uppercase text-[#0066FF]">
              You Could Be Owed Thousands — And Not Even Know It
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-[2.75rem] 3xl:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8">
              Lost your property to tax sale? You might still be owed money.
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#666666] leading-relaxed mb-5 xs:mb-6 2xl:mb-8 3xl:mb-10 font-normal">
              When counties sell properties for more than what was owed, the extra funds — called excess proceeds — often belong to the original owner. Most homeowners never claim them. That's where we come in. We track the funds, file your claim, and fight to get what's yours.
            </p>

            <ul className="space-y-3 xs:space-y-3.5 sm:space-y-4 2xl:space-y-6 3xl:space-y-8 mb-6 xs:mb-8 2xl:mb-10 3xl:mb-12 w-full">
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>You don't lift a finger — we handle it all</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>We pay all costs upfront, including legal</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>You only pay if we recover funds for you</span>
              </li>
            </ul>

            {/* <button
              onClick={() => onOpenConsult('reclaim')}
              className="px-7 sm:px-8 py-3.5 bg-[#0066FF] hover:bg-[#0052CC] text-white text-sm sm:text-base font-bold rounded-xl transition-all shadow-lg shadow-[#0066FF]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>Reclaim My Funds</span>
              <ArrowRight className="w-4 h-4" />
            </button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

