import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
  return (
    <div className={styles.container}>
      {/* Logo component */}
      <Logo />
      {/* SearchBar component */}
      <SearchBar />
    </div>
  );
};

export default Header;
