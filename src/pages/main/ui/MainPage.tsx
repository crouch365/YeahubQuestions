import { QuestionList } from "@/widgets/questions";
import styles from "./styles.module.css";
import { FormFilter } from "@/widgets/formFilter";

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <QuestionList />
      <FormFilter />
    </div>
  );
};

export default MainPage;
