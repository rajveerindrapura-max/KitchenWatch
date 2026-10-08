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
      className="relative px-4 sm:px-6 py-20 md:py-28 bg-gradient-to-b from-[#FFFEF2] via-[#FAD9C8]/35 to-[#FFFEF2] border-b border-[#1C1B18]/15"
    >
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        {/* Top Problem Header */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18">
          <Reveal>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FAD9C8] border-[1.5px] border-[#1C1B18] text-[#B3412A] font-figtree font-bold text-xs tracking-wider uppercase mb-5 shadow-hard-sm">
              {site.problemBenefits.sectionLabel}
            </span>
          </Reveal>

          {/* Word-by-word scroll reveal editorial heading */}
          <h2
            className="font-serif text-[#1C1B18] leading-[1.08] tracking-tight mb-8"
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
          <Reveal delay={0.2}>
            <div className="bg-[#FFFDF5] border-[1.5px] border-[#1C1B18] rounded-panel p-5 sm:p-7 shadow-hard-sm max-w-2xl mx-auto">
              <p className="text-xs font-figtree font-bold uppercase tracking-wider text-[#6B6A62] mb-4">
                How stock gets lost today
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="flex flex-col items-center p-3 rounded-card bg-[#FBEFB4] border-[1.5px] border-[#1C1B18] text-center shadow-hard-sm">
                  <BookOpen className="text-[#8A5A00] mb-1.5" size={22} />
                  <span className="text-xs font-figtree font-bold text-[#1C1B18]">Notebook</span>
                  <span className="text-[11px] text-[#4B4A44]">Forgotten</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-card bg-[#D9EAD3] border-[1.5px] border-[#1C1B18] text-center shadow-hard-sm">
                  <FileSpreadsheet className="text-[#2F6B3A] mb-1.5" size={22} />
                  <span className="text-xs font-figtree font-bold text-[#1C1B18]">Spreadsheet</span>
                  <span className="text-[11px] text-[#4B4A44]">Outdated</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-card bg-[#FAD9C8] border-[1.5px] border-[#1C1B18] text-center shadow-hard-sm">
                  <MessageCircle className="text-[#B3412A] mb-1.5" size={22} />
                  <span className="text-xs font-figtree font-bold text-[#1C1B18]">WhatsApp</span>
                  <span className="text-[11px] text-[#4B4A44]">Lost in chat</span>
                </div>
              </div>

              {/* Draining stock bar animation */}
              <div className="bg-[#F7F5E4] rounded-btn p-3 border border-[#1C1B18]/40">
                <div className="flex justify-between items-center text-xs mb-1.5 font-figtree">
                  <span className="text-[#1C1B18] font-bold">Tomatoes (Outlet 1)</span>
                  <span className="text-[#B3412A] font-extrabold flex items-center gap-1">
                    <TrendingDown size={14} /> Critical: 2 kg left
                  </span>
                </div>
                <div className="w-full bg-[#E5E0CB] h-3 rounded-full overflow-hidden border border-[#1C1B18]/30">
                  <motion.div
                    initial={{ width: '85%' }}
                    whileInView={{ width: '12%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-[#B3412A] rounded-full"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Transition divider to Benefits */}
        <div className="text-center my-14 md:my-20">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E9D8FD] border-[1.5px] border-[#1C1B18] text-[#5B3FA0] font-figtree font-bold text-xs tracking-wider uppercase mb-3 shadow-hard-sm">
              The solution
            </span>
            <h3 className="font-serif text-[#1C1B18] text-3xl sm:text-4xl md:text-5xl">
              {site.problemBenefits.benefitsHeading}
            </h3>
          </Reveal>
        </div>

        {/* 4 Benefits with Micro-visuals in flat pastel fills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefit 1: Sage fill */}
          <Reveal delay={0.05}>
            <div className="h-full flex flex-col justify-between bg-[#D9EAD3] border-[1.5px] border-[#1C1B18] rounded-panel p-6 sm:p-7 shadow-hard hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#2F6B3A] tracking-wider uppercase font-figtree">
                    01 • LIVE COUNT
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-[#2F6B3A] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Details <ArrowRight size={12} />
                  </a>
                </div>
                <h4 className="font-serif text-[#1C1B18] text-2xl sm:text-3xl mb-2">
                  {site.problemBenefits.benefits[0].heading}
                </h4>
                <p className="text-[#4B4A44] text-[15px] leading-relaxed mb-6 font-figtree">
                  {site.problemBenefits.benefits[0].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1C1B18]/20">
                <LiveBarFill />
              </div>
            </div>
          </Reveal>

          {/* Benefit 2: Peach fill */}
          <Reveal delay={0.1}>
            <div className="h-full flex flex-col justify-between bg-[#FAD9C8] border-[1.5px] border-[#1C1B18] rounded-panel p-6 sm:p-7 shadow-hard hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#B3412A] tracking-wider uppercase font-figtree">
                    02 • RUPEE WASTAGE
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-[#B3412A] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Details <ArrowRight size={12} />
                  </a>
                </div>
                <h4 className="font-serif text-[#1C1B18] text-2xl sm:text-3xl mb-2">
                  {site.problemBenefits.benefits[1].heading}
                </h4>
                <p className="text-[#4B4A44] text-[15px] leading-relaxed mb-6 font-figtree">
                  {site.problemBenefits.benefits[1].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1C1B18]/20">
                <LiveRupeeCounter />
              </div>
            </div>
          </Reveal>

          {/* Benefit 3: Soft Sky fill */}
          <Reveal delay={0.15}>
            <div className="h-full flex flex-col justify-between bg-[#D6E8F5] border-[1.5px] border-[#1C1B18] rounded-panel p-6 sm:p-7 shadow-hard hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#1F5C8A] tracking-wider uppercase font-figtree">
                    03 • TRANSFERS
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-[#1F5C8A] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Details <ArrowRight size={12} />
                  </a>
                </div>
                <h4 className="font-serif text-[#1C1B18] text-2xl sm:text-3xl mb-2">
                  {site.problemBenefits.benefits[2].heading}
                </h4>
                <p className="text-[#4B4A44] text-[15px] leading-relaxed mb-6 font-figtree">
                  {site.problemBenefits.benefits[2].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1C1B18]/20">
                <LiveTransferPacket />
              </div>
            </div>
          </Reveal>

          {/* Benefit 4: Lavender fill */}
          <Reveal delay={0.2}>
            <div className="h-full flex flex-col justify-between bg-[#E9D8FD] border-[1.5px] border-[#1C1B18] rounded-panel p-6 sm:p-7 shadow-hard hover:-translate-y-1 transition-transform">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#5B3FA0] tracking-wider uppercase font-figtree">
                    04 • MULTI-OUTLET
                  </span>
                  <a
                    href="#features"
                    className="text-xs text-[#5B3FA0] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Details <ArrowRight size={12} />
                  </a>
                </div>
                <h4 className="font-serif text-[#1C1B18] text-2xl sm:text-3xl mb-2">
                  {site.problemBenefits.benefits[3].heading}
                </h4>
                <p className="text-[#4B4A44] text-[15px] leading-relaxed mb-6 font-figtree">
                  {site.problemBenefits.benefits[3].supporting}
                </p>
              </div>
              <div className="mt-auto pt-4 border-t border-[#1C1B18]/20">
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
    <div className="bg-[#FFFDF5] rounded-card p-3.5 border-[1.5px] border-[#1C1B18] shadow-hard-sm">
      <div className="flex justify-between items-center text-xs mb-2 font-figtree">
        <span className="font-bold text-[#1C1B18]">Rice (Basmati)</span>
        <span className="font-bold text-[#2F6B3A] flex items-center gap-1">
          <CheckCircle2 size={13} /> 24 kg / 25 kg Healthy
        </span>
      </div>
      <div className="w-full bg-[#E5E0CB] h-2.5 rounded-full overflow-hidden border border-[#1C1B18]/30">
        <motion.div
          initial={{ width: '25%' }}
          whileInView={{ width: '96%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-[#2F6B3A] rounded-full"
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
    <div className="bg-[#FFFDF5] rounded-card p-3.5 border-[1.5px] border-[#1C1B18] shadow-hard-sm flex items-center justify-between">
      <div>
        <p className="text-[11px] font-figtree font-bold text-[#B3412A] uppercase tracking-wide">
          Month-to-date waste
        </p>
        <p className="text-xl font-figtree font-extrabold text-[#B3412A]">
          ₹{val.toLocaleString('en-IN')}
        </p>
      </div>
      <span className="text-xs bg-[#FAD9C8] text-[#B3412A] px-2.5 py-1 rounded-md border border-[#1C1B18]/40 font-bold font-figtree">
        5 items logged
      </span>
    </div>
  );
}

// Micro-visual 3: Packet travelling along drawn SVG path
function LiveTransferPacket() {
  return (
    <div className="bg-[#FFFDF5] rounded-card p-3.5 border-[1.5px] border-[#1C1B18] shadow-hard-sm">
      <div className="flex items-center justify-between text-xs font-bold text-[#1F5C8A] mb-2 font-figtree">
        <span>Outlet 1</span>
        <span className="text-[11px] bg-[#D6E8F5] text-[#1F5C8A] px-2 py-0.5 rounded-full border border-[#1C1B18]/30">
          10 L Cooking oil
        </span>
        <span>Outlet 2</span>
      </div>
      <div className="relative h-6 flex items-center">
        <svg className="w-full h-2" fill="none">
          <line
            x1="0"
            y1="4"
            x2="100%"
            y2="4"
            stroke="#1F5C8A"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
        <motion.div
          animate={{ x: ['0%', '88%', '0%'] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          className="absolute w-3.5 h-3.5 bg-[#1F5C8A] rounded-full border border-[#1C1B18]"
        />
      </div>
    </div>
  );
}

// Micro-visual 4: Outlet switcher toggling
function LiveOutletToggle() {
  const [outlet, setOutlet] = useState<'all' | 'o1' | 'o2'>('all');

  return (
    <div className="bg-[#FFFDF5] rounded-card p-3.5 border-[1.5px] border-[#1C1B18] shadow-hard-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-[#1C1B18] flex items-center gap-1.5 font-figtree">
          <Store size={14} className="text-[#5B3FA0]" /> Outlet View:
        </span>
        <div className="inline-flex bg-[#F7F5E4] rounded-lg p-0.5 border border-[#1C1B18]/30 text-[11px] font-figtree font-bold">
          <button
            onClick={() => setOutlet('all')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'all'
                ? 'bg-[#E9D8FD] text-[#1C1B18] border border-[#1C1B18]'
                : 'text-[#4B4A44] hover:text-[#1C1B18]'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setOutlet('o1')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'o1'
                ? 'bg-[#E9D8FD] text-[#1C1B18] border border-[#1C1B18]'
                : 'text-[#4B4A44] hover:text-[#1C1B18]'
            }`}
          >
            O-1
          </button>
          <button
            onClick={() => setOutlet('o2')}
            className={`px-2 py-0.5 rounded ${
              outlet === 'o2'
                ? 'bg-[#E9D8FD] text-[#1C1B18] border border-[#1C1B18]'
                : 'text-[#4B4A44] hover:text-[#1C1B18]'
            }`}
          >
            O-2
          </button>
        </div>
      </div>
      <div className="flex justify-between text-xs text-[#4B4A44] font-figtree font-bold">
        <span>Stock value:</span>
        <span className="text-[#1C1B18]">
          {outlet === 'all' ? '₹3,48,500' : outlet === 'o1' ? '₹1,42,000' : '₹1,18,000'}
        </span>
      </div>
    </div>
  );
}
