import styles from "./TrustStrip.module.css";

type Stat = { value: string; label: string };

export function TrustStrip({ stats }: { stats: Stat[] }) {
  return (
    <dl className={styles.strip}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <dt className={styles.label}>{stat.label}</dt>
          <dd className={styles.value}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
