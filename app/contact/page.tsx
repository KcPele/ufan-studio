import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formattedAddress, site } from "@/content/site";
import styles from "./contact.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Start a project with ${site.name}. Email ${site.email}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className={styles.layout}>
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Start a project"
            intro="Tell us about the project, the timeline and the budget. We reply to every enquiry within two working days."
          />
          <dl className={styles.details}>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={site.instagram.url} rel="noopener noreferrer" target="_blank">
                  {site.instagram.handle}
                </a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{formattedAddress}</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
