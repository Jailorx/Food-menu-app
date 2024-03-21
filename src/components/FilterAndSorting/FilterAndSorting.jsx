import styles from "./FilterAndSorting.module.css";
import filterIcon from "../../assets/filter-icon.svg";
import sortByIcon from "../../assets/sortBy.svg";
import Button from "../Button/Button";
import { useData } from "../../context/FoodList.context";

const FilterAndSorting = () => {
  const { itemList, setItemList } = useData();

  const handleFiltering = () => {
    console.log("filtering clicked");
  };

  const handleSortingAlphabetically = () => {
    const sortedList = [...itemList].sort();
    setItemList(sortedList);
  };
  return (
    <div className={styles.container}>
      <Button label="Filter" icon={filterIcon} onClick={handleFiltering} />
      <Button
        label="Sort By"
        icon={sortByIcon}
        onClick={handleSortingAlphabetically}
      />
    </div>
  );
};

export default FilterAndSorting;
