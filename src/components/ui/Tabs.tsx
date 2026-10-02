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
      aria-label="Role tabs"
      className={`inline-flex gap-1 p-1 rounded-pill ${
        dark ? 'bg-white/10' : 'bg-slate-100'
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
            className={`relative px-5 py-2 text-sm font-jakarta font-semibold rounded-pill transition-colors focus-visible:outline ${
              isActive
                ? dark
                  ? 'text-dark'
                  : 'text-ink'
                : dark
                ? 'text-white/50 hover:text-white/80'
                : 'text-muted hover:text-ink'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="tab-indicator"
                className={`absolute inset-0 rounded-pill ${dark ? 'bg-white' : 'bg-surface'}`}
                style={{ zIndex: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
