import React, { useState } from 'react';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const refreshTable = () => {
    setSelectedProduct(null); // Clear selected product to trigger table refresh
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <ProductTable onEdit={setSelectedProduct} />
      <ProductForm product={selectedProduct} onSuccess={refreshTable} />
    </div>
  );
};

export default Dashboard;

