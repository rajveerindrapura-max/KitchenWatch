import { ShieldCheck } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';

export default function About() {
  const { heading, subheading, story, beliefs, principles, founder } = site.about;

  return (
    <section id="about" className="px-4 sm:px-6 py-20 md:py-28 bg-paper border-b border-ink/20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
              OUR MISSION
            </span>
            <h2
              className="font-serif font-normal tracking-tight text-ink mb-3"
              style={{ fontSize: 'clamp(32px, 4.2vw, 52px)' }}
            >
              {heading}
            </h2>
            <p className="text-base text-secondary">{subheading}</p>
          </div>
        </Reveal>

        {/* Story & Beliefs */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
            <div className="p-7 rounded-2xl bg-card border-1.5 border-ink shadow-hard-sm">
              <h3 className="font-serif text-2xl font-normal text-ink mb-2">Why we started</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{story}</p>
            </div>
            <div className="p-7 rounded-2xl bg-card border-1.5 border-ink shadow-hard-sm">
              <h3 className="font-serif text-2xl font-normal text-ink mb-2">How we design</h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">{beliefs}</p>
            </div>
          </div>
        </Reveal>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {principles.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-card border-1.5 border-ink shadow-hard-sm h-full">
                <span className="font-serif italic font-normal text-ink/30 leading-none text-4xl shrink-0">
                  {p.number}
                </span>
                <div>
                  <h4 className="font-serif text-xl font-normal text-ink mb-1">{p.title}</h4>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Founder block */}
        <Reveal>
          <div className="p-7 rounded-2xl border-1.5 border-ink bg-card shadow-hard-sm">
            {site.flags.showFounder ? (
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-paper border border-ink/20 flex items-center justify-center shrink-0 font-serif font-bold text-2xl text-ink">
                  {founder.name[0]}
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-normal text-ink">{founder.name}</h4>
                  <p className="text-xs text-muted font-bold mb-2 uppercase tracking-wider">{founder.role}</p>
                  <p className="text-sm text-secondary leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ) : (
              <div className="text-center max-w-xl mx-auto py-2">
                <div className="w-12 h-12 rounded-xl bg-sage text-sage-ink border border-ink/20 mx-auto flex items-center justify-center mb-3">
                  <ShieldCheck size={22} strokeWidth={2.5} />
                </div>
                <h4 className="font-serif text-2xl font-normal text-ink mb-1">
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