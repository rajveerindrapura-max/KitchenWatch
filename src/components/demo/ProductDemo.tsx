import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type MouseEvent,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Play, Pause, RotateCcw, Smartphone, Laptop } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import LaptopFrame from './LaptopFrame';
import MiniPhoneFrame from './MiniPhoneFrame';
import DashboardScreen from './DashboardScreen';
import TransferScreen from './TransferScreen';
import WorkerScreen from './WorkerScreen';
import ActivityScreen from './ActivityScreen';
import AnimatedCursor from './AnimatedCursor';

const SCENARIO_DURATION = 7500; // 7.5 seconds per scenario
const RESUME_DELAY = 10000; // resume after 10s of inactivity

export default function ProductDemo() {
  const { heading, subheading, sampleDataBadge, scenarios } = site.productDemo;
  const shouldReduce = useReducedMotion();

  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!shouldReduce);
  const [progress, setProgress] = useState(0); // 0 to 1
  const [interactiveOutlet, setInteractiveOutlet] = useState<string>('All outlets');

  // Scripted phase state for Scenario 2 & 3
  const [transferPhase, setTransferPhase] = useState<'idle' | 'stepped' | 'confirmed' | 'recorded'>('idle');
  const [workerPhase, setWorkerPhase] = useState<'idle' | 'stepped' | 'updated' | 'confirmed'>('idle');

  // Animated cursor state (for scenario 2)
  const [cursorPos, setCursorPos] = useState({ x: 40, y: 40, clicking: false, visible: false });

  // 3D Tilt state
  const [tilt, setTilt] = useState({ x: 3, y: -6 });
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  // Timers & Inactivity
  const progressStartTimeRef = useRef<number>(Date.now());
  const rafIdRef = useRef<number | null>(null);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveredRef = useRef(false);
  const isOffscreenRef = useRef(false);

  const activeScenario = scenarios[activeScenarioIndex];

  // Reset internal states when switching scenarios
  const resetScenarioState = useCallback(
    (idx: number) => {
      setProgress(0);
      progressStartTimeRef.current = Date.now();

      if (idx === 0) {
        setTransferPhase('idle');
        setWorkerPhase('idle');
        setCursorPos({ x: 40, y: 40, clicking: false, visible: false });
      } else if (idx === 1) {
        setTransferPhase(shouldReduce ? 'recorded' : 'idle');
        setWorkerPhase('idle');
        setCursorPos(
          shouldReduce
            ? { x: 0, y: 0, clicking: false, visible: false }
            : { x: 60, y: 60, clicking: false, visible: true }
        );
      } else if (idx === 2) {
        setTransferPhase('idle');
        setWorkerPhase(shouldReduce ? 'confirmed' : 'idle');
        setCursorPos({ x: 0, y: 0, clicking: false, visible: false });
      }
    },
    [shouldReduce]
  );

  const switchScenario = useCallback(
    (index: number) => {
      setActiveScenarioIndex(index);
      resetScenarioState(index);
    },
    [resetScenarioState]
  );

  const nextScenario = useCallback(() => {
    setActiveScenarioIndex((prev) => {
      const nextIdx = (prev + 1) % scenarios.length;
      resetScenarioState(nextIdx);
      return nextIdx;
    });
  }, [scenarios.length, resetScenarioState]);

  // Handle user interaction pause & resume
  const handleUserActivity = useCallback(() => {
    if (shouldReduce) return;
    setIsPlaying(false);
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !isOffscreenRef.current) {
        setIsPlaying(true);
        progressStartTimeRef.current = Date.now();
      }
    }, RESUME_DELAY);
  }, [shouldReduce]);

  // Main animation / progress loop
  useEffect(() => {
    if (!isPlaying || shouldReduce) {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      return;
    }

    const tick = () => {
      const now = Date.now();
      const elapsed = now - progressStartTimeRef.current;
      const currentProgress = Math.min(1, elapsed / SCENARIO_DURATION);
      setProgress(currentProgress);

      // Scripted sequence for Scenario 2 (Transfers)
      if (activeScenarioIndex === 1) {
        if (currentProgress < 0.25) {
          setCursorPos({ x: 120, y: 140, clicking: false, visible: true });
          setTransferPhase('idle');
        } else if (currentProgress < 0.5) {
          setCursorPos({ x: 210, y: 190, clicking: currentProgress > 0.35 && currentProgress < 0.45, visible: true });
          if (currentProgress > 0.4) setTransferPhase('stepped');
        } else if (currentProgress < 0.75) {
          setCursorPos({ x: 380, y: 190, clicking: currentProgress > 0.65 && currentProgress < 0.72, visible: true });
          if (currentProgress > 0.68) setTransferPhase('confirmed');
        } else {
          setCursorPos({ x: 380, y: 260, clicking: false, visible: false });
          setTransferPhase('recorded');
        }
      }

      // Scripted sequence for Scenario 3 (Mobile Worker)
      if (activeScenarioIndex === 2) {
        if (currentProgress < 0.3) {
          setWorkerPhase('idle');
        } else if (currentProgress < 0.6) {
          setWorkerPhase('stepped');
        } else {
          setWorkerPhase('confirmed');
        }
      }

      if (currentProgress >= 1) {
        nextScenario();
      } else {
        rafIdRef.current = requestAnimationFrame(tick);
      }
    };

    rafIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isPlaying, activeScenarioIndex, nextScenario, shouldReduce]);

  // Pause when offscreen or tab hidden
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isOffscreenRef.current = !entry.isIntersecting;
        if (!entry.isIntersecting) {
          setIsPlaying(false);
        } else if (!isHoveredRef.current && !shouldReduce) {
          setIsPlaying(true);
          progressStartTimeRef.current = Date.now();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    const onVisibility = () => {
      if (document.hidden) {
        setIsPlaying(false);
      } else if (!isOffscreenRef.current && !isHoveredRef.current && !shouldReduce) {
        setIsPlaying(true);
        progressStartTimeRef.current = Date.now();
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [shouldReduce]);

  // Mouse tilt on desktop
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: 3 - yRatio * 5,
      y: -6 + xRatio * 6,
    });
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setTilt({ x: 3, y: -6 });
  };

  // Keyboard navigation for scenario tabs
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      switchScenario((activeScenarioIndex + 1) % scenarios.length);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      switchScenario((activeScenarioIndex - 1 + scenarios.length) % scenarios.length);
    }
  };

  return (
    <section id="product" className="px-6 py-16 md:py-24 overflow-hidden bg-bg" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
            >
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-ink-2">
              {subheading}
            </p>
          </div>
        </Reveal>

        {/* 2-Column Desktop Grid / Stacked Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: 3 Scenario Tabs + Controls (~5/12) */}
          <div
            className="lg:col-span-5 flex flex-col gap-3 order-2 lg:order-1"
            role="tablist"
            aria-label="Interactive workflow scenarios"
            onKeyDown={handleKeyDown}
          >
            {scenarios.map((sc, i) => {
              const isActive = activeScenarioIndex === i;
              return (
                <button
                  key={sc.id}
                  id={`scenario-tab-${sc.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`scenario-panel-${sc.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => {
                    handleUserActivity();
                    switchScenario(i);
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all relative overflow-hidden group focus-visible:outline-blue ${
                    isActive
                      ? 'bg-surface border-blue/40 shadow-card'
                      : 'bg-surface/60 border-border/70 hover:bg-surface hover:border-border'
                  }`}
                >
                  <div className="flex items-start gap-3.5 relative z-10">
                    <span
                      className={`font-jakarta font-bold text-sm sm:text-base px-2 py-0.5 rounded-md shrink-0 transition-colors ${
                        isActive ? 'bg-blue text-white' : 'bg-slate-100 text-muted group-hover:text-ink'
                      }`}
                    >
                      {sc.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-jakarta font-bold text-sm sm:text-base mb-1 transition-colors ${
                          isActive ? 'text-ink' : 'text-slate-700'
                        }`}
                      >
                        {sc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">
                        {sc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Scenario Progress Bar */}
                  {isActive && !shouldReduce && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue/10">
                      <div
                        className="h-full bg-blue transition-all duration-75"
                        style={{ width: `${progress * 100}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}

            {/* Play/Pause & Replay Controls */}
            {!shouldReduce && (
              <div className="flex items-center justify-between pt-2 px-1 text-xs text-muted">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsPlaying(!isPlaying);
                      if (!isPlaying) progressStartTimeRef.current = Date.now() - progress * SCENARIO_DURATION;
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-slate-50 text-ink font-medium transition-colors"
                    aria-label={isPlaying ? 'Pause scenario walkthrough' : 'Play scenario walkthrough'}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      resetScenarioState(activeScenarioIndex);
                      setIsPlaying(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-slate-50 text-ink font-medium transition-colors"
                    aria-label="Replay current scenario"
                  >
                    <RotateCcw size={13} />
                    <span>Replay</span>
                  </button>
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  {activeScenario.number} / 03
                </span>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Interactive Device Scene (~7/12) */}
          <div
            ref={sceneRef}
            className="lg:col-span-7 order-1 lg:order-2 relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              isHoveredRef.current = true;
              handleUserActivity();
            }}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Screen Reader Summary */}
            <div className="sr-only" aria-live="polite">
              Currently displaying {activeScenario.title}: {activeScenario.caption}
            </div>

            {/* 3D Tilted Scene Container */}
            <motion.div
              animate={{
                rotateY: shouldReduce ? 0 : tilt.y,
                rotateX: shouldReduce ? 0 : tilt.x,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Laptop Frame */}
              <LaptopFrame badge={sampleDataBadge}>
                {/* Scenario 1: Dashboard with Outlet Switcher */}
                {activeScenarioIndex === 0 && (
                  <DashboardScreen
                    selectedOutlet={interactiveOutlet}
                    onSelectOutlet={(outlet) => {
                      handleUserActivity();
                      setInteractiveOutlet(outlet);
                    }}
                    interactive
                  />
                )}

                {/* Scenario 2: Scripted Stock Transfer with Cursor */}
                {activeScenarioIndex === 1 && (
                  <div className="h-full relative">
                    <TransferScreen
                      phase={transferPhase}
                      onManualTransfer={() => {
                        handleUserActivity();
                        setTransferPhase('confirmed');
                      }}
                    />
                    <AnimatedCursor
                      x={cursorPos.x}
                      y={cursorPos.y}
                      isClicking={cursorPos.clicking}
                      visible={cursorPos.visible && !shouldReduce}
                    />
                  </div>
                )}

                {/* Scenario 3: Live Activity Stream (Worker updates on phone) */}
                {activeScenarioIndex === 2 && (
                  <ActivityScreen hasNewActivity={workerPhase === 'confirmed' || workerPhase === 'updated'} />
                )}
              </LaptopFrame>

              {/* Overlapping Phone Frame (Bottom-Right) */}
              <div
                className={`absolute -bottom-6 -right-2 sm:-right-4 md:-right-6 z-20 transition-all ${
                  activeScenarioIndex !== 2 ? 'hidden sm:block opacity-90' : 'block'
                }`}
                style={{
                  transform: 'translateZ(35px)',
                }}
              >
                <MiniPhoneFrame badge={sampleDataBadge}>
                  {activeScenarioIndex === 2 ? (
                    <WorkerScreen
                      phase={workerPhase}
                      onManualUpdate={() => {
                        handleUserActivity();
                        setWorkerPhase('confirmed');
                      }}
                    />
                  ) : (
                    // Subtle background worker overview for Scenario 1 & 2
                    <div className="p-3 h-full flex flex-col justify-between bg-slate-50/70 text-[10px]">
                      <div>
                        <div className="flex items-center gap-1.5 pb-1.5 border-b border-border text-ink font-semibold">
                          <Smartphone size={11} className="text-blue" />
                          <span>Mobile Assistant</span>
                        </div>
                        <p className="text-[9px] text-muted mt-1.5 leading-relaxed">
                          Staff updates stock and wastage directly on their smartphone.
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-surface border border-border text-center">
                        <span className="font-bold text-ink text-xs block">Outlet 1 Ready</span>
                        <span className="text-[9px] text-green-700">No app install required</span>
                      </div>
                    </div>
                  )}
                </MiniPhoneFrame>
              </div>
            </motion.div>

            {/* Synchronized Caption beneath device scene */}
            <div className="mt-8 text-center min-h-[30px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeScenario.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm font-jakarta font-medium text-slate-600 inline-flex items-center gap-2 bg-surface px-4 py-1.5 rounded-full border border-border shadow-xs"
                >
                  <Laptop size={14} className="text-blue shrink-0" />
                  <span>{activeScenario.caption}</span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
