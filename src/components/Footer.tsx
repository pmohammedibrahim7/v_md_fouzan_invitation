import React from 'react';
import { ArrowUp, Sparkles, MapPin } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const compliments = [
    'A FUZAIL RABBANI',
    'V MOHAMMED ZAID',
    'V MOHAMMED WIDAD',
    'V MOHAMMED ZUHAD',
  ];

  return (
    <footer className="relative pt-16 pb-16 px-4 bg-gradient-to-t from-[#ffd9dc]/60 via-[#ffebec]/90 to-transparent border-t border-[#d4af37]/35 text-center text-xs text-[#5c3a44] z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Sacred Hadith / Prophetic Blessing */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-white/95 via-[#fff7f8]/95 to-[#ffebec]/90 border border-[#d4af37]/45 shadow-[0_15px_35px_rgba(180,90,110,0.12)] relative overflow-hidden backdrop-blur-sm">
          <span className="font-arabic text-2xl md:text-3xl gold-text-shimmer block mb-3 leading-relaxed" dir="rtl">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </span>
          <p className="text-xs md:text-sm font-subserif italic text-[#3c222a] max-w-xl mx-auto leading-relaxed">
            &ldquo;May Allah bless you both, shower His blessings upon you, and unite you both in goodness and everlasting harmony.&rdquo;
          </p>
          <span className="block mt-2 text-[10px] uppercase font-mono tracking-widest text-[#9a6a15] font-semibold">
            — Sunan Abi Dawud [2130]
          </span>
        </div>

        {/* With Best Compliments Box */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-b from-white/95 via-[#fff5f6]/95 to-[#ffebec]/95 border-2 border-[#d4af37]/60 shadow-[0_15px_35px_rgba(180,90,110,0.15)] relative">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#b8860b]" />
            <h4 className="text-xs md:text-sm uppercase font-serif-elegant tracking-[0.25em] text-[#9a6a15] font-bold">
              With Best Compliments
            </h4>
            <Sparkles className="w-4 h-4 text-[#b8860b]" />
          </div>

          <div className="space-y-2 pt-2">
            {compliments.map((name, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base font-serif-elegant font-bold text-[#2d1720] tracking-wider py-0.5 border-b border-[#d4af37]/15 last:border-b-0"
              >
                {name}
              </p>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#d4af37]/25 flex items-center justify-center gap-1.5 text-[11px] text-[#7a4856] font-mono font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>Pernambut</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onBackToTop}
            className="p-3 rounded-full bg-white/90 border border-[#d4af37]/50 text-[#683e4a] hover:bg-[#fff0f2] hover:border-[#b8860b] hover:text-[#2d1720] transition-all shadow-md flex items-center gap-2 text-xs hover:scale-105 active:scale-95"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-[#9a6a15]" />
            <span className="font-serif-elegant font-semibold">Return to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
