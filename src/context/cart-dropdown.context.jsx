import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  cartShown: false,
  setCartShown: () => null,
});

export const CartDropdownProvider = ({ children }) => {
  const [cartShown, setCartShown] = useState(false);
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
