import { useState, useEffect } from "react";
import Card from "../Card/Card";

import styles from "./FoodItemsGrid.module.css";

const FoodItemsGrid = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
    );
    const data = await response.json();
    setData(data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.length > 0 &&
          data.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default FoodItemsGrid;
