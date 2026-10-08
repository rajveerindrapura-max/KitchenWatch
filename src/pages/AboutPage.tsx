import { useEffect } from 'react';
import Nav from '../components/layout/Nav';
import AnnouncementStrip from '../components/layout/AnnouncementStrip';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';
import Roadmap from '../components/sections/Roadmap';
import CTA from '../components/sections/CTA';
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp';
import MobileBottomBar from '../components/layout/MobileBottomBar';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'About Us — KitchenWatch';
  }, []);

  return (
    <div className="min-h-screen bg-bg flex flex-col font-sans">
      <AnnouncementStrip />
      <Nav />
      <main className="flex-1">
        <About />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
