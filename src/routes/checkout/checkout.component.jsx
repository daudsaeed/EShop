// import { useContext } from "react";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import { CartContext } from "../../context/cart.context";

import "./checkout.style.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="container" id="container-checkout">
      <div className="checkout">
        {/* Cart Header */}
        <div className="checkout__header">
          <div className="checkout__header-product">
            <p>Product</p>
          </div>
          <div className="checkout__header-description">
            <p>Description</p>
          </div>
          <div className="checkout__header-quantity">Quantity</div>
          <div className="checkout__header-price">
            <p>Price</p>
          </div>
          <div className="checkout__header-remove">
            <p>Remove</p>
          </div>
        </div>

        {/* Cart Items  */}
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}

        {/* Display the cart total */}
        <div className="checkout__footer">
          <p className="checkout__footer-total">Total: {cartTotal}$</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
