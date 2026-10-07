import { site } from '../../content/site';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#080E1C] border-t border-white/10 px-6 py-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 text-sm text-white/80 max-w-xs leading-relaxed">
              {site.footer.description}
            </p>
            <p className="mt-3 text-xs text-sky-200/90 italic">{site.footer.tagline}</p>
          </div>

          {/* Links */}
          {[
            { heading: 'Product', items: site.footer.links.product },
            { heading: 'Company', items: site.footer.links.company },
            { heading: 'Legal', items: site.footer.links.legal },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-jakarta font-bold text-white uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white transition-colors"
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
        <div className="border-t border-white/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70">{site.footer.copyright}</p>
          <div className="text-xs text-white/80 space-x-1">
            <span>Contact:</span>
            <span className="text-white font-medium underline underline-offset-2">
              {site.footer.contact.email}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}