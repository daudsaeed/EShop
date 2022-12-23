import { createContext, useState } from "react";

// helper Methods
const addToCart = (item, cartItems) => {
  const existingCartItem = cartItems.find(
    (cartItem) => item.id === cartItem.id
  );

  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
        : cartItem
    );

  return [...cartItems, item];
};

const removeFromCart = (item, cartItems) =>{

  // Problem to solve 
  // First see if the item exists 
  // if it does then see quantity of that item if it 1 then remove that item
  // otherwise remove that item

  


}

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(addToCart(item, cartItems));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeFromCart(item, cartItems));
  };

  const value = { cartItems, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
