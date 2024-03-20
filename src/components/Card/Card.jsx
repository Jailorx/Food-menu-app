import styles from "./Card.module.css";
import ratingIcon from "../../assets/rating.svg";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <img
          src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
          alt="thumbnail"
        />
      </div>
      <div className={styles.name}>
        <p>Chizi</p>
      </div>
      <div className={styles.rating}>
        <img src={ratingIcon} alt="rating_icon" />
        <p>4.3</p>
      </div>
    </div>
  );
};

export default Card;
