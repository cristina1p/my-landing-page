import { forwardRef } from "react";
import styles from "./HamburgerMenu.module.css";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export const HamburgerMenu = forwardRef<HTMLButtonElement, Props>(
  ({ isOpen, toggle }, ref) => {
    return (
      <button
        className={`${styles.hamburgerButton} ${isOpen ? styles.active : ""}`}
        onClick={toggle}
        aria-label="Toggle menu"
        ref={ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_356_20948)">
            <path
              d="M4 6H20"
              stroke="#C026D3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#C026D3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#C026D3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_356_20948">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  },
);
