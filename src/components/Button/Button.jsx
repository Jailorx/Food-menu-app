import styles from "./Button.module.css";

const Button = ({ label, icon, onClick }) => {
  return (
    // Resusable button component used in filter and sortby
    <button className={styles.button} onClick={onClick}>
      <p>{label}</p>
      <img src={icon} alt={`${label}_icon`} />
    </button>
  );
};

export default Button;
