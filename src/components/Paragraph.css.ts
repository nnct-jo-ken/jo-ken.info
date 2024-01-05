import { style } from "@vanilla-extract/css";

import { theme } from "~/styles/theme.css";

export const paragraph = style({
	width: "100%",
	maxWidth: theme.size.prose,

	marginInline: "auto",
	marginBlock: "0.75em",

	fontFeatureSettings: "'palt' 1",
	textAlign: "justify",
	lineHeight: "1.75",
});
