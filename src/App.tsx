import React, { useState } from 'react';
import { GoldParticleBackground } from './components/GoldParticleBackground';
import { HangingLanterns } from './components/HangingLanterns';
import { EnvelopeGatefold } from './components/EnvelopeGatefold';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { Footer } from './components/Footer';
import { Calendar, MailOpen } from 'lucide-react';

export const App: React.FC = () => {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FFEBEC] bg-islamic-pattern text-[#2d1720] selection:bg-[#d4af37] selection:text-black">
      {/* 60fps Gold Dust Particle System */}
      <GoldParticleBackground />

      {/* Swaying Moroccan Brass Lanterns */}
      <HangingLanterns />

      {/* Realistic 3D Envelope with Wax Seal Unsealing Experience */}
      <EnvelopeGatefold
        isOpen={isEnvelopeOpen}
        onOpen={() => setIsEnvelopeOpen(true)}
      />

      {/* Sticky Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#FFEBEC]/90 backdrop-blur-md border-b border-[#d4af37]/35 px-4 py-3 flex items-center justify-between transition-all duration-500 shadow-sm">
        <div className="flex items-center gap-2.5">
          {/* Crescent & Star Monogram for Fouzan & Zehra */}
          <div className="w-8 h-8 rounded-full border border-[#b8860b]/60 flex items-center justify-center bg-white/95 shadow-sm">
            <span className="font-serif-elegant font-bold text-xs text-[#8c5808]">F&amp;Z</span>
          </div>
          <span className="font-serif-elegant tracking-widest text-xs md:text-sm text-[#663c48] font-bold uppercase">
            WEDDING INVITATION
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* View Envelope Seal Button */}
          <button
            onClick={() => setIsEnvelopeOpen(false)}
            className="text-xs px-3.5 py-1.5 rounded-full bg-white/95 border border-[#d4af37]/55 text-[#542d38] hover:bg-[#fff0f2] hover:border-[#b8860b] transition-all flex items-center gap-1.5 shadow-sm hover:scale-105"
          >
            <MailOpen className="w-3.5 h-3.5 text-[#b8860b]" />
            <span className="font-serif-elegant font-semibold">Envelope</span>
          </button>

          {/* Quick Events Scroll */}
          <a
            href="#events"
            className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e5be53] via-[#ffd700] to-[#c99718] text-[#2d1720] font-serif-elegant font-bold hover:opacity-95 transition-all flex items-center gap-1.5 shadow-[0_4px_15px_rgba(212,175,55,0.35)] hover:scale-105"
          >
            <Calendar className="w-3.5 h-3.5 text-[#2d1720]" />
            Events
          </a>
        </div>
      </nav>

      {/* Main Invitation Scroll with Smooth Entrance Fade */}
      <main className="relative z-10 animate-fade-in transition-opacity duration-1000">
        <HeroSection
          onReopenEnvelope={() => setIsEnvelopeOpen(false)}
        />

        <TimelineSection />

        <Footer
          onBackToTop={scrollToTop}
        />
      </main>
    </div>
  );
};

export default App;
