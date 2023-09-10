import { defineConfig } from 'astro/config';
import webmanifest from 'astro-webmanifest';
import serviceWorker from "astrojs-service-worker";

export default defineConfig({
  integrations: [
	serviceWorker(),
    webmanifest({
      name: "Alejandro Schwartz Portfolio",
      short_name: "Ale Schwartz",
      description: "Portfolio de proyectos y Blog de Alejandro Schwartz",
      lang: 'es-ES',
      start_url: "/",
      scope: "/",
      theme_color: "#3367D6",
      background_color: "#15b315",
      display: "standalone",
      prefer_related_applications: false,
      related_applications: [],
      icon: "public/favicon-32x32.png",
      icons: [
        {
          "src": "public/maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "public/favicon.ico",
          "sizes": "32x32 16x16",
          "type": "image/x-icon"
        },
        {
          "src": "public/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "public/android-chrome-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ]
    }),
  ],
});