import { StoryObj, Meta } from "@storybook/react";
import { Hero } from ".";
import { tesla, meeting, server, vrGoggles } from "@/stories/assets/pictures";
import { HeroContentVariant } from "./components/HeroContent/HeroContent.types";
import { MenuElementVariant, menuSectionItems } from "@/stories/molecules";
import { OverlayVariant } from "@/stories/atoms";

const meta: Meta<typeof Hero> = {
  title: "sections/Header/Hero Image",
  component: Hero,
  tags: ["molecules", "header", "autodocs"],
  args: {
    image: tesla,
    title: "Artificial Intelligence",
    description: "What's behind tesla's latest self-driving vehicle updates",
    href: "#",
    intent: HeroContentVariant.FIRST,
  },
  decorators: [
    (Story) => (
      <div className="h-[617px] tablet:h-[372px] desktop:h-[704px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const First: Story = {
  args: {
    showLinkWithArrowIcon: true,
  },
  render: (props) => <Hero {...props} />,
};

export const Second: Story = {
  args: {
    intent: HeroContentVariant.SECOND,
    image: meeting,
    title: "about us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est",
    pathnames: ["About"],
    showBreadcrumbs: true,
  },
  decorators: [
    (Story) => (
      <div className="h-[510.5px] tablet:h-[510.5px] desktop:h-[744px]">
        <Story />
      </div>
    ),
  ],
  render: (props) => <Hero {...props} />,
};

export const Third: Story = {
  args: {
    intent: HeroContentVariant.THIRD,
    image: vrGoggles,
    title: "insights",
    description:
      "A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.",
    pathnames: ["Insights"],
    showBreadcrumbs: true,
    showMenu: true,
    menuElementVariant: MenuElementVariant.PRIMARY,
    sectionData: {
      title: "Trending Topics",
      items: menuSectionItems,
    },
    overlayVariant: OverlayVariant.SECOND,
    className: "tablet:!flex !gap-10",
  },
  decorators: [
    (Story) => (
      <div className="h-[746px] tablet:h-[447px] desktop:h-[736px]">
        <Story />
      </div>
    ),
  ],
  render: (props) => <Hero {...props} />,
};

export const Fourth: Story = {
  args: {
    intent: HeroContentVariant.FOURTH,
    image: server,
    title: "featured insight",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pathnames: ["Insights", "Big Data"],
    showBreadcrumbs: true,
    overlayVariant: OverlayVariant.SECOND,
    showMeta: true,
    timeToRead: 15,
    date: "January 23, 2023",
    showHeroBottom: true,
    previousHref: "#",
    nextHref: "#",
    previousMin: 12,
    nextMin: 21,
  },
  decorators: [
    (Story) => (
      <div className="h-[472px] tablet:h-[427px] desktop:h-[736px]">
        <Story />
      </div>
    ),
  ],
  render: (props) => <Hero {...props} />,
};
