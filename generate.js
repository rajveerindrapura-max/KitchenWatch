const fs = require('fs');
const path = require('path');

const projectDir = '/Users/rajveersingh/Downloads/kitchenwatch website';

const dirs = [
  'src/components/layout',
  'src/components/hero',
  'src/components/carousel',
  'src/components/features',
  'src/components/sections',
  'src/components/ui',
  'src/three',
  'src/content',
  'src/lib',
  'src/styles',
  'public/screens'
];

dirs.forEach(d => fs.mkdirSync(path.join(projectDir, d), { recursive: true }));
fs.writeFileSync(path.join(projectDir, 'public/screens/.gitkeep'), '');

const files = {
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        blue: 'var(--blue)',
        'blue-hover': 'var(--blue-hover)',
        sky: 'var(--sky)',
        dark: 'var(--dark)',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      borderRadius: {
        card: '24px',
        panel: '20px',
      },
    },
  },
  plugins: [],
}`,
  'src/styles/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #FBFCFE;
  --surface: #FFFFFF;
  --ink: #0B1220;
  --ink-2: #475569;
  --muted: #64748B;
  --border: #E2E8F0;
  --blue: #2563EB;
  --blue-hover: #1D4ED8;
  --sky: #38BDF8;
  --dark: #0B1220;
}

body {
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

*:focus-visible {
  outline: 2px solid var(--blue);
  outline-offset: 2px;
}

html.lenis { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }`,
  'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/instrument-serif/400-italic.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
  'src/App.tsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './lib/useLenis';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Problem from './components/sections/Problem';
import Carousel from './components/carousel/Carousel';
import BentoGrid from './components/features/BentoGrid';
import HowItWorks from './components/sections/HowItWorks';
import WhoItsFor from './components/sections/WhoItsFor';
import Roadmap from './components/sections/Roadmap';
import Pricing from './components/sections/Pricing';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

const HomePage = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Carousel />
      <BentoGrid />
      <HowItWorks />
      <WhoItsFor />
      <Roadmap />
      <Pricing />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

const PrivacyPage = () => (
  <div className="min-h-screen p-24 text-center">
    <h1 className="text-4xl font-jakarta font-bold mb-4">Privacy Policy</h1>
    <p>Placeholder privacy policy page.</p>
  </div>
);

const TermsPage = () => (
  <div className="min-h-screen p-24 text-center">
    <h1 className="text-4xl font-jakarta font-bold mb-4">Terms of Service</h1>
    <p>Placeholder terms of service page.</p>
  </div>
);

function App() {
  useLenis();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
}
export default App;`,
  'src/lib/useLenis.ts': `import { useEffect } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}`,
  'src/lib/submitLead.ts': `export interface LeadData {
  name: string;
  business: string;
  outlets: string;
  phone: string;
  email: string;
  message?: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  console.log('Lead submitted:', data);
  await new Promise(r => setTimeout(r, 1200));
}`,
  'src/content/site.ts': `export const site = {
  nav: {
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo'
  },
  hero: {
    pill: 'Now onboarding early partners',
    headline: 'Know your <em class="font-serif italic font-normal text-blue">stock</em>. Move it where it\\'s needed.',
    subheadline: 'Control inventory across multiple outlets. Let customers order through a QR code. Simple, fast, built for restaurants.',
    ctaPrimary: 'Start free trial',
    ctaSecondary: 'Book a demo',
    trustLine: 'Early access pilot program open now.'
  },
  problem: {
    heading: 'The problem',
    words: 'You are losing money to wastage. You have stock sitting in one outlet while another runs out. You are tracking it all on WhatsApp and notebooks.'.split(' '),
    painPoints: [
      { title: 'Wastage', desc: 'Expired ingredients eating your margin.' },
      { title: 'Blind spots', desc: 'No real-time view of what is where.' },
      { title: 'Chaos', desc: 'Manual stock transfers causing delays.' }
    ]
  },
  carousel: {
    heading: 'See it in action',
    subheading: 'Everything you need, nothing you do not.',
    slides: [
      { id: '1', title: 'Dashboard', caption: 'Your multi-outlet view', type: 'desktop', file: 'dashboard.png' },
      { id: '2', title: 'Mobile App', caption: 'Track on the go', type: 'mobile', file: 'mobile.png' }
    ]
  },
  features: {
    heading: 'Features',
    subheading: 'Built to give you control',
    tiles: [
      { id: '1', title: 'Multi-outlet dashboard', desc: 'See everything at a glance', size: 'large' },
      { id: '2', title: 'Stock movement ledger', desc: 'Track every item', size: 'medium' },
      { id: '3', title: 'Low-stock alerts', desc: 'Never run out', size: 'small' },
      { id: '4', title: 'Expiry tracking', desc: 'Stop wastage', size: 'small' },
      { id: '5', title: 'Transfers', desc: 'Move stock easily', size: 'medium' },
      { id: '6', title: 'Wastage tracking', desc: 'Know your losses', size: 'small' },
      { id: '7', title: 'Roles', desc: 'Control access', size: 'small' },
      { id: '8', title: 'QR Ordering', desc: 'Let customers order', size: 'small', badge: 'Coming soon' }
    ]
  },
  howItWorks: {
    heading: 'How it works',
    steps: [
      { number: '01', title: 'Setup', desc: 'Add your outlets and stock.' },
      { number: '02', title: 'Track', desc: 'Monitor movements in real-time.' },
      { number: '03', title: 'Control', desc: 'Transfer stock and reduce waste.' }
    ],
    note: 'Simple as that.'
  },
  whoFor: {
    heading: 'Who it is for',
    audiences: [
      { title: 'Owners', desc: 'Total visibility.' },
      { title: 'Managers', desc: 'Easy operations.' },
      { title: 'Staff', desc: 'Simple tracking.' }
    ],
    roles: [
      { id: 'owner', label: 'Owner', title: 'For Owners', desc: 'See the big picture.', capabilities: ['Dashboard access', 'Reports'] },
      { id: 'manager', label: 'Manager', title: 'For Managers', desc: 'Run the show.', capabilities: ['Stock transfers', 'Alerts'] },
      { id: 'employee', label: 'Employee', title: 'For Staff', desc: 'Do the work.', capabilities: ['Log wastage', 'Receive stock'] }
    ]
  },
  roadmap: {
    heading: 'Roadmap',
    desc: 'Where we are heading.',
    items: [
      { phase: 'Now', label: 'Core', features: ['Inventory', 'Transfers', 'Alerts', 'Dashboard'] },
      { phase: 'Next', label: 'Ordering', features: ['QR ordering'] },
      { phase: 'Later', label: 'Expansion', features: ['WhatsApp alerts', 'Supplier messaging', 'Hindi language'] }
    ],
    earlyAccess: {
      heading: 'Join Early Access',
      desc: 'Get involved in shaping the product.',
      cta: 'Apply now'
    }
  },
  pricing: {
    heading: 'Simple pricing',
    plans: [
      { id: 'starter', name: 'Starter', outlets: '1 outlet', price: { monthly: 'TODO', yearly: 'TODO' }, features: ['Basic inventory', 'Alerts'] },
      { id: 'growth', name: 'Growth', outlets: '2-5 outlets', price: { monthly: 'TODO', yearly: 'TODO' }, features: ['Everything in Starter', 'Transfers'], recommended: true },
      { id: 'business', name: 'Business', outlets: 'Unlimited', price: { monthly: 'TODO', yearly: 'TODO' }, features: ['Everything in Growth', 'API access'] }
    ],
    note: 'GST extra. Free 14-day trial.',
    customLine: 'Need a custom plan? Talk to us.',
    TODO: 'prices'
  },
  about: {
    heading: 'Built to make inventory simple',
    story: 'We saw restaurants struggling and decided to fix it.',
    beliefs: 'Simplicity wins.',
    principles: [
      { number: '01', title: 'Fast', desc: 'No loading screens.' },
      { number: '02', title: 'Simple', desc: 'No training required.' },
      { number: '03', title: 'Reliable', desc: 'It just works.' },
      { number: '04', title: 'Fair', desc: 'Transparent pricing.' }
    ],
    founder: { name: 'TODO', role: 'TODO', bio: 'TODO', TODO: true }
  },
  faq: {
    items: [
      { q: 'Is it hard to set up?', a: 'No, it takes minutes.' },
      { q: 'Can I use it on mobile?', a: 'Yes, it works on any device.' }
    ]
  },
  cta: {
    heading: 'Stop guessing your stock.',
    subline: 'Start your free trial today.',
    form: { fields: ['Name', 'Business', 'Outlets', 'Phone', 'Email'] },
    whatsapp: { number: 'TODO', label: 'Chat on WhatsApp' }
  },
  footer: {
    tagline: 'KitchenWatch. Inventory done right.',
    links: { product: [], company: [], legal: [] },
    copyright: '© 2026 KitchenWatch. All rights reserved.'
  }
};`,
  'src/components/layout/Nav.tsx': `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import { site } from '../../content/site';
import MagneticButton from '../ui/MagneticButton';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${scrolled ? 'bg-surface/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}\`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {site.nav.links.map(link => (
            <a key={link.label} href={link.href} className="text-ink-2 hover:text-blue transition-colors text-sm font-medium">{link.label}</a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton><button className="px-5 py-2.5 rounded-full border border-border text-sm font-medium hover:bg-slate-50 transition-colors">{site.nav.ctaSecondary}</button></MagneticButton>
          <MagneticButton><button className="px-5 py-2.5 rounded-full bg-blue text-white text-sm font-medium hover:bg-blue-hover transition-colors">{site.nav.ctaPrimary}</button></MagneticButton>
        </div>
        <button className="md:hidden" onClick={() => setMobileOpen(true)}><Menu /></button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="fixed inset-0 bg-surface z-50 flex flex-col p-6">
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button onClick={() => setMobileOpen(false)}><X /></button>
            </div>
            <div className="flex flex-col gap-6 text-2xl font-jakarta font-semibold">
              {site.nav.links.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Nav;`,
  'src/components/layout/Footer.tsx': `import React from 'react';
import Logo from '../ui/Logo';
import { site } from '../../content/site';

const Footer = () => (
  <footer className="bg-surface border-t border-border py-16">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <Logo />
        <p className="mt-4 text-ink-2 text-sm">{site.footer.tagline}</p>
      </div>
      <div>
        <p className="text-sm text-ink-2 mt-8">{site.footer.copyright}</p>
      </div>
    </div>
  </footer>
);
export default Footer;`,
  'src/components/ui/Logo.tsx': `import React from 'react';

const Logo = ({ size = 32 }: { size?: number }) => (
  <div className="flex items-center gap-3">
    <div style={{ width: size, height: size }} className="rounded-full bg-blue text-white flex items-center justify-center font-bold relative">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    </div>
    <span className="font-jakarta font-semibold text-lg text-ink">KitchenWatch</span>
  </div>
);
export default Logo;`,
  'src/components/ui/Section.tsx': `import React from 'react';

export const Section = ({ children, id, className = '' }: { children: React.ReactNode, id?: string, className?: string }) => (
  <section id={id} className={\`py-20 md:py-32 max-w-7xl mx-auto px-6 \${className}\`}>
    {children}
  </section>
);
export default Section;`,
  'src/components/ui/MagneticButton.tsx': `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, strength = 20 }: { children: React.ReactElement, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * (strength / 100), y: middleY * (strength / 100) });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} animate={{ x: position.x, y: position.y }} transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }} className="inline-block">
      {children}
    </motion.div>
  );
};
export default MagneticButton;`,
  'src/components/ui/Reveal.tsx': `import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }} whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut', delay }} className={className}>
      {children}
    </motion.div>
  );
};
export default Reveal;`,
  'src/components/hero/HeroText.tsx': `import React from 'react';
import { site } from '../../content/site';
import MagneticButton from '../ui/MagneticButton';

const HeroText = () => {
  return (
    <div className="flex flex-col items-start justify-center h-full pt-32 pb-16 z-10 relative">
      <div className="px-4 py-1.5 rounded-full border border-blue/20 bg-blue/5 text-blue text-sm font-medium mb-8">
        {site.hero.pill}
      </div>
      <h1 className="text-5xl md:text-7xl font-jakarta font-extrabold text-ink leading-[1.1] tracking-tight mb-6" dangerouslySetInnerHTML={{ __html: site.hero.headline }} />
      <p className="text-lg md:text-xl text-ink-2 max-w-xl mb-10 leading-relaxed">
        {site.hero.subheadline}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
        <MagneticButton>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue text-white font-medium hover:bg-blue-hover transition-colors shadow-lg shadow-blue/20">
            {site.hero.ctaPrimary}
          </button>
        </MagneticButton>
        <MagneticButton>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-border text-ink font-medium hover:bg-slate-50 transition-colors">
            {site.hero.ctaSecondary}
          </button>
        </MagneticButton>
      </div>
      <p className="text-sm text-muted font-medium">{site.hero.trustLine}</p>
    </div>
  );
};
export default HeroText;`,
  'src/components/hero/Hero.tsx': `import React, { Suspense, lazy } from 'react';
import HeroText from './HeroText';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroScene = lazy(() => import('../../three/HeroScene'));

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 h-full order-2 md:order-1 flex items-center">
        <HeroText />
      </div>
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2 relative mt-10 md:mt-0">
        <div className="absolute inset-0 bg-blue/5 rounded-full blur-[100px] z-0" />
        <div className="w-full h-full relative z-10">
          <Suspense fallback={<div className="w-full h-full bg-slate-100 rounded-3xl animate-pulse" />}>
            <HeroScene />
          </Suspense>
        </div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hidden md:block">
        <ChevronDown />
      </motion.div>
    </section>
  );
};
export default Hero;`,
  'src/three/HeroScene.tsx': `import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';

function Scene() {
  const group = useRef<any>(null);
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 0.2, 2]} />
          <meshStandardMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
      </Float>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      <Environment preset="city" environmentIntensity={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
      <Scene />
    </Canvas>
  );
}`,
  'src/components/sections/Problem.tsx': `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '../../content/site';
import Section from '../ui/Section';

const Problem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] });

  return (
    <Section id="problem" className="bg-surface border-y border-border !py-32">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <h2 className="text-xl font-jakarta font-semibold text-blue mb-12">{site.problem.heading}</h2>
        <p className="text-3xl md:text-5xl font-jakarta font-bold leading-tight text-ink flex flex-wrap justify-center gap-x-3 gap-y-2">
          {site.problem.words.map((word, i) => {
            const start = i / site.problem.words.length;
            const end = start + (1 / site.problem.words.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            return <motion.span key={i} style={{ opacity }}>{word}</motion.span>;
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto text-center">
        {site.problem.painPoints.map((pt, i) => (
          <div key={i} className="px-6">
            <h3 className="text-xl font-semibold mb-3">{pt.title}</h3>
            <p className="text-ink-2">{pt.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Problem;`,
  'src/components/carousel/Carousel.tsx': `import React from 'react';
import Section from '../ui/Section';

const Carousel = () => {
  return (
    <Section id="carousel" className="overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-jakarta font-bold mb-4">See it in action</h2>
        <p className="text-lg text-ink-2">Everything you need, nothing you do not.</p>
      </div>
      <div className="relative h-[600px] w-full flex items-center justify-center bg-slate-50 rounded-3xl border border-border">
        <p className="text-muted">Carousel Implementation Placeholder</p>
      </div>
    </Section>
  );
};
export default Carousel;`,
  'src/components/features/BentoGrid.tsx': `import React from 'react';
import Section from '../ui/Section';

const BentoGrid = () => (
  <Section id="features">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-jakarta font-bold mb-4">Features</h2>
      <p className="text-lg text-ink-2">Built to give you control</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-3 h-[800px]">
      <div className="md:col-span-2 md:row-span-2 bg-white border border-border rounded-card p-8 flex flex-col justify-end">Large</div>
      <div className="md:col-span-2 md:row-span-1 bg-white border border-border rounded-card p-8 flex flex-col justify-end">Medium</div>
      <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-end">Small</div>
      <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-end">Small</div>
      <div className="md:col-span-2 bg-white border border-border rounded-card p-8 flex flex-col justify-end">Medium</div>
      <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-end">Small</div>
      <div className="bg-white border border-border rounded-card p-8 flex flex-col justify-end">Small</div>
    </div>
  </Section>
);
export default BentoGrid;`,
  'src/components/sections/HowItWorks.tsx': `import React from 'react';
import Section from '../ui/Section';

const HowItWorks = () => (
  <section id="how-it-works" className="bg-dark text-white py-32">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-jakarta font-bold mb-16 text-center">How it works</h2>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2 space-y-16">
          {[1,2,3].map(i => (
            <div key={i} className="min-h-[30vh]">
              <h3 className="text-2xl font-bold mb-4">Step {i}</h3>
              <p className="text-slate-400">Description for step {i}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 sticky top-32 h-[600px] bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center">
          Mockup Area
        </div>
      </div>
    </div>
  </section>
);
export default HowItWorks;`,
  'src/components/sections/WhoItsFor.tsx': `import React from 'react';
import Section from '../ui/Section';

const WhoItsFor = () => (
  <Section id="who">
    <h2 className="text-4xl font-jakarta font-bold mb-16 text-center">Who it is for</h2>
    <div className="flex gap-4 justify-center">
      Tabs Placeholder
    </div>
  </Section>
);
export default WhoItsFor;`,
  'src/components/sections/Roadmap.tsx': `import React from 'react';
import Section from '../ui/Section';

const Roadmap = () => (
  <Section id="roadmap" className="bg-slate-50 border-y border-border">
    <h2 className="text-4xl font-jakarta font-bold mb-16 text-center">Roadmap</h2>
    <div className="flex flex-col md:flex-row gap-8">
       Roadmap items
    </div>
  </Section>
);
export default Roadmap;`,
  'src/components/sections/Pricing.tsx': `import React from 'react';
import Section from '../ui/Section';

const Pricing = () => (
  <Section id="pricing">
    <h2 className="text-4xl font-jakarta font-bold mb-16 text-center">Simple pricing</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       Pricing Cards
    </div>
  </Section>
);
export default Pricing;`,
  'src/components/sections/About.tsx': `import React from 'react';
import Section from '../ui/Section';

const About = () => (
  <Section id="about" className="bg-surface border-t border-border">
    <h2 className="text-4xl font-jakarta font-bold mb-8 text-center">Built to make inventory simple</h2>
    <p className="text-center max-w-2xl mx-auto text-ink-2">Story...</p>
  </Section>
);
export default About;`,
  'src/components/sections/FAQ.tsx': `import React from 'react';
import Section from '../ui/Section';

const FAQ = () => (
  <Section id="faq">
    <h2 className="text-4xl font-jakarta font-bold mb-16 text-center">FAQ</h2>
    <div className="max-w-2xl mx-auto space-y-4">
      FAQ Items Placeholder
    </div>
  </Section>
);
export default FAQ;`,
  'src/components/sections/CTA.tsx': `import React from 'react';
import Section from '../ui/Section';

const CTA = () => (
  <section className="bg-dark text-white py-32">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-jakarta font-bold mb-8">Stop guessing your stock.</h2>
      <div className="bg-slate-800 p-8 rounded-3xl max-w-md mx-auto">
        Form Placeholder
      </div>
    </div>
  </section>
);
export default CTA;`
};

for (const [filepath, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(projectDir, filepath), content);
}
