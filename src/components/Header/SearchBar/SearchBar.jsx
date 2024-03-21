import searchIcon from "../../../assets/search-icon.svg";
import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search for restuarant or food"
      />
      <img src={searchIcon} alt="search_icon" />
    </div>
  );
};

export default SearchBar;
