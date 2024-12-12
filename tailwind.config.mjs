import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
				main: ['Bebas Neue', ...defaultTheme.fontFamily.mono],
			},
			// fontSize: {
			// 	base: '24pt',
			// },
		},
	},
	plugins: [
		require('daisyui'),
	],

	daisyui: {
		themes: false,
		darkTheme: "dark",
		base: true,
		styled: true,
		utils: true,
		prefix: "",
		logs: false,
		themeRoot: ":root",
		themes: [
			{
	      mytheme: {
					"primary": "#14213d",
					"secondary": "#9e2a2b",
					"accent": "#fca311",
					"neutral": "#c5c5c5",
					"base-100": "#ffffff",
					"info": "#38bdf8",
					"success": "#4ade80",
					"warning": "#f97316",
					"error": "#ef4444",

					"--rounded-box": "0.4rem",          // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.20rem",        // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1rem",      // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.2s",       // duration of animation when you click on button
					"--animation-input": "0.2s",      // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-focus-scale": "0.95",      // scale transform of button when you focus on it
					"--border-btn": "1px",            // border width of buttons
					"--tab-border": "1px",            // border width of tabs
					"--tab-radius": "0.20rem",         // border radius of tabs
	    	},
			},
		],
	},
}
