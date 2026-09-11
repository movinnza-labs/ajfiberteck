import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { HOME_ABOUT, HOME_CERTIFICATIONS } from '@/data/content';

export default function HomeAbout() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Editorial image block */}
          <div className="aj-reveal relative order-last lg:order-first">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <Image
                src={HOME_CERTIFICATIONS.image.src}
                alt={HOME_CERTIFICATIONS.image.alt}
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
            </div>

            {/* Offset accent panel */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-4 hidden h-32 w-32 rounded-2xl border-[6px] border-white bg-brand-600 sm:block"
            />
            <div className="absolute -bottom-6 -right-4 hidden h-32 w-32 flex-col items-center justify-center rounded-2xl sm:flex">
              <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white">
                {HOME_CERTIFICATIONS.sinceLabel}
              </span>
              <span className="font-display text-3xl font-bold text-white">
                {HOME_CERTIFICATIONS.sinceValue}
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="aj-reveal">
            <SectionHeading eyebrow={HOME_ABOUT.eyebrow} title={HOME_ABOUT.title} />

            <div className="mt-6 space-y-5">
              {HOME_ABOUT.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-navy-100 bg-navy-50/60 p-6">
              <h3 className="font-display text-base font-bold text-navy-900">
                {HOME_ABOUT.listTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {HOME_ABOUT.list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="10" cy="10" r="8" />
                      <path d="m6.8 10.2 2.2 2.2 4.2-4.4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button href={HOME_ABOUT.cta.href} variant="secondary" size="md">
                {HOME_ABOUT.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
