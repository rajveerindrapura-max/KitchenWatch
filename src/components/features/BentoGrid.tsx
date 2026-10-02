import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

// Mini-visual components for each bento tile

function DashboardMiniVisual() {
  return (
    <div className="w-full p-4 rounded-xl bg-slate-50 border border-border">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-jakarta font-semibold text-muted">All outlets</div>
        <div className="flex gap-1">
          {['#2563EB', '#38BDF8', '#93c5fd'].map((c, i) => (
            <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
      {['Outlet A', 'Outlet B', 'Outlet C'].map((name, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <div className="text-[10px] text-muted w-14 shrink-0">{name}</div>
          <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${[78, 55, 91][i]}%` }}
              transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
              className="h-full rounded-full bg-blue"
            />
          </div>
          <div className="text-[10px] font-semibold text-ink w-6 text-right">
            {[78, 55, 91][i]}%
          </div>
        </div>
      ))}
    </div>
  );
}

function LedgerMiniVisual() {
  const entries = [
    { user: 'Ravi', action: 'Updated', item: 'Tomatoes', qty: '-2 kg', color: '#B45309' },
    { user: 'Priya', action: 'Transfer', item: 'Oil', qty: '+5 L', color: '#15803D' },
    { user: 'Sami', action: 'Wastage', item: 'Bread', qty: '-8 pcs', color: '#B91C1C' },
  ];
  return (
    <div className="w-full space-y-2">
      {entries.map((e, i) => (
        <div key={i} className="flex items-center gap-2 text-[11px]">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: e.color }} />
          <span className="font-semibold text-ink">{e.user}</span>
          <span className="text-muted">{e.action} {e.item}</span>
          <span className="ml-auto font-semibold" style={{ color: e.color }}>{e.qty}</span>
        </div>
      ))}
    </div>
  );
}

function AlertMiniVisual() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0"
      >
        <div className="w-4 h-4 rounded-full bg-amber-500" />
      </motion.div>
      <div>
        <p className="text-xs font-jakarta font-bold text-ink">Low stock alert</p>
        <p className="text-[11px] text-muted">Butter — Outlet B below minimum</p>
      </div>
    </div>
  );
}

function ExpiryMiniVisual() {
  return (
    <div className="space-y-2">
      {['Cream (2 days)', 'Yogurt (4 days)', 'Cheese (9 days)'].map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="h-1.5 rounded-full"
            style={{
              width: `${[28, 52, 85][i]}%`,
              background: ['#B91C1C', '#B45309', '#15803D'][i],
            }}
          />
          <span className="text-[10px] text-muted whitespace-nowrap">{label}</span>
        </div>
      ))}
    </div>
  );
}

function TransferMiniVisual() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-lg bg-blue flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">A</span>
        </div>
        <span className="text-[9px] text-muted">Andheri</span>
      </div>
      <div className="flex-1 relative h-1 bg-slate-200 rounded-full overflow-visible">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue shadow-sm"
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="w-8 h-8 rounded-lg bg-slate-100 border border-border flex items-center justify-center">
          <span className="text-ink text-[10px] font-bold">B</span>
        </div>
        <span className="text-[9px] text-muted">Bandra</span>
      </div>
    </div>
  );
}

function WastageMiniVisual() {
  return (
    <div className="text-center">
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="text-xl font-jakarta font-bold text-red-600"
      >
        ₹2,840
      </motion.div>
      <p className="text-[10px] text-muted mt-0.5">This month's wastage cost</p>
    </div>
  );
}

function RolesMiniVisual() {
  const roles = [
    { label: 'Owner', color: '#2563EB' },
    { label: 'Manager', color: '#38BDF8' },
    { label: 'Worker', color: '#94a3b8' },
  ];
  return (
    <div className="flex gap-2 flex-wrap">
      {roles.map((r) => (
        <div
          key={r.label}
          className="px-2.5 py-1 rounded-pill text-[11px] font-jakarta font-semibold text-white"
          style={{ background: r.color }}
        >
          {r.label}
        </div>
      ))}
    </div>
  );
}

function QRMiniVisual() {
  return (
    <div className="flex items-center justify-center">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true">
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
    <section id="features" className="px-6 py-[80px] md:py-[140px] bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-4"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
            >
              {site.features.heading}
            </h2>
            <p className="text-lg text-ink-2">{site.features.subheading}</p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {site.features.tiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.07} className={sizeClasses[tile.size]}>
              <TiltCard className="h-full rounded-card border border-border bg-surface shadow-card overflow-hidden hover:shadow-float transition-shadow duration-300">
                <div className="h-full flex flex-col p-6 md:p-7">
                  {/* Mini visual */}
                  <div className="flex-1 flex items-center justify-start mb-4 min-h-[80px]">
                    {miniVisuals[tile.id]}
                  </div>
                  {/* Tile info */}
                  <div>
                    {'badge' in tile && tile.badge && (
                      <span className="inline-block mb-2 px-2.5 py-0.5 rounded-pill text-[11px] font-jakarta font-semibold bg-blue/10 text-blue">
                        {tile.badge}
                      </span>
                    )}
                    <h3 className="font-jakarta font-bold text-ink text-base mb-1.5">
                      {tile.title}
                    </h3>
                    <p className="text-sm text-ink-2 leading-relaxed">{tile.desc}</p>
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