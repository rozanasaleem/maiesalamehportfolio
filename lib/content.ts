export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  image: string;
  plates?: {
    cover: string;
    sky: string;
    gesture: string;
    blue: string;
    mirror: string;
    veil: string;
  };
  canaanPlates?: {
    cover: string;
    black: string;
    portrait: string;
    standing: string;
    yellow: string;
    seated: string;
  };
  symbolsPlates?: {
    cover: string;
    wide: string;
    blueWalk: string;
    blueRecline: string;
    blueMirror: string;
    villageDress: string;
    villageFull: string;
    floral: string;
    bluePortrait: string;
  };
  olympicsPlates?: {
    cover: string;
    team: string;
    parade: string;
    shirt: string;
    ringsPair: string;
    ringsTeam: string;
    ceremony: string;
    stage: string;
    overhead: string;
    portrait: string;
  };
  orientation: "portrait" | "landscape";
  concept: string;
  caption: string;
  notes: string[];
};

export const projects: Project[] = [
  {
    slug: "jafra",
    title: "Jafra Collection",
    year: "2025",
    category: "Traditional Wear",
    image: "/images/jafra/jafra-bronze-sky-web.jpg",
    plates: {
      cover: "/images/jafra/jafra-bronze-sky-web.jpg",
      sky: "/images/jafra/jafra-bronze-scarf-web.jpg",
      gesture: "/images/jafra/jafra-embroidered-gesture-web.jpg",
      blue: "/images/jafra/jafra-blue-stone.jpeg",
      mirror: "/images/jafra/jafra-mirror-detail.jpg",
      veil: "/images/jafra/jafra-black-veil.jpg"
    },
    orientation: "portrait",
    concept:
      "A contemporary interpretation of Palestinian heritage, photographed between desert light, embroidered memory, and ceremonial presence.",
    caption: "Traditional silhouettes held in the open air: color, thread, stone, and sky.",
    notes: ["desert light", "embroidered memory", "ceremonial color", "a living archive"]
  },
  {
    slug: "bridal-line",
    title: "Bridal Line",
    year: "2024",
    category: "Bridal",
    image: "/images/bridal/bridal-atelier-lineup.jpg",
    orientation: "landscape",
    concept:
      "A bridal chapter of ivory garments, embroidered veils, ceremonial capes, and custom pieces designed for brides and intimate rituals.",
    caption: "Ivory, gold thread, veil, and the ceremony of a dress made for memory.",
    notes: ["bridal ritual", "ivory silk", "embroidered veil", "custom ceremony"]
  },
  {
    slug: "queen-of-canaan",
    title: "Queen of Canaan",
    year: "2024",
    category: "Embroidery Study",
    image: "/images/queen-of-canaan/canaan-green-seated-web.jpg",
    canaanPlates: {
      cover: "/images/queen-of-canaan/canaan-green-seated-web.jpg",
      black: "/images/queen-of-canaan/canaan-black-gown-web.jpg",
      portrait: "/images/queen-of-canaan/canaan-portrait-web.jpg",
      standing: "/images/queen-of-canaan/canaan-green-standing-web.jpg",
      yellow: "/images/queen-of-canaan/canaan-yellow-recline-web.jpg",
      seated: "/images/queen-of-canaan/canaan-turquoise-web.jpg"
    },
    orientation: "landscape",
    concept:
      "A studio study of Canaanite Palestinian embroidery, translated through velvet, saturated color, and contemporary silhouette.",
    caption: "Pattern as a language: ancient, precise, theatrical, and still moving.",
    notes: ["Canaanite motifs", "velvet shadow", "metallic ornament", "modern ceremony"]
  },
  {
    slug: "dressing-our-team-at-the-olympics",
    title: "Dressing Our Team at the Olympics",
    year: "2024",
    category: "Ceremonial Dress",
    image: "/images/olympics/olympics-rings-team-web.jpg",
    olympicsPlates: {
      cover: "/images/olympics/olympics-rings-team-web.jpg",
      team: "/images/olympics/olympics-team-portrait-web.jpg",
      parade: "/images/olympics/olympics-parade-boat-web.jpg",
      shirt: "/images/olympics/olympics-shirt-detail-web.jpg",
      ringsPair: "/images/olympics/olympics-rings-pair-web.jpg",
      ringsTeam: "/images/olympics/olympics-rings-team-web.jpg",
      ceremony: "/images/olympics/olympics-flag-ceremony-web.jpg",
      stage: "/images/olympics/olympics-stage-palestine-web.jpg",
      overhead: "/images/olympics/olympics-overhead-flag-web.jpg",
      portrait: "/images/olympics/olympics-peace-portrait-web.jpg"
    },
    orientation: "landscape",
    concept:
      "A ceremonial dressing project for Palestine's Olympic delegation, carrying tatreez, keffiyeh, and national color onto a world stage.",
    caption:
      "Garments made for arrival, procession, and the public memory of a team.",
    notes: ["tatreez", "keffiyeh", "national color", "ceremony"]
  },
  {
    slug: "palestinian-motifs",
    title: "Palestinian Motifs Collection",
    year: "2024",
    category: "Cultural Motifs",
    image: "/images/palestinian-symbols/symbols-wide-desert-web.jpg",
    symbolsPlates: {
      cover: "/images/palestinian-symbols/symbols-floral-desert-web.jpg",
      wide: "/images/palestinian-symbols/symbols-wide-desert-web.jpg",
      blueWalk: "/images/palestinian-symbols/symbols-blue-white-walk-web.jpg",
      blueRecline: "/images/palestinian-symbols/symbols-blue-recline-web.jpg",
      blueMirror: "/images/palestinian-symbols/symbols-blue-mirror-web.jpg",
      villageDress: "/images/palestinian-symbols/symbols-village-dress-web.jpg",
      villageFull: "/images/palestinian-symbols/symbols-village-full-web.jpg",
      floral: "/images/palestinian-symbols/symbols-floral-portrait-web.jpg",
      bluePortrait: "/images/palestinian-symbols/symbols-blue-portrait-web.jpg"
    },
    orientation: "portrait",
    concept:
      "A collection of garments carrying Palestinian villages, floral motifs, landscape memory, and cultural color into contemporary form.",
    caption: "A village, a flower, a desert horizon: motifs carried as form.",
    notes: ["village motif", "Palestinian flora", "desert horizon", "identity"]
  }
];

export const inspirations = [
  "stone courtyards after rain",
  "olive groves and pressed leaves",
  "museum vitrines",
  "old family photographs",
  "embroidered borders",
  "architectural shadows",
  "handwritten Arabic notes",
  "cinema stills in warm light",
  "cloth, thread, metal, paper"
];

export const journalEntries = [
  {
    title: "Palestinian Embroidery as Living Memory",
    theme: "Heritage",
    excerpt:
      "Tatreez is not nostalgia. It is a living visual system, holding place, family, ritual, and resistance inside thread."
  },
  {
    title: "Behind a Collection",
    theme: "Process",
    excerpt:
      "The first decision is rarely the silhouette. It begins with a feeling: a room, an old garment, a color remembered from childhood."
  },
  {
    title: "Material Studies",
    theme: "Craft",
    excerpt:
      "Fabric carries weight before it carries shape. Every textile asks for a different kind of patience."
  }
];
