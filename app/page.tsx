import Link from "next/link";
import styles from "./page.module.css";

const features = [
  { title: "Ticket tracking", description: "Capture requirements, technical plans, and approval workflows in a single place." },
  { title: "Bug triage", description: "Prioritize issues with severity, root-cause analysis, and AI-assisted debugging notes." },
  { title: "Async updates", description: "Share daily progress, blockers, and team questions with a clear reporting workflow." },
];

const workflowSteps = [
  { title: "Plan", description: "Define tickets, technical tasks, and validation criteria." },
  { title: "Track", description: "Monitor bug states, ticket progress, and release readiness." },
  { title: "Verify", description: "Review AI suggestions, test plans, and shipped work summaries." },
];

const techStack = ["Next.js App Router", "TypeScript", "Prisma", "PostgreSQL", "React Hook Form", "Zod", "Recharts"];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.badge}>ShipWise AI</p>
          <h1>Modern engineering workflows for fast-moving teams.</h1>
          <p className={styles.description}>
            Manage tickets, triage bugs, write async updates, and generate AI-aware summaries with a polished developer workspace.
          </p>
          <div className={styles.actions}>
            <Link href="/signup" className={styles.primaryButton}>Get started</Link>
            <Link href="/dashboard" className={styles.secondaryButton}>View dashboard</Link>
          </div>
        </div>
        <div className={styles.previewCard}>
          <div className={styles.previewHeader}>
            <span>Live dashboard</span>
            <div className={styles.previewBadges}>
              <span>AI suggestions</span>
              <span>Data sync</span>
            </div>
          </div>
          <div className={styles.previewStats}>
            <div>
              <strong>42</strong>
              <p>Open tickets</p>
            </div>
            <div>
              <strong>8</strong>
              <p>Bugs in triage</p>
            </div>
            <div>
              <strong>16</strong>
              <p>Shipped features</p>
            </div>
          </div>
          <div className={styles.previewChart}>
            <div className={styles.chartBar} style={{ width: "70%" }} />
            <div className={styles.chartBar} style={{ width: "45%" }} />
            <div className={styles.chartBar} style={{ width: "32%" }} />
          </div>
        </div>
      </section>
      <section className={styles.featuresSection}>
        <h2>Everything your dev workflow needs</h2>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.workflowSection}>
        <div className={styles.workflowCopy}>
          <p className={styles.sectionLabel}>Workflow</p>
          <h2>From planning to shipped work with clarity.</h2>
          <p>ShipWise AI combines feature management, bug triage, team updates, and responsible AI assistance into one developer platform.</p>
        </div>
        <div className={styles.workflowList}>
          {workflowSteps.map((step) => (
            <div key={step.title} className={styles.workflowCard}>
              <span>{step.title}</span>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.techSection}>
        <h2>Built with a modern stack</h2>
        <div className={styles.techGrid}>
          {techStack.map((tech) => (
            <div key={tech} className={styles.techPill}>{tech}</div>
          ))}
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div>
          <h2>Start owning your engineering workflow.</h2>
          <p>ShipWise AI is designed to showcase full-stack responsibility, feature ownership, and AI-aware team processes.</p>
        </div>
        <Link href="/signup" className={styles.ctaButton}>Launch ShipWise AI</Link>
      </section>
    </main>
  );
}
