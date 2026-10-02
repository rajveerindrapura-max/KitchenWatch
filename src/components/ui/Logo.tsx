interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
}

const sizes = {
  sm: { icon: 28, text: 'text-base' },
  md: { icon: 34, text: 'text-lg' },
  lg: { icon: 42, text: 'text-2xl' },
};

export default function Logo({ size = 'md', dark = false }: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <a
      href="/"
      aria-label="KitchenWatch home"
      className="flex items-center gap-2.5 group"
    >
      {/* Icon mark: eye with check */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="34" height="34" rx="9" fill="#2563EB" />
        {/* Eye outline */}
        <path
          d="M6 17C6 17 10 10 17 10C24 10 28 17 28 17C28 17 24 24 17 24C10 24 6 17 6 17Z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Pupil */}
        <circle cx="17" cy="17" r="3" fill="white" />
        {/* Check mark over the eye */}
        <path
          d="M14 17.5L16.2 19.5L20 15"
          stroke="#2563EB"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Wordmark */}
      <span
        className={`font-jakarta font-bold tracking-tight ${text} ${
          dark ? 'text-white' : 'text-ink'
        } group-hover:opacity-80 transition-opacity`}
      >
        KitchenWatch
      </span>
    </a>
  );
}