'use client';

import { useEffect } from 'react';

const SELECTOR = '.aj-reveal:not(.is-visible)';

/**
 * Adds `.is-visible` to any `.aj-reveal` element as it enters the viewport.
 * One shared observer for the whole page — cheaper than a component per
 * section, and it keeps the sections themselves as Server Components.
 *
 * This lives in the root layout, which does not remount on client-side
 * navigation, so a MutationObserver picks up `.aj-reveal` elements that
 * new pages (or streamed content) add after the first scan.
 */
export default function Reveal() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supported = 'IntersectionObserver' in window;

    const io = supported && !reduced
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io?.unobserve(entry.target);
              }
            }
          },
          { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
        )
      : null;

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (io) io.observe(el);
        else el.classList.add('is-visible');
      });
    };

    scan();

    const mo = new MutationObserver((mutations) => {
      if (mutations.some((m) => m.addedNodes.length > 0)) scan();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, []);

  return null;
}
