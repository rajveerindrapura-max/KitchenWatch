import { site } from '../../content/site';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer
      className="bg-[#1F4D47] border-t border-[#1C1B18]/20 px-4 sm:px-6 py-16 text-[#F6F3E4] pb-24 md:pb-16"
      style={{ backgroundColor: '#1F4D47', color: '#F6F3E4' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 text-xs sm:text-sm text-cream/80 max-w-sm leading-relaxed">
              {site.footer.description}
            </p>
            <p className="mt-3 text-xs text-cream/60 italic">{site.footer.tagline}</p>
          </div>

          {/* Links */}
          {[
            { heading: 'Product', items: site.footer.links.product },
            { heading: 'Company', items: site.footer.links.company },
            { heading: 'Legal', items: site.footer.links.legal },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-bold text-cream uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-cream/70 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/60">{site.footer.copyright}</p>
          <div className="text-xs text-cream/60 space-x-1">
            <span>Contact:</span>
            <span className="text-cream font-medium">
              {site.footer.email}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}