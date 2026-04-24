import { StoryCard } from "./StoryCard";
import styles from "./StorySection.module.css";
import { cardStories } from "./data";

export function StorySection() {
  return (
    <section className={styles.storiesConatiner}>
      <div className={styles.textGroup}>
        <h2 className={styles.title}>Stories from our users</h2>
        <p>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>

      <div className={styles.cardGroup}>
        {cardStories.map((card) => {
          return <StoryCard key={card.id} card={card} />;
        })}
      </div>
    </section>
  );
}
