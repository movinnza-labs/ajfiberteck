import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({
  name,
  description,
  image,
  href,
  cta,
  priority = false,
}: {
  name: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  priority?: boolean;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy-50">
        <Image
          src={image}
          alt={name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl leading-snug transition-colors duration-300 group-hover:text-brand-700">
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {name}
          </Link>
        </h3>
        <div className="aj-rule mt-4" />

        <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <span className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-600">
          {cta}
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </article>
  );
}
