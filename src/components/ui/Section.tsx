import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({ id, className = '', children, dark = false }: SectionProps) {
  const paddingClass = dark ? 'py-16 md:py-28' : 'py-16 md:py-24';
  return (
    <section
      id={id}
      className={`px-6 ${paddingClass} ${dark ? 'bg-dark text-white' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}