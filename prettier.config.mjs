/** @type {import("prettier").Config} */

export default {
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
