import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
	color: {
		// colorはrgbで指定すること
		// 参考: https://tailwindcss.com/docs/customizing-colors#using-css-variables
		background: "255 255 255",
		primary: "108 203 242",
	},
	size: {
		header: "4rem",
	},
	zIndex: {
		header: "100",
	},
});
