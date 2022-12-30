import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import { CategoriesContext } from "../../context/categories.context";
import { selectCategoriesMap } from "../../store/categories/categories-selector";
import { selectIsLoading } from "../../store/categories/categories-selector";
import ProductCard from "../product/product.component";
import Spinner from "../spinner/spinner.component";

import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container category">
          <div className="category__header">
            <p className="category__header-title">{category}</p>
          </div>

          <div className="category__body">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Category;
