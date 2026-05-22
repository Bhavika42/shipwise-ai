import styles from "./StatCard.module.css";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  accent?: string;
};

export default function StatCard({ title, value, subtitle, accent }: StatCardProps) {
  return (
    <div className={styles.card} style={{ borderColor: accent || "rgba(255,255,255,0.08)" }}>
      <p className={styles.label}>{title}</p>
      <p className={styles.value}>{value}</p>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}
