import { useEffect } from 'react';
import Nav from '../components/layout/Nav';
import AnnouncementStrip from '../components/layout/AnnouncementStrip';
import Footer from '../components/layout/Footer';
import Pricing from '../components/sections/Pricing';
import SavingsCalculator from '../components/sections/SavingsCalculator';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import MobileBottomBar from '../components/layout/MobileBottomBar';

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Pricing Plans — KitchenWatch';
  }, []);

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1">
        <Pricing />
        <SavingsCalculator />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
