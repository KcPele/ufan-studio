import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CaseStudyArticle } from "@/components/work/CaseStudyArticle";
import { StripGallery } from "@/components/ui/StripGallery";
import { CallToAction } from "@/components/ui/CallToAction";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { caseStudies, galleryRows } from "@/content/case-studies";
import styles from "./work.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Case studies in comics, character design, visual development and animation by Ufan Studio.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Work"
          title="Case studies"
          intro="Each project below shows the brief we were given, what we produced, the scope in numbers and the finished pages."
        />
        <nav aria-label="Case studies">
          <ol className={styles.toc}>
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <a href={`#${study.slug}`}>{study.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      {caseStudies.map((study, index) => (
        <CaseStudyArticle key={study.slug} study={study} index={index} />
      ))}

      <Section tone="surface" id="gallery">
        <SectionHeading eyebrow="Gallery" title="More from the studio" intro="Covers, pages, characters and worlds from other projects." />
        <div className={styles.rows}>
          {galleryRows.map((row, index) => (
            <StripGallery key={index} items={row} label={`More work, set ${index + 1}`} />
          ))}
        </div>
      </Section>

      <CallToAction />
    </>
  );
}
