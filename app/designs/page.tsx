import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Designs | Maie Salameh"
};

export default function DesignsPage() {
  return (
    <main>
      <section className="quiet-section page-pad grid items-center md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="small-caps mb-8 text-burgundy">Designs and Embroidery</p>
          <h1 className="editorial-title text-[18vw] md:text-[10vw]">
            The details matter.
          </h1>
        </Reveal>
      </section>

      <section className="page-pad min-h-screen py-24 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4 md:col-start-2">
            <EditorialImage
              src={projects[2].image}
              alt="Embroidery pattern study"
              className="h-[70vh] w-full"
            />
          </Reveal>
          <Reveal delay={0.12} className="self-end md:col-span-4 md:col-start-8">
            <p className="small-caps mb-8 text-olive">Notebook</p>
            <p className="serif text-4xl leading-tight md:text-6xl">
              Sketches, material notes, color fragments, and embroidered motifs
              gathered slowly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="quiet-section page-pad">
        <div className="grid gap-8 md:grid-cols-4">
          {["burgundy thread", "olive leaf", "antique gold", "warm ivory"].map(
            (color, index) => (
              <Reveal key={color} delay={index * 0.04}>
                <div className="flex min-h-[42vh] flex-col justify-between border-t border-ink/25 pt-5">
                  <span
                    className={`block h-24 w-24 rounded-full ${
                      index === 0
                        ? "bg-burgundy"
                        : index === 1
                          ? "bg-olive"
                          : index === 2
                            ? "bg-gold"
                            : "bg-cream"
                    }`}
                  />
                  <p className="small-caps text-charcoal">{color}</p>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5">
          <p className="serif text-[18vw] leading-[0.82] md:text-[8vw]">
            hand, thread, memory.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <EditorialImage
            src={projects[3].image}
            alt="Palestinian motif garment detail"
            className="h-[76vh] w-full"
          />
        </Reveal>
      </section>
    </main>
  );
}
