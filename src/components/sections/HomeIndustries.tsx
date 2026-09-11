import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { HOME_INDUSTRIES } from '@/data/content';

/**
 * Splits "Label: description" bullets so the label can be emphasised.
 * If a bullet has no colon it is rendered as plain text — the text itself
 * is never altered either way.
 */
function splitBullet(text: string) {
  const i = text.indexOf(':');
  if (i === -1) return { label: null, rest: text };
  return { label: text.slice(0, i + 1), rest: text.slice(i + 1) };
}

export default function HomeIndustries() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <Container>
        <div className="aj-reveal">
          <SectionHeading
            eyebrow={HOME_INDUSTRIES.eyebrow}
            title={HOME_INDUSTRIES.title}
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {HOME_INDUSTRIES.groups.map((group, gi) => (
            <div
              key={group.title}
              className="aj-reveal group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[var(--shadow-card-hover)] sm:p-9"
              style={{ transitionDelay: `${gi * 70}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100"
              />

              <h3 className="text-xl sm:text-2xl">{group.title}</h3>
              <div className="aj-rule mt-5" />

              <ul className="mt-7 space-y-5">
                {group.items.map((item) => {
                  const { label, rest } = splitBullet(item);
                  return (
                    <li key={item} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-600"
                      />
                      <p className="text-sm leading-relaxed text-muted">
                        {label && <span className="font-semibold text-navy-900">{label}</span>}
                        {rest}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
