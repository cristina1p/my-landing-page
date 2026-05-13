import { Button } from "../Button/Button";
import styles from "./GetBetter.module.css";
import typo from "../../styles/typography.module.css";
import layout from "../../styles/layout.module.css";
import imgDesktop from "../../assets/desktop.png";
import imgMobile from "../../assets/mobile.png";
import imgCard from "../../assets/card.png";

export function GetBetter() {
  return (
    <section className={`${styles.getBetter} ${layout.sectionContent}`}>
      <div className={`${styles.textGroup} ${layout.textGroup}`}>
        <h2 className={`${layout.title} ${typo.titleSection}`}>
          Get better everyday
        </h2>
        <p className={typo.textMain}>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
        <Button text="Start Now" className={styles.button} />
      </div>

      <div className={styles.imagesContainer}>
        <img className={styles.desktop} src={imgDesktop} alt="Dashboard" />

        <img className={styles.mobile} src={imgMobile} alt="Mobile" />

        <img className={styles.card} src={imgCard} alt="Card" />
      </div>
    </section>
  );
}
