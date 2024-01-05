import { shun_shobon } from "@shun-shobon/eslint-config";

export default shun_shobon(
	{},
	{
		files: ["**/*.astro"],
		languageOptions: {
			globals: {
				Astro: false,
				Fragment: false,
			},
		},
	},
);
