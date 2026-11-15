//display all products
//go through each product and find its information
//check if product information is available
//if it's available, send the product details and quantity function to ItemCard
import type { ItemsContainerProps } from "./ClothingApp";
import ItemCard from "./ItemCard";

export default function ItemsContainer({
  data,
  productInfo,
  handleChangeQuantity,
  handleAddToCheckout,
}: ItemsContainerProps) {
  return (
    <div className="ItemsContainer">
      {data.map((product) => {
        const info = productInfo.find(
          (information) => information.id === product.id,
        );
        if (!info) return null;
        return (
          <ItemCard
            key={product.id}
            {...product}
            productInfo={info}
            handleChangeQuantity={(delta: number) =>
              handleChangeQuantity(product.id, delta)
            }
            handleAddToCheckout={handleAddToCheckout}
          />
        );
      })}
    </div>
  );
}
