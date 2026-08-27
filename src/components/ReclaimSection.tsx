import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface ReclaimSectionProps {
  onOpenConsult: (path: 'reclaim') => void;
}

export const ReclaimSection: React.FC<ReclaimSectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-14 sm:py-20 2xl:py-24 border-b border-[#F0F0F2] scroll-mt-16" id="reclaim">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 2xl:gap-20 items-center">
          
          {/* Media */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 group">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/10">
              Path 3 · Reclaim
            </div>
            <img 
              src="https://images.unsplash.com/photo-1671469899829-8c1c400f5866?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="A hand holding recovered cash, representing excess proceeds owed to former homeowners"
              className="w-full h-auto aspect-[4/3] max-h-[440px] 2xl:max-h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?fm=jpg&q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col items-start">
            <div className="inline-block px-3.5 2xl:px-4 py-1 2xl:py-1.5 mb-4 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#0066FF]">
              You Could Be Owed Thousands — And Not Even Know It
            </div>
            
            <h2 className="text-2xl sm:text-4xl 2xl:text-[2.75rem] font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-4">
              Lost your property to tax sale? You might still be owed money.
            </h2>
            
            <p className="text-base sm:text-lg 2xl:text-xl text-[#666666] leading-relaxed mb-6 font-normal">
              When counties sell properties for more than what was owed, the extra funds — called excess proceeds — often belong to the original owner. Most homeowners never claim them. That's where we come in. We track the funds, file your claim, and fight to get what's yours.
            </p>

            <ul className="space-y-3.5 sm:space-y-4 mb-8 w-full">
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>You don't lift a finger — we handle it all</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>We pay all costs upfront, including legal</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
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

