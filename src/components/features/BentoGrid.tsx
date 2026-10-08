import React from 'react';
import { motion } from 'framer-motion';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import TiltCard from '../ui/TiltCard';

function DashboardMiniVisual() {
  const outlets = [
    { name: 'Outlet 1', val: '₹1,42,000', pct: 80 },
    { name: 'Outlet 2', val: '₹1,18,000', pct: 65 },
    { name: 'Outlet 3', val: '₹88,500', pct: 50 },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-5 rounded-card bg-[#FFFDF5] border-[1.5px] border-[#1C1B18] shadow-hard-sm">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[10px] font-figtree font-bold uppercase tracking-wider text-[#6B6A62] block">
              Stock Value by Outlet
            </span>
            <span className="text-base sm:text-lg font-figtree font-extrabold text-[#1C1B18] tabular-nums">
              ₹3,48,500
            </span>
          </div>
          <span className="text-[9px] font-bold text-[#1F5C8A] bg-[#D6E8F5] px-2 py-0.5 rounded-full border border-[#1C1B18]/30">
            3 outlets active
          </span>
        </div>

        <div className="space-y-2.5 my-2">
          {outlets.map((item, i) => (
            <div key={item.name} className="space-y-1">
              <div className="flex items-center justify-between text-[11px] font-figtree">
                <span className="font-bold text-[#1C1B18]">{item.name}</span>
                <span className="font-extrabold text-[#1C1B18] tabular-nums">{item.val}</span>
              </div>
              <div className="w-full bg-[#E5E0CB] rounded-full h-2 overflow-hidden border border-[#1C1B18]/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-[#1F5C8A]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-[#1C1B18]/15 flex items-center justify-between text-[10px] text-[#4B4A44] font-figtree">
        <span>142 total items tracked</span>
        <span className="text-[#2F6B3A] font-bold bg-[#D9EAD3] px-1.5 py-0.5 rounded border border-[#1C1B18]/20">
          Sync verified
        </span>
      </div>
    </div>
  );
}

function LedgerMiniVisual() {
  const entries = [
    { role: 'Worker', action: 'Used Tomatoes', qty: '-2 kg', color: '#8A5A00' },
    { role: 'Manager', action: 'Received Cooking oil', qty: '+5 L', color: '#2F6B3A' },
    { role: 'Worker', action: 'Wasted Bread', qty: '-8 pcs', color: '#B3412A' },
  ];
  return (
    <div className="w-full space-y-1.5">
      {entries.map((e, i) => (
        <div key={i} className="flex items-center gap-2 text-[11px] p-2 rounded-btn bg-[#FFFDF5] border border-[#1C1B18]/30 shadow-hard-sm">
          <div className="w-2 h-2 rounded-full shrink-0 border border-[#1C1B18]/40" style={{ background: e.color }} />
          <span className="font-bold text-[#1C1B18] text-[10px] px-1.5 py-0.5 rounded bg-[#F7F5E4] border border-[#1C1B18]/30">
            {e.role}
          </span>
          <span className="text-[#4B4A44] text-[11px] truncate font-medium">{e.action}</span>
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
    <div className="flex items-center gap-3 p-2.5 rounded-btn bg-[#FFFDF5] border border-[#1C1B18]/30 shadow-hard-sm w-full">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-8 h-8 rounded-full bg-[#FBEFB4] border border-[#1C1B18] flex items-center justify-center shrink-0"
      >
        <div className="w-3 h-3 rounded-full bg-[#8A5A00]" />
      </motion.div>
      <div className="min-w-0 font-figtree">
        <p className="text-xs font-bold text-[#1C1B18]">Low-stock warning</p>
        <p className="text-[11px] text-[#8A5A00] leading-tight truncate font-medium">
          Cooking oil at Outlet 2 is low (4 L left)
        </p>
      </div>
    </div>
  );
}

function ExpiryMiniVisual() {
  return (
    <div className="space-y-1.5 w-full bg-[#FFFDF5] p-2.5 rounded-btn border border-[#1C1B18]/30 shadow-hard-sm">
      {[
        { label: 'Milk (2 days left)', pct: 28, color: '#B3412A' },
        { label: 'Chicken (4 days left)', pct: 52, color: '#8A5A00' },
        { label: 'Paneer (8 days left)', pct: 85, color: '#2F6B3A' },
      ].map((item, i) => (
        <div key={i} className="space-y-0.5 font-figtree">
          <div className="flex justify-between text-[10px] text-[#4B4A44]">
            <span className="font-semibold">{item.label}</span>
          </div>
          <div className="h-1.5 w-full bg-[#E5E0CB] rounded-full overflow-hidden border border-[#1C1B18]/20">
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
    <div className="flex items-center gap-2.5 w-full p-2.5 rounded-btn bg-[#FFFDF5] border border-[#1C1B18]/30 shadow-hard-sm">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-7 h-7 rounded-md bg-[#D6E8F5] border border-[#1C1B18] flex items-center justify-center">
          <span className="text-[#1F5C8A] text-[10px] font-bold">O-1</span>
        </div>
        <span className="text-[9px] text-[#4B4A44] font-bold">Warehouse</span>
      </div>
      <div className="flex-1 relative h-1.5 bg-[#E5E0CB] rounded-full overflow-visible border border-[#1C1B18]/20">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#1F5C8A] border border-[#1C1B18]"
          animate={{ left: ['0%', '85%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1], repeatDelay: 0.4 }}
        />
      </div>
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-7 h-7 rounded-md bg-[#D6E8F5] border border-[#1C1B18] flex items-center justify-center">
          <span className="text-[#1F5C8A] text-[10px] font-bold">O-2</span>
        </div>
        <span className="text-[9px] text-[#4B4A44] font-bold">Branch</span>
      </div>
    </div>
  );
}

function WastageMiniVisual() {
  return (
    <div className="text-center w-full p-2.5 rounded-btn bg-[#FFFDF5] border border-[#1C1B18]/30 shadow-hard-sm">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl font-figtree font-extrabold text-[#B3412A] tabular-nums"
      >
        ₹4,200
      </motion.div>
      <p className="text-[10px] text-[#4B4A44] font-medium mt-0.5">Logged wastage this month</p>
    </div>
  );
}

function RolesMiniVisual() {
  const roles = [
    { label: 'Owner', desc: 'Full control', bg: 'bg-[#E9D8FD] text-[#5B3FA0]' },
    { label: 'Manager', desc: 'Outlet level', bg: 'bg-[#D6E8F5] text-[#1F5C8A]' },
    { label: 'Worker', desc: 'Fast updates', bg: 'bg-[#F7F5E4] text-[#1C1B18]' },
  ];
  return (
    <div className="flex gap-1.5 flex-wrap w-full font-figtree">
      {roles.map((r) => (
        <div
          key={r.label}
          className={`px-2 py-1 rounded-md text-[10px] font-bold border border-[#1C1B18]/40 shadow-hard-sm ${r.bg}`}
        >
          {r.label}
        </div>
      ))}
    </div>
  );
}

function QRMiniVisual() {
  return (
    <div className="w-full flex items-center justify-center p-2 rounded-btn bg-[#FFFDF5] border border-[#1C1B18]/30 shadow-hard-sm">
      <svg width="44" height="44" viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="20" height="20" rx="2" stroke="#1C1B18" strokeWidth="2.5" />
        <rect x="14" y="14" width="8" height="8" rx="1" fill="#1C1B18" />
        <rect x="36" y="8" width="20" height="20" rx="2" stroke="#1C1B18" strokeWidth="2.5" />
        <rect x="42" y="14" width="8" height="8" rx="1" fill="#1C1B18" />
        <rect x="8" y="36" width="20" height="20" rx="2" stroke="#1C1B18" strokeWidth="2.5" />
        <rect x="14" y="42" width="8" height="8" rx="1" fill="#1C1B18" />
        <rect x="36" y="36" width="6" height="6" rx="1" fill="#1C1B18" />
        <rect x="46" y="36" width="6" height="6" rx="1" fill="#1C1B18" />
        <rect x="36" y="46" width="6" height="6" rx="1" fill="#1C1B18" />
        <rect x="46" y="46" width="6" height="6" rx="1" fill="#1C1B18" />
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

const tileBgStyles: Record<string, string> = {
  dashboard: 'bg-[#D9EAD3]', // Stock value -> sage
  ledger: 'bg-[#F7F5E4]', // Ledger -> paper
  alerts: 'bg-[#FBEFB4]', // Low stock -> butter
  expiry: 'bg-[#FBEFB4]', // Expiry -> butter
  transfers: 'bg-[#D6E8F5]', // Transfers -> sky
  wastage: 'bg-[#FAD9C8]', // Wastage -> peach
  roles: 'bg-[#E9D8FD]', // Roles -> lavender
  qr: 'bg-[#F7F5E4]', // QR -> paper
};

const sizeClasses: Record<string, string> = {
  large: 'md:col-span-2 md:row-span-2',
  medium: 'md:col-span-2',
  small: 'md:col-span-1',
};

export default function BentoGrid() {
  return (
    <section id="features" className="px-4 sm:px-6 py-20 md:py-28 bg-[#FFFEF2] border-b border-[#1C1B18]/15">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-12 md:mb-16 max-w-3xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9EAD3] border-[1.5px] border-[#1C1B18] text-[#2F6B3A] font-figtree font-bold text-xs tracking-wider uppercase mb-3 shadow-hard-sm">
              Operational Toolkit
            </span>
            <h2
              className="font-serif text-[#1C1B18] mb-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            >
              {site.features.heading}
            </h2>
            <p className="text-base sm:text-lg text-[#4B4A44] font-figtree">{site.features.subheading}</p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[minmax(190px,auto)]">
          {site.features.tiles.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.04} className={sizeClasses[tile.size]}>
              <TiltCard className={`h-full rounded-card border-[1.5px] border-[#1C1B18] ${tileBgStyles[tile.id] ?? 'bg-[#FFFDF5]'} shadow-hard-sm hover:shadow-hard transition-all`}>
                <div className="h-full flex flex-col justify-between p-5 md:p-6">
                  {/* Mini visual */}
                  <div className="flex-1 flex items-center justify-start mb-3 min-h-[90px] w-full">
                    {miniVisuals[tile.id]}
                  </div>

                  {/* Tile copy */}
                  <div>
                    {'badge' in tile && tile.badge && (
                      <span className="inline-block mb-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-figtree font-bold bg-[#FFFEF2] text-[#1C1B18] border border-[#1C1B18]">
                        {tile.badge}
                      </span>
                    )}
                    <h3 className="font-serif text-[#1C1B18] text-xl sm:text-2xl mb-1">
                      {tile.title}
                    </h3>
                    <p className="text-xs sm:text-[14px] text-[#4B4A44] leading-relaxed font-figtree">
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