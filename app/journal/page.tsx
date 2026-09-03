import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { journalEntries } from "@/lib/content";

export const metadata = {
  title: "Journal | Maie Salameh"
};

const makingChapters = [
  {
    index: "01",
    title: "The Building of Maie Salameh",
    image: "/images/home/boutique-interior.jpg",
    alt: "Maie Salameh Couture boutique interior",
    text:
      "The house begins with memory: family photographs, old garments, stone courtyards, village motifs, and the belief that Palestinian dress can keep moving without losing its root."
  },
  {
    index: "02",
    title: "Seeing Tatreez Everywhere",
    image: "/images/home/home-childhood-memory.jpg",
    alt: "Childhood photograph wearing a Palestinian embroidered dress",
    text:
      "As a child, tatreez was not only a pattern on cloth. It appeared in celebrations, family rooms, inherited dresses, market colors, and the small details women carried with pride."
  },
  {
    index: "03",
    title: "Inspiration Becomes Research",
    image: "/images/home/making-research-book.jpg",
    alt: "Open research book showing Palestinian dress references",
    text:
      "Before a garment is drawn, Maie gathers references: village embroidery, museum pages, architecture, nature, old notes, symbolic color, and the emotional atmosphere of a collection."
  },
  {
    index: "04",
    title: "Sketch, Cloth, and Motif",
    image: "/images/home/making-fabric-board.jpg",
    alt: "Fabric, embroidery, and DMC color board with design notes",
    text:
      "Each piece moves from feeling to silhouette. Sketches, fabric swatches, embroidery placement, proportion, and movement are studied until the garment begins to speak clearly."
  },
  {
    index: "05",
    title: "The Making of Each Piece",
    image: "/images/home/making-atelier-bw-clean.jpg",
    alt: "Atelier workspace with garments and work in progress",
    text:
      "The atelier is where the story becomes physical: cutting, draping, fitting, embroidery, hand-finishing, pressing, and the patient corrections that make a piece feel inevitable."
  },
  {
    index: "06",
    title: "From Garment to Memory",
    image: "/images/home/making-garment-bag.jpg",
    alt: "Maie Salameh couture garment bag in the studio",
    text:
      "When the piece leaves the studio, it enters another life: a bride, a public stage, a photograph, a family archive, or a woman carrying heritage in her own way."
  }
];

export default function JournalPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="quiet-section page-pad flex items-center">
        <Reveal>
          <p className="small-caps mb-10 text-burgundy">Journal</p>
          <h1 className="editorial-title max-w-5xl text-[20vw] md:text-[11vw]">
            Notes on culture, material, and image.
          </h1>
        </Reveal>
      </section>

      <section className="page-pad border-y border-ink/10 bg-[#11100d] py-24 text-cream md:py-36">
        <Reveal>
          <p className="small-caps mb-8 text-gold">The Making</p>
          <h2 className="serif max-w-5xl text-[13vw] leading-[0.9] md:text-[6vw]">
            The building of Maie Salameh, from childhood tatreez to the final
            piece.
          </h2>
        </Reveal>
      </section>

      <section className="page-pad grid gap-20 bg-[#11100d] pb-32 text-cream md:gap-28 md:pb-44">
        {makingChapters.map((chapter, index) => {
          const reverse = index % 2 === 1;

          return (
            <article
              key={chapter.title}
              className="grid min-h-[82vh] items-center gap-12 border-t border-cream/12 pt-16 md:grid-cols-12 md:pt-24"
            >
              <Reveal
                className={
                  reverse
                    ? "md:col-span-4 md:col-start-8 md:row-start-1"
                    : "md:col-span-4 md:col-start-2"
                }
              >
                <p className="small-caps mb-8 text-cream/44">/{chapter.index}</p>
                <h3 className="serif text-5xl leading-none md:text-7xl">
                  {chapter.title}
                </h3>
                <p className="mt-8 max-w-sm text-sm leading-7 text-cream/62">
                  {chapter.text}
                </p>
              </Reveal>

              <Reveal
                delay={0.1}
                className={
                  reverse
                    ? "md:col-span-5 md:col-start-2"
                    : "md:col-span-5 md:col-start-7"
                }
              >
                <EditorialImage
                  src={chapter.image}
                  alt={chapter.alt}
                  className="h-[66vh] w-full"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </Reveal>
            </article>
          );
        })}
      </section>

      <section className="page-pad pb-32 pt-24">
        {journalEntries.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 0.06}>
            <article className="grid min-h-[72vh] border-t border-ink/20 py-16 md:grid-cols-12 md:py-24">
              <p className="small-caps text-olive md:col-span-2">{entry.theme}</p>
              <h2 className="serif mt-10 text-5xl leading-none md:col-span-5 md:mt-0 md:text-7xl">
                {entry.title}
              </h2>
              <p className="mt-10 max-w-md text-base leading-8 text-charcoal/75 md:col-span-4 md:col-start-9 md:mt-0">
                {entry.excerpt}
              </p>
            </article>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
