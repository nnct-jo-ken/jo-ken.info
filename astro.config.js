import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file",
	},
	integrations: [compress()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
