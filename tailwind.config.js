/**
 * @type {import("tailwindcss").Config}
 */
export default {
	content: ["./src/**/*.{astro,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
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
