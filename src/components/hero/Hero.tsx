import HeroText from './HeroText';
import HeroMockup from './HeroMockup';
import MeshGradient from './MeshGradient';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 border-b border-border"
    >
      {/* Soft Stripe-style Mesh Gradient in background */}
      <MeshGradient />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        {/* Apple-grade Headline, Buttons & Trust line */}
        <HeroText />

        {/* Realistic Layered Product UI Mockup */}
        <HeroMockup />
      </div>
    </section>
  );
}