/* empty css                                     */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Bn5syghL.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-slate-800 text-white h-screen"> <form> <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-3"> <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0"> <div class="p-6 space-y-4 md:space-y-6 sm:p-8"> <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
Login
</p><div> <label class="block mb-2 text-sm font-medium text-gray-900">
Your username
</label> <input placeholder="JohnDoe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" id="username" type="text"> </div> <div> <label class="block mb-2 text-sm font-medium text-gray-900">
Password
</label> <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="••••••••" id="password" type="password"> </div> <button class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white" type="submit">
Login
</button> </div> </div> </div> </form> </main> ` })}`;
}, "C:/dev/ByteZoneWebSite/src/pages/login.astro", void 0);

const $$file = "C:/dev/ByteZoneWebSite/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
