import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../context/cart.context";

import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="container" id="container-checkout">
      <div className="checkout">
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

        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
