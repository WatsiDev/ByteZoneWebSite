import React from "react";
import ProductDashboard from "./ProductDashboard";

const ProductList = ({ products }) => {
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <ProductDashboard key={index} product={product} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ProductList;
