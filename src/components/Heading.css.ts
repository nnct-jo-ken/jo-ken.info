import { style } from "@vanilla-extract/css";

import { theme } from "~/styles/theme.css";
import { color } from "~/styles/utils.css";

export const heading = style({
	display: "flex",
	justifyContent: "center",

	paddingBottom: "0.5rem",
});

export const text = style({
	"position": "relative",

	"paddingInline": "32px",

	"fontSize": "3rem",
	"fontWeight": "bold",
	"fontFeatureSettings": "'palt' 1",

	"::before": {
		content: "''",

		position: "absolute",
		left: "16px",
		top: "50%",

		width: "3px",
		height: "60%",
		borderRadius: "1.5px",

		transform: "translateY(-50%) rotate(-20deg)",

		backgroundColor: color(theme.color.text),
	},
	"::after": {
		content: "''",

		position: "absolute",
		right: "16px",
		top: "50%",

		width: "3px",
		height: "60%",
		borderRadius: "1.5px",

		transform: "translateY(-50%) rotate(20deg)",

		backgroundColor: color(theme.color.text),
	},
});

export const en = style({
	color: color(theme.color.accentText, 0.5),
	fontSize: "2.5rem",
	fontWeight: "normal",
	fontFamily: theme.font.cursive,

	position: "absolute",
	right: "16px",
	bottom: "-0.55em",
	zIndex: theme.zIndex.back,
});
