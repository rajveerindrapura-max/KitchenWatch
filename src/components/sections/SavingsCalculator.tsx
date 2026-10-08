import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
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
    <section id="calculator" className="px-4 sm:px-6 py-20 md:py-28 bg-[#FBFBFD] border-b border-hairline">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              SAVINGS ESTIMATOR
            </span>
            <h2
              className="font-sans font-semibold text-ink tracking-[-0.035em] mb-3"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary">{subheading}</p>
          </Reveal>
        </div>

        {/* Calculator Body: Sliders Left, Result Panel Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-subtle">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-6">
              Your kitchen numbers
            </h3>

            <div className="space-y-6">
              {/* Slider 1: Outlets */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-outlets" className="text-sm font-semibold text-ink">
                    Number of outlets
                  </label>
                  <span className="font-mono font-semibold text-sm px-2.5 py-0.5 rounded-md bg-blue-tint border border-blue/20 text-blue">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2F6BFF]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1 font-mono">
                  <span>1 outlet</span>
                  <span>10 outlets</span>
                </div>
              </div>

              {/* Slider 2: Monthly Purchases per Outlet */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-purchases" className="text-sm font-semibold text-ink">
                    Monthly raw material purchase (per outlet)
                  </label>
                  <span className="font-mono font-semibold text-sm px-2.5 py-0.5 rounded-md bg-[#F5F5F7] border border-border text-ink">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2F6BFF]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1 font-mono">
                  <span>₹25,000</span>
                  <span>₹10,00,000</span>
                </div>
              </div>

              {/* Slider 3: Estimated Wastage % */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-wastage" className="text-sm font-semibold text-ink">
                    Estimated food spoilage & wastage rate
                  </label>
                  <span className="font-mono font-semibold text-sm px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200/60">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B91C1C]"
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
                  <label htmlFor="calc-reduction" className="text-sm font-semibold text-ink">
                    Target wastage reduction with KitchenWatch
                  </label>
                  <span className="font-mono font-semibold text-sm px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60">
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
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#15803D]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>10% (Conservative)</span>
                  <span>30% (Recommended target)</span>
                  <span>60%</span>
                </div>
              </div>
            </div>

            {/* Total Monthly Kitchen Spend summary */}
            <div className="mt-8 pt-5 border-t border-hairline flex items-center justify-between text-xs text-secondary">
              <span>Total monthly raw material spend across {outlets} {outlets === 1 ? 'outlet' : 'outlets'}:</span>
              <span className="font-mono font-semibold text-ink text-sm">
                {formatRupees(totalPurchases)}
              </span>
            </div>
          </div>

          {/* Right Column: Result Panels */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Current Wastage Panel */}
            <div className="bg-surface rounded-2xl border border-border p-6 shadow-subtle">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 block mb-1">
                Estimated current loss
              </span>
              <div className="flex items-baseline justify-between">
                <div>
                  <motion.p
                    key={monthlyWastage}
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    className="text-2xl sm:text-3xl font-mono text-rose-600 font-bold"
                  >
                    {formatRupees(monthlyWastage)}
                  </motion.p>
                  <span className="text-xs text-secondary">Monthly avoidable food loss</span>
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-rose-50 text-rose-700 rounded-md border border-rose-200/60">
                  {wastagePct}% of spend
                </span>
              </div>
            </div>

            {/* Projected Savings Panel */}
            <div className="bg-surface rounded-2xl border border-emerald-200/80 p-6 sm:p-7 shadow-subtle ring-1 ring-emerald-500/10">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                <Sparkles size={14} /> Potential Savings
              </div>

              <div className="mb-5">
                <motion.p
                  key={potentialMonthlySavings}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-3xl sm:text-4xl font-mono text-emerald-700 font-bold"
                >
                  {formatRupees(potentialMonthlySavings)}
                  <span className="text-sm font-sans font-medium text-emerald-600 ml-1">/ month</span>
                </motion.p>
                <p className="text-xs font-medium text-secondary mt-0.5 font-mono">
                  or ~{formatRupees(potentialYearlySavings)} / year recovered
                </p>
              </div>

              {/* Recommended plan & ROI */}
              <div className="bg-[#F5F5F7] rounded-xl p-3.5 border border-border text-xs space-y-2 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Suggested plan:</span>
                  <span className="font-semibold text-ink">
                    KitchenWatch {suggestedPlan.name} ({formatRupees(suggestedPlan.price)}/mo)
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border/80">
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <TrendingUp size={13} /> Net monthly benefit:
                  </span>
                  <span className="font-mono font-bold text-emerald-700 text-sm">
                    +{formatRupees(netMonthlyBenefit)}/mo
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-[11px] text-secondary leading-snug mb-5">
                <ShieldCheck size={14} className="text-emerald-700 mt-0.5 shrink-0" />
                <p>{disclaimer}</p>
              </div>

              {/* Blue Pill CTA Button */}
              <MagneticButton className="w-full">
                <a
                  href="#cta"
                  className="w-full py-3.5 px-5 rounded-full bg-blue hover:bg-blueHover text-white font-medium text-sm shadow-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
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
