import type { Metadata } from 'next';

import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { ANNUAL_REPORTS, ANNUAL_REPORT_PAGE } from '@/data/content';

export const metadata: Metadata = buildMetadata({
  title: 'Annual Report',
  description:
    'Annual reports of AJ Fibertek India Pvt. Ltd., Maval, Maharashtra, available to download as PDF.',
  path: '/annual-report/',
  type: 'article',
});

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 text-brand-600"
      fill="currentColor"
    >
      <path d="M6 2.5A2.5 2.5 0 0 0 3.5 5v14A2.5 2.5 0 0 0 6 21.5h12a2.5 2.5 0 0 0 2.5-2.5V8.62a2.5 2.5 0 0 0-.73-1.77l-3.62-3.62a2.5 2.5 0 0 0-1.77-.73H6Zm8 1.75V7.5c0 .83.67 1.5 1.5 1.5h3.25L14 4.25ZM8 12.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5Zm0 3.5h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5Z" />
    </svg>
  );
}

export default function AnnualReportPage() {
  return (
    <>
      <PageHero
        title={ANNUAL_REPORT_PAGE.h1}
        crumbs={[{ label: 'Home', href: '/' }, { label: ANNUAL_REPORT_PAGE.breadcrumbLabel }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            className="aj-reveal"
            title={ANNUAL_REPORT_PAGE.title}
            intro={ANNUAL_REPORT_PAGE.intro}
            introSize="base"
          />

          {ANNUAL_REPORTS.length > 0 ? (
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ANNUAL_REPORTS.map((report) => (
                <li
                  key={report.file}
                  className="aj-reveal group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-100 bg-navy-50/70 transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50">
                    <DocumentIcon />
                  </span>
                  <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
                    FY {report.year}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold text-navy-900">
                    {report.title}
                  </h2>
                  <div className="mt-6 pt-2">
                    <Button href={report.file} variant="ghost" size="sm" external>
                      Download PDF
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="aj-reveal mt-12 flex flex-col items-start gap-5 rounded-2xl border border-navy-100 bg-surface p-8 sm:flex-row sm:p-10">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-navy-100 bg-white">
                <DocumentIcon />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-navy-900">
                  {ANNUAL_REPORT_PAGE.emptyTitle}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                  {ANNUAL_REPORT_PAGE.emptyBody}
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
