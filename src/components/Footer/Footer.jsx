import styles from "./Footer.module.css";
import Logo from "../../assets/footer_swiggy_logo.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* Swiggy logo */}
      <img src={Logo} alt="swiggy_logo" />
      {/* copyright */}
      <p>© 2023 Bundl Technologies Pvt. Ltd</p>
    </div>
  );
};

export default Footer;
