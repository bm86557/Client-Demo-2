import React from 'react';
import { Phone, ChevronRight, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsult: (path?: 'general') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsult }) => {
  return (
    <footer className="bg-[#05070B] text-[#94A3B8] pt-8 sm:pt-10 2xl:pt-12 pb-8 2xl:pb-10">
      <div className="site-container">
        
        {/* Legal Fine Print & Bottom Bar */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs 2xl:text-sm text-[#64748B]">
            <div className="font-mono-code text-[11px] 2xl:text-xs uppercase tracking-wider">
              &copy; 2026 Stay Sell Claim. All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-[11px] 2xl:text-xs font-mono-code uppercase tracking-wider">
              <button 
                onClick={() => onOpenConsult('general')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-[#1E293B]">|</span>
              <a href="#top" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Top</span>
                <ArrowUp className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="max-w-4xl 2xl:max-w-5xl text-[11px] 2xl:text-xs leading-relaxed text-[#475569]">
            This page is for general information only and does not constitute legal or financial advice. Every property and county process is different — a free consultation will confirm what applies to your situation. No attorney-client relationship is formed until a separate written agreement is signed.
          </div>
        </div>

      </div>
    </footer>
  );
};

