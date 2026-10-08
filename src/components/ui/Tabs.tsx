import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  dark?: boolean;
  children?: ReactNode;
}

export default function Tabs({ tabs, activeId, onChange, dark = false }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Selection tabs"
      className={`inline-flex items-center gap-1 p-1 rounded-full border ${
        dark
          ? 'bg-white/10 border-white/15'
          : 'bg-slate-200/70 border-border/80'
      }`}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-sans font-medium rounded-full transition-colors z-10 ${
              isActive
                ? dark
                  ? 'text-white font-semibold'
                  : 'text-ink font-semibold'
                : dark
                ? 'text-white/70 hover:text-white'
                : 'text-muted hover:text-ink'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="tab-indicator"
                className={`absolute inset-0 rounded-full ${
                  dark ? 'bg-white/20' : 'bg-surface shadow-xs border border-border/50'
                }`}
                style={{ zIndex: -1 }}
                transition={{ type: 'spring', stiffness: 420, damping: 32 }}
              />
            )}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
