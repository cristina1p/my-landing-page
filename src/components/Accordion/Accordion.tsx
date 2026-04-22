import { ArrowIcon } from "../Icons/Arrow";
import styles from "./Accordion.module.css";
import { useState } from "react";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  Icon: React.ComponentType;
}

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.itemContainer}>
      <button
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ArrowIcon />
      </button>
      <div
        className={`${styles.contentWrapper} ${isOpen ? styles.contentOpen : ""}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}
