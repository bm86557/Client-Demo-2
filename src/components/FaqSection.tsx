import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How can this really be $0 out of pocket for me?",
      a: "Our team covers all upfront costs — including document retrieval, administrative fees, filings, and legal counsel fees. For surplus fund recovery (Path 3), we work on a pure contingency basis: you only pay if funds are successfully recovered. If we don't recover money for you, you owe nothing."
    },
    {
      q: "What is the redemption period for tax deed properties?",
      a: "In many states and counties, homeowners have a legally mandated redemption period (ranging from 6 months to 2+ years) to pay off back taxes, penalties, and reclaim full clear title to their house. We specialize in analyzing your exact county deadlines to protect your equity."
    },
    {
      q: "What are 'Excess Proceeds' or surplus funds?",
      a: "When a county auctions a tax-delinquent property, the final bidding price often exceeds the delinquent taxes and fees owed. By law, that leftover balance belongs to the former owner or heirs. However, counties rarely make it easy to claim and set strict expiration windows. We locate and recover these funds for you."
    },
    {
      q: "How fast can we begin working on my situation?",
      a: "Immediately. Once you contact us for your free initial consultation, our property research team pulls your county records within 24–48 hours to present your specific legal and financial choices."
    }
  ];

  return (
    <section className="py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 2xl:py-24 3xl:py-28 border-b border-[#F0F0F2] scroll-mt-16" id="faq">
      <div className="site-container max-w-[800px] 2xl:max-w-[960px] 3xl:max-w-[1100px]">
        <div className="text-center mb-8 xs:mb-10 sm:mb-14 px-2 xs:px-0">
          <div className="inline-block px-2.5 xs:px-3 sm:px-3.5 2xl:px-4 py-0.5 xs:py-1 2xl:py-1.5 mb-3 xs:mb-4 bg-[#F5F5F7] border border-[#E5E5E7] rounded-full text-[9px] xs:text-[10px] 2xl:text-xs 3xl:text-sm font-bold tracking-widest uppercase text-[#86868B]">
            Clarity & Transparency
          </div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-[2.75rem] 3xl:text-5xl font-extrabold tracking-tight text-[#1A1A1A]">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-2.5 xs:space-y-3 sm:space-y-3.5">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-[#FBFBFD] border border-[#F0F0F2] rounded-xl xs:rounded-2xl overflow-hidden hover:border-[#E5E5E7] transition-colors"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 xs:p-5 sm:p-6 2xl:p-7 text-left flex items-center justify-between gap-3 xs:gap-4 font-bold text-sm xs:text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#1A1A1A] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-3.5 h-3.5 xs:w-4 xs:h-4 2xl:w-5 2xl:h-5 text-[#86868B] shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-black' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-4 xs:px-5 sm:px-6 2xl:px-7 pb-4 xs:pb-5 sm:pb-6 2xl:pb-7 text-xs xs:text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#666666] leading-relaxed border-t border-[#F0F0F2] pt-3 xs:pt-3 sm:pt-4 2xl:pt-5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

