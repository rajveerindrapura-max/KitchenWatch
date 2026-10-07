import React, { Suspense, lazy } from 'react';
import HeroText from './HeroText';

const HeroScene = lazy(() => import('../../three/HeroScene'));

function SceneSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="20" y="160" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="35" y="134" width="36" height="28" rx="3" fill="#2563EB" opacity="0.8" />
        <rect x="75" y="140" width="36" height="22" rx="3" fill="#dbeafe" />
        <rect x="120" y="180" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="135" y="150" width="36" height="32" rx="3" fill="#e2e8f0" />
        <rect x="175" y="155" width="36" height="27" rx="3" fill="#38BDF8" opacity="0.7" />
        <rect x="220" y="165" width="100" height="16" rx="4" fill="#e2e8f0" />
        <rect x="235" y="138" width="36" height="29" rx="3" fill="#e2e8f0" />
        <rect x="275" y="143" width="36" height="24" rx="3" fill="#dbeafe" />
        <line x1="70" y1="162" x2="170" y2="180" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="170" y1="180" x2="270" y2="165" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
        <rect x="115" y="140" width="12" height="12" rx="2" fill="#38BDF8" opacity="0.9" />
        <circle cx="38" cy="130" r="5" fill="#B45309" opacity="0.9" />
      </svg>
    </div>
  );
}

class HeroErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: Error) {
    console.warn('Hero 3D fallback active:', err);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg pt-24 md:pt-28 lg:pt-32 pb-10 md:pb-12">
      {/* Radial glow behind scene */}
      <div
        className="absolute right-0 top-0 w-[55%] h-full pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 65% 40%, rgba(56,189,248,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text */}
        <div className="flex items-center">
          <HeroText />
        </div>

        {/* 3D scene clipped cleanly to prevent canvas bleed */}
        <div className="flex items-center justify-center h-[52vw] md:h-[460px] lg:h-[520px] max-h-[540px] overflow-hidden rounded-3xl">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <HeroErrorBoundary fallback={<SceneSkeleton />}>
              <Suspense fallback={<SceneSkeleton />}>
                <HeroScene />
              </Suspense>
            </HeroErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}