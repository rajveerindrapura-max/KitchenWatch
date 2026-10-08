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
import EmployeeScreen from './EmployeeScreen';
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
  const [employeePhase, setEmployeePhase] = useState<'idle' | 'stepped' | 'updated' | 'confirmed'>('idle');

  // Animated cursor state (for scenario 2)
  const [cursorPos, setCursorPos] = useState({ x: 40, y: 40, clicking: false, visible: false });

  // Subtle 3D tilt (max 3-4° for Apple-like gentle perspective)
  const [tilt, setTilt] = useState({ x: 2, y: -4 });
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
        setEmployeePhase('idle');
        setCursorPos({ x: 40, y: 40, clicking: false, visible: false });
      } else if (idx === 1) {
        setTransferPhase(shouldReduce ? 'recorded' : 'idle');
        setEmployeePhase('idle');
        setCursorPos(
          shouldReduce
            ? { x: 0, y: 0, clicking: false, visible: false }
            : { x: 60, y: 60, clicking: false, visible: true }
        );
      } else if (idx === 2) {
        setTransferPhase('idle');
        setEmployeePhase(shouldReduce ? 'confirmed' : 'idle');
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

    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    inactivityTimerRef.current = setTimeout(() => {
      if (!isHoveredRef.current && !isOffscreenRef.current) {
        setIsPlaying(true);
        progressStartTimeRef.current = Date.now();
      }
    }, RESUME_DELAY);
  }, [shouldReduce]);

  // Progress loop & scripted events
  useEffect(() => {
    if (!isPlaying || shouldReduce) return;

    progressStartTimeRef.current = Date.now() - progress * SCENARIO_DURATION;

    const tick = () => {
      const elapsed = Date.now() - progressStartTimeRef.current;
      const currentProgress = Math.min(1, elapsed / SCENARIO_DURATION);
      setProgress(currentProgress);

      // Scenario 2 scripted phases
      if (activeScenarioIndex === 1) {
        if (currentProgress >= 0.25 && currentProgress < 0.5) {
          setCursorPos({ x: 65, y: 72, clicking: false, visible: true });
        } else if (currentProgress >= 0.5 && currentProgress < 0.75) {
          setCursorPos({ x: 65, y: 72, clicking: true, visible: true });
          setTransferPhase('confirmed');
        } else if (currentProgress >= 0.75) {
          setCursorPos({ x: 65, y: 72, clicking: false, visible: false });
          setTransferPhase('recorded');
        } else {
          setTransferPhase('idle');
        }
      }

      // Scenario 3 scripted employee actions
      if (activeScenarioIndex === 2) {
        if (currentProgress >= 0.3 && currentProgress < 0.6) {
          setEmployeePhase('stepped');
        } else if (currentProgress >= 0.6 && currentProgress < 0.85) {
          setEmployeePhase('updated');
        } else if (currentProgress >= 0.85) {
          setEmployeePhase('confirmed');
        } else {
          setEmployeePhase('idle');
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

  // IntersectionObserver to pause when off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isOffscreenRef.current = !entry.isIntersecting;
          if (!entry.isIntersecting) {
            setIsPlaying(false);
          } else if (!shouldReduce && !isHoveredRef.current) {
            setIsPlaying(true);
            progressStartTimeRef.current = Date.now() - progress * SCENARIO_DURATION;
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [progress, shouldReduce]);

  // Subtle mouse parallax
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !sceneRef.current) return;
    const rect = sceneRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: 2 - yRatio * 4,
      y: -4 + xRatio * 5,
    });
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    setTilt({ x: 2, y: -4 });
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
    <section id="product" className="px-4 sm:px-6 py-20 md:py-28 overflow-hidden bg-bg border-b border-hairline" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              Live Product Demo
            </span>
            <h2
              className="font-sans font-semibold text-ink tracking-[-0.035em] mb-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
            >
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-secondary">
              {subheading}
            </p>
          </div>
        </Reveal>

        {/* 2-Column Desktop Grid / Stacked Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: 3 Scenario Tabs + Controls (~5/12) */}
          <div
            className="lg:col-span-5 flex flex-col gap-3.5 order-2 lg:order-1"
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
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden group focus-visible:outline-blue ${
                    isActive
                      ? 'bg-surface border-blue shadow-subtle ring-1 ring-blue/30'
                      : 'bg-surface/80 border-border hover:border-slate-300 hover:bg-surface'
                  }`}
                >
                  <div className="flex items-start gap-3.5 relative z-10">
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-lg shrink-0 transition-colors ${
                        isActive ? 'bg-blue text-white' : 'bg-[#F5F5F7] text-muted border border-border'
                      }`}
                    >
                      {sc.number}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="font-sans font-semibold text-base mb-1 text-ink"
                      >
                        {sc.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                        {sc.desc}
                      </p>
                    </div>
                  </div>

                  {/* Scenario Progress Bar */}
                  {isActive && !shouldReduce && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue/15">
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
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-[#F5F5F7] text-ink font-medium transition-all shadow-xs"
                    aria-label={isPlaying ? 'Pause scenario walkthrough' : 'Play scenario walkthrough'}
                  >
                    {isPlaying ? <Pause size={12} /> : <Play size={12} />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      resetScenarioState(activeScenarioIndex);
                      setIsPlaying(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-[#F5F5F7] text-ink font-medium transition-all shadow-xs"
                    aria-label="Replay current scenario"
                  >
                    <RotateCcw size={12} />
                    <span>Replay</span>
                  </button>
                </div>

                <span className="text-[11px] text-muted font-mono">
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

                {/* Scenario 3: Live Activity Stream (Employee updates on phone) */}
                {activeScenarioIndex === 2 && (
                  <ActivityScreen hasNewActivity={employeePhase === 'confirmed' || employeePhase === 'updated'} />
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
                    <EmployeeScreen
                      phase={employeePhase}
                      onManualUpdate={() => {
                        handleUserActivity();
                        setEmployeePhase('confirmed');
                      }}
                    />
                  ) : (
                    // Subtle background employee overview for Scenario 1 & 2
                    <div className="p-3 h-full flex flex-col justify-between bg-[#F5F5F7] text-[10px] font-sans">
                      <div>
                        <div className="flex items-center gap-1.5 pb-1.5 border-b border-border text-ink font-semibold">
                          <Smartphone size={11} className="text-blue" />
                          <span>Mobile Assistant</span>
                        </div>
                        <p className="text-[9px] text-muted mt-1.5 leading-relaxed">
                          Staff updates stock and wastage directly on their smartphone.
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-surface border border-border text-center shadow-xs">
                        <span className="font-semibold text-ink text-xs block">Outlet 1 Ready</span>
                        <span className="text-[9px] text-emerald-700">No app install required</span>
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
                  className="text-xs sm:text-sm font-sans font-medium text-secondary inline-flex items-center gap-2 bg-surface px-4 py-1.5 rounded-full border border-border shadow-xs"
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
