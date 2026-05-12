import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";
import type from "../../styles/typography.module.css";
import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  // Define state, track visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Create ref
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Define listener function
    const handleClickOutside = (event: MouseEvent) => {
      // If click happened outside ref, close menu
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Only attach listener if menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Remove the listener when menu closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Explicit close dropdown menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={styles.nav}>
      <a href="#hero">
        <div className={`${styles.logo} ${type.logo} ${styles.rightNav}`}>
          break<span className={styles.accent}>io</span>
        </div>
      </a>
      {/* Pass state and toggle function */}
      <div className={styles.leftNav}>
        <HamburgerMenu isOpen={isMenuOpen} toggle={toggleMenu} />

        {/* Apply conditional class for mobile visibility */}
        <div
          className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}
          onClick={closeMenu}
        >
          <a className={type.navItem} href="#about">
            About
          </a>
          <a className={type.navItem} href="#features">
            Features
          </a>
          <a className={type.navItem} href="#testimonials">
            Testimonials
          </a>
          <a className={type.navItem} href="#stories">
            Stories
          </a>
          <a className={type.navItem} href="#faq">
            FAQ
          </a>
          <Button className={styles.navButton} text="Start Now" />
        </div>
      </div>
    </nav>
  );
}
