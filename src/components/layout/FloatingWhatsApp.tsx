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
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-surface text-ink hover:text-emerald border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
        aria-label="Chat with KitchenWatch team on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald" />
        </span>
        <MessageSquare size={16} className="text-emerald" />
        <span className="text-xs font-jakarta font-semibold text-ink group-hover:text-emerald transition-colors">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
