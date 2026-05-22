"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import BugForm from "@/components/BugForm";
import styles from "../page.module.css";

export default function NewBugPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  async function handleCreate(values: any) {
    const response = await fetch("/api/bugs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setMessage("Bug reported successfully.");
      router.push("/bugs");
    } else {
      const error = await response.json();
      setMessage(error.error?.message || "Unable to report bug.");
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>New bug</p>
            <h1 className={styles.title}>Create a bug report</h1>
            <p className={styles.description}>Capture issue details, reproduction steps, and severity so the team can resolve it faster.</p>
          </div>
        </div>
        {message ? <p style={{ color: "#8cd9ff" }}>{message}</p> : null}
        <BugForm onSubmit={handleCreate} submitLabel="Report bug" />
      </main>
    </div>
  );
}
