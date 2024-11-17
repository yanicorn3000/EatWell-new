import React, { useState } from "react";
import styles from "./Search.module.scss";
import ProductList from "./ProductList";

const Search = ({ setSearchTerm }) => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    setSearchTerm(query);
  };

  return (
    <div className={styles.search}>
      <h2 className={styles.title}>Na co masz dziś ochotę?</h2>
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Wpisz nazwę produktu..."
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          Wyszukaj
        </button>
      </div>
    </div>
  );
};

export default Search;
