import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
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
		tailwind({
			applyBaseStyles: false,
		}),
		compress(),
		icon(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		}),
	],
});
