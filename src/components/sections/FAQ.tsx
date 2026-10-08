import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const { heading, subheading, items } = site.faq;

  return (
    <section id="faq" className="px-4 sm:px-6 py-20 md:py-28 bg-ivory border-b border-ink/20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-muted uppercase mb-3 block">
              CLEAR FACTS
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

        <Reveal delay={0.1}>
          <div className="bg-card rounded-2xl border-1.5 border-ink p-6 sm:p-8 shadow-hard-sm">
            <Accordion items={items} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-8 text-xs text-secondary">
            Have a question not answered here?{' '}
            <a href="#cta" className="text-ink font-bold underline hover:text-ink/80">
              Speak directly with our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}