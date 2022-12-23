import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";
import { Link } from "react-router-dom";

// Prooblems
// (1): Add items to the cart => use the context here
// (2): These items will be displayed in the cart dropdown
// (3): Cart lenght in the cart SVG

// So we are dealing with there Components (Cart-icon, Cart-Dropdown, Prodiuct-card)

// let make the dropdown :)

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__cartItems">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>

      <Link to="/checkout">
        <Button> Go to checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
