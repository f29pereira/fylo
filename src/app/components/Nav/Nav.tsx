import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

/**
 * Renders the page navigation
 */
export default function Nav() {
  return (
    <nav className={styles.navCont} aria-label="Main navigation">
      <Image
        className={styles.navLogo}
        src="/images/logo.svg"
        alt="Fylo Logo"
        width={176}
        height={52}
      />
      <ul className={`flex-center ${styles.navItemsCont}`}>
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">Team</Link>
        </li>
        <li>
          <Link href="#">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
