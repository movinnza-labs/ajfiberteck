import Link from 'next/link';
import { abs } from '@/lib/seo';

export type Crumb = { label: string; href?: string };

/**
 * Breadcrumb trail plus matching BreadcrumbList JSON-LD.
 * Rendered inside the page hero, mirroring the existing site's trail.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-navy-200">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.label + i} className="flex items-center gap-2">
                {c.href && !last ? (
                  <Link
                    href={c.href}
                    className="rounded transition-colors hover:text-white focus-visible:text-white"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span
                    className={last ? 'text-white' : undefined}
                    aria-current={last ? 'page' : undefined}
                  >
                    {c.label}
                  </span>
                )}
                {!last && (
                  <span aria-hidden="true" className="text-brand-500">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
