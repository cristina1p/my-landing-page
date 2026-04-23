import { ArrowIcon } from "../Icons/Arrow";
import { FAQItemProps } from "../types/types";
import styles from "./Accordion.module.css";

export interface AccordionItemProps {
  isOpen: boolean; // controlled by parent FAQ
  onToggle: () => void; // controlled by parent FAQ
  item: FAQItemProps;
}
export function AccordionItem({ isOpen, onToggle, item }: AccordionItemProps) {
  const { title, content } = item;
  return (
    <div className={styles.itemContainer}>
      <button
        className={`${styles.trigger} ${isOpen ? styles.triggerActive : ""}`}
        onClick={onToggle}
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
