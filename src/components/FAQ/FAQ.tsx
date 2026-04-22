import { AccordionItem } from "../Accordion/Accordion";
import { ArrowIcon } from "../Icons/Arrow";
import styles from "./FAQ.module.css";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  Icon: React.ComponentType;
}
// todo2: const questions
const questionsData: AccordionItemProps[] = [
  {
    id: 1,
    title:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
    content:
      "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis",
    Icon: ArrowIcon,
  },
  {
    id: 2,
    title:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
    content:
      "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor",
    Icon: ArrowIcon,
  },
  {
    id: 3,
    title:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
    content:
      "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem",
    Icon: ArrowIcon,
  },
  {
    id: 4,
    title:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
    content:
      "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus",
    Icon: ArrowIcon,
  },
  {
    id: 5,
    title: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
    content: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum",
    Icon: ArrowIcon,
  },
];

export function FAQ() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.textGroup}>
        <h2 className={styles.title}>Frequently asked questions</h2>
        <p>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className={styles.faqContainer}>
        {questionsData.map((question) => {
          return (
            <AccordionItem
              key={question.id}
              id={question.id}
              title={question.title}
              content={question.content}
              Icon={question.Icon}
            />
          );
        })}
      </div>
    </section>
  );
}
