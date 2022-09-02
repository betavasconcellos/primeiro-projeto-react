import styles from './Header.module.scss';

import logoSvg from '../logo.svg';

function Header() {
  return (
  <header className={styles.header}>
    <img src={logoSvg} alt="AfroToDo" />
  </header>
  );
}

export default Header;