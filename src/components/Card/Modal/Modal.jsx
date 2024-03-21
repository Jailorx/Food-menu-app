import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>Title</h2>
          <p>Modal content goes here...</p>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
