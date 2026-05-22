import styles from "./ChartCard.module.css";

type ChartCardProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function ChartCard({ title, description, children }: ChartCardProps) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
      </div>
      <div className={styles.chart}>{children}</div>
    </section>
  );
}
