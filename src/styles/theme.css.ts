import { createGlobalTheme } from "@vanilla-extract/css";

/**
 * コアとなる変数。汎用性の高い変数群をここで定義する。
 *
 * 50〜950のバリエーションは https://uicolors.app/create などで生成すると良い。
 *
 * なお、色はrgbで指定すること。
 *
 * 参考: https://tailwindcss.com/docs/customizing-colors#using-css-variables
 */
export const core = createGlobalTheme(":root", {
	color: {
		white: "255 255 255",
		black: "0 0 0",

		gray50: "246 246 246",
		gray100: "231 231 231",
		gray200: "209 209 209",
		gray300: "176 176 176",
		gray400: "136 136 136",
		gray500: "109 109 109",
		gray600: "93 93 93",
		gray700: "80 80 80",
		gray800: "69 69 69",
		gray900: "61 61 61",
		gray950: "38 38 38",

		primary50: "240 249 255",
		primary100: "223 241 255",
		primary200: "184 228 255",
		primary300: "108 203 255",
		primary400: "51 185 253",
		primary500: "9 160 238",
		primary600: "0 127 204",
		primary700: "0 101 165",
		primary800: "4 86 136",
		primary900: "10 72 112",
		primary950: "6 45 75",
	},
});

export const theme = createGlobalTheme(":root", {
	color: {
		background: core.color.white,
		text: core.color.gray700,

		primaryText: core.color.primary300,
		primaryBackground: core.color.primary600,
		primaryBackgroundText: core.color.white,
	},
	size: {
		header: "4rem",
	},
	zIndex: {
		header: "100",
	},
});
