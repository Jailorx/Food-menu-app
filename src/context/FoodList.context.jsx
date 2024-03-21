import React, { createContext, useState, useContext } from "react";

const FoodListContext = createContext();

export const DataProvider = ({ children }) => {
  const [itemList, setItemList] = useState([]);

  return (
    <FoodListContext.Provider value={{ itemList, setItemList }}>
      {children}
    </FoodListContext.Provider>
  );
};

export const useData = () => useContext(FoodListContext);
