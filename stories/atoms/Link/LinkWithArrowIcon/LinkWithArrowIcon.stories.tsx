import { Meta, StoryObj } from "@storybook/react";
import { IconPositionEnum, LinkWithArrowIcon } from ".";

const meta: Meta<typeof LinkWithArrowIcon> = {
  title: "atoms/Link/LinkWithArrowIcon",
  component: LinkWithArrowIcon,
  args: {
    children: (
      <span className="hover:underline hover:underline-offset-4">
        Read More
      </span>
    ),
    href: "#",
  },
  parameters: {
    backgrounds: {
      values: [{ name: "blue", value: "#0E204C" }],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5">
        <Story />
      </div>
    ),
  ],
  tags: ["atoms", "link", "autodocs"],
  argTypes: {
    iconPosition: {
      control: {
        type: "select",
        options: [IconPositionEnum.LEFT, IconPositionEnum.RIGHT],
      },
    },
    showBiggerIcon: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkWithArrowIcon>;

export const WithRightArrow: Story = {
  args: {
    iconPosition: IconPositionEnum.RIGHT,
    children: (
      <div className="flex flex-row gap-4 shrink-0 items-center">
        <div className="self-start flex flex-col gap-1 shrink-0 items-start">
          <div className="text-xs font-['Noto_Sans'] tracking-[-0.13] text-white">
            Next Insight
          </div>
          <div className="flex flex-row gap-1 items-start">
            <div className="text-xs font-['Noto_Sans'] font-light tracking-[-0.11] text-white">
              22 mins
            </div>
            <div className="text-xs font-['Noto_Sans'] tracking-[-0.11] text-white">
              Read
            </div>
          </div>
        </div>
      </div>
    ),
  },
  render: (props) => <LinkWithArrowIcon {...props} />,
};

export const WithLeftArrow: Story = {
  args: {
    iconPosition: IconPositionEnum.LEFT,
    children: (
      <div className="self-start flex flex-col gap-1 shrink-0 items-start">
        <div className="text-xs font-['Noto_Sans'] font-medium tracking-[-0.13] text-white">
          Previous Insight
        </div>
        <div className="flex flex-row gap-1 items-start">
          <div className="text-xs font-['Noto_Sans'] font-light tracking-[-0.11] text-white">
            18 mins
          </div>
          <div className="text-xs font-['Noto_Sans'] tracking-[-0.11] text-white">
            Read
          </div>
        </div>
      </div>
    ),
  },
  render: (props) => <LinkWithArrowIcon {...props} />,
};

export const WithBiggerIcon: Story = {
  args: {
    showBiggerIcon: true,
    iconPosition: IconPositionEnum.RIGHT,
  },
  render: (props) => <LinkWithArrowIcon {...props} />,
};

export const WithHoverAnimation: Story = {
  args: {
    animateOnHover: true,
    showBiggerIcon: true,
    iconPosition: IconPositionEnum.RIGHT,
  },
  render: (props) => <LinkWithArrowIcon {...props} />,
};
