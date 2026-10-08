import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

function formatRupees(val: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}

export default function SavingsCalculator() {
  const { heading, subheading, disclaimer, cta, defaults, ranges } = site.calculator;

  const [outlets, setOutlets] = useState<number>(defaults.outlets);
  const [purchases, setPurchases] = useState<number>(defaults.monthlyPurchasesPerOutlet);
  const [wastagePct, setWastagePct] = useState<number>(defaults.wastagePercent);
  const [reductionPct, setReductionPct] = useState<number>(defaults.targetReductionPercent);

  // Computations
  const totalPurchases = outlets * purchases;
  const monthlyWastage = (totalPurchases * wastagePct) / 100;
  const potentialMonthlySavings = (monthlyWastage * reductionPct) / 100;
  const potentialYearlySavings = potentialMonthlySavings * 12;

  // Suggested Plan
  const suggestedPlan = useMemo(() => {
    if (outlets <= 2) return { name: 'Starter', price: 2499 };
    if (outlets <= 6) return { name: 'Growth', price: 4999 };
    return { name: 'Business', price: 8999 };
  }, [outlets]);

  const netMonthlyBenefit = Math.max(0, potentialMonthlySavings - suggestedPlan.price);

  return (
    <section id="calculator" className="px-4 sm:px-6 py-20 md:py-28 bg-cream/70 border-y border-border/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-emerald-tint border border-emerald/20 text-emerald font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <Calculator size={13} />
              Interactive Estimator
            </span>
            <h2
              className="font-jakarta font-bold text-ink tracking-tight mb-3"
              style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary">{subheading}</p>
          </Reveal>
        </div>

        {/* Calculator Body: Sliders Left, Result Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-surface rounded-panel border border-border p-6 sm:p-8 shadow-sm">
            <h3 className="text-sm font-jakarta font-bold uppercase tracking-wider text-muted mb-6">
              Your kitchen numbers
            </h3>

            <div className="space-y-6">
              {/* Slider 1: Outlets */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-outlets" className="text-sm font-jakarta font-semibold text-ink">
                    Number of outlets
                  </label>
                  <span className="font-jakarta font-bold text-blue text-base">
                    {outlets} {outlets === 1 ? 'outlet' : 'outlets'}
                  </span>
                </div>
                <input
                  id="calc-outlets"
                  type="range"
                  min={ranges.outlets.min}
                  max={ranges.outlets.max}
                  step={ranges.outlets.step}
                  value={outlets}
                  onChange={(e) => setOutlets(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>1 outlet</span>
                  <span>10 outlets</span>
                </div>
              </div>

              {/* Slider 2: Monthly Purchases per Outlet */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-purchases" className="text-sm font-jakarta font-semibold text-ink">
                    Monthly raw material purchase (per outlet)
                  </label>
                  <span className="font-jakarta font-bold text-ink text-base">
                    {formatRupees(purchases)}
                  </span>
                </div>
                <input
                  id="calc-purchases"
                  type="range"
                  min={ranges.purchases.min}
                  max={ranges.purchases.max}
                  step={ranges.purchases.step}
                  value={purchases}
                  onChange={(e) => setPurchases(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>₹25,000</span>
                  <span>₹10,00,000</span>
                </div>
              </div>

              {/* Slider 3: Estimated Wastage % */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-wastage" className="text-sm font-jakarta font-semibold text-ink">
                    Estimated food spoilage & wastage rate
                  </label>
                  <span className="font-jakarta font-bold text-coral text-base">
                    {wastagePct}%
                  </span>
                </div>
                <input
                  id="calc-wastage"
                  type="range"
                  min={ranges.wastage.min}
                  max={ranges.wastage.max}
                  step={ranges.wastage.step}
                  value={wastagePct}
                  onChange={(e) => setWastagePct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-coral"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>2% (Low)</span>
                  <span>8% (Typical Indian kitchen)</span>
                  <span>20% (High)</span>
                </div>
              </div>

              {/* Slider 4: Target Reduction % */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-reduction" className="text-sm font-jakarta font-semibold text-ink">
                    Target wastage reduction with KitchenWatch
                  </label>
                  <span className="font-jakarta font-bold text-emerald text-base">
                    {reductionPct}%
                  </span>
                </div>
                <input
                  id="calc-reduction"
                  type="range"
                  min={ranges.reduction.min}
                  max={ranges.reduction.max}
                  step={ranges.reduction.step}
                  value={reductionPct}
                  onChange={(e) => setReductionPct(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>10% (Conservative)</span>
                  <span>30% (Recommended target)</span>
                  <span>60%</span>
                </div>
              </div>
            </div>

            {/* Total Monthly Kitchen Spend summary */}
            <div className="mt-8 pt-5 border-t border-border flex items-center justify-between text-xs text-secondary">
              <span>Total monthly food purchases across {outlets} {outlets === 1 ? 'outlet' : 'outlets'}:</span>
              <span className="font-jakarta font-bold text-ink text-sm">
                {formatRupees(totalPurchases)}
              </span>
            </div>
          </div>

          {/* Right Column: Result Panel (Emerald + Coral) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Coral Panel: Current Wastage */}
            <div className="bg-surface rounded-panel border border-coral/30 p-6 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-coral block mb-1">
                Estimated current loss
              </span>
              <div className="flex items-baseline justify-between">
                <div>
                  <motion.p
                    key={monthlyWastage}
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    className="text-2xl sm:text-3xl font-jakarta font-extrabold text-coral"
                  >
                    {formatRupees(monthlyWastage)}
                  </motion.p>
                  <span className="text-xs text-muted">Monthly avoidable food loss</span>
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-coral-tint text-coral rounded-md border border-coral/20">
                  {wastagePct}% of spend
                </span>
              </div>
            </div>

            {/* Emerald Panel: Projected Savings */}
            <div className="bg-gradient-to-br from-emerald-tint/70 to-emerald-tint/30 rounded-panel border border-emerald/30 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald uppercase tracking-wider mb-2 font-jakarta">
                <Sparkles size={14} /> Potential Savings
              </div>

              <div className="mb-4">
                <motion.p
                  key={potentialMonthlySavings}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-3xl sm:text-4xl font-jakarta font-extrabold text-emerald"
                >
                  {formatRupees(potentialMonthlySavings)}
                  <span className="text-sm font-semibold text-emerald/80 ml-1">/ month</span>
                </motion.p>
                <p className="text-xs font-medium text-emerald-800 mt-0.5">
                  or ~{formatRupees(potentialYearlySavings)} / year recovered
                </p>
              </div>

              {/* Recommended plan & ROI */}
              <div className="bg-surface/90 rounded-card p-3.5 border border-emerald/20 text-xs space-y-1.5 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Suggested plan:</span>
                  <span className="font-jakarta font-bold text-ink">
                    KitchenWatch {suggestedPlan.name} ({formatRupees(suggestedPlan.price)}/mo)
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                  <span className="text-emerald-800 font-semibold flex items-center gap-1">
                    <TrendingUp size={12} /> Net monthly benefit:
                  </span>
                  <span className="font-jakarta font-extrabold text-emerald text-sm">
                    +{formatRupees(netMonthlyBenefit)}/mo
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-[11px] text-secondary leading-snug mb-5">
                <ShieldCheck size={14} className="text-emerald mt-0.5 shrink-0" />
                <p>{disclaimer}</p>
              </div>

              {/* CTA */}
              <MagneticButton className="w-full">
                <a
                  href="#cta"
                  className="w-full py-3.5 px-4 rounded-btn bg-emerald text-white font-jakarta font-semibold text-sm hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{cta}</span>
                  <ArrowRight size={15} />
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
