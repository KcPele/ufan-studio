import Image from "next/image";
import type { Artwork } from "@/content/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import styles from "./Hero.module.css";

type Props = {
  title: string;
  intro: string;
  images: Artwork[];
};

/** Full-bleed lead image, headline, then the remaining hero images stacked edge to edge. */
export function Hero({ title, intro, images }: Props) {
  const [lead, ...rest] = images;

  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.lead}>
        <Image src={lead.src} alt={lead.alt} fill preload sizes="100vw" className={styles.cover} />
      </div>

      <Container className={styles.copy}>
        <h1 id="home-title" className={styles.title}>
          {title}
        </h1>
        <div className={styles.side}>
          <p className={styles.intro}>{intro}</p>
          <div className={styles.actions}>
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="secondary">
              See the work
            </Button>
          </div>
        </div>
      </Container>

      {rest.length > 0 && (
        <div className={styles.strip}>
          {rest.map((image) => (
            <div key={image.src} className={styles.stripItem}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 800px) 50vw, 100vw" className={styles.cover} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
