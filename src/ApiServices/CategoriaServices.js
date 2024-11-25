// api/categorias
export const fetchCategorias = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/categorias');
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Error al obtener marcas:', response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Error de red:', error);
      return [];
    }
  };