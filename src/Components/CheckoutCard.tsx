import type { CartItem } from "./ClothingApp";

//define props for  checkout card by extending CartItem
interface CheckoutCardProps extends CartItem {
  handleRemoveItemFromCart: (id: string) => void;
}
//this function will display indivdual cart item information
export default function CheckoutCard({
  id,
  product,
  price,
  quantity,
  total,
  handleRemoveItemFromCart,
}: CheckoutCardProps) {
  return (
    <div className="CheckoutCard">
      <p>{product.name}</p>
      <img src={product.image} alt="" height="50px" />
      <p>Price: {price.toFixed(2)}$</p>
      <p>Quantity: {quantity}</p>
      <p>Total: {total.toFixed(2)}$</p>
      <button onClick={() => handleRemoveItemFromCart(id)}>Remove</button>
    </div>
  );
}
