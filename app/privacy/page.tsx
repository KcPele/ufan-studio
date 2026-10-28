import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formattedAddress, site } from "@/content/site";
import styles from "./privacy.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Privacy and terms",
  description: `How ${site.name} handles personal information, and the terms of use for this website.`,
  path: "/privacy",
});

const updated = "28 October 2026";

export default function PrivacyPage() {
  return (
    <Section narrow>
      <SectionHeading as="h1" eyebrow="Legal" title="Privacy and terms" intro={`Last updated ${updated}.`} />

      <div className={styles.prose}>
        <h2>Who we are</h2>
        <p>
          This website is operated by {site.name}, a company registered in Nigeria with the Corporate Affairs Commission ({site.cacNumber}),
          at {formattedAddress}. You can reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>What we collect</h2>
        <p>
          When you send an enquiry through our contact form we collect the details you give us: your name, organisation, email address,
          project type, budget range and message. We do not use advertising cookies or third-party tracking on this website.
        </p>

        <h2>How we use it</h2>
        <p>
          We use your details only to reply to your enquiry and, if we work together, to manage the project. We do not sell or share your
          information with third parties, except service providers that host our website and email on our behalf.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Enquiries that do not lead to a project are deleted within 24 months. Project records are kept for as long as needed for
          contractual, tax and legal purposes.
        </p>

        <h2>Your rights</h2>
        <p>
          Under the Nigeria Data Protection Act 2023 and, where it applies, the UK and EU GDPR, you can ask to see, correct or delete the
          personal information we hold about you, or object to how we use it. Email us and we will respond within 30 days.
        </p>

        <h2>Terms of use</h2>
        <p>
          All artwork, illustrations and text on this website are the property of {site.name} or its clients and are shown with permission.
          You may not copy, reproduce or reuse them without written consent. This website is provided as is, and we are not liable for any
          loss arising from its use.
        </p>

        <h2>Changes</h2>
        <p>We may update this notice from time to time. The date at the top shows when it was last changed.</p>
      </div>
    </Section>
  );
}
