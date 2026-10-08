import { ShieldCheck } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';

export default function About() {
  const { heading, subheading, story, beliefs, principles, founder } = site.about;

  return (
    <section id="about" className="px-4 sm:px-6 py-20 md:py-28 bg-[#F5F5F7] border-b border-hairline">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              OUR MISSION
            </span>
            <h2
              className="font-sans font-semibold tracking-[-0.035em] text-ink mb-3"
              style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary">{subheading}</p>
          </div>
        </Reveal>

        {/* Story & Beliefs */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="p-7 rounded-2xl bg-surface border border-border shadow-subtle">
              <h3 className="font-sans font-semibold text-xl text-ink mb-2">Why we started</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{story}</p>
            </div>
            <div className="p-7 rounded-2xl bg-surface border border-border shadow-subtle">
              <h3 className="font-sans font-semibold text-xl text-ink mb-2">How we design</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{beliefs}</p>
            </div>
          </div>
        </Reveal>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {principles.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-border shadow-subtle h-full">
                <span className="font-mono font-semibold text-blue text-2xl shrink-0 mt-0.5">
                  0{p.number}
                </span>
                <div>
                  <h4 className="font-sans font-semibold text-lg text-ink mb-1">{p.title}</h4>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founder block */}
        <Reveal>
          <div className="p-7 rounded-2xl border border-border bg-surface shadow-subtle">
            {site.flags.showFounder ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-[#F5F5F7] border border-border flex items-center justify-center shrink-0 font-sans font-bold text-2xl text-ink">
                  {founder.name[0]}
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-xl text-ink">{founder.name}</h4>
                  <p className="text-xs text-muted font-medium mb-2 uppercase tracking-wider">{founder.role}</p>
                  <p className="text-sm text-secondary leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-xl mx-auto py-2">
                <div className="w-12 h-12 rounded-xl bg-blue-tint text-blue border border-blue/20 mx-auto flex items-center justify-center mb-3">
                  <ShieldCheck size={22} strokeWidth={2} />
                </div>
                <h4 className="font-sans font-semibold text-xl text-ink mb-1">
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