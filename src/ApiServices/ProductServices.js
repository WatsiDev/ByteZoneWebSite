// src/ApiServices/ProductServices.js
export const fetchListProducts = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/listProducts');
    if (response.ok) {
      return await response.json();
    } else {
      console.error('Error al obtener productos:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Error de red:', error);
    return [];
  }
};

export const createProduct = async (product) => {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error('Error al crear producto:', error);
    return null;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return response.ok;
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    return false;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: 'DELETE',
    });
    return response.ok;
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return false;
  }
};
