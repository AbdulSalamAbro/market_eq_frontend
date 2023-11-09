import { Meta, StoryObj } from "@storybook/react";
import { HeroMenu } from "./HeroMenu";
import { menuSectionItems } from "@/stories/molecules/Menu/components/MenuSection/MenuSection.consts";

const meta: Meta<typeof HeroMenu> = {
  title: "sections/Header/components/HeroMenu",
  component: HeroMenu,
  decorators: [
    (Story) => (
      <div className="pt-10">
        <Story />
      </div>
    ),
  ],
  args: {
    sectionData: {
      title: "Trending Topics",
      items: menuSectionItems,
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HeroMenu>;

export const Default: Story = {
  render: (props) => <HeroMenu {...props} />,
};
