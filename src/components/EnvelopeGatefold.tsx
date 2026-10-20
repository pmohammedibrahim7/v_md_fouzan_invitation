import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';

interface EnvelopeGatefoldProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeGatefold: React.FC<EnvelopeGatefoldProps> = ({ onOpen, isOpen }) => {
  const [openingState, setOpeningState] = useState<'closed' | 'unsealing' | 'flap-open' | 'card-sliding' | 'faded-out'>('closed');

  const handleOpenEnvelope = () => {
    if (openingState !== 'closed') return;

    // Step 1: Pop the seal
    setOpeningState('unsealing');

    // Confetti burst
    try {
      confetti({
        particleCount: 75,
        spread: 85,
        origin: { y: 0.62 },
        colors: ['#ffd700', '#d4af37', '#fde082', '#0d3525', '#fff5cc'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    // Step 2: Open top triangular flap (after 280ms)
    setTimeout(() => {
      setOpeningState('flap-open');
    }, 280);

    // Step 3: Slide the card up from within envelope (after 750ms)
    setTimeout(() => {
      setOpeningState('card-sliding');
      try {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0.2, y: 0.65 },
          colors: ['#ffd700', '#d4af37'],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 0.8, y: 0.65 },
          colors: ['#ffd700', '#d4af37'],
        });
      } catch {
        // ignore
      }
    }, 750);

    // Step 4: Fade out the entire envelope modal smoothly (after 1800ms)
    setTimeout(() => {
      setOpeningState('faded-out');
      setTimeout(() => {
        onOpen();
        setOpeningState('closed');
      }, 700);
    }, 1750);
  };

  if (isOpen) {
    return null;
  }

  const isFlapOpen = openingState === 'flap-open' || openingState === 'card-sliding' || openingState === 'faded-out';
  const isCardSliding = openingState === 'card-sliding' || openingState === 'faded-out';
  const isFading = openingState === 'faded-out';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030e09]/95 backdrop-blur-xl transition-all duration-700 ease-out overflow-hidden ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Arabesque Radial Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg className="w-[720px] h-[720px] animate-spin-slow text-[#d4af37]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 L108 80 L188 88 L116 116 L124 196 L96 124 L16 116 L84 88 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Realistic 3D Envelope Container */}
      <div className="relative w-full max-w-lg md:max-w-xl perspective-1000 select-none">
        
        {/* Outer Shadow & Glow */}
        <div className="relative mx-auto rounded-2xl p-[2px] bg-gradient-to-b from-[#ffd700] via-[#8c6708] to-[#ffd700] shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
          
          {/* Main Envelope Body */}
          <div className="relative h-[370px] sm:h-[410px] rounded-[15px] bg-gradient-to-b from-[#072418] via-[#04150e] to-[#020c08] overflow-hidden border border-[#d4af37]/40">
            
            {/* Interior Satin Lining */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#221804] via-[#092217] to-[#03110a] opacity-90 flex items-center justify-center">
              <div className="opacity-15">
                <svg width="180" height="180" viewBox="0 0 100 100" fill="#d4af37">
                  <polygon points="50,5 61,35 95,35 68,55 79,88 50,68 21,88 32,55 5,35 39,35" />
                </svg>
              </div>
            </div>

            {/* Inner Invitation Letter Card (Slides Up out of Envelope) */}
            <div
              className={`envelope-card absolute inset-x-6 top-8 bottom-6 rounded-xl bg-gradient-to-b from-[#0a291d] via-[#072016] to-[#03120c] p-6 text-center border border-[#ffd700]/70 shadow-2xl flex flex-col justify-between z-10 ${
                isCardSliding ? 'slide-out' : ''
              }`}
            >
              {/* Card Corner Filigrees */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#d4af37]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#d4af37]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#d4af37]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#d4af37]" />

              {/* Bismillah */}
              <div>
                <span className="font-arabic text-xl md:text-2xl gold-text-shimmer">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37] font-serif-elegant mt-1">
                  Wedding Invitation
                </p>
              </div>

              {/* Couple Names on Card */}
              <div className="my-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant gold-text-shimmer font-bold tracking-wider">
                  V. MOHAMMED FOUZAN
                </h2>
                <span className="text-xs text-[#ffd700] my-1 block">&amp;</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant gold-text-shimmer font-bold tracking-wider">
                  V. ZEHRA MEHAR
                </h2>
                <p className="text-xs font-subserif italic text-[#fceba2] mt-1.5">
                  Request the pleasure of your company on their Nikah &amp; Valima
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 text-[10px] font-mono text-[#d4af37]">
                  <span>SATURDAY, JANUARY 30, 2027 • PERNAMBUT</span>
                </div>
              </div>

              <p className="text-[10px] font-subserif text-[#e8dfc8]/60 italic">
                Barakallahu lakuma wa baraka alaikuma
              </p>
            </div>

            {/* Envelope Pocket Front (Triangular folds on left, right, and bottom) */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {/* Left Triangular Fold */}
              <div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#051c13] to-[#072418] border-r border-[#d4af37]/30 shadow-lg"
                style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
              />

              {/* Right Triangular Fold */}
              <div
                className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#051c13] to-[#072418] border-l border-[#d4af37]/30 shadow-lg"
                style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
              />

              {/* Bottom Triangular Pocket Fold */}
              <div
                className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-[#03140d] via-[#062015] to-[#082a1d] border-t border-[#d4af37]/50 shadow-[0_-8px_20px_rgba(0,0,0,0.6)]"
                style={{ clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)' }}
              />

              {/* Center Seal Plaque */}
              <div className="absolute bottom-11 inset-x-0 flex flex-col items-center justify-center text-center opacity-85">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#d4af37]/90 font-serif-elegant">
                  V. Mohammed Fouzan &amp; V. Zehra Mehar
                </span>
                <span className="text-[9px] font-mono text-[#fceba2]/70 mt-0.5">
                  Pernambut • 30.01.2027
                </span>
              </div>
            </div>

            {/* 3D Triangular Top Flap */}
            <div
              className={`envelope-flap absolute top-0 inset-x-0 h-1/2 z-30 preserve-3d ${
                isFlapOpen ? 'open' : ''
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            >
              {/* Flap Outer Surface */}
              <div className="w-full h-full bg-gradient-to-b from-[#0d3b28] via-[#09291c] to-[#051d13] border-b-2 border-[#ffd700] shadow-[0_12px_25px_rgba(0,0,0,0.8)] relative flex flex-col items-center pt-5">
                <span className="font-arabic text-xl text-[#fceba2] opacity-80">
                  بِسْمِ اللَّهِ
                </span>
                <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent mt-1" />
              </div>
            </div>

            {/* The Authentic Golden Wax Seal (Attached at triangle apex) */}
            <div
              className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 cursor-pointer ${
                openingState !== 'closed'
                  ? 'scale-125 opacity-0 -translate-y-8 pointer-events-none'
                  : 'hover:scale-110 active:scale-95'
              }`}
              onClick={handleOpenEnvelope}
              title="Click Wax Seal to Open Envelope"
            >
              {/* Outer Pulsing Golden Aura */}
              <div className="absolute -inset-2 rounded-full border-2 border-[#ffd700] animate-ping opacity-35 pointer-events-none" />

              {/* Wax Seal Outer Shell */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#ffd700] via-[#c2931b] to-[#6d4d05] p-1 shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:shadow-[0_0_50px_rgba(255,215,0,0.9)] transition-shadow">
                
                {/* Organic Wax Rim Ridges */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#8c6708] via-[#5c4104] to-[#362401] border-2 border-dashed border-[#ffe88a]/70 flex flex-col items-center justify-center text-center p-2">
                  
                  {/* Arabic Monogram "Nikah" */}
                  <span className="font-arabic text-2xl sm:text-3xl text-[#fff3a8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-none select-none">
                    نِكَاح
                  </span>
                  
                  <span className="text-[8px] uppercase tracking-widest text-[#ffdf85] font-serif-elegant font-bold mt-1">
                    UNSEAL
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Instruction Beneath Envelope */}
        <div className="mt-5 text-center">
          <button
            onClick={handleOpenEnvelope}
            className="group text-xs uppercase tracking-[0.2em] font-serif-elegant gold-text-gradient hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
            <span>Tap the Wax Seal to Open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
          </button>
          <p className="text-[10px] text-[#e8dfc8]/50 mt-1 font-subserif">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>

      </div>
    </div>
  );
};
