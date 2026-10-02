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

  // Active section tracking
  useEffect(() => {
    const sectionIds = site.nav.links.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-md border-b border-border py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {site.nav.links.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive ? 'text-blue' : 'text-ink-2 hover:text-ink'
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
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton>
              <a
                href="#cta"
                className="px-4 py-2 rounded-pill border border-border text-sm font-jakarta font-semibold text-ink hover:bg-slate-50 transition-colors"
              >
                {site.nav.ctaSecondary}
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#cta"
                className="px-5 py-2 rounded-pill bg-blue text-white text-sm font-jakarta font-semibold hover:bg-blue-hover transition-colors shadow-sm"
              >
                {site.nav.ctaPrimary}
              </a>
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-2 text-ink rounded-lg"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 bg-surface z-[60] flex flex-col p-6"
          >
            <div className="flex items-center justify-between mb-12">
              <Logo />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ink rounded-lg"
                aria-label="Close navigation menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {site.nav.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-jakarta font-bold text-ink py-2 hover:text-blue transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-pill border border-border font-jakarta font-semibold text-ink"
              >
                {site.nav.ctaSecondary}
              </a>
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3.5 rounded-pill bg-blue text-white font-jakarta font-semibold"
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