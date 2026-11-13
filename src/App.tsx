import "./App.css";
import logo from "./assets/images/logo.png";
import ItemCard from "./Components/ItemCard";
import { products } from "./data/data";

function App() {
  return (
    <>
      <img src={logo} alt="Thrift Happens Logo" width="200" className="logo" />
      <ItemCard {...products[0]} />
    </>
  );
}

export default App;
