import * as path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import base from "@shun-shobon/eslint-config-base/flat";
import next from "@shun-shobon/eslint-config-next/flat";
import react from "@shun-shobon/eslint-config-react/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...base,
  ...react,
  ...next,
  ...compat.extends("plugin:storybook/recommended"),
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    ignores: [".next/", "storybook-static/", "out/"],
  },
];
