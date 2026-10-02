import type { ReactNode } from 'react';

interface BrowserFrameProps {
  children: ReactNode;
}

export default function BrowserFrame({ children }: BrowserFrameProps) {
  return (
    <div className="w-full h-full flex flex-col bg-surface border border-border rounded-panel shadow-float overflow-hidden">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-slate-50 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-amber-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 bg-white rounded border border-border h-5 flex items-center px-2">
          <span className="text-[10px] text-muted truncate">app.kitchenwatch.in</span>
        </div>
      </div>
      {/* Screen content */}
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}
