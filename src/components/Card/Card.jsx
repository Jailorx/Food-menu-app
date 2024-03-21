import styles from "./Card.module.css";
import ratingIcon from "../../assets/rating.svg";
import { useState } from "react";

const Card = ({ meal, onClick }) => {
  const [mealData, setMealData] = useState(meal);

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.thumbnail}>
        <img src={mealData.strMealThumb} alt="thumbnail" />
      </div>
      <div className={styles.name}>
        <p>{mealData.strMeal}</p>
      </div>
      <div className={styles.rating}>
        <img src={ratingIcon} alt="rating_icon" />
        <p>4.3</p>
      </div>
    </div>
  );
};

export default Card;
