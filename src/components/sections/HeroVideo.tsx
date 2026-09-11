'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * The hero background video from the existing site is very large, so it is
 * deliberately kept off the critical path:
 *  - a poster image renders immediately and carries the LCP
 *  - the <source> is attached only after `load`, so it never competes with
 *    fonts, CSS or the hero image
 *  - it is skipped entirely on narrow screens, on reduced-motion, and on
 *    connections the browser reports as slow or data-saving
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    const slow =
      conn?.saveData === true || (conn?.effectiveType ? /2g/.test(conn.effectiveType) : false);

    if (!wide || reduced || slow) return;

    const start = () => setEnabled(true);
    if (document.readyState === 'complete') {
      // Give the main thread a beat before pulling a large file.
      const t = window.setTimeout(start, 600);
      return () => window.clearTimeout(t);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    // Autoplay can still be refused; the poster stays visible if so.
    void v.play().catch(() => {});
  }, [enabled]);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <Image
        src={poster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {enabled && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
