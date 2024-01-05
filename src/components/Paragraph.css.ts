import { style } from "@vanilla-extract/css";

import { theme } from "~/styles/theme.css";

export const paragraph = style({
	width: "100%",
	maxWidth: theme.size.prose,

	marginInline: "auto",

	lineHeight: "1.75",

	selectors: {
		["& + &"]: {
			marginTop: "0.75em",
		},
	},
});
