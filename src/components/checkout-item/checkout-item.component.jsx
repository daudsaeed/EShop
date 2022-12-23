import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkoutItem">
      <div className="checkoutItem__product">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkoutItem__description">
        <p>{name}</p>
      </div>
      <div className="checkoutItem__quantity">
        <button className="checkoutItem__quantity-btn">{"<"}</button>
        <p>{quantity}</p>
        <button className="checkoutItem__quantity-btn">{">"}</button>
      </div>
      <div className="checkoutItem__price">
        <p>{price}</p>
      </div>
      <div className="checkoutItem__remove">
        <p>X</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
