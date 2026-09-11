import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { HOME_PROCESS } from '@/data/content';

/**
 * Step titles already carry their own number ("01. Raw Material Receipt").
 * Split it out so the number can sit in the marker instead of being printed
 * twice. No characters are added or removed — only laid out differently.
 */
function splitStepTitle(title: string) {
  const m = title.match(/^(\d+)\.\s*(.*)$/);
  return m ? { number: m[1], name: m[2] } : { number: null, name: title };
}

/**
 * The five manufacturing steps, presented as a connected timeline:
 * horizontal on large screens, vertical on small ones.
 */
export default function ProcessTimeline() {
  const steps = HOME_PROCESS.steps;

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="aj-reveal">
          <SectionHeading
            eyebrow={HOME_PROCESS.eyebrow}
            title={HOME_PROCESS.title}
            intro={HOME_PROCESS.intro}
            align="center"
          />
        </div>

        {/* Timeline */}
        <ol className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-5">
          {/* Connecting rail (large screens only) */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-navy-100 via-navy-200 to-navy-100 lg:block"
          />

          {steps.map((step, i) => {
            const { number, name } = splitStepTitle(step.title);
            return (
              <li
                key={step.title}
                className="aj-reveal group relative flex gap-5 lg:flex-col lg:gap-0"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {/* Vertical rail (small screens only) */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-7 top-14 h-[calc(100%+2rem)] w-px bg-navy-100 lg:hidden"
                  />
                )}

                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-navy-100 bg-white font-display text-lg font-bold text-navy-900 transition-colors duration-300 group-hover:border-brand-600 group-hover:text-brand-600">
                  {number ?? i + 1}
                </span>

                <div className="lg:mt-7">
                  <h3 className="font-display text-base font-bold text-navy-900">
                    {number && <span className="sr-only">{`${number}. `}</span>}
                    {name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Process photo strip */}
        <div className="aj-reveal mt-16 overflow-hidden rounded-2xl border border-navy-100 shadow-[var(--shadow-card)]">
          <Image
            src={HOME_PROCESS.image.src}
            alt={HOME_PROCESS.image.alt}
            width={HOME_PROCESS.image.width}
            height={HOME_PROCESS.image.height}
            sizes="(max-width: 1280px) 100vw, 1280px"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
