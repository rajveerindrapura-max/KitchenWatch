import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Building2, TrendingDown, ArrowRightLeft, Plus, Minus, Check } from 'lucide-react';

export default function HeroMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Soft subtle parallax (max 24px per spec)
  const dashboardY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [14, -14]);
  const phoneY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [24, -20]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pt-8 pb-12 sm:pb-16 select-none">
      {/* Sample data label */}
      <div className="flex justify-end mb-2 pr-2">
        <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-muted bg-white/70 px-2.5 py-0.5 rounded-full border border-border backdrop-blur-xs">
          Sample data
        </span>
      </div>

      {/* Main Desktop Dashboard Frame */}
      <motion.div
        style={{ y: dashboardY }}
        className="relative bg-white rounded-panel border border-border shadow-float overflow-hidden"
      >
        {/* Window Chrome Header */}
        <div className="px-5 py-3.5 bg-[#FBFBFD] border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EDEFF3] border border-[#D0D5DD]" />
            <div className="w-3 h-3 rounded-full bg-[#EDEFF3] border border-[#D0D5DD]" />
            <div className="w-3 h-3 rounded-full bg-[#EDEFF3] border border-[#D0D5DD]" />
            <span className="text-xs font-sans font-medium text-muted ml-3">
              KitchenWatch Central Dashboard
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-tint text-green text-[11px] font-medium border border-green/20">
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
              Live Sync
            </span>
            <div className="px-3 py-1 rounded-full bg-white border border-border text-xs font-sans text-ink font-medium flex items-center gap-1.5 shadow-subtle">
              <Building2 size={13} className="text-blue" />
              <span>All 3 Outlets</span>
            </div>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#FBFBFD] border border-border">
              <span className="text-[12px] font-sans text-muted block mb-1">Total Stock Value</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-ink font-mono tabular-nums">
                  ₹4,82,500
                </span>
                <span className="text-[11px] font-medium text-green bg-green-tint px-2 py-0.5 rounded-full">
                  Across 3 outlets
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBFBFD] border border-border">
              <span className="text-[12px] font-sans text-muted block mb-1">Tracked Raw Items</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-ink font-mono tabular-nums">
                  142
                </span>
                <span className="text-[11px] font-medium text-blue bg-blue-tint px-2 py-0.5 rounded-full">
                  100% active
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FBFBFD] border border-border">
              <span className="text-[12px] font-sans text-muted block mb-1">Low-Stock Alerts</span>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-amber font-mono tabular-nums">
                  2 items
                </span>
                <span className="text-[11px] font-medium text-amber bg-amber-tint px-2 py-0.5 rounded-full">
                  Reorder needed
                </span>
              </div>
            </div>
          </div>

          {/* Lower Grid: Low-Stock Warnings & Recent Movements Ledger */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left: Low Stock Alerts */}
            <div className="lg:col-span-5 p-4 rounded-xl bg-[#FBFBFD] border border-border space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
                  <TrendingDown size={14} className="text-amber" />
                  Attention Needed Today
                </span>
                <span className="text-[10px] text-muted">Minimum Limits</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Cooking oil (15L)', outlet: 'Outlet 1', level: '3 tins left', min: 'Min: 6 tins', badge: 'Critical' },
                  { name: 'Basmati rice (25kg)', outlet: 'Outlet 3', level: '1 bag left', min: 'Min: 4 bags', badge: 'Low' },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-lg bg-white border border-border flex items-center justify-between shadow-subtle"
                  >
                    <div>
                      <span className="text-xs font-medium text-ink block">{item.name}</span>
                      <span className="text-[10px] text-muted">{item.outlet} • {item.min}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber font-mono px-2 py-0.5 rounded bg-amber-tint">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stock Movements Ledger (JetBrains Mono tabular figures) */}
            <div className="lg:col-span-7 p-4 rounded-xl bg-[#FBFBFD] border border-border space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="text-xs font-semibold text-ink flex items-center gap-1.5">
                  <ArrowRightLeft size={14} className="text-blue" />
                  Recent Movements Ledger
                </span>
                <span className="text-[10px] text-muted">Role & Time Log</span>
              </div>

              <div className="space-y-2">
                {[
                  { item: 'Chicken breast', change: '+20 kg', type: 'Received', role: 'Manager', time: '12m ago', color: 'text-green' },
                  { item: 'Tomatoes', change: '-4 kg', type: 'Used', role: 'Employee', time: '28m ago', color: 'text-secondary' },
                  { item: 'Milk (1L)', change: '-3 pkts', type: 'Wasted (Expiry)', role: 'Employee', time: '1h ago', color: 'text-red' },
                  { item: 'Cooking oil', change: '2 tins', type: 'Outlet 1 → Outlet 2', role: 'Manager', time: '2h ago', color: 'text-teal' },
                ].map((entry, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white border border-border flex items-center justify-between text-xs shadow-subtle"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F5F5F7] text-secondary font-mono">
                        {entry.role}
                      </span>
                      <div>
                        <span className="font-medium text-ink block">{entry.item}</span>
                        <span className="text-[10px] text-muted">{entry.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`font-mono font-semibold text-xs ${entry.color}`}>
                        {entry.change}
                      </span>
                      <span className="text-[10px] text-muted block">{entry.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlapping Phone Mockup (Employee Updating Stock on Mobile) */}
      <motion.div
        style={{ y: phoneY }}
        className="absolute -bottom-8 -right-2 sm:-right-6 md:-right-8 w-[210px] sm:w-[230px] bg-white rounded-[28px] border border-border shadow-float p-2.5 z-30"
      >
        {/* Phone Speaker Notch */}
        <div className="w-14 h-3.5 bg-[#1D1D1F] rounded-full mx-auto mb-2" />

        {/* Screen Content */}
        <div className="bg-[#FBFBFD] rounded-[20px] p-3 border border-border text-xs space-y-2.5">
          <div className="flex items-center justify-between pb-1.5 border-b border-border">
            <div>
              <span className="text-[11px] font-semibold text-ink block">Quick Update</span>
              <span className="text-[9px] text-muted">Role: Employee</span>
            </div>
            <span className="text-[9px] font-medium text-green bg-green-tint px-1.5 py-0.5 rounded-full">
              Outlet 1
            </span>
          </div>

          <div className="p-2 rounded-lg bg-white border border-border shadow-subtle">
            <span className="text-[11px] font-semibold text-ink block">Tomatoes</span>
            <span className="text-[10px] text-muted block mb-1.5">In stock: 18 kg</span>

            <div className="flex items-center justify-between">
              <span className="text-[10px] text-secondary">Logged used:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-[#F5F5F7] flex items-center justify-center text-ink cursor-pointer">
                  <Minus size={10} />
                </span>
                <span className="font-mono font-bold text-ink text-xs px-1">3 kg</span>
                <span className="w-5 h-5 rounded bg-blue text-white flex items-center justify-center cursor-pointer">
                  <Plus size={10} />
                </span>
              </div>
            </div>
          </div>

          <div className="p-1.5 rounded-md bg-green-tint border border-green/20 text-[10px] text-green flex items-center gap-1">
            <Check size={11} strokeWidth={2.5} />
            <span>Updated in 3 seconds</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
