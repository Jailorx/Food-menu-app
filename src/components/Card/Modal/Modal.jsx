import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useEffect, useState } from "react";
import YoutubeIcon from "../../../assets/youtube-icon.svg";
import BlogIcon from "../../../assets/blog-icon.svg";

const Modal = ({ id, onClose }) => {
  const [meal, setMeal] = useState({});
  const [baseUrl, setBaseUrl] = useState(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  );

  const fetchMealData = async () => {
    const response = await fetch(`${baseUrl}${id}`);
    const data = await response.json();
    console.log(data.meals[0]);
    setMeal(data.meals[0]);
  };

  useEffect(() => {
    fetchMealData(id);
  }, []);
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2>{meal.strMeal}</h2>
          <hr />
          <p>
            {meal.strArea} &#x2022; {meal.strCategory}
          </p>
          {meal.strTags && (
            <p>
              <span id={styles.tag}>Tags: </span>
              {meal.strTags}
            </p>
          )}
          {(meal.strYoutube || meal.strSource) && (
            <p>Follow below links for detailed instructions:</p>
          )}
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank">
              <img src={YoutubeIcon} alt="youtube_icon" />
            </a>
          )}
          {meal.strSource && (
            <a href={meal.strSource} target="_blank">
              <img src={BlogIcon} alt="article_icon" />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
