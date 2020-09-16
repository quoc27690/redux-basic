import React from "react";
import Product from "./Product";

function Products(props) {
  const { currentProducts } = props;

  return (
    <div className="products">
      {currentProducts.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

export default Products;
