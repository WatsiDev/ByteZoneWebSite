// api/subcategorias
export const fetchSubcategorias = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/subcategorias');
      if (response.ok) {
        return await response.json();
      } else {
        console.error('Error al obtener subcategorias:', response.statusText);
        return [];
      }
    } catch (error) {
      console.error('Error de red:', error);
      return [];
    }
  };