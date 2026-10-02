import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import BrowserFrame from './BrowserFrame';
import PhoneFrame from './PhoneFrame';

type Slide = (typeof site.carousel.slides)[number];

// Placeholder screen when image is missing
function PlaceholderScreen({ slide }: { slide: Slide }) {
  const colors: Record<string, string> = {
    dashboard: '#f0f7ff',
    inventory: '#f0fdf4',
    'item-details': '#fef9f0',
    transfers: '#f0f4ff',
    wastage: '#fff5f5',
    activity: '#f5f0ff',
    'worker-mobile': '#f0faf9',
    'qr-menu': '#fafaf0',
  };
  const bg = colors[slide.id] ?? '#f8fafc';

  return (
    <div
      className="w-full h-full flex flex-col p-4 gap-3"
      style={{ background: bg }}
      aria-hidden="true"
    >
      {/* Simulated nav bar */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-24 h-3 rounded bg-slate-200" />
        <div className="ml-auto w-16 h-3 rounded bg-blue/20" />
      </div>
      {/* Simulated content blocks */}
      {[...Array(slide.type === 'mobile' ? 4 : 3)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className="shrink-0 rounded"
            style={{
              width: slide.type === 'mobile' ? 40 : 52,
              height: slide.type === 'mobile' ? 40 : 52,
              background: `rgba(37,99,235,${0.08 + i * 0.04})`,
            }}
          />
          <div className="flex flex-col gap-1.5 flex-1">
            <div className="h-2.5 rounded bg-slate-200" style={{ width: `${65 + i * 8}%` }} />
            <div className="h-2 rounded bg-slate-100" style={{ width: `${45 + i * 5}%` }} />
          </div>
          <div
            className="shrink-0 w-12 h-5 rounded"
            style={{ background: i === 1 ? 'rgba(37,99,235,0.15)' : '#e2e8f0' }}
          />
        </div>
      ))}
      {slide.type === 'desktop' && (
        <>
          <div className="mt-1 h-0.5 bg-slate-100 rounded-full" />
          <div className="grid grid-cols-3 gap-2 mt-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-14 rounded-lg" style={{ background: '#e8edf5' }} />
            ))}
          </div>
        </>
      )}
      <div className="mt-auto text-center">
        <p className="text-xs font-jakarta font-semibold text-muted">{slide.title}</p>
      </div>
    </div>
  );
}

// Single slide with image + placeholder fallback
function SlideContent({ slide }: { slide: Slide }) {
  const [imgError, setImgError] = useState(false);
  const src = `/screens/${slide.file}`;

  const inner = imgError ? (
    <PlaceholderScreen slide={slide} />
  ) : (
    <img
      src={src}
      alt={`${slide.title} screen`}
      className="w-full h-full object-cover object-top"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );

  return slide.type === 'desktop' ? (
    <BrowserFrame>{inner}</BrowserFrame>
  ) : (
    <PhoneFrame>{inner}</PhoneFrame>
  );
}

const AUTOPLAY_MS = 5000;

export default function Carousel() {
  const slides = site.carousel.slides;
  const [current, setCurrent] = useState(0);
  const [_isDragging, setDragging] = useState(false);
  const shouldReduce = useReducedMotion();
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const focused = useRef(false);

  const go = useCallback(
    (index: number) => {
      setCurrent(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const prev = useCallback(() => go(current - 1), [current, go]);
  const next = useCallback(() => go(current + 1), [current, go]);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (shouldReduce) return;
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      if (!hovering.current && !focused.current) next();
    }, AUTOPLAY_MS);
  }, [next, shouldReduce]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
    };
  }, [current, startAutoplay]);

  // Page visibility
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) {
        if (autoplayRef.current) clearTimeout(autoplayRef.current);
      } else {
        startAutoplay();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, [startAutoplay]);

  // Keyboard
  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  }

  // Compute 3D transforms per slide
  function getSlideStyle(i: number) {
    const diff = i - current;
    const absD = Math.abs(diff);
    if (absD > 2) return null; // hide far slides

    if (shouldReduce) {
      return {
        opacity: i === current ? 1 : 0.4,
        scale: i === current ? 1 : 0.85,
        zIndex: 10 - absD,
        x: diff * (typeof window !== 'undefined' && window.innerWidth < 640 ? 260 : 360),
        rotateY: 0,
      };
    }

    const x = diff * (typeof window !== 'undefined' && window.innerWidth < 640 ? 230 : 340);
    const rotateY = diff < 0 ? 35 : diff > 0 ? -35 : 0;
    const scale = absD === 0 ? 1 : absD === 1 ? 0.82 : 0.68;
    const opacity = absD === 0 ? 1 : absD === 1 ? 0.6 : 0.25;
    const z = absD === 0 ? 0 : absD === 1 ? -60 : -120;

    return { x, rotateY, scale, opacity, zIndex: 10 - absD, translateZ: z };
  }

  return (
    <section id="features" className="px-6 py-[80px] md:py-[140px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center mb-16">
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-4"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
            >
              {site.carousel.heading}
            </h2>
            <p className="text-lg text-ink-2 max-w-xl mx-auto">{site.carousel.subheading}</p>
          </div>
        </Reveal>

        {/* Carousel */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Product screenshots"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => { hovering.current = true; }}
          onMouseLeave={() => { hovering.current = false; }}
          onFocus={() => { focused.current = true; }}
          onBlur={() => { focused.current = false; }}
          className="relative focus:outline-none"
          style={{ perspective: '1200px', perspectiveOrigin: 'center center' }}
        >
          {/* Track */}
          <div className="relative h-[340px] md:h-[480px] flex items-center justify-center">
            {slides.map((slide, i) => {
              const style = getSlideStyle(i);
              if (style === null) return null;

              const isCenter = i === current;

              return (
                <motion.div
                  key={slide.id}
                  animate={style}
                  transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                  className="absolute cursor-pointer"
                  style={{
                    width: slide.type === 'desktop' ? 'min(680px, 80vw)' : '240px',
                    height: slide.type === 'desktop' ? '400px' : '460px',
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => !isCenter && go(i)}
                  aria-label={`${slide.title}: ${slide.caption}${'comingSoon' in slide && slide.comingSoon ? ' (Coming soon)' : ''}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-hidden={!isCenter}
                  drag={isCenter ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragStart={() => setDragging(true)}
                  onDragEnd={(_, info) => {
                    setDragging(false);
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                >
                  {/* Coming soon badge */}
                  {'comingSoon' in slide && slide.comingSoon && isCenter && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-blue text-white text-xs font-jakarta font-semibold rounded-pill shadow">
                      Coming soon
                    </div>
                  )}
                  <SlideContent slide={slide} />
                </motion.div>
              );
            })}
          </div>

          {/* Caption */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="text-center mt-8 h-14"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-jakarta font-bold text-ink text-base mb-1">
                  {slides[current].title}
                </p>
                <p className="text-sm text-ink-2">{slides[current].caption}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-border shadow-card flex items-center justify-center text-ink hover:bg-slate-50 transition-colors z-20"
            style={{ marginLeft: '-24px' }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-border shadow-card flex items-center justify-center text-ink hover:bg-slate-50 transition-colors z-20"
            style={{ marginRight: '-24px' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Slide indicators">
          {slides.map((slide, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              onClick={() => go(i)}
              className="transition-all duration-300"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 h-2 bg-blue'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}