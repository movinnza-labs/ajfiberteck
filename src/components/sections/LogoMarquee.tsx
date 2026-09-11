import Image from 'next/image';

type Logo = { readonly src: string; readonly alt: string };

/**
 * Client logo grid. Logos are greyscale at rest and regain colour on hover,
 * which keeps a mixed-quality logo set looking consistent.
 */
export default function LogoMarquee({ logos }: { logos: readonly Logo[] }) {
  return (
    // Cell separators come from borders on each tile rather than a gap over a
    // tinted background, so a part-filled final row leaves no grey block.
    <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border-t border-l border-navy-100 bg-white sm:grid-cols-3 lg:grid-cols-5">
      {logos.map((logo, i) => (
        <li
          key={logo.src + i}
          className="group flex items-center justify-center border-r border-b border-navy-100 bg-white px-5 py-7 transition-colors duration-300 hover:bg-navy-50/70"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={165}
            height={77}
            sizes="165px"
            loading="lazy"
            className="h-12 w-auto max-w-[130px] object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}
