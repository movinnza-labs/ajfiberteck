import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { HOME_CTA, HOME_SUPPORT } from '@/data/content';

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-700/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/70 to-transparent"
      />

      <Container className="relative">
        <div className="aj-reveal flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl text-white sm:text-4xl">{HOME_CTA.title}</h2>
            <p className="mt-5 leading-relaxed text-navy-200">{HOME_CTA.body}</p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-8 sm:flex-row sm:items-center">
            {/* 24/7 Customer Support */}
            <div className="flex items-center gap-4 border-l-2 border-brand-600 pl-5">
              <div>
                <p className="font-display text-3xl font-bold text-white">{HOME_SUPPORT.title}</p>
                <p className="text-sm text-navy-200">{HOME_SUPPORT.subtitle}</p>
              </div>
            </div>

            <Button href={HOME_CTA.cta.href} variant="primary" size="lg">
              {HOME_CTA.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
