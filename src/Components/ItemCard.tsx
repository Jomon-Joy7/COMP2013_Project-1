import type { ClothingProduct } from "../data/data";
import type { CartItem, ProductInfo } from "./ClothingApp";

interface ItemCardProps extends ClothingProduct {
  productInfo: ProductInfo;
  handleChangeQuantity: (delta: number) => void;
  handleAddToCheckout: (cartItem: CartItem) => void;
}

//it will display individual product information
//recieve product details and handler functions throgh props
export default function ItemCard({
  id,
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
  handleAddToCheckout,
}: ItemCardProps) {
  return (
    <div className="ItemCard">
      <h3>{name}</h3>
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
      {productInfo.quantity === 0 && <p> Out of Stock</p>}

      <div>
        <button
          onClick={() => handleChangeQuantity(-1)}
          disabled={productInfo.itemQuantity === 0}
        >
          -
        </button>

        <span> {productInfo.itemQuantity} </span>

        <button
          onClick={() => handleChangeQuantity(1)}
          disabled={productInfo.itemQuantity >= productInfo.quantity}
        >
          +
        </button>
      </div>
      <br />
      <button
        onClick={() =>
          handleAddToCheckout({
            id: crypto.randomUUID(),
            product: {
              id,
              name,
              image,
              fit,
              category,
              color,
              description,
              size,
              price,
              quantity: productInfo.quantity,
              itemQuantity: productInfo.itemQuantity,
            },
            price: price,
            quantity: productInfo.itemQuantity,
            total: price * productInfo.itemQuantity,
          })
        }
        disabled={productInfo.quantity === 0 || productInfo.itemQuantity === 0}
      >
        Add to Checkout
      </button>
    </div>
  );
}
