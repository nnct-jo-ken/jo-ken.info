import { style } from "@vanilla-extract/css";

export const activity = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "16px",

	marginInline: "auto",

	textAlign: "center",
});

export const group = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

export const term = style({
	fontSize: "1.25rem",
	fontWeight: "bold",
});
