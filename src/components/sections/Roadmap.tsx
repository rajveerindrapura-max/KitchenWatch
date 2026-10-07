import { motion } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  QrCode, 
  Smartphone, 
  MessageSquare, 
  Languages, 
  ArrowLeftRight, 
  ShieldCheck, 
  ArrowRight,
  Radio,
  Zap,
  Clock
} from 'lucide-react';
import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

export default function Roadmap() {
  return (
    <Section id="roadmap" className="bg-[#F8FAFC]">
      {/* Section Header */}
      <Reveal>
        <div className="max-w-2xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-blue/10 text-blue text-xs font-jakarta font-semibold tracking-wide uppercase mb-3">
            <Radio size={13} className="text-blue animate-pulse" />
            Product Trajectory
          </div>
          <h2
            className="font-jakarta font-bold tracking-tight text-ink mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
          >
            {site.roadmap.heading}
          </h2>
          <p className="text-ink-2 text-base sm:text-lg leading-relaxed">
            {site.roadmap.desc}
          </p>
        </div>
      </Reveal>

      {/* 3 Visual Roadmap Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14 md:mb-16">
        {/* Phase 1: Now (Available Today) */}
        <Reveal delay={0.1}>
          <div className="rounded-card bg-surface border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between h-full hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-emerald-50 text-emerald-700 font-jakarta font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Phase 01 • Available Today
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50/50 px-2 py-0.5 rounded">
                  Live
                </span>
              </div>

              <h3 className="font-jakarta font-bold text-ink text-xl mb-1.5">
                Core Operations Engine
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-6">
                Active multi-outlet inventory, automated tracking & audit ledger.
              </p>

              {/* Visual Micro-Widget 1: Live Sync Panel */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-jakarta font-semibold text-ink flex items-center gap-1.5">
                    <ArrowLeftRight size={13} className="text-blue" />
                    Inter-Outlet Stock Movement
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue/10 text-blue font-bold">
                    Active
                  </span>
                </div>
                
                {/* Transfer Graphic */}
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-surface border border-slate-200/70 text-xs">
                  <div className="text-left">
                    <p className="text-[9px] uppercase font-bold text-muted">From</p>
                    <p className="font-bold text-ink text-[11px]">Outlet 1</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center px-1">
                    <span className="text-[9px] text-blue font-semibold">10 L Oil</span>
                    <div className="w-full flex items-center gap-1">
                      <div className="h-0.5 w-full bg-blue/30 relative">
                        <motion.div 
                          className="absolute top-0 bottom-0 w-3 bg-blue rounded-full"
                          animate={{ left: ['0%', '80%', '0%'] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        />
                      </div>
                      <ArrowRight size={11} className="text-blue shrink-0" />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] uppercase font-bold text-muted">To</p>
                    <p className="font-bold text-ink text-[11px]">Outlet 2</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-muted">
                  <span className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-emerald-600" />
                    Audit logged with timestamp
                  </span>
                  <span className="font-mono font-bold text-ink">#TR-804</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-ink-2">
                {site.roadmap.items[0].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-emerald-700 stroke-[3]" />
                    </div>
                    <span className="text-ink font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
              <span>Ready for onboarding</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </Reveal>

        {/* Phase 2: Next (In Development) */}
        <Reveal delay={0.2}>
          <div className="rounded-card bg-surface border border-blue-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between h-full hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue to-sky" />
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue/10 text-blue font-jakarta font-bold text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue animate-pulse" />
                  Phase 02 • In Development
                </span>
                <span className="text-[11px] font-semibold text-blue bg-blue/5 px-2 py-0.5 rounded">
                  Q2 2025
                </span>
              </div>

              <h3 className="font-jakarta font-bold text-ink text-xl mb-1.5">
                Direct QR Ordering Suite
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-6">
                Zero-commission digital menu & customer table ordering.
              </p>

              {/* Visual Micro-Widget 2: QR Table Mockup */}
              <div className="bg-gradient-to-br from-blue/5 to-sky/10 border border-blue/20 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-jakarta font-semibold text-blue flex items-center gap-1.5">
                    <QrCode size={13} className="text-blue" />
                    Guest Scan & Order
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue text-white font-bold">
                    Table #04
                  </span>
                </div>

                {/* Mini Menu Item */}
                <div className="p-2.5 rounded-xl bg-surface border border-blue/15 shadow-xs flex items-center justify-between gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                    <Smartphone size={16} className="text-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-ink truncate">Cold Brew Coffee</p>
                    <p className="text-[10px] text-muted">₹180 • Direct checkout</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-blue/10 text-blue text-[10px] font-bold">
                    + Add
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-blue-700 font-medium">
                  <span className="flex items-center gap-1">
                    <Zap size={11} className="text-blue" />
                    No customer app download needed
                  </span>
                  <span className="font-bold text-[9px] bg-white px-1.5 py-0.5 rounded border border-blue/20">0% Comm</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-ink-2">
                {site.roadmap.items[1].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-blue stroke-[3]" />
                    </div>
                    <span className="text-ink font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue font-semibold">
              <span>Next feature release</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue" />
            </div>
          </div>
        </Reveal>

        {/* Phase 3: Later (Planned) */}
        <Reveal delay={0.3}>
          <div className="rounded-card bg-surface border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between h-full hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-slate-100 text-slate-700 font-jakarta font-bold text-xs">
                  <Clock size={12} className="text-slate-500" />
                  Phase 03 • Planned
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  Upcoming
                </span>
              </div>

              <h3 className="font-jakarta font-bold text-ink text-xl mb-1.5">
                Automations & Integrations
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-6">
                WhatsApp alerts, supplier links & multi-lingual kitchen staff mode.
              </p>

              {/* Visual Micro-Widget 3: WhatsApp Alert Bubble */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-jakarta font-semibold text-slate-800 flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-emerald-600" />
                    WhatsApp Stock Trigger
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    Automated
                  </span>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="p-2.5 rounded-xl bg-white border border-emerald-200/70 shadow-xs space-y-1">
                  <div className="flex items-center justify-between text-[9px] text-muted">
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      KitchenWatch Bot
                    </span>
                    <span>11:42 AM</span>
                  </div>
                  <p className="text-[11px] text-ink leading-tight">
                    <strong className="text-amber-600">Alert:</strong> Tomatoes below minimum level (4 kg) at Outlet 1.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1 text-[10px] text-muted">
                  <span className="flex items-center gap-1">
                    <Languages size={12} className="text-indigo-600" />
                    Hindi & Regional dialects
                  </span>
                  <span className="font-semibold text-ink bg-slate-200/70 px-1.5 py-0.5 rounded text-[9px]">EN / हिन्दी</span>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-2.5 text-xs text-ink-2">
                {site.roadmap.items[2].features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-slate-500 stroke-[3]" />
                    </div>
                    <span className="text-ink font-medium leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span>Co-designed with partners</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Early Access Pilot Invitation Card */}
      <Reveal>
        <div className="relative overflow-hidden rounded-card bg-gradient-to-br from-[#0B1220] via-[#0F1E3A] to-[#0A1124] border border-white/10 p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue/25 blur-3xl pointer-events-none"
            aria-hidden="true" 
          />
          <div 
            className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-sky/15 blur-3xl pointer-events-none"
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/10 border border-white/15 text-white text-xs font-jakarta font-semibold mb-3">
              <Sparkles size={13} className="text-amber-400" />
              Pilot Program • Early Access
            </div>
            <h3 className="font-jakarta font-bold text-white text-2xl sm:text-3xl mb-3 tracking-tight">
              {site.roadmap.earlyAccess.heading}
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5">
              {site.roadmap.earlyAccess.desc}
            </p>
            {/* Value bullets */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Check size={13} className="text-emerald-400 stroke-[3]" />
                Free 1-on-1 setup help
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={13} className="text-emerald-400 stroke-[3]" />
                Direct founder phone access
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={13} className="text-emerald-400 stroke-[3]" />
                Lock in lifetime early pricing
              </span>
            </div>
          </div>

          <div className="relative z-10 shrink-0">
            <MagneticButton>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-white text-slate-900 font-jakarta font-bold text-sm hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {site.roadmap.earlyAccess.cta}
                <ArrowRight size={16} />
              </a>
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}