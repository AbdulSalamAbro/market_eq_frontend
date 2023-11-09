import { Meta, StoryObj } from "@storybook/react";
import { MenuSection, MenuSectionProps, menuSectionItems } from ".";
import { MenuElementVariant } from "..";

const meta: Meta<typeof MenuSection> = {
  title: "molecules/Menu/components/MenuSection",
  component: MenuSection,
  argTypes: {},
} as Meta;

export default meta;

type Story = StoryObj<typeof MenuSection>;

export const Default: Story = {
  args: {
    menuElementVariant: MenuElementVariant.PRIMARY,
    animateOnHover: true,
    sectionData: {
      title: "Trending Topics",
      items: menuSectionItems,
    },
  },
  decorators: [
    (Story) => (
      <div className="pt-10">
        <Story />
      </div>
    ),
  ],
  render: (props: MenuSectionProps) => <MenuSection {...props} />,
};
