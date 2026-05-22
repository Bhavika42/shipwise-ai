import Link from "next/link";
import styles from "./Sidebar.module.css";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Tickets", href: "/tickets" },
  { label: "Bugs", href: "/bugs" },
  { label: "Daily Updates", href: "/daily-updates" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>
        <p className={styles.sectionTitle}>Workspace</p>
        <div className={styles.links}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <p>ShipWise AI</p>
        <span>Build, triage, and ship with confidence.</span>
      </div>
    </aside>
  );
}
