import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import type from "../../styles/typography.module.css";
import { HamburgerMenu } from "./HamburgerMenu";
import { useState } from "react";

export function Navbar() {
  // Define state, track visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <div className={`${styles.logo} ${type.logo} ${styles.rightNav}`}>
        break<span className={styles.accent}>io</span>
      </div>
      {/* Pass state and toggle function */}
      <div className={styles.leftNav}>
        <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />

        {/* Apply conditional class for mobile visibility */}
        <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
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
          <Button className={styles.navButton} text="Start Now" />
        </div>
      </div>
    </nav>
  );
}
