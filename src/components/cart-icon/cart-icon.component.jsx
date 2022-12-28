import { useContext } from "react";
import { useSelector } from "react-redux";

import { selectCartCount } from "../../store/cart/cart-selector";
// import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart.style.scss";

const CartIcon = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItemsCount = useSelector(selectCartCount);
  return (
    <div className="cart-icon">
      <ShoppingIcon className="cart-icon__svg" />
      <p className="cart-icon__count">{cartItemsCount}</p>
    </div>
  );
};

export default CartIcon;
