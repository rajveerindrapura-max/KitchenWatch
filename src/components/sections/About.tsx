import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';

export default function About() {
  return (
    <Section id="about" className="bg-slate-50/60">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Reveal>
          <h2
            className="font-jakarta font-bold tracking-tight text-ink mb-8"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
          >
            {site.about.heading}
          </h2>
        </Reveal>

        {/* Story */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <p className="text-xl text-ink-2 leading-relaxed">{site.about.story}</p>
            <p className="text-xl text-ink-2 leading-relaxed">{site.about.beliefs}</p>
          </div>
        </Reveal>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {site.about.principles.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-5">
                <span className="font-jakarta font-extrabold text-blue/25 leading-none" style={{ fontSize: '3.5rem' }}>
                  {p.number}
                </span>
                <div className="pt-2">
                  <h3 className="font-jakarta font-bold text-ink text-xl mb-1.5">{p.title}</h3>
                  <p className="text-ink-2 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founder block */}
        <Reveal>
          <div className="flex items-start gap-6 p-8 rounded-card border border-border bg-surface">
            {/* Photo placeholder */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-muted font-jakarta font-bold text-xl">
              {site.about.founder.TODO ? '?' : site.about.founder.name[0]}
            </div>
            <div>
              <p className="font-jakarta font-bold text-ink text-lg mb-0.5">
                {site.about.founder.name}
              </p>
              <p className="text-sm text-muted mb-3">{site.about.founder.role}</p>
              <p className="text-sm text-ink-2 leading-relaxed">{site.about.founder.bio}</p>
              {site.about.founder.TODO && (
                <p className="mt-3 text-xs text-amber-600 font-medium bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg inline-block">
                  TODO: Add real founder details before launch
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}