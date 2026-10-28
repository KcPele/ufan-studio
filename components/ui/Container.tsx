import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
};

export function Container({ children, narrow, className }: Props) {
  const classes = [styles.container, narrow && styles.narrow, className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}
