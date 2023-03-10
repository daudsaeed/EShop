import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { CartContext } from "../../context/cart.context";
import { addItemToCart } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

import "./product.style.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState(1);
  const cartItemsPresent = useSelector(selectCartItems);

  // const { addItemToCart } = useContext(CartContext);

  // Helper Methods
  const setCartItemsHandler = (sign) => {
    switch (sign) {
      case "+":
        setCartItems(cartItems + 1);
        break;
      case "-":
        setCartItems(cartItems > 1 ? cartItems - 1 : cartItems);
        break;
      default:
        console.log("Cart Item Problem");
    }
  };

  // Add to cart handler
  const addToCartHandler = () => {
    const cartItem = Object.assign(product, { quantity: cartItems });
    dispatch(addItemToCart(cartItem, undefined, cartItemsPresent));
  };

  return (
    <div className="product-card">
      <div className="product-card__imageContainer">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card__imageContainer-image"
        />

        <div className="product-card__imageContainer-detail">
          <button
            onClick={() => {
              setCartItemsHandler("+");
            }}
          >
            +
          </button>
          <p>{cartItems}</p>
          <button
            onClick={() => {
              setCartItemsHandler("-");
            }}
          >
            -
          </button>
          <button
            className="product-card__imageContainer-btn"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-card__detail">
        <h5 className="product-card__detail-title">{product.name}</h5>
        <p className="product-card__detail-price">Price: {product.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
