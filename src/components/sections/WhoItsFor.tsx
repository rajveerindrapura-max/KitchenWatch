import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Users, Building2, Coffee, UtensilsCrossed, Cake, Hotel } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import Tabs from '../ui/Tabs';

const audienceIcons = [Coffee, Building2, UtensilsCrossed, Cake, Hotel];

export default function WhoItsFor() {
  const [activeRole, setActiveRole] = useState<'owner' | 'manager' | 'worker'>('owner');
  const role = site.whoItsFor.roles.find((r) => r.id === activeRole) ?? site.whoItsFor.roles[0];

  return (
    <section id="who-its-for" className="px-4 sm:px-6 py-20 md:py-28 bg-gradient-to-b from-sky-tint/40 to-surface border-b border-border/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-sky-tint border border-sky/30 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <Users size={13} />
              Tailored For Hospitality
            </span>
            <h2
              className="font-jakarta font-bold text-ink tracking-tight mb-3"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              {site.whoItsFor.heading}
            </h2>
            <p className="text-base text-secondary">{site.whoItsFor.subheading}</p>
          </div>
        </Reveal>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {site.whoItsFor.audiences.map((aud, i) => {
            const Icon = audienceIcons[i % audienceIcons.length];
            return (
              <Reveal key={aud.title} delay={i * 0.05}>
                <div className="p-5 rounded-panel border border-border bg-surface shadow-xs h-full flex flex-col justify-between hover:shadow-sm hover:border-blue/30 transition-all">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-sky-tint text-blue flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-jakarta font-bold text-ink text-sm sm:text-base mb-1.5 leading-snug">
                      {aud.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">{aud.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue font-semibold">
                    <span>Supported</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Roles and Permissions with Violet Tab styling */}
        <div className="bg-surface rounded-panel border border-border p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-jakarta font-bold uppercase tracking-wider text-violet block mb-1">
                Role-based access
              </span>
              <h3 className="font-jakarta font-bold text-ink text-xl sm:text-2xl">
                Everyone has the right screen
              </h3>
            </div>
            <div>
              <Tabs
                tabs={site.whoItsFor.roles.map((r) => ({ id: r.id, label: r.label }))}
                activeId={activeRole}
                onChange={(id) => setActiveRole(id as 'owner' | 'manager' | 'worker')}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-6">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-tint text-violet mb-2 font-jakarta">
                  {role.label} Perspective
                </span>
                <h4 className="font-jakarta font-bold text-ink text-xl mb-2">{role.title}</h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">{role.desc}</p>
                <div className="space-y-3">
                  {role.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-violet-tint text-violet flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-sm text-ink font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Role Interface */}
              <div className="lg:col-span-6 bg-slate-50/80 rounded-panel border border-border p-5">
                <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
                  <span className="text-xs font-jakarta font-bold text-ink">
                    {role.label} Permissions Mockup
                  </span>
                  <span className="text-[10px] text-muted uppercase font-medium">Sample data</span>
                </div>
                <div className="space-y-2.5">
                  {role.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-surface rounded-card border border-border/70"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-violet" />
                        <span className="text-xs font-medium text-ink">{cap}</span>
                      </div>
                      <span className="text-[10px] text-emerald font-bold bg-emerald-tint px-2 py-0.5 rounded">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Honest Comparison Table (No Competitor Names) */}
        <div>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="font-jakarta font-bold text-ink text-2xl sm:text-3xl mb-2">
                {site.whoItsFor.comparison.heading}
              </h3>
              <p className="text-xs sm:text-sm text-secondary">
                Why kitchen teams switch from pen, paper and spreadsheets.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-surface rounded-panel border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-slate-50/80">
                      <th className="p-3.5 sm:p-4 font-jakarta font-bold text-ink">Workflow Requirement</th>
                      <th className="p-3.5 sm:p-4 font-jakarta font-semibold text-secondary">Notebooks & WhatsApp</th>
                      <th className="p-3.5 sm:p-4 font-jakarta font-semibold text-secondary">Spreadsheets</th>
                      <th className="p-3.5 sm:p-4 font-jakarta font-bold text-blue bg-blue-tint/40">KitchenWatch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {site.whoItsFor.comparison.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/40 transition-colors">
                        <td className="p-3.5 sm:p-4 font-medium text-ink">{row.feature}</td>
                        <td className="p-3.5 sm:p-4 text-secondary">{row.manual}</td>
                        <td className="p-3.5 sm:p-4 text-secondary">{row.spreadsheet}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-blue bg-blue-tint/20 flex items-center gap-1.5">
                          <Check size={14} className="text-blue shrink-0" />
                          <span>{row.kitchenwatch}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}