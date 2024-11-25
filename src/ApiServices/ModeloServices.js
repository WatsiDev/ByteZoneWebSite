// api/modelos.js
export const fetchModelos = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/modelos');
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