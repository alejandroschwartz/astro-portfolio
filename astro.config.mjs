import { defineConfig } from "astro/config"

// Astro integration imports
import { VitePWA } from "vite-plugin-pwa"

// Helper imports
import { manifest, seoConfig } from "./seoConfig"

export default defineConfig({
	site: seoConfig.baseURL,
	// integrations: [
	// 	tailwind({
	// 		config: {
	// 			applyBaseStyles: false,
	// 			path: "./tailwind.config.js"
	// 		}
	// 	}),
	// 	sitemap(),
	// 	compress()
	// ],
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
				  globDirectory: 'dist',
				  globPatterns: [
				    '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
				  ],
				  // Don't fallback on document based (e.g. `/some-page`) requests
				  // This removes an errant console.log message from showing up.
				  navigateFallback: null,
				},
			})
		]
	}
})