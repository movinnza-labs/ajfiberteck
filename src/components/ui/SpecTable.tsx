import type { SpecRow } from '@/data/content';

/**
 * Technical characteristics table. Wrapped in its own scroll container so
 * it never forces the page body to scroll horizontally on small screens.
 */
export default function SpecTable({
  heading,
  caption,
  rows,
  tone = 'light',
}: {
  heading?: string;
  caption: string;
  rows: readonly SpecRow[];
  tone?: 'light' | 'dark';
}) {
  const dark = tone === 'dark';

  return (
    <div>
      {heading && (
        <h3 className={dark ? 'text-xl text-white sm:text-2xl' : 'text-xl sm:text-2xl'}>
          {heading}
        </h3>
      )}

      <div
        className={[
          'mt-5 overflow-x-auto rounded-xl border',
          dark ? 'border-white/10' : 'border-navy-100',
        ].join(' ')}
      >
        <table className="w-full min-w-[17rem] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className={dark ? 'bg-white/[0.06]' : 'bg-navy-900'}>
              <th
                scope="col"
                colSpan={2}
                className="px-5 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                {caption}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={[
                  'transition-colors',
                  dark
                    ? i % 2 === 1
                      ? 'bg-white/[0.03]'
                      : ''
                    : i % 2 === 1
                      ? 'bg-navy-50/50'
                      : 'bg-white',
                  dark ? 'hover:bg-white/[0.07]' : 'hover:bg-brand-50/50',
                ].join(' ')}
              >
                <th
                  scope="row"
                  className={[
                    'w-1/2 px-5 py-3 font-normal',
                    dark ? 'text-navy-200' : 'text-muted',
                  ].join(' ')}
                >
                  {row.label}
                </th>
                <td
                  className={[
                    'px-5 py-3 font-display font-semibold',
                    dark ? 'text-white' : 'text-navy-900',
                  ].join(' ')}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
