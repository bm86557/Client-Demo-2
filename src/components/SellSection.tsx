import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface SellSectionProps {
  onOpenConsult: (path: 'sell') => void;
}

export const SellSection: React.FC<SellSectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-14 sm:py-20 2xl:py-24 bg-[#FBFBFD] border-b border-[#F0F0F2] scroll-mt-16" id="sell">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 2xl:gap-20 items-center">
          
          {/* Copy (First on desktop) */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <div className="inline-block px-3.5 2xl:px-4 py-1 2xl:py-1.5 mb-4 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#86868B]">
              Ready to move on? We'll help you sell with dignity
            </div>
            
            <h2 className="text-2xl sm:text-4xl 2xl:text-[2.75rem] font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-4">
              If staying isn't the right option, we help you transition into a better situation.
            </h2>
            
            <p className="text-base sm:text-lg 2xl:text-xl text-[#666666] leading-relaxed mb-6 font-normal">
              We connect you with ethical buyers, manage paperwork, and ensure you get the most from your property — even if it's already in distress. You'll walk away with peace of mind and possibly cash in hand for your next chapter.
            </p>

            <ul className="space-y-3.5 sm:space-y-4 mb-8 w-full">
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>We take care of all calls, filings, and follow-up</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Access to buyers who understand tax deed situations</span>
              </li>
              <li className="flex items-start gap-3.5 text-sm sm:text-base 2xl:text-lg text-[#1A1A1A] font-medium">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>No money needed from you — we handle the costs</span>
              </li>
            </ul>

            {/* <button
              onClick={() => onOpenConsult('sell')}
              className="px-7 sm:px-8 py-3.5 bg-black text-white text-sm sm:text-base font-bold rounded-xl hover:bg-[#333333] transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-black/5"
            >
              <span>Explore Selling Options</span>
              <ArrowRight className="w-4 h-4 text-[#0066FF]" />
            </button> */}
          </div>

          {/* Media */}
          <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 order-1 lg:order-2 group">
            <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-white/10">
              Path 2 · Sell
            </div>
            <img 
              src="https://images.unsplash.com/photo-1782024743263-bb153ea077e1?fm=jpg&q=80&w=1200&auto=format&fit=crop" 
              alt="A sold sign with roses in front of a home, representing a dignified, well-managed sale"
              className="w-full h-auto aspect-[4/3] max-h-[440px] 2xl:max-h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=80&w=1200&auto=format&fit=crop";
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

