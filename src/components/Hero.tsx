import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Home, TrendingUp, DollarSign, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenConsult: (path?: 'stay' | 'sell' | 'reclaim' | 'general') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult }) => {
  return (
    <section className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 2xl:pt-24 3xl:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 2xl:pb-32 3xl:pb-40 border-b border-[#F0F0F2] overflow-hidden" id="top">
      {/* Hero Background Image - CRYSTAL CLEAR */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/Demothreehero.jpeg" 
          alt="Homeowner property relief background" 
          width={1600}
          height={900}
          className="w-full h-full object-cover object-center opacity-100"
          style={{
            filter: 'contrast(1.04) saturate(1.08) brightness(1.02)',
            imageRendering: 'auto',
            objectPosition: 'center center',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Minimal bottom fade for smooth transition into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 sm:from-white/20 via-transparent to-white" />
      </div>

      {/* Subtle minimal background glow */}
      <div className="absolute top-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] 2xl:w-[750px] 3xl:w-[900px] h-[200px] sm:h-[250px] md:h-[300px] 2xl:h-[450px] 3xl:h-[550px] bg-[#0066FF]/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[280px] sm:w-[350px] md:w-[450px] 2xl:w-[700px] 3xl:w-[850px] h-[180px] sm:h-[200px] md:h-[250px] 2xl:h-[400px] 3xl:h-[500px] bg-black/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="site-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Sleek Pill Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 md:px-4 py-1.5 mb-4 sm:mb-5 md:mb-6 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[9px] sm:text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-[#86868B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse"></span>
            <span className="hidden xs:inline">Notice Regarding Your Property</span>
            <span className="xs:hidden">Property Notice</span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.25rem] 3xl:text-[5rem] font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-[#1A1A1A] mb-4 sm:mb-5 md:mb-6">
            Behind on Taxes? Lost a Property?<br className="hidden sm:block" />
            We Help Homeowners <span className="text-[#0066FF]">Stay</span>, <span className="text-black underline decoration-[#E5E5E7] underline-offset-4 sm:underline-offset-8">Sell</span>, or <span className="text-[#0066FF]">Reclaim</span> — at $0 Out of Pocket
          </h1>

          <p className="text-sm sm:text-base md:text-lg 2xl:text-xl 3xl:text-2xl text-[#1A1A1A] max-w-xl sm:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl leading-relaxed mb-6 sm:mb-8 md:mb-10 font-normal">
            Whether you're fighting to keep your property, ready to move on, or trying to claim money left behind — we're on your side. Our team handles everything, including legal support. You don't pay a dime upfront.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-3.5 md:gap-4 mb-5 sm:mb-6 w-full sm:w-auto">
            <button 
              onClick={() => onOpenConsult('general')}
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-black text-white font-bold text-xs sm:text-sm md:text-base rounded-xl shadow-xl shadow-black/10 hover:bg-[#222222] active:scale-[0.99] transition-all flex items-center justify-center gap-2 sm:gap-2.5 cursor-pointer"
            >
              <span className="hidden sm:inline">Get Help Now — Free, No-Obligation Consultation</span>
              <span className="sm:hidden">Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066FF]" />
            </button>

            <a 
              href="tel:4045902664"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 md:py-4 bg-white border border-[#DEDEDE] text-black font-bold text-xs sm:text-sm md:text-base rounded-xl hover:bg-[#F5F5F7] hover:border-[#CCCCCC] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#666666]" />
              <span>Call (404) 590-2664</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono-code font-medium text-[#1A1A1A]">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0066FF]" />
            <span className="text-center">No upfront fees · No obligation · 100% Confidential</span>
          </div>
        </div>

        {/* ---------- 3 SIGNATURE PATH CARDS ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 mt-12 sm:mt-16">
          
          {/* Path 1: Stay */}
          <div className="p-7 sm:p-8 2xl:p-9 bg-[#FBFBFD] rounded-3xl border border-[#F0F0F2] flex flex-col justify-between hover:border-[#E5E5E7] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-white rounded-2xl flex items-center justify-center border border-[#E5E5E7] mb-6 group-hover:border-[#0066FF] group-hover:text-[#0066FF] transition-all shadow-sm">
                <Home className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </div>
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#0066FF] mb-2">
                Path 1
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-[1.65rem] font-bold tracking-tight mb-3 text-[#1A1A1A]">
                Stay in your home
              </h3>
              <p className="text-[#666666] leading-relaxed text-sm 2xl:text-[0.95rem] mb-8">
                Stop foreclosure, explore tax deed redemption, and gain comprehensive legal defense with zero out-of-pocket expenses.
              </p>
            </div>
            <div className="space-y-3.5">
              <a 
                href="#stay"
                className="inline-flex items-center gap-2 text-xs 2xl:text-sm font-bold text-black group-hover:text-[#0066FF] transition-colors"
              >
                <span>View Stay Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="h-1 w-12 bg-[#0066FF] rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>

          {/* Path 2: Sell */}
          <div className="p-7 sm:p-8 2xl:p-9 bg-[#FBFBFD] rounded-3xl border border-[#F0F0F2] flex flex-col justify-between hover:border-[#E5E5E7] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-white rounded-2xl flex items-center justify-center border border-[#E5E5E7] mb-6 group-hover:border-black transition-all shadow-sm">
                <TrendingUp className="w-5 h-5 2xl:w-6 2xl:h-6" />
              </div>
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#86868B] mb-2">
                Path 2
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-[1.65rem] font-bold tracking-tight mb-3 text-[#1A1A1A]">
                Sell with dignity
              </h3>
              <p className="text-[#666666] leading-relaxed text-sm 2xl:text-[0.95rem] mb-8">
                Connect with ethical buyers, offload all county paperwork, and walk away with maximum equity and total peace of mind.
              </p>
            </div>
            <div className="space-y-3.5">
              <a 
                href="#sell"
                className="inline-flex items-center gap-2 text-xs 2xl:text-sm font-bold text-black group-hover:text-[#0066FF] transition-colors"
              >
                <span>View Sale Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="h-1 w-12 bg-black/20 rounded-full group-hover:w-20 group-hover:bg-black transition-all duration-300"></div>
            </div>
          </div>

          {/* Path 3: Reclaim (High-Contrast Dark Sleek Card) */}
          <div className="p-7 sm:p-8 2xl:p-9 bg-black text-white rounded-3xl border border-black flex flex-col justify-between hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#1A1A1A] rounded-2xl flex items-center justify-center border border-[#333333] mb-6 group-hover:border-[#0066FF] transition-all">
                <DollarSign className="w-5 h-5 2xl:w-6 2xl:h-6 text-[#0066FF]" />
              </div>
              <div className="text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#0066FF] mb-2">
                Path 3 · Surplus Funds
              </div>
              <h3 className="text-xl sm:text-2xl 2xl:text-[1.65rem] font-bold tracking-tight mb-3 text-white">
                Reclaim your funds
              </h3>
              <p className="text-[#A1A1A6] leading-relaxed text-sm 2xl:text-[0.95rem] mb-8">
                Already lost a property at tax auction? You may be owed thousands in county excess proceeds. We recover what is rightfully yours.
              </p>
            </div>
            <div className="space-y-3.5">
              <a 
                href="#reclaim"
                className="inline-flex items-center gap-2 text-xs 2xl:text-sm font-bold text-white group-hover:text-[#0066FF] transition-colors"
              >
                <span>View Recovery Process</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="h-1 w-12 bg-[#0066FF] rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};


