import { useGetQuestionsQuery } from "@/entities/questions/api/questionApi";
import styles from "./styles.module.css";
import { Question } from "@/entities/questions";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { filtersSelectors } from "@/features/filters-questions/model/filterSelector";
import Pagination from "@/shared/pagination/ui/Pagination";
import { filterAction } from "@/features/filters-questions";

const QuestionList = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector(filtersSelectors.selectQuestionFilterParams);
  const limit = useAppSelector(filtersSelectors.selectFilterLimit);
  const currentPage = useAppSelector(filtersSelectors.selectFilterPage);
  const { data: questions } = useGetQuestionsQuery(params);

  return (
    <div className={styles.question__block}>
      <ul className={styles.question__list}>
        {questions?.data.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </ul>

      <Pagination
        total={questions?.total ?? 0}
        limit={limit}
        currentPage={currentPage}
        onChangePage={(page) => dispatch(filterAction.setPage(page))}
      />
    </div>
  );
};

export default QuestionList;
