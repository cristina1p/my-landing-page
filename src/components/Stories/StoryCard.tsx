import styles from "./StoryCard.module.css";
import { CardStories } from "./data";
import { PromotedLabel } from "./PromotedLabel";

interface CardProps {
  card: CardStories;
}

export function StoryCard({ card }: CardProps) {
  return (
    <div className={styles.storyCard}>
      {card.isPromoted && <PromotedLabel />}
      <img src={card.imageUrl} className={styles.imgCard} />
      <div className={styles.contentCard}>
        <img src={card.authorAvatar} className={styles.avatarCard} />
        <div className={styles.infoCard}>
          <h5 className={styles.title}>{card.tittle}</h5>
          <div className={styles.authorGroup}>
            by
            <span className={styles.authorName}>{card.authorName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
