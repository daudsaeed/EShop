import { createContext, useState } from "react";

import SHOP_DATA from "../shop-data.json";

// Initial values

export const ProductContext = createContext({
  products: [],
  setProducts: () => null,
});

// Provider wrap around the child and the thing that is shared
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
