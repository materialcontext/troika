/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primYellow: '#fff143',
				primRed: '#f14135',
			}
		},
	},
	plugins: [],
}
