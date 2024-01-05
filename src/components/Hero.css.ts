import { style } from "@vanilla-extract/css";

import * as queries from "~/styles/media-queries.css";
import { theme } from "~/styles/theme.css";
import { color } from "~/styles/utils.css";

export const hero = style({
	width: "100%",
	height: "100svh",

	position: "relative",
});

export const image = style({
	"position": "absolute",
	"top": 0,
	"left": 0,

	"width": "calc(100% - 48px)",
	"height": "calc(100% - 64px)",

	"objectFit": "cover",

	"@media": {
		[queries.md]: {
			inset: "unset",
			right: 0,
		},
	},
});

export const copy = style({
	"position": "absolute",
	"top": `calc(${theme.size.header} + 24px)`,
	"right": "24px",

	"display": "flex",
	"flexDirection": "column",
	"alignItems": "start",
	"gap": "8px",

	"color": color(theme.color.primaryBackgroundText),
	"fontSize": "5.5vh",
	"fontFeatureSettings": "'vchw' 1",
	"writingMode": "vertical-rl",

	"@media": {
		[queries.md]: {
			inset: "unset",
			left: "24px",
			bottom: "24px",

			fontSize: "clamp(2rem, 6vw, 5rem)",
			fontFeatureSettings: "'palt' 1",
			writingMode: "unset",
		},
	},
});

export const copyLine = style({
	paddingInline: "8px",

	backgroundColor: color(theme.color.primaryBackground),
});
