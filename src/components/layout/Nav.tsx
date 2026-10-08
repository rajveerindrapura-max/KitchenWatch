import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Pause, Play } from 'lucide-react';
import Logo from '../ui/Logo';
import { site } from '../../content/site';
import { useAnimationPause } from '../../lib/useAnimationPause';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { paused, toggle: togglePause } = useAnimationPause();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for indicator
  useEffect(() => {
    const sectionIds = ['product', 'features', 'calculator', 'pricing', 'about', 'faq'];
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
        className={`sticky top-0 z-50 w-full h-14 flex items-center transition-all duration-200 ${
          scrolled
            ? 'bg-[#FBFBFD]/80 backdrop-blur-md border-b border-[#EDEFF3]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
          {/* Logo in ink */}
          <Logo size="md" />

          {/* Desktop links - exactly 5 links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main navigation">
            {site.nav.links.map((link) => {
              const id = link.href.replace('/#', '').replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[14px] font-sans transition-colors py-1 ${
                    isActive ? 'text-ink font-semibold' : 'text-secondary hover:text-ink font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Log in + Book a demo pill */}
          <div className="hidden md:flex items-center gap-4">
            {/* Ambient motion toggle */}
            <button
              type="button"
              onClick={togglePause}
              title={paused ? 'Resume animations' : 'Pause animations'}
              aria-label={paused ? 'Resume animations' : 'Pause animations'}
              className="p-1.5 rounded-full text-muted hover:text-ink transition-colors"
            >
              {paused ? <Play size={14} strokeWidth={1.5} /> : <Pause size={14} strokeWidth={1.5} />}
            </button>

            <a
              href={`${site.config.appUrl}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-sans font-medium text-secondary hover:text-ink transition-colors px-2 py-1"
            >
              {site.nav.loginText}
            </a>

            {/* Apple/Stripe Blue Pill Button */}
            <a
              href="#cta"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-pill bg-blue hover:bg-blue-hover text-white text-[13px] font-sans font-medium transition-all shadow-subtle hover:shadow-card"
            >
              <span>{site.nav.ctaPrimary}</span>
              <ArrowRight
                size={13}
                strokeWidth={2}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 rounded-lg text-ink hover:bg-hairline transition-colors"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 bottom-0 z-40 bg-[#FBFBFD] px-6 py-8 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-semibold text-muted uppercase tracking-wider block mb-2">
                Menu
              </span>
              {site.nav.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="block text-2xl font-semibold text-ink hover:text-blue transition-colors py-2 border-b border-hairline"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-hairline">
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 px-4 rounded-pill bg-blue text-white font-medium text-center text-sm block shadow-subtle"
              >
                {site.nav.ctaPrimary}
              </a>
              <a
                href={`${site.config.appUrl}/login`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 px-4 rounded-pill border border-border bg-white text-ink font-medium text-center text-sm block"
              >
                {site.nav.loginText}
              </a>
              <div className="pt-2 flex items-center justify-between text-xs text-muted">
                <span>Ambient motion</span>
                <button
                  type="button"
                  onClick={togglePause}
                  className="underline font-medium text-ink"
                >
                  {paused ? 'Resume motion' : 'Pause motion'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}