"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

const suggestions = [
  { label: "Generate ticket summary", value: "ticketSummary", description: "Create concise summaries for feature tickets." },
  { label: "Suggest technical plan", value: "technicalPlan", description: "Draft a clear engineering plan for delivery." },
  { label: "Suggest test cases", value: "testCases", description: "Outline the most important test scenarios." },
  { label: "Suggest bug root cause", value: "bugRootCause", description: "Identify likely reasons for the bug." },
];

export default function AIAssistantPage() {
  const [category, setCategory] = useState("ticketSummary");
  const [context, setContext] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Fetching suggestion...");
    setResult(null);

    const response = await fetch("/api/ai/suggest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category, context }),
    });

    if (!response.ok) {
      setStatus("Failed to generate suggestion.");
      return;
    }

    const data = await response.json();
    setResult(data.suggestion);
    setStatus(null);
  }

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>AI assistant</p>
            <h1 className={styles.title}>Responsible AI guidance for engineering workflows</h1>
            <p className={styles.description}>Use rule-based AI suggestions to support planning, testing, and bug triage while preserving human review.</p>
          </div>
        </div>

        <div className={styles.grid}>
          {suggestions.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`${styles.suggestionCard} ${category === item.value ? styles.active : ""}`}
              onClick={() => setCategory(item.value)}
            >
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </button>
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="context">Context for the AI suggestion</label>
          <textarea
            id="context"
            rows={6}
            value={context}
            onChange={(event) => setContext(event.target.value)}
            placeholder="Describe the ticket, bug, or workflow request."
          />
          <div className={styles.actions}>
            <button className={styles.submitButton} type="submit">Generate suggestion</button>
            <span className={styles.note}>Manual verification required for all suggestions.</span>
          </div>
        </form>

        {status ? <p className={styles.status}>{status}</p> : null}
        {result ? (
          <section className={styles.resultCard}>
            <h2>AI suggestion</h2>
            <p>{result}</p>
          </section>
        ) : null}
      </main>
    </div>
  );
}
