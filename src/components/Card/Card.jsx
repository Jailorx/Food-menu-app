import styles from "./Card.module.css";
import ratingIcon from "../../assets/rating.svg";
import { useState, useEffect } from "react";
import Modal from "../Card/Modal/Modal";

const Card = ({ meal }) => {
  const [mealData, setMealData] = useState(meal);
  const [rating, setRating] = useState(5.0);
  const [modalVisible, setModalVisible] = useState(false);

  function generateRandomRating() {
    const random = Math.random();
    const rating = random * (5.0 - 3.0) + 3.0;
    // console.log(rating);
    const randomRating = Math.round(rating * 10) / 10;

    return randomRating;
  }

  const handleCardClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setRating(generateRandomRating());
  }, []);

  return (
    <>
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.thumbnail}>
          <img src={mealData.strMealThumb} alt="thumbnail" />
        </div>
        <div className={styles.name}>
          <p>{mealData.strMeal}</p>
        </div>
        <div className={styles.rating}>
          <img src={ratingIcon} alt="rating_icon" />
          <p>{rating}</p>
        </div>
      </div>
      {modalVisible && (
        <Modal id={mealData.idMeal} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Card;
