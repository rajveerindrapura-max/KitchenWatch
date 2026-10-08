import { MessageSquare, ShieldCheck } from 'lucide-react';
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
      className="relative px-4 sm:px-6 py-20 md:py-28 bg-[#101218] text-[#F5F5F7] border-t border-white/10 overflow-hidden"
    >
      {/* Subtle ambient mesh background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue/15 blur-[120px]" />
        <div className="absolute bottom-0 left-[5%] w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-4">
                GET STARTED TODAY
              </span>
              <h2
                className="font-sans font-semibold text-white tracking-[-0.035em] mb-4"
                style={{ fontSize: 'clamp(36px, 4.8vw, 56px)' }}
              >
                {heading}
              </h2>
              <p className="text-[#A7AEBB] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {subheading}
              </p>

              {/* Direct WhatsApp Action */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 max-w-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Instant response
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A7AEBB]">Founder direct line</span>
                </div>
                <p className="text-xs text-[#A7AEBB] mb-4 leading-relaxed">
                  Prefer chatting? Talk with our team on WhatsApp directly to see if KitchenWatch fits your outlets.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-ink hover:bg-slate-100 font-medium text-sm shadow-xs transition-colors w-full sm:w-auto cursor-pointer"
                >
                  <MessageSquare size={16} className="text-emerald-600" />
                  <span>{whatsappButton}</span>
                </a>
              </div>

              {/* Trial link & Trust pledge */}
              <div className="space-y-2 text-xs text-[#A7AEBB]">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  <span>{responsePromise}</span>
                </div>
                <div className="pt-2">
                  <a
                    href={`${site.config.appUrl}/signup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>{trialLinkText}</span> &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="bg-white/[0.04] backdrop-blur-sm border border-white/15 rounded-3xl p-6 sm:p-8 shadow-float">
                <h3 className="font-sans font-semibold text-xl text-white mb-1">{formHeading}</h3>
                <p className="text-xs text-[#A7AEBB] mb-6">
                  No credit card required. Free onboarding support.
                </p>
                <LeadForm theme="dark" source="cta_section" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}