import React, { useState } from "react";

const ProductCardJSX = ({ product, apiUrl, onProductUpdated, onProductDeleted }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [errorMessage, setErrorMessage] = useState("");

  // Función para manejar la edición del producto
  const handleSave = async (e) => {
    e.preventDefault();

    // Validar los datos antes de enviarlos
    if (!editedProduct.descripcion || editedProduct.cantidad_en_stock < 0 || editedProduct.precio <= 0) {
      setErrorMessage("Por favor, completa todos los campos con valores válidos.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/products/${product.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProduct),
      });

      if (response.ok) {
        const updatedProduct = await response.json();
        onProductUpdated(updatedProduct); // Actualizar la lista en el padre
        setIsModalOpen(false);
      } else {
        console.error("Error al actualizar el producto");
        setErrorMessage("No se pudo actualizar el producto. Inténtalo nuevamente.");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
      setErrorMessage("Hubo un error de conexión. Inténtalo más tarde.");
    }
  };

  // Función para manejar la eliminación del producto
  const handleDelete = async () => {
    try {
      const response = await fetch(`${apiUrl}/products/${product.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onProductDeleted(product.id); // Eliminar el producto en el padre
      } else {
        console.error("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Tarjeta */}
      <div className="flex items-stretch gap-4 bg-gray-800 text-gray-200 rounded-lg shadow-lg h-64">
        {/* Imagen */}
        <img
          src={product.imagen}
          alt="Producto"
          className="w-1/3 object-cover rounded-l-lg"
        />

        {/* Contenido */}
        <div className="flex-grow flex flex-col justify-between p-4">
          {/* Información del producto */}
          <div>
            <h3 className="text-xl font-bold mb-2">{product.descripcion}</h3>
            <p className="mb-2">
              <strong>Disponible:</strong> {product.cantidad_en_stock}
            </p>
            <p className="mb-2">
              <strong>Precio:</strong> ${product.precio}
            </p>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-500 hover:text-blue-300 transition"
            >
              Editar
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-gray-800 rounded-lg p-6 w-96">
            <h2 className="text-lg font-bold mb-4">Editar producto</h2>
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            <form onSubmit={handleSave}>
              <label className="block mb-2">
                Descripción:
                <textarea
                  value={editedProduct.descripcion}
                  onChange={(e) =>
                    setEditedProduct({ ...editedProduct, descripcion: e.target.value })
                  }
                  className="w-full border rounded-md p-2 mt-1"
                ></textarea>
              </label>

              <label className="block mb-2">
                Disponibilidad:
                <input
                  type="number"
                  min="0"
                  value={editedProduct.cantidad_en_stock}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      cantidad_en_stock: parseInt(e.target.value, 10),
                    })
                  }
                  className="w-full border rounded-md p-2 mt-1"
                />
              </label>

              <label className="block mb-2">
                Precio:
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={editedProduct.precio}
                  onChange={(e) =>
                    setEditedProduct({
                      ...editedProduct,
                      precio: parseFloat(e.target.value),
                    })
                  }
                  className="w-full border rounded-md p-2 mt-1"
                />
              </label>

              <div className="flex justify-end mt-4 gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCardJSX;
