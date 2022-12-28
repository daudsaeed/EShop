import { Link } from "react-router-dom";

import ProductCard from "../product/product.component";
import "./category-preview.style.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoryPreview">
      <div className="categoryPreview__header">
        <h1 className="categoryPreview__header-title">{title}</h1>

        <Link to={`/shop/${title}`} className="categoryPreview__header-link">
          <p>
            See ALL{" "}
            <span className="categoryPreview__header-link-arrow">&#10095;</span>
          </p>
        </Link>
      </div>
      <div className="categoryPreview__products">
        {products[title].map((product, index) => {
          if (index < 4)
            return <ProductCard product={product} key={product.id} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default CategoryPreview;
