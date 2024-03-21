import styles from "./Button.module.css";

// Resusable button component used in filter and sortby
const Button = ({ label, icon, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <p>{label}</p>
      <img src={icon} alt={`${label}_icon`} />
    </button>
  );
};

export default Button;
