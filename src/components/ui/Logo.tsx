interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
  className?: string;
}

const heights = {
  sm: 'h-7',
  md: 'h-8 sm:h-9',
  lg: 'h-10 sm:h-11',
};

export default function Logo({ size = 'md', dark = false, className = '' }: LogoProps) {
  const h = heights[size];

  return (
    <a
      href="/"
      aria-label="KitchenWatch home"
      className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-85 ${className}`}
    >
      <img
        src="/logo-clean.png"
        alt="KitchenWatch"
        className={`${h} w-auto object-contain transition-all`}
        style={{
          filter: dark ? 'brightness(0) invert(1)' : 'brightness(0)',
        }}
      />
    </a>
  );
}