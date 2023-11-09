import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from ".";
import { navLinksData } from "./components";

const meta: Meta<typeof Navbar> = {
  title: "sections/Header/components/Navbar",
  component: Navbar,
  tags: ["molecules", "header", "autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => (
    <Navbar
      links={navLinksData}
      className="absolute top-0 border-white border-opacity-5 border-b-2 bg-white bg-opacity-[8%]"
    />
  ),
  parameters: {
    backgrounds: {
      values: [{ name: "blue", value: "#0E204C" }],
    },
  },
};

export const Dark: Story = {
  render: () => (
    <Navbar links={navLinksData} className="absolute top-0 bg-[#0E204C]" />
  ),
  parameters: {
    backgrounds: {
      values: [
        {
          name: "blue",
          value:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #0E204C",
        },
      ],
    },
  },
};
