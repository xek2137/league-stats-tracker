import React, {useEffect, useRef} from "react";
import styles from "./SearchBar.module.css";


const SearchBar = (props) => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="d-flex">
      <form onSubmit={props.submit}>
        <input
          ref={inputRef}
          value={props.value}
          onKeyDown={e => e.key === 'Enter' && props.change}
          onChange={props.change}
          className={styles.input}
          placeholder="Search a Summoner.." />
        <button
          onClick={props.change}
          className="ml-1 btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )

}

export default SearchBar;