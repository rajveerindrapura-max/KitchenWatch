import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { site } from '../../content/site';

function PhoneMockup({ step }: { step: number }) {
  const screens = [
    // Step 1: setup
    <div key="setup" className="p-4 space-y-3">
      <p className="text-xs font-jakarta font-semibold text-blue">Add new item</p>
      <div className="space-y-2">
        {['Item name', 'Category', 'Minimum level'].map((label) => (
          <div key={label}>
            <p className="text-[10px] text-muted mb-0.5">{label}</p>
            <div className="h-7 bg-slate-100 rounded-lg border border-border" />
          </div>
        ))}
      </div>
      <div className="h-8 bg-blue rounded-lg flex items-center justify-center">
        <span className="text-[11px] text-white font-semibold">Save item</span>
      </div>
    </div>,
    // Step 2: employee update
    <div key="employee" className="p-4 space-y-3">
      <p className="text-xs font-jakarta font-semibold text-ink">Quick update</p>
      {['Tomatoes', 'Oil', 'Bread'].map((item, i) => (
        <div key={item} className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2.5 border border-border">
          <span className="text-xs font-semibold text-ink">{item}</span>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-slate-200 flex items-center justify-center text-[10px] font-bold text-muted">-</div>
            <span className="text-xs font-bold w-5 text-center">{[12, 8, 24][i]}</span>
            <div className="w-5 h-5 rounded bg-blue flex items-center justify-center text-[10px] font-bold text-white">+</div>
          </div>
        </div>
      ))}
    </div>,
    // Step 3: owner dashboard
    <div key="owner" className="p-4 space-y-3">
      <p className="text-xs font-jakarta font-semibold text-ink">All outlets</p>
      {['Outlet 1', 'Outlet 2', 'Outlet 3'].map((outlet, i) => (
        <div key={outlet} className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-amber-500' : 'bg-green-600'}`} />
          <span className="text-xs text-ink flex-1">{outlet}</span>
          <span className="text-[10px] font-bold text-muted">{[32, 8, 47][i]} items</span>
          {i === 1 && (
            <span className="text-[9px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-pill">Alert</span>
          )}
        </div>
      ))}
    </div>,
  ];

  return (
    <div
      className="relative bg-[#1a1a1a] rounded-[32px] mx-auto"
      style={{ width: '200px', height: '380px', border: '4px solid #333' }}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#1a1a1a] rounded-full" style={{ width: '80px', height: '18px' }} />
      <div className="absolute inset-[6px] rounded-[26px] overflow-hidden bg-bg">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="pt-6"
          >
            {screens[step]}
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
      const progress = Math.max(0, Math.min(1, (-rect.top) / (sectionH - viewportH)));

      const step = Math.min(2, Math.floor(progress * 3));
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduce]);

  return (
    <section id="how-it-works" className="bg-dark text-white">
      {/* Mobile: stacked */}
      <div className="md:hidden px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2
            className="font-jakarta font-bold text-white tracking-tight mb-12"
            style={{ fontSize: 'clamp(30px, 6vw, 48px)' }}
          >
            {site.howItWorks.heading}
          </h2>
          <div className="space-y-16">
            {site.howItWorks.steps.map((step, i) => (
              <div key={i}>
                <div className="flex items-start gap-5">
                  <span className="font-jakarta font-bold text-blue text-3xl leading-none mt-0.5 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-jakarta font-bold text-white text-xl mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <PhoneMockup step={i} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-white/40 text-sm italic">{site.howItWorks.ruleNote}</p>
        </div>
      </div>

      {/* Desktop: sticky scroll */}
      <div
        ref={sectionRef}
        className="hidden md:block relative"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 gap-20 items-center">
            {/* Steps */}
            <div>
              <h2
                className="font-jakarta font-bold text-white tracking-tight mb-16"
                style={{ fontSize: 'clamp(32px, 3.5vw, 52px)' }}
              >
                {site.howItWorks.heading}
              </h2>
              <div className="space-y-10">
                {site.howItWorks.steps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`block w-full text-left transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-5">
                        <span
                          className={`font-jakarta font-bold text-4xl leading-none mt-0.5 shrink-0 transition-colors duration-300 ${
                            isActive ? 'text-blue' : 'text-white/30'
                          }`}
                        >
                          {step.number}
                        </span>
                        <div>
                          <h3 className="font-jakarta font-bold text-white text-xl mb-2">
                            {step.title}
                          </h3>
                          <p className="text-white/60 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <p className="mt-10 text-white/30 text-sm italic">{site.howItWorks.ruleNote}</p>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <motion.div
                animate={{ rotateY: (activeStep - 1) * 6 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                style={{ transformPerspective: 800 }}
              >
                <PhoneMockup step={activeStep} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}