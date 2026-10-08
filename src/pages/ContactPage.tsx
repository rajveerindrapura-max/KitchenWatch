import { useEffect } from 'react';
import { MessageSquare, Mail, Clock, ShieldCheck } from 'lucide-react';
import Nav from '../components/layout/Nav';
import AnnouncementStrip from '../components/layout/AnnouncementStrip';
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
    <div className="min-h-screen bg-bg flex flex-col font-sans">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-tint border border-blue/20 text-blue font-sans font-medium text-xs tracking-wide uppercase mb-3">
              CONNECT WITH US
            </span>
            <h1 className="font-sans font-semibold text-ink text-4xl sm:text-5xl tracking-tight mb-3">
              Book a Demo or Ask a Question
            </h1>
            <p className="text-secondary text-sm sm:text-base">
              See KitchenWatch live with your actual kitchen menu or ask how it fits your outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-surface rounded-2xl border border-border p-6 shadow-subtle">
                <h2 className="font-sans font-semibold text-lg text-ink mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-emerald-600" />
                  Direct WhatsApp Support
                </h2>
                <p className="text-xs text-secondary leading-relaxed mb-4">
                  Chat directly with our onboarding team to get answers right away.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-surface text-ink font-semibold text-xs border border-border shadow-xs hover:bg-[#F5F5F7] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={15} className="text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="bg-surface rounded-2xl border border-border p-6 shadow-subtle">
                <h2 className="font-sans font-semibold text-lg text-ink mb-2 flex items-center gap-2">
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

              <div className="bg-[#F5F5F7] rounded-2xl border border-border p-5 text-xs space-y-2 text-secondary">
                <div className="flex items-center gap-2 font-medium text-ink">
                  <Clock size={15} className="text-muted" />
                  <span>Operating hours: 10:00 AM – 9:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-emerald-700" />
                  <span>Responses within 2 hours during kitchen hours</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="book" className="lg:col-span-7 bg-surface rounded-2xl border border-border p-6 sm:p-8 shadow-float">
              <h2 className="font-sans font-semibold text-xl text-ink mb-6 pb-3 border-b border-hairline">
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
