import { MessageSquare, Calendar } from 'lucide-react';
import { site } from '../../content/site';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <aside
      aria-label="Quick mobile actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md border-t border-border px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-subtle"
    >
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-full border border-border bg-surface text-ink text-xs font-semibold active:scale-[0.98] transition-transform shadow-xs"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={15} className="text-emerald-600" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#cta"
          className="flex-[1.4] inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-full bg-blue text-white text-xs font-semibold active:scale-[0.98] transition-transform shadow-xs hover:bg-blueHover"
        >
          <Calendar size={15} />
          <span>Book a demo</span>
        </a>
      </div>
    </aside>
  );
}
