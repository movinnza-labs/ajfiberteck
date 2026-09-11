'use client';

import { useEffect, useRef } from 'react';

/**
 * Counts up to `value` once the tile scrolls into view, matching the
 * behaviour of the counters on the existing site.
 *
 * The final number is rendered on the server and never removed from the
 * markup, so crawlers and reduced-motion users always see the real figure.
 * The animation writes to the DOM node directly rather than through state,
 * which keeps 60fps updates out of React's render cycle entirely.
 */
export default function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const num = numRef.current;
    if (!el || !num) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) return;

    const format = (n: number) => n.toLocaleString('en-US');

    let frame = 0;
    const run = () => {
      const duration = 2000;
      const startedAt = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        num.textContent = format(Math.round(eased * value));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Only rewind to zero when the tile is still below the fold. A tile that
    // is already on screen animates straight away, so the real figure is
    // never replaced by a 0 the viewer is looking at.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      num.textContent = format(0);
      run();
      return () => {
        cancelAnimationFrame(frame);
        num.textContent = format(value);
      };
    }

    num.textContent = format(0);

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          io.disconnect();
          run();
          return;
        }

        // The tile was jumped past (anchor link, restored scroll position)
        // and now sits above the viewport. Show the real figure rather than
        // leaving a zero behind.
        if (entry.boundingClientRect.bottom < 0) {
          io.disconnect();
          num.textContent = format(value);
        }
      },
      { threshold: [0, 0.4] },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      // Leave the real figure behind if this unmounts mid-animation.
      num.textContent = format(value);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-brand-600/50 hover:bg-white/[0.07] sm:p-7"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-500 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
      <p className="font-display text-4xl font-bold tabular-nums text-white sm:text-5xl">
        <span ref={numRef}>{value.toLocaleString('en-US')}</span>
        <span className="text-brand-500">{suffix}</span>
      </p>
      <p className="mt-3 text-sm leading-snug text-navy-200">{label}</p>
    </div>
  );
}
