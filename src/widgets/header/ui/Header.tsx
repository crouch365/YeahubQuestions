import { NavMenu } from "@/shared/navigation";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__block}>
        <div className={styles.header__menu}>
          <Link to="/">
            {" "}
            <img
              className={styles.header__logo}
              src="../../../img/header/Logo.png"
              alt="logo"
            />
          </Link>

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
