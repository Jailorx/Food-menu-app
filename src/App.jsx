import "./App.css";
import FilterAndSorting from "./components/FilterAndSorting/FilterAndSorting";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import FoodItems from "./components/FoodItems/FoodItems";

function App() {
  return (
    <div>
      <Header />
      <FilterAndSorting />
      <FoodItems />
      <Footer />
    </div>
  );
}

export default App;
