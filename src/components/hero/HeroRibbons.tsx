import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const sampleMovements = [
  'Outlet 1 sent Chicken to Outlet 2',
  'Cooking oil is running low (4 L left)',
  'Milk expires tomorrow at Outlet 1',
  'Basmati rice received at Outlet 3',
  'Tomatoes 3 kg logged as used',
  'Wastage logged: Milk ₹120 spoiled',
  'Stock transfer confirmed by Manager',
];

const itemsCycle = [
  { name: 'Chicken', stock: '24 kg', level: 85, status: 'Healthy stock' },
  { name: 'Cooking oil', stock: '4 L', level: 25, status: 'Low stock' },
  { name: 'Basmati rice', stock: '40 kg', level: 90, status: 'Healthy stock' },
  { name: 'Tomatoes', stock: '8 kg', level: 40, status: 'Needs attention' },
];

export default function HeroRibbons() {
  const shouldReduce = useReducedMotion();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // Cycle the center pill item every 4 seconds
  useEffect(() => {
    if (shouldReduce) return;
    const interval = setInterval(() => {
      setActiveItemIndex((prev) => (prev + 1) % itemsCycle.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [shouldReduce]);

  const currentItem = itemsCycle[activeItemIndex];

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] flex items-center justify-center overflow-hidden select-none pointer-events-none">
      {/* SVG Container for Curved Text Ribbons */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          {/* Circular loop path on the left */}
          <path
            id="circlePath"
            d="M 180, 200 a 140, 140 0 1, 0 280, 0 a 140, 140 0 1, 0 -280, 0"
          />

          {/* Sweeping diagonal wave path across the bottom */}
          <path
            id="wavePath"
            d="M -50, 310 C 250, 340 400, 260 620, 270 C 800, 280 950, 350 1100, 360"
          />

          {/* Upper gentle arc across top right */}
          <path
            id="topArcPath"
            d="M 450, 90 C 650, 60 820, 110 1050, 140"
          />
        </defs>

        {/* Circular Orbit Text Ribbon */}
        <text
          fill="#4B4A44"
          opacity="0.75"
          className="text-[12px] sm:text-[13px] font-figtree font-medium tracking-wider uppercase"
        >
          <textPath
            href="#circlePath"
            startOffset={shouldReduce ? '0%' : '0%'}
          >
            {shouldReduce ? (
              `${sampleMovements[0]} • ${sampleMovements[1]} • ${sampleMovements[2]} • `
            ) : (
              <animate
                attributeName="startOffset"
                from="0%"
                to="100%"
                dur="42s"
                repeatCount="indefinite"
              />
            )}
            {sampleMovements.join(' • ')} • {sampleMovements.join(' • ')}
          </textPath>
        </text>

        {/* Sweeping Diagonal Flowing Wave Text Ribbon */}
        <text
          fill="#1C1B18"
          opacity="0.88"
          className="text-[13px] sm:text-[14px] font-figtree font-semibold tracking-wide"
        >
          <textPath
            href="#wavePath"
            startOffset={shouldReduce ? '20%' : '0%'}
          >
            {shouldReduce ? (
              `${sampleMovements[1]} • ${sampleMovements[0]} • ${sampleMovements[3]} • ${sampleMovements[5]} • `
            ) : (
              <animate
                attributeName="startOffset"
                from="-30%"
                to="60%"
                dur="34s"
                repeatCount="indefinite"
              />
            )}
            {sampleMovements.slice(1).join('  —  ')}  —  {sampleMovements.join('  —  ')}
          </textPath>
        </text>

        {/* Upper Soft Arc Ribbon */}
        <text
          fill="#6B6A62"
          opacity="0.6"
          className="text-[11px] sm:text-[12px] font-figtree tracking-widest uppercase"
        >
          <textPath
            href="#topArcPath"
            startOffset={shouldReduce ? '10%' : '0%'}
          >
            {shouldReduce ? (
              `${sampleMovements[3]} • ${sampleMovements[4]} • `
            ) : (
              <animate
                attributeName="startOffset"
                from="0%"
                to="80%"
                dur="48s"
                repeatCount="indefinite"
              />
            )}
            {sampleMovements[2]} • {sampleMovements[3]} • {sampleMovements[4]} • {sampleMovements[6]}
          </textPath>
        </text>
      </svg>

      {/* Center Interactive Stock Pill (Inspired by the waveform pill in the reference) */}
      <div className="relative z-10 flex flex-col items-center mt-36 sm:mt-40 pointer-events-auto">
        {/* Floating animated label above pill */}
        <motion.span
          key={currentItem.name}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs sm:text-sm font-figtree font-bold text-[#1C1B18] mb-1.5"
        >
          {currentItem.name}
        </motion.span>

        {/* Capsule pill container */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FFFEF2] border-[1.5px] border-[#1C1B18] shadow-hard-sm">
          {/* Mini dynamic stock level bar */}
          <div className="w-16 sm:w-20 bg-[#F7F5E4] border border-[#1C1B18]/30 h-2.5 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${currentItem.level}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full rounded-full ${
                currentItem.level > 50
                  ? 'bg-[#2F6B3A]'
                  : currentItem.level > 30
                  ? 'bg-[#8A5A00]'
                  : 'bg-[#B3412A]'
              }`}
            />
          </div>

          {/* Stock quantity count */}
          <span className="text-xs font-figtree font-extrabold text-[#1C1B18] tabular-nums">
            {currentItem.stock}
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1B18]/40" />

          {/* Sample data indicator badge */}
          <span className="text-[10px] font-figtree font-semibold uppercase tracking-wider text-[#6B6A62]">
            Sample data
          </span>
        </div>
      </div>
    </div>
  );
}
