import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface SellSectionProps {
  onOpenConsult: (path: 'sell') => void;
}

export const SellSection: React.FC<SellSectionProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-24 3xl:py-28 bg-[#FBFBFD] border-b border-[#F0F0F2] scroll-mt-16" id="sell">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-14 2xl:gap-20 3xl:gap-24 items-center">
          
          {/* Copy (First on desktop) */}
          <div className="flex flex-col items-start order-2 lg:order-1 px-2 xs:px-0">
            <div className="inline-block px-2.5 xs:px-3 sm:px-3.5 2xl:px-4 3xl:px-5 py-0.5 xs:py-1 2xl:py-1.5 mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-bold tracking-widest uppercase text-[#86868B]">
              Ready to move on? We'll help you sell with dignity
            </div>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-[2.75rem] 3xl:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight mb-3 xs:mb-4 2xl:mb-6 3xl:mb-8">
              If staying isn't the right option, we help you transition into a better situation.
            </h2>
            
            <p className="text-sm xs:text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#666666] leading-relaxed mb-5 xs:mb-6 2xl:mb-8 3xl:mb-10 font-normal">
              We connect you with ethical buyers, manage paperwork, and ensure you get the most from your property — even if it's already in distress. You'll walk away with peace of mind and possibly cash in hand for your next chapter.
            </p>

            <ul className="space-y-3 xs:space-y-3.5 sm:space-y-4 2xl:space-y-6 3xl:space-y-8 mb-6 xs:mb-8 2xl:mb-10 3xl:mb-12 w-full">
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>We take care of all calls, filings, and follow-up</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>Access to buyers who understand tax deed situations</span>
              </li>
              <li className="flex items-start gap-2.5 xs:gap-3 sm:gap-3.5 2xl:gap-4 3xl:gap-5 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#1A1A1A] font-medium">
                <div className="w-5 h-5 xs:w-6 xs:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 2xl:w-4 2xl:h-4 3xl:w-5 3xl:h-5" />
                </div>
                <span>No money needed from you — we handle the costs</span>
              </li>
            </ul>
          </div>

          {/* Media */}
          <div className="relative rounded-2xl xs:rounded-3xl overflow-hidden border border-[#E5E5E7] bg-[#F5F5F7] shadow-xl shadow-black/5 order-1 lg:order-2 group">
            <div className="absolute top-3 xs:top-4 left-3 xs:left-4 z-10 bg-black/80 backdrop-blur-md text-white font-mono-code text-[9px] xs:text-[10px] sm:text-[11px] 2xl:text-xs font-bold tracking-wider uppercase px-2.5 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 rounded-full border border-white/10">
              Path 2 · Sell
            </div>
            <img 
              src="https://images.unsplash.com/photo-1782024743263-bb153ea077e1?fm=jpg&q=95&w=2000&auto=format&fit=crop" 
              alt="A sold sign with roses in front of a home, representing a dignified, well-managed sale"
              width={1600}
              height={1200}
              className="w-full h-auto aspect-[4/3] max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] md:max-h-[440px] 2xl:max-h-[500px] 3xl:max-h-[600px] object-cover"
              style={{
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
              loading="eager"
              decoding="async"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?fm=jpg&q=95&w=2000&auto=format&fit=crop";
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

