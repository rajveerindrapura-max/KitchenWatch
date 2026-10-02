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
        <h2
          className="font-jakarta font-bold tracking-tight text-ink mb-16 max-w-2xl"
          style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
        >
          {site.whoFor.heading}
        </h2>
      </Reveal>

      {/* Audience cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {site.whoFor.audiences.map((a, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-7 rounded-card border border-border bg-surface h-full">
              <h3 className="font-jakarta font-bold text-ink text-lg mb-2">{a.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Role tabs */}
      <Reveal>
        <div className="mb-10">
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          role="tabpanel"
          id={`tabpanel-${activeRole}`}
          aria-labelledby={`tab-${activeRole}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <h3 className="font-jakarta font-bold text-ink text-2xl mb-3">{role.title}</h3>
            <p className="text-ink-2 leading-relaxed mb-7">{role.desc}</p>
            <ul className="space-y-3">
              {role.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-blue" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-ink leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className="bg-slate-50 rounded-card border border-border p-6 min-h-[200px] flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue" />
              <span className="text-xs font-jakarta font-semibold text-muted">{role.label} view</span>
            </div>
            {role.capabilities.slice(0, 4).map((cap, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-border">
                <div className="w-7 h-7 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-blue" />
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