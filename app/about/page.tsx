import Image from "next/image";
import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { inspirations, projects } from "@/lib/content";

export const metadata = {
  title: "About | Maie Salameh"
};

const thinking = [
  "research",
  "moodboards",
  "fabric studies",
  "sketches",
  "color exploration",
  "failed concepts",
  "typography choices",
  "photography direction",
  "visual strategy"
];

const notebook = [
  "embroidered borders beside torn paper",
  "olive branches, stone, metal, shadow",
  "a color remembered before it is named",
  "a silhouette edited until it becomes quiet",
  "a photograph that feels like a memory"
];

export default function AboutPage() {
  const selectedProjects = projects.filter((project) =>
    [
      "jafra",
      "queen-of-canaan",
      "palestinian-motifs",
      "dressing-our-team-at-the-olympics"
    ].includes(project.slug)
  );

  return (
    <main className="bg-ivory text-ink">
      <section className="page-pad grid min-h-[calc(100vh-82px)] place-items-center py-24 min-[520px]:min-h-[calc(100vh-49px)] md:py-32">
        <Reveal className="w-full max-w-2xl">
          <Image
            src="/images/brand/maie-salameh-couture-wordmark.png"
            alt="Maie Salameh Couture"
            width={565}
            height={274}
            priority
            className="mx-auto h-auto w-full"
          />
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-end gap-16 pb-24 pt-20 md:grid-cols-12 md:pb-32">
        <Reveal className="md:col-span-5">
          <EditorialImage
            src={projects[0].image}
            alt="Maie Salameh garment study in desert light"
            className="h-[68vh] w-full"
            priority
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-7">
          <p className="small-caps mb-8 text-burgundy">About</p>
          <h1 className="editorial-title text-[16vw] leading-[0.88] md:text-[7vw]">
            I believe culture deserves modern design.
          </h1>
          <p className="mt-10 max-w-lg text-lg leading-9 text-charcoal/75">
            My work begins with storytelling: a memory, a material, a place, a
            gesture, a piece of cloth. From there, heritage becomes contemporary
            form.
          </p>
        </Reveal>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[12vw] leading-[0.94] md:text-[6.8vw]">
            The final dress is only the last page of the story.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">Thinking</p>
          <p className="caption">
            Each project is treated as a visual argument. Before the final image,
            there is research, editing, doubt, material testing, and direction.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-6 md:col-start-6">
          <div className="grid gap-y-5">
            {thinking.map((item) => (
              <p key={item} className="serif text-5xl leading-none md:text-7xl">
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src="/images/olympics/olympics-shirt-detail-web.jpg"
          alt="Embroidered shirt detail from the Olympic dressing project"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="quiet-section page-pad grid items-center gap-20 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">Process</p>
          <p className="serif text-5xl leading-tight md:text-7xl">
            I look for the point where memory becomes visual structure.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="caption">
            A motif might begin as a family reference, a village landscape, a
            thread color, a photograph, or a line drawn quickly before it
            disappears.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5">
          <EditorialImage
            src="/images/palestinian-symbols/symbols-blue-mirror-web.jpg"
            alt="Mirror and blue garment detail from Palestinian Motifs"
            loading="eager"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <p className="small-caps mb-8 text-olive">My Notebook</p>
          <div className="space-y-7">
            {notebook.map((item) => (
              <p key={item} className="serif text-4xl leading-tight md:text-6xl">
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="quiet-section page-pad">
        <Reveal>
          <p className="small-caps mb-14 text-olive">Things Inspiring Me</p>
        </Reveal>
        <div className="grid gap-y-7 md:grid-cols-2">
          {inspirations.map((item, index) => (
            <Reveal key={item} delay={index * 0.025}>
              <p className="serif text-4xl leading-tight md:text-7xl">{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">Selected Work</p>
          <p className="caption">
            Collections, ceremonial dressing, embroidery studies, and cultural
            garments shaped through image, atmosphere, and craft.
          </p>
        </Reveal>
        <div className="grid gap-16 md:col-span-6 md:col-start-6">
          {selectedProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <p className="small-caps mb-5 text-charcoal/50">
                  {project.year} / {project.category}
                </p>
                <p className="serif text-5xl leading-none transition-opacity duration-500 group-hover:opacity-60 md:text-7xl">
                  {project.title}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
