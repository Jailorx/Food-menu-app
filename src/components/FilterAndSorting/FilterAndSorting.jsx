import styles from "./FilterAndSorting.module.css";
import filterIcon from "../../assets/filter-icon.svg";
import sortByIcon from "../../assets/sortBy.svg";
import Button from "../Button/Button";
import { useData } from "../../context/FoodList.context";
import { useState, useEffect } from "react";

const FilterAndSorting = () => {
  // Accessing data from context
  const { itemList, setItemList } = useData();
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Event handler for selecting area
  const handleSelectedArea = (event) => {
    setSelectedArea(event.target.value);
  };

  // Event handler for toggling dropdown
  const handleFiltering = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Event handler for sorting alphabetically
  const handleSortingAlphabetically = () => {
    const sortedList = [...itemList].sort((a, b) => {
      // Convert both names to lowercase for case-insensitive comparison
      const nameA = a.strMeal.toLowerCase();
      const nameB = b.strMeal.toLowerCase();

      // Compare the names
      if (nameA < nameB) {
        return -1; // Name A comes before Name B
      }
      if (nameA > nameB) {
        return 1; // Name A comes after Name B
      }
      return 0; // Names are equal
    });
    // console.log(sortedList);
    setItemList(sortedList);
  };

  //applying filtering
  const applyFiltering = () => {
    setIsDropdownOpen((prev) => !prev);
    const fetchData = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`
      );
      const data = await response.json();
      setItemList(data.meals);
    };

    fetchData();
  };

  //fetching list of all available areas
  useEffect(() => {
    const fetchAreas = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      const data = await response.json();
      // console.log(data.meals);
      setAreas(data.meals);
    };

    fetchAreas();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isDropdownOpen ? (
          <div className={styles.dropdown}>
            <select
              className={styles.list}
              onChange={handleSelectedArea}
              value={selectedArea}
            >
              <option value="">Select Area</option>
              {areas.map((area) => (
                <option key={area.strArea} value={area.strArea}>
                  {area.strArea}
                </option>
              ))}
            </select>
            <button className={styles.apply} onClick={applyFiltering}>
              Apply
            </button>
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
