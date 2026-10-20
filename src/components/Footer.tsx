import React from 'react';
import { ArrowUp, Sparkles, MapPin } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const compliments = [
    'V. Mohd. Zaid',
    'V. Mohd. Widad',
    'V. Mohd. Zuhad',
  ];

  return (
    <footer className="relative pt-16 pb-16 px-4 bg-gradient-to-t from-[#020b06] via-[#04140d] to-transparent border-t border-[#d4af37]/30 text-center text-xs text-[#e8dfc8]/70 z-10">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Sacred Hadith / Prophetic Blessing */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-[#072016]/80 to-[#030e09]/90 border border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
          <span className="font-arabic text-2xl md:text-3xl gold-text-shimmer block mb-3 leading-relaxed" dir="rtl">
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </span>
          <p className="text-xs md:text-sm font-subserif italic text-[#fceba2] max-w-xl mx-auto">
            &ldquo;May Allah bless you both, shower His blessings upon you, and unite you both in goodness and everlasting harmony.&rdquo;
          </p>
          <span className="block mt-2 text-[10px] uppercase font-mono tracking-widest text-[#d4af37]">
            — Sunan Abi Dawud [2130]
          </span>
        </div>

        {/* With Best Compliments Box (As in uploaded image) */}
        <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#0a271c]/80 to-[#030e09]/90 border border-[#d4af37]/50 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <h4 className="text-xs md:text-sm uppercase font-serif-elegant tracking-[0.25em] text-[#ffd700] font-bold">
              With Best Compliments
            </h4>
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
          </div>

          <div className="space-y-1.5 pt-1">
            {compliments.map((name, idx) => (
              <p
                key={idx}
                className="text-sm font-serif-elegant font-semibold text-white tracking-wider"
              >
                {name}
              </p>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#d4af37]/20 flex items-center justify-center gap-1.5 text-[11px] text-[#fceba2]/80 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Pernambut</span>
          </div>
        </div>

        {/* Back to Top */}
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onBackToTop}
            className="p-3 rounded-full bg-[#0d3525] border border-[#d4af37]/40 text-[#fceba2] hover:bg-[#144e37] hover:border-[#ffd700] transition-all shadow-md flex items-center gap-2 text-xs hover:scale-105"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Return to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
