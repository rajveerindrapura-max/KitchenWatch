import HeroText from './HeroText';
import HeroRibbons from './HeroRibbons';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FFFEF2] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 border-b border-[#1C1B18]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Headline, Buttons & Trust line */}
        <HeroText />

        {/* Kinetic Text Ribbons & Center Pill */}
        <div className="mt-4 sm:mt-6">
          <HeroRibbons />
        </div>
      </div>
    </section>
  );
}