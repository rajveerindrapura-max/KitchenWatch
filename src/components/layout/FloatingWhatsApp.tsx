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
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-card text-ink border-1.5 border-ink rounded-full shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 transition-all duration-150"
        aria-label="Chat with KitchenWatch team on WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage-ink" />
        </span>
        <MessageSquare size={16} className="text-sage-ink" />
        <span className="text-xs font-bold text-ink">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
