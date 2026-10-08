import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Building2, Coffee, UtensilsCrossed, Cake, Hotel } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import Tabs from '../ui/Tabs';

const audienceIcons = [Coffee, Building2, UtensilsCrossed, Cake, Hotel];

export default function WhoItsFor() {
  const [activeRole, setActiveRole] = useState<'owner' | 'manager' | 'worker'>('owner');
  const role = site.whoItsFor.roles.find((r) => r.id === activeRole) ?? site.whoItsFor.roles[0];

  return (
    <section id="who-its-for" className="px-4 sm:px-6 py-20 md:py-28 bg-sky/25 border-b border-ink/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
              BUILT FOR INDIAN KITCHENS
            </span>
            <h2
              className="font-serif font-normal text-ink tracking-tight mb-3"
              style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
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
                <div className="p-5 rounded-2xl border-1.5 border-ink bg-card shadow-hard-sm h-full flex flex-col justify-between hover:-translate-y-1 hover:shadow-hard transition-all duration-150">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky border border-ink/20 text-sky-ink flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-ink mb-1.5 leading-snug">
                      {aud.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">{aud.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between text-[11px] text-sky-ink font-bold">
                    <span>Supported</span>
                    <span className="w-2 h-2 rounded-full bg-sky-ink" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Roles and Permissions */}
        <div className="bg-card rounded-2xl border-1.5 border-ink p-6 sm:p-10 shadow-hard-sm mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-ink/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-muted block mb-1">
                Role-based access
              </span>
              <h3 className="font-serif font-normal text-ink text-2xl sm:text-3xl">
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
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-lavender text-ink border border-ink/20 mb-3">
                  {role.label} Perspective
                </span>
                <h4 className="font-serif font-normal text-ink text-2xl mb-2">{role.title}</h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">{role.desc}</p>
                <div className="space-y-3">
                  {role.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md bg-sage text-sage-ink border border-ink/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Role Interface */}
              <div className="lg:col-span-6 bg-paper rounded-2xl border-1.5 border-ink p-5">
                <div className="flex items-center justify-between pb-3 border-b border-ink/15 mb-4">
                  <span className="text-xs font-bold text-ink">
                    {role.label} Permissions Mockup
                  </span>
                  <span className="text-[10px] text-muted uppercase font-bold">Sample data</span>
                </div>
                <div className="space-y-2.5">
                  {role.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-card rounded-xl border border-ink/20"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span className="text-xs font-medium text-ink">{cap}</span>
                      </div>
                      <span className="text-[10px] text-sage-ink font-bold bg-sage px-2 py-0.5 rounded border border-ink/20">
                        Active
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Honest Comparison Table */}
        <div>
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="font-serif font-normal text-ink text-2xl sm:text-3xl mb-2">
                {site.whoItsFor.comparison.heading}
              </h3>
              <p className="text-xs sm:text-sm text-secondary">
                Why kitchen teams switch from pen, paper and spreadsheets.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-card rounded-2xl border-1.5 border-ink overflow-hidden shadow-hard-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-ink/20 bg-paper">
                      <th className="p-3.5 sm:p-4 font-bold text-ink">Workflow Requirement</th>
                      <th className="p-3.5 sm:p-4 font-semibold text-secondary">Notebooks & WhatsApp</th>
                      <th className="p-3.5 sm:p-4 font-semibold text-secondary">Spreadsheets</th>
                      <th className="p-3.5 sm:p-4 font-bold text-ink bg-sky/50 border-l border-ink/20">
                        KitchenWatch
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink/10">
                    {site.whoItsFor.comparison.rows.map((row, i) => (
                      <tr key={i} className="hover:bg-paper/40 transition-colors">
                        <td className="p-3.5 sm:p-4 font-medium text-ink">{row.feature}</td>
                        <td className="p-3.5 sm:p-4 text-secondary">{row.manual}</td>
                        <td className="p-3.5 sm:p-4 text-secondary">{row.spreadsheet}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-ink bg-sky/30 border-l border-ink/20 flex items-center gap-1.5">
                          <Check size={14} className="text-sky-ink shrink-0" strokeWidth={3} />
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