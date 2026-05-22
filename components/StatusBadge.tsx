import styles from "./StatusBadge.module.css";

type StatusBadgeProps = {
  status: string;
};

const statusStyles: Record<string, string> = {
  Backlog: styles.backlog,
  "In Progress": styles.inProgress,
  "In Review": styles.inReview,
  Testing: styles.testing,
  Shipped: styles.shipped,
  Open: styles.open,
  Investigating: styles.investigating,
  Fixed: styles.fixed,
  Verified: styles.verified,
  Closed: styles.closed,
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`${styles.badge} ${statusStyles[status] ?? styles.default}`}>{status}</span>;
}
