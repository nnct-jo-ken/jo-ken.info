import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://jo-ken.net",
	build: {
		format: "file",
	},
	integrations: [compress(), icon(), sitemap()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
