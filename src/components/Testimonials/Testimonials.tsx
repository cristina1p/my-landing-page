import { testimonialData } from "./data";
import { TestimonialCard } from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import typo from "../../styles/typography.module.css";
import module from "../../styles/layout.module.css";
import shapeLeft from "../../assets/testimonials_images/deco/shapeLeft.png";
import shapeRight from "../../assets/testimonials_images/deco/shapeRight.png";

export function Testimonials() {
  const firstEntry = testimonialData[0];
  return (
    <section
      className={`${styles.testimonialContainer} ${module.sectionContent}`}
    >
      <img src={shapeRight} className={styles.decorRight} />
      <img src={shapeLeft} className={styles.decorLeft} />

      <h2 className={`${module.title} ${typo.titleSection}`}>
        What other users say
      </h2>
      <TestimonialCard testimonial={firstEntry} />
    </section>
  );
}
