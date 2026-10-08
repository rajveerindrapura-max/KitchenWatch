import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown, Layers, Sparkles } from 'lucide-react';
import { site } from '../../content/site';

interface DashboardScreenProps {
  selectedOutlet?: string;
  onSelectOutlet?: (outlet: string) => void;
  interactive?: boolean;
}

function formatINR(val: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(val);
}

export default function DashboardScreen({
  selectedOutlet: controlledOutlet,
  onSelectOutlet,
  interactive = true,
}: DashboardScreenProps) {
  const scenarioData = site.productDemo.scenarios[0];
  const [internalOutlet, setInternalOutlet] = useState<string>('All outlets');

  const currentOutlet = controlledOutlet ?? internalOutlet;

  const handleSelect = (outlet: string) => {
    if (!interactive) return;
    setInternalOutlet(outlet);
    onSelectOutlet?.(outlet);
  };

  const stats =
    scenarioData.stats[currentOutlet as keyof typeof scenarioData.stats] ??
    scenarioData.stats['All outlets'];

  const allAttention = scenarioData.attentionItems;
  const items =
    currentOutlet === 'All outlets'
      ? allAttention
      : allAttention.filter((item) => item.outlet === currentOutlet);

  return (
    <div className="h-full flex flex-col p-3 sm:p-4 bg-slate-50/40 text-xs overflow-hidden select-none">
      {/* Top Bar: Title & Outlets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-border/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue" />
          <h4 className="font-jakarta font-bold text-ink text-sm sm:text-base">
            Inventory Overview
          </h4>
          <span className="text-[10px] text-muted font-medium hidden sm:inline">
            Live metrics
          </span>
        </div>

        {/* Outlet Switcher */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="inline-flex p-0.5 bg-slate-200/70 rounded-lg">
            {scenarioData.outlets.map((outletName) => {
              const active = currentOutlet === outletName;
              return (
                <button
                  key={outletName}
                  type="button"
                  onClick={() => handleSelect(outletName)}
                  disabled={!interactive}
                  className={`px-2 sm:px-2.5 py-1 rounded-md text-[11px] font-jakarta transition-all ${
                    active
                      ? 'bg-surface text-ink font-bold shadow-xs'
                      : 'text-muted hover:text-ink font-medium'
                  }`}
                >
                  {outletName}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* KPI Cards (Rupee Stock Value, Low Stock, Expiring, Wastage) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-2.5">
        {/* Total Value in Rupees */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs">
          <div className="flex items-center justify-between text-muted text-[10px] mb-1">
            <span>Stock value</span>
            <Layers size={11} className="text-blue" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={stats.stockValue}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-xs sm:text-sm font-jakarta font-extrabold text-ink tabular-nums"
            >
              {formatINR(stats.stockValue)}
            </motion.p>
          </AnimatePresence>
          <span className="text-[9px] text-emerald font-medium flex items-center gap-0.5">
            <Sparkles size={9} /> Total tracked
          </span>
        </div>

        {/* Low Stock Items */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs">
          <div className="flex items-center justify-between text-muted text-[10px] mb-1">
            <span>Low stock</span>
            <AlertCircle size={11} className="text-amber-500" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={stats.lowStock}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-xs sm:text-sm font-jakarta font-extrabold text-amber-700 tabular-nums"
            >
              {stats.lowStock} {stats.lowStock === 1 ? 'item' : 'items'}
            </motion.p>
          </AnimatePresence>
          <span className="text-[9px] text-amber-600 font-medium">Below minimum</span>
        </div>

        {/* Expiring Soon */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs">
          <div className="flex items-center justify-between text-muted text-[10px] mb-1">
            <span>Expiring soon</span>
            <Clock size={11} className="text-red-500" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={stats.expiring}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-xs sm:text-sm font-jakarta font-extrabold text-red-700 tabular-nums"
            >
              {stats.expiring} items
            </motion.p>
          </AnimatePresence>
          <span className="text-[9px] text-red-600 font-medium">Next 48 hours</span>
        </div>

        {/* Wastage */}
        <div className="p-2 sm:p-2.5 rounded-xl bg-surface border border-border/80 shadow-xs">
          <div className="flex items-center justify-between text-muted text-[10px] mb-1">
            <span>Wastage cost</span>
            <TrendingDown size={11} className="text-slate-500" />
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={stats.wastage}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              className="text-xs sm:text-sm font-jakarta font-extrabold text-ink tabular-nums"
            >
              {formatINR(stats.wastage)}
            </motion.p>
          </AnimatePresence>
          <span className="text-[9px] text-muted font-medium">Logged losses</span>
        </div>
      </div>

      {/* Needs Attention List */}
      <div className="flex-1 rounded-xl bg-surface border border-border/80 p-2 sm:p-2.5 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-border/60">
          <span className="text-[10px] font-jakarta font-bold uppercase tracking-wider text-muted">
            Needs Attention ({items.length})
          </span>
          <span className="text-[9px] text-muted">Auto-refreshed</span>
        </div>

        <div className="space-y-1.5 overflow-y-auto pr-0.5">
          <AnimatePresence initial={false}>
            {items.map((it, idx) => (
              <motion.div
                key={`${it.name}-${it.outlet}-${idx}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50/70 border border-slate-100 hover:border-border transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full border border-[#1C1B18]/40 ${
                      it.status === 'expiring' ? 'bg-[#B3412A]' : 'bg-[#8A5A00]'
                    }`}
                  />
                  <div>
                    <p className="font-figtree font-bold text-[11px] text-[#1C1B18]">{it.name}</p>
                    <p className="text-[9px] text-[#4B4A44]">{it.qty}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-[#4B4A44] px-1.5 py-0.5 rounded bg-[#F7F5E4] border border-[#1C1B18]/30 font-medium">
                    {it.outlet}
                  </span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold border border-[#1C1B18]/30 ${
                      it.status === 'expiring'
                        ? 'bg-[#FAD9C8] text-[#B3412A]'
                        : 'bg-[#FBEFB4] text-[#8A5A00]'
                    }`}
                  >
                    {it.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
