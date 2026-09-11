import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductCard from '@/components/ui/ProductCard';
import { HOME_PRODUCTS } from '@/data/content';

export default function HomeProducts() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="aj-reveal">
          <SectionHeading
            eyebrow={HOME_PRODUCTS.eyebrow}
            title={HOME_PRODUCTS.title}
            intro={HOME_PRODUCTS.intro}
            align="center"
          />
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_PRODUCTS.cards.map((card, i) => (
            <div key={card.name} className="aj-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <ProductCard
                name={card.name}
                description={card.description}
                image={card.image}
                href={card.href}
                cta={card.cta}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
