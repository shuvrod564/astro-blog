/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#a54c9e',
				dark: '#232536',
				grey: '#4C4C4C',
				gradient: '#F4F0F8',
			}
		},
	},
	plugins: [],
}
