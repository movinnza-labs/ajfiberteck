import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import HeroVideo from '@/components/sections/HeroVideo';
import { HOME_HERO } from '@/data/content';

/**
 * Home hero. The background video is the existing site's asset but it is
 * ~27 MB, so it is never render-blocking: a poster image paints first and
 * the video is attached only after load, on wide screens, when the viewer
 * has not asked for reduced motion.
 */
export default function HomeHero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <HeroVideo src={HOME_HERO.video} poster={HOME_HERO.poster} />

      {/* Legibility scrim over the media */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"
      />
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-40" />

      <Container className="relative">
        <div className="max-w-4xl">
          <div aria-hidden="true" className="aj-rule mb-8" />

          <h1 className="text-balance text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            {HOME_HERO.title}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-200 sm:text-lg">
            {HOME_HERO.body}
          </p>

          <div className="mt-10">
            <Button href={HOME_HERO.cta.href} variant="primary" size="lg">
              {HOME_HERO.cta.label}
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom hairline that ties the hero into the next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-600/60 to-transparent"
      />
    </section>
  );
}
