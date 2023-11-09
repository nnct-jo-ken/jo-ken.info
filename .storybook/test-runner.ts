import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";
import { checkA11y, configureAxe, injectAxe } from "axe-playwright";

const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page, context) {
    const storyContext = await getStoryContext(page, context);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (storyContext.parameters?.a11y?.disable as boolean) {
      return;
    }

    await configureAxe(page, {
      rules: [
        {
          id: "color-contrast",
          enabled: false,
        },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        ...(storyContext.parameters?.a11y?.config?.rules ?? []),
      ],
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};

export default a11yConfig;
