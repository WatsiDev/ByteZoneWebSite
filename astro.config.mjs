import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'; // Importa la integración de React

// https://astro.build/config
export default defineConfig({
  output: 'server', // O 'static' dependiendo de tus necesidades de despliegue
  integrations: [
    tailwind(), // Mantienes TailwindCSS
    react(),    // Agregas React
  ],
});
