import { ComponentProps, FC } from "react";
import { MenuElement, MenuElementVariant } from "..";
import { MenuSectionTitle, SectionDataType } from ".";
import { IconPositionEnum } from "@/stories/atoms";

export type MenuSectionProps = ComponentProps<"li"> & {
  menuElementVariant: MenuElementVariant;
  sectionData: SectionDataType;
  animateOnHover?: boolean;
  iconPosition?: IconPositionEnum;
  showBiggerIcon: boolean;
};

export const MenuSection: FC<MenuSectionProps> = ({
  menuElementVariant,
  sectionData,
  animateOnHover,
  iconPosition,
  showBiggerIcon,
}) => {
  const { title, items } = sectionData;

  return (
    <>
      <MenuSectionTitle title={title} />
      <menu className="">
        {items.map(({ label, href }) => {
          return (
            <MenuElement
              iconPosition={iconPosition}
              showBiggerIcon={showBiggerIcon}
              label={label}
              menuElementVariant={menuElementVariant}
              href={href}
              animateOnHover={animateOnHover}
            />
          );
        })}
      </menu>
    </>
  );
};
