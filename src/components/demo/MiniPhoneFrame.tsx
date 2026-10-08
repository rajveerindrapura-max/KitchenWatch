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
      className={`relative bg-[#101218] rounded-[30px] p-2 border border-slate-800 shadow-float overflow-hidden flex flex-col ${className}`}
      style={{
        width: '210px',
        height: '350px',
      }}
    >
      {/* Top speaker & camera island */}
      <div className="flex items-center justify-between px-3 pt-1 pb-1 shrink-0 z-20">
        <span className="text-[9px] text-slate-400 font-mono font-medium">9:41</span>
        <div className="w-14 h-2.5 bg-slate-800 rounded-full flex items-center justify-end pr-1" />
        {badge ? (
          <span className="text-[8px] text-blue font-semibold uppercase">{badge}</span>
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Screen area */}
      <div className="flex-1 bg-surface rounded-[22px] overflow-hidden flex flex-col relative text-ink border border-hairline">
        {children}
      </div>

      {/* Home indicator */}
      <div className="pt-1.5 pb-0.5 flex justify-center shrink-0">
        <div className="w-14 h-1 bg-slate-700/50 rounded-full" />
      </div>
    </div>
  );
}
