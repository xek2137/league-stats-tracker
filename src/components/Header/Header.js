import React from "react";
import styles from "./Header.module.css"
import SearchBar from "../UI/SearchBar/SearchBar.js";

const Header = () => {
  console.log(styles);
  return (
    <header className={styles.siteHeader}>
      <SearchBar />
    </header>
  )

}

export default Header;