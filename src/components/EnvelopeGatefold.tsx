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
        particleCount: 80,
        spread: 90,
        origin: { y: 0.62 },
        colors: ['#ffd700', '#d4af37', '#ffebec', '#fde082', '#b8860b'],
        disableForReducedMotion: true,
      });
    } catch {
      // ignore
    }

    // Step 2: Open top triangular flap (after 280ms)
    setTimeout(() => {
      setOpeningState('flap-open');
    }, 280);

    // Step 3: Slide the card up from within envelope in 3D (after 850ms)
    setTimeout(() => {
      setOpeningState('card-sliding');
      try {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0.2, y: 0.65 },
          colors: ['#ffd700', '#d4af37', '#ffebec'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 0.8, y: 0.65 },
          colors: ['#ffd700', '#d4af37', '#ffebec'],
        });
      } catch {
        // ignore
      }
    }, 850);

    // Step 4: Fade out the entire envelope modal smoothly (after 2100ms)
    setTimeout(() => {
      setOpeningState('faded-out');
      setTimeout(() => {
        onOpen();
        setOpeningState('closed');
      }, 700);
    }, 2100);
  };

  if (isOpen) {
    return null;
  }

  const isFlapOpen = openingState === 'flap-open' || openingState === 'card-sliding' || openingState === 'faded-out';
  const isCardSliding = openingState === 'card-sliding' || openingState === 'faded-out';
  const isFading = openingState === 'faded-out';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#230f16]/75 backdrop-blur-xl transition-all duration-700 ease-out overflow-hidden ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Arabesque Radial Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
        <svg className="w-[720px] h-[720px] animate-spin-slow text-[#d4af37]" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 L108 80 L188 88 L116 116 L124 196 L96 124 L16 116 L84 88 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Realistic 3D Envelope Container with 3D Perspective Tilt */}
      <div
        className="relative w-full max-w-lg md:max-w-xl perspective-1000 select-none transition-transform duration-700 ease-out"
        style={{
          transform: isCardSliding ? 'rotateX(3deg) scale(1.02)' : 'rotateX(0deg) scale(1)',
        }}
      >
        
        {/* Multi-Layered 3D Cast Shadow & Metallic Gold Rim */}
        <div className="relative mx-auto rounded-3xl p-[2.5px] bg-gradient-to-b from-[#ffd700] via-[#c4921b] to-[#8c5808] shadow-[0_35px_80px_rgba(50,15,25,0.6),0_15px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,215,0,0.3)]">
          
          {/* Main Envelope Body */}
          <div className="relative h-[380px] sm:h-[420px] rounded-[22px] bg-gradient-to-b from-[#fff6f7] via-[#fae3e6] to-[#f4d1d6] overflow-hidden border border-[#d4af37]/60 shadow-inner">
            
            {/* Interior Satin Gold Lining */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f7e2a9] via-[#ecd18a] to-[#d4af37] opacity-95 flex items-center justify-center">
              <div className="opacity-20">
                <svg width="220" height="220" viewBox="0 0 100 100" fill="#8c5808">
                  <polygon points="50,5 61,35 95,35 68,55 79,88 50,68 21,88 32,55 5,35 39,35" />
                </svg>
              </div>
            </div>

            {/* Inner Invitation Letter Card (Slides Up out of Envelope in 3D) */}
            <div
              className={`envelope-card absolute inset-x-5 top-7 bottom-5 rounded-2xl bg-gradient-to-b from-[#ffffff] via-[#fffdfb] to-[#fff3f5] p-6 text-center border-2 border-[#d4af37] shadow-[0_15px_35px_rgba(100,30,50,0.25)] flex flex-col justify-between z-10 ${
                isCardSliding ? 'slide-out' : ''
              }`}
            >
              {/* Card Corner Filigrees */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#d4af37]" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#d4af37]" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#d4af37]" />

              {/* Bismillah */}
              <div>
                <span className="font-arabic text-xl md:text-2xl gold-text-shimmer block">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#8c5808] font-serif-elegant font-bold mt-1">
                  Wedding Invitation
                </p>
              </div>

              {/* Couple Names on Card */}
              <div className="my-1">
                <h2 className="text-base sm:text-lg md:text-xl font-serif-elegant gold-text-shimmer font-bold tracking-wider">
                  V MOHAMMED FOUZAN
                </h2>
                <span className="text-xs text-[#8c5808] font-serif-elegant font-bold my-0.5 block">&amp;</span>
                <h2 className="text-base sm:text-lg md:text-xl font-serif-elegant gold-text-shimmer font-bold tracking-wider">
                  V ZEHRA MEHAR
                </h2>
                <p className="text-xs font-subserif italic text-[#4a2e37] mt-1 font-medium">
                  Request the honour of your presence at the Nikah &amp; Valima
                </p>
                <div className="mt-2 py-1 px-3 rounded-lg bg-[#fff0f2] border border-[#d4af37]/40 flex flex-col items-center justify-center gap-0.5 text-[11px] font-serif-elegant text-[#8c5808] font-bold">
                  <span className="tracking-wider">SATURDAY, JANUARY 30, 2027</span>
                  <span className="text-[10px] text-[#2d1720] font-medium">Nikah 11:30 AM &bull; Valima Same Day &bull; Pernambut</span>
                </div>
              </div>

              <p className="text-[10px] font-subserif text-[#683f4b] italic font-medium">
                Barakallahu lakuma wa baraka alaikuma
              </p>
            </div>

            {/* 3D Envelope Pocket Front with Realistic Cast Paper Shadows */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {/* Left Triangular Fold with 3D drop shadow */}
              <div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#fae2e5] to-[#f2cfd4] border-r border-[#d4af37]/50"
                style={{
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                  filter: 'drop-shadow(6px 4px 10px rgba(80, 25, 40, 0.35))',
                }}
              />

              {/* Right Triangular Fold with 3D drop shadow */}
              <div
                className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#fae2e5] to-[#f2cfd4] border-l border-[#d4af37]/50"
                style={{
                  clipPath: 'polygon(100% 0, 0 50%, 100% 100%)',
                  filter: 'drop-shadow(-6px 4px 10px rgba(80, 25, 40, 0.35))',
                }}
              />

              {/* Bottom Triangular Pocket Fold with Realistic 3D Elevation */}
              <div
                className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-[#f1ccd2] via-[#f7d9dd] to-[#fdeef0] border-t-2 border-[#d4af37]/70"
                style={{
                  clipPath: 'polygon(0 100%, 50% 15%, 100% 100%)',
                  filter: 'drop-shadow(0 -10px 18px rgba(70, 20, 35, 0.4))',
                }}
              />

              {/* Center Seal Plaque */}
              <div className="absolute bottom-10 inset-x-0 flex flex-col items-center justify-center text-center opacity-90">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8c5808] font-serif-elegant font-bold">
                  V Mohammed Fouzan &amp; V Zehra Mehar
                </span>
                <span className="text-[9px] font-mono text-[#683f4b] font-semibold mt-0.5">
                  Pernambut • 30.01.2027
                </span>
              </div>
            </div>

            {/* 3D Triangular Top Flap with Double-Sided 3D Faces */}
            <div
              className={`envelope-flap absolute top-0 inset-x-0 h-1/2 preserve-3d ${
                isFlapOpen ? 'open z-10' : 'z-30'
              }`}
              style={{
                transformOrigin: 'top center',
              }}
            >
              {/* FRONT FACE of Flap (Visible when closed) */}
              <div
                className="absolute inset-0 preserve-3d"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  filter: isFlapOpen ? 'none' : 'drop-shadow(0 14px 20px rgba(60, 18, 30, 0.45))',
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#ffffff] via-[#fae3e6] to-[#f0cbd1] border-b-2 border-[#ffd700] relative flex flex-col items-center pt-5">
                  <span className="font-arabic text-xl text-[#8c5808] font-bold opacity-90">
                    بِسْمِ اللَّهِ
                  </span>
                  <div className="w-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-1" />
                </div>
              </div>

              {/* BACK FACE of Flap (Satin Gold Inner Lining, Visible when Open) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateX(180deg)',
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-[#fcedb6] via-[#dfb655] to-[#b8860b] border-t-2 border-[#ffd700] shadow-inner relative flex flex-col items-center justify-center">
                  <div className="opacity-30">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="#683f05">
                      <polygon points="50,5 61,35 95,35 68,55 79,88 50,68 21,88 32,55 5,35 39,35" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Realistic 3D Golden Wax Seal (Attached at triangle apex, with NO Arabic calligraphy) */}
            <div
              className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-all duration-500 cursor-pointer ${
                openingState !== 'closed'
                  ? 'seal-pop pointer-events-none'
                  : 'hover:scale-110 active:scale-95'
              }`}
              onClick={handleOpenEnvelope}
              title="Click Wax Seal to Open Envelope"
            >
              {/* Outer Pulsing Golden Aura */}
              <div className="absolute -inset-2.5 rounded-full border-2 border-[#ffd700] animate-ping opacity-40 pointer-events-none" />

              {/* 3D Wax Seal Outer Shell: Multi-layered Beveled Dome */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#ffe58f] via-[#d4af37] to-[#8c580b] p-1 shadow-3d-seal">
                
                {/* Organic Scalloped Wax Rim */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-[#a67414] via-[#7a4e05] to-[#4a2e01] border-2 border-dashed border-[#ffe88a]/80 flex flex-col items-center justify-center text-center p-2 shadow-[inset_0_4px_8px_rgba(0,0,0,0.6),inset_0_-3px_5px_rgba(255,255,255,0.4)]">
                  
                  {/* Embossed 3D Monogram "F & Z" - NO ARABIC CALLIGRAPHY */}
                  <div className="flex items-center justify-center gap-1">
                    <span
                      className="font-serif-elegant font-bold text-xl sm:text-2xl text-[#fff7c2] leading-none select-none tracking-widest"
                      style={{
                        textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 -1px 2px rgba(255,255,255,0.7)',
                      }}
                    >
                      F&amp;Z
                    </span>
                  </div>

                  <span className="text-[7.5px] uppercase tracking-widest text-[#ffd700] font-serif-elegant font-bold mt-1.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
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
            className="group text-xs uppercase tracking-[0.2em] font-serif-elegant font-bold text-[#ffd700] hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto drop-shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
            <span>Tap the Wax Seal to Open</span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700] animate-pulse" />
          </button>
          <p className="text-[10px] text-[#ffebec]/80 mt-1 font-subserif italic">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>

      </div>
    </div>
  );
};
