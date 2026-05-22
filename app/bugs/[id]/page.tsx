import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { getBugById } from "@/lib/mock-data";
import styles from "../page.module.css";

export default function BugDetailPage({ params }: { params: { id: string } }) {
  const bug = getBugById(params.id);

  if (!bug) {
    return (
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.main}>
          <p>Bug not found.</p>
          <Link href="/bugs">Back to bugs</Link>
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
            <p className={styles.label}>Bug detail</p>
            <h1 className={styles.title}>{bug.title}</h1>
            <p className={styles.description}>{bug.description}</p>
          </div>
          <Link href="/bugs" className={styles.createButton}>Back to bugs</Link>
        </div>

        <div className={styles.detailGrid}>
          <div className={styles.detailCard}>
            <div className={styles.cardMeta}>
              <StatusBadge status={bug.status} />
            </div>
            <div className={styles.detailItem}>
              <strong>Steps to reproduce</strong>
              <p>{bug.stepsToReproduce}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Expected behavior</strong>
              <p>{bug.expectedBehavior}</p>
            </div>
          </div>

          <div className={styles.detailCard}>
            <div className={styles.detailItem}>
              <strong>Actual behavior</strong>
              <p>{bug.actualBehavior}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Root cause</strong>
              <p>{bug.rootCause || "Still under investigation."}</p>
            </div>
            <div className={styles.detailItem}>
              <strong>Verification steps</strong>
              <p>{bug.verificationSteps || "Not documented yet."}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
