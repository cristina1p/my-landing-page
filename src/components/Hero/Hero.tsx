import styles from "./Hero.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";

import { Button } from "../Button/Button";
import heroDesktop from "../../assets/hero-desktop.webp";
import heroTablet from "../../assets/hero-tablet.webp";
import heroMobile from "../../assets/hero-mobile.webp";

export function Hero() {
  return (
    <section id="hero" className={`${styles.content} ${layout.sectionContent}`}>
      <div className={`${styles.textGroup} ${layout.textGroup}`}>
        <h1
          className={`${typo.gradientText} ${typo.titleHero} ${layout.title}`}
        >
          It's time to take a break
        </h1>
        <p className={typo.textMain}>
          Build your meditation skills with an app that gives you all you need!
        </p>
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className={styles.input}
        />
        <Button
          className={`${typo.buttonLarge} ${styles.button}`}
          text="Start Now"
        />
      </div>

      <div className={styles.imgContainer}>
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />

          <source media="(min-width: 768px)" srcSet={heroTablet} />

          <img
            src={heroMobile}
            alt="Project Hero"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}
