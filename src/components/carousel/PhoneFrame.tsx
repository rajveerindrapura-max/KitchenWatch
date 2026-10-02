import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div
      className="relative mx-auto bg-[#1a1a1a] rounded-[40px] shadow-float overflow-hidden"
      style={{ width: '260px', height: '520px', border: '6px solid #333' }}
    >
      {/* Notch */}
      <div
        className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#1a1a1a] rounded-full z-10"
        style={{ width: '100px', height: '24px' }}
      />
      {/* Screen content */}
      <div
        className="absolute inset-0 rounded-[34px] overflow-hidden bg-bg"
        style={{ top: '8px', bottom: '8px', left: '0', right: '0' }}
      >
        {children}
      </div>
      {/* Home indicator */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/30 rounded-full"
        style={{ width: '100px', height: '4px' }}
      />
    </div>
  );
}
