import styles from "./styles.module.css";

const FormFilter = () => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formBlock}>
        <div className={styles.inputTextBlock}>
          <input type="text" placeholder="Введите запрос . . . " />
        </div>
        <div className={styles.inputCheckBlock}>
          <p>Категории вопросов</p>

          <button>Посмотреть все</button>
        </div>
        <div className={styles.inputCheckBlock}>
          <p>Навыки</p>
          <button>Посмотреть все</button>
        </div>
        <div>
          <p>Уровень сложности</p>
        </div>
        <div>
          <label>Рейтинг вопросов</label>
        </div>
      </form>
    </div>
  );
};

export default FormFilter;
