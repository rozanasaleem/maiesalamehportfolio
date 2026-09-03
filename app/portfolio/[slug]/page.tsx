import { notFound, redirect } from "next/navigation";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Maie Salameh`,
    description: project.concept
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  if (slug === "palestinian-symbols") {
    redirect("/portfolio/palestinian-motifs");
  }

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  if (project.slug === "jafra" && project.plates) {
    return <JafraStory project={project} />;
  }

  if (project.slug === "queen-of-canaan" && project.canaanPlates) {
    return <QueenOfCanaanStory project={project} />;
  }

  if (project.slug === "palestinian-motifs" && project.symbolsPlates) {
    return <PalestinianMotifsStory project={project} />;
  }

  if (project.slug === "bridal-line") {
    return <BridalLineStory project={project} />;
  }

  if (
    project.slug === "dressing-our-team-at-the-olympics" &&
    project.olympicsPlates
  ) {
    return <OlympicsStory project={project} />;
  }

  const companion = projects.find((item) => item.slug !== project.slug) ?? project;

  return (
    <main>
      <section className="relative min-h-[calc(100vh-49px)] overflow-hidden bg-ink text-ivory">
        <EditorialImage
          src={project.image}
          alt={project.title}
          priority
          className="absolute inset-0 h-full w-full opacity-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="page-pad relative z-10 flex min-h-[calc(100vh-49px)] flex-col justify-end pb-[12vh]">
          <Reveal>
            <p className="small-caps mb-8 text-cream/80">
              {project.year} / {project.category}
            </p>
            <h1 className="editorial-title max-w-6xl text-[18vw] md:text-[10vw]">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="quiet-section page-pad grid items-center md:grid-cols-12">
        <Reveal className="md:col-span-7 md:col-start-3">
          <p className="serif text-5xl leading-tight md:text-8xl">
            {project.concept}
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">Mood and Material</p>
          <div className="space-y-6">
            {project.notes.map((note) => (
              <p key={note} className="serif text-5xl leading-none md:text-7xl">
                {note}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-3 md:col-start-9">
          <p className="caption">{project.caption}</p>
        </Reveal>
      </section>

      <section className="quiet-section page-pad">
        <Reveal>
          <p className="editorial-title max-w-5xl text-[20vw] md:text-[11vw]">
            The final image is never separate from the story.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">Photography Direction</p>
          <p className="text-lg leading-9 text-charcoal/75">
            Light is kept gentle, gestures are quiet, and the garment is allowed
            to carry its cultural detail without visual noise.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={companion.image}
            alt={`${project.title} visual reference`}
            className="h-[70vh] w-full"
          />
        </Reveal>
      </section>
    </main>
  );
}

function JafraStory({ project }: { project: (typeof projects)[number] }) {
  const plates = project.plates!;

  return (
    <main className="bg-ivory text-ink">
      <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-ink text-ivory sm:min-h-[calc(100vh-49px)]">
        <EditorialImage
          src={plates.cover}
          alt="Jafra Collection bronze embroidered dress in desert light"
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-black/18" />
        <div className="page-pad relative z-10 flex min-h-[calc(100vh-82px)] flex-col justify-end pb-[10vh] sm:min-h-[calc(100vh-49px)]">
          <Reveal>
            <p className="small-caps mb-8 text-cream/90">Jafra Collection</p>
            <h1 className="editorial-title max-w-5xl text-[17vw] uppercase leading-[0.82] min-[520px]:text-[15vw] md:text-[11vw]">
              Desert
              <br />
              {" "}
              Archive
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[13vw] leading-[0.94] md:text-[7.4vw]">
            Heritage is not still. It moves with the body.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">01 / The Collection</p>
          <p className="serif text-5xl leading-tight md:text-7xl">
            A contemporary interpretation of Palestinian heritage.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="caption">
            Bronze satin catches the desert light while embroidered borders
            carry the visual memory of traditional dress.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.sky}
          alt="Jafra embroidered dress with orange scarf under open sky"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="quiet-section page-pad grid items-center md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">Gesture</p>
          <p className="caption">
            The scarf becomes a line in the air: soft, ceremonial, almost
            architectural.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={plates.gesture}
            alt="Close portrait showing embroidered sleeve and gesture"
            loading="eager"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad flex min-h-screen items-end pb-[18vh] pt-[22vh]">
        <Reveal>
          <p className="editorial-title max-w-6xl text-[20vw] uppercase leading-[0.84] md:text-[11vw]">
            Color
            <br />
            remembers.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-1">
          <EditorialImage
            src={plates.blue}
            alt="Blue Jafra garment with red embroidery against stone"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="small-caps mb-8 text-burgundy">02 / Cloth and Stone</p>
          <p className="serif text-4xl leading-tight md:text-6xl">
            Saturated blue against pale earth. Red thread against silence.
          </p>
        </Reveal>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal className="w-full max-w-3xl">
          <EditorialImage
            src={plates.mirror}
            alt="Mirror detail with embroidered garment and warm light"
            loading="eager"
            className="h-[72vh] w-full"
            sizes="(min-width: 768px) 52vw, 100vw"
          />
          <p className="caption mt-7">
            A private detail: reflection, ornament, hand, and the last warmth of
            the day.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">03 / Veil</p>
          <p className="caption">
            The final image quiets the collection down: black veil, antique
            coins, embroidery held close to the face.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={plates.veil}
            alt="Black veil look from the Jafra Collection"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>
    </main>
  );
}

function QueenOfCanaanStory({ project }: { project: (typeof projects)[number] }) {
  const plates = project.canaanPlates!;

  return (
    <main className="bg-[#1d130f] text-cream">
      <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-ink text-cream min-[520px]:min-h-[calc(100vh-49px)]">
        <EditorialImage
          src={plates.cover}
          alt="Queen of Canaan emerald velvet editorial portrait"
          priority
          className="absolute inset-0 h-full w-full opacity-90"
        />
        <div className="absolute inset-0 bg-black/24" />
        <div className="page-pad relative z-10 flex min-h-[calc(100vh-82px)] flex-col justify-end pb-[10vh] min-[520px]:min-h-[calc(100vh-49px)]">
          <Reveal>
            <p className="small-caps mb-8 text-cream/80">Queen of Canaan</p>
            <h1 className="editorial-title max-w-6xl text-[16vw] uppercase leading-[0.84] md:text-[9vw]">
              Velvet
              <br />
              {" "}
              Inheritance
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[13vw] leading-[0.94] md:text-[7vw]">
            Embroidery becomes a form of presence.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-gold">01 / Studio Study</p>
          <p className="caption text-cream/70">
            Against a brown field, black velvet turns the garment into a vessel
            for metallic thread, floral forms, and Canaanite pattern.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={plates.black}
            alt="Black velvet Queen of Canaan gown with embroidered neckline"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.standing}
          alt="Emerald Queen of Canaan standing editorial image"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="quiet-section page-pad grid items-center gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:col-start-2">
          <p className="serif text-5xl leading-tight md:text-7xl">
            A crown does not need to be literal.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="caption text-cream/70">
            Ornament gathers at the neckline, waist, sleeve, and gaze. The body
            holds the archive upright.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5">
          <EditorialImage
            src={plates.portrait}
            alt="Queen of Canaan close portrait with embroidered bodice"
            loading="eager"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <p className="editorial-title text-[18vw] uppercase leading-[0.84] md:text-[8vw]">
            The
            <br />
            Details
            <br />
            Speak.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.yellow}
          alt="Yellow embroidered Queen of Canaan dress reclined"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-gold">02 / Color</p>
          <p className="serif text-4xl leading-tight md:text-6xl">
            Yellow against brown. Blue thread against gold light.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <EditorialImage
            src={plates.seated}
            alt="Turquoise accent Queen of Canaan studio portrait"
            loading="eager"
            className="h-[76vh] w-full"
            sizes="(min-width: 768px) 36vw, 100vw"
          />
        </Reveal>
      </section>
    </main>
  );
}

function PalestinianMotifsStory({
  project
}: {
  project: (typeof projects)[number];
}) {
  const plates = project.symbolsPlates!;

  return (
    <main className="bg-ivory text-ink">
      <section className="relative min-h-[calc(100vh-82px)] overflow-hidden bg-cream text-ink min-[520px]:min-h-[calc(100vh-49px)]">
        <EditorialImage
          src={plates.cover}
          alt="Palestinian Motifs floral garment in desert landscape"
          priority
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-ivory/10" />
        <div className="page-pad relative z-10 flex min-h-[calc(100vh-82px)] flex-col justify-end pb-[10vh] min-[520px]:min-h-[calc(100vh-49px)]">
          <Reveal>
            <p className="small-caps mb-8 text-ink/70">Palestinian Motifs</p>
            <h1 className="editorial-title max-w-6xl text-[15vw] uppercase leading-[0.86] md:text-[8.5vw]">
              Landscape
              <br />
              {" "}
              As Motif
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[13vw] leading-[0.94] md:text-[7vw]">
            Motifs are not decoration. They are coordinates.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.wide}
          alt="Two white garments in wide desert landscape"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">01 / Village</p>
          <p className="caption">
            The village appears as a border at the hem: architecture translated
            into color, scale, and movement.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={plates.villageDress}
            alt="White dress with Palestinian village motif at the hem"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad flex min-h-screen items-end pb-[18vh] pt-[22vh]">
        <Reveal>
          <p className="editorial-title max-w-6xl text-[18vw] uppercase leading-[0.86] md:text-[10vw]">
            A place
            <br />
            becomes
            <br />
            pattern.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5">
          <EditorialImage
            src={plates.blueWalk}
            alt="Cobalt blue motif look walking through desert"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="small-caps mb-8 text-burgundy">02 / Cobalt</p>
          <p className="serif text-4xl leading-tight md:text-6xl">
            Blue cuts through the pale desert like a remembered horizon.
          </p>
        </Reveal>
      </section>

      <section className="quiet-section page-pad grid items-center gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="caption">
            Mirror, sky, cloth: a small circular image inside the larger
            landscape.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={plates.blueMirror}
            alt="Cobalt motif garment with mirror reflecting sky"
            loading="eager"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.blueRecline}
          alt="Cobalt motif garment reclining in pale desert"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="page-pad grid min-h-screen items-center gap-20 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-1">
          <EditorialImage
            src={plates.floral}
            alt="White garment with Palestinian floral embroidery"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="small-caps mb-8 text-olive">03 / Floral Memory</p>
          <p className="caption">
            Flowers become vertical bands, framing the body like a living
            border.
          </p>
        </Reveal>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal className="w-full max-w-3xl">
          <EditorialImage
            src={plates.bluePortrait}
            alt="Cobalt motif portrait against desert"
            loading="eager"
            className="h-[74vh] w-full"
            sizes="(min-width: 768px) 52vw, 100vw"
          />
        </Reveal>
      </section>
    </main>
  );
}

const bridalLineLooks = [
  {
    index: "01",
    title: "Red Veil",
    description:
      "A bridal look built around red Palestinian embroidery, framing the face and carrying the pattern into a ceremonial train.",
    full: "/images/bridal-line/red-veil-full.jpg",
    detail: "/images/bridal-line/red-veil-detail.jpg",
    tone: "text-burgundy"
  },
  {
    index: "02",
    title: "Gold Cape",
    description:
      "Ivory fabric and gold embroidery held in a cape-like silhouette: modest, architectural, and luminous.",
    full: "/images/bridal-line/gold-cape-portrait.jpg",
    detail: "/images/bridal-line/gold-cape-detail.jpg",
    tone: "text-gold"
  },
  {
    index: "03",
    title: "Floral Ivory",
    description:
      "A softer bridal language: sculpted flowers, generous fabric, and a silhouette that moves with the body.",
    full: "/images/bridal-line/floral-gown-spread.jpg",
    detail: "/images/bridal-line/floral-gown-back.jpg",
    tone: "text-olive"
  },
  {
    index: "04",
    title: "Ivory Column",
    description:
      "A restrained column dress where construction becomes the ornament: clean line, quiet asymmetry, soft sheen.",
    full: "/images/bridal-line/ivory-column-standing.jpg",
    detail: "/images/bridal-line/ivory-column-portrait.jpg",
    tone: "text-charcoal"
  }
];

function BridalLineStory({ project }: { project: (typeof projects)[number] }) {
  return (
    <main className="bg-ivory text-ink">
      <section className="page-pad grid min-h-[calc(100vh-82px)] items-end gap-12 py-14 md:grid-cols-12 md:py-20">
        <Reveal className="md:col-span-5 md:pb-[8vh]">
          <p className="small-caps mb-8 text-burgundy">
            {project.year} / Bridal
          </p>
          <h1 className="editorial-title text-[18vw] leading-[0.84] md:text-[8vw]">
            Bridal
            <br />
            Line
          </h1>
          <p className="mt-10 max-w-sm text-base leading-8 text-charcoal/68">
            Ivory garments, embroidered veils, ceremonial capes, and custom
            pieces designed for the intimate rituals of becoming a bride.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <EditorialImage
            src="/images/bridal-line/red-veil-full.jpg"
            alt="Bride in ivory dress with red Palestinian embroidered veil"
            priority
            className="h-[72vh] w-full bg-white md:h-[80vh]"
            imageClassName="object-contain"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="grid min-h-screen place-items-center px-6 py-28">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[13vw] leading-[0.92] md:text-[6.5vw]">
            A bridal dress is an archive worn close to the body.
          </p>
        </Reveal>
      </section>

      {bridalLineLooks.map((look, index) => {
        const reverse = index % 2 === 1;

        return (
          <section
            key={look.title}
            className="page-pad grid min-h-screen items-center gap-16 py-24 md:grid-cols-12 md:py-36"
          >
            <Reveal
              className={
                reverse
                  ? "md:col-span-4 md:col-start-8 md:row-start-1"
                  : "md:col-span-4 md:col-start-2"
              }
            >
              <p className={`small-caps mb-8 ${look.tone}`}>/{look.index}</p>
              <h2 className="serif text-5xl leading-none md:text-7xl">
                {look.title}
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
                {look.description}
              </p>
            </Reveal>

            <Reveal
              delay={0.1}
              className={
                reverse
                  ? "md:col-span-4 md:col-start-2"
                  : "md:col-span-4 md:col-start-7"
              }
            >
              <EditorialImage
                src={look.full}
                alt={`${look.title} full bridal silhouette`}
                className="h-[74vh] w-full bg-white"
                imageClassName="object-contain"
                sizes="(min-width: 768px) 34vw, 100vw"
              />
            </Reveal>

            <Reveal
              delay={0.16}
              className={
                reverse
                  ? "md:col-span-3 md:col-start-6 md:self-end"
                  : "md:col-span-3 md:col-start-10 md:self-end"
              }
            >
              <EditorialImage
                src={look.detail}
                alt={`${look.title} embroidery detail`}
                className="h-[44vh] w-full bg-cream"
                sizes="(min-width: 768px) 24vw, 100vw"
              />
            </Reveal>
          </section>
        );
      })}

      <section className="bg-ink text-cream">
        <div className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
          <Reveal className="md:col-span-4 md:col-start-2">
            <p className="small-caps mb-8 text-gold">Final Plate</p>
            <p className="editorial-title text-[16vw] leading-[0.86] md:text-[7vw]">
              Ceremony
              <br />
              in ivory.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
            <EditorialImage
              src="/images/bridal-line/floral-gown-back.jpg"
              alt="Back view of ivory bridal gown with sculpted floral details"
              className="h-[82vh] w-full bg-white"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function OlympicsStory({ project }: { project: (typeof projects)[number] }) {
  const plates = project.olympicsPlates!;

  return (
    <main className="bg-ivory text-ink">
      <section className="page-pad grid min-h-[calc(100vh-82px)] items-end gap-10 overflow-hidden bg-ivory py-10 md:grid-cols-12 md:gap-12 md:py-14">
        <div className="md:col-span-4 md:pb-[8vh]">
          <Reveal>
            <p className="small-caps mb-8 text-burgundy">Paris 2024</p>
            <h1 className="editorial-title text-[16vw] uppercase leading-[0.84] md:text-[6.8vw]">
              Dressing
              <br />
              Our Team
              <br />
              at the
              <br />
              Olympics
            </h1>
            <p className="caption mt-10 max-w-sm">
              Ceremonial garments made for arrival, procession, and the public
              memory of a team.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="md:col-span-7 md:col-start-6">
          <EditorialImage
            src={plates.ringsTeam}
            alt="Palestinian Olympic delegation wearing ceremonial garments at the Olympic rings"
            priority
            className="h-[58vh] min-h-[420px] w-full md:h-[76vh]"
            sizes="(min-width: 768px) 58vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="quiet-section page-pad grid place-items-center">
        <Reveal>
          <p className="serif max-w-5xl text-center text-[12vw] leading-[0.94] md:text-[6.8vw]">
            A uniform can become a national memory.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">01 / The Delegation</p>
          <p className="serif text-5xl leading-tight md:text-7xl">
            Tatreez, keffiyeh, and national color carried into ceremony.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="caption">
            The work moves between garment and gesture: made to be worn by a
            team, seen in procession, and remembered in public images.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.parade}
          alt="Palestinian delegation waving flags during the Olympic parade"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="quiet-section page-pad grid items-center gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-olive">02 / Public Cloth</p>
          <p className="caption">
            In a crowd, the garments become legible from afar: red embroidery,
            white ground, black line, green field.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-6 md:col-start-6">
          <EditorialImage
            src={plates.team}
            alt="Women wearing embroidered ceremonial garments for Palestine"
            loading="eager"
            className="h-[68vh] w-full"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad flex min-h-screen items-end pb-[18vh] pt-[22vh]">
        <Reveal>
          <p className="editorial-title max-w-6xl text-[18vw] uppercase leading-[0.86] md:text-[10vw]">
            Seen
            <br />
            from
            <br />
            afar.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-1">
          <EditorialImage
            src={plates.shirt}
            alt="White shirt with embroidered Palestinian motifs"
            loading="eager"
            className="h-[72vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <p className="small-caps mb-8 text-burgundy">03 / Detail</p>
          <p className="serif text-4xl leading-tight md:text-6xl">
            Small motifs become a language of distance, place, and return.
          </p>
        </Reveal>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <EditorialImage
          src={plates.ringsPair}
          alt="Palestinian Olympic team garments photographed at the Olympic rings"
          loading="eager"
          className="absolute inset-0 h-full w-full"
        />
      </section>

      <section className="quiet-section page-pad grid items-center gap-20 md:grid-cols-12">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="caption">
            The Olympic rings turn the project into a threshold: heritage dress
            entering a global frame without losing its own rhythm.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <EditorialImage
            src={plates.portrait}
            alt="Palestinian athlete in ceremonial dress with embroidered chest panel"
            loading="eager"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 36vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="bg-ink text-cream">
        <div className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
          <Reveal className="md:col-span-4 md:col-start-2">
            <p className="small-caps mb-8 text-gold">04 / Opening Ceremony</p>
            <p className="caption text-cream/70">
              At night, the flag becomes the scale. The garment sits beneath it,
              close to the body, close to the story.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-5 md:col-start-7">
            <EditorialImage
              src={plates.ceremony}
              alt="Palestinian flag carried during the Olympic opening ceremony"
              loading="eager"
              className="h-[82vh] w-full"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
          </Reveal>
        </div>

        <section className="relative min-h-screen overflow-hidden">
          <EditorialImage
            src={plates.stage}
            alt="Palestinian delegation entering the Olympic ceremony stage"
            loading="eager"
            className="absolute inset-0 h-full w-full"
          />
        </section>

        <section className="quiet-section page-pad grid place-items-center">
          <Reveal>
            <p className="editorial-title max-w-6xl text-center text-[16vw] uppercase leading-[0.86] md:text-[8vw]">
              Cloth
              <br />
              becomes
              <br />
              presence.
            </p>
          </Reveal>
        </section>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5">
          <EditorialImage
            src={plates.overhead}
            alt="Palestinian flag leading the team during the Olympic ceremony"
            loading="eager"
            className="h-[82vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:col-start-8">
          <p className="small-caps mb-8 text-olive">Final Plate</p>
          <p className="caption">
            A procession, a flag, a team. The design leaves the studio and
            enters collective memory.
          </p>
        </Reveal>
      </section>
    </main>
  );
}
