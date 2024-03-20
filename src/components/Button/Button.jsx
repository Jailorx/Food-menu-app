import styles from "./Button.module.css";

const Button = ({ label, icon, method }) => {
  return (
    <button className={styles.button} onClick={method}>
      <p>{label}</p>
      <img src={icon} alt={`${label}_icon`} />
    </button>
  );
};

export default Button;
