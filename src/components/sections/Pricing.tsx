import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <Section id="pricing">
      <Reveal>
        <div className="text-center mb-14">
          <h2
            className="font-jakarta font-bold tracking-tight text-ink mb-4"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
          >
            {site.pricing.heading}
          </h2>
          <p className="text-ink-2 mb-8">{site.pricing.subheading}</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-100 p-1 rounded-pill">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-pill text-sm font-jakarta font-semibold transition-all ${
                !yearly ? 'bg-surface text-ink shadow-sm' : 'text-muted'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-pill text-sm font-jakarta font-semibold transition-all flex items-center gap-2 ${
                yearly ? 'bg-surface text-ink shadow-sm' : 'text-muted'
              }`}
            >
              Yearly
              <span className="text-[10px] font-bold text-white bg-blue px-2 py-0.5 rounded-pill">
                {site.pricing.yearlyLabel}
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {site.pricing.plans.map((plan, i) => (
          <Reveal key={plan.id} delay={i * 0.1}>
            <div
              className={`relative rounded-card p-7 md:p-8 flex flex-col h-full transition-all ${
                plan.recommended
                  ? 'border-2 border-blue shadow-blue-glow bg-surface'
                  : 'border border-border bg-surface'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-blue text-white text-xs font-jakarta font-bold rounded-pill">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-jakarta font-bold text-ink text-xl mb-1">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.outlets}</p>
              </div>

              <div className="mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? 'y' : 'm'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="font-jakarta font-extrabold text-ink" style={{ fontSize: '2.5rem' }}>
                      {formatINR(yearly ? plan.price.yearly : plan.price.monthly)}
                    </span>
                    <span className="text-muted text-sm ml-1">/month</span>
                  </motion.div>
                </AnimatePresence>
                {yearly && (
                  <p className="text-xs text-green-700 mt-1 font-medium">
                    Billed annually
                  </p>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={14} strokeWidth={2.5} className="text-blue mt-0.5 shrink-0" />
                    <span className="text-sm text-ink-2">{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <a
                  href="#cta"
                  className={`w-full text-center block py-3 rounded-pill font-jakarta font-semibold text-sm transition-colors ${
                    plan.recommended
                      ? 'bg-blue text-white hover:bg-blue-hover'
                      : 'border border-border text-ink hover:bg-slate-50'
                  }`}
                >
                  Start free trial
                </a>
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="text-center space-y-2">
          <p className="text-sm text-muted">{site.pricing.note}</p>
          <p className="text-sm text-muted">
            {site.pricing.customLine}{' '}
            <a href="#cta" className="text-blue hover:underline font-medium">
              Talk to us
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}