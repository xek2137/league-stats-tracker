import React, {useState, useEffect, useRef} from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const inputRef = useRef();
  const search = () => {
    console.log('szukaj', term);
  }

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="d-flex">
      <input
        ref={inputRef}
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