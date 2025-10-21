import { useState } from "react";
import styles from "./styles.module.css";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu}>
        <img src="../../../img/header/menu_arrow_down.png" alt="logo" />
      </button>

      <nav className={`${styles.nav_menu} ${isOpen ? styles.active : ""}`}>
        <ul className={styles.nav_menu__list}>
          <li className={styles.nav_menu__item}>
            <div className={styles.nav_menu__block_logo}>
              <img
                className={styles.nav_menu__logo}
                src="../../../img/header/Logo_navmenu.png"
                alt="logo"
              />
              <button onClick={toggleMenu}>
                <img
                  className={styles.nav_menu__logo}
                  src="../../../img/header/arrow_left.png"
                  alt="logo"
                />
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
