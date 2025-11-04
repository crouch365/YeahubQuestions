//вероятно нужно вынести картинку как ui

import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.block}>
      <img className={styles.imgNotFound} src="/img/pngegg.png" alt="" />

      <h2>Страница не найдена . . . </h2>
    </div>
  );
};

export default NotFound;
