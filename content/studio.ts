// Home trust strip, About page story and team.
// PLACEHOLDER: figures, story copy and team details are drafts until Ufan supplies them.

export const trustStats = [
  { value: "CAFCI", label: "Member, Caribbean animation and film cluster" },
  { value: "15+", label: "Clients served" },
  { value: "6", label: "Years operating" },
  { value: "500+", label: "Pages produced" },
];

export const homeHeadline = {
  title: "Comics, illustration and animation for publishers, NGOs and studios.",
  intro: "A registered production studio in Abuja, delivering sequential art and animation to clients across Africa, the Caribbean, Europe and North America.",
};

export const studioStory = [
  "Ufan Studio began as a comic collective with a simple aim: tell stories with culture, character and imagination at their roots, and draw them well enough to stand next to anything published anywhere.",
  "Today we are a registered production studio in Abuja. We produce comics and sequential art, animation, character design and storyboards for independent creators, publishers, development organisations and animation studios. Our work has been delivered to clients in Nigeria, the Caribbean, the United Kingdom, Europe and the United States.",
  "We work the way a production company should. Every project has a named lead, a clear schedule, written approvals at each stage and files delivered in the formats your printer, platform or pipeline expects. We have produced educational and awareness material for policy audiences, cover art for crowdfunded books and visual development for original animated worlds.",
  "We are members of CAFCI, the Caribbean animation and film cluster, and we are building a team of young African artists trained to international production standards.",
];

export const founderNote = {
  heading: "Founder background",
  body: "Ufan Studio is led by Ebenezer Akeju, who trained in Mechanical Engineering and worked in electricity regulation before founding the studio. That background in regulated, public-interest work shapes how we approach development sector briefs: accurate, accountable and on schedule.",
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path under /public. Leave undefined to show an initials placeholder. */
  photo?: string;
};

export const team: TeamMember[] = [
  { name: "Ebenezer Akeju", role: "CEO and Creative Director", bio: "Leads client relationships, art direction and production across every project." },
  { name: "Emmanuel James", role: "Co-founder, Lead Illustrator", bio: "Sets the visual standard for the studio's comics and character work." },
  { name: "Team member", role: "Animator", bio: "One line about this person's focus and experience." },
  { name: "Team member", role: "Colourist and Letterer", bio: "One line about this person's focus and experience." },
];
