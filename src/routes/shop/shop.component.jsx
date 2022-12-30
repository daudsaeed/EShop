import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { fetchCategoriesStartAsync } from "../../store/categories/categories-action";

import "./shop.style.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
