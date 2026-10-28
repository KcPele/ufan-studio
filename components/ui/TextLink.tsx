import Link from "next/link";
import styles from "./TextLink.module.css";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={styles.link}>
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
