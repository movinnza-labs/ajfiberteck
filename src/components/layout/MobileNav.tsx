'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY, MAIN_NAV, type NavItem } from '@/data/site';
import { cn } from '@/lib/cn';

/** Never emits — the store's value only differs between server and client. */
const subscribeNoop = () => () => {};

function Disclosure({
  item,
  pathname,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
  depth?: number;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          aria-current={pathname === item.href ? 'page' : undefined}
          className={cn(
            'block rounded-lg py-3 font-display text-base font-medium transition-colors',
            depth > 0 ? 'pl-4 text-[0.95rem]' : '',
            pathname === item.href ? 'text-brand-400' : 'text-white hover:text-brand-300',
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  const panelId = `mnav-${item.label.replace(/\W+/g, '-').toLowerCase()}`;

  return (
    <li>
      <div className={cn('flex items-center justify-between gap-2', depth > 0 && 'pl-4')}>
        {item.href === '#' ? (
          <span className="py-3 font-display text-base font-medium text-white">{item.label}</span>
        ) : (
          <Link
            href={item.href}
            onClick={onNavigate}
            className={cn(
              'flex-1 py-3 font-display text-base font-medium transition-colors',
              pathname === item.href ? 'text-brand-400' : 'text-white hover:text-brand-300',
            )}
          >
            {item.label}
          </Link>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${item.label}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-brand-500 hover:text-brand-400"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 12 12"
            className={cn('h-3 w-3 transition-transform duration-300', open && 'rotate-180')}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2.5 4.5 6 8l3.5-3.5" />
          </svg>
        </button>
      </div>
      <ul id={panelId} hidden={!open} className="ml-3 border-l border-white/10 pl-2">
        {item.children!.map((child) => (
          <Disclosure
            key={child.href + child.label}
            item={child}
            pathname={pathname}
            onNavigate={onNavigate}
            depth={depth + 1}
          />
        ))}
      </ul>
    </li>
  );
}

export default function MobileNav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // The header bar uses backdrop-blur, which makes it the containing block
  // for fixed-position descendants — a drawer rendered inside it gets
  // clipped to the header's height. Portal it to <body> instead.
  // false during SSR, true once hydrated, without setState in an effect.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  // Close on route change, including browser back/forward. Adjusting state
  // during render is the supported pattern here — an effect would cause a
  // second render pass with the drawer still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock body scroll and trap Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    // Move focus into the drawer for keyboard and screen-reader users.
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus();

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        className={cn(
          'grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden',
          scrolled
            ? 'border-navy-200 text-navy-900 hover:border-brand-600 hover:text-brand-700'
            : 'border-white/25 text-white hover:border-white/60',
        )}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Backdrop */}
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className={cn(
                'fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
                open ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            />

            {/* Drawer */}
            <div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              // Keeps the off-canvas drawer out of the tab order when closed.
              inert={!open}
              className={cn(
                'fixed inset-y-0 right-0 z-50 flex w-[min(22rem,88vw)] flex-col bg-navy-900 shadow-2xl transition-transform duration-300 ease-out lg:hidden',
                open ? 'translate-x-0' : 'translate-x-full',
              )}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  aria-label={`${COMPANY.shortName} — home`}
                >
                  <Image
                    src={COMPANY.logo}
                    alt={COMPANY.logoAlt}
                    width={1746}
                    height={410}
                    sizes="150px"
                    className="h-auto w-[140px] brightness-0 invert"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-brand-500 hover:text-brand-400"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="m6 6 12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="divide-y divide-white/10">
                  {MAIN_NAV.map((item) => (
                    <Disclosure
                      key={item.label}
                      item={item}
                      pathname={pathname}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </ul>
              </nav>

              <div className="border-t border-white/10 px-5 py-5">
                <Link
                  href="/contact-us/"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  Contact Us
                </Link>
                <ul className="mt-5 space-y-2 text-sm">
                  <li>
                    <a
                      href={COMPANY.phoneHref}
                      className="text-navy-200 transition-colors hover:text-white"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={COMPANY.emailHref}
                      className="break-all text-navy-200 transition-colors hover:text-white"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
