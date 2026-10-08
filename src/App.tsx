import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './lib/useLenis';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import MobileBottomBar from './components/layout/MobileBottomBar';

// 11 Home Sections in Exact Required Order
import Hero from './components/hero/Hero';
import ProblemBenefits from './components/sections/ProblemBenefits';
import ProductDemo from './components/demo/ProductDemo';
import BentoGrid from './components/features/BentoGrid';
import HowItWorks from './components/sections/HowItWorks';
import SavingsCalculator from './components/sections/SavingsCalculator';
import WhoItsFor from './components/sections/WhoItsFor';
import Roadmap from './components/sections/Roadmap';
import Pricing from './components/sections/Pricing';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';

// Dedicated Pages
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Nav />
      <main className="flex-1">
        {/* Section 1: Hero (Approved headline, serif italic, 3D scene) */}
        <Hero />

        {/* Section 2: Problem & Benefits (Scroll highlight + 4 live micro visuals) */}
        <ProblemBenefits />

        {/* Section 3: Interactive Product Demo (30s multi-outlet simulator) */}
        <ProductDemo />

        {/* Section 4: Features Bento Grid (Semantic color mapped) */}
        <BentoGrid />

        {/* Section 5: How It Works (Dark #0B1220 sequence) */}
        <HowItWorks />

        {/* Section 6: Savings Estimator (Interactive sliders + Indian rupee math) */}
        <SavingsCalculator />

        {/* Section 7: Who It Is For (5 audience cards, role tabs, honest comparison) */}
        <WhoItsFor />

        {/* Section 8: Pilot Program & Roadmap (Now, Next, Later) */}
        <Roadmap />

        {/* Section 9: Pricing (Starter, Growth recommended, Business) */}
        <Pricing />

        {/* Section 10: About Us */}
        <About />

        {/* Section 11: FAQ (13 concise questions <= 30 words) */}
        <FAQ />

        {/* Section 12: Final CTA (Dark #0B1220 with LeadForm & WhatsApp) */}
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

function App() {
  useLenis();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/refund-policy" element={<LegalPage type="refund-policy" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;