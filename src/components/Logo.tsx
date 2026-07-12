import Link from 'next/link';

interface LogoProps {
  /** 'light' = dark text (on white bg). 'dark' = light text (on dark bg). */
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const iconSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';
  const iconInner = size === 'sm' ? 18 : 22;
  const nameSize = size === 'sm' ? 'text-sm' : 'text-[15px]';
  const nameColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'dark' ? 'text-brand-400' : 'text-brand-500';

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 no-underline"
      aria-label="Car Locksmith Leicester — home"
    >
      {/* Icon mark */}
      <span
        className={`${iconSize} flex shrink-0 items-center justify-center rounded-xl bg-brand-500 shadow-sm`}
        aria-hidden="true"
      >
        <KeyIcon size={iconInner} />
      </span>

      {/* Wordmark */}
      <span className={`hidden flex-col leading-none sm:flex ${nameColor}`}>
        <span className={`${nameSize} font-extrabold tracking-tight`}>
          Car Locksmith
        </span>
        <span className={`${nameSize} font-black tracking-tight ${accentColor}`}>
          Leicester
        </span>
      </span>
    </Link>
  );
}

/** Custom transponder key icon — more recognisable in automotive locksmith context */
function KeyIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {/* Key head — bold circle */}
      <circle cx="8.5" cy="8.5" r="5" stroke="white" strokeWidth="2.2" />
      {/* Keyhole dot */}
      <circle cx="8.5" cy="8.5" r="1.5" fill="white" />
      {/* Key shaft */}
      <path
        d="M13 8.5h7.5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Key teeth — two notches going down */}
      <path
        d="M17 8.5v2.5M19.5 8.5v2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
