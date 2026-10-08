import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { site } from '../../content/site';

function PhoneMockup({ step }: { step: number }) {
  const screens = [
    // Step 1: setup
    <div key="setup" className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-ink/10">
        <p className="text-xs font-semibold text-ink">Add new item</p>
        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sage text-sage-ink border border-ink/20">
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
            <div className="h-7 bg-paper rounded-lg border border-ink/20 px-2 flex items-center text-xs text-ink font-medium">
              {val}
            </div>
          </div>
        ))}
      </div>
      <div className="h-8 bg-sage rounded-lg border border-ink/30 flex items-center justify-center shadow-hard-sm">
        <span className="text-[11px] text-sage-ink font-bold">Save item</span>
      </div>
    </div>,

    // Step 2: employee update
    <div key="employee" className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-ink/10">
        <p className="text-xs font-semibold text-ink">Quick count</p>
        <span className="text-[10px] text-muted">Role: Worker</span>
      </div>
      {[
        { item: 'Tomatoes', qty: 12, unit: 'kg' },
        { item: 'Cooking oil', qty: 8, unit: 'tins' },
        { item: 'Bread', qty: 24, unit: 'loaves' },
      ].map(({ item, qty, unit }) => (
        <div
          key={item}
          className="flex items-center justify-between bg-paper rounded-xl px-3 py-2 border border-ink/20"
        >
          <div>
            <span className="text-xs font-semibold text-ink block">{item}</span>
            <span className="text-[10px] text-muted">{unit}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-ivory border border-ink/30 flex items-center justify-center text-xs font-bold text-ink cursor-pointer hover:bg-paper">
              -
            </div>
            <span className="text-xs font-bold w-5 text-center text-ink">{qty}</span>
            <div className="w-6 h-6 rounded-md bg-lavender border border-ink/30 flex items-center justify-center text-xs font-bold text-ink cursor-pointer hover:bg-lavender/80">
              +
            </div>
          </div>
        </div>
      ))}
      <p className="text-[10px] text-center text-muted italic">Updated 2m ago from phone</p>
    </div>,

    // Step 3: owner dashboard
    <div key="owner" className="p-4 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-ink/10">
        <p className="text-xs font-semibold text-ink">All outlets</p>
        <span className="text-[10px] font-bold text-sky-ink bg-sky px-1.5 py-0.5 rounded border border-ink/20">
          Role: Owner
        </span>
      </div>
      {[
        { name: 'Outlet 1', items: 32, status: 'Healthy', color: 'bg-sage text-sage-ink' },
        { name: 'Outlet 2', items: 8, status: '2 Low stock', color: 'bg-butter text-butter-ink' },
        { name: 'Outlet 3', items: 47, status: 'Healthy', color: 'bg-sage text-sage-ink' },
      ].map((outlet) => (
        <div
          key={outlet.name}
          className="p-2.5 bg-paper rounded-xl border border-ink/20 flex items-center justify-between"
        >
          <div>
            <span className="text-xs font-bold text-ink block">{outlet.name}</span>
            <span className="text-[10px] text-muted">{outlet.items} items tracked</span>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-ink/20 ${outlet.color}`}>
            {outlet.status}
          </span>
        </div>
      ))}
    </div>,
  ];

  return (
    <div
      className="relative bg-card rounded-[32px] mx-auto border-2 border-ink shadow-hard-lg"
      style={{ width: '220px', height: '400px' }}
    >
      {/* Top speaker notch */}
      <div
        className="absolute top-2.5 left-1/2 -translate-x-1/2 bg-ink rounded-full"
        style={{ width: '60px', height: '6px' }}
      />
      <div className="absolute inset-[8px] rounded-[24px] overflow-hidden bg-ivory">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="pt-6 h-full flex flex-col justify-between"
          >
            {screens[step]}
            <div className="pb-3 text-center">
              <span className="text-[9px] uppercase tracking-wider text-muted font-bold">
                Sample data
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
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

  const stepAccents = [
    { badgeBg: 'bg-sage', badgeText: 'text-sage-ink' },
    { badgeBg: 'bg-sky', badgeText: 'text-sky-ink' },
    { badgeBg: 'bg-butter', badgeText: 'text-butter-ink' },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#1F4D47] text-[#F6F3E4] border-b border-[#1C1B18]/20"
      style={{ backgroundColor: '#1F4D47', color: '#F6F3E4' }}
    >
      {/* Mobile: stacked */}
      <div className="md:hidden px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-cream/70 uppercase mb-3 block">
            HOW IT WORKS
          </span>
          <h2
            className="font-serif font-normal text-cream tracking-tight mb-10"
            style={{ fontSize: 'clamp(32px, 7vw, 44px)' }}
          >
            {site.howItWorks.heading}
          </h2>
          <div className="space-y-12">
            {site.howItWorks.steps.map((step, i) => (
              <div key={i} className="bg-cream/5 rounded-2xl border border-cream/15 p-5">
                <div className="flex items-start gap-4 mb-5">
                  <span
                    className={`font-serif text-2xl font-normal px-2.5 py-0.5 rounded-lg border border-ink/20 ${stepAccents[i].badgeBg} ${stepAccents[i].badgeText} shrink-0`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-normal text-[#F6F3E4] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[#F6F3E4]/90 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="flex justify-center pt-2">
                  <PhoneMockup step={i} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[#F6F3E4]/70 text-xs italic">{site.howItWorks.ruleNote}</p>
        </div>
      </div>

      {/* Desktop: sticky scroll */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-2 gap-16 items-center">
            {/* Steps Left */}
            <div>
              <span className="text-xs font-bold tracking-widest text-cream/70 uppercase mb-3 block">
                HOW IT WORKS
              </span>
              <h2
                className="font-serif font-normal text-cream tracking-tight mb-12"
                style={{ fontSize: 'clamp(38px, 4vw, 56px)' }}
              >
                {site.howItWorks.heading}
              </h2>
              <div className="space-y-6">
                {site.howItWorks.steps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`block w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#F6F3E4]/15 border-[#F6F3E4]/40 shadow-sm'
                          : 'bg-transparent border-transparent opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-serif text-2xl font-bold px-3 py-1 rounded-lg border border-[#1C1B18]/30 ${stepAccents[i].badgeBg} ${stepAccents[i].badgeText} shrink-0`}
                        >
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-serif text-2xl font-normal text-[#F6F3E4] mb-1">
                            {step.title}
                          </h3>
                          <p className="text-[#F6F3E4]/90 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-8 text-[#F6F3E4]/70 text-xs italic">{site.howItWorks.ruleNote}</p>
            </div>

            {/* Phone mockup Right */}
            <div className="flex justify-center">
              <PhoneMockup step={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}