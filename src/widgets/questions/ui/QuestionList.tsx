import { useGetQuestionsQuery } from "@/entities/questions/api/questionApi";

import styles from "./styles.module.css";
import { Question } from "@/entities/questions";
import { Pagination } from "@/features";
import { useAppSelector } from "@/app/appStore";

const QuestionList = () => {
  const limit = 10;
  const currentPage = useAppSelector((state) => state.pagination.currentPage);

  const { data } = useGetQuestionsQuery({ page: currentPage, limit });

  //   const navigateTo = (news: INews) => {
  //   dispatch(setCurrentNews(news));
  //   navigate(`/news/${news.id}`);
  // };

  console.log(data);

  return (
    <div className={styles.question__block}>
      <ul className={styles.question__list}>
        {data?.data.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </ul>
      <Pagination total={data?.total ?? 0} limit={limit} />{" "}
    </div>
  );
};

export default QuestionList;
