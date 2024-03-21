import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Modal from "../Card/Modal/Modal";
import styles from "./FoodItemsGrid.module.css";

const FoodItemsGrid = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
    );
    const data = await response.json();
    setData(data.meals);
  };

  const handleCardClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {data.length > 0 &&
          data.map((meal) => (
            <Card key={meal.id} meal={meal} onClick={handleCardClick} />
          ))}
        {/* <Card onClick={handleCardClick} /> */}
        {modalVisible && <Modal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default FoodItemsGrid;
