import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Pause, Play } from 'lucide-react';
import Logo from '../ui/Logo';
import { site } from '../../content/site';
import { useAnimationPause } from '../../lib/useAnimationPause';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { paused, toggle: togglePause } = useAnimationPause();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for indicator
  useEffect(() => {
    const sectionIds = ['product', 'features', 'calculator', 'pricing', 'faq'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-25% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <header
        className={`sticky top-3 z-40 px-3 sm:px-6 w-full flex justify-center transition-all duration-200 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto max-w-[1100px] w-full bg-[#FFFEF2] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-200 ${
            scrolled
              ? 'border-[1.5px] border-[#1C1B18] shadow-hard'
              : 'border border-[#1C1B18]/70 shadow-hard-sm'
          }`}
        >
          {/* Logo in pure ink */}
          <Logo size="md" />

          {/* Desktop links - exactly 5 links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {site.nav.links.map((link) => {
              const id = link.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[15px] font-figtree font-medium transition-colors py-1 ${
                    isActive ? 'text-[#1C1B18] font-bold' : 'text-[#4B4A44] hover:text-[#1C1B18]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#1C1B18] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Pause Motion + Log in + Lavender Primary Button */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Ambient motion toggle */}
            <button
              type="button"
              onClick={togglePause}
              title={paused ? 'Resume animations' : 'Pause animations'}
              aria-label={paused ? 'Resume animations' : 'Pause animations'}
              className="px-2.5 py-1.5 rounded-full border border-[#1C1B18]/40 hover:border-[#1C1B18] text-[#4B4A44] hover:text-[#1C1B18] text-xs font-figtree font-medium inline-flex items-center gap-1.5 transition-colors bg-[#F7F5E4]"
            >
              {paused ? <Play size={12} /> : <Pause size={12} />}
              <span className="hidden xl:inline">{paused ? 'Play motion' : 'Pause motion'}</span>
            </button>

            <a
              href={`${site.config.appUrl}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-figtree font-semibold text-[#4B4A44] hover:text-[#1C1B18] transition-colors px-2 py-1.5"
            >
              {site.nav.loginText}
            </a>

            {/* Thick-outlined lavender primary button */}
            <a
              href="#cta"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-btn bg-[#E9D8FD] text-[#1C1B18] text-sm font-figtree font-bold border-2 border-[#1C1B18] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-hard active:translate-y-0 active:shadow-none inline-flex items-center justify-center min-h-[42px]"
            >
              {site.nav.ctaPrimary}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? 'Resume animations' : 'Pause animations'}
              className="p-2 text-[#4B4A44] rounded-full border border-[#1C1B18]/30 bg-[#F7F5E4]"
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <button
              className="p-2 -mr-1 text-[#1C1B18] rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen warm cream menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#FFFEF2] z-[60] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-[#1C1B18]/15">
              <Logo size="md" />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 text-[#1C1B18] rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2 py-8" aria-label="Mobile navigation">
              {site.nav.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-[#1C1B18] py-3 hover:opacity-75 transition-opacity min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-[#1C1B18]/15 flex flex-col gap-3">
              <a
                href={`${site.config.appUrl}/login`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-btn border-2 border-[#1C1B18] bg-[#FFFEF2] font-figtree font-bold text-[#1C1B18] text-base min-h-[44px] flex items-center justify-center hover:shadow-hard transition-shadow"
              >
                {site.nav.loginText}
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-btn bg-[#E9D8FD] border-2 border-[#1C1B18] text-[#1C1B18] font-figtree font-bold text-base min-h-[44px] flex items-center justify-center shadow-hard"
              >
                {site.nav.ctaPrimary}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}