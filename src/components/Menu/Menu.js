import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className="container">
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;