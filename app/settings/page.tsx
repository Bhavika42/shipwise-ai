import Sidebar from "@/components/Sidebar";
import styles from "./page.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Settings</p>
            <h1 className={styles.title}>Project preferences and profile</h1>
            <p className={styles.description}>Configure your mock profile, team preferences, and AI verification defaults.</p>
          </div>
        </div>

        <section className={styles.card}>
          <h2>Profile settings</h2>
          <div className={styles.row}>
            <label>Name</label>
            <input type="text" placeholder="Alex Doe" />
          </div>
          <div className={styles.row}>
            <label>Email</label>
            <input type="email" placeholder="alex@shipwise.ai" />
          </div>
          <div className={styles.row}>
            <label>Role</label>
            <input type="text" placeholder="Full Stack Developer Intern" />
          </div>
        </section>

        <section className={styles.card}>
          <h2>Project preferences</h2>
          <div className={styles.row}>
            <span>Default ticket priority</span>
            <select>
              <option>Medium</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
          <div className={styles.row}>
            <span>Default bug severity</span>
            <select>
              <option>Medium</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
        </section>

        <section className={styles.card}>
          <h2>AI verification</h2>
          <div className={styles.row}>
            <span>Require manual review</span>
            <select>
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
          <p className={styles.note}>Responsible AI defaults keep all suggestions visible for human validation before applying them.</p>
        </section>
      </main>
    </div>
  );
}
