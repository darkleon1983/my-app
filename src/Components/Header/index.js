import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={require('../../logo192.png')} />
    </header>
  );
}

export default Header;