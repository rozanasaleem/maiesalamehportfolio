import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Work | Maie Salameh"
};

const chapters = [
  {
    index: "01",
    title: "Collections",
    href: "/portfolio/collections",
    image: "/images/jafra/jafra-bronze-scarf-web.jpg",
    intro:
      "Seasonal and cultural collections shaped by Palestinian memory, motif, landscape, and contemporary silhouette."
  },
  {
    index: "02",
    title: "Bridal",
    href: "/portfolio/bridal",
    image: "/images/bridal/bridal-atelier-lineup.jpg",
    intro:
      "Ivory garments, embroidered veils, ceremonial capes, and custom pieces made for intimate rituals."
  },
  {
    index: "03",
    title: "Achievements",
    href: "/portfolio/achievements",
    image: "/images/olympics/olympics-rings-team-web.jpg",
    intro:
      "Collaborations, public moments, and cultural milestones where the work enters a wider stage."
  }
];

export default function PortfolioPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="quiet-section page-pad flex items-end">
        <Reveal>
          <p className="small-caps mb-8 text-burgundy">Work</p>
          <h1 className="editorial-title max-w-6xl text-[18vw] leading-[0.86] md:text-[10vw]">
            Three doors into the work.
          </h1>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-6 py-20 md:grid-cols-3 md:py-32">
        {chapters.map((chapter, index) => (
          <Reveal key={chapter.href} delay={index * 0.08}>
            <Link
              href={chapter.href}
              className="group grid min-h-[76vh] grid-rows-[1fr_auto] overflow-hidden border border-ink/12 bg-cream/30"
            >
              <div className="relative min-h-[48vh] overflow-hidden">
                <EditorialImage
                  src={chapter.image}
                  alt={`${chapter.title} editorial cover`}
                  className="absolute inset-0 h-full w-full transition duration-[1400ms] group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-ink/10 transition duration-700 group-hover:bg-ink/0" />
              </div>
              <div className="p-7 md:p-9">
                <p className="small-caps mb-8 text-olive">/{chapter.index}</p>
                <h2 className="serif text-4xl leading-none md:text-5xl">
                  {chapter.title}
                </h2>
                <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
                  {chapter.intro}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
