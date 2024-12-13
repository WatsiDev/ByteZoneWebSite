import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as createAstro } from './astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const BASE_URL = "http://localhost:3000";
const listCategorias = async () => {
  console.log("Fetching categories from API...");
  const response = await fetch(`${BASE_URL}/categorias`);
  if (!response.ok) throw new Error("Error fetching categories");
  return response.json();
};
const listUsers = async () => {
  console.log("Fetching users from API...");
  const response = await fetch(`${BASE_URL}/usuarios`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};
const addUser = async (user) => {
  const response = await fetch(`${BASE_URL}/usuarios/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  if (!response.ok) throw new Error("Error adding user");
  return response.json();
};
const editUser = async (id, user) => {
  const response = await fetch(`${BASE_URL}/usuarios/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  if (!response.ok) throw new Error("Error updating user");
  return response.json();
};
const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/usuarios/delete/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) throw new Error("Error deleting product");
  return response.json();
};
const listProducts = async () => {
  console.log("Fetching products from API...");
  const response = await fetch(`${BASE_URL}/productos`);
  if (!response.ok) throw new Error("Error fetching products");
  return response.json();
};
const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/productos/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!response.ok) throw new Error("Error adding product");
  return response.json();
};
const editProduct = async (Producto_id, product) => {
  const response = await fetch(`${BASE_URL}/productos/update/${Producto_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!response.ok) throw new Error("Error updating product");
  return response.json();
};
const deleteProduct = async (producto_id) => {
  const response = await fetch(`${BASE_URL}/productos/delete/${producto_id}`, {
    method: "DELETE"
  });
  if (!response.ok) throw new Error("Error deleting product");
  return response.json();
};

const $$Astro = createAstro();
const $$DashboardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardButton;
  const { rute, BtnLabel } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(rute, "href")} class="flex justify-center gap-2 text-black items-center mx-auto 
      shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto
       border-gray-50 before:absolute before:w-full before:transition-all 
       before:duration-700 before:hover:w-full before:-left-full before:hover:left-0
        before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10
         before:aspect-square before:hover:scale-150 before:hover:duration-700 relative
          z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"> ${BtnLabel} <svg class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50
         text-black ease-linear duration-300 rounded-full border border-gray-700
          group-hover:border-none p-2 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg"> <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 
          0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932
           6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 
           1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 
           14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711
            0.292893ZM9 18L9 1H7L7 18H9Z" class="fill-gray-800 group-hover:fill-gray-800"></path> </svg> </a>`;
}, "C:/dev/ByteZoneWebSite/src/components/dashboardButton.astro", void 0);

export { $$DashboardButton as $, listCategorias as a, addProduct as b, listUsers as c, deleteProduct as d, editProduct as e, deleteUser as f, editUser as g, addUser as h, listProducts as l };
