import styles from './Header.module.scss';

import logoSvg from '../logo.svg';

export function Header() {
  return (
  <header className={styles.header}>
    <img src={logoSvg} alt="AfroToDo" />
  </header>
  );
}