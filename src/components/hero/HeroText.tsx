import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../../content/site';

export default function HeroText() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-20">
      {/* Eyebrow Label: small uppercase, letter-spaced 0.12em, muted color */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 sm:mb-5"
      >
        <span className="text-[11px] sm:text-xs font-figtree font-semibold tracking-[0.14em] uppercase text-[#6B6A62]">
          KITCHENWATCH INVENTORY
        </span>
      </motion.div>

      {/* Headline: High-contrast Editorial Serif with Roman Line 1 and Italic Line 2 */}
      <motion.h1
        initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-serif text-[#1C1B18] tracking-tight leading-[0.98] mb-5 sm:mb-6"
        style={{ fontSize: 'clamp(44px, 7vw, 100px)' }}
      >
        <span className="block font-normal">
          {site.hero.headlinePre} {site.hero.headlineSerif}
        </span>
        <span className="block italic font-normal">
          {site.hero.headlinePost}
        </span>
      </motion.h1>

      {/* Subheadline: One short line (max 14 words), Figtree sans, warm ink */}
      <motion.p
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[17px] sm:text-[19px] text-[#4B4A44] max-w-xl mx-auto mb-8 leading-relaxed font-figtree"
      >
        {site.hero.subheadline}
      </motion.p>

      {/* Two Buttons: Lavender Primary + Ivory Secondary */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 w-full sm:w-auto"
      >
        {/* Primary button: 12px radius, 2px ink outline, flat lavender fill, ink text */}
        <a
          href="#cta"
          className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-btn bg-[#E9D8FD] text-[#1C1B18] font-figtree font-bold text-base border-2 border-[#1C1B18] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-hard active:translate-y-0 active:shadow-none inline-flex items-center justify-center min-h-[48px]"
        >
          {site.hero.ctaPrimary}
        </a>

        {/* Secondary button: 12px radius, 2px ink outline, ivory fill, ink text */}
        <a
          href="#cta"
          className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-btn bg-[#FFFEF2] text-[#1C1B18] font-figtree font-semibold text-base border-2 border-[#1C1B18] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-hard active:translate-y-0 active:shadow-none inline-flex items-center justify-center min-h-[48px]"
        >
          {site.hero.ctaSecondary}
        </a>
      </motion.div>

      {/* Trust line */}
      <motion.p
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-xs sm:text-[13px] text-[#6B6A62] leading-relaxed max-w-md mx-auto font-figtree"
      >
        {site.hero.trustLine}
      </motion.p>
    </div>
  );
}