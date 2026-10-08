import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
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
    <section id="pricing" className="px-4 sm:px-6 py-20 md:py-28 bg-surface border-b border-border/80">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles size={13} />
              Transparent Pricing
            </span>
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary mb-8">{subheading}</p>

            {/* Monthly / Yearly Toggle */}
            <div className="inline-flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-border/60">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-jakarta font-semibold transition-all min-h-[44px] ${
                  !yearly ? 'bg-surface text-ink shadow-sm' : 'text-secondary hover:text-ink'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-jakarta font-semibold transition-all flex items-center gap-2 min-h-[44px] ${
                  yearly ? 'bg-surface text-ink shadow-sm' : 'text-secondary hover:text-ink'
                }`}
              >
                <span>Yearly</span>
                <span className="text-[11px] font-bold text-white bg-blue px-2.5 py-0.5 rounded-full">
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
                className={`relative rounded-panel p-7 sm:p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.recommended
                    ? 'border-2 border-blue shadow-blue-glow bg-surface ring-4 ring-blue/5'
                    : 'border border-border bg-surface hover:shadow-md'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue text-white text-xs font-jakarta font-bold rounded-full shadow-sm">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-jakarta font-bold text-ink text-xl mb-1">{plan.name}</h3>
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
                      <span className="font-jakarta font-extrabold text-ink text-3xl sm:text-4xl">
                        {formatRupees(yearly ? plan.price.yearly : plan.price.monthly)}
                      </span>
                      <span className="text-muted text-xs sm:text-sm ml-1.5 font-medium">/ month</span>
                    </motion.div>
                  </AnimatePresence>
                  {yearly && (
                    <p className="text-xs text-emerald-800 mt-1.5 font-semibold">
                      Billed annually (save 2 months)
                    </p>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check size={14} strokeWidth={2.5} className="text-blue mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-secondary leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton className="w-full">
                  <a
                    href="#cta"
                    className={`w-full text-center block py-3 px-4 rounded-btn font-jakarta font-semibold text-sm transition-colors min-h-[44px] flex items-center justify-center ${
                      plan.recommended
                        ? 'bg-blue text-white hover:bg-blue-hover shadow-sm'
                        : 'border border-border text-ink hover:bg-slate-50'
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
          <div className="bg-slate-50/80 rounded-card p-5 border border-border text-center max-w-2xl mx-auto space-y-1.5 text-xs text-secondary">
            {notes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}