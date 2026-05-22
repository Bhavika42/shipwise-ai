import Link from "next/link";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import styles from "./TicketCard.module.css";
import type { Ticket } from "@/lib/mock-data";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <article className={styles.card}>
      <div className={styles.headline}>
        <div>
          <h3>{ticket.title}</h3>
          <p>{ticket.description}</p>
        </div>
        <div className={styles.statusGroup}>
          <StatusBadge status={ticket.status} />
          <PriorityBadge priority={ticket.priority} />
        </div>
      </div>
      <div className={styles.meta}>
        <span>Updated {new Date(ticket.updatedAt).toLocaleDateString()}</span>
        <Link href={`/tickets/${ticket.id}`} className={styles.link}>
          View details
        </Link>
      </div>
    </article>
  );
}
