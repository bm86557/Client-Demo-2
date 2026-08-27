import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SurplusEstimator } from './components/SurplusEstimator';
import { StaySection } from './components/StaySection';
import { SellSection } from './components/SellSection';
import { ReclaimSection } from './components/ReclaimSection';
import { Methodology } from './components/Methodology';
import { FaqSection } from './components/FaqSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<'stay' | 'sell' | 'reclaim' | 'general'>('general');

  const openConsultModal = (path: 'stay' | 'sell' | 'reclaim' | 'general' = 'general') => {
    setSelectedPath(path);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#1A1A1A] font-sans antialiased selection:bg-[#0066FF]/15 selection:text-[#0066FF]">
      {/* Sleek Top Navigation */}
      <Navbar onOpenConsult={openConsultModal} />

      <main className="flex-grow flex flex-col">
        {/* Sleek Hero with 3 Signature Paths */}
        <Hero onOpenConsult={openConsultModal} />

        {/* Interactive Surplus Proceeds Estimator */}
        {/* <SurplusEstimator onOpenConsult={openConsultModal} /> */}

        {/* Path 1: Stay in your home */}
        <StaySection onOpenConsult={openConsultModal} />

        {/* Path 2: Sell with dignity */}
        <SellSection onOpenConsult={openConsultModal} />

        {/* Path 3: Reclaim your funds */}
        <ReclaimSection onOpenConsult={openConsultModal} />

        {/* Precision Methodology / Process */}
        {/* <Methodology /> */}

        {/* FAQ Accordion */}
        {/* <FaqSection /> */}

        {/* High-Contrast Closing Hero CTA */}
        <ClosingCta onOpenConsult={openConsultModal} />
      </main>

      {/* Expanded Sleek Footer */}
      <Footer onOpenConsult={openConsultModal} />

      {/* Interactive Consultation Modal */}
      <ConsultModal 
        isOpen={isModalOpen}
        initialPath={selectedPath}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
