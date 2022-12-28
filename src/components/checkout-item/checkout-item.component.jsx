import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart-selector";
import {
  addItemToCart,
  decrementItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart-action";
// import { CartContext } from "../../context/cart.context";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // const { decrementItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);

  const { name, imageUrl, quantity, price } = cartItem;

  // Decrement from the cart item quantity handler
  const decrementCartItemHandler = () => {
    dispatch(decrementItemFromCart(cartItem, cartItems));
  };

  const incrementCartItemHandler = () => {
    dispatch(addItemToCart(cartItem, true, cartItems));
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(cartItem, cartItems));
  };
  return (
    <div className="checkoutItem">
      <div className="checkoutItem__product">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkoutItem__description">
        <p>{name}</p>
      </div>
      <div className="checkoutItem__quantity">
        <button
          className="checkoutItem__quantity-btn"
          onClick={decrementCartItemHandler}
        >
          &#10094;
        </button>
        <p>{quantity}</p>
        <button
          className="checkoutItem__quantity-btn"
          onClick={incrementCartItemHandler}
        >
          &#10095;
        </button>
      </div>
      <div className="checkoutItem__price">
        <p>{price}</p>
      </div>
      <div className="checkoutItem__remove" onClick={removeItemFromCartHandler}>
        <p>&#10005;</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
