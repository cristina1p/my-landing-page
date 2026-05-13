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

  // Create refs
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define listener function
    const handleClickOutside = (event: MouseEvent) => {
      // If click happened outside ref, close menu

      const isButtonRef = buttonRef.current?.contains(event.target as Node);
      const isPopoverRef =
        popoverRef.current && popoverRef.current.contains(event.target as Node);

      if (!isButtonRef && !isPopoverRef) {
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
    <nav className={styles.nav}>
      <a onClick={closeMenu} href="#hero">
        <div className={`${styles.logo} ${type.logo} ${styles.rightNav}`}>
          break<span className={styles.accent}>io</span>
        </div>
      </a>
      {/* Pass state and toggle function */}
      <div className={styles.leftNav}>
        <HamburgerMenu
          isOpen={isMenuOpen}
          toggle={toggleMenu}
          ref={buttonRef}
        />

        {/* Apply conditional class for mobile visibility */}
        <div
          className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}
          ref={popoverRef}
        >
          {/* todo__: use an array */}
          {/* todo__: put it in a list (ul > li) */}
          <a onClick={closeMenu} className={type.navItem} href="#stories">
            About
          </a>
          <a onClick={closeMenu} className={type.navItem} href="#features">
            Features
          </a>
          <a onClick={closeMenu} className={type.navItem} href="#testimonials">
            Testimonials
          </a>
          <a onClick={closeMenu} className={type.navItem} href="#stories">
            Stories
          </a>
          <a onClick={closeMenu} className={type.navItem} href="#faq">
            FAQ
          </a>
          <Button className={styles.navButton} text="Start Now" />
        </div>
      </div>
    </nav>
  );
}
