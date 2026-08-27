import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

interface SurplusEstimatorProps {
  onOpenConsult: (path: 'reclaim') => void;
}

export const SurplusEstimator: React.FC<SurplusEstimatorProps> = ({ onOpenConsult }) => {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [auctionValue, setAuctionValue] = useState<number>(145000);
  const [taxDebt, setTaxDebt] = useState<number>(12000);

  const estimatedRefund = Math.max(0, auctionValue - taxDebt);

  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-[#FBFBFD] border-b border-[#F0F0F2] scroll-mt-16" id="calculator">
      <div className="site-container">
        <div className="bg-white rounded-3xl 2xl:rounded-4xl border border-[#E5E5E7] p-6 sm:p-8 2xl:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 2xl:gap-10">
            <div className="flex items-start gap-4 2xl:gap-6">
              <div className="w-12 h-12 2xl:w-16 2xl:h-16 rounded-2xl bg-[#F5F5F7] border border-[#E5E5E7] flex items-center justify-center text-black shrink-0">
                <Sliders className="w-5 h-5 2xl:w-7 2xl:h-7 text-[#0066FF]" />
              </div>
              <div>
                <div className="inline-block px-3 py-1 2xl:px-4 2xl:py-1.5 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[10px] 2xl:text-xs font-bold tracking-widest uppercase text-[#86868B] mb-1.5">
                  County Tax Sale Tool
                </div>
                <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-bold tracking-tight text-[#1A1A1A]">
                  Estimate Your Reclaimable Excess Proceeds
                </h3>
                <p className="text-sm 2xl:text-base text-[#666666] mt-1 max-w-xl 2xl:max-w-2xl">
                  When counties auction properties above delinquent taxes, the surplus balance legally belongs to the former owner.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setCalculatorOpen(!calculatorOpen)}
                className="w-full sm:w-auto px-6 2xl:px-8 py-3 2xl:py-4 bg-black text-white text-xs sm:text-sm 2xl:text-base font-bold rounded-xl 2xl:rounded-2xl hover:bg-[#333333] transition-colors cursor-pointer shrink-0"
              >
                {calculatorOpen ? 'Close Estimator' : 'Open Surplus Calculator'}
              </button>
            </div>
          </div>

          {/* Calculator Panel */}
          {calculatorOpen && (
            <div className="mt-8 2xl:mt-10 pt-8 2xl:pt-10 border-t border-[#F0F0F2] animate-in fade-in duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8 mb-6 2xl:mb-8">
                <div className="p-5 2xl:p-7 bg-[#FBFBFD] rounded-2xl 2xl:rounded-3xl border border-[#F0F0F2]">
                  <label className="block text-xs 2xl:text-sm font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-2">
                    Winning Auction / Tax Sale Bid ($)
                  </label>
                  <input 
                    type="number" 
                    value={auctionValue} 
                    onChange={(e) => setAuctionValue(Number(e.target.value))}
                    className="w-full px-4 py-3 2xl:py-4 bg-white rounded-xl border border-[#DEDEDE] text-base 2xl:text-lg font-bold text-[#1A1A1A] focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                    step="1000"
                  />
                  <span className="text-[11px] 2xl:text-xs text-[#86868B] mt-2 block">The final price the county sold the deed or property for</span>
                </div>

                <div className="p-5 2xl:p-7 bg-[#FBFBFD] rounded-2xl 2xl:rounded-3xl border border-[#F0F0F2]">
                  <label className="block text-xs 2xl:text-sm font-mono-code font-bold text-[#86868B] uppercase tracking-wider mb-2">
                    Delinquent Taxes & County Fees ($)
                  </label>
                  <input 
                    type="number" 
                    value={taxDebt} 
                    onChange={(e) => setTaxDebt(Number(e.target.value))}
                    className="w-full px-4 py-3 2xl:py-4 bg-white rounded-xl border border-[#DEDEDE] text-base 2xl:text-lg font-bold text-[#1A1A1A] focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                    step="500"
                  />
                  <span className="text-[11px] 2xl:text-xs text-[#86868B] mt-2 block">Back taxes, penalties, legal interest, and admin costs</span>
                </div>
              </div>

              <div className="p-6 2xl:p-8 bg-black text-white rounded-2xl 2xl:rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs 2xl:text-sm font-mono-code uppercase tracking-wider text-[#86868B] block mb-1">
                    Estimated Reclaimable Balance
                  </span>
                  <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">
                    ${estimatedRefund.toLocaleString()}
                  </span>
                  <span className="text-xs 2xl:text-sm text-[#A1A1A6] block mt-1">100% contingency basis · No recovery = $0 fee</span>
                </div>
                <button 
                  onClick={() => onOpenConsult('reclaim')}
                  className="w-full sm:w-auto px-8 2xl:px-10 py-3.5 2xl:py-4.5 bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm 2xl:text-base rounded-xl 2xl:rounded-2xl transition-all shadow-lg shadow-[#0066FF]/20 cursor-pointer"
                >
                  File My Surplus Claim
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

