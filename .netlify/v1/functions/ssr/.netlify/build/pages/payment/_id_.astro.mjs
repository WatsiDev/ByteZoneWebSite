/* empty css                                        */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Layout } from '../../chunks/Layout_Bn5syghL.mjs';
export { renderers } from '../../renderers.mjs';

const CheckoutForm = ({ price }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expMonth: "",
    expYear: "",
    cvv: ""
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: price * 100,
          // Convertimos el precio a centavos
          paymentType
        })
      }
    );
    const data = await response.json();
    return data.clientSecret;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    await createPaymentIntent();
    console.log("Detalles de tarjeta enviados:", cardDetails);
    setIsProcessing(false);
    setPaymentMessage("¡Pago procesado exitosamente!");
  };
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-screen text-black", children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-md",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "text-gray-800 text-xl font-bold mb-4", children: "Pago con Tarjeta" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Ingrese los detalles de su tarjeta para completar la compra" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "paymentType", className: "block text-gray-700 mb-1", children: "Tipo de pago:" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "paymentType",
              value: paymentType,
              onChange: (e) => setPaymentType(e.target.value),
              className: "w-full p-2 border rounded-md",
              children: [
                /* @__PURE__ */ jsx("option", { value: "credit", children: "Crédito" }),
                /* @__PURE__ */ jsx("option", { value: "debit", children: "Débito" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cardNumber", className: "block text-gray-700 mb-1", children: "Número de Tarjeta" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "cardNumber",
              name: "cardNumber",
              placeholder: "1234 5678 9012 3456",
              value: cardDetails.cardNumber,
              onChange: handleInputChange,
              className: "w-full p-2 border rounded-md",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cardName", className: "block text-gray-700 mb-1", children: "Nombre en la Tarjeta" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "cardName",
              name: "cardName",
              placeholder: "John Doe",
              value: cardDetails.cardName,
              onChange: handleInputChange,
              className: "w-full p-2 border rounded-md",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4 flex space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "expMonth", className: "block text-gray-700 mb-1", children: "Mes de Expiración" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "expMonth",
                name: "expMonth",
                value: cardDetails.expMonth,
                onChange: handleInputChange,
                className: "w-full p-2 border rounded-md",
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Mes" }),
                  [...Array(12)].map((_, i) => /* @__PURE__ */ jsx("option", { value: String(i + 1).padStart(2, "0"), children: String(i + 1).padStart(2, "0") }, i))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "expYear", className: "block text-gray-700 mb-1", children: "Año de Expiración" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "expYear",
                name: "expYear",
                value: cardDetails.expYear,
                onChange: handleInputChange,
                className: "w-full p-2 border rounded-md",
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Año" }),
                  [...Array(10)].map((_, i) => /* @__PURE__ */ jsx("option", { value: (/* @__PURE__ */ new Date()).getFullYear() + i, children: (/* @__PURE__ */ new Date()).getFullYear() + i }, i))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "msi", className: "block text-gray-700 mb-1", children: "Meses sin intereses" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                name: "msi",
                id: "msi",
                value: "",
                onChange: handleInputChange,
                className: "w-full p-2 border rounded-md",
                required: true,
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "5 MSI" }),
                  /* @__PURE__ */ jsx("option", { value: "", children: "10 MSI" }),
                  /* @__PURE__ */ jsx("option", { value: "", children: "12 MSI" }),
                  /* @__PURE__ */ jsx("option", { value: "", children: "Pago unico" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "cvv", className: "block text-gray-700 mb-1", children: "CVV" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "cvv",
              name: "cvv",
              placeholder: "123",
              value: cardDetails.cvv,
              onChange: handleInputChange,
              className: "w-full p-2 border rounded-md",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 font-bold text-lg", children: [
            "Total a pagar: ",
            /* @__PURE__ */ jsxs("span", { className: "text-green-500", children: [
              "$",
              price
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Incluye impuestos y envío" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isProcessing,
            className: `w-full py-2 px-4 rounded-md text-white ${isProcessing ? "bg-gray-500 cursor-not-allowed" : "bg-black hover:bg-gray-800"}`,
            children: isProcessing ? "Procesando..." : "Pagar ahora"
          }
        ),
        paymentMessage && /* @__PURE__ */ jsx("p", { className: "text-center text-green-500 mt-4", children: paymentMessage })
      ]
    }
  ) });
};

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let product = null;
  try {
    const response = await fetch(`http://localhost:3000/productos/${id}`);
    if (response.ok) {
      product = await response.json();
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error(error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Payment" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col items-center justify-center min-h-screen gap-2"> <h2 class="font-bold text-3xl mb-6 text-center">Realice su compra a crédito o débito.</h2> <div class="w-full max-w-md py-8"> ${product ? renderTemplate`${renderComponent($$result2, "CheckoutForm", CheckoutForm, { "price": product.Precio })}` : renderTemplate`<p class="text-red-500 text-center">Producto no encontrado.</p>`} </div> </div> ` })}`;
}, "C:/dev/ByteZoneWebSite/src/pages/payment/[id].astro", void 0);

const $$file = "C:/dev/ByteZoneWebSite/src/pages/payment/[id].astro";
const $$url = "/payment/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
