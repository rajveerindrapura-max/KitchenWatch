import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Tabs from '../ui/Tabs';

export default function WhoItsFor() {
  const [activeRole, setActiveRole] = useState('owner');
  const role = site.whoFor.roles.find((r) => r.id === activeRole)!;

  return (
    <Section id="who-its-for">
      {/* Heading */}
      <Reveal>
        <div className="mb-10 md:mb-12 max-w-2xl">
          <h2
            className="font-jakarta font-bold tracking-tight text-ink mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
          >
            {site.whoFor.heading}
          </h2>
          <p className="text-base sm:text-lg text-ink-2">
            Designed for real kitchen workflows, from neighborhood cafes to multi-brand commissary kitchens.
          </p>
        </div>
      </Reveal>

      {/* 5 Universal Audience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14 md:mb-16">
        {site.whoFor.audiences.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <div className="p-6 sm:p-7 rounded-card border border-border bg-surface shadow-xs h-full flex flex-col justify-between hover:border-slate-300 transition-colors">
              <div>
                <h3 className="font-jakarta font-bold text-ink text-base sm:text-lg mb-2">{a.title}</h3>
                <p className="text-xs sm:text-sm text-ink-2 leading-relaxed">{a.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue font-medium">
                <span>Included in all plans</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Role Tabs Section */}
      <Reveal>
        <div className="mb-8">
          <Tabs
            tabs={site.whoFor.roles.map((r) => ({ id: r.id, label: r.label }))}
            activeId={activeRole}
            onChange={setActiveRole}
          />
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          role="tabpanel"
          id={`tabpanel-${activeRole}`}
          aria-labelledby={`tab-${activeRole}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          <div>
            <h3 className="font-jakarta font-bold text-ink text-xl sm:text-2xl mb-2.5">{role.title}</h3>
            <p className="text-ink-2 text-sm sm:text-base leading-relaxed mb-6">{role.desc}</p>
            <ul className="space-y-2.5">
              {role.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-blue" strokeWidth={2.5} />
                  </span>
                  <span className="text-xs sm:text-sm text-ink leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clean Mockup */}
          <div className="bg-slate-50 rounded-card border border-border p-5 sm:p-6 min-h-[220px] flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-border/80">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue" />
                <span className="text-xs font-jakarta font-semibold text-ink">{role.label} View</span>
              </div>
              <span className="text-[10px] text-muted uppercase font-medium tracking-wider">
                Sample interface
              </span>
            </div>
            {role.capabilities.slice(0, 4).map((cap, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 bg-surface rounded-xl border border-border/80">
                <div className="w-6 h-6 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                  <Check size={13} className="text-blue" />
                </div>
                <span className="text-xs font-medium text-ink">{cap}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}