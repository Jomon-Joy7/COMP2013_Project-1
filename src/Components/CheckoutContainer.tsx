import CheckoutCard from "./CheckoutCard";
import type { CartItem } from "./ClothingApp";

//define props for checkout container
interface CheckoutContainerProps {
  cartData: CartItem[];
  handleRemoveItemFromCart: (id: string) => void;
  handleEmptyCheckout: () => void;
}

//this function will display checkout items and calculate the total price
export default function CheckoutContainer({
  cartData,
  handleRemoveItemFromCart,
  handleEmptyCheckout,
}: CheckoutContainerProps) {
  return (
    <div>
      <h2>Cart</h2>

      {cartData.map((item) => (
        <CheckoutCard
          key={item.id}
          {...item}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ))}

      <button onClick={() => handleEmptyCheckout()}>Empty Checkout</button>
      <h2>
        {cartData.length > 0
          ? `Total: ${cartData.reduce((acc, item) => acc + item.total, 0).toFixed(2)}$`
          : `Cart Is Empty`}
      </h2>
    </div>
  );
}
