import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { site } from '../../content/site';

export default function HeroText() {
  const shouldReduce = useReducedMotion();

  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-20">
      {/* Eyebrow Label: small uppercase, tracking 0.1em, muted */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 sm:mb-5"
      >
        <span className="text-[12px] sm:text-[13px] font-sans font-semibold tracking-[0.1em] uppercase text-muted">
          {site.hero.eyebrow}
        </span>
      </motion.div>

      {/* Headline: Apple-style tightly tracked, Line 1 in ink, Line 2 in #6B7280 */}
      <motion.h1
        initial={shouldReduce ? {} : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-sans font-semibold text-ink tracking-[-0.04em] leading-[1.02] mb-5 sm:mb-6"
        style={{ fontSize: 'clamp(44px, 7.5vw, 104px)' }}
      >
        <span className="block text-ink">{site.hero.headlineLine1}</span>
        <span className="block text-[#6B7280]">{site.hero.headlineLine2}</span>
      </motion.h1>

      {/* Subheadline: Max 14 words, clean Apple/Stripe copy */}
      <motion.p
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-[18px] sm:text-[20px] text-secondary max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans"
      >
        {site.hero.subheadline}
      </motion.p>

      {/* Buttons: Blue pill primary + Outlined pill secondary + Tertiary link */}
      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6 w-full sm:w-auto"
      >
        {/* Primary blue pill with sliding arrow */}
        <a
          href="#cta"
          className="group w-full sm:w-auto px-7 py-3.5 rounded-pill bg-blue hover:bg-blue-hover text-white font-sans font-medium text-base transition-all duration-150 shadow-subtle hover:shadow-card inline-flex items-center justify-center gap-2 min-h-[48px]"
        >
          <span>{site.hero.ctaPrimary}</span>
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="transition-transform duration-150 group-hover:translate-x-1"
          />
        </a>

        {/* Secondary outlined pill */}
        <a
          href="#cta"
          className="w-full sm:w-auto px-7 py-3.5 rounded-pill bg-white hover:bg-[#F5F5F7] text-ink font-sans font-medium text-base border border-border transition-all duration-150 shadow-subtle inline-flex items-center justify-center min-h-[48px]"
        >
          {site.hero.ctaSecondary}
        </a>

        {/* Tertiary blue link with chevron (Apple style) */}
        <a
          href="#product"
          className="text-blue hover:text-blue-hover font-sans font-medium text-[15px] inline-flex items-center gap-0.5 px-3 py-2 transition-colors"
        >
          <span>See interactive demo</span>
          <ChevronRight size={15} strokeWidth={2} />
        </a>
      </motion.div>

      {/* Trust line */}
      <motion.p
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-xs sm:text-[13px] text-muted leading-relaxed max-w-md mx-auto font-sans"
      >
        {site.hero.trustLine}
      </motion.p>
    </div>
  );
}