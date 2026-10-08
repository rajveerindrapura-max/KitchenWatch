import HeroText from './HeroText';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#FFFEF2] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 border-b border-[#1C1B18]/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Editorial Headline, Buttons & Trust line */}
        <HeroText />
      </div>
    </section>
  );
}