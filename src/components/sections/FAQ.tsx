import { HelpCircle } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const { heading, subheading, items } = site.faq;

  return (
    <section id="faq" className="px-4 sm:px-6 py-20 md:py-28 bg-surface border-b border-border/80">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <HelpCircle size={13} />
              Clear Facts
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

        <Reveal delay={0.1}>
          <div className="bg-surface rounded-panel border border-border p-6 sm:p-8 shadow-xs divide-y divide-border/60">
            <Accordion items={items} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-8 text-xs text-secondary">
            Have a question not answered here?{' '}
            <a href="#cta" className="text-blue font-semibold hover:underline">
              Speak directly with our team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}