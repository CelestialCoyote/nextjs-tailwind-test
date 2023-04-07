/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				mw_background: "#282728",
				mw_black: "#111111",
				mw_blacktext: "#212121",
				mw_green: "#74e4b8",
				mw_border: {
					500: "#305345",
					900: "#60e3a8",
				},
				mw_placeholder: "#abafb3"
			}
		},
	},
	plugins: [],
}
