import searchIcon from "../../../assets/search-icon.svg";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      {/* searchBar implementation */}
      <input
        className={styles.input}
        type="search"
        placeholder="Search for restuarant or food"
      />
      {/* searchbar icon */}
      <img src={searchIcon} alt="search_icon" />
    </div>
  );
};

export default SearchBar;
