import { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuProps } from "./Menu";

const meta: Meta<MenuProps> = {
  title: "molecules/Menu",
  component: Menu,
  args: {
    intent: "primary",
  },
  argTypes: {
    intent: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<MenuProps>;

export const Primary: Story = {
  render: (props) => <Menu {...props} />,
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
  },
  decorators: [
    (Story) => (
      <div className="h-[518px]">
        <Story />
      </div>
    ),
  ],
  render: (props) => <Menu {...props} />,
};
