import { NavMenu } from "@/features/navigation";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__block}>
        <div className={styles.header__menu}>
          <img
            className={styles.header__logo}
            src="../../../img/header/Logo.png"
            alt="logo"
          />

          <NavMenu />
        </div>

        <div className={styles.header__profile}>
          <img
            className={styles.header__vector}
            src="../../../img/header/profile_settings.png"
            alt="logo"
          />
          <img
            className={styles.header__logo}
            src="../../../img/header/user.png"
            alt="picture user"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
