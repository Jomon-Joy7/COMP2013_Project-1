import { useState } from "react";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";

export interface ProductInfo {
  id: number;
  quantity: number;
  itemQuantity: number;
}

export interface ItemsContainerProps {
  data: ClothingProduct[];
  productInfo: ProductInfo[];
  handleChangeQuantity: (id: number, delta: number) => void;
}
export default function ClothingApp({ data }: { data: ClothingProduct[] }) {
  //states
  //store the available stock and select quantity for each product
  const [productInfo, setProductInfo] = useState<ProductInfo[]>(() =>
    data.map((product) => ({
      id: product.id,
      quantity: product.quantity,
      itemQuantity: product.itemQuantity,
    })),
  );

  //Handlers
  //handle the plus and minus buttons
  //use the product id to identify which product need to update
  //use delta to increase or decrease the selected quantity
  //stopping the selected quantity from going below zero
  //stopping the selected quantity from eceeding available stock
  function handleChangeQuantity(id: number, delta: number) {
    setProductInfo((prevData) => {
      return prevData.map((info) =>
        info.id === id
          ? {
              ...info,
              itemQuantity: Math.max(
                0,
                Math.min(info.quantity, info.itemQuantity + delta),
              ),
            }
          : info,
      );
    });
  }

  return (
    <div>
      <ItemsContainer
        data={data}
        productInfo={productInfo}
        handleChangeQuantity={handleChangeQuantity}
      />
    </div>
  );
}
