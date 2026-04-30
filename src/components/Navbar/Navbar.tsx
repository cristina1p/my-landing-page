import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import type from "../../styles/typography.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo} ${type.logo}`}>
        break<span className={styles.accent}>io</span>
      </div>

      <div className={styles.links}>
        <a className={type.navItem} href="#explore">
          Explore
        </a>
        <a className={type.navItem} href="#solutions">
          Solutions
        </a>
        <a className={type.navItem} href="#about">
          About
        </a>
        <a className={type.navItem} href="#blog">
          Blog
        </a>
        <a className={type.navItem} href="#explore">
          Log In
        </a>
        <Button text="Start Now" />
      </div>
    </nav>
  );
}
