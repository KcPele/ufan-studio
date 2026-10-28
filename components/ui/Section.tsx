import { Container } from "./Container";
import styles from "./Section.module.css";

type Props = {
  children: React.ReactNode;
  tone?: "default" | "surface" | "inverse";
  narrow?: boolean;
  id?: string;
  /** Accessible name for the region. */
  label?: string;
};

export function Section({ children, tone = "default", narrow, id, label }: Props) {
  return (
    <section id={id} aria-label={label} className={`${styles.section} ${styles[tone]}`}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
