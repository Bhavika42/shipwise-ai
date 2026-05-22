import Link from "next/link";
import StatusBadge from "./StatusBadge";
import styles from "./BugCard.module.css";
import type { Bug } from "@/lib/mock-data";

export default function BugCard({ bug }: { bug: Bug }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
        </div>
        <StatusBadge status={bug.status} />
      </div>
      <div className={styles.meta}>
        <span>Severity: {bug.severity}</span>
        <Link href={`/bugs/${bug.id}`} className={styles.link}>
          Review bug
        </Link>
      </div>
    </article>
  );
}
