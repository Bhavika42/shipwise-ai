"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TicketForm from "@/components/TicketForm";
import styles from "../page.module.css";

export default function NewTicketPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  async function handleCreate(values: any) {
    const response = await fetch("/api/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.ok) {
      setMessage("Ticket created successfully.");
      router.push("/tickets");
    } else {
      const error = await response.json();
      setMessage(error.error?.message || "Unable to create ticket.");
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>New ticket</p>
            <h1 className={styles.title}>Create a feature ticket</h1>
            <p className={styles.description}>Add a new feature request, set priority, and describe the technical plan for your next delivery.</p>
          </div>
        </div>
        {message ? <p style={{ color: "#8cd9ff" }}>{message}</p> : null}
        <TicketForm onSubmit={handleCreate} submitLabel="Create ticket" />
      </main>
    </div>
  );
}
