import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { site } from '../../content/site';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroText() {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return (
      <div className="flex flex-col items-start justify-center h-full relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-blue/20 bg-blue/5 text-blue text-sm font-jakarta font-semibold">
            {site.hero.pill}
          </span>
        </div>
        <h1
          className="font-jakarta font-extrabold tracking-tight text-ink leading-[1.04] mb-6"
          style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
        >
          {site.hero.headlinePre}{' '}
          <span
            className="font-serif-italic text-blue"
            style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            {site.hero.headlineSerif}
          </span>
          <br />
          {site.hero.headlinePost}
        </h1>
        <p className="text-lg md:text-xl text-ink-2 max-w-lg mb-8 leading-relaxed">
          {site.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto">
          <MagneticButton>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-pill bg-blue text-white font-jakarta font-semibold text-base hover:bg-blue-hover transition-colors shadow-blue-glow"
            >
              {site.hero.ctaPrimary}
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-pill border border-border text-ink font-jakarta font-semibold text-base hover:bg-slate-50 transition-colors"
            >
              {site.hero.ctaSecondary}
            </a>
          </MagneticButton>
        </div>
        <p className="text-sm text-muted leading-relaxed max-w-md">{site.hero.trustLine}</p>
        <div className="mt-6 text-muted hidden md:inline-flex items-center" aria-hidden="true">
          <ChevronDown size={20} strokeWidth={1.5} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start justify-center h-full relative z-10">
      {/* Pill */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-blue/20 bg-blue/5 text-blue text-sm font-jakarta font-semibold">
          {site.hero.pill}
        </span>
      </motion.div>

      {/* Headline with word-by-word reveal animation */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={container}
        className="font-jakarta font-extrabold tracking-tight text-ink leading-[1.04] mb-6"
        style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
      >
        <span className="inline-block mr-[0.25em]">
          <motion.span variants={wordVariant} className="inline-block">
            {site.hero.headlinePre}
          </motion.span>
        </span>
        {' '}
        <span className="inline-block mr-[0.25em]">
          <motion.span
            variants={wordVariant}
            className="inline-block font-serif-italic text-blue"
            style={{
              fontFamily: 'Instrument Serif, Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            {site.hero.headlineSerif}
          </motion.span>
        </span>
        <br />
        {site.hero.headlinePost.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-[0.25em]">
            <motion.span variants={wordVariant} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.25 }}
        className="text-lg md:text-xl text-ink-2 max-w-lg mb-8 leading-relaxed"
      >
        {site.hero.subheadline}
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.35 }}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 w-full sm:w-auto"
      >
        <MagneticButton>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-pill bg-blue text-white font-jakarta font-semibold text-base hover:bg-blue-hover transition-colors shadow-blue-glow"
          >
            {site.hero.ctaPrimary}
          </a>
        </MagneticButton>
        <MagneticButton>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-pill border border-border text-ink font-jakarta font-semibold text-base hover:bg-slate-50 transition-colors"
          >
            {site.hero.ctaSecondary}
          </a>
        </MagneticButton>
      </motion.div>

      {/* Trust line */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.45 }}
        className="text-sm text-muted leading-relaxed max-w-md"
      >
        {site.hero.trustLine}
      </motion.p>

      {/* Scroll cue inline beneath trust line with 24px gap, hidden on mobile */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="mt-6 text-muted hidden md:inline-flex items-center"
        aria-hidden="true"
      >
        <ChevronDown size={20} strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}