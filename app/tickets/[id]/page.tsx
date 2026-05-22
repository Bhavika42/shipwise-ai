import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import PriorityBadge from "@/components/PriorityBadge";
import { getTicketById } from "@/lib/mock-data";
import styles from "../page.module.css";

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const ticket = getTicketById(params.id);

  if (!ticket) {
    return (
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>
          <p>Ticket not found.</p>
          <Link href="/tickets">Back to tickets</Link>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Ticket detail</p>
            <h1 className={styles.title}>{ticket.title}</h1>
            <p className={styles.description}>{ticket.description}</p>
          </div>
          <Link href="/tickets" className={styles.createButton}>Back to tickets</Link>
        </div>

        <div className={styles.detailGrid}>
          <div className={styles.detailCard}>
            <div className={styles.cardMeta}>
              <StatusBadge status={ticket.status} />
              <PriorityBadge priority={ticket.priority} />
            </div>
            <div className={styles.detailItem}>
              <strong>Requirements</strong>
              <p>{ticket.requirements || "No additional requirements."}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Technical plan</strong>
              <p>{ticket.technicalPlan || "Not specified yet."}</p>
            </div>
          </div>

          <div className={styles.detailCard}>
            <div className={styles.detailItem}>
              <strong>Test plan</strong>
              <p>{ticket.testPlan || "Not specified yet."}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Deployment checklist</strong>
              <p>{ticket.deploymentChecklist || "Not specified yet."}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>AI summary</strong>
              <p>{ticket.aiSummary || "AI summary not available."}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
