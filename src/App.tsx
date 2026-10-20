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
    <div className="relative min-h-screen bg-[#04120c] bg-islamic-pattern text-[#ede5d0] selection:bg-[#d4af37] selection:text-black">
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
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#04120c]/85 backdrop-blur-md border-b border-[#d4af37]/25 px-4 py-3 flex items-center justify-between transition-all duration-500">
        <div className="flex items-center gap-2.5">
          {/* Crescent & Star Monogram for Fouzan & Zehra */}
          <div className="w-8 h-8 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-[#072016] shadow-sm">
            <span className="font-serif-elegant font-bold text-xs text-[#ffd700]">F&amp;Z</span>
          </div>
          <span className="font-serif-elegant tracking-widest text-xs md:text-sm text-[#fceba2] font-semibold uppercase">
            WEDDING INVITATION
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {/* View Envelope Seal Button */}
          <button
            onClick={() => setIsEnvelopeOpen(false)}
            className="text-xs px-3.5 py-1.5 rounded-full bg-[#0d3525] border border-[#d4af37]/40 text-[#fceba2] hover:bg-[#144e37] hover:border-[#ffd700] transition-all flex items-center gap-1.5 shadow-sm hover:scale-105"
          >
            <MailOpen className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Envelope</span>
          </button>

          {/* Quick Events Scroll */}
          <a
            href="#events"
            className="text-xs px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ffd700] via-[#d4af37] to-[#b8860b] text-black font-serif-elegant font-bold hover:opacity-95 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105"
          >
            <Calendar className="w-3.5 h-3.5" />
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
