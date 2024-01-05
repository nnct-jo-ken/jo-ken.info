import { style } from "@vanilla-extract/css";

import { theme } from "~/styles/theme.css";
import { color } from "~/styles/utils.css";

export const footer = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "16px",

	width: "100%",

	paddingBlock: "24px",
	paddingInline: "16px",

	borderTop: `1px solid ${color(theme.color.border)}`,
});
