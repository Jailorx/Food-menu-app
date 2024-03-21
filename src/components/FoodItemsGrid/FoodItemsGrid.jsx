import { useState, useEffect } from "react";
import Card from "../Card/Card";

import styles from "./FoodItemsGrid.module.css";
import { useData } from "../../context/FoodList.context";

const FoodItemsGrid = () => {
  const { itemList, setItemList } = useData();

  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
    );
    const data = await response.json();
    setItemList(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {itemList.length > 0 &&
          itemList.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default FoodItemsGrid;
