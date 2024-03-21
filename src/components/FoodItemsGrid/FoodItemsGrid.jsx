import { useState, useEffect } from "react";
import Card from "../Card/Card";

import styles from "./FoodItemsGrid.module.css";
import { useData } from "../../context/FoodList.context";

const FoodItemsGrid = () => {
  //using data from context
  const { itemList, setItemList } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  //implementing pagination logic
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = itemList.slice(firstItem, lastItem);

  //Event handlers for next Page
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  //Event handlers for previous Page
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  //fetching default list of meals whent the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
      );
      const data = await response.json();
      setItemList(data.meals);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentItems.length > 0 &&
            currentItems.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
        </div>
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.btns}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          className={styles.btns}
          onClick={nextPage}
          disabled={Math.ceil(itemList.length / 12) <= currentPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FoodItemsGrid;
