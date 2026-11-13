import type { ClothingProduct } from "../data/data";
import type { ProductInfo } from "./ClothingApp";

interface ItemsCardProps extends ClothingProduct {
  productInfo: ProductInfo;
  handleChangeQuantity: (delta: number) => void;
}

export default function ItemCard({
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  productInfo,
  handleChangeQuantity,
}: ItemsCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="" height="100px" />
      <p>
        <span>Fit: </span>
        {fit}
      </p>
      <p>
        <span>Category: </span>
        {category}
      </p>
      <p>
        <span>Color: </span>
        {color}
      </p>
      <p>{description}</p>
      <p>
        <span>Size: </span>
        {size}
      </p>
      <p>
        <b>Price: </b>
        {price.toFixed(2)}$
      </p>
      <p>
        <b>Quantity: </b>
        {productInfo.quantity}
      </p>
      <button onClick={() => handleChangeQuantity(-1)}>{" - "}</button>
      <span>{productInfo.itemQuantity}</span>
      <button onClick={() => handleChangeQuantity(1)}>{" + "}</button>
      <br />
      <button>Add to Checkout</button>
    </div>
  );
}
