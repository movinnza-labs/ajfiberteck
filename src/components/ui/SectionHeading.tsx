import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Eyebrow({
  children,
  tone = 'dark',
  className,
}: {
  children: ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  return (
    <p
      className={cn(
        'mb-4 inline-flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.22em]',
        tone === 'light' ? 'text-brand-300' : 'text-brand-600',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('h-px w-8', tone === 'light' ? 'bg-brand-400/70' : 'bg-brand-600/60')}
      />
      {children}
    </p>
  );
}

/**
 * Section heading block. `as` keeps the document outline correct — most
 * sections are h2, but a page hero heading is h1.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = 'h2',
  tone = 'dark',
  align = 'left',
  fullWidth = false,
  introSize = 'lg',
  className,
  titleClassName,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: 'h1' | 'h2' | 'h3';
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
  /** Let the title and intro span the whole container instead of a reading measure. */
  fullWidth?: boolean;
  /** 'base' keeps the intro at body-text size (16px) on every screen. */
  introSize?: 'lg' | 'base';
  className?: string;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        align === 'center' && 'mx-auto text-center',
        align === 'center' && !fullWidth && 'max-w-3xl',
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          'text-balance text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]',
          tone === 'light' && 'text-white',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed',
            introSize === 'lg' && 'sm:text-lg',
            !fullWidth && 'max-w-3xl',
            align === 'center' && 'mx-auto',
            tone === 'light' ? 'text-navy-200' : 'text-muted',
          )}
        >
          {intro}
        </p>
      )}
      {children}
    </div>
  );
}
