import { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
interface Prop {
  id: number;
}
const QuestionMoreDetails = ({ id }: Prop) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBlockMore = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.block}>
      <button onClick={toggleBlockMore} className={styles.btn_more}>
        {"..."}
      </button>
      {isOpen && (
        <Link
          to={`questions/public-questions/${id}`}
          className={styles.block_more}
        >
          <p>Подробнее</p>
        </Link>
      )}
    </div>
  );
};

export default QuestionMoreDetails;
