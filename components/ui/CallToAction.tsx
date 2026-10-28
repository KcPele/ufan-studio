import { Button } from "./Button";
import { Container } from "./Container";
import styles from "./CallToAction.module.css";

type Props = {
  title?: string;
  body?: string;
};

export function CallToAction({
  title = "Have a project in mind?",
  body = "Tell us what you are making, your timeline and your budget. We reply to every enquiry within two working days.",
}: Props) {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <Container className={styles.inner}>
        <h2 id="cta-title" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
        <Button href="/contact">Start a project</Button>
      </Container>
    </section>
  );
}
