import "./App.css";
import FilterAndSorting from "./components/FilterAndSorting/FilterAndSorting";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import FoodItemsGrid from "./components/FoodItemsGrid/FoodItemsGrid";
import { DataProvider } from "./context/FoodList.context";

function App() {
  return (
    <div>
      <Header />
      <DataProvider>
        <FilterAndSorting />
        <FoodItemsGrid />
      </DataProvider>

      <Footer />
    </div>
  );
}

export default App;
