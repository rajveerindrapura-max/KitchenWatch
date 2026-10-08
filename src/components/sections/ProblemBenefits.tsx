import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { BookOpen, FileSpreadsheet, MessageCircle, ArrowRight, CheckCircle2, TrendingDown, Store } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';

export default function ProblemBenefits() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'start 0.2'],
  });

  return (
    <section
      id="problem"
      className="relative px-4 sm:px-6 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-cream via-coral-tint/40 to-blue-tint/30 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Top Problem Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-pill bg-coral-tint border border-coral/20 text-coral font-jakarta font-semibold text-xs tracking-wider uppercase mb-4">
              {site.problemBenefits.sectionLabel}
            </span>
          </Reveal>

          {/* Word-by-word scroll reveal */}
          <h2
            className="font-jakarta font-bold text-ink leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            aria-label={site.problemBenefits.problemStatement}
          >
            {site.problemBenefits.problemWords.map((word, i) => (
              <ScrollWord
                key={i}
                word={word}
                index={i}
                total={site.problemBenefits.problemWords.length}
                scrollProgress={scrollYProgress}
                disabled={shouldReduce ?? false}
              />
            ))}
          </h2>

          {/* The 3 Chaos Icons & Draining stock bar */}
          <Reveal delay={0.2}>
            <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-panel p-5 sm:p-7 shadow-sm max-w-2xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                How stock gets lost today
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="flex flex-col items-center p-3 rounded-card bg-cream/70 border border-amber/20 text-center">
                  <BookOpen className="text-amber mb-2" size={24} />
                  <span className="text-xs font-semibold text-ink">Notebook</span>
                  <span className="text-[11px] text-muted">Forgotten</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-card bg-emerald-tint/50 border border-emerald/20 text-center">
                  <FileSpreadsheet className="text-emerald mb-2" size={24} />
                  <span className="text-xs font-semibold text-ink">Spreadsheet</span>
                  <span className="text-[11px] text-muted">Outdated</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-card bg-coral-tint/60 border border-coral/20 text-center">
                  <MessageCircle className="text-coral mb-2" size={24} />
                  <span className="text-xs font-semibold text-ink">WhatsApp</span>
                  <span className="text-[11px] text-muted">Lost in chat</span>
                </div>
              </div>

              {/* Draining stock bar animation */}
              <div className="bg-bg rounded-lg p-3 border border-border/80">
                <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                  <span className="text-ink font-semibold">Tomatoes (Outlet 1)</span>
                  <span className="text-coral font-bold flex items-center gap-1">
                    <TrendingDown size={14} /> Critical: 2 kg left
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '85%' }}
                    whileInView={{ width: '12%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    className="h-full bg-coral rounded-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Transition divider to Benefits */}
        <div className="text-center my-14 md:my-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              The solution
            </span>
            <h3 className="font-jakarta font-bold text-ink text-2xl sm:text-3xl md:text-4xl">
              {site.problemBenefits.benefitsHeading}
            </h3>
          </Reveal>
        </div>

        {/* 4 Benefits with Micro-visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {site.problemBenefits.benefits.map((benefit, i) => (
            <Reveal key={benefit.id} delay={i * 0.1}>
              <div className="h-full flex flex-col justify-between bg-surface border border-border rounded-panel p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue tracking-wide uppercase font-jakarta">
                      0{i + 1}
                    </span>
                    <a
                      href={`#${benefit.targetId}`}
                      className="text-xs text-secondary hover:text-blue inline-flex items-center gap-1 font-medium transition-colors"
                    >
                      See details <ArrowRight size={12} />
                    </a>
                  </div>
                  <h4 className="font-jakarta font-bold text-ink text-lg sm:text-xl mb-1.5">
                    {benefit.heading}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {benefit.supporting}
                  </p>
                </div>

                {/* Live Micro-visual */}
                <div className="mt-auto pt-4 border-t border-border/70">
                  {benefit.visualType === 'bar-fill' && <LiveBarFill />}
                  {benefit.visualType === 'rupee-counter' && <LiveRupeeCounter />}
                  {benefit.visualType === 'transfer-packet' && <LiveTransferPacket />}
                  {benefit.visualType === 'outlet-toggle' && <LiveOutletToggle />}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollWord({
  word,
  index,
  total,
  scrollProgress,
  disabled,
}: {
  word: string;
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  disabled: boolean;
}) {
  const start = (index / total) * 0.7;
  const end = start + 0.25;
  const opacity = useTransform(scrollProgress, [start, end], [0.18, 1]);

  if (disabled) {
    return <span className="mr-[0.28em] inline-block">{word}</span>;
  }

  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

// Micro-visual 1: Filling stock bar
function LiveBarFill() {
  return (
    <div className="bg-bg rounded-card p-3.5 border border-border">
      <div className="flex justify-between items-center text-xs mb-2">
        <span className="font-semibold text-ink">Rice (Basmati)</span>
        <span className="font-bold text-emerald flex items-center gap-1">
          <CheckCircle2 size={13} /> 24 kg / 25 kg Healthy
        </span>
      </div>
      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '25%' }}
          whileInView={{ width: '96%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full bg-emerald rounded-full"
        />
      </div>
    </div>
  );
}

// Micro-visual 2: Rupee wastage counter rolling up
function LiveRupeeCounter() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 4200;
    const step = 70;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setVal(current);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-coral-tint/40 rounded-card p-3.5 border border-coral/20 flex items-center justify-between">
      <div>
        <p className="text-[11px] font-semibold text-coral uppercase tracking-wide">
          Month-to-date waste
        </p>
        <p className="text-xl font-jakarta font-bold text-coral">
          ₹{val.toLocaleString('en-IN')}
        </p>
      </div>
      <span className="text-xs bg-white text-secondary px-2.5 py-1 rounded-md border border-border shadow-2xs font-medium">
        5 items logged
      </span>
    </div>
  );
}

// Micro-visual 3: Packet travelling along drawn SVG path
function LiveTransferPacket() {
  return (
    <div className="bg-teal-tint/30 rounded-card p-3.5 border border-teal/20 relative">
      <div className="flex items-center justify-between text-xs font-semibold text-teal-800 mb-2">
        <span>Outlet 1 (Warehouse)</span>
        <span className="text-[11px] bg-teal text-white px-2 py-0.5 rounded-full">10 L Cooking oil</span>
        <span>Outlet 2</span>
      </div>
      <div className="relative h-6 flex items-center">
        <svg className="w-full h-2" fill="none">
          <line
            x1="0"
            y1="4"
            x2="100%"
            y2="4"
            stroke="#0D9488"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
        <motion.div
          animate={{ x: ['0%', '90%', '0%'] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="absolute w-3.5 h-3.5 bg-teal rounded-full shadow-sm ring-4 ring-teal/20"
        />
      </div>
    </div>
  );
}

// Micro-visual 4: Outlet switcher toggling
function LiveOutletToggle() {
  const [outlet, setOutlet] = useState<'all' | 'o1' | 'o2'>('all');

  return (
    <div className="bg-sky-tint/30 rounded-card p-3.5 border border-sky/20">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
          <Store size={14} className="text-blue" /> Selected Branch:
        </span>
        <div className="inline-flex bg-white rounded-lg p-0.5 border border-border text-[11px] font-medium">
          <button
            onClick={() => setOutlet('all')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'all' ? 'bg-blue text-white' : 'text-secondary hover:text-ink'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setOutlet('o1')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'o1' ? 'bg-blue text-white' : 'text-secondary hover:text-ink'
            }`}
          >
            O-1
          </button>
          <button
            onClick={() => setOutlet('o2')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'o2' ? 'bg-blue text-white' : 'text-secondary hover:text-ink'
            }`}
          >
            O-2
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs text-secondary font-jakarta font-semibold">
        <span>Stock value:</span>
        <span className="text-ink">
          {outlet === 'all' ? '₹3,48,500' : outlet === 'o1' ? '₹1,42,000' : '₹1,18,000'}
        </span>
      </div>
    </div>
  );
}
