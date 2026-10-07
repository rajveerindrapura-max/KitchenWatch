import type { ReactNode } from 'react';

interface LaptopFrameProps {
  children: ReactNode;
  badge?: string;
}

export default function LaptopFrame({ children, badge }: LaptopFrameProps) {
  return (
    <div className="w-full relative select-none">
      {/* Laptop Screen Body */}
      <div className="bg-[#0f172a] p-2.5 sm:p-3 rounded-2xl sm:rounded-[22px] shadow-2xl border border-slate-700/60">
        {/* Top Camera Notch */}
        <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-600/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-slate-600/80 inline-block" />
            <span className="w-2 h-2 rounded-full bg-slate-600/80 inline-block" />
          </div>
          {badge && (
            <span className="text-[10px] font-jakarta font-semibold tracking-wider uppercase text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/60">
              {badge}
            </span>
          )}
          <div className="w-8" />
        </div>

        {/* Display Viewport */}
        <div className="bg-surface rounded-lg sm:rounded-xl overflow-hidden border border-border text-ink h-[320px] sm:h-[360px] md:h-[390px] flex flex-col relative font-inter">
          {children}
        </div>
      </div>

      {/* Laptop Base/Hinge */}
      <div className="relative mx-auto w-[106%] -ml-[3%] h-3.5 bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-b-xl border-t border-slate-300 shadow-md flex justify-center items-start">
        <div className="w-16 sm:w-24 h-1 bg-slate-400/80 rounded-b-md" />
      </div>
    </div>
  );
}
