import { useGetQuestionByIdQuery } from "@/entities/questions/api/questionApi";
import { useParams } from "react-router-dom";

const QuestionPage = () => {
  const { id } = useParams();
  const { data } = useGetQuestionByIdQuery(Number(id));

  console.log(data);

  return <div>{id}</div>;
};

export default QuestionPage;
