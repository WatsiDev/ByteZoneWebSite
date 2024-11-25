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