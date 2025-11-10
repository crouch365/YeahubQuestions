import { useGetQuestionsQuery } from "@/entities/questions/api/questionApi";

import styles from "./styles.module.css";
import { Question } from "@/entities/questions";
import { Pagination } from "@/features";
import { useAppSelector } from "@/app/appStore";
import { filtersSelectors } from "@/features/filters/model/filterSelector";

const QuestionList = () => {
  const params = useAppSelector(filtersSelectors.selectQuestionFilterParams);
  const limit = useAppSelector(filtersSelectors.selectFilterLimit);

  const { data: questions } = useGetQuestionsQuery(params);

  return (
    <div className={styles.question__block}>
      <ul className={styles.question__list}>
        {questions?.data.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </ul>
      <Pagination total={questions?.total ?? 0} limit={limit} />{" "}
    </div>
  );
};

export default QuestionList;
