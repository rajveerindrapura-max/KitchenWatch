import { useEffect } from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import Nav from '../components/layout/Nav';
import AnnouncementStrip from '../components/layout/AnnouncementStrip';
import Footer from '../components/layout/Footer';
import { site } from '../content/site';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund-policy';
}

const titles = {
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  'refund-policy': 'Cancellation & Refund Policy',
};

export default function LegalPage({ type }: LegalPageProps) {
  const title = titles[type];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} — KitchenWatch`;
  }, [title]);

  return (
    <div className="min-h-screen bg-bg flex flex-col font-sans">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb back */}
          <div className="mb-6">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue hover:underline"
            >
              <ArrowLeft size={14} /> Back to KitchenWatch
            </a>
          </div>

          <h1 className="font-sans font-semibold text-ink text-3xl sm:text-4xl tracking-tight mb-6">
            {title}
          </h1>

          {/* Draft Disclaimer Banner */}
          <div className="mb-8 p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-800 flex items-start gap-3 shadow-xs">
            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-0.5">Draft Document — Pending Formal Legal Review</p>
              <p className="text-xs text-amber-700/90 leading-relaxed">
                This document is an operational draft outline for KitchenWatch's early pilot phase.
                Final legally binding terms and privacy disclosures will be published prior to general public availability.
              </p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-10 shadow-subtle text-sm leading-relaxed text-secondary space-y-6">
            {type === 'privacy' && (
              <>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">1. Overview</h2>
                  <p>
                    KitchenWatch respects the privacy of your restaurant operations and data. We collect only
                    the operational data required to calculate stock levels, record inter-outlet transfers,
                    and provide wastage tracking.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">2. Data Ownership</h2>
                  <p>
                    All inventory items, quantities, costs, and logs entered by your team belong solely to you.
                    We do not sell, rent, or share your proprietary restaurant pricing, recipes, or stock numbers
                    with any third-party advertisers.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">3. Data Security & Storage</h2>
                  <p>
                    All transmissions are secured via HTTPS encryption. Access to data within your organization
                    is enforced by strict role boundaries (Owner, Manager, Employee). You may request a complete
                    export or deletion of your records at any time.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">4. Contact</h2>
                  <p>
                    For privacy inquiries, reach us at {site.footer.email}.
                  </p>
                </section>
              </>
            )}

            {type === 'terms' && (
              <>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">1. Service Description</h2>
                  <p>
                    KitchenWatch provides inventory control, transfer management, and wastage tracking tools
                    for food service operators. It works alongside your existing POS and does not provide
                    direct tax filing, point-of-sale payment clearing, or statutory accounting services.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">2. User Roles & Conduct</h2>
                  <p>
                    Account administrators are responsible for designating appropriate access roles (Owner,
                    Manager, Employee) and maintaining the security of team credentials.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">3. Subscription & Trials</h2>
                  <p>
                    KitchenWatch offers a 14-day free trial without credit card requirement. Continued usage
                    following trial requires an active subscription tier corresponding to your outlet count.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">4. Contact</h2>
                  <p>
                    Questions regarding service terms should be directed to {site.footer.email}.
                  </p>
                </section>
              </>
            )}

            {type === 'refund-policy' && (
              <>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">1. 14-Day Free Evaluation</h2>
                  <p>
                    Every new restaurant account receives a full 14-day free trial to verify that KitchenWatch
                    satisfies your inventory workflow before any billing occurs.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">2. Subscription Cancellation</h2>
                  <p>
                    You can cancel your subscription at any time with one click from your account dashboard.
                    Your access will continue until the end of your prepaid billing period.
                  </p>
                </section>
                <section>
                  <h2 className="font-sans font-semibold text-lg text-ink mb-2">3. Refund Requests</h2>
                  <p>
                    If you experience unresolved technical issues during your first paid billing cycle, please
                    contact our founder support line within 7 days of payment for a full refund evaluation.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
