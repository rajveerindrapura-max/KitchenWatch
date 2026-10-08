import type { ReactNode } from 'react';

interface LaptopFrameProps {
  children: ReactNode;
  badge?: string;
}

export default function LaptopFrame({ children, badge }: LaptopFrameProps) {
  return (
    <div className="w-full relative select-none">
      {/* Laptop Screen Body with Apple-style slate finish and soft float shadow */}
      <div className="bg-[#101218] p-2 sm:p-2.5 rounded-2xl sm:rounded-[20px] border border-slate-800/80 shadow-float">
        {/* Top Header Dots & Badge */}
        <div className="flex items-center justify-between px-2 pb-1.5 pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 inline-block" />
          </div>
          {badge && (
            <span className="text-[10px] font-sans font-medium tracking-wide uppercase text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/50">
              {badge}
            </span>
          )}
          <div className="w-8" />
        </div>

        {/* Display Viewport */}
        <div className="bg-surface rounded-lg sm:rounded-xl overflow-hidden border border-hairline text-ink h-[320px] sm:h-[360px] md:h-[390px] flex flex-col relative font-sans">
          {children}
        </div>
      </div>

      {/* Sleek Aluminum Laptop Base */}
      <div className="relative mx-auto w-[104%] -ml-[2%] h-2.5 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl border-t border-slate-400/30 shadow-subtle flex justify-center items-start">
        <div className="w-16 h-1 bg-slate-400/40 rounded-b-md" />
      </div>
    </div>
  );
}
