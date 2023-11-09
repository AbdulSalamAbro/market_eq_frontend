import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Breadcrumbs } from ".";

const meta: Meta<typeof Breadcrumbs> = {
  title: "molecules/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["atoms", "autodocs"],
  argTypes: {
    pathnames: {
      control: {
        type: "array",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    pathnames: ["About"],
  },
  render: (props) => <Breadcrumbs {...props} />,
};
