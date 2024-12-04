import React, { useState, useEffect } from "react";
import {
  addProduct,
  editProduct,
  listCategorias,
} from "../apiServices/apiService";

interface Product {
  Producto_id?: number;
  Descripcion: string;
  Marca: string;
  Precio: number;
  Stock: number;
  Imagen: string;
  Categoria_id: number;
}

interface Category {
  Categoria_id: number;
  Categoria: string;
}

const ProductForm: React.FC<{ product?: Product; onSuccess: () => void }> = ({
  product,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<Product>({
    Descripcion: product?.Descripcion || "",
    Marca: product?.Marca || "",
    Precio: product?.Precio || 0,
    Stock: product?.Stock || 0,
    Imagen: product?.Imagen || "",
    Categoria_id: product?.Categoria_id || 0,
  });

  const [categories, setCategories] = useState<Category[]>([]);

  // Cargar las categorías desde la API usando listCategorias
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await listCategorias(); // Llama a la función listCategorias
        setCategories(categoriesData); // Asigna los datos de categorías
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (product) {
      setFormData({
        Descripcion: product.Descripcion,
        Marca: product.Marca,
        Precio: product.Precio,
        Stock: product.Stock,
        Imagen: product.Imagen,
        Categoria_id: product.Categoria_id, // Rellenamos el formulario con los valores del producto
      });
    }
  }, [product]); // Este hook se ejecuta cada vez que 'product' cambia

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  
    // Verifica el valor del select
    console.log(`Selected ${name}:`, value); // Aquí puedes ver el valor que se selecciona
  
    // Si el campo es 'Categoria', convertir a número
    if (name === 'Precio') {
      // Si el campo es 'Precio', convertir a número
      setFormData({
        ...formData,
        [name]: value ? parseFloat(value) : 0 // Si el campo está vacío, poner 0
      });
    } else {
      // Para otros campos, mantener el valor como está
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ver el contenido que se enviará al servidor
    console.log("Form data being submitted:", formData);
    try {
      if (product?.Producto_id) {
        const updatedProduct = {
          ...formData,
          Producto_id: product.Producto_id,
        };
        await editProduct(product.Producto_id, updatedProduct);
      } else {
        await addProduct(formData);
      }
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <input
        type="text"
        name="Descripcion"
        value={formData.Descripcion}
        onChange={handleChange}
        placeholder="Product description"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="Precio"
        value={formData.Precio}
        onChange={handleChange}
        placeholder="Product Price"
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="Stock"
        value={formData.Stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="Marca"
        value={formData.Marca}
        onChange={handleChange}
        placeholder="Marca"
        className="border p-2 w-full"
        required
      />
      <select
        name="Categoria_id"
        value={formData.Categoria_id}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.Categoria_id} value={category.Categoria_id}>
            {category.Categoria}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="Imagen"
        value={formData.Imagen}
        onChange={handleChange}
        placeholder="URL imagen"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {product?.Producto_id ? "Update" : "Add"} Product
      </button>
    </form>
  );
};

export default ProductForm;
