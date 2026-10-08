import { MessageSquare } from 'lucide-react';
import { site } from '../../content/site';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${site.config.whatsappNumber}?text=${encodeURIComponent(
    site.config.whatsappPrefill
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className="hidden md:block fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-surface text-ink border border-border rounded-full shadow-subtle hover:shadow-float hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Chat with KitchenWatch team on WhatsApp"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <MessageSquare size={15} className="text-emerald-600" />
        <span className="text-xs font-semibold text-ink">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
