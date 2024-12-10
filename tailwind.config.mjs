import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				stoneyellow: "#fca311",
				stoneblue: "#14213d",
				stonegray: "#e5e5e5",
			},
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				main: ['Bebas Neue'],
			},
		},
	},
	plugins: [],
}
