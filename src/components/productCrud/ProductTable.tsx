import React, { useEffect, useState } from 'react';
import { listProducts, deleteProduct } from '../../apiServices/apiService';

interface Product {
    Producto_id: number,
    Descripcion: string,
    Marca: string,
    Precio: number,
    Stock: number,
    Imagen: string,
    Categoria: string
}

const ProductTable: React.FC<{ onEdit: (product: Product) => void }> = ({ onEdit }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    console.log("fetchProducts is running"); // Agrega este log para depurar
    try {
      const data = await listProducts();
      console.log("API response:", data); // Verifica si llegan los datos
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.Producto_id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("useEffect is running");
    fetchProducts();
  }, []);
  

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th className="border px-4 py-2">Descripción</th>
          <th className="border px-4 py-2">Precio</th>
          <th className="border px-4 py-2">Stock</th>
          <th className="border px-4 py-2">Marca</th>
          <th className="border px-4 py-2">Categoria</th>
          <th className="border px-4 py-2">Imagen</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.Producto_id}>
            <td className="border px-4 py-2">{product.Descripcion}</td>
            <td className="border px-4 py-2">${product.Precio}</td>
            <td className="border px-4 py-2">{product.Stock}</td>
            <td className="border px-4 py-2">{product.Marca}</td>
            <td className="border px-4 py-2">{product.Categoria}</td>
            <td className="border px-4 py-2"> <img className="h-52" src={product.Imagen} alt="imagen del producto" /></td>
            <td className="border px-4 py-2">
              <button
                className="text-blue-500 hover:underline mr-2"
                onClick={() => onEdit(product)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDelete(product.Producto_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
