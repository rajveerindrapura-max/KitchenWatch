import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import MagneticButton from '../ui/MagneticButton';
import { site } from '../../content/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking on home page
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
        { rootMargin: '-30% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-md border-b border-border py-3 shadow-sm'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Logo />

          {/* Desktop links - exactly 5 links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {site.nav.links.map((link) => {
              const id = link.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    isActive ? 'text-blue font-semibold' : 'text-secondary hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs: Log in text link + Book a free demo button */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href={`${site.config.appUrl}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-jakarta font-medium text-secondary hover:text-ink transition-colors px-2 py-1"
            >
              {site.nav.loginText}
            </a>
            <MagneticButton>
              <a
                href="#cta"
                className="px-4 py-2.5 rounded-btn bg-blue text-white text-sm font-jakarta font-semibold hover:bg-blue-hover transition-colors shadow-sm inline-flex items-center justify-center min-h-[44px]"
              >
                {site.nav.ctaPrimary}
              </a>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 -mr-2 text-ink rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen drawer menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 bg-surface z-[60] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-6 border-b border-border">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 text-ink rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                  className="text-2xl font-jakarta font-bold text-ink py-3 hover:text-blue transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border flex flex-col gap-3">
              <a
                href={`${site.config.appUrl}/login`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-btn border border-border font-jakarta font-semibold text-ink text-base min-h-[44px] flex items-center justify-center"
              >
                {site.nav.loginText}
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-btn bg-blue text-white font-jakarta font-semibold text-base min-h-[44px] flex items-center justify-center"
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