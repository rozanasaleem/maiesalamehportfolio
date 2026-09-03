import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Bridal | Maie Salameh"
};

const bridalPlates = [
  {
    index: "01",
    title: "The Atelier",
    text: "A bridal line begins in a quiet room: ivory fabric, gold thread, and garments waiting for ceremony.",
    src: "/images/bridal/bridal-atelier-lineup.jpg",
    alt: "Bridal collection lineup in the Maie Salameh atelier",
    layout: "wide"
  },
  {
    index: "02",
    title: "Custom Bridal",
    text: "Pieces made around a bride's own ritual, carrying heritage through a lighter contemporary silhouette.",
    src: "/images/bridal/bridal-couple-olive.jpg",
    alt: "Bride and groom in embroidered white ceremonial garments",
    layout: "landscape"
  },
  {
    index: "03",
    title: "Veil & Thread",
    text: "Embroidery appears in small gestures: the edge of a veil, a sleeve, a shoulder, a line of gold.",
    src: "/images/bridal/bridal-gold-veil-portrait.jpg",
    alt: "Bride wearing an embroidered veil and gold details",
    layout: "portrait"
  },
  {
    index: "04",
    title: "Studio Gown",
    text: "The bridal garment becomes architectural: soft ivory volume held by precise embroidered panels.",
    src: "/images/bridal/bridal-offshoulder-gown.jpg",
    alt: "Off-shoulder bridal gown with Palestinian embroidery",
    layout: "portrait"
  },
  {
    index: "05",
    title: "Red Memory",
    text: "A ceremonial veil turns the bride into a living archive of motif, family, and place.",
    src: "/images/bridal/bridal-red-couple.jpg",
    alt: "Bride and groom with red embroidered bridal veil",
    layout: "portrait"
  }
];

export default function BridalPage() {
  return (
    <main className="bg-ivory text-ink">
      <section className="page-pad grid min-h-[calc(100vh-82px)] items-end gap-12 py-14 md:grid-cols-12 md:py-20">
        <Reveal className="md:col-span-5 md:pb-[8vh]">
          <p className="small-caps mb-8 text-burgundy">02 / Bridal</p>
          <h1 className="editorial-title text-[18vw] leading-[0.84] md:text-[8vw]">
            Bridal Line
          </h1>
          <p className="mt-10 max-w-sm text-base leading-8 text-charcoal/68">
            Ivory garments, embroidered veils, ceremonial capes, and custom
            pieces made for intimate rituals.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="md:col-span-6 md:col-start-7">
          <EditorialImage
            src="/images/bridal/bridal-atelier-portrait.jpg"
            alt="Bride standing between ivory embroidered garments"
            priority
            className="h-[66vh] w-full md:h-[78vh]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="grid min-h-screen place-items-center px-6 py-28">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[13vw] leading-[0.92] md:text-[6.5vw]">
            A bridal dress is not only worn. It is remembered.
          </p>
        </Reveal>
      </section>

      <section className="grid gap-28 pb-32 md:gap-40">
        {bridalPlates.map((plate, index) => {
          const reverse = index % 2 === 1;
          const isPortrait = plate.layout === "portrait";
          const imageClass =
            plate.layout === "wide"
              ? "h-[70vh] w-full md:h-[82vh]"
              : isPortrait
                ? "h-[72vh] w-full md:h-[78vh]"
                : "h-[62vh] w-full md:h-[70vh]";

          return (
            <article
              key={plate.src}
              className="page-pad grid min-h-screen items-center gap-14 md:grid-cols-12"
            >
              <Reveal
                className={
                  reverse
                    ? "md:col-span-5 md:col-start-8 md:row-start-1"
                    : "md:col-span-4 md:col-start-2"
                }
              >
                <p className="small-caps mb-8 text-olive">/{plate.index}</p>
                <h2 className="serif text-5xl leading-none md:text-7xl">
                  {plate.title}
                </h2>
                <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
                  {plate.text}
                </p>
              </Reveal>

              <Reveal
                delay={0.1}
                className={
                  reverse
                    ? isPortrait
                      ? "md:col-span-4 md:col-start-2"
                      : "md:col-span-6 md:col-start-1"
                    : isPortrait
                      ? "md:col-span-4 md:col-start-8"
                      : "md:col-span-7 md:col-start-6"
                }
              >
                <EditorialImage
                  src={plate.src}
                  alt={plate.alt}
                  className={imageClass}
                  sizes={
                    isPortrait
                      ? "(min-width: 768px) 34vw, 100vw"
                      : "(min-width: 768px) 56vw, 100vw"
                  }
                />
              </Reveal>
            </article>
          );
        })}
      </section>

      <section className="bg-cream text-ink">
        <div className="page-pad grid min-h-screen items-center gap-14 py-28 md:grid-cols-12 md:py-40">
          <Reveal className="md:col-span-5 md:col-start-2">
            <p className="editorial-title text-[16vw] leading-[0.86] md:text-[7vw]">
              Made for the day.
              <br />
              Made for after.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-8">
            <p className="caption">
              Each piece moves between personal ceremony and cultural memory:
              a garment for the bride, the family, the photograph, and the
              archive.
            </p>
            <Link
              href="/portfolio/bridal-line"
              className="mt-10 inline-block small-caps"
            >
              Enter bridal story
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
