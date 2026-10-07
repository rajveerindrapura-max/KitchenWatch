import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

function DashboardMiniVisual() {
  const outlets = [
    { name: 'Outlet 1', val: '₹1,42,000', pct: 80, items: '58 items' },
    { name: 'Outlet 2', val: '₹1,18,000', pct: 65, items: '46 items' },
    { name: 'Outlet 3', val: '₹88,500', pct: 50, items: '38 items' },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-border/80">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[11px] font-jakarta font-bold uppercase tracking-wider text-slate-500 block">
              Stock Value by Outlet
            </span>
            <span className="text-base sm:text-lg font-jakarta font-extrabold text-ink tabular-nums">
              ₹3,48,500
            </span>
          </div>
          <span className="text-[9px] font-semibold text-blue bg-blue/10 px-2 py-0.5 rounded-full">
            3 outlets active
          </span>
        </div>

        <div className="space-y-3 my-2">
          {outlets.map((item, i) => (
            <div key={item.name} className="space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-semibold text-ink">{item.name}</span>
                <span className="font-bold text-ink tabular-nums">{item.val}</span>
              </div>
              <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full bg-blue"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between text-[10px] text-muted">
        <span>142 total items tracked</span>
        <span className="text-green-700 font-semibold bg-green-50 px-1.5 py-0.5 rounded">
          Sync verified
        </span>
      </div>
    </div>
  );
}

function LedgerMiniVisual() {
  const entries = [
    { role: 'Employee', action: 'Used Tomatoes', qty: '-2 kg', color: '#B45309' },
    { role: 'Manager', action: 'Received Cooking oil', qty: '+5 L', color: '#15803D' },
    { role: 'Employee', action: 'Wasted Bread', qty: '-8 pcs', color: '#B91C1C' },
  ];
  return (
    <div className="w-full space-y-2">
      {entries.map((e, i) => (
        <div key={i} className="flex items-center gap-2 text-[11px] p-1.5 rounded-lg bg-slate-50/60 border border-slate-100">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: e.color }} />
          <span className="font-semibold text-ink text-[10px] px-1.5 py-0.5 rounded bg-white border border-border">
            {e.role}
          </span>
          <span className="text-muted text-[11px] truncate">{e.action}</span>
          <span className="ml-auto font-bold text-[11px] tabular-nums" style={{ color: e.color }}>
            {e.qty}
          </span>
        </div>
      ))}
    </div>
  );
}

function AlertMiniVisual() {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl bg-amber-50/50 border border-amber-200/60 w-full">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0"
      >
        <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
      </motion.div>
      <div className="min-w-0">
        <p className="text-xs font-jakarta font-bold text-ink">Low-stock warning</p>
        <p className="text-[11px] text-amber-800 leading-tight truncate">
          Cooking oil at Outlet 2 is below minimum
        </p>
      </div>
    </div>
  );
}

function ExpiryMiniVisual() {
  return (
    <div className="space-y-1.5 w-full">
      {[
        { label: 'Milk (2 days left)', pct: 28, color: '#B91C1C' },
        { label: 'Chicken (4 days left)', pct: 52, color: '#B45309' },
        { label: 'Yogurt (9 days left)', pct: 85, color: '#15803D' },
      ].map((item, i) => (
        <div key={i} className="space-y-0.5">
          <div className="flex justify-between text-[10px] text-muted">
            <span>{item.label}</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${item.pct}%`, background: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function TransferMiniVisual() {
  return (
    <div className="flex items-center gap-3 w-full p-2 rounded-xl bg-slate-50/60 border border-border/70">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-blue flex items-center justify-center shadow-xs">
          <span className="text-white text-[10px] font-bold">01</span>
        </div>
        <span className="text-[9px] text-muted font-medium">Outlet 1</span>
      </div>
      <div className="flex-1 relative h-1.5 bg-slate-200 rounded-full overflow-visible">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-blue shadow-sm border border-white"
          animate={{ left: ['0%', '90%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.3 }}
        />
      </div>
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center shadow-xs">
          <span className="text-ink text-[10px] font-bold">02</span>
        </div>
        <span className="text-[9px] text-muted font-medium">Outlet 2</span>
      </div>
    </div>
  );
}

function WastageMiniVisual() {
  return (
    <div className="text-center w-full p-2.5 rounded-xl bg-red-50/40 border border-red-100">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="text-xl font-jakarta font-extrabold text-red-600 tabular-nums"
      >
        ₹2,840
      </motion.div>
      <p className="text-[10px] text-muted mt-0.5">This month's wastage cost</p>
    </div>
  );
}

function RolesMiniVisual() {
  const roles = [
    { label: 'Owner', desc: 'Full control', color: 'bg-blue text-white' },
    { label: 'Manager', desc: 'Outlet level', color: 'bg-sky text-slate-900 font-bold' },
    { label: 'Employee', desc: 'Floor updates', color: 'bg-slate-200 text-slate-700' },
  ];
  return (
    <div className="flex gap-1.5 flex-wrap w-full">
      {roles.map((r) => (
        <div
          key={r.label}
          className={`px-2.5 py-1 rounded-pill text-[11px] font-jakarta font-semibold ${r.color}`}
        >
          {r.label}
        </div>
      ))}
    </div>
  );
}

function QRMiniVisual() {
  return (
    <div className="flex items-center justify-center p-1">
      <svg width="54" height="54" viewBox="0 0 60 60" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" rx="3" fill="none" stroke="#2563EB" strokeWidth="2" />
        <rect x="8" y="8" width="12" height="12" rx="1" fill="#2563EB" />
        <rect x="34" y="2" width="24" height="24" rx="3" fill="none" stroke="#2563EB" strokeWidth="2" />
        <rect x="40" y="8" width="12" height="12" rx="1" fill="#2563EB" />
        <rect x="2" y="34" width="24" height="24" rx="3" fill="none" stroke="#2563EB" strokeWidth="2" />
        <rect x="8" y="40" width="12" height="12" rx="1" fill="#2563EB" />
        <rect x="34" y="34" width="6" height="6" rx="1" fill="#2563EB" />
        <rect x="44" y="34" width="6" height="6" rx="1" fill="#2563EB" />
        <rect x="34" y="44" width="6" height="6" rx="1" fill="#2563EB" />
        <rect x="44" y="44" width="6" height="6" rx="1" fill="#2563EB" />
        <rect x="54" y="34" width="4" height="4" rx="1" fill="#2563EB" />
        <rect x="54" y="52" width="4" height="6" rx="1" fill="#2563EB" />
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
    <section id="features" className="px-6 py-16 md:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-10 md:mb-12 max-w-3xl">
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
            >
              {site.features.heading}
            </h2>
            <p className="text-base sm:text-lg text-ink-2">{site.features.subheading}</p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(190px,auto)]">
          {site.features.tiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.05} className={sizeClasses[tile.size]}>
              <TiltCard className="h-full rounded-card border border-border bg-surface shadow-card overflow-hidden hover:shadow-float transition-shadow duration-300">
                <div className="h-full flex flex-col justify-between p-5 md:p-6">
                  {/* Mini visual with clean spacing */}
                  <div className="flex-1 flex items-center justify-start mb-3 min-h-[90px] w-full">
                    {miniVisuals[tile.id]}
                  </div>

                  {/* Tile copy */}
                  <div>
                    {'badge' in tile && tile.badge && (
                      <span className="inline-block mb-1.5 px-2.5 py-0.5 rounded-pill text-[10px] font-jakarta font-semibold bg-blue/10 text-blue">
                        {tile.badge}
                      </span>
                    )}
                    <h3 className="font-jakarta font-bold text-ink text-sm sm:text-base mb-1">
                      {tile.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">{tile.desc}</p>
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