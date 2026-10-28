import { Hero } from "@/components/home/Hero";
import { ServiceBlocks } from "@/components/home/ServiceBlocks";
import { TrustStrip } from "@/components/home/TrustStrip";
import type { Metadata } from "next";
import { CallToAction } from "@/components/ui/CallToAction";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StripGallery, type StripItem } from "@/components/ui/StripGallery";
import { TextLink } from "@/components/ui/TextLink";
import { caseStudies } from "@/content/case-studies";
import { heroImages } from "@/content/images";
import { services } from "@/content/services";
import { homeHeadline, trustStats } from "@/content/studio";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const featuredWork: StripItem[] = caseStudies.slice(0, 4).map((study) => ({
  ...study.images[0],
  title: study.title,
  label: study.category,
  caption: study.client,
  href: `/work#${study.slug}`,
  linkText: "View case study",
}));

export default function HomePage() {
  return (
    <>
      <Hero title={homeHeadline.title} intro={homeHeadline.intro} images={heroImages} />

      <Section tone="inverse" label="Studio credentials">
        <TrustStrip stats={trustStats} />
      </Section>

      <Section>
        <SectionHeading eyebrow="Selected work" title="Finished projects for real clients." />
        <StripGallery items={featuredWork} label="Featured case studies" />
        <p className={styles.more}>
          <TextLink href="/work">See every case study and the full gallery</TextLink>
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we do" title="Three disciplines, one production team." />
        <ServiceBlocks services={services.filter((service) => service.featured)} />
      </Section>

      <CallToAction />
    </>
  );
}
