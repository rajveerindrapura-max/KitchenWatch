import type { ReactNode } from 'react';

interface MiniPhoneFrameProps {
  children: ReactNode;
  className?: string;
  badge?: string;
}

export default function MiniPhoneFrame({
  children,
  className = '',
  badge,
}: MiniPhoneFrameProps) {
  return (
    <div
      className={`relative bg-[#1C1B18] rounded-[30px] p-2 border-2 border-[#1C1B18] shadow-hard-lg overflow-hidden flex flex-col ${className}`}
      style={{
        width: '210px',
        height: '350px',
      }}
    >
      {/* Top speaker & camera pill */}
      <div className="flex items-center justify-between px-3 pt-1 pb-1 shrink-0 z-20">
        <span className="text-[9px] text-[#F6F3E4]/60 font-mono font-medium">9:41</span>
        <div className="w-16 h-3 bg-[#2D2C28] rounded-full flex items-center justify-end pr-1.5" />
        {badge ? (
          <span className="text-[8px] text-[#E9D8FD] font-bold uppercase">{badge}</span>
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Screen area */}
      <div className="flex-1 bg-[#FFFEF2] rounded-[22px] overflow-hidden flex flex-col relative text-[#1C1B18] border-[1.5px] border-[#1C1B18]">
        {children}
      </div>

      {/* Home indicator */}
      <div className="pt-1.5 pb-0.5 flex justify-center shrink-0">
        <div className="w-16 h-1 bg-[#F6F3E4]/40 rounded-full" />
      </div>
    </div>
  );
}
