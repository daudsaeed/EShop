import { createContext, useReducer } from "react";

export const CartDropdownContext = createContext({
  cartShown: false,
  setCartShown: () => null,
});

const CART = {
  CART_SHOWN: "CART_SHOWN",
};

const categoriesDropdownReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART.CART_SHOWN:
      return { cartShown: payload };
    default:
      return new Error(
        `No Type found for ${type} in categoriesDropdownReducer`
      );
  }
};

const INTIAL_STATE = {
  cartShown: false,
};

export const CartDropdownProvider = ({ children }) => {
  // const [cartShown, setCartShown] = useState(false);
  const [{ cartShown }, dispatch] = useReducer(
    categoriesDropdownReducer,
    INTIAL_STATE
  );

  const setCartShown = (show) => {
    dispatch({ type: CART.CART_SHOWN, payload: show });
  };

  const value = {
    cartShown,
    setCartShown,
  };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
