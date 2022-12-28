import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.util";

// Initial values

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

// Provider wrap around the child and the thing that is shared
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const newCategoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(newCategoriesMap);
    };

    getCategoriesMap();
  }, []);
  const value = {
    categoriesMap,
    setCategoriesMap,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
