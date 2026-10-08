import { Check, Sparkles, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

export default function PilotRoadmap() {
  const { heading, subheading, benefits, cta, timelineHeading, timeline, founder } = site.pilot;

  return (
    <section id="pilot" className="px-4 sm:px-6 py-20 md:py-28 bg-cream/50 border-b border-border/80">
      <div className="max-w-6xl mx-auto">
        {/* Pilot Program Box */}
        <div className="bg-gradient-to-br from-surface to-blue-tint/20 rounded-panel border border-border p-6 sm:p-10 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
                <Sparkles size={13} />
                Early Access Cohort
              </span>
              <h2
                className="font-jakarta font-bold text-ink tracking-tight mb-3"
                style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
              >
                {heading}
              </h2>
              <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                {subheading}
              </p>

              {/* Pilot Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-tint text-emerald flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-ink">{b.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a
                    href="#cta"
                    className="px-6 py-3 rounded-btn bg-blue text-white font-jakarta font-semibold text-sm hover:bg-blue-hover transition-colors shadow-sm inline-flex items-center gap-2"
                  >
                    <span>{cta}</span>
                    <ArrowRight size={15} />
                  </a>
                </MagneticButton>
                <span className="text-xs text-secondary flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald" /> Limited early onboarding slots
                </span>
              </div>
            </div>

            {/* Founder Note (Auto-rendered only if showFounder flag is enabled, otherwise clean trust badge) */}
            <div className="lg:col-span-5 bg-surface rounded-card border border-border p-5 sm:p-6 shadow-xs">
              {site.flags.showFounder ? (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-jakarta font-bold text-ink text-sm">{founder.name}</h4>
                      <p className="text-xs text-muted">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed italic">
                    "{founder.note}"
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-blue-tint text-blue mx-auto flex items-center justify-center mb-3">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-jakarta font-bold text-ink text-sm sm:text-base mb-1">
                    Direct Founder Partnership
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    Every pilot partner gets direct WhatsApp access to our product team and guided kitchen setup.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Roadmap: Now, Next, Later */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-jakarta font-bold text-ink text-2xl sm:text-3xl mb-1.5">
              {timelineHeading}
            </h3>
            <p className="text-xs text-muted">
              Clear commitments on what is built today and what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((phase, idx) => {
              const isNow = phase.phase === 'Now';
              const isNext = phase.phase === 'Next';
              return (
                <Reveal key={phase.phase} delay={idx * 0.1}>
                  <div
                    className={`h-full rounded-panel border p-6 flex flex-col justify-between ${
                      isNow
                        ? 'bg-surface border-emerald/40 shadow-xs'
                        : isNext
                        ? 'bg-surface border-blue/30'
                        : 'bg-slate-50/70 border-border'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border">
                        <span
                          className={`text-xs font-jakarta font-bold px-2.5 py-1 rounded-full ${
                            isNow
                              ? 'bg-emerald-tint text-emerald'
                              : isNext
                              ? 'bg-blue-tint text-blue'
                              : 'bg-slate-200/60 text-secondary'
                          }`}
                        >
                          Phase: {phase.phase}
                        </span>
                        <span className="text-xs font-medium text-muted">{phase.label}</span>
                      </div>

                      <ul className="space-y-2.5">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink">
                            {isNow ? (
                              <Check size={14} className="text-emerald shrink-0 mt-0.5" />
                            ) : (
                              <Clock size={14} className="text-muted shrink-0 mt-0.5" />
                            )}
                            <span className={!isNow ? 'text-secondary' : 'font-medium'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/60 text-[11px] text-muted">
                      {isNow
                        ? 'Production ready in all accounts'
                        : isNext
                        ? 'Targeted in current quarter'
                        : 'Scheduled on customer demand'}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}