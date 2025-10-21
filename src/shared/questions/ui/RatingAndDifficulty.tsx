import styles from "./styles.module.css";

interface Props {
  title: string;
  number: number;
}

const RatingAndDifficulty = ({ title, number }: Props) => {
  return (
    <div className={styles.tag_name}>
      {title}: <p className={styles.number}>{number}</p>
    </div>
  );
};

export default RatingAndDifficulty;
