import { CART_ACTION_TYPE } from "./cart-type";
import createAction from "../../utils/reducer/reducer.util";

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

// ################################ Action Methods #########################
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (item, checkout = undefined, cartItems) => {
  const newCartItems = addToCart(item, cartItems, checkout);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const decrementItemFromCart = (item, cartItems) => {
  const newCartItems = decrementFromCart(item, cartItems);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (item, cartItems) => {
  const newCartItems = removeFromCart(item, cartItems);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};
