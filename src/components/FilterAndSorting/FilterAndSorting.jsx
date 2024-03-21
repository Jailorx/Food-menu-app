import styles from "./FilterAndSorting.module.css";
import filterIcon from "../../assets/filter-icon.svg";
import sortByIcon from "../../assets/sortBy.svg";
import Button from "../Button/Button";
import { useData } from "../../context/FoodList.context";
import { useState, useEffect } from "react";

const FilterAndSorting = () => {
  const { itemList, setItemList } = useData();
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectedArea = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleFiltering = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSortingAlphabetically = () => {
    const sortedList = [...itemList].sort();
    setItemList(sortedList);
  };

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      console.log(data.meals);
      setAreas(data.meals);
    };

    fetchAreas();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isDropdownOpen ? (
          <div className={styles.dropdown}>
            <select onChange={handleSelectedArea} value={selectedArea}>
              <option value="">Select Area</option>
              {areas.map((area) => (
                <option key={area.strArea} value={area.strArea}>
                  {area.strArea}
                </option>
              ))}
            </select>
            <button onClick={handleFiltering}>Apply</button>
          </div>
        ) : (
          <Button label="Filter" icon={filterIcon} onClick={handleFiltering} />
        )}
        <Button
          label="Sort By"
          icon={sortByIcon}
          onClick={handleSortingAlphabetically}
        />
      </div>
    </>
  );
};

export default FilterAndSorting;
