import styles from "./Header.module.scss";

import logoSvg from "../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="AfroToDo" />
    </header>
  );
};

export default Header;
