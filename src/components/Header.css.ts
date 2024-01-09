import { style } from "@vanilla-extract/css";

import { core, theme } from "~/styles/theme.css";
import { color } from "~/styles/utils.css";

export const header = style({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: theme.zIndex.header,

	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	width: "100%",
	height: theme.size.header,

	paddingInline: "16px",

	backgroundColor: color(theme.color.background, 0.75),
	backdropFilter: "blur(10px)",
	WebkitBackdropFilter: "blur(10px)",

	boxShadow: `0 0 8px ${color(core.color.black, 0.2)}`,
});

export const brand = style({
	fontSize: "3rem",
});
