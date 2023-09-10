/** @type {import("prettier").Config} */

const config = {
	printWidth: 80,
	useTabs: true,
	semi: true,
	singleQuote: false,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};

export default config;
