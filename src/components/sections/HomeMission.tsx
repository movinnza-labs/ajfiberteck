import Container from '@/components/ui/Container';
import LogoMarquee from '@/components/sections/LogoMarquee';
import { HOME_CLIENT_LOGOS, HOME_CLIENTS_TITLE, HOME_MISSION } from '@/data/content';

export default function HomeMission() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        {/* Mission */}
        <div className="aj-reveal relative overflow-hidden rounded-2xl bg-navy-900 p-8 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-50" />
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-700/25 blur-3xl"
          />

          <div className="relative max-w-4xl">
            <span
              aria-hidden="true"
              className="mb-6 block font-display text-6xl leading-none text-brand-600"
            >
              &ldquo;
            </span>
            <h2 className="text-3xl text-white sm:text-4xl">{HOME_MISSION.title}</h2>
            <div className="aj-rule mt-6" />
            <p className="mt-7 text-base leading-relaxed text-navy-200 sm:text-lg">
              {HOME_MISSION.body}
            </p>
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-20">
          <h2 className="aj-reveal text-center text-2xl sm:text-3xl">{HOME_CLIENTS_TITLE}</h2>
          <div aria-hidden="true" className="aj-rule mx-auto mt-5" />
          <div className="aj-reveal mt-10">
            <LogoMarquee logos={HOME_CLIENT_LOGOS} />
          </div>
        </div>
      </Container>
    </section>
  );
}
