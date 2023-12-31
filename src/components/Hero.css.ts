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

	"width": "calc(100% - 64px)",
	"height": "calc(100% - 80px)",

	"objectFit": "cover",

	"@media": {
		[queries.lg]: {
			width: "calc(100% - 128px)",
			height: "calc(100% - 80px)",

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
	"lineHeight": "1.2",
	"fontFamily": theme.font.handwriting,
	"fontSize": "5.5vh",
	"fontFeatureSettings": "'vchw' 1",
	"writingMode": "vertical-rl",

	"@media": {
		[queries.lg]: {
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
	"paddingInline": "8px",

	"backgroundColor": color(theme.color.primaryBackground),

	"@media": {
		[queries.lg]: {
			paddingBottom: "0.125em",
		},
	},
});
