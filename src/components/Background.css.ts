import { style } from "@vanilla-extract/css";

export const background = style({
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: -1,

	width: "100%",
	height: "100%",

	objectFit: "cover",
});
