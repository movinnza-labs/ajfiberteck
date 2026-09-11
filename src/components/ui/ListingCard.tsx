import Image from 'next/image';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

/**
 * Listing card used by the legacy sections carried over from the original
 * WordPress theme (the vehicle listings on /products/ and the HAMAT pages,
 * and the implant gallery on /medical-implant/).
 *
 * All labels come from the existing site and are rendered verbatim; fields
 * that are blank there are simply omitted here, exactly as they render now.
 */
export default function ListingCard({
  image,
  alt,
  price,
  per,
  cta,
  name,
  meta,
  imageFit = 'cover',
}: {
  /** null when the origin media file has been deleted upstream. */
  image: string | null;
  alt?: string;
  price?: string | null;
  per?: string | null;
  cta: string;
  name?: string | null;
  meta: readonly string[];
  imageFit?: 'cover' | 'contain';
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
        {image ? (
          <Image
            src={image}
            alt={alt ?? name ?? ''}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading="lazy"
            className={[
              'transition-transform duration-700 group-hover:scale-105',
              imageFit === 'contain' ? 'object-contain p-5' : 'object-cover',
            ].join(' ')}
          />
        ) : (
          <ImagePlaceholder />
        )}

        {price && (
          <p className="absolute left-4 top-4 rounded-full bg-navy-950 px-4 py-1.5 font-display text-sm font-bold text-white backdrop-blur-sm">
            {price}
            {per && <span className="font-normal text-navy-200">{per}</span>}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {name && <h3 className="font-display text-lg font-bold text-navy-900">{name}</h3>}

        {meta.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {meta.map((m, i) => (
              <li
                key={m + i}
                className="rounded-full border border-navy-100 bg-navy-50/70 px-3 py-1 text-xs text-navy-700"
              >
                {m}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-6 flex-1" />

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 font-display text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-brand-800">
          {cta}
        </span>
      </div>
    </article>
  );
}
