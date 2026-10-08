import { useEffect } from 'react';
import { MessageSquare, Mail, Calendar, Clock, ShieldCheck } from 'lucide-react';
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import LeadForm from '../components/ui/LeadForm';
import { site } from '../content/site';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import MobileBottomBar from '../components/layout/MobileBottomBar';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact & Book Demo — KitchenWatch';
  }, []);

  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Nav />
      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-blue-tint border border-blue/20 text-blue font-jakarta font-semibold text-xs tracking-wider uppercase mb-3">
              <Calendar size={13} />
              Connect With Us
            </span>
            <h1 className="font-jakarta font-bold text-ink text-3xl sm:text-4xl md:text-5xl tracking-tight mb-3">
              Book a Demo or Ask a Question
            </h1>
            <p className="text-secondary text-sm sm:text-base">
              See KitchenWatch live with your actual kitchen menu or ask how it fits your outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface rounded-panel border border-border p-6 shadow-xs">
                <h2 className="font-jakarta font-bold text-ink text-base mb-4 flex items-center gap-2">
                  <MessageSquare size={18} className="text-emerald" />
                  Direct WhatsApp Support
                </h2>
                <p className="text-xs text-secondary leading-relaxed mb-4">
                  Chat directly with our onboarding team to get answers right away.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-btn bg-[#25D366] text-slate-900 font-jakarta font-bold text-xs hover:bg-[#20bd5a] transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="bg-surface rounded-panel border border-border p-6 shadow-xs">
                <h2 className="font-jakarta font-bold text-ink text-base mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-blue" />
                  Email Support
                </h2>
                <p className="text-xs text-secondary leading-relaxed mb-2">
                  For pilot partnership inquiries or enterprise groups:
                </p>
                <a
                  href={`mailto:${site.footer.email}`}
                  className="text-sm font-semibold text-blue hover:underline"
                >
                  {site.footer.email}
                </a>
              </div>

              <div className="bg-slate-50 rounded-panel border border-border p-5 text-xs space-y-2 text-secondary">
                <div className="flex items-center gap-2 font-medium text-ink">
                  <Clock size={15} className="text-blue" />
                  <span>Operating hours: 10:00 AM – 9:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald" />
                  <span>Responses within 2 hours during kitchen hours</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="book" className="lg:col-span-7 bg-surface rounded-panel border border-border p-6 sm:p-8 shadow-sm">
              <h2 className="font-jakarta font-bold text-ink text-lg sm:text-xl mb-6 pb-3 border-b border-border">
                Schedule a 15-Minute Screen Share
              </h2>
              <LeadForm theme="light" source="contact-page" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
