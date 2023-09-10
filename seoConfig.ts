// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://localhost:4321", // Change this to your production URL.
	description: "Portfolio de proyectos y Blog de Alejandro Schwartz.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Alejandro Schwartz Portfolio", // Change this to your website's name,
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	"name": "Alejandro Schwartz Portfolio",
	"short_name": "Ale Schwartz",
	"description": "Portfolio de proyectos y Blog de Alejandro Schwartz",
	"start_url": "/",
	"scope": "/",
	"theme_color": "#000000",
	"background_color": "#ffffff",
	"display": "standalone",
	"prefer_related_applications": false,
	"related_applications": [],
	"icons": [
	  {
		  "src": "icons/maskable.png",
		  "sizes": "192x192",
		  "type": "image/png",
		  "purpose": "any maskable"
	  },
	  {
		  "src": "icons/favicon.ico",
		  "sizes": "64x64 32x32 24x24 16x16",
		  "type": "image/x-icon"
	  },
	  {
		  "src": "icons/android-chrome-192x192.png",
		  "sizes": "192x192",
		  "type": "image/png"
	  },
	  {
		  "src": "icons/android-chrome-512x512.png",
		  "sizes": "512x512",
		  "type": "image/png"
	  }
	]
  }