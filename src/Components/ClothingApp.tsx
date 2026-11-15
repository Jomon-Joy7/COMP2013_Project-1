import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";
import NavBar from "./NavBar";

//Interfaces
interface ClothingData {
  //Catalog entries used to initialize state and supply card labels and options.
  data: ClothingProduct[];
}

//this interface store the product stock and selected quantity
export interface ProductInfo {
  id: number;
  quantity: number;
  itemQuantity: number;
}

//it define the data and functions thar passed to ItemContainer
export interface ItemsContainerProps {
  data: ClothingProduct[];
  productInfo: ProductInfo[];
  handleChangeQuantity: (id: number, delta: number) => void;
  handleAddToCheckout: (cartItem: CartItem) => void;
}

//it store the information of an item added to the cart
export interface CartItem {
  id: string;
  product: ClothingProduct;
  price: number;
  quantity: number;
  total: number;
}

//ClothingApp function
function ClothingApp({ data }: ClothingData) {
  //states
  //store the available stock and select quantity for each product
  const [productInfo, setProductInfo] = useState<ProductInfo[]>(() =>
    data.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      itemQuantity: product.itemQuantity,
    })),
  );

  const [checkoutItems, setCheckoutItems] = useState<CartItem[]>([]);

  //Handlers

  //handler function is to handle the plus and minus buttons
  //use the product id to find which product needs to be updated
  //use delta to increase or decrease the selected quantity
  //stop the selected quantity from going below zero
  //stop the selected quantity from exceeding the available stock
  function handleChangeQuantity(id: number, delta: number) {
    setProductInfo((prevData) =>
      prevData.map((info) =>
        info.id === id
          ? {
              ...info,
              itemQuantity: Math.max(
                0,
                Math.min(info.quantity, info.itemQuantity + delta),
              ),
            }
          : info,
      ),
    );
  }

  //handler is adding items to the cart and recieve selected product details,price and quantity
  //check if the same product already exist in the checkout using product id
  //if the product exist, increase its quantity and update the total price
  //if the product doesn't exist, add it as a new item to the checkout array
  //find the matching product and subtract the selected quantity from the availabe stock
  //rest the selected quantity to zero after adding the item to the checkout
  function handleAddToCheckout(cartItem: CartItem) {
    setCheckoutItems((prevCheckout) => {
      if (
        prevCheckout.find((item) => item.product.id === cartItem.product.id)
      ) {
        return prevCheckout.map((item) =>
          item.product.id === cartItem.product.id
            ? {
                ...item,
                quantity: item.quantity + cartItem.quantity,
                total: item.total + cartItem.total,
              }
            : item,
        );
      }
      return [...prevCheckout, cartItem];
    });

    setProductInfo((prevData) =>
      prevData.map((info) =>
        info.id === cartItem.product.id
          ? {
              ...info,
              quantity: info.quantity - cartItem.quantity,
              itemQuantity: 0,
            }
          : info,
      ),
    );
  }

  //handler function is to remove an item from the cart when the user clicks the "Remove" button
  //find the item in the checkout array using its id
  //remove the selected item from the checkout array using filter
  //restore the removed quantity to the available stock
  function handleRemoveItemFromCart(id: string) {
    const item = checkoutItems.find((item) => item.id === id);

    setCheckoutItems((prevCheckout) =>
      prevCheckout.filter((item) => item.id !== id),
    );

    if (item) {
      setProductInfo((prevData) =>
        prevData.map((info) =>
          info.id === item.product.id
            ? { ...info, quantity: info.quantity + item.quantity }
            : info,
        ),
      );
    }
  }

  //handler function is to empty the checkout when the user clicks the "Empty Checkout" button
  //find the matching items in the checkout array using the product id
  //restore all removed quantities to the available stock
  //clear the checkout array
  function handleEmptyCheckout() {
    setProductInfo((prevData) =>
      prevData.map((info) => {
        const item = checkoutItems.find((item) => item.product.id === info.id);
        return item
          ? { ...info, quantity: info.quantity + item.quantity }
          : info;
      }),
    );
    setCheckoutItems([]);
  }

  return (
    <>
      <NavBar />

      <div className="StoreLayout">
        <ItemsContainer
          data={data}
          productInfo={productInfo}
          handleChangeQuantity={handleChangeQuantity}
          handleAddToCheckout={handleAddToCheckout}
        />

        <CheckoutContainer
          cartData={checkoutItems}
          handleEmptyCheckout={handleEmptyCheckout}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      </div>
    </>
  );
}
export default ClothingApp;
