"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Artwork } from "@/content/images";
import styles from "./StripGallery.module.css";

export type StripItem = Artwork & {
  /** Heading in the open panel. */
  title: string;
  /** Name on the closed strip; defaults to title. Keep it short. */
  label?: string;
  caption: string;
  /** Optional link shown in the open panel. */
  href?: string;
  linkText?: string;
};

/** Delay before a mouse hover opens a strip, so sweeping across the row doesn't flicker. */
const HOVER_INTENT_MS = 140;

/**
 * One wide open panel plus narrow greyscale strips. Clicking (or resting a mouse
 * on) a strip opens it. The open panel shows the whole artwork, uncropped.
 */
export function StripGallery({ items, label }: { items: StripItem[]; label: string }) {
  const [active, setActive] = useState(0);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(hoverTimer.current), []);

  const hoverOpen = (index: number) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(index), HOVER_INTENT_MS);
  };

  return (
    <ul
      className={styles.gallery}
      aria-label={label}
      style={{ "--count": items.length } as React.CSSProperties}
      onPointerLeave={() => clearTimeout(hoverTimer.current)}>
      {items.map((item, index) => {
        const isActive = index === active;
        return (
          <li key={item.src} className={`${styles.panel} ${isActive ? styles.active : ""}`}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isActive}
              aria-label={isActive ? undefined : `Show ${item.title}`}
              onClick={() => {
                clearTimeout(hoverTimer.current);
                setActive(index);
              }}
              onPointerEnter={(event) => event.pointerType === "mouse" && hoverOpen(index)}
            >
              <Image
                src={item.src}
                alt={isActive ? item.alt : ""}
                fill
                sizes="(min-width: 800px) 70vw, 100vw"
                className={styles.strip}
              />
              <Image src={item.src} alt="" aria-hidden="true" fill sizes="(min-width: 800px) 70vw, 100vw" className={styles.full} />
              <span className={styles.label}>{item.label ?? item.title}</span>
            </button>
            <div className={styles.caption}>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
              {item.href && (
                <Link href={item.href} className={styles.link}>
                  {item.linkText ?? "View"} <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
