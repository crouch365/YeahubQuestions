import { useGetQuestionsQuery } from "@/entities/questions/api/questionApi";

import styles from "./styles.module.css";
import { Question } from "@/entities/questions";

const QuestionList = () => {
  const { data, error, isLoading } = useGetQuestionsQuery();

  console.log(data);

  return (
    <div className={styles.question__block}>
      <ul className={styles.question__list}>
        {data?.data.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
