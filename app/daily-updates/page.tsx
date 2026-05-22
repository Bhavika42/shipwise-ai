import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { dailyUpdates } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function DailyUpdatesPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Daily updates</p>
            <h1 className={styles.title}>Capture work, blockers, and team questions.</h1>
            <p className={styles.description}>Keep asynchronous collaboration aligned with structured status updates.</p>
          </div>
          <Link href="/daily-updates/new" className={styles.createButton}>New update</Link>
        </div>

        <div className={styles.updateGrid}>
          {dailyUpdates.map((update) => (
            <article key={update.id} className={styles.updateCard}>
              <p className={styles.updateDate}>{new Date(update.createdAt).toLocaleDateString()}</p>
              <h2>{update.whatIWorkedOn}</h2>
              <div className={styles.updateItem}>
                <strong>Blockers</strong>
                <p>{update.blockers || "No blockers reported."}</p>
              </div>
              <div className={styles.updateItem}>
                <strong>Next steps</strong>
                <p>{update.nextSteps}</p>
              </div>
              {update.questionsForTeam ? (
                <div className={styles.updateItem}>
                  <strong>Questions</strong>
                  <p>{update.questionsForTeam}</p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
