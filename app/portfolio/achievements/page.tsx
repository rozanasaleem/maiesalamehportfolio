import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Achievements | Maie Salameh"
};

const jadraCollaboration = {
  title: "Collaboration with Hanadi Nabut",
  subtitle: "for her Jadra Collection",
  year: "2024",
  category: "Collaboration",
  concept:
    "A collaboration shaped through portraiture, jewelry, and embroidered dress, placing Palestinian textile language in dialogue with contemporary adornment.",
  images: {
    cover: "/images/achievements/jadra/vineyard-portrait.jpg",
    bluePortrait: "/images/achievements/jadra/blue-portrait.jpg",
    redPortrait: "/images/achievements/jadra/red-portrait.jpg",
    profileEarring: "/images/achievements/jadra/profile-earring.jpg",
    jewelry: "/images/achievements/jadra/pomegranate-jewelry.jpg",
    greenPortrait: "/images/achievements/jadra/vineyard-full.jpg",
    embroideryDetail: "/images/achievements/jadra/embroidered-detail.jpg"
  }
};

const nadeenMissUniverse = {
  title: "Dressing Nadeen Ayoub",
  subtitle: "Miss Palestine at Miss Universe",
  year: "2025",
  category: "Pageant Stage",
  concept:
    "A public-stage moment for Palestinian representation, where dress, sash, tatreez, and image become part of a larger cultural conversation.",
  images: {
    cover: "/images/achievements/nadeen/nadeen-flag-full.jpg",
    portrait: "/images/achievements/nadeen/nadeen-flag-portrait.jpg",
    standing: "/images/achievements/nadeen/nadeen-standing-full.jpg",
    cape: "/images/achievements/nadeen/nadeen-cape-portrait.jpg"
  }
};

export default function AchievementsPage() {
  const olympics = projects.find(
    (project) => project.slug === "dressing-our-team-at-the-olympics"
  );
  const plates = olympics?.olympicsPlates;

  return (
    <main className="bg-ivory text-ink">
      <section className="quiet-section page-pad flex items-end">
        <Reveal>
          <p className="small-caps mb-8 text-burgundy">03 / Achievements</p>
          <h1 className="editorial-title max-w-6xl text-[18vw] leading-[0.86] md:text-[9vw]">
            When the work enters public memory.
          </h1>
        </Reveal>
      </section>

      {olympics && plates ? (
        <>
          <section className="page-pad grid min-h-screen items-center gap-16 py-20 md:grid-cols-12 md:py-32">
            <Reveal className="md:col-span-7">
              <EditorialImage
                src={plates.ringsTeam}
                alt="Palestinian Olympic delegation at the Olympic rings"
                priority
                className="h-[72vh] w-full"
              />
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="small-caps mb-8 text-olive">
                {olympics.year} / {olympics.category}
              </p>
              <h2 className="serif text-4xl leading-tight md:text-6xl">
                {olympics.title}
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
                {olympics.concept}
              </p>
              <Link
                href={`/portfolio/${olympics.slug}`}
                className="mt-10 inline-block small-caps"
              >
                Enter story
              </Link>
            </Reveal>
          </section>

          <section className="page-pad grid gap-5 pb-32 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-4 md:mb-24">
              <EditorialImage
                src={plates.team}
                alt="Women wearing embroidered ceremonial garments for Palestine"
                className="h-[56vh] w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.06} className="md:col-span-4">
              <EditorialImage
                src={plates.shirt}
                alt="White shirt with embroidered Palestinian motifs"
                className="h-[70vh] w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </Reveal>
            <Reveal delay={0.12} className="md:col-span-4 md:mb-12">
              <EditorialImage
                src={plates.ringsPair}
                alt="Palestinian Olympic team garments photographed at the rings"
                className="h-[56vh] w-full"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </Reveal>
          </section>
        </>
      ) : null}

      <section className="page-pad grid min-h-screen items-center gap-16 border-t border-ink/10 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-5 md:col-start-2">
          <EditorialImage
            src={nadeenMissUniverse.images.cover}
            alt="Nadeen Ayoub wearing Miss Palestine sash and holding the Palestinian flag"
            className="h-[76vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-8">
          <p className="small-caps mb-8 text-burgundy">
            {nadeenMissUniverse.year} / {nadeenMissUniverse.category}
          </p>
          <h2 className="serif text-4xl leading-tight md:text-6xl">
            {nadeenMissUniverse.title}
            <span className="mt-3 block text-2xl italic text-charcoal/55 md:text-4xl">
              {nadeenMissUniverse.subtitle}
            </span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
            {nadeenMissUniverse.concept}
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid gap-5 pb-28 md:grid-cols-12 md:items-end md:pb-44">
        <Reveal className="md:col-span-4 md:mb-20">
          <EditorialImage
            src={nadeenMissUniverse.images.portrait}
            alt="Nadeen Ayoub smiling in the embroidered Miss Palestine look"
            className="h-[58vh] w-full"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.06} className="md:col-span-4">
          <EditorialImage
            src={nadeenMissUniverse.images.standing}
            alt="Nadeen Ayoub standing in the embroidered Miss Palestine look"
            className="h-[74vh] w-full"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-4 md:mb-12">
          <EditorialImage
            src={nadeenMissUniverse.images.cape}
            alt="Nadeen Ayoub wearing the Miss Palestine cape and sash"
            className="h-[58vh] w-full"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad grid pb-28 md:grid-cols-12">
        <Reveal className="md:col-span-3 md:col-start-9">
          <p className="caption">
            A pageant image can travel quickly: from garment to stage, from
            stage to press, and from press into public memory.
          </p>
          <a
            href="https://www.facebook.com/photo/?fbid=1359584705618751&set=pb.100047017030812.-2207520000"
            className="mt-10 inline-block small-caps"
            target="_blank"
            rel="noreferrer"
          >
            View source photo
          </a>
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 border-t border-ink/10 py-28 md:grid-cols-12 md:py-44">
        <Reveal className="md:col-span-4 md:col-start-2">
          <p className="small-caps mb-8 text-burgundy">
            {jadraCollaboration.year} / {jadraCollaboration.category}
          </p>
          <h2 className="serif text-4xl leading-tight md:text-6xl">
            {jadraCollaboration.title}
            <span className="mt-3 block text-2xl italic text-charcoal/55 md:text-4xl">
              {jadraCollaboration.subtitle}
            </span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
            {jadraCollaboration.concept}
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-7">
          <EditorialImage
            src={jadraCollaboration.images.cover}
            alt="Hanadi Nabut Jadra Collection collaboration portrait under grape vines"
            className="h-[78vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad grid gap-5 pb-28 md:grid-cols-12 md:items-end md:pb-44">
        <Reveal className="md:col-span-3 md:mb-20">
          <EditorialImage
            src={jadraCollaboration.images.profileEarring}
            alt="Close portrait with gold earring from the Jadra collaboration"
            className="h-[56vh] w-full"
            sizes="(min-width: 768px) 25vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.06} className="md:col-span-4">
          <EditorialImage
            src={jadraCollaboration.images.redPortrait}
            alt="Portrait wearing embroidered red garment for Jadra"
            className="h-[72vh] w-full"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.12} className="md:col-span-5 md:mb-12">
          <EditorialImage
            src={jadraCollaboration.images.jewelry}
            alt="Pomegranate jewelry detail against embroidered garment"
            className="h-[58vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="page-pad grid min-h-screen items-center gap-16 pb-28 md:grid-cols-12 md:pb-44">
        <Reveal className="md:col-span-5 md:col-start-2">
          <EditorialImage
            src={jadraCollaboration.images.bluePortrait}
            alt="Studio portrait in embroidered red garment and jewelry"
            className="h-[76vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-8">
          <p className="serif text-4xl leading-tight md:text-6xl">
            Jewelry, embroidery, and portrait direction held in one visual
            language.
          </p>
        </Reveal>
      </section>

      <section className="page-pad grid gap-5 pb-36 md:grid-cols-12 md:items-start">
        <Reveal className="md:col-span-5 md:col-start-2">
          <EditorialImage
            src={jadraCollaboration.images.greenPortrait}
            alt="Vineyard portrait from the Hanadi Nabut Jadra collaboration"
            className="h-[58vh] w-full"
            sizes="(min-width: 768px) 42vw, 100vw"
          />
        </Reveal>
        <Reveal delay={0.08} className="md:col-span-4 md:col-start-8 md:mt-32">
          <EditorialImage
            src={jadraCollaboration.images.embroideryDetail}
            alt="Close embroidery and jewelry detail from the Jadra collaboration"
            className="h-[54vh] w-full"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </Reveal>
      </section>
    </main>
  );
}
