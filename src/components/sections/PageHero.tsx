import Container from '@/components/ui/Container';
import Breadcrumbs, { type Crumb } from '@/components/ui/Breadcrumbs';

/**
 * Shared hero for every inner page: dark navy plate, blueprint grid,
 * H1 and breadcrumb trail. Keeps all inner pages visually consistent.
 */
export default function PageHero({ title, crumbs }: { title: string; crumbs: Crumb[] }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-14 sm:pt-36 sm:pb-20">
      <div aria-hidden="true" className="aj-grid-bg absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-600/60 to-transparent"
      />
      <Container className="relative">
        <div className="aj-rule mb-6" />
        <h1 className="max-w-4xl text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        <div className="mt-6">
          <Breadcrumbs items={crumbs} />
        </div>
      </Container>
    </section>
  );
}
