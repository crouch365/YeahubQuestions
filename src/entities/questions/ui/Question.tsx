import { RatingAndDifficulty } from "@/shared/questions";
import styles from "./styles.module.css";
import { useState, useRef, useEffect } from "react";
import type { IQuestion } from "../model/questionsType";
import { QuestionMoreDetails } from "@/features";

interface QuestionProp {
  question: IQuestion;
}

const Question = ({ question }: QuestionProp) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const openAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <li>
      <div className={styles.question_element}>
        <div className={styles.question_blockTitle} onClick={openAccordion}>
          <h3 className={styles.question_title}>{question.title}</h3>
          <img
            src={isOpen ? "/img/question/up.png" : "/img/question/down.png"}
            alt="button for accordion"
          />
        </div>

        <div
          ref={contentRef}
          className={`${styles.question_content} ${isOpen ? styles.open : ""}`}
          style={{ maxHeight: height }}
        >
          <div className={styles.question_inner}>
            <div className={styles.question_ratingBlock}>
              <div className={styles.question_rating}>
                <RatingAndDifficulty title="Рейтинг" number={question.rate} />
                <RatingAndDifficulty
                  title="Сложность"
                  number={question.complexity}
                />
              </div>
              <QuestionMoreDetails id={question.id} />
            </div>
            {question.imageSrc && (
              <div>
                <img src={question.imageSrc} alt={question.title} />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Question;
