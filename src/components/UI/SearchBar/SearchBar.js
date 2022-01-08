import React, {useState} from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const search = () => {
    console.log('szukaj', term);
  }

  return (
    <div className="d-flex">
      <input
        value={term}
        onKeyDown={e => e.key === 'Enter' && search()}
        onChange={e => setTerm(e.target.value)}
        className={styles.input}
        placeholder="Search" />
      <button
        onClick={search}
        className="ml-1 btn btn-primary">
        Search
      </button>
    </div>
  )

}

export default SearchBar;