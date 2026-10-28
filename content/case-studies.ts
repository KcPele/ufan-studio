// Case studies for the Work page and Home page cards.
// To add a new case study: copy one object, give it a unique slug, fill in the
// fields and list 6–10 images. It appears on /work (anchored at /work#<slug>) and on the Home cards automatically.
// PLACEHOLDER: client names, numbers and outcomes are drafts until Ufan supplies copy.

import { archive, type Artwork } from "./images";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  /** Short line for cards, e.g. "Educational comic". */
  category: string;
  problem: string;
  produced: string;
  /** Scope in numbers, shown as a stat row. */
  scope: { value: string; label: string }[];
  images: Artwork[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "civic-education-comic",
    title: "A civic education comic for the Caribbean",
    client: "Saint Lucia based consultancy",
    category: "Educational comic",
    problem:
      "The client needed to explain public policy to young readers across the Caribbean in a format they would actually pick up, and they needed it delivered remotely to a fixed timeline.",
    produced:
      "A full-colour educational comic: script breakdown, character designs drawn from local references, pencils, inks, colour and lettering, plus print and web files.",
    scope: [
      { value: "24", label: "Pages" },
      { value: "6", label: "Characters designed" },
      { value: "8", label: "Weeks" },
    ],
    images: [
      archive(1, "Ink illustration from the civic education comic"),
      archive(5, "Monochrome comic page study"),
      archive(6, "Character study in ink"),
      archive(8, "Sequential panels in black and white"),
      archive(11, "Comic page with detailed line work"),
      archive(14, "Ink drawing of a character in a setting"),
      archive(15, "Comic page layout study"),
    ],
    outcome:
      "Delivered on schedule and used in the client's outreach programme. The engagement led to further illustration work with the same team.",
  },
  {
    slug: "character-and-cover-art",
    title: "Characters and covers for an independent series",
    client: "Independent comic publisher",
    category: "Character design and covers",
    problem:
      "An independent publisher preparing a crowdfunding launch needed a consistent cast and cover art strong enough to carry the campaign page.",
    produced:
      "Character turnarounds for the main cast, a colour style guide and a run of full-colour covers and promotional illustrations.",
    scope: [
      { value: "8", label: "Characters" },
      { value: "5", label: "Covers" },
      { value: "4", label: "Weeks" },
    ],
    images: [
      archive(2, "Full-colour character illustration"),
      archive(3, "Character cover art"),
      archive(4, "Comic cover illustration of a hero mid-action"),
      archive(16, "Colour character design"),
      archive(18, "Promotional character illustration"),
      archive(20, "Cover artwork in full colour"),
      archive(22, "Character portrait in colour"),
      archive(33, "Colour key art"),
    ],
    outcome: "The campaign launched with the full cover set and the style guide is now used by the publisher's other artists.",
  },
  {
    slug: "visual-development-worlds",
    title: "Visual development for an original fantasy world",
    client: "Animation studio partner",
    category: "Visual development",
    problem:
      "A studio developing an original animated property needed its world defined before production: places, mood and colour that a larger team could build from.",
    produced:
      "Environment designs, key art and colour studies establishing the look of the world, delivered as a production-ready visual development pack.",
    scope: [
      { value: "12", label: "Environments" },
      { value: "3", label: "Key art pieces" },
      { value: "6", label: "Weeks" },
    ],
    images: [
      archive(26, "Kirin Castle fantasy environment"),
      archive(7, "Atmospheric world study"),
      archive(9, "Fantasy landscape illustration"),
      archive(10, "Dark environment study"),
      archive(12, "World-building illustration"),
      archive(19, "Wide environment concept"),
      archive(24, "Original fantasy world key art"),
      archive(13, "Mood study for a fantasy location"),
    ],
    outcome: "The pack became the reference for the studio's pitch and pre-production, and Ufan was retained for further development.",
  },
  {
    slug: "sports-action-comic",
    title: "A sports comic, from inks to full colour",
    client: "Sports media publisher",
    category: "Sports comic",
    problem:
      "The publisher wanted big-moment sports stories told as comics, with action readable at phone size and a style that worked in both black and white and colour editions.",
    produced:
      "Fully inked sequential pages, a full-colour edition of the same pages, and supporting character and action illustrations for promotion.",
    scope: [
      { value: "16", label: "Pages" },
      { value: "2", label: "Editions, ink and colour" },
      { value: "5", label: "Weeks" },
    ],
    images: [
      archive(39, "Full-colour basketball comic page"),
      archive(30, "Inked version of the basketball comic page"),
      archive(37, "Olympic high jump comic illustration"),
      archive(41, "Ink action illustration"),
      archive(40, "Warrior character illustration in colour"),
      archive(34, "Character design in colour"),
      archive(36, "Hooded character design in colour"),
    ],
    outcome: "Both editions were delivered together, and the colour pages were reused across the publisher's social channels.",
  },
];

/** Gallery piece; `title` doubles as the name on the closed strip, so keep it short. */
export type GalleryItem = Artwork & { title: string; caption: string };

const piece = (n: number, title: string, caption: string): GalleryItem => ({
  ...archive(n, `${title}, ${caption.toLowerCase()} by Ufan Studio`),
  title,
  caption,
});

/**
 * Additional work below the case studies, shown as expanding strips.
 * Each inner array is one row; keep rows to 5–7 pieces so the open panel stays large.
 * PLACEHOLDER: titles are working names until Ufan confirms them.
 */
export const galleryRows: GalleryItem[][] = [
  [
    piece(25, "Smoke", "Digital illustration"),
    piece(38, "Black to the Future", "Cover art"),
    piece(27, "Boukman", "Black Shots cover"),
    piece(29, "Warriors", "Key art"),
    piece(23, "The Elder", "Character design"),
    piece(35, "Drifter", "Character illustration"),
  ],
  [
    piece(32, "Bloom", "Character design"),
    piece(21, "Beast", "Creature design"),
    piece(31, "Crew", "Character turnaround"),
    piece(17, "Line-up", "Ink character sheet"),
    piece(28, "Pursuit", "Sequential art"),
    piece(42, "Machine", "Vehicle concept"),
  ],
];
