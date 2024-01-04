import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file",
	},
	integrations: [compress(), icon()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
