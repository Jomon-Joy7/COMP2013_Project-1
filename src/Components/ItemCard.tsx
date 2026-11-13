import type { ClothingProduct } from "../data/data";

export default function ItemCard({
  name,
  image,
  fit,
  category,
  color,
  description,
  size,
  price,
  quantity,
  itemQuantity,
}: ClothingProduct) {
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
        {price}
      </p>
      <p>
        <b>Quantity: </b>
        {quantity}
      </p>
      <button>{" - "}</button>
      <span>{itemQuantity}</span>
      <button>{" + "}</button>
      <br />
      <button>Add to Checkout</button>
    </div>
  );
}
