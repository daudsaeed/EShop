import { useContext } from "react";

import ProductCard from "../../components/product/product.component";
import { ProductContext } from "../../context/product.context";

import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="container">
      <div className="products">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
