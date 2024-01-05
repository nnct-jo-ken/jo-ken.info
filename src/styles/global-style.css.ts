import { globalStyle } from "@vanilla-extract/css";

import { theme } from "./theme.css";
import { color } from "./utils.css";

globalStyle("html, body", {
	fontFamily:
		'"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
	minHeight: "100dvh",
	color: color(theme.color.text),
});
