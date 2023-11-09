import { ComponentProps, FC } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { IconPositionEnum, LinkWithArrowIcon } from "@/stories/atoms";
import { twMerge } from "tailwind-merge";
import { MenuElementVariant } from "../MenuElement/MenuElement.types";
import { MenuElementDivider } from "..";

export const menuElement = cva("w-full cursor-pointer", {
  variants: {
    menuElementVariant: {
      [MenuElementVariant.PRIMARY]: [],
      [MenuElementVariant.SECONDARY]: [],
    },
  },
});

export type MenuElementProps = ComponentProps<"li"> &
  VariantProps<typeof menuElement> & {
    label: string;
    href: string;
    menuElementVariant: MenuElementVariant;
    animateOnHover?: boolean;
    iconPosition?: IconPositionEnum;
    showBiggerIcon: boolean;
  };

export const MenuElement: FC<MenuElementProps> = ({
  label,
  href,
  menuElementVariant,
  animateOnHover,
  iconPosition,
  showBiggerIcon,
}) => {
  return (
    <li className={twMerge(menuElement({ menuElementVariant }))}>
      <LinkWithArrowIcon
        href={href}
        className="!mt-[13.7px] !font-light !text-xs desktop:!text-base capitalize !font-['Inter'] h-full"
        iconClassName="w-[14px] desktop:w-[15.5px]"
        animateOnHover={animateOnHover}
        iconPosition={iconPosition}
        showBiggerIcon={showBiggerIcon}
      >
        {" "}
        {label}
      </LinkWithArrowIcon>
      <MenuElementDivider className="mt-[11.7px]" />
    </li>
  );
};
