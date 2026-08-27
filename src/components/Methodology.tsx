import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 2xl:py-24 bg-[#FBFBFD] border-b border-[#F0F0F2] scroll-mt-16" id="methodology">
      <div className="site-container">
        <div className="text-center max-w-2xl 2xl:max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-3.5 2xl:px-4 py-1 2xl:py-1.5 mb-4 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#86868B]">
            Precision Methodology
          </div>
          <h3 className="text-2xl sm:text-4xl 2xl:text-[2.75rem] font-extrabold tracking-tight text-[#1A1A1A]">
            How We Advocate For You
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8">
          
          <div className="p-7 sm:p-8 2xl:p-9 bg-white rounded-3xl border border-[#F0F0F2] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E5E5E7] font-mono-code font-bold text-base 2xl:text-lg mb-6 text-black">
                01
              </div>
              <h4 className="text-xl 2xl:text-2xl font-bold tracking-tight mb-2.5 text-[#1A1A1A]">Free Record Analysis</h4>
              <p className="text-[#666666] leading-relaxed text-sm 2xl:text-[0.95rem]">
                We pull your county deed, tax balances, auction dates, and legal timelines to uncover all available relief options.
              </p>
            </div>
            <div className="h-1 w-12 bg-[#0066FF] rounded-full mt-6 sm:mt-8"></div>
          </div>

          <div className="p-7 sm:p-8 2xl:p-9 bg-white rounded-3xl border border-[#F0F0F2] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E5E5E7] font-mono-code font-bold text-base 2xl:text-lg mb-6 text-black">
                02
              </div>
              <h4 className="text-xl 2xl:text-2xl font-bold tracking-tight mb-2.5 text-[#1A1A1A]">Tailored Action Plan</h4>
              <p className="text-[#666666] leading-relaxed text-sm 2xl:text-[0.95rem]">
                Choose between fighting to stay, selling on your own terms, or filing legal claims for excess proceeds.
              </p>
            </div>
            <div className="h-1 w-12 bg-black/15 rounded-full mt-6 sm:mt-8"></div>
          </div>

          <div className="p-7 sm:p-8 2xl:p-9 bg-white rounded-3xl border border-[#F0F0F2] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-[#F5F5F7] rounded-2xl flex items-center justify-center border border-[#E5E5E7] font-mono-code font-bold text-base 2xl:text-lg mb-6 text-black">
                03
              </div>
              <h4 className="text-xl 2xl:text-2xl font-bold tracking-tight mb-2.5 text-[#1A1A1A]">Full Resolution at $0 Upfront</h4>
              <p className="text-[#666666] leading-relaxed text-sm 2xl:text-[0.95rem]">
                We handle every phone call, title search, attorney coordination, and court filing until the resolution is complete.
              </p>
            </div>
            <div className="h-1 w-12 bg-[#0066FF] rounded-full mt-6 sm:mt-8"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

