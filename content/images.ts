// Image helpers. Every image needs its intrinsic width/height so next/image
// can reserve space and serve compressed sizes. Swap files freely; update the
// dimensions here when you do.

export type Artwork = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const archiveSizes: Record<number, [number, number]> = {
  1: [1200, 1051], 2: [856, 1200], 3: [750, 1200], 4: [848, 1200], 5: [838, 1200],
  6: [750, 1200], 7: [750, 1200], 8: [1120, 1200], 9: [896, 1200], 10: [848, 1200],
  11: [1120, 1200], 12: [1092, 1200], 13: [750, 1200], 14: [750, 1200], 15: [750, 1200],
  16: [843, 1200], 17: [1200, 1052], 18: [848, 1200], 19: [1200, 1010], 20: [836, 1200],
  21: [848, 1200], 22: [750, 1200], 23: [848, 1200], 24: [857, 1200], 25: [848, 1200],
  26: [994, 1200], 27: [846, 1200], 28: [848, 1200], 29: [839, 1200], 30: [750, 1200],
  31: [1200, 1052], 32: [977, 1199], 33: [848, 1200], 34: [848, 1200], 35: [788, 1200],
  36: [848, 1200], 37: [750, 1200], 38: [952, 1200], 39: [750, 1200], 40: [829, 1200],
  41: [848, 1200], 42: [1200, 675],
};

/** An artwork from /public/images/ufan-archive by its number. */
export function archive(number: number, alt: string): Artwork {
  const [width, height] = archiveSizes[number];
  return { src: `/images/ufan-archive/ufan-${String(number).padStart(2, "0")}.webp`, width, height, alt };
}

export const heroImages: Artwork[] = [
  { src: "/images/ufan/ufan-showreel-world.png", width: 1672, height: 941, alt: "Ufan Studio key art of an illustrated fantasy world" },
  { src: "/images/ufan/ufan-desert-story.png", width: 1536, height: 1024, alt: "Illustrated desert scene from a Ufan story" },
  { src: "/images/ufan/ufan-moonmakers.png", width: 1448, height: 1086, alt: "Moonmakers illustration by Ufan Studio" },
];
