import type { CaseStudy } from "@/content/case-studies";
import { Container } from "@/components/ui/Container";
import { StripGallery } from "@/components/ui/StripGallery";
import styles from "./CaseStudyArticle.module.css";

/** One case study, always in the same order: problem, produced, scope, images, outcome. */
export function CaseStudyArticle({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article id={study.slug} className={styles.article} aria-labelledby={`${study.slug}-title`}>
      <Container>
        <header className={styles.header}>
          <p className={styles.meta}>
            <span>Case study {String(index + 1).padStart(2, "0")}</span>
            <span>{study.category}</span>
          </p>
          <h2 id={`${study.slug}-title`} className={styles.title}>
            {study.title}
          </h2>
          <p className={styles.client}>{study.client}</p>
        </header>

        <div className={styles.brief}>
          <div>
            <h3 className={styles.label}>The problem</h3>
            <p>{study.problem}</p>
          </div>
          <div>
            <h3 className={styles.label}>What we produced</h3>
            <p>{study.produced}</p>
          </div>
        </div>

        <dl className={styles.scope}>
          {study.scope.map((item) => (
            <div key={item.label}>
              <dt className={styles.scopeLabel}>{item.label}</dt>
              <dd className={styles.scopeValue}>{item.value}</dd>
            </div>
          ))}
        </dl>

        <StripGallery
          label={`${study.title}: images`}
          items={study.images.map((image, i) => ({
            ...image,
            title: image.alt,
            label: String(i + 1).padStart(2, "0"),
            caption: `${String(i + 1).padStart(2, "0")} of ${String(study.images.length).padStart(2, "0")}`,
          }))}
        />

        <div className={styles.outcome}>
          <h3 className={styles.label}>Outcome</h3>
          <p>{study.outcome}</p>
        </div>
      </Container>
    </article>
  );
}
