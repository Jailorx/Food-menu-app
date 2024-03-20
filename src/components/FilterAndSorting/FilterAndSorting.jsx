import styles from "./FilterAndSorting.module.css";
import filterIcon from "../../assets/filter-icon.svg";
import sortByIcon from "../../assets/sortBy.svg";
import Button from "../Button/Button";

const Filter = () => {
  return (
    <div className={styles.container}>
      <Button label="Filter" icon={filterIcon} />
      <Button label="Sort By" icon={sortByIcon} />
    </div>
  );
};

export default Filter;
