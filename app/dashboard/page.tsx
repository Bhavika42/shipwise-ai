"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import TicketCard from "@/components/TicketCard";
import BugCard from "@/components/BugCard";
import { activityLogs, bugSeverityChart, ticketStatusChart, tickets, bugs } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function DashboardPage() {
  const totalTickets = tickets.length;
  const openBugs = bugs.filter((bug) => bug.status === "Open" || bug.status === "Investigating").length;
  const shippedFeatures = tickets.filter((ticket) => ticket.status === "Shipped").length;
  const verifiedAIs = tickets.filter((ticket) => ticket.aiVerified).length;

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.subtitle}>Overview</p>
            <h1 className={styles.title}>ShipWise AI dashboard</h1>
            <p className={styles.description}>Track active features, bug severity, AI validation, and recent activity in one place.</p>
          </div>
        </div>

        <div className={styles.statsGrid}>
          <StatCard title="Total tickets" value={totalTickets} subtitle="Live backlog and current work." />
          <StatCard title="Open bugs" value={openBugs} subtitle="Critical issues currently under review." />
          <StatCard title="Shipped features" value={shippedFeatures} subtitle="Released items this sprint." />
          <StatCard title="AI verified" value={verifiedAIs} subtitle="Summaries and plan reviews done." />
        </div>

        <div className={styles.chartGrid}>
          <ChartCard title="Ticket status distribution" description="Where work stands across the pipeline.">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={ticketStatusChart} margin={{ top: 8, right: 0, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.55)" />
                <YAxis stroke="rgba(255,255,255,0.55)" />
                <Tooltip contentStyle={{ background: "#0b1020", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
                <Bar dataKey="value" fill="#6f6cff" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
          <ChartCard title="Bug severity" description="Severity levels for current tickets.">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={bugSeverityChart} margin={{ top: 8, right: 0, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.55)" />
                <YAxis stroke="rgba(255,255,255,0.55)" />
                <Tooltip contentStyle={{ background: "#0b1020", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
                <Bar dataKey="value" fill="#00d4ff" radius={[12, 12, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className={styles.activityRow}>
          <section className={styles.activityCard}>
            <div className={styles.cardHeader}>
              <h2>Recent activity</h2>
              <p>Latest updates from tickets and bugs.</p>
            </div>
            <div className={styles.activityList}>
              {activityLogs.map((log) => (
                <div key={log.id} className={styles.activityItem}>
                  <span>{log.action}</span>
                  <p>{log.message}</p>
                  <small>{new Date(log.createdAt).toLocaleString()}</small>
                </div>
              ))}
            </div>
          </section>
          <section className={styles.cardGroup}>
            <div className={styles.cardHeader}>
              <h2>Top tickets</h2>
              <p>Work that needs your attention.</p>
            </div>
            <div className={styles.cardList}>
              {tickets.slice(0, 2).map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </section>
        </div>

        <section className={styles.cardGroup}>
          <div className={styles.cardHeader}>
            <h2>Open bugs</h2>
            <p>Active bug triage cases.</p>
          </div>
          <div className={styles.cardList}>
            {bugs.map((bug) => (
              <BugCard key={bug.id} bug={bug} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
