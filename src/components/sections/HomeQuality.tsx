import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import StatCounter from '@/components/sections/StatCounter';
import { HOME_CERTIFICATIONS, HOME_QUALITY, HOME_STATS } from '@/data/content';

function CertBadge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-brand-600/50">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand-600/40 bg-brand-600/10">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-6 w-6 text-brand-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2 4 5.5v6c0 4.6 3.4 8.9 8 10.5 4.6-1.6 8-5.9 8-10.5v-6L12 2Z" />
          <path d="m8.8 11.8 2.2 2.2 4.2-4.2" />
        </svg>
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-navy-200">{subtitle}</p>
      </div>
    </div>
  );
}

export default function HomeQuality() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 lg:py-28">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-800/20 blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="aj-reveal min-w-0 lg:col-span-6">
            <SectionHeading
              eyebrow={HOME_QUALITY.eyebrow}
              title={HOME_QUALITY.title}
              tone="light"
              titleClassName="[&]:text-white"
            />
            <div className="mt-7 space-y-5">
              {HOME_QUALITY.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-navy-200">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {HOME_CERTIFICATIONS.items.map((c) => (
                <CertBadge key={c.title} title={c.title} subtitle={c.subtitle} />
              ))}
            </div>
          </div>

          {/* Stats + image */}
          <div className="aj-reveal min-w-0 lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {HOME_STATS.map((s) => (
                <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl border border-white/10">
              <Image
                src={HOME_CERTIFICATIONS.image.src}
                alt={HOME_CERTIFICATIONS.image.alt}
                width={1200}
                height={675}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-56 w-full object-cover sm:h-72"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"
              />
              <div className="absolute bottom-5 left-5">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-400">
                  {HOME_CERTIFICATIONS.sinceLabel}
                </p>
                <p className="font-display text-4xl font-bold text-white">
                  {HOME_CERTIFICATIONS.sinceValue}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
