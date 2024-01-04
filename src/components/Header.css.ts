import { style } from "@vanilla-extract/css";

import { vars } from "~/styles/theme.css";
import { color } from "~/styles/utils.css";

export const header = style({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: vars.zIndex.header,

	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	width: "100%",
	height: vars.size.header,

	paddingInline: "16px",

	backgroundColor: color(vars.color.background, 0.95),
	backdropFilter: "blur(10px)",
});

export const brand = style({
	fontSize: "3rem",
});
