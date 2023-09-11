import { defineConfig } from "astro/config";

// Integrations.
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false, // Manually import .css file.
		}),
		compress({
			CSS: false, // PostCSS already minifies CSS.
			HTML: true,
			Image: false,
			JavaScript: false,
			SVG: false,
		}),
	],
});
