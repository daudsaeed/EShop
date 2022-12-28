// import { useContext, Fragment } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories-selector";
import CategoryPreview from "../category-preview/category-preview.component";

// import { CategoriesContext } from "../../context/categories.context";

import "./categories-preview.style.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <div className="container">
          <CategoryPreview title={title} products={categoriesMap} />
        </div>
      ))}
    </Fragment>
  );
};

export default CategoriesPreview;
