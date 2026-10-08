import { site } from '../../content/site';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#080E1C] border-t border-white/10 px-4 sm:px-6 py-16 text-white pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 text-xs sm:text-sm text-white/80 max-w-sm leading-relaxed">
              {site.footer.description}
            </p>
            <p className="mt-3 text-xs text-sky-300 italic">{site.footer.tagline}</p>
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
              <ul className="space-y-2.5">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
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
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">{site.footer.copyright}</p>
          <div className="text-xs text-slate-400 space-x-1">
            <span>Contact:</span>
            <span className="text-white font-medium">
              {site.footer.email}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}