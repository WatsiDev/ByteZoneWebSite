/* empty css                                     */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../chunks/astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Bn5syghL.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Categorias = createComponent(async ($$result, $$props, $$slots) => {
  let categorias = [];
  const fetchCategorias = async () => {
    const response = await fetch("http://localhost:3000/categorias");
    if (response.ok) {
      categorias = await response.json();
    }
  };
  await fetchCategorias();
  return renderTemplate`<!-- Listar categorias -->${maybeRenderHead()}<ul> ${categorias.length > 0 ? categorias.map((categorias2) => renderTemplate`<li class="pt-1"> <p class="">${categorias2.Categoria}</p> </li>`) : renderTemplate`<li>No hay categorias disponibles</li>`} </ul>`;
}, "C:/dev/ByteZoneWebSite/src/components/Categorias.astro", void 0);

const $$Shop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>`;
}, "C:/dev/ByteZoneWebSite/src/components/shop.astro", void 0);

const $$ListProducts = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  const fetchListProducts = async () => {
    const response = await fetch("http://localhost:3000/productos");
    if (response.ok) {
      products = await response.json();
    }
  };
  await fetchListProducts();
  return renderTemplate`<!-- Listar productos -->${maybeRenderHead()}<div class="p-4"> ${products.length > 0 ? products.map((product) => renderTemplate`<div class="bg-slate-600 m-2 grid grid-cols-4 rounded-md h-60"> <img class="h-60 object-cover"${addAttribute(product.Imagen, "src")} alt="imagen del producto"> <div class="col-span-3 p-3"> <p class="font-bold text-lg text-white">${product.Descripcion}</p> <div class="grid grid-cols-2 p-4 text-white"> <p class="text-start"></p> <p class="text-end">Disponibles: ${product.Stock}</p> <p class="text-end col-span-2">Precio: $${product.Precio}</p> <!-- Botón de pago que redirige a la página de pago con el ID del producto --> <a${addAttribute(`/payment/${product.Producto_id}`, "href")} class="bg-cyan-400 ml-auto col-start-2 mt-4 py-2 rounded-lg hover:bg-black w-1/2 flex items-center justify-center gap-2 active:scale-95"> ${renderComponent($$result, "Shop", $$Shop, { "class": "w-5 h-5" })}
Comprar
</a> </div> </div> </div>`) : renderTemplate`<p class="text-center text-white">No hay productos disponibles</p>`} </div>`;
}, "C:/dev/ByteZoneWebSite/src/components/ListProducts.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ByteZone-Tienda online" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-slate-800 text-white"> <div class="grid grid-cols-[1fr_4fr] gap-3 p-2"> <aside class="bg-slate-700 p-3 h-2/4 mt-7"> <h3 class="text-center">Categorias</h3> ${renderComponent($$result2, "Categorias", $$Categorias, {})} </aside> <div class="ml-3 text-center mt-7"> <div> ${renderComponent($$result2, "ListProducts", $$ListProducts, {})} </div> </div> </div> </main> ` })}`;
}, "C:/dev/ByteZoneWebSite/src/pages/index.astro", void 0);

const $$file = "C:/dev/ByteZoneWebSite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
