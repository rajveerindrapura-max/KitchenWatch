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
      className={`px-4 sm:px-6 ${paddingClass} ${
        dark ? 'bg-[#1F4D47] text-[#F6F3E4]' : 'bg-[#FFFEF2] text-[#1C1B18]'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}