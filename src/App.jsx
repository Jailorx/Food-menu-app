import "./App.css";
import FilterAndSorting from "./components/FilterAndSorting/FilterAndSorting";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import FoodItemsGrid from "./components/FoodItemsGrid/FoodItemsGrid";

function App() {
  return (
    <div>
      <Header />
      <FilterAndSorting />
      <FoodItemsGrid />
      <Footer />
    </div>
  );
}

export default App;
