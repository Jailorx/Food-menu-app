import { useState } from "react";
import Card from "../Card/Card";
import Modal from "../Card/Modal/Modal";

const FoodItemsGrid = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Card onClick={handleCardClick} />
      {modalVisible && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default FoodItemsGrid;
