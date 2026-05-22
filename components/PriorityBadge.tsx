import styles from "./PriorityBadge.module.css";

type PriorityBadgeProps = {
  priority: string;
};

const priorityStyles: Record<string, string> = {
  Low: styles.low,
  Medium: styles.medium,
  High: styles.high,
  Critical: styles.critical,
};

export default function PriorityBadge({ priority }: PriorityBadgeProps) {
  return (
    <span className={`${styles.badge} ${priorityStyles[priority] ?? styles.medium}`}>
      {priority}
    </span>
  );
}
