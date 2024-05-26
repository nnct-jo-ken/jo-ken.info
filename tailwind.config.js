/**
 * @type {import("tailwindcss").Config}
 */
export default {
	content: ["./src/**/*.{astro,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "rgb(var(--color-primary-50) / <alpha-value>)",
					100: "rgb(var(--color-primary-100) / <alpha-value>)",
					200: "rgb(var(--color-primary-200) / <alpha-value>)",
					300: "rgb(var(--color-primary-300) / <alpha-value>)",
					400: "rgb(var(--color-primary-400) / <alpha-value>)",
					500: "rgb(var(--color-primary-500) / <alpha-value>)",
					600: "rgb(var(--color-primary-600) / <alpha-value>)",
					700: "rgb(var(--color-primary-700) / <alpha-value>)",
					800: "rgb(var(--color-primary-800) / <alpha-value>)",
					900: "rgb(var(--color-primary-900) / <alpha-value>)",
					950: "rgb(var(--color-primary-950) / <alpha-value>)",
				},
				accent: {
					50: "rgb(var(--color-accent-50) / <alpha-value>)",
					100: "rgb(var(--color-accent-100) / <alpha-value>)",
					200: "rgb(var(--color-accent-200) / <alpha-value>)",
					300: "rgb(var(--color-accent-300) / <alpha-value>)",
					400: "rgb(var(--color-accent-400) / <alpha-value>)",
					500: "rgb(var(--color-accent-500) / <alpha-value>)",
					600: "rgb(var(--color-accent-600) / <alpha-value>)",
					700: "rgb(var(--color-accent-700) / <alpha-value>)",
					800: "rgb(var(--color-accent-800) / <alpha-value>)",
					900: "rgb(var(--color-accent-900) / <alpha-value>)",
					950: "rgb(var(--color-accent-950) / <alpha-value>)",
				},
			},
			fontFamily: {
				serif: [
					"Helvetica Neue",
					"Arial",
					"Hiragino Kaku Gothic ProN",
					"Hiragino Sans",
					"Meiryo",
					"sans-serif",
				],
				handwriting: ["Zen Kurenaido", "sans-serif"],
				cursive: ["Monsieur La Doulaise", "cursive"],
			},
			maxWidth: {
				prose: "80ch",
			},
		},
	},
	plugins: [],
};
