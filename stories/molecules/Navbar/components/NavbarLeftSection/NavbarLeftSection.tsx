import { ComponentProps, FC } from "react";
import { Logo } from "@/stories/atoms";
import { NavLinks } from "./components";
import { LinkDataType } from "./NavbarLeftSections.types";

export interface NavbarLeftSectionProps extends ComponentProps<"div"> {
  links: ReadonlyArray<LinkDataType>;
  isFooter?: boolean;
}

export const NavbarLeftSection: FC<NavbarLeftSectionProps> = ({ links, isFooter }) => {
  return (
    <div className="flex justify-start items-center">
      <Logo isFooter={isFooter}/>
      <NavLinks links={links} isFooter={isFooter}/>
    </div>
  );
};
