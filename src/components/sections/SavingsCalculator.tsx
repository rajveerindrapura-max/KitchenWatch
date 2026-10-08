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
    <section id="calculator" className="px-4 sm:px-6 py-20 md:py-28 bg-paper border-b border-ink/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
              SAVINGS ESTIMATOR
            </span>
            <h2
              className="font-serif font-normal text-ink tracking-tight mb-3"
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
          <div className="lg:col-span-7 bg-card rounded-2xl border-1.5 border-ink p-6 sm:p-8 shadow-hard-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-6">
              Your kitchen numbers
            </h3>

            <div className="space-y-6">
              {/* Slider 1: Outlets */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="calc-outlets" className="text-sm font-semibold text-ink">
                    Number of outlets
                  </label>
                  <span className="font-bold text-ink text-base px-2.5 py-0.5 rounded bg-sky border border-ink/20 text-sky-ink">
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
                  className="w-full h-2.5 bg-paper rounded-lg appearance-none cursor-pointer border border-ink/20 accent-[#1C1B18]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
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
                  <span className="font-bold text-ink text-base px-2.5 py-0.5 rounded bg-paper border border-ink/20">
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
                  className="w-full h-2.5 bg-paper rounded-lg appearance-none cursor-pointer border border-ink/20 accent-[#1C1B18]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
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
                  <span className="font-bold text-base px-2.5 py-0.5 rounded bg-peach text-peach-ink border border-ink/20">
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
                  className="w-full h-2.5 bg-paper rounded-lg appearance-none cursor-pointer border border-ink/20 accent-[#B3412A]"
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
                  <span className="font-bold text-base px-2.5 py-0.5 rounded bg-sage text-sage-ink border border-ink/20">
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
                  className="w-full h-2.5 bg-paper rounded-lg appearance-none cursor-pointer border border-ink/20 accent-[#2F6B3A]"
                />
                <div className="flex justify-between text-[11px] text-muted mt-1">
                  <span>10% (Conservative)</span>
                  <span>30% (Recommended target)</span>
                  <span>60%</span>
                </div>
              </div>
            </div>

            {/* Total Monthly Kitchen Spend summary */}
            <div className="mt-8 pt-5 border-t border-ink/15 flex items-center justify-between text-xs text-secondary">
              <span>Total monthly raw material spend across {outlets} {outlets === 1 ? 'outlet' : 'outlets'}:</span>
              <span className="font-bold text-ink text-sm">
                {formatRupees(totalPurchases)}
              </span>
            </div>
          </div>

          {/* Right Column: Result Panel (Peach + Sage) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Peach Panel: Current Wastage */}
            <div className="bg-peach rounded-2xl border-1.5 border-ink p-6 shadow-hard-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-peach-ink block mb-1">
                Estimated current loss
              </span>
              <div className="flex items-baseline justify-between">
                <div>
                  <motion.p
                    key={monthlyWastage}
                    initial={{ scale: 0.96 }}
                    animate={{ scale: 1 }}
                    className="text-2xl sm:text-3xl font-serif text-peach-ink font-bold"
                  >
                    {formatRupees(monthlyWastage)}
                  </motion.p>
                  <span className="text-xs text-peach-ink/80">Monthly avoidable food loss</span>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-card text-peach-ink rounded-md border border-ink/20">
                  {wastagePct}% of spend
                </span>
              </div>
            </div>

            {/* Sage Panel: Projected Savings */}
            <div className="bg-sage rounded-2xl border-1.5 border-ink p-6 sm:p-7 shadow-hard-sm">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sage-ink uppercase tracking-wider mb-2">
                <Sparkles size={14} /> Potential Savings
              </div>

              <div className="mb-5">
                <motion.p
                  key={potentialMonthlySavings}
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="text-3xl sm:text-4xl font-serif text-sage-ink font-bold"
                >
                  {formatRupees(potentialMonthlySavings)}
                  <span className="text-sm font-sans font-semibold text-sage-ink/80 ml-1">/ month</span>
                </motion.p>
                <p className="text-xs font-medium text-sage-ink/90 mt-0.5">
                  or ~{formatRupees(potentialYearlySavings)} / year recovered
                </p>
              </div>

              {/* Recommended plan & ROI */}
              <div className="bg-card rounded-xl p-3.5 border border-ink/20 text-xs space-y-1.5 mb-5 shadow-xs">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">Suggested plan:</span>
                  <span className="font-bold text-ink">
                    KitchenWatch {suggestedPlan.name} ({formatRupees(suggestedPlan.price)}/mo)
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1.5 border-t border-ink/10">
                  <span className="text-sage-ink font-semibold flex items-center gap-1">
                    <TrendingUp size={13} /> Net monthly benefit:
                  </span>
                  <span className="font-bold text-sage-ink text-sm">
                    +{formatRupees(netMonthlyBenefit)}/mo
                  </span>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-[11px] text-sage-ink/80 leading-snug mb-5">
                <ShieldCheck size={14} className="text-sage-ink mt-0.5 shrink-0" />
                <p>{disclaimer}</p>
              </div>

              {/* CTA */}
              <MagneticButton className="w-full">
                <a
                  href="#cta"
                  className="w-full py-3.5 px-4 rounded-xl bg-lavender text-ink font-semibold text-sm border-2 border-ink shadow-hard-sm hover:shadow-hard transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:translate-y-0.5"
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
