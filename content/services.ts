// Services and prices. Edit prices and turnarounds here; the Home and
// Services pages both read from this list.
// PLACEHOLDER: all prices and turnarounds below are drafts until Ufan confirms them.

export type Service = {
  slug: string;
  title: string;
  /** One line used on the Home page service blocks. */
  summary: string;
  /** "What it is" paragraph on the Services page. */
  description: string;
  deliverables: string[];
  startingPrice: string;
  turnaround: string;
  /** Show on the Home page service blocks. */
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "comic-production",
    title: "Comics and Sequential Art",
    summary: "Full comic production, from script breakdown to lettered, print-ready pages.",
    description:
      "End-to-end production of comics, graphic novels and educational comics. We take your script or brief through thumbnails, pencils, inks, colour and lettering, keeping characters and settings consistent from the first page to the last.",
    deliverables: ["Page thumbnails and layouts for approval", "Pencils, inks and flat or rendered colour", "Lettering and balloon placement", "Print-ready and web-ready files"],
    startingPrice: "From $120 per page",
    turnaround: "4–6 pages per week",
    featured: true,
  },
  {
    slug: "animation",
    title: "Animation",
    summary: "2D and 3D animation for explainers, campaigns and story-led content.",
    description:
      "2D and 3D animation for awareness campaigns, explainers, product films and short narrative pieces. We handle character rigging, animation, compositing and final render.",
    deliverables: ["Animatic for timing approval", "Character and background assets", "Animated, composited and rendered film", "Edit-ready exports for each platform"],
    startingPrice: "From $900 per finished minute",
    turnaround: "3–6 weeks per minute of animation",
    featured: true,
  },
  {
    slug: "character-design",
    title: "Character Design and Visual Development",
    summary: "Characters, worlds and style guides that hold up across a whole production.",
    description:
      "Character designs, environments, props and colour scripts that define how a project looks before production begins. Ideal for publishers, game teams and studios starting a new property.",
    deliverables: ["Character turnarounds and expression sheets", "Environment and prop designs", "Colour keys and mood boards", "Style guide for production teams"],
    startingPrice: "From $250 per character",
    turnaround: "1–2 weeks per character",
    featured: true,
  },
  {
    slug: "storyboards",
    title: "Storyboards",
    summary: "Clear, production-ready storyboards for film, animation and advertising.",
    description:
      "Shot-by-shot storyboards that let directors, clients and production teams agree on a sequence before money is spent on it.",
    deliverables: ["Shot breakdown from script", "Rough and clean storyboard panels", "Camera and action notes", "PDF boards and individual frames"],
    startingPrice: "From $15 per panel",
    turnaround: "50–80 panels per week",
    featured: false,
  },
];
