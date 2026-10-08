import { Check, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

export default function PilotRoadmap() {
  const { heading, subheading, benefits, cta, timelineHeading, timeline, founder } = site.pilot;

  return (
    <section id="pilot" className="px-4 sm:px-6 py-20 md:py-28 bg-peach/20 border-b border-ink/20">
      <div className="max-w-6xl mx-auto">
        {/* Pilot Program Box */}
        <div className="bg-card rounded-2xl border-1.5 border-ink p-6 sm:p-10 shadow-hard-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
                EARLY ACCESS COHORT
              </span>
              <h2
                className="font-serif font-normal text-ink tracking-tight mb-3"
                style={{ fontSize: 'clamp(28px, 3.8vw, 48px)' }}
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
                    <span className="w-5 h-5 rounded-md bg-sage text-sage-ink border border-ink/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-ink">{b.title}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <a
                    href="#cta"
                    className="px-6 py-3 rounded-xl bg-lavender text-ink font-semibold text-sm border-2 border-ink shadow-hard-sm hover:shadow-hard transition-all inline-flex items-center gap-2 cursor-pointer active:translate-y-0.5"
                  >
                    <span>{cta}</span>
                    <ArrowRight size={15} />
                  </a>
                </MagneticButton>
                <span className="text-xs text-secondary flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-sage-ink" /> Limited early onboarding slots
                </span>
              </div>
            </div>

            {/* Founder Note / Trust Box */}
            <div className="lg:col-span-5 bg-paper rounded-2xl border-1.5 border-ink p-5 sm:p-6 shadow-xs">
              {site.flags.showFounder ? (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-ivory border border-ink/20 overflow-hidden">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-normal text-ink">{founder.name}</h4>
                      <p className="text-xs text-muted">{founder.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed italic">
                    "{founder.note}"
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-xl bg-sage text-sage-ink border border-ink/20 mx-auto flex items-center justify-center mb-3">
                    <ShieldCheck size={22} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-serif text-xl font-normal text-ink mb-1">
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
            <h3 className="font-serif font-normal text-ink text-2xl sm:text-3xl mb-1.5">
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
              const cardBg = isNow ? 'bg-sage' : isNext ? 'bg-lavender' : 'bg-paper';

              return (
                <Reveal key={phase.phase} delay={idx * 0.1}>
                  <div
                    className={`h-full rounded-2xl border-1.5 border-ink p-6 flex flex-col justify-between ${cardBg} shadow-hard-sm`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-ink/15">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-card border border-ink/20 text-ink">
                          Phase: {phase.phase}
                        </span>
                        <span className="text-xs font-semibold text-secondary">{phase.label}</span>
                      </div>

                      <ul className="space-y-2.5">
                        {phase.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink">
                            {isNow ? (
                              <Check size={14} className="text-sage-ink shrink-0 mt-0.5" strokeWidth={3} />
                            ) : (
                              <Clock size={14} className="text-secondary shrink-0 mt-0.5" />
                            )}
                            <span className={isNow ? 'font-medium' : 'text-secondary'}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-3 border-t border-ink/15 text-[11px] text-muted font-medium">
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