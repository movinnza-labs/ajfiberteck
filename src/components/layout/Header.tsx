'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import MobileNav from '@/components/layout/MobileNav';
import { COMPANY, MAIN_NAV, type NavItem } from '@/data/site';
import { cn } from '@/lib/cn';

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className={cn('h-2.5 w-2.5 shrink-0', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href !== '#' && item.href === pathname) return true;
  return (item.children ?? []).some((c) => isActive(pathname, c));
}

/** Third-level flyout (HAMAT products under Thermal & Acoustic Insulation). */
function SubMenu({ items, pathname }: { items: NavItem[]; pathname: string }) {
  return (
    <ul className="invisible absolute left-full top-0 ml-1 w-56 translate-x-1 rounded-xl border border-navy-100 bg-white p-2 opacity-0 shadow-[0_24px_60px_-20px_rgba(12,20,46,0.35)] transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:translate-x-0 group-focus-within/sub:opacity-100">
      {items.map((child) => (
        <li key={child.href}>
          <Link
            href={child.href}
            className={cn(
              'block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-navy-50 hover:text-brand-700',
              pathname === child.href ? 'text-brand-700' : 'text-navy-700',
            )}
          >
            {child.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar — phone and email, as on the existing site */}
      <div
        className={cn(
          'hidden border-b border-white/10 bg-navy-950 text-white transition-all duration-300 lg:block',
          scrolled && 'lg:hidden',
        )}
      >
        <Container>
          <ul className="flex items-center justify-end gap-8 py-2.5 text-sm">
            <li>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 text-navy-200 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h1.1a1.5 1.5 0 0 1 1.45 1.13l.62 2.47a1.5 1.5 0 0 1-.4 1.45l-.9.9a11.6 11.6 0 0 0 5.68 5.68l.9-.9a1.5 1.5 0 0 1 1.45-.4l2.47.62A1.5 1.5 0 0 1 18 14.4v1.1a2.5 2.5 0 0 1-2.5 2.5h-.5C7.82 18 2 12.18 2 5V4.5Z" />
                </svg>
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={COMPANY.emailHref}
                className="inline-flex items-center gap-2 text-navy-200 transition-colors hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4 text-brand-500"
                  fill="currentColor"
                >
                  <path d="M2 6.2V15a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.2l-7.34 4.4a1.25 1.25 0 0 1-1.32 0L2 6.2Z" />
                  <path d="M18 4.4A2 2 0 0 0 16 3H4a2 2 0 0 0-2 1.4l8 4.8 8-4.8Z" />
                </svg>
                {COMPANY.email}
              </a>
            </li>
          </ul>
        </Container>
      </div>

      {/* Main navigation bar */}
      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled
            ? 'border-navy-100 bg-white/95 shadow-[var(--shadow-header)] backdrop-blur-md'
            : 'border-white/10 bg-navy-900/85 backdrop-blur-md',
        )}
      >
        <Container>
          <div
            className={cn(
              'flex items-center justify-between gap-6 transition-all duration-300',
              scrolled ? 'h-16' : 'h-20',
            )}
          >
            <Link
              href="/"
              className="flex shrink-0 items-center"
              aria-label={`${COMPANY.shortName} — home`}
            >
              <Image
                src={COMPANY.logo}
                alt={COMPANY.logoAlt}
                width={1746}
                height={410}
                priority
                sizes="(max-width: 1024px) 150px, 190px"
                className={cn(
                  'h-auto w-[150px] transition-all duration-300 lg:w-[190px]',
                  !scrolled && 'brightness-0 invert',
                )}
              />
            </Link>

            {/* Desktop navigation */}
            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {MAIN_NAV.map((item) => {
                  const active = isActive(pathname, item);
                  const hasChildren = !!item.children?.length;

                  return (
                    <li key={item.label} className="group relative">
                      {item.href === '#' ? (
                        // "Divisions and Products" has no page of its own — it
                        // is a label. The panel opens on hover and on
                        // focus-within, so its child links stay reachable by
                        // keyboard without a stateful trigger here.
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-sm font-medium transition-colors',
                            scrolled
                              ? 'text-navy-800 hover:text-brand-700'
                              : 'text-white/90 hover:text-white',
                            active && (scrolled ? 'text-brand-700' : 'text-white'),
                          )}
                        >
                          {item.label}
                          <Chevron className="transition-transform duration-200 group-hover:rotate-180" />
                        </span>
                      ) : (
                        <Link
                          href={item.href}
                          aria-current={pathname === item.href ? 'page' : undefined}
                          className={cn(
                            'relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-sm font-medium transition-colors',
                            scrolled
                              ? 'text-navy-800 hover:text-brand-700'
                              : 'text-white/90 hover:text-white',
                            active && (scrolled ? 'text-brand-700' : 'text-white'),
                          )}
                        >
                          {item.label}
                          {hasChildren && (
                            <Chevron className="transition-transform duration-200 group-hover:rotate-180" />
                          )}
                          <span
                            aria-hidden="true"
                            className={cn(
                              'absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-600 transition-transform duration-300',
                              active ? 'scale-x-100' : 'group-hover:scale-x-100',
                            )}
                          />
                        </Link>
                      )}

                      {hasChildren && (
                        <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                          <ul className="w-72 rounded-xl border border-navy-100 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(12,20,46,0.35)]">
                            {item.children!.map((child) => (
                              <li key={child.href} className="group/sub relative">
                                <Link
                                  href={child.href}
                                  className={cn(
                                    'flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-navy-50 hover:text-brand-700',
                                    pathname === child.href ? 'text-brand-700' : 'text-navy-700',
                                  )}
                                >
                                  {child.label}
                                  {!!child.children?.length && <Chevron className="-rotate-90" />}
                                </Link>
                                {!!child.children?.length && (
                                  <SubMenu items={child.children} pathname={pathname} />
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <MobileNav scrolled={scrolled} />
          </div>
        </Container>
      </div>
    </header>
  );
}
