import styles from "./styles.module.css";
import {
  FilterComplexity,
  FilterRating,
  FilterSkills,
  FilterSpecializations,
  SearchKeywords,
} from "@/features/filters";

const FormFilter = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formBlock}>
        <SearchKeywords />

        <FilterSpecializations />

        <FilterSkills />
        <FilterComplexity />
        <FilterRating />
      </form>
    </div>
  );
};

export default FormFilter;
