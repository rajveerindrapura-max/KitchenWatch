import { MessageSquare, Calendar, Sparkles, ShieldCheck } from 'lucide-react';
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
      className="relative px-4 sm:px-6 py-20 md:py-28 bg-dark text-white overflow-hidden"
    >
      {/* Background Subtle Sky Glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #38BDF8 0%, #2563EB 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-white/10 border border-white/15 text-sky font-jakarta font-semibold text-xs tracking-wider uppercase mb-4">
                <Sparkles size={13} />
                Get Started Today
              </span>
              <h2
                className="font-jakarta font-bold text-white tracking-tight mb-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              >
                {heading}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {subheading}
              </p>

              {/* Direct WhatsApp Action */}
              <div className="p-5 rounded-panel bg-white/5 border border-white/10 mb-8 max-w-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse" />
                    <span className="text-xs font-semibold text-emerald uppercase tracking-wider">
                      Instant response
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Founder direct line</span>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Prefer chatting? Talk with our team on WhatsApp directly to see if KitchenWatch fits your outlets.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-btn bg-[#25D366] text-slate-900 font-jakarta font-bold text-sm hover:bg-[#20bd5a] transition-colors w-full sm:w-auto"
                >
                  <MessageSquare size={17} />
                  <span>{whatsappButton}</span>
                </a>
              </div>

              {/* Trial link & Trust pledge */}
              <div className="space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald" />
                  <span>{responsePromise}</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`${site.config.appUrl}/signup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>{trialLinkText}</span> &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="bg-[#0B1220]/90 border border-white/15 rounded-panel p-6 sm:p-8 shadow-2xl backdrop-blur-md ring-1 ring-sky/10">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                  <Calendar size={18} className="text-sky" />
                  <h3 className="font-jakarta font-bold text-white text-lg sm:text-xl">
                    {formHeading}
                  </h3>
                </div>

                <LeadForm theme="dark" source="homepage-cta" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}