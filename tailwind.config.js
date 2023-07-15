/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {},
			animation: {
				scaleIn: "scaleIn 200ms ease",
				scaleOut: "scaleOut 200ms ease",
				fadeIn: "fadeIn 200ms ease",
				fadeOut: "fadeOut 200ms ease",
				enterFromLeft: "enterFromLeft 250ms ease",
				enterFromRight: "enterFromRight 250ms ease",
				exitToLeft: "exitToLeft 250ms ease",
				exitToRight: "exitToRight 250ms ease",
				slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideDownAndFade: "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideLeftAndFade: "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
				slideRightAndFade: "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
			},
			colors: {
				primary: "rgb(var(--primary-color) / <alpha-value>)",
			},
		},
	},
	plugins: [],
};
