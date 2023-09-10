/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Flex Variable", ...defaultTheme.fontFamily.sans],
				serif: ["Playfair Display Variable", ...defaultTheme.fontFamily.serif],
			},
			colors: {},
		},
	},
	plugins: [],
};

export default config;
