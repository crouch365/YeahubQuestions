import { useGetQuestionByIdQuery } from "@/entities/questions/api/questionApi";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";

const QuestionPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetQuestionByIdQuery(Number(id));

  if (isLoading) return <div>Загружаем данные .......</div>;

  if (isError) return <div>Произошла ошибка, обновите страницу</div>;

  return (
    <div className={styles.questionBlock}>
      <div className={styles.blockTitle}>
        <h2 className={styles.titleQuestion}>{data?.title}</h2>
        <p className={styles.description}>{data?.description}</p>
      </div>

      <div className={styles.blockTitle}>
        <h2 className={styles.title}>Краткий ответ</h2>
        {data && data.shortAnswer ? (
          <div
            className={styles.answerContent}
            dangerouslySetInnerHTML={{ __html: data.shortAnswer }}
          />
        ) : null}
      </div>
      <div className={styles.blockTitle}>
        <h2 className={styles.title}>Полный ответ</h2>
        {data && data.longAnswer ? (
          <div
            className={styles.answerContent}
            dangerouslySetInnerHTML={{ __html: data.longAnswer }}
          />
        ) : null}
      </div>

      <button className={styles.btn} onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
};

export default QuestionPage;
