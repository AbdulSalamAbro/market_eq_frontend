import { FC } from "react";
import { MenuElementDivider } from "../MenuElementDivider";

export type MenuSectionTitleProps = {
  title: string;
};

export const MenuSectionTitle: FC<MenuSectionTitleProps> = ({ title }) => {
  return (
    <>
      <h2 className="text-sm desktop:text-lg font-['Inter'] font-semibold capitalize text-white self-start pb-[12px] desktop:pb-[14px] w-full">
        {title}
      </h2>
      <MenuElementDivider />
    </>
  );
};
