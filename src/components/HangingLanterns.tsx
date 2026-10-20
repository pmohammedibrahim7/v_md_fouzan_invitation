import React from 'react';

export const HangingLanterns: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 pointer-events-none z-20 flex justify-between px-3 md:px-12 overflow-hidden h-64 md:h-80">
      {/* Left Hanging Lantern */}
      <div className="animate-lantern-left flex flex-col items-center">
        {/* Chain */}
        <div className="w-[1.5px] h-20 md:h-28 bg-gradient-to-b from-[#ffd700] via-[#c99e46] to-[#805e19] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
        
        {/* Lantern Cap */}
        <div className="relative -mt-1">
          <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="md:w-16 md:h-8">
            <path d="M24 0L38 18H10L24 0Z" fill="url(#lanternGold)" />
            <rect x="6" y="18" width="36" height="4" rx="2" fill="url(#lanternGold)" />
            <circle cx="24" cy="2" r="2.5" fill="#ffd700" />
            <defs>
              <linearGradient id="lanternGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff099" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#7a5509" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Lantern Body */}
        <div className="relative w-11 h-18 md:w-14 md:h-24 islamic-lantern-glass border border-[#d4af37]/70 rounded-b-xl overflow-hidden bg-gradient-to-b from-[#241a05]/90 via-[#0d2a1c]/90 to-[#04120c]/90 shadow-[0_10px_25px_rgba(212,175,55,0.3)]">
          {/* Ornate Islamic Star Lattice Lines */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 50 80" fill="none" stroke="#d4af37" strokeWidth="0.8">
              <path d="M25 5 L45 25 L45 55 L25 75 L5 55 L5 25 Z" />
              <path d="M25 15 L38 30 L38 50 L25 65 L12 50 L12 30 Z" />
              <circle cx="25" cy="40" r="8" />
              <line x1="25" y1="0" x2="25" y2="80" />
            </svg>
          </div>

          {/* Candle Flame Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-flame w-4 h-6 md:w-5 md:h-8 rounded-full bg-gradient-to-t from-[#ff8c00] via-[#ffd700] to-[#ffffff] blur-[1px] shadow-[0_0_15px_#ffae19]" />
          </div>

          {/* Soft ambient halo radiating outward */}
          <div className="absolute inset-0 bg-radial from-amber-400/25 to-transparent pointer-events-none" />
        </div>

        {/* Lantern Bottom Finial & Tassel */}
        <div className="flex flex-col items-center -mt-1">
          <div className="w-2 h-3 bg-gradient-to-b from-[#d4af37] to-[#7a5509] rounded-b" />
          <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-[#ffd700] via-[#b8860b] to-transparent" />
        </div>
      </div>

      {/* Center Subtle Crescent & Stars (Only visible on wide screens) */}
      <div className="hidden lg:flex flex-col items-center pt-2 opacity-65">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent" />
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
          <path d="M52 10C27.147 10 7 30.147 7 55s20.147 45 45 45c16.29 0 30.584-8.666 38.455-21.614-2.825.867-5.834 1.341-8.955 1.341-17.673 0-32-14.327-32-32 0-11.45 6.012-21.498 15.06-27.086C61.42 10.237 56.818 10 52 10z" fill="#d4af37" />
          <polygon points="76,20 78.5,27.5 86,27.5 80,32 82.5,39.5 76,35 69.5,39.5 72,32 66,27.5 73.5,27.5" fill="#ffd700" />
        </svg>
      </div>

      {/* Right Hanging Lantern */}
      <div className="animate-lantern-right flex flex-col items-center">
        {/* Chain (slightly different length for natural organic feel) */}
        <div className="w-[1.5px] h-16 md:h-22 bg-gradient-to-b from-[#ffd700] via-[#c99e46] to-[#805e19] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />

        {/* Lantern Cap */}
        <div className="relative -mt-1">
          <svg width="44" height="22" viewBox="0 0 48 24" fill="none" className="md:w-15 md:h-7">
            <path d="M24 0L38 18H10L24 0Z" fill="url(#lanternGold2)" />
            <rect x="6" y="18" width="36" height="4" rx="2" fill="url(#lanternGold2)" />
            <circle cx="24" cy="2" r="2.5" fill="#ffd700" />
            <defs>
              <linearGradient id="lanternGold2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff099" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#7a5509" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Lantern Body */}
        <div className="relative w-10 h-16 md:w-13 md:h-22 islamic-lantern-glass border border-[#d4af37]/70 rounded-b-xl overflow-hidden bg-gradient-to-b from-[#241a05]/90 via-[#0d2a1c]/90 to-[#04120c]/90 shadow-[0_10px_25px_rgba(212,175,55,0.3)]">
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
            <svg width="100%" height="100%" viewBox="0 0 50 80" fill="none" stroke="#d4af37" strokeWidth="0.8">
              <path d="M25 5 L45 25 L45 55 L25 75 L5 55 L5 25 Z" />
              <path d="M25 15 L38 30 L38 50 L25 65 L12 50 L12 30 Z" />
              <circle cx="25" cy="40" r="8" />
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-flame w-3.5 h-5 md:w-4.5 md:h-7 rounded-full bg-gradient-to-t from-[#ff8c00] via-[#ffd700] to-[#ffffff] blur-[1px] shadow-[0_0_15px_#ffae19]" />
          </div>

          <div className="absolute inset-0 bg-radial from-amber-400/25 to-transparent pointer-events-none" />
        </div>

        {/* Finial */}
        <div className="flex flex-col items-center -mt-1">
          <div className="w-2 h-3 bg-gradient-to-b from-[#d4af37] to-[#7a5509] rounded-b" />
          <div className="w-1 h-5 md:h-7 bg-gradient-to-b from-[#ffd700] via-[#b8860b] to-transparent" />
        </div>
      </div>
    </div>
  );
};
