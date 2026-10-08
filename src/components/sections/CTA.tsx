import { MessageSquare, Calendar, ShieldCheck } from 'lucide-react';
import { site } from '../../content/site';
import Reveal from '../ui/Reveal';
import LeadForm from '../ui/LeadForm';

export default function CTA() {
  const { heading, subheading, formHeading, whatsappButton, trialLinkText, responsePromise } =
    site.cta;

  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <section
      id="cta"
      className="relative px-4 sm:px-6 py-20 md:py-28 bg-forest text-cream border-b border-ink/20"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="text-xs font-bold tracking-widest text-cream/70 uppercase mb-3 block">
                GET STARTED TODAY
              </span>
              <h2
                className="font-serif font-normal text-cream tracking-tight mb-4"
                style={{ fontSize: 'clamp(36px, 4.8vw, 60px)' }}
              >
                {heading}
              </h2>
              <p className="text-cream/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {subheading}
              </p>

              {/* Direct WhatsApp Action */}
              <div className="p-6 rounded-2xl bg-cream/5 border border-cream/15 mb-8 max-w-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sage" />
                    <span className="text-xs font-bold text-cream uppercase tracking-wider">
                      Instant response
                    </span>
                  </div>
                  <span className="text-[11px] text-cream/60">Founder direct line</span>
                </div>
                <p className="text-xs text-cream/80 mb-4 leading-relaxed">
                  Prefer chatting? Talk with our team on WhatsApp directly to see if KitchenWatch fits your outlets.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card text-ink font-semibold text-sm border-2 border-ink shadow-hard-sm hover:shadow-hard transition-all w-full sm:w-auto cursor-pointer"
                >
                  <MessageSquare size={17} className="text-sage-ink" />
                  <span>{whatsappButton}</span>
                </a>
              </div>

              {/* Trial link & Trust pledge */}
              <div className="space-y-2 text-xs text-cream/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-sage" />
                  <span>{responsePromise}</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`${site.config.appUrl}/signup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <span>{trialLinkText}</span> &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Lead Form Card (Ivory Paper Card with Ink Outlines) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="bg-card border-2 border-ink rounded-2xl p-6 sm:p-8 shadow-hard-lg text-ink">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-ink/15">
                  <Calendar size={18} className="text-ink" />
                  <h3 className="font-serif text-2xl font-normal text-ink">
                    {formHeading}
                  </h3>
                </div>
                <LeadForm theme="light" source="cta-section" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}