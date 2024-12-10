/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accentYellow: "#fca311",
				laborBlue: "#14213d",
				wallGray: "#e5e5e5",
			}
		},
	},
	plugins: [],
}
