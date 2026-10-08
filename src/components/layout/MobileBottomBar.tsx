import { MessageSquare, Calendar } from 'lucide-react';
import { site } from '../../content/site';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <aside
      aria-label="Quick mobile actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(11,18,32,0.06)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] px-3 rounded-btn border border-border bg-surface text-ink text-sm font-jakarta font-semibold active:scale-[0.98] transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={17} className="text-emerald" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#cta"
          className="flex-[1.5] inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-btn bg-blue text-white text-sm font-jakarta font-semibold active:scale-[0.98] transition-transform shadow-sm"
        >
          <Calendar size={17} />
          <span>Book a demo</span>
        </a>
      </div>
    </aside>
  );
}
