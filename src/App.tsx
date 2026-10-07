import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './lib/useLenis';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import Problem from './components/sections/Problem';
import ProductDemo from './components/demo/ProductDemo';
import BentoGrid from './components/features/BentoGrid';
import HowItWorks from './components/sections/HowItWorks';
import WhoItsFor from './components/sections/WhoItsFor';
import Roadmap from './components/sections/Roadmap';
import Pricing from './components/sections/Pricing';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Logo from './components/ui/Logo';

function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <ProductDemo />
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
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-bg px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <Logo />
        </div>
        <h1 className="font-jakarta font-bold text-ink text-4xl mb-6">{title}</h1>
        <p className="text-ink-2 leading-relaxed mb-4">
          This page is a placeholder. Full content will be added before launch.
        </p>
        <a href="/" className="text-blue hover:underline text-sm font-medium">
          Back to KitchenWatch
        </a>
      </div>
    </div>
  );
}

function App() {
  useLenis();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
      </Routes>
    </Router>
  );
}

export default App;