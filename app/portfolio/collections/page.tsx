import Link from "next/link";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/content";

export const metadata = {
  title: "Collections | Maie Salameh"
};

const collectionSlugs = ["jafra", "queen-of-canaan", "palestinian-motifs"];

export default function CollectionsPage() {
  const collectionProjects = collectionSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);

  return (
    <main className="bg-ivory text-ink">
      <section className="quiet-section page-pad flex items-end">
        <Reveal>
          <p className="small-caps mb-8 text-burgundy">01 / Collections</p>
          <h1 className="editorial-title max-w-6xl text-[18vw] leading-[0.86] md:text-[9vw]">
            Cultural memory as collection.
          </h1>
        </Reveal>
      </section>

      <section className="page-pad grid gap-28 pb-32 md:gap-40">
        {collectionProjects.map((project, index) =>
          project ? (
            <article
              key={project.slug}
              className="grid min-h-[92vh] items-end gap-10 md:grid-cols-12"
            >
              <Reveal
                className={
                  index % 2 === 0
                    ? "md:col-span-7"
                    : "md:col-span-7 md:col-start-6"
                }
              >
                <EditorialImage
                  src={project.image}
                  alt={project.title}
                  className="h-[72vh] w-full"
                  priority={index === 0}
                />
              </Reveal>
              <Reveal
                delay={0.08}
                className={
                  index % 2 === 0
                    ? "md:col-span-4 md:col-start-9 md:pb-12"
                    : "md:col-span-4 md:row-start-1 md:pb-12"
                }
              >
                <p className="small-caps mb-6 text-burgundy">
                  {project.year} / {project.category}
                </p>
                <h2 className="serif text-4xl leading-none md:text-6xl">
                  {project.title}
                </h2>
                <p className="mt-8 max-w-sm text-sm leading-7 text-charcoal/62">
                  {project.concept}
                </p>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="mt-10 inline-block small-caps"
                >
                  Enter story
                </Link>
              </Reveal>
            </article>
          ) : null
        )}
      </section>
    </main>
  );
}
