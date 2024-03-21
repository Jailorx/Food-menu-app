import styles from "./Card.module.css";
import ratingIcon from "../../assets/rating.svg";
import { useState, useEffect } from "react";
import Modal from "../Card/Modal/Modal";

const Card = ({ meal }) => {
  const [mealData, setMealData] = useState(meal); //used for store meal object
  const [rating, setRating] = useState(5.0); //initial review rating for all meals
  const [modalVisible, setModalVisible] = useState(false); //stores modal state

  //Event handlers for opening modal
  const handleCardClick = () => {
    setModalVisible(true);
  };

  //Event handlers for closing modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    //used for generating random ratings
    function generateRandomRating() {
      const random = Math.random();
      const rating = random * (5.0 - 3.0) + 3.0;
      const randomRating = Math.round(rating * 10) / 10;

      return randomRating;
    }
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
