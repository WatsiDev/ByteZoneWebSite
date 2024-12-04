import React from 'react';
import ProductCardJSX from './ProductDashboard'; // Asegúrate de tener la ruta correcta

const ProductDashboardList = ({ products, onUpdate, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCardJSX
            key={product.id}
            product={product}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="text-gray-600 text-center col-span-full">
          No hay productos disponibles.
        </p>
      )}
    </div>
  );
};

export default ProductDashboardList;
