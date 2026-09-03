"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { EditorialImage } from "@/components/EditorialImage";

type ProcessStep = {
  index: string;
  title: string;
  line: string;
  caption: string;
};

const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Inspiration",
    line: "The beginning of every collection.",
    caption:
      "Research, historical references, Palestinian motifs, museum visits, nature, architecture, color studies, and moodboards. Every collection begins with a story waiting to be told."
  },
  {
    index: "02",
    title: "Sketch & Concept",
    line: "The first ideas.",
    caption:
      "Initial sketches, silhouettes, design notes, fabric considerations, and color exploration. Garments are not designed overnight."
  },
  {
    index: "03",
    title: "Material Selection",
    line: "A tactile study.",
    caption:
      "Linen, silk, velvet, mother of pearl, handwoven fabrics, and fabric swatches are studied through touch, weight, light, and movement."
  },
  {
    index: "04",
    title: "Embroidery",
    line: "The cultural language of the piece.",
    caption:
      "Pattern development, stitch details, embroidery close-ups, traditional techniques, and handwork communicate why each piece is special."
  },
  {
    index: "05",
    title: "Craftsmanship",
    line: "The atelier.",
    caption:
      "Pattern pieces, cutting, draping, pressing, construction, and hand-finishing refine the garment into form."
  },
  {
    index: "06",
    title: "The Final Piece",
    line: "The transformation.",
    caption:
      "Editorial photography, close-up details, styling, atmosphere, and presence complete the story."
  }
];

const processImages = [
  {
    src: "/images/home/making-research-book.jpg",
    alt: "Open research book showing Palestinian dress references",
    caption: processSteps[0].caption
  },
  {
    src: "/images/home/making-fabric-board.jpg",
    alt: "Fabric and embroidery board with handwritten notes",
    caption: processSteps[2].caption
  },
  {
    src: "/images/home/making-sketch-dress.jpg",
    alt: "Fashion sketch of an embroidered green dress",
    caption: processSteps[1].caption
  },
  {
    src: "/images/home/making-material-swatches.jpg",
    alt: "Fabric swatches and handwritten design notes",
    caption: processSteps[3].caption
  },
  {
    src: "/images/home/making-atelier-bw-clean.jpg",
    alt: "Black and white atelier interior with garments and work table",
    caption: processSteps[4].caption
  },
  {
    src: "/images/home/making-garment-bag.jpg",
    alt: "Maie Salameh couture garment bag with studio details",
    caption: processSteps[5].caption
  }
];

function ProcessStage({
  step,
  index,
  progress
}: {
  step: ProcessStep;
  index: number;
  progress: MotionValue<number>;
}) {
  const start = 0.045 + index * 0.14;
  const hold = start + 0.16;
  const end = index === processSteps.length - 1 ? 0.98 : hold + 0.09;
  const opacity = useTransform(progress, [start, start + 0.045, hold, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, start + 0.07, hold, end], [28, 0, 0, -22]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 z-20 flex min-h-[42vh] flex-col justify-center border-t border-cream/18 bg-gradient-to-b from-[#11100d] via-[#11100d]/94 to-[#11100d]/72 pt-8 md:top-[9vh] md:bottom-[48vh] md:min-h-0 md:bg-none"
      style={{ opacity, y }}
    >
      <p className="small-caps mb-10 text-cream/42">/{step.index}</p>
      <h3 className="serif text-[14vw] leading-[0.86] md:text-[5.8vw]">
        {step.title}
      </h3>
      <p className="mt-8 max-w-sm text-sm leading-7 text-cream/62 md:text-base md:leading-8">
        {step.line}
      </p>
    </motion.div>
  );
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const headingY = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [40, 0, 0, -28]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.14, 0.86, 1], [0.18, 1, 1, 0]);
  const railX = useTransform(scrollYProgress, [0.08, 0.92], ["12vw", "-68vw"]);
  const railOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.82, 0.96], [0, 1, 1, 0]);
  const railY = useTransform(scrollYProgress, [0.05, 0.42, 0.96], [84, 0, -10]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative h-[520vh] bg-[#11100d] text-cream"
    >
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <div className="page-pad grid w-full grid-rows-[1fr_auto] py-24 md:grid-cols-12 md:grid-rows-1 md:py-28">
          <motion.div
            className="flex items-center md:col-span-4 md:col-start-2"
            style={{ y: headingY, opacity: headingOpacity }}
          >
            <div>
              <p className="serif text-[18vw] leading-[0.84] md:text-[7vw]">
                The
                <br />
                Making:
              </p>
              <p className="small-caps mt-6 text-cream/42">(atelier)</p>
            </div>
          </motion.div>

          <div className="relative z-20 min-h-[48vh] md:col-span-5 md:col-start-7 md:min-h-0">
            {processSteps.map((step, index) => (
              <ProcessStage
                key={step.title}
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute left-0 top-[69vh] z-0 flex gap-4 opacity-70 md:top-[64vh]"
          style={{ x: railX, y: railY, opacity: railOpacity }}
        >
          {processImages.map((image, index) => (
            <motion.div
              key={image.src}
              className="w-[46vw] shrink-0 md:w-[15vw]"
              initial={{ opacity: 0, y: 34, clipPath: "inset(22% 0% 0% 0%)" }}
              whileInView={{
                opacity: 1,
                y: index % 2 === 0 ? 0 : 28,
                clipPath: "inset(0% 0% 0% 0%)"
              }}
              viewport={{ once: true, margin: "-18% 0px" }}
              transition={{
                duration: 1.15,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <EditorialImage
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[3/4] w-full"
                sizes="(min-width: 768px) 15vw, 46vw"
              />
              <p className="mt-4 max-w-[15rem] text-[0.66rem] leading-5 text-cream/48">
                {image.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
