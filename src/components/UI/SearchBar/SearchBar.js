import React from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  console.log(styles);
  return (
    <div className="d-flex">
      <input
        className={styles.input}
        placeholder="Search" />
      <button className="ml-1 btn btn-primary">
        Search
      </button>
    </div>
  )

}

export default SearchBar;