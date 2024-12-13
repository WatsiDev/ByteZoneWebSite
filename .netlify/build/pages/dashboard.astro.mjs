/* empty css                                     */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Bn5syghL.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { l as listProducts, d as deleteProduct, a as listCategorias, e as editProduct, b as addProduct, $ as $$DashboardButton } from '../chunks/dashboardButton_Cj_jylTz.mjs';
export { renderers } from '../renderers.mjs';

const ProductTable = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    console.log("fetchProducts is running");
    try {
      const data = await listProducts();
      console.log("API response:", data);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.Producto_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("useEffect is running");
    fetchProducts();
  }, []);
  return /* @__PURE__ */ jsxs("table", { className: "table-auto w-full text-left", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Descripción" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Precio" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Stock" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Marca" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Categoria" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Imagen" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: products.map((product) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: product.Descripcion }),
      /* @__PURE__ */ jsxs("td", { className: "border px-4 py-2", children: [
        "$",
        product.Precio
      ] }),
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: product.Stock }),
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: product.Marca }),
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: product.Categoria }),
      /* @__PURE__ */ jsxs("td", { className: "border px-4 py-2", children: [
        " ",
        /* @__PURE__ */ jsx("img", { className: "h-52", src: product.Imagen, alt: "imagen del producto" })
      ] }),
      /* @__PURE__ */ jsxs("td", { className: "border px-4 py-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-blue-500 hover:underline mr-2",
            onClick: () => onEdit(product),
            children: "Edit"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-red-500 hover:underline",
            onClick: () => handleDelete(product.Producto_id),
            children: "Delete"
          }
        )
      ] })
    ] }, product.Producto_id)) })
  ] });
};

const ProductForm = ({
  product,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    Descripcion: product?.Descripcion || "",
    Marca: product?.Marca || "",
    Precio: product?.Precio || 0,
    Stock: product?.Stock || 0,
    Imagen: product?.Imagen || "",
    Categoria_id: product?.Categoria_id || 0
  });
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await listCategorias();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    if (product) {
      setFormData({
        Descripcion: product.Descripcion,
        Marca: product.Marca,
        Precio: product.Precio,
        Stock: product.Stock,
        Imagen: product.Imagen,
        Categoria_id: product.Categoria_id
        // Rellenamos el formulario con los valores del producto
      });
    }
  }, [product]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Selected ${name}:`, value);
    if (name === "Precio") {
      setFormData({
        ...formData,
        [name]: value ? parseFloat(value) : 0
        // Si el campo está vacío, poner 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    try {
      if (product?.Producto_id) {
        const updatedProduct = {
          ...formData,
          Producto_id: product.Producto_id
        };
        await editProduct(product.Producto_id, updatedProduct);
      } else {
        await addProduct(formData);
      }
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 text-black", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "Descripcion", className: "block text-sm font-semibold", children: "Descripción" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "Descripcion",
          name: "Descripcion",
          value: formData.Descripcion,
          onChange: handleChange,
          placeholder: "Product description",
          className: "border p-2 w-full",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      " ",
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "Precio", className: "block text-sm font-semibold", children: "Precio" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "Precio",
            name: "Precio",
            value: formData.Precio,
            onChange: handleChange,
            placeholder: "Product Price",
            className: "border p-2 w-full",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "Stock", className: "block text-sm font-semibold", children: "Stock" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "number",
            id: "Stock",
            name: "Stock",
            value: formData.Stock,
            onChange: handleChange,
            placeholder: "Stock",
            className: "border p-2 w-full",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "Marca", className: "block text-sm font-semibold", children: "Marca" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "Marca",
          name: "Marca",
          value: formData.Marca,
          onChange: handleChange,
          placeholder: "Marca",
          className: "border p-2 w-full",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "Categoria_id", className: "block text-sm font-semibold", children: "Categoría" }),
      /* @__PURE__ */ jsxs(
        "select",
        {
          name: "Categoria_id",
          id: "Categoria_id",
          value: formData.Categoria_id,
          onChange: handleChange,
          className: "border p-2 w-full",
          required: true,
          children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select Category" }),
            categories.map((category) => /* @__PURE__ */ jsx("option", { value: category.Categoria_id, children: category.Categoria }, category.Categoria_id))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "Imagen", className: "block text-sm font-semibold", children: "URL de Imagen" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "Imagen",
          name: "Imagen",
          value: formData.Imagen,
          onChange: handleChange,
          placeholder: "URL imagen",
          className: "border p-2 w-full",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2", children: [
      product?.Producto_id ? "Update" : "Add",
      " Product"
    ] }) })
  ] });
};

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refreshTable = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 space-y-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Productos" }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2", onClick: openModal, children: "New Product" }),
    /* @__PURE__ */ jsx(ProductTable, { onEdit: openModal }),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/3", children: [
      /* @__PURE__ */ jsx(ProductForm, { product: selectedProduct, onSuccess: refreshTable }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mt-4 px-4 py-2 bg-gray-500 text-white rounded-md",
          onClick: () => setIsModalOpen(false),
          children: "Close"
        }
      )
    ] }) })
  ] });
};

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="w-40 m-4"> ${renderComponent($$result2, "DashboardButton", $$DashboardButton, { "rute": "usuarios", ",": true, "BtnLabel": "Usuarios" })} </div> ${renderComponent($$result2, "DashboardReact", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/ByteZoneWebSite/src/components/productCrud/dashboard", "client:component-export": "default" })} </main> ` })}`;
}, "C:/dev/ByteZoneWebSite/src/pages/dashboard.astro", void 0);

const $$file = "C:/dev/ByteZoneWebSite/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
