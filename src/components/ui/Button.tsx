import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-wide transition-all duration-300 ease-out';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_10px_30px_-12px_rgba(221,0,5,0.7)] hover:bg-brand-700 hover:shadow-[0_16px_40px_-12px_rgba(221,0,5,0.6)] hover:-translate-y-0.5',
  secondary:
    'bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 shadow-[0_10px_30px_-14px_rgba(12,20,46,0.8)]',
  ghost:
    'border border-navy-200 bg-white text-navy-900 hover:border-brand-600 hover:text-brand-700 hover:-translate-y-0.5',
  light:
    'border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-navy-900 hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm md:text-base',
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  external?: boolean;
}) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Arrow />}
    </>
  );

  if (
    external ||
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:')
  ) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
