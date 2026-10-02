import { site } from '../../content/site';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';

export default function FAQ() {
  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2
            className="font-jakarta font-bold tracking-tight text-ink mb-14"
            style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}
          >
            Common questions
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={site.faq.items} />
        </Reveal>
      </div>
    </Section>
  );
}