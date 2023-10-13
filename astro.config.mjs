import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';
import serviceWorker from "astrojs-service-worker";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from './src/site_config';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [rawFonts(['.ttf'])],
    optimizeDeps: { exclude: ['@resvg/resvg-js'] }
  },
  integrations: [
    tailwind(), 
    sitemap(),
    serviceWorker(),
      webmanifest({
        name: "Alejandro Schwartz Portfolio",
        short_name: "Ale Schwartz",
        description: "Portfolio de proyectos y Blog de Alejandro Schwartz",
        lang: 'es-ES',
        start_url: "/",
        scope: "/",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        prefer_related_applications: false,
        related_applications: [],
        icon: "public/maskable.png",
        icons: [
          {
            src: "public/maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "public/favicon.ico",
            sizes: "32x32 16x16",
            type: "image/x-icon"
          },
          {
            src: "public/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "public/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }),
    ],
  }
);

function rawFonts(ext) {
  return {
    name: 'vite-plugin-raw-fonts',
    transform(_, id) {
      if (ext.some(e => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}