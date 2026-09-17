import Container from '@/components/ui/Container';
import { HAMAT_RANGE } from '@/data/content';

/** Chevron colours, top to bottom: hottest grade in orange down to blue. */
const CHEVRON_COLORS = ['#d8691f', '#e98a52', '#2f4f9e', '#2b74c4'];

/**
 * HAMAT grade ladder: one row per grade, each led by a downward chevron so
 * the stack reads as a single arrow from the highest-temperature grade down.
 */
export default function HamatRange() {
  return (
    <section className="bg-white pt-20 lg:pt-24">
      <Container>
        <div className="aj-reveal mx-auto max-w-4xl">
          <h2 className="text-center text-2xl sm:text-3xl">
            HAMAT<sup className="text-[0.55em]">®</sup> Product Range
          </h2>
          <div aria-hidden="true" className="aj-rule mx-auto mt-5" />

          <ol className="mt-12">
            {HAMAT_RANGE.map((row, i) => (
              <li
                key={row.grade}
                className="group relative flex items-stretch"
                style={{ zIndex: HAMAT_RANGE.length - i }}
              >
                {/* Chevron: overlaps the next row so the stack reads as one arrow */}
                <div
                  aria-hidden="true"
                  className="aj-chevron relative -mb-5 w-14 shrink-0 sm:w-20"
                  style={{ backgroundColor: CHEVRON_COLORS[i] }}
                />

                <div className="relative my-2 ml-3 flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-3 overflow-hidden rounded-r-xl border border-navy-100 bg-white py-4 pr-4 pl-6 shadow-[var(--shadow-card)] transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[var(--shadow-card-hover)] sm:ml-4 sm:pr-6 sm:pl-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1.5"
                    style={{ backgroundColor: CHEVRON_COLORS[i] }}
                  />
                  <span className="border-b-[3px] border-double border-navy-800 font-display text-2xl font-extrabold italic leading-none tracking-tight text-navy-800 sm:text-[1.7rem]">
                    HAMAT
                  </span>

                  <span className="flex gap-2">
                    {[row.grade, row.code].filter(Boolean).map((tag) => (
                      <span
                        key={tag}
                        className="w-20 rounded-md bg-[#e8794b] py-1.5 text-center font-display text-sm font-medium tracking-wide text-white sm:w-24"
                      >
                        {tag}
                      </span>
                    ))}
                  </span>

                  <span className="flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-navy-900 md:w-auto md:flex-1">
                    <span className="text-base sm:text-lg">
                      {row.material}, SiO<sub>2</sub> {row.sio2}
                    </span>
                    <span className="font-display text-lg font-bold text-brand-600 sm:text-xl">
                      {row.temp}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
