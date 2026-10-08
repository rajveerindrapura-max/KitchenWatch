import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { BookOpen, FileSpreadsheet, MessageCircle, ChevronRight, CheckCircle2, TrendingDown, Store } from 'lucide-react';
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
      className="relative px-4 sm:px-6 py-20 md:py-28 bg-[#FBFBFD] border-b border-hairline overflow-hidden"
    >
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Top Problem Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-700 font-sans font-medium text-xs tracking-wide uppercase mb-4">
              {site.problemBenefits.sectionLabel}
            </span>
          </Reveal>

          {/* Word-by-word scroll reveal Apple headline */}
          <h2
            className="font-sans font-semibold text-ink leading-[1.12] tracking-[-0.035em] mb-8"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
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

          {/* 3 Chaos Cards & Draining stock bar */}
          <Reveal delay={0.15}>
            <div className="bg-surface border border-border rounded-2xl p-5 sm:p-7 shadow-subtle max-w-2xl mx-auto text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4 text-center">
                How stock gets lost today
              </p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#F5F5F7] border border-hairline text-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center mb-2 shadow-xs">
                    <BookOpen className="text-amber-600" size={17} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-ink">Notebook</span>
                  <span className="text-[11px] text-muted">Forgotten</span>
                </div>
                <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#F5F5F7] border border-hairline text-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center mb-2 shadow-xs">
                    <FileSpreadsheet className="text-emerald-600" size={17} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-ink">Spreadsheet</span>
                  <span className="text-[11px] text-muted">Outdated</span>
                </div>
                <div className="flex flex-col items-center p-3.5 rounded-xl bg-[#F5F5F7] border border-hairline text-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center mb-2 shadow-xs">
                    <MessageCircle className="text-rose-600" size={17} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-ink">WhatsApp</span>
                  <span className="text-[11px] text-muted">Lost in chat</span>
                </div>
              </div>

              {/* Draining stock bar animation */}
              <div className="bg-[#F5F5F7] rounded-xl p-3.5 border border-hairline">
                <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                  <span className="text-ink font-semibold">Tomatoes (Outlet 1)</span>
                  <span className="text-rose-600 font-semibold flex items-center gap-1 font-mono text-[11px]">
                    <TrendingDown size={13} strokeWidth={1.5} /> Critical: 2 kg left
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '85%' }}
                    whileInView={{ width: '12%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-rose-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Transition divider to Benefits */}
        <div className="text-center my-14 md:my-20">
          <Reveal>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              The solution
            </span>
            <h3
              className="font-sans font-semibold text-ink tracking-[-0.03em] max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              {site.problemBenefits.benefitsHeading}
            </h3>
          </Reveal>
        </div>

        {/* 4 Benefits with Realistic Product UI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit 1: Live Count */}
          <Reveal delay={0.05}>
            <div className="h-full flex flex-col justify-between bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-float transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 uppercase tracking-wider">
                    01 • Live Count
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-blue hover:text-blueHover font-medium inline-flex items-center gap-0.5"
                  >
                    Details <ChevronRight size={13} strokeWidth={2} />
                  </a>
                </div>
                <h4 className="font-sans font-semibold text-ink text-xl sm:text-2xl tracking-tight mb-2">
                  {site.problemBenefits.benefits[0].heading}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {site.problemBenefits.benefits[0].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-hairline">
                <LiveBarFill />
              </div>
            </div>
          </Reveal>

          {/* Benefit 2: Rupee Wastage */}
          <Reveal delay={0.1}>
            <div className="h-full flex flex-col justify-between bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-float transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60 uppercase tracking-wider">
                    02 • Rupee Wastage
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-blue hover:text-blueHover font-medium inline-flex items-center gap-0.5"
                  >
                    Details <ChevronRight size={13} strokeWidth={2} />
                  </a>
                </div>
                <h4 className="font-sans font-semibold text-ink text-xl sm:text-2xl tracking-tight mb-2">
                  {site.problemBenefits.benefits[1].heading}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {site.problemBenefits.benefits[1].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-hairline">
                <LiveRupeeCounter />
              </div>
            </div>
          </Reveal>

          {/* Benefit 3: Transfers */}
          <Reveal delay={0.15}>
            <div className="h-full flex flex-col justify-between bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-float transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200/60 uppercase tracking-wider">
                    03 • Transfers
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-blue hover:text-blueHover font-medium inline-flex items-center gap-0.5"
                  >
                    Details <ChevronRight size={13} strokeWidth={2} />
                  </a>
                </div>
                <h4 className="font-sans font-semibold text-ink text-xl sm:text-2xl tracking-tight mb-2">
                  {site.problemBenefits.benefits[2].heading}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {site.problemBenefits.benefits[2].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-hairline">
                <LiveTransferPacket />
              </div>
            </div>
          </Reveal>

          {/* Benefit 4: Multi-Outlet */}
          <Reveal delay={0.2}>
            <div className="h-full flex flex-col justify-between bg-surface border border-border rounded-2xl p-6 sm:p-7 shadow-subtle hover:shadow-float transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue bg-blue-tint px-2.5 py-0.5 rounded-full border border-blue/20 uppercase tracking-wider">
                    04 • Multi-Outlet
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-blue hover:text-blueHover font-medium inline-flex items-center gap-0.5"
                  >
                    Details <ChevronRight size={13} strokeWidth={2} />
                  </a>
                </div>
                <h4 className="font-sans font-semibold text-ink text-xl sm:text-2xl tracking-tight mb-2">
                  {site.problemBenefits.benefits[3].heading}
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  {site.problemBenefits.benefits[3].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-hairline">
                <LiveOutletToggle />
              </div>
            </div>
          </Reveal>
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
  const opacity = useTransform(scrollProgress, [start, end], [0.22, 1]);

  if (disabled) {
    return <span className="mr-[0.25em] inline-block">{word}</span>;
  }

  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

// Micro-visual 1: Filling stock bar
function LiveBarFill() {
  return (
    <div className="bg-[#F5F5F7] rounded-xl p-3 border border-hairline">
      <div className="flex justify-between items-center text-xs mb-2">
        <span className="font-semibold text-ink">Basmati Rice</span>
        <span className="font-semibold text-emerald-700 flex items-center gap-1 font-mono text-[11px]">
          <CheckCircle2 size={12} strokeWidth={2} /> 24 / 25 kg
        </span>
      </div>
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '25%' }}
          whileInView={{ width: '96%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-emerald-600 rounded-full"
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
    const step = 80;
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
    <div className="bg-[#F5F5F7] rounded-xl p-3 border border-hairline flex items-center justify-between">
      <div>
        <p className="text-[10px] font-semibold text-muted uppercase tracking-wider">
          Month-to-date waste
        </p>
        <p className="text-lg font-mono font-bold text-rose-600">
          ₹{val.toLocaleString('en-IN')}
        </p>
      </div>
      <span className="text-xs bg-rose-50 text-rose-700 px-2.5 py-1 rounded-md border border-rose-200/60 font-medium">
        5 items logged
      </span>
    </div>
  );
}

// Micro-visual 3: Packet travelling along drawn SVG path
function LiveTransferPacket() {
  return (
    <div className="bg-[#F5F5F7] rounded-xl p-3 border border-hairline">
      <div className="flex items-center justify-between text-xs font-medium text-teal-800 mb-1.5">
        <span className="text-[11px]">Outlet 1</span>
        <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full border border-teal-200/60 font-mono">
          10 L Cooking oil
        </span>
        <span className="text-[11px]">Outlet 2</span>
      </div>
      <div className="relative h-5 flex items-center">
        <svg className="w-full h-1.5" fill="none">
          <line
            x1="0"
            y1="3"
            x2="100%"
            y2="3"
            stroke="#0F766E"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
        </svg>
        <motion.div
          animate={{ x: ['0%', '88%', '0%'] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="absolute w-2.5 h-2.5 bg-teal-600 rounded-full shadow-xs"
        />
      </div>
    </div>
  );
}

// Micro-visual 4: Outlet switcher toggling
function LiveOutletToggle() {
  const [outlet, setOutlet] = useState<'all' | 'o1' | 'o2'>('all');

  return (
    <div className="bg-[#F5F5F7] rounded-xl p-3 border border-hairline">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
          <Store size={13} strokeWidth={1.5} className="text-blue" /> View:
        </span>
        <div className="inline-flex bg-slate-200/70 rounded-lg p-0.5 text-[11px]">
          <button
            onClick={() => setOutlet('all')}
            className={`px-2 py-0.5 rounded-md transition-all ${
              outlet === 'all'
                ? 'bg-surface text-ink font-semibold shadow-xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setOutlet('o1')}
            className={`px-2 py-0.5 rounded-md transition-all ${
              outlet === 'o1'
                ? 'bg-surface text-ink font-semibold shadow-xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            O-1
          </button>
          <button
            onClick={() => setOutlet('o2')}
            className={`px-2 py-0.5 rounded-md transition-all ${
              outlet === 'o2'
                ? 'bg-surface text-ink font-semibold shadow-xs'
                : 'text-muted hover:text-ink'
            }`}
          >
            O-2
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs text-muted font-medium">
        <span>Stock value:</span>
        <span className="text-ink font-mono font-semibold">
          {outlet === 'all' ? '₹3,48,500' : outlet === 'o1' ? '₹1,42,000' : '₹1,18,000'}
        </span>
      </div>
    </div>
  );
}
