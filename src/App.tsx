//import the product data and pass it to the ClothingApp component
import "./App.css";
import ClothingApp from "./Components/ClothingApp";
import { products } from "./data/data";

function App() {
  return (
    <>
      <ClothingApp data={products} />
    </>
  );
}

export default App;
