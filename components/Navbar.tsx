import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>
        <div className={styles.logo} />
        <div>
          <p>ShipWise AI</p>
          <span>Engineering workflow for modern teams</span>
        </div>
      </div>
      <nav className={styles.actions}>
        <Link href="/login">Login</Link>
        <Link className={styles.signup} href="/signup">
          Sign up
        </Link>
      </nav>
    </header>
  );
}
