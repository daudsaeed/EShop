import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart.style.scss";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-icon">
      <ShoppingIcon className="cart-icon__svg" />
      <p className="cart-icon__count">{cartItems.length}</p>
    </div>
  );
};

export default CartIcon;
