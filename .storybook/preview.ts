import type { Preview } from "@storybook/react";
import "../app/globals.css";

const desktop = {
  name: "desktop",
  styles: { width: "1140px", height: "1366px" },
  type: "desktop",
};
const tablet = {
  name: "tablet",
  styles: { width: "768px", height: "1366px" },
  type: "tablet",
};
const mobile = {
  name: "mobile",
  styles: { width: "375px", height: "568px" },
  type: "mobile",
};

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: { desktop, tablet, mobile },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
