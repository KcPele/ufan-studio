import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { CallToAction } from "@/components/ui/CallToAction";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "Comic production, animation, character design and visual development, and storyboards, with starting prices and turnaround times.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section>
        <SectionHeading
          as="h1"
          eyebrow="Services"
          title="What we make, what it costs and how long it takes."
          intro="Starting prices are a guide. Every project gets a written quote and schedule before work begins."
        />
        {services.map((service, index) => (
          <ServiceDetail key={service.slug} service={service} index={index} />
        ))}
      </Section>

      <CallToAction title="Need a quote?" body="Send us your script, brief or reference and we will come back with a fixed quote and schedule." />
    </>
  );
}
