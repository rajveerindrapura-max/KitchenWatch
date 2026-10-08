import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

function formatRupees(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const { heading, subheading, yearlyDiscountText, plans, notes } = site.pricing;

  return (
    <section id="pricing" className="px-4 sm:px-6 py-20 md:py-28 bg-ivory border-b border-ink/20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
              TRANSPARENT PRICING
            </span>
            <h2
              className="font-serif font-normal tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(32px, 4.2vw, 54px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary mb-8">{subheading}</p>

            {/* Monthly / Yearly Toggle */}
            <div className="inline-flex items-center gap-2 bg-paper p-1.5 rounded-full border-1.5 border-ink shadow-hard-sm">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                  !yearly
                    ? 'bg-card text-ink border border-ink/30 shadow-xs'
                    : 'text-secondary hover:text-ink'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 min-h-[44px] cursor-pointer ${
                  yearly
                    ? 'bg-lavender text-ink border border-ink/30 shadow-xs'
                    : 'text-secondary hover:text-ink'
                }`}
              >
                <span>Yearly</span>
                <span className="text-[11px] font-bold text-sage-ink bg-sage px-2.5 py-0.5 rounded-full border border-ink/20">
                  {yearlyDiscountText}
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* 3 Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col h-full transition-all duration-150 ${
                  plan.recommended
                    ? 'border-2 border-ink bg-lavender shadow-hard-lg'
                    : 'border-1.5 border-ink bg-paper shadow-hard-sm hover:-translate-y-1 hover:shadow-hard'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-ink text-cream text-xs font-bold rounded-full border border-ink shadow-sm uppercase tracking-wider">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-2xl font-normal text-ink mb-1">{plan.name}</h3>
                  <p className="text-xs font-semibold text-secondary">{plan.outlets}</p>
                </div>

                <div className="mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={yearly ? 'y' : 'm'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline"
                    >
                      <span className="font-serif font-bold text-ink text-3xl sm:text-4xl">
                        {formatRupees(yearly ? plan.price.yearly : plan.price.monthly)}
                      </span>
                      <span className="text-muted text-xs sm:text-sm ml-1.5 font-medium">/ month</span>
                    </motion.div>
                  </AnimatePresence>
                  {yearly && (
                    <p className="text-xs text-sage-ink mt-1.5 font-bold">
                      Billed annually (save 2 months)
                    </p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-card border border-ink/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} strokeWidth={3} className="text-ink" />
                      </span>
                      <span className="text-xs sm:text-sm text-ink leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="w-full">
                  <a
                    href="#cta"
                    className={`w-full text-center block py-3.5 px-4 rounded-xl font-semibold text-sm transition-all min-h-[44px] flex items-center justify-center cursor-pointer active:translate-y-0.5 ${
                      plan.recommended
                        ? 'bg-ink text-cream border-2 border-ink shadow-hard-sm hover:bg-ink/90'
                        : 'bg-card text-ink border-1.5 border-ink shadow-hard-sm hover:shadow-hard'
                    }`}
                  >
                    Start 14-day free trial
                  </a>
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnotes */}
        <Reveal>
          <div className="bg-paper rounded-2xl p-5 border-1.5 border-ink text-center max-w-2xl mx-auto space-y-1.5 text-xs text-secondary shadow-hard-sm">
            {notes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}