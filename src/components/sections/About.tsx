import { ShieldCheck, Sparkles } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';

export default function About() {
  const { heading, subheading, story, beliefs, principles, founder } = site.about;

  return (
    <section id="about" className="px-4 sm:px-6 py-20 md:py-28 bg-slate-50/60 border-b border-border/80">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <Sparkles size={13} />
              Our Mission
            </span>
            <h2
              className="font-jakarta font-bold tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary">{subheading}</p>
          </div>
        </Reveal>

        {/* Story & Beliefs */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
            <div className="p-6 rounded-panel bg-surface border border-border">
              <h3 className="font-jakarta font-bold text-ink text-lg mb-2">Why we started</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{story}</p>
            </div>
            <div className="p-6 rounded-panel bg-surface border border-border">
              <h3 className="font-jakarta font-bold text-ink text-lg mb-2">How we design</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{beliefs}</p>
            </div>
          </div>
        </Reveal>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {principles.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-5 rounded-panel bg-surface border border-border h-full">
                <span className="font-jakarta font-extrabold text-blue/30 leading-none text-3xl">
                  {p.number}
                </span>
                <div>
                  <h4 className="font-jakarta font-bold text-ink text-base mb-1">{p.title}</h4>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founder block (Only visible if showFounder flag is active, else early-stage promise card) */}
        <Reveal>
          <div className="p-7 rounded-panel border border-border bg-surface shadow-xs">
            {site.flags.showFounder ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center shrink-0 font-jakarta font-bold text-xl text-secondary">
                  {founder.name[0]}
                </div>
                <div>
                  <h4 className="font-jakarta font-bold text-ink text-lg">{founder.name}</h4>
                  <p className="text-xs text-blue font-semibold mb-2">{founder.role}</p>
                  <p className="text-sm text-secondary leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-xl mx-auto py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-tint text-emerald mx-auto flex items-center justify-center mb-3">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-jakarta font-bold text-ink text-base mb-1">
                  Built Directly With Indian Kitchen Owners
                </h4>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  We are working hands-on with restaurant owners and cloud kitchens across India to eliminate food waste before expanding widely.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}