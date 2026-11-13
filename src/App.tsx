//import the product data and pass it to the ClothingApp component
import "./App.css";
import logo from "./assets/images/logo.png";
import ClothingApp from "./Components/ClothingApp";
import { products } from "./data/data";

function App() {
  return (
    <>
      <img src={logo} alt="Thrift Happens Logo" width="200" className="logo" />
      <ClothingApp data={products} />
    </>
  );
}

export default App;
