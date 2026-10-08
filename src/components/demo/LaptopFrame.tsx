import type { ReactNode } from 'react';

interface LaptopFrameProps {
  children: ReactNode;
  badge?: string;
}

export default function LaptopFrame({ children, badge }: LaptopFrameProps) {
  return (
    <div className="w-full relative select-none">
      {/* Laptop Screen Body with 2px ink outline */}
      <div className="bg-[#1C1B18] p-2.5 sm:p-3 rounded-2xl sm:rounded-[22px] border-2 border-[#1C1B18] shadow-hard-lg">
        {/* Top Header Dots & Badge */}
        <div className="flex items-center justify-between px-2 pb-2 pt-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6F3E4]/30 inline-block border border-[#1C1B18]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6F3E4]/30 inline-block border border-[#1C1B18]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6F3E4]/30 inline-block border border-[#1C1B18]" />
          </div>
          {badge && (
            <span className="text-[10px] font-figtree font-bold tracking-wider uppercase text-[#1C1B18] bg-[#FBEFB4] px-2.5 py-0.5 rounded-full border border-[#1C1B18]">
              {badge}
            </span>
          )}
          <div className="w-8" />
        </div>

        {/* Display Viewport: Warm Ivory */}
        <div className="bg-[#FFFEF2] rounded-lg sm:rounded-xl overflow-hidden border-[1.5px] border-[#1C1B18] text-[#1C1B18] h-[320px] sm:h-[360px] md:h-[390px] flex flex-col relative font-figtree">
          {children}
        </div>
      </div>

      {/* Flat Laptop Base with hard ink outline */}
      <div className="relative mx-auto w-[104%] -ml-[2%] h-3 bg-[#F7F5E4] rounded-b-xl border-2 border-t-0 border-[#1C1B18] shadow-hard flex justify-center items-start">
        <div className="w-20 h-1 bg-[#1C1B18]/40 rounded-b-md" />
      </div>
    </div>
  );
}
