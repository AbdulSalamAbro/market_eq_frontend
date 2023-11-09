import type { Meta, StoryObj } from "@storybook/react";
import searchIcon from "@/stories/assets/icons/Search.svg";

import { IconBtn } from ".";

const meta: Meta<typeof IconBtn> = {
  title: "atoms/Button/IconButton",
  component: IconBtn,
  args: {
    svg: searchIcon,
    alt: "search button",
    label: "Search",
    className: "h-[18.707px] w-[18.707px] gap-2.5 flex items-center",
    labelClassName: "hidden text-sm desktop:inline",
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "blue", value: "#0E204C" },
      ],
    },
  },
  tags: ["atoms", "button", "autodocs"],
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IconBtn>;

export const Default: Story = {
  render: (props) => <IconBtn {...props} />,
};
