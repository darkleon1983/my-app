import React from "react";
import styles from './Navbar.module.css';

import { Link } from 'react-router-dom';
import Profile from "../Profile";
import Dialogs from './../Dialogs/index';

const Nav = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <Link to='../Profile'>Profile</Link>
      </div>
      <div className={styles.item}>
        <Link to='../Dialogs'>Dialogs</Link>
      </div>
      <div className={styles.item}>
        <Link to='../News'>News</Link>
      </div>
      <div className={styles.item}>
        <Link to='../Music'>Music</Link>
      </div>
      <div className={styles.item}>
        <Link to='../Settings'>Settings</Link>
      </div>
    </nav>
  );
}

export default Nav;