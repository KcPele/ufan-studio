import type { Service } from "@/content/services";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./ServiceBlocks.module.css";

export function ServiceBlocks({ services }: { services: Service[] }) {
  return (
    <div className={styles.grid}>
      {services.map((service, index) => (
        <article key={service.slug} className={styles.block}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.summary}>{service.summary}</p>
          <TextLink href={`/services#${service.slug}`}>More on {service.title.toLowerCase()}</TextLink>
        </article>
      ))}
    </div>
  );
}
