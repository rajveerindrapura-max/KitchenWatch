import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.3'],
  });

  return (
    <section id="problem" className="px-6 pt-6 pb-16 md:pt-8 md:pb-24">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        {/* Section label */}
        <Reveal>
          <p className="text-xs md:text-sm font-jakarta font-semibold text-blue uppercase tracking-widest mb-4 md:mb-5">
            {site.problem.sectionLabel}
          </p>
        </Reveal>

        {/* Scroll-linked word highlight paragraph */}
        <div
          className="font-jakarta font-bold text-ink leading-snug mb-12 md:mb-14"
          style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}
          aria-label={site.problem.highlightWords.join(' ')}
        >
          {site.problem.highlightWords.map((word, i) => (
            <ScrollWord
              key={i}
              word={word}
              index={i}
              total={site.problem.highlightWords.length}
              scrollProgress={scrollYProgress}
              disabled={shouldReduce ?? false}
            />
          ))}
        </div>

        {/* Pain points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border rounded-card overflow-hidden">
          {site.problem.painPoints.map((point, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`p-6 md:p-8 ${
                  i < site.problem.painPoints.length - 1
                    ? 'border-b sm:border-b-0 sm:border-r border-border'
                    : ''
                }`}
              >
                <p className="font-jakarta font-bold text-ink text-base mb-2">
                  {point.title}
                </p>
                <p className="text-sm text-ink-2 leading-relaxed">{point.desc}</p>
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
  const start = (index / total) * 0.6;
  const end = start + 0.25;

  const opacity = useTransform(scrollProgress, [start, end], [0.12, 1]);

  if (disabled) {
    return <span className="mr-[0.3em]">{word} </span>;
  }

  return (
    <motion.span
      style={{ opacity }}
      className="mr-[0.3em] inline-block"
    >
      {word}{' '}
    </motion.span>
  );
}