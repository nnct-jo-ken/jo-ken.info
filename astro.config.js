import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://jo-ken.info/",
	build: {
		format: "file",
	},
	integrations: [
		compress(),
		icon(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
