import { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { site } from '../../content/site';
import Logo from '../ui/Logo';

export default function Footer() {
  const [animationsPaused, setAnimationsPaused] = useState(false);

  useEffect(() => {
    if (animationsPaused) {
      document.documentElement.classList.add('reduce-motion-override');
    } else {
      document.documentElement.classList.remove('reduce-motion-override');
    }
  }, [animationsPaused]);

  return (
    <footer
      className="bg-[#101218] border-t border-white/10 px-4 sm:px-6 py-16 text-[#F5F5F7] pb-24 md:pb-16 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo dark />
            <p className="mt-4 text-xs sm:text-sm text-[#A7AEBB] max-w-sm leading-relaxed">
              {site.footer.description}
            </p>
            <p className="mt-3 text-xs text-[#A7AEBB]/70 italic">{site.footer.tagline}</p>

            {/* Pause Animations accessibility control */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setAnimationsPaused(!animationsPaused)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-[#A7AEBB] hover:text-white transition-colors"
                aria-label={animationsPaused ? 'Resume ambient animations' : 'Pause ambient animations'}
              >
                {animationsPaused ? <Play size={12} /> : <Pause size={12} />}
                <span>{animationsPaused ? 'Resume animations' : 'Pause animations'}</span>
              </button>
            </div>
          </div>

          {/* Links */}
          {[
            { heading: 'Product', items: site.footer.links.product },
            { heading: 'Company', items: site.footer.links.company },
            { heading: 'Legal', items: site.footer.links.legal },
          ].map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#A7AEBB] hover:text-white transition-colors"
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
          <p className="text-xs text-[#A7AEBB]/70">{site.footer.copyright}</p>
          <div className="text-xs text-[#A7AEBB] space-x-1">
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