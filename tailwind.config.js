/**
 * @type {import("tailwindcss").Config}
 */
export default {
	content: ["./src/**/*.{astro,ts,tsx}"],
	theme: {
		extend: {
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
