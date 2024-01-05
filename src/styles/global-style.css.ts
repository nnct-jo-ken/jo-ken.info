import { globalStyle } from "@vanilla-extract/css";

import { theme } from "./theme.css";
import { color } from "./utils.css";

globalStyle("html, body", {
	fontFamily: theme.font.sansSerif,
	minHeight: "100dvh",
	color: color(theme.color.text),
	textAlign: "justify",
	fontFeatureSettings: "'palt' 1",
});
