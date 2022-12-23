import "./cart-item.style.scss";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__imageContainer">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>

      <div className="cartItem__detail">
        <p className="cartItem__detail-name">{cartItem.name}</p>
        <p className="cartItem__detail-quantity">
          {cartItem.quantity} x {cartItem.price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
