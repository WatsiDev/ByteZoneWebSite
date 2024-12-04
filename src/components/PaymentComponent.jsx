import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51QSAxgD6DQOs7GbUVV9uBic34xAxEIPK6pP9INg1ILpMShnZxoTJxTnRrgZRxxAXj18RwlRGucIEhpGLoeOBtO1j00XDbcFWvZ");

const App = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default App;
