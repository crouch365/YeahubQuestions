import { QuestionList } from "@/widgets/questions";
import { FormFilter } from "@/widgets/formFilter";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <QuestionList />
      </div>

      <div className={styles.sidebar}>
        <FormFilter />
      </div>
    </div>
  );
};

export default MainPage;
