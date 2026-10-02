import { Check } from 'lucide-react';
import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

export default function Roadmap() {
  return (
    <Section id="roadmap" className="bg-slate-50/70">
      <Reveal>
        <h2
          className="font-jakarta font-bold tracking-tight text-ink mb-4"
          style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
        >
          {site.roadmap.heading}
        </h2>
        <p className="text-ink-2 max-w-xl mb-16 text-base leading-relaxed">
          {site.roadmap.desc}
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-card overflow-hidden mb-16">
        {site.roadmap.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="bg-surface p-7 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`text-sm font-jakarta font-bold px-3 py-1 rounded-pill ${
                    i === 0
                      ? 'bg-blue text-white'
                      : i === 1
                      ? 'bg-sky/20 text-blue'
                      : 'bg-slate-100 text-muted'
                  }`}
                >
                  {item.phase}
                </span>
                <span className="text-xs text-muted font-medium">{item.label}</span>
              </div>
              <ul className="space-y-2.5">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className={`mt-0.5 shrink-0 ${i === 0 ? 'text-blue' : 'text-muted'}`}
                    />
                    <span className={`text-sm ${i === 0 ? 'text-ink' : 'text-ink-2'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Early access CTA */}
      <Reveal>
        <div className="rounded-card bg-blue p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-jakarta font-bold text-white text-2xl mb-2">
              {site.roadmap.earlyAccess.heading}
            </h3>
            <p className="text-white/70 max-w-lg leading-relaxed">
              {site.roadmap.earlyAccess.desc}
            </p>
          </div>
          <MagneticButton className="shrink-0">
            <a
              href="#cta"
              className="inline-flex items-center px-6 py-3 rounded-pill bg-white text-blue font-jakarta font-semibold text-sm hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              {site.roadmap.earlyAccess.cta}
            </a>
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}