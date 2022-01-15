import React from "react";
import styles from "./Header.module.css"
import SearchBar from "../UI/SearchBar/SearchBar.js";

const Header = (props) => {
  return (
    <header className={`${styles.siteHeader} container`}>
      {props.children}
    </header>
  )

}

export default Header;