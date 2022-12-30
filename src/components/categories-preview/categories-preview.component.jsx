// import { useContext, Fragment } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/categories-selector";
import CategoryPreview from "../category-preview/category-preview.component";
import Spinner from "../spinner/spinner.component";

// import { CategoriesContext } from "../../context/categories.context";

import "./categories-preview.style.scss";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  let isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <div className="container" key={title}>
            <CategoryPreview title={title} products={categoriesMap} />
          </div>
        ))
      )}
      {/* {} */}
    </Fragment>
  );
};

export default CategoriesPreview;
