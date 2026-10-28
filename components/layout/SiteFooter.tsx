import Link from "next/link";
import { formattedAddress, nav, site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.name}>{site.name}</p>
            <p>CAC registration {site.cacNumber}</p>
            <address className={styles.address}>{formattedAddress}</address>
          </div>

          <div>
            <p className={styles.label}>Contact</p>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={site.instagram.url} rel="noopener noreferrer" target="_blank">
                  Instagram {site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.label}>Pages</p>
            <ul className={styles.list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/privacy">Privacy and terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.legal}>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
