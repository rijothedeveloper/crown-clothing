import { useContext } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { ProductContext } from "../../contexts/product.context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default Shop;
