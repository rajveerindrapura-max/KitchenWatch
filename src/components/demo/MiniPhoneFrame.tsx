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
      className={`relative bg-[#0b1220] rounded-[30px] p-2 border-2 border-slate-700/80 shadow-2xl overflow-hidden flex flex-col ${className}`}
      style={{
        width: '210px',
        height: '350px',
      }}
    >
      {/* Top speaker & camera pill */}
      <div className="flex items-center justify-between px-3 pt-1 pb-1 shrink-0 z-20">
        <span className="text-[9px] text-white/50 font-mono font-medium">9:41</span>
        <div className="w-16 h-3.5 bg-black rounded-full flex items-center justify-end pr-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue/60" />
        </div>
        {badge ? (
          <span className="text-[8px] text-blue font-semibold uppercase">{badge}</span>
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Screen area */}
      <div className="flex-1 bg-surface rounded-[22px] overflow-hidden flex flex-col relative text-ink border border-border/80">
        {children}
      </div>

      {/* Home indicator */}
      <div className="pt-1.5 pb-0.5 flex justify-center shrink-0">
        <div className="w-20 h-1 bg-white/40 rounded-full" />
      </div>
    </div>
  );
}
