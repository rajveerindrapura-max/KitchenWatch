import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({ id, className = '', children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-[80px] md:py-[140px] ${dark ? 'bg-dark text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}