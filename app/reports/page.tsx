"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Sidebar from "@/components/Sidebar";
import ChartCard from "@/components/ChartCard";
import { weeklyActivityChart, tickets, bugs, dailyUpdates } from "@/lib/mock-data";
import styles from "./page.module.css";

export default function ReportsPage() {
  const ticketCount = tickets.length;
  const bugCount = bugs.length;
  const updateCount = dailyUpdates.length;

  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Reports</p>
            <h1 className={styles.title}>Shipped work and activity insights</h1>
            <p className={styles.description}>Review a snapshot of team progress and status trends across tickets and bugs.</p>
          </div>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard}>
            <h2>{ticketCount}</h2>
            <p>Feature tickets tracked</p>
          </div>
          <div className={styles.summaryCard}>
            <h2>{bugCount}</h2>
            <p>Bug reports logged</p>
          </div>
          <div className={styles.summaryCard}>
            <h2>{updateCount}</h2>
            <p>Daily updates recorded</p>
          </div>
        </div>

        <div className={styles.chartRow}>
          <ChartCard title="Weekly activity" description="Transactions across tickets, bugs, and updates.">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={weeklyActivityChart} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="tickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6f6cff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6f6cff" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="bugs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00d4ff" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.55)" />
                <YAxis stroke="rgba(255,255,255,0.55)" />
                <Tooltip contentStyle={{ background: "#0b1020", border: "1px solid rgba(255,255,255,0.08)", color: "#fff" }} />
                <Area type="monotone" dataKey="tickets" stroke="#6f6cff" fill="url(#tickets)" />
                <Area type="monotone" dataKey="bugs" stroke="#00d4ff" fill="url(#bugs)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        <div className={styles.detailGrid}>
          <section className={styles.detailCard}>
            <h2>Ticket status summary</h2>
            <p>Most tickets are currently moving through review and testing with a stable release cadence.</p>
          </section>
          <section className={styles.detailCard}>
            <h2>Bug severity summary</h2>
            <p>Low and medium issues are dominant, while high-priority investigations remain actively monitored.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
