import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

function DashboardMiniVisual() {
  const outlets = [
    { name: 'Outlet 1 (Main Kitchen)', val: '₹1,42,000', pct: 80 },
    { name: 'Outlet 2 (Express Cafe)', val: '₹1,18,000', pct: 65 },
    { name: 'Outlet 3 (Cloud Unit)', val: '₹88,500', pct: 50 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-[#F5F5F7] border border-hairline">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted block">
              Stock Value by Outlet
            </span>
            <span className="text-lg sm:text-xl font-mono font-bold text-ink tabular-nums">
              ₹3,48,500
            </span>
          </div>
          <span className="text-[10px] font-medium text-blue bg-blue-tint px-2.5 py-0.5 rounded-full border border-blue/20">
            3 outlets active
          </span>
        </div>

        <div className="space-y-3 my-3">
          {outlets.map((item, i) => (
            <div key={item.name} className="space-y-1">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-secondary">{item.name}</span>
                <span className="text-ink font-mono font-semibold tabular-nums">{item.val}</span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-blue"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-hairline flex items-center justify-between text-[11px] text-muted">
        <span>142 total items tracked</span>
        <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
          Sync active
        </span>
      </div>
    </div>
  );
}

function LedgerMiniVisual() {
  const entries = [
    { role: 'Employee', action: 'Used Tomatoes', qty: '-2 kg', color: 'text-amber-600', dot: 'bg-amber-500' },
    { role: 'Manager', action: 'Received Cooking oil', qty: '+5 L', color: 'text-emerald-700', dot: 'bg-emerald-500' },
    { role: 'Employee', action: 'Wasted Bread', qty: '-8 pcs', color: 'text-rose-600', dot: 'bg-rose-500' },
  ];
  return (
    <div className="w-full space-y-2">
      {entries.map((e, i) => (
        <div key={i} className="flex items-center gap-2.5 text-xs p-2.5 rounded-xl bg-[#F5F5F7] border border-hairline">
          <div className={`w-2 h-2 rounded-full shrink-0 ${e.dot}`} />
          <span className="font-medium text-ink text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border">
            {e.role}
          </span>
          <span className="text-secondary text-xs truncate">{e.action}</span>
          <span className={`ml-auto font-mono font-semibold text-xs tabular-nums ${e.color}`}>
            {e.qty}
          </span>
        </div>
      ))}
    </div>
  );
}

function AlertMiniVisual() {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F5F5F7] border border-hairline w-full">
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
      </motion.div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-ink">Low-stock warning</p>
        <p className="text-[11px] text-amber-700 leading-tight truncate font-medium">
          Cooking oil at Outlet 2 (4 L left)
        </p>
      </div>
    </div>
  );
}

function ExpiryMiniVisual() {
  return (
    <div className="space-y-2 w-full bg-[#F5F5F7] p-3 rounded-xl border border-hairline">
      {[
        { label: 'Milk (2 days left)', pct: 28, color: 'bg-rose-500' },
        { label: 'Chicken (4 days left)', pct: 52, color: 'bg-amber-500' },
        { label: 'Paneer (8 days left)', pct: 85, color: 'bg-emerald-500' },
      ].map((item, i) => (
        <div key={i} className="space-y-1">
          <div className="flex justify-between text-[10px] text-muted font-medium">
            <span>{item.label}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${item.color}`}
              style={{ width: `${item.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TransferMiniVisual() {
  return (
    <div className="flex items-center gap-3 w-full p-3 rounded-xl bg-[#F5F5F7] border border-hairline">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shadow-xs">
          <span className="text-teal-700 text-xs font-semibold">O-1</span>
        </div>
        <span className="text-[10px] text-muted">Warehouse</span>
      </div>
      <div className="flex-1 relative h-1 bg-slate-200 rounded-full overflow-visible">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-600 shadow-xs"
          animate={{ left: ['0%', '85%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1], repeatDelay: 0.4 }}
        />
      </div>
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shadow-xs">
          <span className="text-teal-700 text-xs font-semibold">O-2</span>
        </div>
        <span className="text-[10px] text-muted">Branch</span>
      </div>
    </div>
  );
}

function WastageMiniVisual() {
  return (
    <div className="text-center w-full p-3 rounded-xl bg-[#F5F5F7] border border-hairline">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl font-mono font-bold text-rose-600 tabular-nums"
      >
        ₹4,200
      </motion.div>
      <p className="text-[10px] text-muted font-medium mt-0.5">Logged wastage this month</p>
    </div>
  );
}

function RolesMiniVisual() {
  const roles = [
    { label: 'Owner', desc: 'Full control', bg: 'bg-blue-tint text-blue border-blue/20' },
    { label: 'Manager', desc: 'Outlet level', bg: 'bg-teal-50 text-teal-700 border-teal-200/60' },
    { label: 'Employee', desc: 'Fast updates', bg: 'bg-slate-100 text-slate-700 border-slate-200' },
  ];
  return (
    <div className="flex gap-1.5 flex-wrap w-full">
      {roles.map((r) => (
        <div
          key={r.label}
          className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${r.bg}`}
        >
          {r.label}
        </div>
      ))}
    </div>
  );
}

function QRMiniVisual() {
  return (
    <div className="w-full flex items-center justify-center p-3 rounded-xl bg-[#F5F5F7] border border-hairline">
      <svg width="40" height="40" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="20" height="20" rx="3" stroke="#1D1D1F" strokeWidth="2.5" />
        <rect x="14" y="14" width="8" height="8" rx="1.5" fill="#1D1D1F" />
        <rect x="36" y="8" width="20" height="20" rx="3" stroke="#1D1D1F" strokeWidth="2.5" />
        <rect x="42" y="14" width="8" height="8" rx="1.5" fill="#1D1D1F" />
        <rect x="8" y="36" width="20" height="20" rx="3" stroke="#1D1D1F" strokeWidth="2.5" />
        <rect x="14" y="42" width="8" height="8" rx="1.5" fill="#1D1D1F" />
        <rect x="36" y="36" width="6" height="6" rx="1" fill="#1D1D1F" />
        <rect x="46" y="36" width="6" height="6" rx="1" fill="#1D1D1F" />
        <rect x="36" y="46" width="6" height="6" rx="1" fill="#1D1D1F" />
        <rect x="46" y="46" width="6" height="6" rx="1" fill="#1D1D1F" />
      </svg>
    </div>
  );
}

const miniVisuals: Record<string, React.ReactNode> = {
  dashboard: <DashboardMiniVisual />,
  ledger: <LedgerMiniVisual />,
  alerts: <AlertMiniVisual />,
  expiry: <ExpiryMiniVisual />,
  transfers: <TransferMiniVisual />,
  wastage: <WastageMiniVisual />,
  roles: <RolesMiniVisual />,
  qr: <QRMiniVisual />,
};

const sizeClasses: Record<string, string> = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-2',
  small: 'md:col-span-1',
};

export default function BentoGrid() {
  return (
    <section id="features" className="px-4 sm:px-6 py-20 md:py-28 bg-[#FBFBFD] border-b border-hairline">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-12 md:mb-16 max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              Operational Toolkit
            </span>
            <h2
              className="font-sans font-semibold text-ink tracking-[-0.035em] mb-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 54px)' }}
            >
              {site.features.heading}
            </h2>
            <p className="text-base sm:text-lg text-secondary">{site.features.subheading}</p>
          </div>
        </Reveal>

        {/* Bento Grid with White Surface Cards and 1px borders */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(190px,auto)]">
          {site.features.tiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.04} className={sizeClasses[tile.size]}>
              <TiltCard className="h-full rounded-2xl border border-border bg-surface shadow-subtle hover:shadow-float transition-all duration-300">
                <div className="h-full flex flex-col justify-between p-5 md:p-6">
                  {/* Mini visual */}
                  <div className="flex-1 flex items-center justify-start mb-4 min-h-[90px] w-full">
                    {miniVisuals[tile.id]}
                  </div>

                  {/* Tile copy */}
                  <div>
                    {'badge' in tile && tile.badge && (
                      <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#F5F5F7] text-secondary border border-border">
                        {tile.badge}
                      </span>
                    )}
                    <h3 className="font-sans font-semibold text-ink text-lg sm:text-xl tracking-tight mb-1">
                      {tile.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-secondary leading-relaxed">
                      {tile.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}