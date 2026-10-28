import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Credentials } from "@/components/about/Credentials";
import { TeamGrid } from "@/components/about/TeamGrid";
import { CallToAction } from "@/components/ui/CallToAction";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founderNote, studioStory, team } from "@/content/studio";
import styles from "./about.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Ufan Studio is a registered comic, illustration and animation studio in Abuja, Nigeria, and a member of CAFCI.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className={styles.intro}>
          <SectionHeading as="h1" eyebrow="About" title="A production studio for drawn stories." />
          <div className={styles.story}>
            {studioStory.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className={styles.founder}>
          <h2 className={styles.founderTitle}>{founderNote.heading}</h2>
          <p className={styles.founderBody}>{founderNote.body}</p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Team" title="The people on your project" />
        <TeamGrid members={team} />
      </Section>

      <Section tone="surface">
        <Credentials />
      </Section>

      <CallToAction />
    </>
  );
}
