import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/categories-selector";

// import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product/product.component";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log(category);
  return (
    <div className="container category">
      <div className="category__header">
        <p className="category__header-title">{category}</p>
      </div>

      <div className="category__body">
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default Category;
