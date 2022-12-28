import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { setCategories } from "../../store/categories/categories-action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";

import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryArray = await getCategoriesAndDocuments("categories");
      // setCategoriesMap(newCategoriesMap);
      console.log(categoryArray);
      dispatch(setCategories(categoryArray));
    };

    getCategoriesMap();
  }, []); //Know this dispatch never changes
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
