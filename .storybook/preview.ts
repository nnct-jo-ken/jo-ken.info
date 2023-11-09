import "#src/styles/global.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(?:background|color)$/iu,
        date: /Date$/u,
      },
    },
  },
};

export default preview;
