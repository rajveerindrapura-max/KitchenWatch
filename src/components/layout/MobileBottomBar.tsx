import { MessageSquare, Calendar } from 'lucide-react';
import { site } from '../../content/site';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <aside
      aria-label="Quick mobile actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t-1.5 border-ink px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-hard-lg"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-xl border-1.5 border-ink bg-paper text-ink text-sm font-bold active:translate-y-0.5 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={17} className="text-sage-ink" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#cta"
          className="flex-[1.5] inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-lavender text-ink border-2 border-ink text-sm font-bold active:translate-y-0.5 transition-transform shadow-hard-sm"
        >
          <Calendar size={17} />
          <span>Book a demo</span>
        </a>
      </div>
    </aside>
  );
}
