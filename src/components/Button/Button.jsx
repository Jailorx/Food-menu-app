import styles from "./Button.module.css";

const Button = ({ label, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{label}</p>
      <img src={icon} alt={`${label}_icon`} />
    </button>
  );
};

export default Button;
