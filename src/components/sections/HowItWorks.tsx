import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { site } from '../../content/site';

function PhoneMockup({ step }: { step: number }) {
  const screens = [
    // Step 1: setup
    <div key="setup" className="p-3.5 space-y-2.5 font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <p className="text-xs font-semibold text-ink">Add New Item</p>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          Outlet 1
        </span>
      </div>
      <div className="space-y-2">
        {[
          { label: 'Item name', val: 'Cooking oil (15L)' },
          { label: 'Category', val: 'Pantry' },
          { label: 'Minimum alert level', val: '4 tins' },
        ].map(({ label, val }) => (
          <div key={label}>
            <p className="text-[10px] text-muted mb-0.5">{label}</p>
            <div className="h-7 bg-[#F5F5F7] rounded-lg border border-border px-2 flex items-center text-xs text-ink font-medium">
              {val}
            </div>
          </div>
        ))}
      </div>
      <div className="h-8 bg-blue rounded-lg flex items-center justify-center shadow-xs cursor-pointer hover:bg-blueHover transition-colors">
        <span className="text-[11px] text-white font-medium">Save item</span>
      </div>
    </div>,

    // Step 2: employee update
    <div key="employee" className="p-3.5 space-y-2.5 font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <p className="text-xs font-semibold text-ink">Quick Count</p>
        <span className="text-[10px] text-muted">Role: Employee</span>
      </div>
      {[
        { item: 'Tomatoes', qty: 12, unit: 'kg' },
        { item: 'Cooking oil', qty: 8, unit: 'tins' },
        { item: 'Bread', qty: 24, unit: 'loaves' },
      ].map(({ item, qty, unit }) => (
        <div
          key={item}
          className="flex items-center justify-between bg-[#F5F5F7] rounded-xl px-2.5 py-1.5 border border-border/70"
        >
          <div>
            <span className="text-xs font-semibold text-ink block">{item}</span>
            <span className="text-[10px] text-muted">{unit}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-white border border-border flex items-center justify-center text-xs font-bold text-ink cursor-pointer hover:bg-slate-50">
              -
            </div>
            <span className="text-xs font-mono font-semibold w-5 text-center text-ink">{qty}</span>
            <div className="w-5 h-5 rounded-md bg-blue-tint text-blue border border-blue/20 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-blue/20">
              +
            </div>
          </div>
        </div>
      ))}
      <p className="text-[9px] text-center text-muted italic">Updated 2m ago from smartphone</p>
    </div>,

    // Step 3: owner dashboard
    <div key="owner" className="p-3.5 space-y-2.5 font-sans">
      <div className="flex items-center justify-between pb-2 border-b border-border">
        <p className="text-xs font-semibold text-ink">All Outlets</p>
        <span className="text-[10px] font-medium text-blue bg-blue-tint px-2 py-0.5 rounded-full border border-blue/20">
          Role: Owner
        </span>
      </div>
      {[
        { name: 'Outlet 1', items: 32, status: 'Healthy', color: 'bg-emerald-50 text-emerald-700 border-emerald-200/60' },
        { name: 'Outlet 2', items: 8, status: '2 Low stock', color: 'bg-amber-50 text-amber-700 border-amber-200/60' },
        { name: 'Outlet 3', items: 47, status: 'Healthy', color: 'bg-emerald-50 text-emerald-700 border-emerald-200/60' },
      ].map((outlet) => (
        <div
          key={outlet.name}
          className="p-2 bg-[#F5F5F7] rounded-xl border border-border/70 flex items-center justify-between"
        >
          <div>
            <span className="text-xs font-semibold text-ink block">{outlet.name}</span>
            <span className="text-[10px] text-muted">{outlet.items} items tracked</span>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${outlet.color}`}>
            {outlet.status}
          </span>
        </div>
      ))}
    </div>,
  ];

  return (
    <div
      className="relative bg-[#101218] rounded-[32px] mx-auto border border-slate-800 shadow-float flex flex-col p-2"
      style={{ width: '220px', height: '390px' }}
    >
      {/* Dynamic island */}
      <div className="flex items-center justify-between px-3 pt-1 pb-1 shrink-0 z-20">
        <span className="text-[9px] text-slate-400 font-mono font-medium">9:41</span>
        <div className="w-14 h-2.5 bg-slate-800 rounded-full" />
        <div className="w-4" />
      </div>

      {/* Screen area */}
      <div className="flex-1 bg-surface rounded-[24px] overflow-hidden flex flex-col justify-between border border-hairline">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="h-full flex flex-col justify-between"
          >
            {screens[step]}
            <div className="pb-2 text-center border-t border-hairline">
              <span className="text-[9px] uppercase tracking-wider text-muted font-medium">
                Sample preview
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Home indicator */}
      <div className="pt-1.5 pb-0.5 flex justify-center shrink-0">
        <div className="w-14 h-1 bg-slate-700/50 rounded-full" />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionH = sectionRef.current.offsetHeight;
      const viewportH = window.innerHeight;

      // How far we've scrolled through the section
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionH - viewportH)));
      const step = Math.min(2, Math.floor(progress * 3));
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduce]);

  return (
    <section
      id="how-it-works"
      className="bg-[#101218] text-[#F5F5F7] border-b border-white/10 overflow-hidden"
    >
      {/* Mobile: stacked */}
      <div className="md:hidden px-4 sm:px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-blue uppercase mb-3 block">
            HOW IT WORKS
          </span>
          <h2
            className="font-sans font-semibold text-white tracking-[-0.035em] mb-10"
            style={{ fontSize: 'clamp(30px, 7vw, 42px)' }}
          >
            {site.howItWorks.heading}
          </h2>
          <div className="space-y-10">
            {site.howItWorks.steps.map((step, i) => (
              <div key={i} className="bg-white/5 rounded-2xl border border-white/10 p-5">
                <div className="flex items-start gap-3.5 mb-5">
                  <span className="font-mono text-sm font-semibold px-2.5 py-1 rounded-lg bg-blue text-white shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-lg text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#A7AEBB] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="flex justify-center pt-2">
                  <PhoneMockup step={i} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#A7AEBB]/70 text-xs italic">{site.howItWorks.ruleNote}</p>
        </div>
      </div>

      {/* Desktop: Apple-style pinned scroll */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-2 gap-16 items-center">
            {/* Steps Left */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-blue uppercase mb-3 block">
                HOW IT WORKS
              </span>
              <h2
                className="font-sans font-semibold text-white tracking-[-0.035em] mb-12"
                style={{ fontSize: 'clamp(36px, 4vw, 52px)' }}
              >
                {site.howItWorks.heading}
              </h2>
              <div className="space-y-4">
                {site.howItWorks.steps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`block w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-white/10 border-blue/60 shadow-subtle ring-1 ring-blue/30'
                          : 'bg-white/[0.02] border-white/5 opacity-70 hover:opacity-100 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono text-sm font-semibold px-3 py-1 rounded-lg shrink-0 transition-colors ${
                            isActive ? 'bg-blue text-white' : 'bg-white/10 text-[#A7AEBB]'
                          }`}
                        >
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-sans font-semibold text-xl text-white mb-1">
                            {step.title}
                          </h3>
                          <p className="text-[#A7AEBB] text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-8 text-[#A7AEBB]/60 text-xs italic">{site.howItWorks.ruleNote}</p>
            </div>

            {/* Pinned Phone mockup Right */}
            <div className="flex justify-center">
              <PhoneMockup step={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}