const BASE_URL = 'http://localhost:3000';

export const listCategorias = async () => {
  console.log("Fetching categories from API...");
  const response = await fetch(`${BASE_URL}/categorias`);
  if (!response.ok) throw new Error("Error fetching categories");
  return response.json();
};

export const listProducts = async () => {
  console.log("Fetching products from API...");
  const response = await fetch(`${BASE_URL}/productos`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};

export const addProduct = async (product: { 
    Descripcion: string,
    Marca: string,
    Precio: number,
    Stock: number,
    Imagen: string,
    Categoria_id: number
 }) => {
  const response = await fetch(`${BASE_URL}/productos/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Error adding product');
  return response.json();
};

export const editProduct = async (Producto_id: number, product: { 
    Descripcion: string,
    Marca: string,
    Precio: number,
    Stock: number,
    Imagen: string,
    Categoria_id: number
 }) => {
  const response = await fetch(`${BASE_URL}/productos/update/${Producto_id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  });
  if (!response.ok) throw new Error('Error updating product');
  return response.json();
};

export const deleteProduct = async (producto_id: number) => {
  const response = await fetch(`${BASE_URL}/productos/delete/${producto_id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error deleting product');
  return response.json();
};

