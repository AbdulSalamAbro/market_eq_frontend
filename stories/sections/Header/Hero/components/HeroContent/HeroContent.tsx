import { FC, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";
import {
  IconPositionEnum,
  LinkWithArrowIcon,
  LinkWithArrowIconProps,
} from "@/stories/atoms";
import { HeroContentVariant } from "./HeroContent.types";
import { SectionDataType, MenuElementVariant } from "@/stories/molecules";
import { HeroMenu, TextBlock } from "..";
import { TextBlockProps } from "./components";

export const heroContent = cva("", {
  variants: {
    intent: {
      [HeroContentVariant.FIRST]: [
        "mt-auto",
        "pt-[242px]",
        "tablet:pt-[42px]",
        "tablet:w-full",
        "desktop:w-[1000px]",
        "pb-10",
        "px-5",
        "tablet:pr-[216px]",
        "tablet:pl-10",
        "desktop:pl-[100px]",
        "desktop:pr-0",
        "desktop:pt-[180px]",
        "tracking-[0] leading-[44.9px] break-normal w-[345px]",
      ],
      [HeroContentVariant.SECOND]: [
        "mt-auto",
        "py-10",
        "px-5",
        "tablet:p-10",
        "desktop:p-[100px]",
      ],
      [HeroContentVariant.THIRD]: [
        "py-10",
        "pb-[16px]",
        "pt-[52px]",
        "tablet:pt-0",
        "tablet:pb-10",
        "desktop:pb-[100px]",
        "desktop:pt-4",
        "px-5",
        "tablet:pl-10",
        "desktop:px-[100px]",
        "flex",
        "flex-col",
        "tablet:flex-row",
        "items-start",
        "tablet:items-end",
        "tablet:justify-start",
        "tablet:w-full",
        "tablet:h-full",
        "gap-10",
        "desktop:gap-5",
      ],
      [HeroContentVariant.FOURTH]: [
        "mt-auto",
        "py-10",
        "pb-[85px]",
        "px-5",
        "tablet:pr-[216px]",
        "tablet:pl-10",
        "desktop:px-[100px]",
        "desktop:pb-[120px]",
      ],
    },
  },
});

export type HeroContentProps = ComponentProps<"section"> &
  VariantProps<typeof heroContent> &
  TextBlockProps &
  LinkWithArrowIconProps & {
    showLinkWithArrowIcon?: boolean;
    showMenu?: boolean;
    menuElementVariant?: MenuElementVariant;
    sectionData?: SectionDataType;
    showMeta?: boolean;
    timeToRead?: number;
    date?: string;
  };

export const HeroContent: FC<HeroContentProps> = ({
  intent,
  title,
  description,
  buttonTxt,
  href,
  showLinkWithArrowIcon,
  showMenu,
  menuElementVariant,
  sectionData,
  showMeta,
  timeToRead,
  date,
  className,
}) => {
  const showHeroMenu = showMenu && menuElementVariant && sectionData;

  return (
    <section className={twMerge(heroContent({ intent }), className)} id="fist-sec">
      <TextBlock
        title={title}
        description={description}
        intent={intent}
        showMeta={showMeta}
        timeToRead={timeToRead}
        date={date}
      />
      {showLinkWithArrowIcon && (
        <LinkWithArrowIcon
          href={href}
          iconPosition={IconPositionEnum.RIGHT}
          showBiggerIcon
          className="hover:underline hover:underline-offset-4 mt-[39px] desktop:mt-[85px] decoration-[#306CFE] tablet:mt-[40px]"
        >
          <span className="text-[15.5px] desktop:text-[21px] group-hover:text-[#306CFE]">
            {buttonTxt}
          </span>
        </LinkWithArrowIcon>
      )}
      {showHeroMenu && <HeroMenu sectionData={sectionData} />}
    </section>
  );
};
