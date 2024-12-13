import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderHead, i as renderComponent, k as renderSlot, h as createAstro } from './astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-slate-400 text-white bg-opacity-5 backdrop-blur-sm sticky top-0 h-20 flex justify-between items-center gap-3"> <div class="flex items-center gap-3"> <a class="text-2xl font-semibold px-8" href="/">ByteZone</a> </div> <ul class="flex gap-9 pr-4"> <li> <a href="/login">
Iniciar sesión
</a> </li> <li> <a href="/register">
Registrarse
</a> </li> <li> <a href="/dashboard">
Dashboard
</a> </li> </ul> </header>`;
}, "C:/dev/ByteZoneWebSite/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Tienda online de computo"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-slate-800 text-white h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/dev/ByteZoneWebSite/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
