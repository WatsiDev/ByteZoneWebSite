import React, { useState } from "react";

const CheckoutForm = ({ price }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  const [paymentType, setPaymentType] = useState("credit");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const createPaymentIntent = async () => {
    const response = await fetch(
      "http://localhost:3000/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price * 100, // Convertimos el precio a centavos
          paymentType,
        }),
      }
    );

    const data = await response.json();
    return data.clientSecret;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const clientSecret = await createPaymentIntent();

    // Simulación del proceso de pago
    console.log("Detalles de tarjeta enviados:", cardDetails);

    setIsProcessing(false);
    setPaymentMessage("¡Pago procesado exitosamente!");
  };

  return (
    <div className="flex justify-center items-center h-screen text-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-gray-800 text-xl font-bold mb-4">
          Pago con Tarjeta
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Ingrese los detalles de su tarjeta para completar la compra
        </p>

        {/* Tipo de pago */}
        <div className="mb-4">
          <label htmlFor="paymentType" className="block text-gray-700 mb-1">
            Tipo de pago:
          </label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="credit">Crédito</option>
            <option value="debit">Débito</option>
          </select>
        </div>

        {/* Número de tarjeta */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 mb-1">
            Número de Tarjeta
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Nombre en la tarjeta */}
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 mb-1">
            Nombre en la Tarjeta
          </label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            placeholder="John Doe"
            value={cardDetails.cardName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Fecha de expiración */}
        <div className="mb-4 flex space-x-4">
          <div>
            <label htmlFor="expMonth" className="block text-gray-700 mb-1">
              Mes de Expiración
            </label>
            <select
              id="expMonth"
              name="expMonth"
              value={cardDetails.expMonth}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Mes</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={String(i + 1).padStart(2, "0")}>
                  {String(i + 1).padStart(2, "0")}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="expYear" className="block text-gray-700 mb-1">
              Año de Expiración
            </label>
            <select
              id="expYear"
              name="expYear"
              value={cardDetails.expYear}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Año</option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={new Date().getFullYear() + i}>
                  {new Date().getFullYear() + i}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="msi" className="block text-gray-700 mb-1">
              Meses sin intereses
            </label>
            <select
              name="msi"
              id="msi"
              value=""
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            >
                <option value="">5 MSI</option>
                <option value="">10 MSI</option>
                <option value="">12 MSI</option>
                <option value="">Pago unico</option>
            </select>
          </div>
        </div>

        {/* CVV */}
        <div className="mb-4">
          <label htmlFor="cvv" className="block text-gray-700 mb-1">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Total a pagar */}
        <div className="mb-4">
          <p className="text-gray-700 font-bold text-lg">
            Total a pagar: <span className="text-green-500">${price}</span>
          </p>
          <p className="text-gray-500 text-sm">Incluye impuestos y envío</p>
        </div>

        {/* Botón de pago */}
        <button
          type="submit"
          disabled={isProcessing}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isProcessing
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {isProcessing ? "Procesando..." : "Pagar ahora"}
        </button>

        {paymentMessage && (
          <p className="text-center text-green-500 mt-4">{paymentMessage}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
