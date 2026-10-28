import type { Service } from "@/content/services";
import styles from "./ServiceDetail.module.css";

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  return (
    <section id={service.slug} className={styles.service} aria-labelledby={`${service.slug}-title`}>
      <div className={styles.heading}>
        <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
        <h2 id={`${service.slug}-title`} className={styles.title}>
          {service.title}
        </h2>
      </div>

      <div className={styles.body}>
        <p className={styles.description}>{service.description}</p>

        <div>
          <h3 className={styles.label}>What you receive</h3>
          <ul className={styles.list}>
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <dl className={styles.terms}>
          <div>
            <dt>Starting price</dt>
            <dd>{service.startingPrice}</dd>
          </div>
          <div>
            <dt>Typical turnaround</dt>
            <dd>{service.turnaround}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
