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
      className={`inline-flex items-center gap-1.5 p-1 rounded-full border ${
        dark
          ? 'bg-[#1F4D47]/60 border-[#F6F3E4]/20'
          : 'bg-[#F7F5E4] border-[#1C1B18]/40'
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
            className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-figtree font-semibold rounded-full transition-colors z-10 ${
              isActive
                ? dark
                  ? 'text-[#1F4D47] font-bold'
                  : 'text-[#1C1B18] font-bold'
                : dark
                ? 'text-[#F6F3E4]/70 hover:text-[#F6F3E4]'
                : 'text-[#4B4A44] hover:text-[#1C1B18]'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="tab-indicator"
                className={`absolute inset-0 rounded-full ${
                  dark ? 'bg-[#F6F3E4]' : 'bg-[#E9D8FD] border-[1.5px] border-[#1C1B18]'
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
