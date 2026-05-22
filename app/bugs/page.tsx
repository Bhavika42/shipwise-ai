import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import BugCard from "@/components/BugCard";
import { bugs } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function BugsPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Bug triage</p>
            <h1 className={styles.title}>Inspect and prioritize bugs</h1>
            <p className={styles.description}>Capture reproduction details, root cause findings, and verification steps for each issue.</p>
          </div>
          <Link href="/bugs/new" className={styles.createButton}>Report bug</Link>
        </div>
        <div className={styles.cardList}>
          {bugs.map((bug) => (
            <BugCard key={bug.id} bug={bug} />
          ))}
        </div>
      </main>
    </div>
  );
}
