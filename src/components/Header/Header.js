import React from "react";
import styles from "./Header.module.css"
import SearchBar from "../UI/SearchBar/SearchBar.js";

const Header = () => {
  return (
    <header className={`${styles.siteHeader} container`}>
      <SearchBar />
    </header>
  )

}

export default Header;