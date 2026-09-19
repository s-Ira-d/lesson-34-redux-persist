import { products } from "../data/products";
import { ProductItem } from "./ProductItem";

import { ProductGrid } from "./ProductList.styled";

export const ProductList = () => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ProductGrid>
  );
};
