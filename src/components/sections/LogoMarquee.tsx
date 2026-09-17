import Image from 'next/image';

import { cn } from '@/lib/cn';

type Logo = { readonly src: string; readonly alt: string };

function LogoTrack({ logos, reverse }: { logos: readonly Logo[]; reverse?: boolean }) {
  // The list is rendered twice and the track slides by exactly half its
  // width, so the loop is seamless. The copy is hidden from assistive tech.
  return (
    <div className="aj-marquee">
      <div className={cn('aj-marquee-track flex w-max', reverse && 'aj-marquee-reverse')}>
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className="aj-marquee-list flex shrink-0 gap-4 pr-4"
          >
            {logos.map((logo) => (
              <li
                key={logo.src}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-navy-100 bg-white px-5 transition-shadow duration-300 hover:shadow-[var(--shadow-card)] sm:h-28 sm:w-52"
              >
                <Image
                  src={logo.src}
                  alt={copy === 1 ? '' : logo.alt}
                  width={165}
                  height={77}
                  sizes="165px"
                  className="h-14 w-auto max-w-[140px] object-contain"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/**
 * Client logos in full colour, as two continuously sliding rows: the first
 * moves left, the second moves right. Hovering a row pauses it.
 */
export default function LogoMarquee({ logos }: { logos: readonly Logo[] }) {
  const half = Math.ceil(logos.length / 2);

  return (
    <div className="space-y-4">
      <LogoTrack logos={logos.slice(0, half)} />
      <LogoTrack logos={logos.slice(half)} reverse />
    </div>
  );
}
