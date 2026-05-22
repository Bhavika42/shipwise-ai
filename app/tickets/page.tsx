import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import TicketCard from "@/components/TicketCard";
import { tickets } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function TicketsPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Feature tickets</p>
            <h1 className={styles.title}>Manage the feature backlog</h1>
            <p className={styles.description}>Create tickets, track priorities, and inspect technical plans before release.</p>
          </div>
          <Link href="/tickets/new" className={styles.createButton}>New ticket</Link>
        </div>

        <div className={styles.cardList}>
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </main>
    </div>
  );
}
