import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Heart, Sparkles, Share2 } from 'lucide-react';

interface HeroSectionProps {
  onReopenEnvelope: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReopenEnvelope }) => {
  // Wedding Date: January 30, 2027 11:30:00 (Nikah Ceremony)
  const targetDate = new Date('2027-01-30T11:30:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'The Wedding of V. Mohammed Fouzan & V. Zehra Mehar',
        text: 'In the Name of Allah, you are cordially invited to celebrate the Nikah and Valima of V. Mohammed Fouzan & V. Zehra Mehar on 30.01.2027 at Pernambut.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Invitation link copied to clipboard!');
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 px-4 max-w-5xl mx-auto text-center z-10 transition-all duration-700 ease-out">
      {/* Re-open envelope mini link */}
      <div className="flex justify-center mb-6">
        <button
          onClick={onReopenEnvelope}
          className="text-xs px-4 py-1.5 rounded-full bg-[#072016]/80 border border-[#d4af37]/40 text-[#fceba2]/90 hover:text-white hover:border-[#ffd700] transition-all flex items-center gap-1.5 backdrop-blur-sm shadow-md hover:scale-105"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          View Envelope &amp; Seal
        </button>
      </div>

      {/* Sacred Basmala */}
      <div className="relative inline-block mb-4">
        <p className="font-arabic text-3xl md:text-5xl lg:text-6xl gold-text-shimmer leading-relaxed tracking-wide select-none drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <div className="flex items-center justify-center gap-3 mt-2">
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <span className="text-[10px] md:text-xs font-serif-elegant uppercase tracking-[0.3em] text-[#d4af37]">
            In the Name of Allah, the Most Merciful, the Most Compassionate
          </span>
          <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
        </div>
      </div>

      {/* Quranic Verse Callout */}
      <div className="max-w-2xl mx-auto my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#0a271c]/70 via-[#072016]/80 to-[#04120c]/90 border border-[#d4af37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-sm">
        <div className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none flex items-center">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="#d4af37">
            <path d="M50 0 C77.6 0 100 22.4 100 50 L100 100 L0 100 L0 50 C0 22.4 22.4 0 50 0 Z" />
          </svg>
        </div>

        <p className="font-arabic text-xl md:text-2xl text-[#fde082] leading-loose mb-3" dir="rtl">
          « وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً »
        </p>
        <p className="text-xs md:text-sm font-subserif italic text-[#e8dfc8]/90 max-w-xl mx-auto leading-relaxed">
          &ldquo;And among His Signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.&rdquo;
        </p>
        <span className="block mt-2 text-[10px] uppercase font-mono tracking-widest text-[#d4af37]/80">
          — Surah Ar-Rum [30:21]
        </span>
      </div>

      {/* Cordial Invitation Intro */}
      <div className="my-6 space-y-2">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#d4af37] font-serif-elegant">
          Under the divine grace of Allah SWT
        </p>
        <p className="text-xs md:text-sm text-[#e8dfc8]/85 font-subserif max-w-lg mx-auto">
          We cordially invite you and your family to grace the auspicious occasion of the Nikah and Valima of
        </p>
      </div>

      {/* Names of Groom & Bride */}
      <div className="py-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 my-2">
          {/* Groom */}
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-elegant font-bold tracking-wider gold-text-shimmer">
              V. MOHAMMED FOUZAN
            </h1>
            <span className="text-xs tracking-[0.2em] uppercase text-[#d4af37] font-subserif mt-1">
              Groom
            </span>
          </div>

          {/* Heart Connector */}
          <div className="flex items-center gap-3 text-[#d4af37] my-2 md:my-0">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="relative p-2 rounded-full border border-[#d4af37]/40 bg-[#072016]/80 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
              <Heart className="w-5 h-5 text-[#ffd700] fill-[#ffd700] animate-pulse" />
            </div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-elegant font-bold tracking-wider gold-text-shimmer">
              V. ZEHRA MEHAR
            </h1>
            <span className="text-xs tracking-[0.2em] uppercase text-[#d4af37] font-subserif mt-1">
              Bride
            </span>
          </div>
        </div>

        {/* Date and City Highlight */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-subserif text-[#fceba2]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#d4af37]" />
            <span>Saturday, 30.01.2027</span>
          </div>
          <span className="text-[#d4af37]">•</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#d4af37]" />
            <span>Nikah at 11:30 AM &bull; Valima on Same Day</span>
          </div>
          <span className="text-[#d4af37]">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Pernambut</span>
          </div>
        </div>
      </div>

      {/* Live Countdown Timer */}
      <div className="my-10 max-w-2xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-serif-elegant mb-4">
          Countdown to the Auspicious Union
        </p>
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {[
            { label: 'DAYS', val: timeLeft.days },
            { label: 'HOURS', val: timeLeft.hours },
            { label: 'MINUTES', val: timeLeft.minutes },
            { label: 'SECONDS', val: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 md:p-5 rounded-2xl bg-gradient-to-b from-[#0d3525]/90 to-[#04120c]/90 border border-[#d4af37]/40 shadow-[0_5px_20px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center transform hover:scale-105 transition-transform"
            >
              <span className="text-2xl md:text-4xl font-serif-elegant font-bold gold-text-shimmer">
                {String(item.val).padStart(2, '0')}
              </span>
              <span className="text-[9px] md:text-[11px] font-mono tracking-widest text-[#e8dfc8]/70 mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#events"
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#b8860b] via-[#ffd700] to-[#b8860b] text-[#04120c] font-serif-elegant font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4 text-black" />
          View Wedding Details
        </a>

        <button
          onClick={handleShare}
          className="px-6 py-3.5 rounded-full bg-[#072016]/80 border border-[#d4af37]/60 text-[#fceba2] font-serif-elegant text-sm tracking-wider hover:bg-[#0d3525] hover:border-[#d4af37] transition-all flex items-center gap-2"
        >
          <Share2 className="w-4 h-4 text-[#d4af37]" />
          Share Invitation
        </button>
      </div>
    </section>
  );
};
