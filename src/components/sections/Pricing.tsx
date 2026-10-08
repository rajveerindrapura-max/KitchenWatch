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
    <section id="pricing" className="px-4 sm:px-6 py-20 md:py-28 bg-[#FBFBFD] border-b border-hairline">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              TRANSPARENT PRICING
            </span>
            <h2
              className="font-sans font-semibold tracking-[-0.035em] text-ink mb-3"
              style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary mb-8">{subheading}</p>

            {/* Monthly / Yearly Toggle */}
            <div className="inline-flex items-center gap-1 bg-slate-200/70 p-1 rounded-full border border-border/80">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[40px] cursor-pointer ${
                  !yearly
                    ? 'bg-surface text-ink font-semibold shadow-xs border border-border/50'
                    : 'text-muted hover:text-ink'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 min-h-[40px] cursor-pointer ${
                  yearly
                    ? 'bg-surface text-ink font-semibold shadow-xs border border-border/50'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <span>Yearly</span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  {yearlyDiscountText}
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* 3 Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 bg-surface ${
                  plan.recommended
                    ? 'border-2 border-blue shadow-float ring-1 ring-blue/20'
                    : 'border border-border shadow-subtle hover:shadow-float hover:-translate-y-0.5'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 bg-blue text-white text-[11px] font-semibold rounded-full shadow-xs uppercase tracking-wider">
                      Recommended
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="font-sans font-semibold text-xl text-ink mb-1">{plan.name}</h3>
                    <p className="text-xs font-medium text-muted">{plan.outlets}</p>
                  </div>

                  <div className="mb-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={yearly ? 'y' : 'm'}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-baseline"
                      >
                        <span className="font-mono font-bold text-ink text-3xl sm:text-4xl tabular-nums">
                          {formatRupees(yearly ? plan.price.yearly : plan.price.monthly)}
                        </span>
                        <span className="text-muted text-xs sm:text-sm ml-1.5 font-medium">/ month</span>
                      </motion.div>
                    </AnimatePresence>
                    {yearly && (
                      <p className="text-xs text-emerald-700 mt-1.5 font-medium">
                        Billed annually (save 2 months)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        <span className="text-xs sm:text-sm text-secondary leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MagneticButton className="w-full">
                  <a
                    href="#cta"
                    className={`w-full text-center block py-3.5 px-4 rounded-full font-medium text-sm transition-all min-h-[44px] flex items-center justify-center cursor-pointer active:scale-[0.99] ${
                      plan.recommended
                        ? 'bg-blue text-white shadow-xs hover:bg-blueHover'
                        : 'bg-surface text-ink border border-border shadow-xs hover:bg-[#F5F5F7]'
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
          <div className="bg-[#F5F5F7] rounded-xl p-4 border border-border text-center max-w-2xl mx-auto space-y-1 text-xs text-muted">
            {notes.map((note, idx) => (
              <p key={idx}>{note}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}