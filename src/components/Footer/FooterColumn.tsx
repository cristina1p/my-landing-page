import styles from "./FooterColumn.module.css";
import typo from "../../styles/typography.module.css";

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className={styles.footerColumn}>
      <h3 className={`${styles.title} ${typo.navItem2}`}>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
