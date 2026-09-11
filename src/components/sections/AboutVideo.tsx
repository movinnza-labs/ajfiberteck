'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Decorative looping clip from the existing About page. The file is large,
 * so it is only attached once it scrolls near the viewport, and never on
 * reduced-motion or data-saver connections.
 */
export default function AboutVideo({ src }: { src: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const slow =
      conn?.saveData === true || (conn?.effectiveType ? /2g/.test(conn.effectiveType) : false);

    if (reduced || slow || !('IntersectionObserver' in window)) return;

    const el = wrapRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    void v.play().catch(() => {});
  }, [load]);

  return (
    <div ref={wrapRef} className="relative aspect-[4/5] w-full bg-navy-900">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-60" />
      {load && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-label="AJ Fibertek manufacturing"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
      />
    </div>
  );
}
