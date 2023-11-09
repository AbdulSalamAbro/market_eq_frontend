// story for Button

import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props} />,
};

export const Primary: Story = {
  render: (props) => <Button {...props} intent="primary" />,
};

