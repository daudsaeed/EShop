import { createContext, useState, useEffect } from "react";

// helper Methods
const addToCart = (item, cartItems, checkout) => {
  const existingCartItem = cartItems.find(
    (cartItem) => item.id === cartItem.id
  );

  if (checkout) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );

  return [...cartItems, item];
};

const decrementFromCart = (item, cartItems) => {
  // Problem to solve
  // First see if the item exists
  // if it does then see quantity of that item if it 1 then remove that item
  // otherwise remove that item

  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeFromCart = (item, cartItems) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  decrementItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (item, checkout = undefined) => {
    setCartItems(addToCart(item, cartItems, checkout));
  };

  const decrementItemFromCart = (item) => {
    setCartItems(decrementFromCart(item, cartItems));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeFromCart(item, cartItems));
  };

  const value = {
    cartItems,
    addItemToCart,
    decrementItemFromCart,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
