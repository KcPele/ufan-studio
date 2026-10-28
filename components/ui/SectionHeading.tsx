import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  /** Use h1 for the page's main heading. */
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, as: Heading = "h2" }: Props) {
  return (
    <header className={styles.heading}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={Heading === "h1" ? styles.pageTitle : styles.title}>{title}</Heading>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
