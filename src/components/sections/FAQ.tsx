import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  const { heading, subheading, items } = site.faq;

  return (
    <section id="faq" className="px-4 sm:px-6 py-20 md:py-28 bg-[#FBFBFD] border-b border-hairline">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              CLEAR FACTS
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

        <Reveal delay={0.1}>
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-10 shadow-subtle">
            <Accordion items={items} />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-8 text-xs text-secondary">
            Have a question not answered here?{' '}
            <a href="#cta" className="text-blue font-medium hover:underline">
              Speak directly with our team &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}