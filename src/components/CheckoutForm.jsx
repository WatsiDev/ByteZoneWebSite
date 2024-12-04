import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState("");

    const createPaymentIntent = async () => {
        const response = await fetch("http://localhost:3000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: 1000 }), // Ejemplo: $10.00
        });

        const data = await response.json();
        return data.clientSecret;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsProcessing(true);

        const clientSecret = await createPaymentIntent();

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        setIsProcessing(false);

        if (error) {
            setPaymentMessage(`Error: ${error.message}`);
        } else if (paymentIntent) {
            setPaymentMessage(`¡Pago exitoso! ID: ${paymentIntent.id}`);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-white text-xl font-bold mb-4">Procesador de pagos con Stripe</h2>
                <div className="bg-gray-700 p-4 rounded-md">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    color: "#ffffff",
                                    "::placeholder": { color: "#aab7c4" },
                                },
                                invalid: { color: "#fa755a" },
                            },
                        }}
                        className="p-2"
                    />
                </div>
                <button
                    type="submit"
                    disabled={!stripe || isProcessing}
                    className={`mt-4 w-full py-2 px-4 rounded-md text-white ${
                        isProcessing
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    {isProcessing ? "Procesando..." : "Pagar"}
                </button>
                {paymentMessage && (
                    <p className="text-center text-gray-300 mt-4">{paymentMessage}</p>
                )}
            </form>
        </div>
    );
};

export default CheckoutForm;
