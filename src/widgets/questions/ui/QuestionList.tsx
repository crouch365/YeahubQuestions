import { useGetQuestionsQuery } from "@/entities/questions/api/questionApi";
import styles from "./styles.module.css";
import { Question } from "@/entities/questions";
import { useAppSelector } from "@/app/appStore";
import { filtersSelectors } from "@/features/filters-questions/model/filterSelector";
import Pagination from "@/shared/pagination/ui/Pagination";

const QuestionList = () => {
  const params = useAppSelector(filtersSelectors.selectQuestionFilterParams);
  const limit = useAppSelector(filtersSelectors.selectFilterLimit);
  const currentPages = useAppSelector(filtersSelectors.selectFilterPage);
  const { data: questions } = useGetQuestionsQuery(params);

  return (
    <div className={styles.question__block}>
      <ul className={styles.question__list}>
        {questions?.data.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </ul>
      <Pagination
        currentPages={currentPages}
        total={questions?.total ?? 0}
        limit={limit}
      />
    </div>
  );
};

export default QuestionList;
